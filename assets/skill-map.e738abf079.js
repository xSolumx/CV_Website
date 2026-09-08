const data = {"description":"Selected capabilities grounded in reviewed work and user-shared research context. Not an inventory of every repository.","nodes":[{"id":"web","label":"Web applications","detail":"Product catalogues, staff administration and customer enquiry workflows."},{"id":"react","label":"React & TypeScript","detail":"Typed interfaces, reusable components and product-administration tools in the business applications."},{"id":"firebase","label":"Firebase","detail":"Authentication, Firestore and Cloud Functions behind catalogue and enquiry workflows."},{"id":"rendering","label":"Rendering & data","detail":"Server-rendered pages, route prefetching, spreadsheet import/export and reporting data."},{"id":"permissions","label":"Access & workflows","detail":"Staff provisioning, role claims, validated enquiry intake and backend permission checks."},{"id":"releases","label":"Testing & releases","detail":"GitHub Actions, access-rule tests, release manifests and asset-integrity checks."},{"id":"ml","label":"ML & research systems","detail":"Independent work on recurrent models, GPU execution and numerical verification."},{"id":"torch","label":"PyTorch & JAX","detail":"Model implementation and differentiable execution with PyTorch and JAX/Flax."},{"id":"cuda","label":"C++ / CUDA / Triton","detail":"Native extensions and GPU kernels integrated with model training code."},{"id":"models","label":"Recurrent models","detail":"Structured memory, state-space models, parallel scans and equivariant operators."},{"id":"kernels","label":"GPU kernels","detail":"Custom forward/backward implementations for recurrent scans and autograd integration."},{"id":"validation","label":"Numerical validation","detail":"Reference outputs, gradient checks, streaming equivalence, controlled benchmarks and exact-arithmetic research checks."},{"id":"applications","label":"Java & .NET applications","detail":"Java server plugins, C# database coursework and a WPF desktop prototype."},{"id":"java","label":"Java","detail":"Event-driven plugin development using Paper/Bukkit APIs and persistent item metadata."},{"id":"csharp","label":"C# & SQL Server","detail":"WinForms coursework with ADO.NET, stored procedures and relational data access."},{"id":"plugins","label":"Server plugins","detail":"Custom item behaviour, inventory interfaces and resource-pack JSON parsing."},{"id":"desktop","label":"Desktop applications","detail":"A student/module management application and a WPF process-execution prototype."},{"id":"integration","label":"APIs & data access","detail":"Server API integrations, persistent metadata and stored-procedure-based CRUD."}],"edges":[["engineering","web"],["web","react"],["web","firebase"],["react","rendering"],["firebase","permissions"],["rendering","releases"],["permissions","releases"],["engineering","ml"],["ml","torch"],["ml","cuda"],["torch","models"],["cuda","kernels"],["models","validation"],["kernels","validation"],["engineering","applications"],["applications","java"],["applications","csharp"],["java","plugins"],["csharp","desktop"],["plugins","integration"],["desktop","integration"]]};

// CSS owns layout. Read all node rectangles, then write SVG paths in one batch.
export function mount(root) {
  const board=root.querySelector('.skill-board'),svg=root.querySelector('.skill-lines');
  const buttons=[...board.querySelectorAll('[data-node]')];
  const elements=new Map(buttons.map(b=>[b.dataset.node,b]));
  elements.set('engineering',board.querySelector('.skill-origin'));
  const paths=data.edges.map(([from,to])=>{
    const p=document.createElementNS('http://www.w3.org/2000/svg','path');p.dataset.from=from;p.dataset.to=to;svg.append(p);return p;
  });
  let frame=0,visible=true;
  function draw() {
    frame=0;
    const rect=board.getBoundingClientRect();if(!rect.width||!rect.height)return;
    const boxes=new Map([...elements].map(([id,e])=>{const r=e.getBoundingClientRect();return [id,{x:r.left-rect.left,y:r.top-rect.top,w:r.width,h:r.height}];}));
    const vertical=getComputedStyle(board).getPropertyValue('--stacked').trim()==='1';
    const d=data.edges.map(([from,to])=>{
      const a=boxes.get(from),b=boxes.get(to);
      if(from==='engineering'&&vertical){const x=a.x+a.w/2,y=a.y+a.h;return `M${x},${y}V${y+16}H9V${b.y+b.h/2}H${b.x}`;}
      const x=a.x+a.w/2,y=a.y+a.h,tx=b.x+b.w/2,ty=b.y,mid=(y+ty)/2;
      return `M${x},${y}C${x},${mid} ${tx},${mid} ${tx},${ty}`;
    });
    svg.setAttribute('viewBox',`0 0 ${rect.width} ${rect.height}`);
    d.forEach((value,i)=>paths[i].setAttribute('d',value));
  }
  function schedule(){if(frame||!root.open||!visible||document.hidden)return;frame=requestAnimationFrame(draw);}
  function pause(){if(frame)cancelAnimationFrame(frame);frame=0;}
  buttons.forEach(b=>b.disabled=false);
  board.addEventListener('click',event=>{
    const button=event.target.closest('[data-node]');if(!button)return;
    const id=button.dataset.node,node=data.nodes.find(n=>n.id===id);
    buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    const related=new Set(data.edges.filter(e=>e.includes(id)).flat());
    buttons.forEach(b=>b.classList.toggle('connected',related.has(b.dataset.node)&&b!==button));
    paths.forEach(p=>p.classList.toggle('active',p.dataset.from===id||p.dataset.to===id));
    const note=button.closest('.skill-branch').querySelector('.skill-note');
    note.querySelector('strong').textContent=node.label;note.querySelector('p').textContent=node.detail;schedule();
  });
  new ResizeObserver(schedule).observe(board);
  root.addEventListener('toggle',()=>root.open?schedule():pause());
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)schedule();else pause();}).observe(board);
  document.addEventListener('visibilitychange',()=>document.hidden?pause():schedule());
  draw();root.classList.add('skill-ready');
}
