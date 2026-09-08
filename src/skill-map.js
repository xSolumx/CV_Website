import data from './skill-map-data.js';

// CSS owns layout. One measured SVG layer, no simulation or continuous animation.
export function mount(root) {
  if (root.classList.contains('skill-ready')) return;
  const board = root.querySelector('.skill-board');
  const svg = board.querySelector('.skill-lines');
  const buttons = [...board.querySelectorAll('[data-node]')];
  const elements = new Map(buttons.map(el => [el.dataset.node, el]));
  elements.set('engineering', board.querySelector('.skill-origin'));
  const nodes = new Map(data.nodes.map(node => [node.id, node]));
  const areas = new Map(data.branches.flatMap(b => [b.id,...b.rows.flat()].map(id => [id,b.id])));
  const notes = new Map(data.branches.map(b => [b.id,board.querySelector(`#skill-note-${b.id}`)]));
  const adjacent = new Map([...elements.keys()].map(id => [id,[]]));
  data.edges.forEach(edge => {
    adjacent.get(edge[0]).push({id:edge[1],edge});
    adjacent.get(edge[1]).push({id:edge[0],edge});
  });
  const narrow = matchMedia('(max-width:900px)');
  const announcement = root.querySelector('.skill-announcement');
  let selected = null, frame = 0, visible = true;
  const paths = data.edges.map(([from,to,relation]) => {
    const path = document.createElementNS('http://www.w3.org/2000/svg','path');
    path.dataset.from=from; path.dataset.to=to; path.dataset.relation=relation;
    svg.append(path); return path;
  });

  function draw() {
    frame=0;
    if (!root.open || !visible || document.hidden) return;
    const rect=board.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const boxes=new Map([...elements].map(([id,element]) => {
      const r=element.getBoundingClientRect();
      return [id,{x:r.left-rect.left,y:r.top-rect.top,w:r.width,h:r.height}];
    }));
    const curves=data.edges.map(([from,to,kind]) => {
      const a=boxes.get(from), b=boxes.get(to);
      const ax=a.x+a.w/2, ay=a.y+a.h/2, bx=b.x+b.w/2, by=b.y+b.h/2;
      // Cross-area relationships use the outside rail only on selection.
      // Text links also connect these nodes without tracing a long path.
      if (kind==='bridge') return `M${a.x},${ay}H3V${by}H${b.x}`;
      if (kind==='area') {
        if(narrow.matches || b.y>a.y+a.h+150) return `M${ax},${a.y+a.h}V${a.y+a.h+14}H3V${by}H${b.x}`;
        const mid=(a.y+a.h+b.y)/2;
        return `M${ax},${a.y+a.h}V${mid}H${bx}V${b.y}`;
      }
      if (kind==='tool') {
        const mid=(a.y+a.h+b.y)/2;
        return `M${ax},${a.y+a.h}V${mid}H${bx}V${b.y}`;
      }
      // Route through gutters, never through a label.
      const sameColumn=Math.abs(ax-bx)<20;
      if(sameColumn && b.y<a.y+a.h+35 && b.y>a.y) return `M${ax},${a.y+a.h}V${b.y}`;
      const useLeft=bx<=ax;
      const rail=useLeft?Math.min(a.x,b.x)-9:Math.max(a.x+a.w,b.x+b.w)+9;
      const start=useLeft?a.x:a.x+a.w, end=useLeft?b.x:b.x+b.w;
      return `M${start},${ay}H${rail}V${by}H${end}`;
    });
    svg.setAttribute('viewBox',`0 0 ${rect.width} ${rect.height}`);
    curves.forEach((curve,i) => paths[i].setAttribute('d',curve));
  }
  function schedule() {
    if (!frame && root.open && visible && !document.hidden) frame=requestAnimationFrame(draw);
  }
  function pause() {if(frame)cancelAnimationFrame(frame);frame=0;}
  function positionNotes() {
    notes.forEach((note,area) => {
      const branch=note.closest('.skill-branch');
      const active=selected && areas.get(selected)===area && elements.get(selected);
      if(narrow.matches && active) (active.closest('.skill-row') || active).after(note);
      else branch.querySelector('.skill-work-link').before(note);
    });
  }
  function select(id) {
    selected=id;
    const connections=id?adjacent.get(id):[];
    const related=new Set(connections.map(item=>item.id));
    buttons.forEach(button => {
      const own=button.dataset.node;
      button.setAttribute('aria-pressed',String(own===id));
      button.classList.toggle('connected',related.has(own));
    });
    board.classList.toggle('has-selection',Boolean(id));
    paths.forEach(path => path.classList.toggle('active',path.dataset.from===id || path.dataset.to===id));
    notes.forEach((note,area) => {
      const active=id && areas.get(id)===area;
      note.hidden=!active;
      if (!active) return;
      const node=nodes.get(id);
      note.querySelector('strong').textContent=node.label;
      note.querySelector('.skill-context').textContent=node.context;
      note.querySelector('.skill-description').textContent=node.detail;
      const source=note.querySelector('.skill-source');
      source.hidden=!node.source;
      if(node.source)source.href=node.source;else source.removeAttribute('href');
      const container=note.querySelector('.skill-related');
      container.replaceChildren();
      const label=document.createElement('span');label.className='skill-related-label';label.textContent='Connected with';container.append(label);
      connections.forEach(({id:other,edge}) => {
        if(other==='engineering')return;
        const button=document.createElement('button');
        button.type='button';button.dataset.jump=other;
        button.textContent=nodes.get(other).label;
        if(edge[2]==='bridge') {
          button.className='skill-bridge-link';
          button.title=edge[3];
          button.setAttribute('aria-label',nodes.get(other).label+'. '+edge[3]);
        }
        container.append(button);
      });
    });
    positionNotes();schedule();
    announcement.textContent=id?`${nodes.get(id).label}. ${nodes.get(id).context}. ${nodes.get(id).detail}`:'Skill selection cleared.';
  }
  function dismiss() {const previous=elements.get(selected);select(null);previous?.focus({preventScroll:true});}
  board.addEventListener('click',event => {
    if(event.target.closest('.skill-dismiss')) {dismiss();return;}
    const jump=event.target.closest('[data-jump]');
    if(jump) {
      const id=jump.dataset.jump;select(id);
      elements.get(id).focus({preventScroll:true});
      elements.get(id).scrollIntoView({block:'center',behavior:'instant'});return;
    }
    const button=event.target.closest('[data-node]');
    if(button)select(selected===button.dataset.node?null:button.dataset.node);
  });
  board.addEventListener('keydown',event => {if(event.key==='Escape' && selected){event.preventDefault();dismiss();}});
  buttons.forEach(button => button.disabled=false);
  new ResizeObserver(schedule).observe(board);
  narrow.addEventListener('change',() => {positionNotes();schedule();});
  root.addEventListener('toggle',() => root.open?schedule():pause());
  new IntersectionObserver(entries => {
    visible=entries[0].isIntersecting;if(visible)schedule();else pause();
  }).observe(board);
  document.addEventListener('visibilitychange',() => document.hidden?pause():schedule());
  draw();root.classList.add('skill-ready');
}
