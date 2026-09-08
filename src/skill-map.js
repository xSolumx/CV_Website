import data from './skill-map-data.js';

// One SVG, two batched edge paths, fixed coordinates. Render only on interaction.
export function mount(root) {
  const $ = s => root.querySelector(s);
  const viewport = $('.skill-viewport'), svg = $('.skill-svg');
  const detail = $('.skill-detail'), search = $('.skill-search');
  const results = $('.skill-results'), area = $('.skill-area');
  const status = $('.skill-status'), move = $('.skill-move');
  const ns = 'http://www.w3.org/2000/svg';
  const nodes = data.nodes, byId = new Map(nodes.map((n,i)=>[n.id,i]));
  const neighbours = nodes.map(()=>new Set());
  const paths = data.edges.map(([a,b]) => {
    neighbours[a].add(b); neighbours[b].add(a);
    return `M${nodes[a].x},${nodes[a].y}L${nodes[b].x},${nodes[b].y}`;
  });
  const el = (tag,attrs={},text='') => {
    const e=document.createElementNS(ns,tag);
    Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,v));
    if(text)e.textContent=text;
    return e;
  };
  const html = (tag,text,className) => {
    const e=document.createElement(tag);e.textContent=text;
    if(className)e.className=className;return e;
  };
  const groupMeta = new Map(data.groups.map(g=>[g.id,g]));
  for(const group of data.groups) {
    const members=nodes.filter(n=>n.group===group.id);
    const minY=Math.min(...members.map(n=>n.y));
    const maxY=Math.max(...members.map(n=>n.y));
    svg.append(el('rect',{x:group.cx-242,y:minY-66,width:484,height:maxY-minY+146,rx:38,fill:group.color,'fill-opacity':'.045',stroke:group.color,'stroke-opacity':'.22'}));
    svg.append(el('text',{x:group.cx,y:minY-35,'text-anchor':'middle',class:'skill-group-label',fill:group.color},group.label));
    const option=html('option',group.label);option.value=group.id;area.append(option);
  }
  svg.append(el('path',{d:paths.join(''),class:'skill-edges','aria-hidden':'true'}));
  const activeEdges=el('path',{class:'skill-edges active','aria-hidden':'true'});svg.append(activeEdges);
  const nodeElements=nodes.map((n,i)=> {
    const color=groupMeta.get(n.group).color;
    const g=el('g',{class:'skill-node',transform:`translate(${n.x} ${n.y})`,role:'button',tabindex:i===0?'0':'-1','aria-label':n.title,'aria-pressed':'false','data-index':i});
    g.append(el('circle',{r:27,fill:color}));
    const mark=n.title.replace(/ Fundamentals| Basics| Advanced/g,'').split(/[ &/]+/).slice(0,2).map(w=>w.slice(0,1)).join('');
    g.append(el('text',{'text-anchor':'middle',y:6,class:'skill-initial'},mark));
    const text=el('text',{'text-anchor':'middle',y:49,class:'skill-label'});
    const words=n.title.split(' ');let line='',row=0;
    words.forEach(word=>{if((line+' '+word).trim().length>17&&line){text.append(el('tspan',{x:0,dy:row?22:0},line));row++;line=word;}else line=(line+' '+word).trim();});
    text.append(el('tspan',{x:0,dy:row?22:0},line));g.append(text);svg.append(g);return g;
  });
  const hub=el('g',{'aria-hidden':'true'});hub.append(el('circle',{cx:950,cy:950,r:66,fill:'#153b2f'}));
  hub.append(el('text',{x:950,y:948,'text-anchor':'middle',class:'skill-hub'},'Hayden'));
  hub.append(el('text',{x:950,y:973,'text-anchor':'middle',class:'skill-hub small'},'58 skills'));svg.append(hub);
  let selected=-1,tabIndex=0,frame=0,visible=true,view={x:0,y:0,w:1900,h:1900};
  let bounds=viewport.getBoundingClientRect(),moving=false,gesture=null,suppressClick=false;
  const pointers=new Map();
  const fullBounds={x:50,y:50,w:1800,h:1800};
  function schedule() {
    if(frame||!root.open||document.hidden||!visible)return;
    frame=requestAnimationFrame(()=>{frame=0;svg.setAttribute('viewBox',`${view.x} ${view.y} ${view.w} ${view.h}`);});
  }
  function fit(box) {
    const aspect=bounds.width/Math.max(bounds.height,1);
    const w=Math.max(box.w,box.h*aspect),h=w/aspect;
    view={x:box.x+box.w/2-w/2,y:box.y+box.h/2-h/2,w,h};schedule();
  }
  function focusNode(i) {const n=nodes[i];fit({x:n.x-310,y:n.y-310,w:620,h:620});}
  function zoom(factor,px=bounds.width/2,py=bounds.height/2) {
    const w=Math.max(260,Math.min(4200,view.w*factor));factor=w/view.w;
    view={x:view.x+px/bounds.width*view.w*(1-factor),y:view.y+py/bounds.height*view.h*(1-factor),w,h:view.h*factor};schedule();
  }
  function relatedButtons(indices) {
    const list=html('ul','');
    indices.forEach(i=>{const li=html('li',''),b=html('button',nodes[i].title);b.type='button';b.dataset.select=String(i);li.append(b);list.append(li);});return list;
  }
  function select(i,focus=false) {
    selected=i;
    nodeElements[tabIndex].setAttribute('tabindex','-1');tabIndex=i;nodeElements[i].setAttribute('tabindex','0');
    nodeElements.forEach((g,j)=>{g.setAttribute('aria-pressed',String(j===i));g.classList.toggle('connected',neighbours[i].has(j));});
    activeEdges.setAttribute('d',data.edges.flatMap(([a,b],j)=>a===i||b===i?[paths[j]]:[]).join(''));
    const n=nodes[i],links=[...neighbours[i]].sort((a,b)=>nodes[a].title.localeCompare(nodes[b].title));
    const prereqs=n.prereqs.map(id=>byId.get(id));
    detail.replaceChildren(html('p',groupMeta.get(n.group).label,'eyebrow'),html('h3',n.title),html('p',n.summary));
    if(prereqs.length)detail.append(html('h4','Builds on'),relatedButtons(prereqs));
    detail.append(html('h4',`Connected skills (${links.length})`),relatedButtons(links));
    status.textContent=`${n.title}: ${links.length} connected skills.`;
    if(focus)focusNode(i);
  }
  function choose(target,focus=true) {
    const key=target.closest('[data-select]')?.dataset.select??target.closest('[data-index]')?.dataset.index;
    if(key!==undefined)select(Number(key),focus);
  }
  svg.addEventListener('click',e=>{if(!suppressClick)choose(e.target);suppressClick=false;});
  detail.addEventListener('click',e=>choose(e.target));
  results.addEventListener('click',e=>choose(e.target));
  root.querySelector('.skill-list').addEventListener('click',e=>{
    const id=e.target.closest('[data-skill]')?.dataset.skill;
    if(id){select(byId.get(id),true);viewport.scrollIntoView({block:'nearest',behavior:'instant'});nodeElements[tabIndex].focus({preventScroll:true});}
  });
  svg.addEventListener('keydown',e=> {
    const i=Number(e.target.closest('[data-index]')?.dataset.index);
    if(!Number.isInteger(i))return;
    if(e.key==='Enter'||e.key===' '){e.preventDefault();select(i,true);return;}
    const dirs={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]};
    let next=i;
    if(dirs[e.key]) {
      const [dx,dy]=dirs[e.key];let best=Infinity;
      nodes.forEach((n,j)=>{const x=n.x-nodes[i].x,y=n.y-nodes[i].y,forward=x*dx+y*dy;
        const score=Math.hypot(x,y)+Math.abs(x*dy-y*dx)*2;
        if(forward>0&&score<best){best=score;next=j;}});
    }else if(e.key==='Home')next=0;else if(e.key==='End')next=nodes.length-1;else return;
    e.preventDefault();select(next,true);nodeElements[next].focus({preventScroll:true});
  });
  search.addEventListener('input',()=> {
    const query=search.value.toLowerCase().trim();results.replaceChildren();results.hidden=!query;
    const found=nodes.map((n,i)=>({n,i})).filter(({n})=>`${n.title} ${n.tags.join(' ')}`.toLowerCase().includes(query));
    nodeElements.forEach((g,i)=>g.classList.toggle('search-match',!!query&&found.some(r=>r.i===i)));
    if(query){results.append(relatedButtons(found.map(r=>r.i)));if(!found.length)results.append(html('p','No matching skills.'));status.textContent=`${found.length} matching skills.`;}
  });
  search.addEventListener('keydown',e=>{if(e.key==='Escape'){search.value='';search.dispatchEvent(new Event('input'));}});
  area.addEventListener('change',()=> {
    if(!area.value){fit(fullBounds);return;}
    const members=nodes.filter(n=>n.group===area.value);
    const xs=members.map(n=>n.x),ys=members.map(n=>n.y);
    fit({x:Math.min(...xs)-100,y:Math.min(...ys)-90,w:Math.max(...xs)-Math.min(...xs)+200,h:Math.max(...ys)-Math.min(...ys)+190});
  });
  $('.skill-plus').addEventListener('click',()=>zoom(.7));
  $('.skill-minus').addEventListener('click',()=>zoom(1/.7));
  $('.skill-reset').addEventListener('click',()=>{area.value='';fit(fullBounds);});
  move.addEventListener('click',()=>{moving=!moving;move.setAttribute('aria-pressed',String(moving));viewport.classList.toggle('can-move',moving);});
  function rememberGesture() {
    const points=[...pointers.values()];
    if(!points.length){gesture=null;return;}
    const [a,b=a]=points;gesture={view:{...view},x:(a.x+b.x)/2,y:(a.y+b.y)/2,d:Math.hypot(a.x-b.x,a.y-b.y),count:points.length};
  }
  viewport.addEventListener('pointerdown',e=> {
    suppressClick=false;
    if(e.button!==0||(e.pointerType==='touch'&&!moving))return;
    bounds=viewport.getBoundingClientRect();pointers.set(e.pointerId,{x:e.clientX-bounds.left,y:e.clientY-bounds.top});rememberGesture();
    // Keep node click targets intact; pointer capture begins only after a drag.
  });
  viewport.addEventListener('pointermove',e=> {
    if(!pointers.has(e.pointerId)||!gesture)return;
    pointers.set(e.pointerId,{x:e.clientX-bounds.left,y:e.clientY-bounds.top});
    const [a,b=a]=[...pointers.values()],x=(a.x+b.x)/2,y=(a.y+b.y)/2;
    const dist=Math.hypot(a.x-b.x,a.y-b.y),moved=Math.hypot(x-gesture.x,y-gesture.y);
    if(moved<5&&Math.abs(dist-gesture.d)<5&&!suppressClick)return;
    suppressClick=true;viewport.setPointerCapture(e.pointerId);
    const raw=gesture.d&&pointers.size>1?gesture.d/Math.max(dist,1):1;
    const ratio=Math.max(260,Math.min(4200,gesture.view.w*raw))/gesture.view.w;
    view={x:gesture.view.x+gesture.x/bounds.width*gesture.view.w-x/bounds.width*gesture.view.w*ratio,
      y:gesture.view.y+gesture.y/bounds.height*gesture.view.h-y/bounds.height*gesture.view.h*ratio,w:gesture.view.w*ratio,h:gesture.view.h*ratio};schedule();
  });
  function end(e){pointers.delete(e.pointerId);rememberGesture();}
  viewport.addEventListener('pointerup',end);viewport.addEventListener('pointercancel',end);
  viewport.addEventListener('pointerleave',e=>{if(!viewport.hasPointerCapture(e.pointerId))end(e);});
  viewport.addEventListener('wheel',e=>{if(!e.ctrlKey&&!e.metaKey)return;e.preventDefault();bounds=viewport.getBoundingClientRect();zoom(Math.exp(Math.max(-100,Math.min(100,e.deltaY))*.007),e.clientX-bounds.left,e.clientY-bounds.top);},{passive:false});
  function pause(){if(frame)cancelAnimationFrame(frame);frame=0;pointers.clear();gesture=null;}
  root.addEventListener('toggle',()=>{if(!root.open)pause();else {bounds=viewport.getBoundingClientRect();schedule();}});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();else schedule();});
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)schedule();else pause();}).observe(viewport);
  new ResizeObserver(()=>{
    if(!root.open)return;
    bounds=viewport.getBoundingClientRect();const h=view.w*bounds.height/Math.max(bounds.width,1);
    view.y+=(view.h-h)/2;view.h=h;schedule();
  }).observe(viewport);
  fit(fullBounds);root.classList.add('skill-ready');
  status.textContent='58 skills across 8 areas. Full map ready.';
}
