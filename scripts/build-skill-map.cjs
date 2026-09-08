// Deterministic layout and compact browser payload. No client-side simulation.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'data/skills.json'), 'utf8'));
const output = data;
const ids = new Set(['engineering', ...data.nodes.map(n=>n.id)]);
if (ids.size !== 31 || data.nodes.length !== 30) throw Error('Expected exactly 31 unique nodes including the hub');
const knownEdges = new Set();
for (const [a,b] of data.edges) {
  if (!ids.has(a) || !ids.has(b) || a === b) throw Error('Invalid connection');
  const key=[a,b].sort().join(':');
  if(knownEdges.has(key)) throw Error('Duplicate connection'); knownEdges.add(key);
}
const reached=new Set(['engineering']);
while(true){const before=reached.size; for(const [a,b] of data.edges) {if(reached.has(a))reached.add(b);if(reached.has(b))reached.add(a);} if(before===reached.size)break;}
if(reached.size!==ids.size)throw Error('Disconnected skill graph');
const rendered=data.branches.flatMap(b=>[b.id,...b.rows.flat()]);
if(rendered.length!==30 || new Set(rendered).size!==30 || rendered.some(id=>!ids.has(id)))throw Error('Graph layout must contain each skill once');
const escape=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lookup=new Map(data.nodes.map(n=>[n.id,n]));
const button=(id,extra='')=>`<button class="skill-node ${extra}" data-node="${id}" type="button" aria-pressed="false" disabled>${escape(lookup.get(id).label)}</button>`;
const branchHtml=data.branches.map(b=>`<section class="skill-branch" data-area="${b.id}" aria-label="${escape(b.label)}">${button(b.id,'branch-title')}${b.rows.map((row,i)=>`<div class="skill-row ${i===0?'tools':''} ${row.length===1?'single':''}">${row.map(id=>button(id)).join('')}</div>`).join('')}<div class="skill-note" aria-live="polite" aria-atomic="true"><div class="skill-note-header"><strong>${escape(b.label)}</strong><button class="skill-dismiss" type="button" aria-label="Close skill details" hidden>×</button></div><p>${escape(lookup.get(b.id).detail)}</p><p class="skill-related"></p><a href="${b.href}">${escape(b.link)} ↗</a></div></section>`).join('');
const boardHtml=`<div class="skill-board"><svg class="skill-lines" aria-hidden="true"></svg><div class="skill-origin"><span>Software engineering</span><small>Three areas of my work</small></div><div class="skill-branches">${branchHtml}</div></div><p class="skill-legend">Solid lines: tools and applications. Dotted lines: shared practices.</p>`;
// Fingerprint the complete lazy module as one request, including its data.
const assets = path.join(root,'assets');
for(const file of fs.readdirSync(assets)) {
  if(/^(site\.|skill-map).*\.(js|css)$/.test(file))fs.unlinkSync(path.join(assets,file));
}
function emit(name,ext,content) {
  const hash=crypto.createHash('sha256').update(content).digest('hex').slice(0,10);
  const file=`${name}.${hash}.${ext}`;fs.writeFileSync(path.join(assets,file),content);return file;
}
const graphSource=fs.readFileSync(path.join(root,'src/skill-map.js'),'utf8');
const graph=emit('skill-map','js',graphSource.replace("import data from './skill-map-data.js';",'const data = '+JSON.stringify(output)+';'));
const graphCss=emit('skill-map','css',fs.readFileSync(path.join(root,'src/skill-map.css'),'utf8'));
const main=emit('site','js',fs.readFileSync(path.join(root,'src/site.js'),'utf8').replace("'./skill-map.js'",`'./${graph}'`));
const mainCss=emit('site','css',fs.readFileSync(path.join(root,'src/site.css'),'utf8'));
let html=fs.readFileSync(path.join(root,'index.html'),'utf8');
html=html.replace(/<!-- SKILL_BOARD_START -->[\s\S]*?<!-- SKILL_BOARD_END -->/, '<!-- SKILL_BOARD_START -->'+boardHtml+'<!-- SKILL_BOARD_END -->');
html=html.replace(/assets\/site\.[a-f0-9]+\.js/,`assets/${main}`).replace(/assets\/site\.[a-f0-9]+\.css/,`assets/${mainCss}`).replace(/assets\/skill-map(?:\.[a-f0-9]+)?\.css/,`assets/${graphCss}`);
fs.writeFileSync(path.join(root,'index.html'),html);
console.log(`${data.nodes.length + 1} nodes, ${data.edges.length} connections`);
