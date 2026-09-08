import data from './skill-map-data.js';

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
