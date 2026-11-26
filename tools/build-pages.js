// Run with: node tools/build-pages.js
// Creates /projects/<id>/index.html for every item in assets/content.js.
// Re-run only when you ADD or RENAME an item; text edits need no rebuild.
const fs = require('fs'), path = require('path');
global.window = {}; require('../assets/content.js');
const P = window.PORTFOLIO, root = path.join(__dirname, '..');
const all = [...P.experience, ...P.projects, ...P.earlier];
const esc = s => String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const page = (title, desc, base, id, img) => `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title><meta name="description" content="${esc(desc)}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}">
${img ? `<meta property="og:image" content="https://${P.person.site}/${esc(img)}">` : ''}
<link rel="icon" href="${base}assets/img/profile.jpg">
<script>try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}</script>
<link rel="stylesheet" href="${base}assets/site.css"></head>
<body><noscript><p style="padding:24px">${esc(desc)}</p></noscript>
<script>window.BASE='${base}';${id ? `window.PROJECT_ID='${id}';` : ''}</script>
<script src="${base}assets/content.js"></script><script src="${base}assets/site.js"></script>
</body></html>
`;
const first = it => ((it.media || []).find(m => m.type !== 'video') || (it.media || []).find(m => m.poster) || {});
fs.writeFileSync(path.join(root, 'index.html'),
  page(`${P.person.name}, ${P.person.headline}`, P.person.intro, '', null, P.person.photo));
for (const it of all) {
  const d = path.join(root, 'projects', it.id); fs.mkdirSync(d, { recursive: true });
  const f = first(it);
  fs.writeFileSync(path.join(d, 'index.html'),
    page(`${it.title} | ${P.person.name}`, it.context || it.result || '', '../../', it.id, f.src || f.poster));
}
console.log('built', all.length, 'project pages + index.html');
