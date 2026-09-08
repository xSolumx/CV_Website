import data from './skill-map-data.js';

// The HTML/CSS owns the layout. No force simulation, animation loop or scroll handler.
export function mount(root) {
  const board = root.querySelector('.skill-board');
  const svg = root.querySelector('.skill-lines');
  const buttons = [...board.querySelectorAll('[data-node]')];
  const elements = new Map(buttons.map(button => [button.dataset.node, button]));
  elements.set('engineering', board.querySelector('.skill-origin'));
  const nodes = new Map(data.nodes.map(node => [node.id, node]));
  const narrow = matchMedia('(max-width:900px)');
  const notes = new Map(data.branches.map(branch => [branch.id, board.querySelector(`[data-area="${branch.id}"] .skill-note`)]));
  let selected = null, frame = 0, visible = true;
  const paths = data.edges.map(([from, to, relation]) => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.dataset.from = from; path.dataset.to = to; path.dataset.relation = relation;
    svg.append(path); return path;
  });

  function draw() {
    frame = 0;
    const rect = board.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    // Batch layout reads before writing the path geometry.
    const boxes = new Map([...elements].map(([id, element]) => {
      const r = element.getBoundingClientRect();
      return [id, {x:r.left-rect.left, y:r.top-rect.top, w:r.width, h:r.height}];
    }));
    const curves = data.edges.map(([from, to, relation]) => {
      const a = boxes.get(from), b = boxes.get(to);
      const ax = a.x+a.w/2, ay = a.y+a.h, bx = b.x+b.w/2;
      if (relation === 'area' && narrow.matches) {
        return `M${ax},${ay}V${ay+14}H5V${b.y+b.h/2}H${b.x}`;
      }
      if (relation === 'application') {
        // Each capability is a sibling on a tool's branch, not a prerequisite chain.
        const rail = b.x-10;
        return `M${a.x},${a.y+a.h/2}H${rail}V${b.y+b.h/2}H${b.x}`;
      }
      if (relation === 'practice') {
        const left = a.x+a.w/2 < bx;
        const x = left ? a.x-10 : a.x+a.w+10;
        const sx = left ? a.x : a.x+a.w;
        const tx = left ? b.x : b.x+b.w;
        return `M${sx},${a.y+a.h/2}H${x}V${b.y+b.h/2}H${tx}`;
      }
      const mid = (ay+b.y)/2;
      return `M${ax},${ay}C${ax},${mid} ${bx},${mid} ${bx},${b.y}`;
    });
    svg.setAttribute('viewBox', `0 0 ${rect.width} ${rect.height}`);
    curves.forEach((curve,index) => paths[index].setAttribute('d',curve));
  }
  function schedule() {
    if (frame || !root.open || !visible || document.hidden) return;
    frame = requestAnimationFrame(draw);
  }
  function pause() { if (frame) cancelAnimationFrame(frame); frame = 0; }

  function positionNotes() {
    notes.forEach((note, area) => {
      const branch = note.closest('.skill-branch');
      const active = selected && elements.get(selected);
      if (narrow.matches && active?.closest('.skill-branch') === branch) {
        (active.closest('.skill-row') || active).after(note);
      } else branch.append(note);
    });
  }
  function select(id) {
    selected = id;
    const related = new Set(id ? data.edges.filter(edge => edge[0] === id || edge[1] === id).flatMap(edge => edge.slice(0,2)) : []);
    buttons.forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.node === id));
      button.classList.toggle('connected', related.has(button.dataset.node) && button.dataset.node !== id);
    });
    paths.forEach(path => path.classList.toggle('active', path.dataset.from === id || path.dataset.to === id));
    notes.forEach((note, area) => {
      const active = id && elements.get(id)?.closest('.skill-branch').dataset.area === area;
      const node = nodes.get(active ? id : area);
      note.querySelector('strong').textContent = node.label;
      note.querySelector('p').textContent = node.detail;
      note.querySelector('.skill-dismiss').hidden = !active;
      note.classList.toggle('selected-note', Boolean(active));
      const context = note.querySelector('.skill-related');
      context.textContent = active ? 'Connected with: '+[...related].filter(key => key !== id).map(key => nodes.get(key)?.label || 'Software engineering').join(' · ') : '';
    });
    positionNotes(); schedule();
  }
  board.addEventListener('click', event => {
    const dismiss = event.target.closest('.skill-dismiss');
    if (dismiss) {
      const previous = elements.get(selected); select(null); previous?.focus({preventScroll:true}); return;
    }
    const button = event.target.closest('[data-node]');
    if (button) select(selected === button.dataset.node ? null : button.dataset.node);
  });
  buttons.forEach(button => button.disabled = false);
  new ResizeObserver(schedule).observe(board);
  narrow.addEventListener('change', () => {positionNotes(); schedule();});
  root.addEventListener('toggle', () => root.open ? schedule() : pause());
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting; if (visible) schedule(); else pause();
  }).observe(board);
  document.addEventListener('visibilitychange', () => document.hidden ? pause() : schedule());
  draw(); root.classList.add('skill-ready');
}
