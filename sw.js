const C='firetruck-v4';const F=['./','index.html','style.css','v2.css','i18n.js','i18n2.js','v2.js','v3.js','v3.css','i18n3.js','sprites/sprites3.js','sprites/td.webp','sprites/tt.webp','sprites/sprites.js','sprites/veh.webp','sprites/props.webp','logic.js','levels.js','game.js','manifest.json','icon-192.png','icon-512.png','studio-logo.png','fonts/NotoSansThaiLooped.ttf'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim();});
// network-first so new builds show up; cache fallback for offline
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r;}).catch(()=>caches.match(e.request,{ignoreSearch:true})));});
