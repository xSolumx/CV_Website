// Deterministic layout and compact browser payload. No client-side simulation.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'data/skills.json'), 'utf8'));
const output = data;
const ids = new Set(['engineering', ...data.nodes.map(n=>n.id)]);
if (ids.size !== data.nodes.length + 1) throw Error('Duplicate node ID');
for (const [a,b] of data.edges) if (!ids.has(a) || !ids.has(b)) throw Error('Invalid connection');
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
console.log(`${data.nodes.length + 1} nodes, ${data.edges.length} meaningful connections`);
