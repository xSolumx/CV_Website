// Deterministic layout and compact browser payload. No client-side simulation.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'data/skills.json'), 'utf8'));
const colors = ['#285748','#365b84','#825334','#57692d','#69548b','#346e73','#8b465f','#4f6284'];
const shortGroups = ['Languages', 'Web & frontend', 'Backend & APIs', 'Data & databases', 'Infrastructure', 'Testing & observability', 'Design', 'AI & machine learning'];
const groups = data.groups.map((g,i) => {
  const angle = -Math.PI / 2 + i * Math.PI / 4;
  return {...g,label:shortGroups[i],color:colors[i],cx:950+Math.cos(angle)*650,cy:950+Math.sin(angle)*650};
});
const nodes = groups.flatMap(g => {
  const entries = data.nodes.filter(n=>n.group===g.id), rows = Math.ceil(entries.length/3);
  return entries.map((n,i) => ({...n,x:Math.round(g.cx+(i%3-1)*152),y:Math.round(g.cy+(Math.floor(i/3)-(rows-1)/2)*104)}));
});
const index = new Map(nodes.map((n,i)=>[n.id,i]));
const lines = new Map();
function edge(a,b) {
  if(!index.has(a)||!index.has(b)) throw Error(`Unknown endpoint: ${a}, ${b}`);
  const key=[a,b].sort().join('|');
  if(!lines.has(key)) lines.set(key,[index.get(a),index.get(b)]);
}
data.connections.forEach(e=>edge(e.from,e.to));
nodes.forEach(n=>n.prereqs.forEach(p=>edge(p,n.id)));
const output = {groups,nodes,connections:data.connections,edges:[...lines.values()]};
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
html=html.replace(/assets\/site\.[a-f0-9]+\.js/,`assets/${main}`).replace(/assets\/site\.[a-f0-9]+\.css/,`assets/${mainCss}`).replace(/assets\/skill-map(?:\.[a-f0-9]+)?\.css/,`assets/${graphCss}`);
fs.writeFileSync(path.join(root,'index.html'),html);
console.log(`${nodes.length} nodes, ${data.connections.length} directed connections, ${lines.size} shared visual paths including prerequisites`);
