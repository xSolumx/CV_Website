const data = {"description":"Selected capabilities grounded in accessible implementation and notebook evidence. Includes five areas and one engineering hub; not proficiency ratings or an exhaustive account inventory.","nodes":[{"id":"web","label":"Web interfaces","detail":"Catalogue interfaces, accessible interactions and server-rendered pages in the business applications.","context":"Area of work"},{"id":"react","label":"React & TypeScript","detail":"Typed components, application state and staff-facing product tools.","context":"Business applications"},{"id":"html","label":"HTML & CSS","detail":"Semantic page structure and responsive styling for public pages and administration interfaces.","context":"Business applications"},{"id":"rendering","label":"Server rendering","detail":"React server entry points render routes to HTML and dehydrate the query cache for the browser.","context":"Business applications"},{"id":"responsive","label":"Responsive layouts","detail":"CSS layouts adapt catalogue, navigation and content interfaces across screen sizes.","context":"Business applications"},{"id":"prefetch","label":"Route prefetching","detail":"Route-specific data and component preloading prepare server-rendered product and content pages.","context":"Business applications"},{"id":"accessibility","label":"Accessible UI","detail":"Dialog focus management, Escape handling and restoration of focus in React interfaces.","context":"Business applications"},{"id":"spreadsheets","label":"Spreadsheet tools","detail":"Import and export of typed product records, with required-column checks and controlled updates.","context":"Business applications"},{"id":"media","label":"Media processing","detail":"Image compression, WebP thumbnails, dimensions and reference checks in media-publishing workflows.","context":"Business applications"},{"id":"catalogue","label":"Catalogue workflows","detail":"Staff interfaces for editing product information, pricing and stock.","context":"Business applications"},{"id":"backend","label":"Backend & delivery","detail":"Customer intake, staff permissions, analytics and checked release workflows.","context":"Area of work"},{"id":"functions","label":"Cloud Functions","detail":"Firebase callable and server-side handlers implement privileged application operations.","context":"Business applications"},{"id":"releases","label":"CI & release gates","detail":"GitHub Actions orchestrates tests, rule checks, builds and server-rendering verification.","context":"Business applications"},{"id":"enquiries","label":"Enquiry validation","detail":"Backend handlers validate customer input, apply rate limits and persist enquiries.","context":"Business applications"},{"id":"rules","label":"Access-rule tests","detail":"Firestore emulator tests check anonymous-write denial, administrator access and privilege-escalation attempts.","context":"Business applications"},{"id":"firestore","label":"Firestore","detail":"Document persistence and queries for products, enquiries, staff-related data and analytics.","context":"Business applications"},{"id":"integrity","label":"Artifact integrity","detail":"Release tooling creates SHA-256 manifests and checks immutable-asset collisions before deployment.","context":"Business applications"},{"id":"auth","label":"Authentication","detail":"Firebase Authentication connects staff sign-in with protected administration workflows.","context":"Business applications"},{"id":"analytics","label":"Analytics pipelines","detail":"Consent-aware event queues, batching and retries feed backend ingestion and scheduled reporting rollups.","context":"Business applications"},{"id":"roles","label":"Staff permissions","detail":"Custom role claims and backend guards separate staff administration from content-management permissions.","context":"Business applications"},{"id":"ml","label":"ML & GPU systems","detail":"Recurrent model implementations, GPU execution and checks against reference computations.","context":"Area of work"},{"id":"python","label":"Python","detail":"Model code, experiment runners, numerical checks and reproducibility utilities.","context":"Independent research","source":"https://github.com/xSolumx/AI_Culture_Mind/blob/main/SSM-Models/pure_spin_ssm_v1_2/model.py"},{"id":"cuda","label":"C++ & CUDA","detail":"Native PyTorch extensions implement forward and backward recurrent-state computations on the GPU.","context":"Independent research","source":"https://github.com/xSolumx/AI_Culture_Mind/blob/main/SSM-Models/pure_spin_ssm_v1_2/csrc/spin_scan_cuda.cu"},{"id":"torch","label":"PyTorch","detail":"Trainable recurrent models, tensor operations and comparisons between reference and custom execution paths.","context":"Independent research","source":"https://github.com/xSolumx/AI_Culture_Mind/blob/main/SSM-Models/pure_spin_ssm_v1_2/model.py"},{"id":"triton","label":"Triton","detail":"Custom GPU kernels implement structured recurrent updates; source includes fused state-scan code.","context":"Independent research","source":"https://github.com/xSolumx/AI_Culture_Mind/blob/main/SSM-Models/pure_rotor_ssm/octonion_operator_triton.py"},{"id":"models","label":"State-space models","detail":"Independent implementations of recurrent state-space models and structured memory, with separate experimental model families.","context":"Independent research","source":"https://github.com/xSolumx/AI_Culture_Mind/blob/main/SSM-Models/pure_spin_ssm_v1_2/model.py"},{"id":"autograd","label":"Custom autograd","detail":"PyTorch autograd functions connect native forward and backward kernels to model training.","context":"Independent research","source":"https://github.com/xSolumx/AI_Culture_Mind/blob/main/SSM-Models/pure_spin_ssm_v1_2/raw_cuda.py"},{"id":"jax","label":"JAX & Flax","detail":"A separate differentiable backend implements geometric operations, recurrent scans and Flax model modules.","context":"Independent research","source":"https://github.com/xSolumx/AI_Culture_Mind/blob/main/SSM-Models/pure_rotor_ssm/jax_backend.py"},{"id":"scans","label":"Parallel scans","detail":"Parallel recurrent-state computations are compared with sequential reference execution.","context":"Independent research","source":"https://github.com/xSolumx/AI_Culture_Mind/blob/main/SSM-Models/pure_spin_ssm_v1_2/chunk_parallel_scan.py"},{"id":"validation","label":"Numerical validation","detail":"Reference-output and gradient comparisons, streaming equivalence and controlled execution checks.","context":"Independent research","source":"https://github.com/xSolumx/AI_Culture_Mind/blob/main/SSM-Models/pure_spin_ssm_v1_2/test_raw_cuda_training.py"},{"id":"data","label":"Data & scientific computing","detail":"Exploratory analysis and image-classification coursework, alongside exact-arithmetic research checks.","context":"Area of work"},{"id":"pandas","label":"Pandas & NumPy","detail":"Tabular analysis, grouped summaries and array operations in exploratory notebooks.","context":"Coursework","source":"https://github.com/xSolumx/Single-Prop-ML/blob/main/FindingSingleProp.ipynb"},{"id":"tensorflow","label":"TensorFlow & Keras","detail":"A convolutional animal-image classifier built and trained in a notebook.","context":"Coursework","source":"https://github.com/xSolumx/MLG-10-Animals/blob/main/MLG-10-Animals.ipynb"},{"id":"preparation","label":"Data preparation","detail":"Column normalisation, missing-value handling and grouped data preparation in an aviation-analysis notebook. This is exploratory work.","context":"Coursework","source":"https://github.com/xSolumx/Single-Prop-ML/blob/main/FindingSingleProp.ipynb"},{"id":"classification","label":"Image classification","detail":"Convolution, pooling, normalisation and dropout layers classify animal images in a notebook project.","context":"Coursework","source":"https://github.com/xSolumx/MLG-10-Animals/blob/main/MLG-10-Animals.ipynb"},{"id":"plots","label":"Data visualisation","detail":"Matplotlib and Seaborn charts communicate grouped data, learning curves and confusion matrices.","context":"Coursework","source":"https://github.com/xSolumx/Single-Prop-ML/blob/main/FindingSingleProp.ipynb"},{"id":"pipeline","label":"tf.data pipelines","detail":"Image decoding, resizing, normalisation, batching and prefetching prepare training and validation inputs.","context":"Coursework","source":"https://github.com/xSolumx/MLG-10-Animals/blob/main/MLG-10-Animals.ipynb"},{"id":"exact","label":"Exact arithmetic","detail":"Rational and polynomial calculations with independent FLINT cross-checks in the mathematical research.","context":"Independent research","source":"https://github.com/xSolumx/spin-triality-research/blob/main/src/spin8_publication_flint_crosscheck.py"},{"id":"evaluation","label":"Model evaluation","detail":"Training and validation curves plus confusion-matrix evaluation for the animal classifier.","context":"Coursework","source":"https://github.com/xSolumx/MLG-10-Animals/blob/main/MLG-10-Animals.ipynb"},{"id":"reproducibility","label":"Reproducible research","detail":"Artifact manifests detect missing, altered and untracked result files, preserving the provenance of research outputs.","context":"Independent research","source":"https://github.com/xSolumx/spin-triality-research/blob/main/tools/verify_artifact_manifest.py"},{"id":"applications","label":"Java & .NET applications","detail":"Event-driven Java projects, relational coursework and a Windows desktop prototype.","context":"Area of work"},{"id":"java","label":"Java","detail":"Plugin classes, commands and server-service integration using Java and the Paper/Bukkit ecosystem.","context":"Personal Java projects","source":"https://github.com/xSolumx/Rebel-Items/blob/main/src/main/java/com/mcrebels/rebelitems/rebelitems/RebelItems.java"},{"id":"csharp","label":"C# & .NET","detail":"Windows application development through WinForms coursework and a WPF utility prototype.","context":"Coursework","source":"https://github.com/xSolumx/Prg-2782-Project-1/blob/master/DataHandler.cs"},{"id":"plugins","label":"Event-driven plugins","detail":"Server events drive custom item behaviours and inventory interactions. Some item variants remain unfinished.","context":"Personal Java projects","source":"https://github.com/xSolumx/Rebel-Items/blob/main/src/main/java/com/mcrebels/rebelitems/rebelitems/RebelItems.java"},{"id":"winforms","label":"WinForms & ADO.NET","detail":"Student and module management forms use data tables, adapters and parameterised database calls.","context":"Coursework","source":"https://github.com/xSolumx/Prg-2782-Project-1/blob/master/DataHandler.cs"},{"id":"resources","label":"Resource-pack parsing","detail":"JSON model files are parsed into custom items and categorised inventory interfaces.","context":"Personal Java projects","source":"https://github.com/xSolumx/AdditionalBlocks/blob/master/src/main/java/com/mcrebels/additionalblocks/additionalblocks/util/JSONParser.java"},{"id":"sql","label":"SQL Server","detail":"Parameterised SQL Server stored-procedure calls provide CRUD operations in C# coursework.","context":"Coursework","source":"https://github.com/xSolumx/Prg-2782-Project-1/blob/master/DataHandler.cs"},{"id":"metadata","label":"Persistent metadata","detail":"Paper/Bukkit persistent-data containers attach custom metadata to items.","context":"Personal Java projects","source":"https://github.com/xSolumx/AdditionalBlocks/blob/master/src/main/java/com/mcrebels/additionalblocks/additionalblocks/util/PersistentDataSpace.java"},{"id":"wpf","label":"WPF & processes","detail":"A Windows utility prototype launches external processes asynchronously and updates UI output through the dispatcher.","context":"Prototype","source":"https://github.com/xSolumx/DISM_Graphical_App/blob/master/MainWindow.xaml.cs"},{"id":"integration","label":"API integration","detail":"Paper/Bukkit and Vault server-service integration, with ADO.NET database integration in separate C# coursework.","context":"Personal projects & coursework","source":"https://github.com/xSolumx/Rebel-Items/blob/main/src/main/java/com/mcrebels/rebelitems/rebelitems/RebelItems.java"}],"edges":[["engineering","web","area"],["web","react","tool"],["web","html","tool"],["react","rendering","application"],["react","spreadsheets","application"],["react","catalogue","application"],["rendering","prefetch","application"],["html","responsive","application"],["html","accessibility","application"],["html","media","application"],["engineering","backend","area"],["backend","functions","tool"],["backend","releases","tool"],["functions","enquiries","application"],["functions","firestore","application"],["functions","auth","application"],["functions","analytics","application"],["releases","rules","application"],["releases","integrity","application"],["auth","roles","application"],["firestore","analytics","practice"],["engineering","ml","area"],["ml","python","tool"],["ml","cuda","tool"],["python","torch","application"],["python","jax","application"],["torch","models","application"],["cuda","triton","application"],["cuda","autograd","application"],["cuda","scans","application"],["torch","validation","practice"],["cuda","validation","practice"],["engineering","data","area"],["data","pandas","tool"],["data","tensorflow","tool"],["pandas","preparation","application"],["pandas","plots","application"],["tensorflow","classification","application"],["tensorflow","pipeline","application"],["tensorflow","evaluation","application"],["data","exact","application"],["exact","reproducibility","practice"],["engineering","applications","area"],["applications","java","tool"],["applications","csharp","tool"],["java","plugins","application"],["java","resources","application"],["java","metadata","application"],["csharp","winforms","application"],["csharp","wpf","application"],["winforms","sql","application"],["java","integration","practice"],["csharp","integration","practice"],["react","functions","bridge","Interfaces call backend handlers"],["catalogue","firestore","bridge","Catalogue data is stored in Firestore"],["spreadsheets","preparation","bridge","Both involve preparing structured records"],["media","pipeline","bridge","Both prepare image data for downstream use"],["analytics","plots","bridge","Reporting connects collected events to visual summaries"],["integrity","reproducibility","bridge","Both verify artifacts with content hashes"],["validation","evaluation","bridge","Both compare computed results against evaluation criteria"],["validation","exact","bridge","Numerical checks complement exact arithmetic"],["python","pandas","bridge","Python is used for tabular and array analysis"],["torch","tensorflow","bridge","Separate frameworks used in model projects"]],"branches":[{"id":"web","label":"Web interfaces","href":"#work","link":"View application work","rows":[["react","html"],["rendering","responsive"],["prefetch","accessibility"],["spreadsheets","media"],["catalogue"]]},{"id":"backend","label":"Backend & delivery","href":"#work","link":"View business systems","rows":[["functions","releases"],["enquiries","rules"],["firestore","integrity"],["auth","analytics"],["roles"]]},{"id":"ml","label":"ML & GPU systems","href":"#research","link":"View research work","rows":[["python","cuda"],["torch","triton"],["models","autograd"],["jax","scans"],["validation"]]},{"id":"data","label":"Data & scientific computing","href":"#more-projects","link":"View supporting projects","rows":[["pandas","tensorflow"],["preparation","classification"],["plots","pipeline"],["exact","evaluation"],["reproducibility"]]},{"id":"applications","label":"Java & .NET applications","href":"#more-projects","link":"View application projects","rows":[["java","csharp"],["plugins","winforms"],["resources","sql"],["metadata","wpf"],["integration"]]}]};

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
