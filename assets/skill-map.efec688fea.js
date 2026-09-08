const data = {"description":"Selected capabilities grounded in reviewed work and user-shared research context. Not an inventory of every repository.","nodes":[{"id":"web","label":"Web applications","detail":"Product catalogues, staff administration and customer enquiry workflows."},{"id":"react","label":"React & TypeScript","detail":"Typed interfaces, reusable components and product-administration tools in the business applications."},{"id":"firebase","label":"Firebase","detail":"Authentication, Firestore and Cloud Functions behind catalogue and enquiry workflows."},{"id":"rendering","label":"Server rendering","detail":"Server-rendered content and product pages, with route prefetching in the business applications."},{"id":"permissions","label":"Authentication","detail":"Firebase Authentication for signing in staff and protecting administration workflows."},{"id":"releases","label":"Testing & releases","detail":"GitHub Actions, access-rule tests, release manifests and asset-integrity checks."},{"id":"ml","label":"ML & research systems","detail":"Independent work on recurrent models, GPU execution and numerical verification."},{"id":"torch","label":"PyTorch & JAX","detail":"Model implementation and differentiable execution with PyTorch and JAX/Flax."},{"id":"cuda","label":"C++ / CUDA / Triton","detail":"Native extensions and GPU kernels integrated with model training code."},{"id":"models","label":"Recurrent models","detail":"Structured memory, state-space models, parallel scans and equivariant operators."},{"id":"kernels","label":"GPU kernels","detail":"Custom forward/backward implementations for recurrent scans and autograd integration."},{"id":"validation","label":"Numerical validation","detail":"Reference outputs, gradient checks, streaming equivalence, controlled benchmarks and exact-arithmetic research checks."},{"id":"applications","label":"Java & .NET applications","detail":"Java server plugins, C# database coursework and a WPF desktop prototype."},{"id":"java","label":"Java","detail":"Event-driven plugin development using Paper/Bukkit APIs and persistent item metadata."},{"id":"csharp","label":"C# / .NET / SQL","detail":"WinForms coursework with ADO.NET, stored procedures and relational data access."},{"id":"plugins","label":"Server plugins","detail":"Custom item behaviour, inventory interfaces and resource-pack JSON parsing."},{"id":"desktop","label":"Desktop applications","detail":"A student/module management application and a WPF process-execution prototype."},{"id":"integration","label":"API integration","detail":"Paper/Bukkit server APIs in Java plugins and ADO.NET database access in C# coursework."},{"id":"spreadsheets","label":"Spreadsheet tools","detail":"Typed spreadsheet import, validation and export for managing product catalogue data."},{"id":"roles","label":"Staff role claims","detail":"Firebase Auth custom claims for staff provisioning and backend permission checks."},{"id":"media","label":"Media processing","detail":"Image compression, generated thumbnails and asset tracking in product-publishing workflows."},{"id":"enquiries","label":"Enquiry validation","detail":"Validated, rate-limited customer enquiry intake with database persistence."},{"id":"scans","label":"Parallel scans","detail":"Parallel scan implementations for recurrent state updates, checked against sequential reference execution."},{"id":"autograd","label":"Custom autograd","detail":"Custom forward/backward integration connecting GPU scan kernels to PyTorch training."},{"id":"streaming","label":"Streaming checks","detail":"Checks that chunked or streaming state updates agree with full-sequence reference execution."},{"id":"gradients","label":"Gradient checks","detail":"Numerical and reference comparisons for training gradients, including edge cases."},{"id":"events","label":"Event handling","detail":"Paper/Bukkit event handlers for custom item behaviour and inventory interactions."},{"id":"procedures","label":"Stored procedures","detail":"SQL Server stored-procedure-based CRUD through ADO.NET in the WinForms coursework."},{"id":"metadata","label":"Persistent metadata","detail":"Persistent item metadata and resource-pack JSON parsing in Java plugin implementations."},{"id":"processes","label":"Process execution","detail":"Asynchronous process execution and log output in the WPF desktop utility prototype."}],"edges":[["engineering","web","area"],["web","react","tool"],["react","rendering","application"],["react","spreadsheets","application"],["react","media","application"],["react","releases","practice"],["web","firebase","tool"],["firebase","permissions","application"],["firebase","roles","application"],["firebase","enquiries","application"],["firebase","releases","practice"],["engineering","ml","area"],["ml","torch","tool"],["torch","models","application"],["torch","scans","application"],["torch","streaming","application"],["torch","validation","practice"],["ml","cuda","tool"],["cuda","kernels","application"],["cuda","autograd","application"],["cuda","gradients","application"],["cuda","validation","practice"],["engineering","applications","area"],["applications","java","tool"],["java","plugins","application"],["java","events","application"],["java","metadata","application"],["java","integration","practice"],["applications","csharp","tool"],["csharp","desktop","application"],["csharp","procedures","application"],["csharp","processes","application"],["csharp","integration","practice"]],"branches":[{"id":"web","label":"Web applications","href":"#work","link":"View application work","rows":[["react","firebase"],["rendering","permissions"],["spreadsheets","roles"],["media","enquiries"],["releases"]]},{"id":"ml","label":"ML & research systems","href":"#research","link":"View research work","rows":[["torch","cuda"],["models","kernels"],["scans","autograd"],["streaming","gradients"],["validation"]]},{"id":"applications","label":"Java & .NET applications","href":"#more-projects","link":"View these projects","rows":[["java","csharp"],["plugins","desktop"],["events","procedures"],["metadata","processes"],["integration"]]}]};

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
