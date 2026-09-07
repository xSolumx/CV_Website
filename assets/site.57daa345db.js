(() => {
  'use strict';
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  if (button && nav) {
    const close = () => { nav.classList.remove('open'); button.setAttribute('aria-expanded', 'false'); };
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);
    });
    nav.addEventListener('click', (event) => { if (event.target.closest('a')) close(); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && nav.classList.contains('open')) { close(); button.focus(); } });
    button.hidden = false;
    document.documentElement.classList.add('enhanced-nav');
  }
  document.querySelector('#year').textContent = String(new Date().getFullYear());

  // Curated, source-backed relationships: project -> implementation area.
  const nodes = [
    {id:'equipment',label:'Equipment platform',x:17,y:18,kind:'project',description:'Catalogue, administration, reporting and release verification.',url:'#equipment'},
    {id:'products',label:'Product platform',x:17,y:50,kind:'project',description:'Product publishing, staff permissions, media processing and enquiry intake.',url:'#products'},
    {id:'research',label:'ML research',x:17,y:82,kind:'project',description:'Recurrent models, GPU kernels and numerical validation.',url:'#research'},
    {id:'web',label:'React / TypeScript',x:50,y:10,description:'Public interfaces and administration workflows in the business applications.'},
    {id:'firebase',label:'Firebase services',x:50,y:30,description:'Authentication, Firestore data and Cloud Functions backend handlers.'},
    {id:'verification',label:'Tests / verification',x:50,y:50,description:'Access-rule tests, model-reference comparisons and artifact checks.'},
    {id:'models',label:'PyTorch / JAX',x:50,y:70,description:'Recurrent model layers, state handling and differentiable execution.'},
    {id:'gpu',label:'CUDA / Triton',x:50,y:90,description:'Custom scan kernels and forward/backward integration.'},
    {id:'analytics',label:'Analytics pipeline',x:83,y:18,description:'Batched events, retry handling and scheduled reporting aggregates.',url:'#equipment'},
    {id:'access',label:'Staff permissions',x:83,y:50,description:'Account provisioning, role claims and backend permission checks.',url:'#products'},
    {id:'gradients',label:'Gradient validation',x:83,y:82,description:'Reference checks for outputs and training gradients, including numerical edge cases.',url:'https://github.com/xSolumx/AI_Culture_Mind/blob/main/SSM-Models/pure_spin_ssm_v1_2/test_raw_cuda_training.py'}
  ];
  const edges = [['equipment','web'],['equipment','firebase'],['equipment','verification'],['equipment','analytics'],['products','web'],['products','firebase'],['products','verification'],['products','access'],['research','verification'],['research','models'],['research','gpu'],['research','gradients']];
  const atlas = document.querySelector('#technical-map');
  const host = document.querySelector('#map-nodes');
  const svg = document.querySelector('#map-lines');
  const info = document.querySelector('#map-selection');
  let ready = false;
  const element = (tag, text) => { const node = document.createElement(tag); if (text) node.textContent = text; return node; };
  const select = (id) => {
    const selected = nodes.find(node => node.id === id);
    const related = edges.filter(edge => edge.includes(id)).map(edge => edge.find(key => key !== id));
    host.querySelectorAll('button').forEach(node => {
      node.setAttribute('aria-pressed', String(node.dataset.id === id));
      node.classList.toggle('connected', related.includes(node.dataset.id));
      node.classList.toggle('dim', node.dataset.id !== id && !related.includes(node.dataset.id));
    });
    svg.querySelectorAll('line').forEach(line => line.classList.toggle('active', line.dataset.from === id || line.dataset.to === id));
    info.replaceChildren(element('h3', selected.label), element('p', selected.description), element('p', 'Connected to:'));
    const list = element('ul');
    related.forEach(key => list.append(element('li', nodes.find(node => node.id === key).label)));
    info.append(list);
    if (selected.url) { const a = element('a', 'View related work ↗'); a.href = selected.url; info.append(a); }
  };
  const setup = () => {
    if (ready || !host || !svg || !info) return;
    edges.forEach(([from,to]) => {
      const a = nodes.find(node => node.id === from), b = nodes.find(node => node.id === to);
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', String(a.x * 7.6)); line.setAttribute('y1', String(a.y * 4.3));
      line.setAttribute('x2', String(b.x * 7.6)); line.setAttribute('y2', String(b.y * 4.3));
      line.dataset.from = from; line.dataset.to = to; svg.append(line);
    });
    nodes.forEach(node => {
      const b = element('button', node.label); b.type = 'button'; b.className = 'map-node' + (node.kind === 'project' ? ' project-node' : '');
      b.dataset.id = node.id; b.style.left = `${node.x}%`; b.style.top = `${node.y}%`;
      b.addEventListener('click', () => select(node.id)); host.append(b);
    });
    ready = true; select('equipment');
  };
  atlas?.addEventListener('toggle', () => { if (atlas.open) setup(); });
  if (atlas?.open) setup();
  // Deliberately no origin-wide cache clearing or service-worker removal:
  // this project shares its GitHub Pages origin with the separate root site.
})();
