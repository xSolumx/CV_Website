const data = {"description":"Three areas of work: 47 capabilities, three area nodes and one engineering hub. Public source links are optional. Project descriptions in this revision use accessible implementation and retained CV context.","nodes":[{"id":"web","label":"Full-stack & CMS","detail":"Custom content-management systems, business workflows and the interfaces and services that connect them.","context":"Area of work"},{"id":"react","label":"React & Next.js","detail":"Component-based React interfaces and broader Next.js web-project experience.","context":"Web & business applications"},{"id":"node","label":"Node.js APIs","detail":"Server-side JavaScript and TypeScript, Firebase Cloud Functions and application-service handlers.","context":"Web & business applications"},{"id":"typescript","label":"TypeScript","detail":"Typed domain models, component contracts, state transitions and service boundaries.","context":"Web & business applications"},{"id":"firebase","label":"Firebase & Firestore","detail":"Authentication, document storage, queries and Cloud Functions for application workflows.","context":"Web & business applications"},{"id":"cms","label":"Custom CMSs","detail":"Administration systems for products, articles, media, staff and site settings, with reusable editors and service modules.","context":"Web & business applications"},{"id":"roles","label":"Auth & roles","detail":"Staff provisioning, custom claims and backend permission checks distinguish administration from content editing.","context":"Web & business applications"},{"id":"content","label":"Content modelling","detail":"Structured product, article, guide, campaign and settings records with validation, metadata and links between entities.","context":"Web & business applications"},{"id":"validation","label":"Data validation","detail":"Form and import validation, enquiry rate limits, stale-write checks and partial-failure handling in bulk operations.","context":"Web & business applications"},{"id":"editorial","label":"Editorial workflows","detail":"Drafts, publication windows, preview, archive/restore and guards against losing unsaved edits.","context":"Web & business applications"},{"id":"business","label":"Application state","detail":"Form state, loading and error states, query-cache updates and mutations keep editors in step with backend data.","context":"Web & business applications"},{"id":"richtext","label":"Rich-text editing","detail":"Article editors combine formatted content, uploaded images, metadata and preview/quality feedback.","context":"Web & business applications"},{"id":"analytics","label":"Analytics & reporting","detail":"Consent-aware event collection, batching/retries, backend aggregation and administration dashboards.","context":"Web & business applications"},{"id":"media","label":"Media libraries","detail":"Reusable asset selection and uploads, image compression, WebP thumbnails, alt text and reference-aware deletion.","context":"Web & business applications"},{"id":"rendering","label":"SSR & caching","detail":"Server rendering, route prefetching, query-cache hydration and invalidation after content changes.","context":"Web & business applications"},{"id":"spreadsheets","label":"Data import & export","detail":"Spreadsheet imports, structured exports and partial-record updates, with validation and per-record feedback for bulk operations.","context":"Web & business applications"},{"id":"accessibility","label":"Accessible UI","detail":"Keyboard interaction, dialog focus management, Escape handling and restoration of focus.","context":"Web & business applications"},{"id":"responsive","label":"Responsive UI","detail":"HTML and CSS layouts for public pages, administration tools and mobile interfaces.","context":"Web & business applications"},{"id":"ml","label":"ML & research engineering","detail":"Applied image classification and independent research into neural architectures, learned memory, GPU execution and controlled evaluation.","context":"Area of work"},{"id":"python","label":"Python","detail":"Model implementations, data preparation, experiment runners and scientific-computing tools.","context":"ML projects & independent research"},{"id":"cuda","label":"C++ & CUDA","detail":"Native PyTorch extensions and GPU kernels for recurrent-state computation and training gradients.","context":"ML projects & independent research"},{"id":"torch","label":"PyTorch","detail":"Trainable modules, optimisers, tensor operations and custom execution paths for neural models.","context":"ML projects & independent research"},{"id":"triton","label":"Triton","detail":"GPU kernels for structured scans and selected-state memory updates, including a separate fused inference path.","context":"ML projects & independent research"},{"id":"architectures","label":"Neural architectures","detail":"Experimental state-space and recurrent language models, with structured memory and geometric layers.","context":"ML projects & independent research"},{"id":"compilers","label":"ML compiler systems","detail":"Model-specific execution planning and dispatch: typed plans select eager or GPU paths using tensor shape, precision, algebraic constraints and hardware profiles.","context":"ML projects & independent research","source":"https://github.com/xSolumx/AI_Culture_Mind/blob/main/SSM-Models/pure_spin8_ssm/compiler.py"},{"id":"memory","label":"Memory & retrieval","detail":"Learned addressing, hard/soft routing, delta updates and hierarchical memory; retrieval quality is measured separately from kernel cost.","context":"ML projects & independent research","source":"https://github.com/xSolumx/AI_Culture_Mind/blob/main/research-programs/03-structured-memory-and-retrieval/README.md"},{"id":"scans","label":"Parallel scans","detail":"Associative transition composition and ordered parallel-prefix algorithms for recurrent state updates.","context":"ML projects & independent research"},{"id":"geometry","label":"Geometric ML","detail":"Equivariant operators, group representations and geometric algebra inform structured neural layers and controlled learning experiments.","context":"ML projects & independent research","source":"https://github.com/xSolumx/AI_Culture_Mind/blob/main/research-programs/02-equivariant-intertwiner-identification/README.md"},{"id":"autograd","label":"Custom autograd","detail":"Native forward/backward kernels integrate with PyTorch training, with gradients compared against reference implementations.","context":"ML projects & independent research"},{"id":"jax","label":"JAX & Flax","detail":"Differentiable geometric operations, recurrent scans and Flax model modules in a separate backend.","context":"ML projects & independent research"},{"id":"profiling","label":"GPU profiling","detail":"CPU/CUDA profiling, synchronised timing, warm-up, peak-memory measurements and comparisons of launch and compute costs.","context":"ML projects & independent research"},{"id":"tensorflow","label":"TensorFlow & Keras","detail":"Convolutional image-classification models, tf.data batching/prefetching and validation diagnostics.","context":"Applied ML · image-classification coursework"},{"id":"training","label":"Training pipelines","detail":"Deterministic dataset splits, sampled batches, optimiser steps, fixed evaluation batches, checkpoints and structured experiment outputs.","context":"ML projects & independent research"},{"id":"vision","label":"Computer vision","detail":"Image decoding, resizing and normalisation, convolutional classification, class predictions and confusion-matrix diagnostics.","context":"Applied ML · image-classification coursework"},{"id":"experiments","label":"Experiment design","detail":"Matched baselines, ablations, held-out cohorts and multiple seeds separate architectural effects from implementation and optimisation effects.","context":"ML projects & independent research","source":"https://github.com/xSolumx/AI_Culture_Mind/blob/main/research-programs/07-controlled-model-benchmarks/README.md"},{"id":"applied","label":"Applied ML","detail":"Taking a labelled image dataset through preprocessing, classifier training, validation and saved-model inference.","context":"Applied ML · image-classification coursework"},{"id":"numerical","label":"Numerical validation","detail":"Reference-output comparisons, gradient checks, tolerances and streaming equivalence; symbolic and exact arithmetic support the geometric research.","context":"ML projects & independent research"},{"id":"reproducibility","label":"Reproducible research","detail":"Pinned data identities, explicit configurations, validation scripts and artifact manifests keep experiments traceable.","context":"ML projects & independent research"},{"id":"applications","label":"Software & systems","detail":"Java and .NET applications, data work and the engineering practices used to build, debug and release software.","context":"Area of work"},{"id":"java","label":"Java","detail":"Event-driven server plugins, commands, custom interfaces and Paper/Bukkit integration.","context":"Application work & engineering practice"},{"id":"csharp","label":"C# & .NET","detail":"Windows applications and relational data access through WinForms coursework and a WPF utility prototype.","context":"Application work & engineering practice"},{"id":"events","label":"Event-driven code","detail":"Plugin events, persistent item metadata, resource-pack JSON parsing and inventory interactions.","context":"Application work & engineering practice"},{"id":"sql","label":"SQL & data access","detail":"SQL Server stored-procedure calls, parameterised CRUD, ADO.NET adapters and data tables in C# coursework.","context":"Application work & engineering practice"},{"id":"integration","label":"API integration","detail":"Connecting application services and server APIs, including backend enquiry handling and Paper/Bukkit integrations.","context":"Application work & engineering practice"},{"id":"desktop","label":"Desktop apps","detail":"WinForms student/module management and WPF process execution with asynchronous output and UI dispatch.","context":"Application work & engineering practice"},{"id":"linux","label":"Linux","detail":"Server administration, command-line workflows and Linux/WSL development environments.","context":"Application work & engineering practice"},{"id":"data","label":"Data analysis","detail":"Pandas/NumPy preparation and exploration, with Matplotlib/Seaborn visualisation and notebook-based analysis.","context":"Application work & engineering practice"},{"id":"git","label":"Git & CI/CD","detail":"Version control, automated release gates, dependency/build checks, SHA-256 manifests and immutable-asset verification.","context":"Application work & engineering practice"},{"id":"testing","label":"Automated testing","detail":"Unit, integration, access-rule and numerical tests check behaviour and failure cases across application and research code.","context":"Application work & engineering practice"},{"id":"debugging","label":"Debugging & diagnostics","detail":"Using logs, process output, tests and profiling to investigate application failures, server behaviour and computational bottlenecks.","context":"Application work & engineering practice"}],"edges":[["engineering","web","area"],["web","react","tool"],["web","node","tool"],["react","typescript","application"],["react","cms","application"],["react","rendering","application"],["typescript","content","application"],["cms","editorial","application"],["cms","richtext","application"],["cms","media","application"],["cms","spreadsheets","application"],["react","responsive","application"],["node","firebase","application"],["node","validation","application"],["firebase","roles","application"],["react","business","application"],["firebase","analytics","application"],["react","accessibility","application"],["content","validation","practice"],["engineering","ml","area"],["ml","python","tool"],["ml","cuda","tool"],["python","torch","application"],["python","jax","application"],["python","tensorflow","application"],["tensorflow","applied","application"],["torch","architectures","application"],["torch","memory","application"],["torch","geometry","application"],["tensorflow","vision","application"],["cuda","triton","application"],["cuda","compilers","application"],["cuda","autograd","application"],["cuda","profiling","application"],["compilers","scans","application"],["torch","training","application"],["torch","experiments","application"],["python","numerical","application"],["experiments","reproducibility","practice"],["cuda","numerical","practice"],["engineering","applications","area"],["applications","java","tool"],["applications","csharp","tool"],["java","events","application"],["java","integration","application"],["csharp","sql","application"],["csharp","desktop","application"],["applications","linux","application"],["applications","data","application"],["applications","git","application"],["git","testing","practice"],["java","debugging","practice"],["csharp","debugging","practice"],["validation","testing","bridge","Input and write-boundary checks are exercised by automated tests"],["analytics","data","bridge","Reporting and analysis turn recorded data into useful summaries"],["node","integration","bridge","Backend handlers connect application services"],["spreadsheets","data","bridge","Both transform and validate structured records"],["profiling","debugging","bridge","Profiling guides investigation of computational bottlenecks"],["experiments","testing","bridge","Experiment contracts are checked with executable validation"],["reproducibility","git","bridge","Versioned code and verified artifacts preserve experiment provenance"],["python","data","bridge","Python supports tabular analysis and scientific computation"]],"branches":[{"id":"web","label":"Full-stack & CMS","href":"#work","link":"Explore business applications","rows":[["react","node"],["typescript","firebase"],["cms","roles"],["content","validation"],["editorial","business"],["richtext","analytics"],["media","rendering"],["spreadsheets","accessibility"],["responsive"]]},{"id":"ml","label":"ML & research engineering","href":"#machine-learning","link":"Explore ML & research","rows":[["python","cuda"],["torch","triton"],["architectures","compilers"],["memory","scans"],["geometry","autograd"],["jax","profiling"],["tensorflow","training"],["vision","experiments"],["applied","numerical"],["reproducibility"]]},{"id":"applications","label":"Software & systems","href":"#more-projects","link":"Explore supporting work","rows":[["java","csharp"],["events","sql"],["integration","desktop"],["linux","data"],["git","testing"],["debugging"]]}]};

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
  const narrow = matchMedia('(max-width:1020px)');
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
      if(active) (active.closest('.skill-row') || active).after(note);
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
