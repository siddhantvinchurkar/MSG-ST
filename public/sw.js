if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise(async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()})),i.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},i=(i,s)=>{Promise.all(i.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(i)};self.define=(i,r,n)=>{s[i]||(s[i]=Promise.resolve().then(()=>{let s={};const a={uri:location.origin+i.slice(1)};return Promise.all(r.map(i=>{switch(i){case"exports":return s;case"module":return a;default:return e(i)}})).then(e=>{const i=n(...e);return s.default||(s.default=i),s})}))}}define("./sw.js",["./workbox-6cd01981"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"favicon.ico",revision:"d7d33b247cf5c1a1cdce74a7dc988186"},{url:"images/blank_render_logo.webp",revision:"232909405c328dc6e8ba8545431ef5f1"},{url:"images/icons/favicon_144.png",revision:"f582a6b807860d3002850a577cb589eb"},{url:"images/icons/favicon_192.png",revision:"22ee37d218bf831fc77697e2951f0129"},{url:"images/icons/favicon_48.png",revision:"bd730413b1f64c12ee31f229ae9f6030"},{url:"images/icons/favicon_512.png",revision:"77ad55df78f1bb63ed003e6d7b237d77"},{url:"images/icons/favicon_72.png",revision:"837e3ba9712d67a680f0ab3fbedfe91b"},{url:"images/icons/favicon_96.png",revision:"1ed74c53d6d98469fb54af9250f5cf84"},{url:"images/icons/github_logo.webp",revision:"ded52c6b83ed725a1f96a6e06ff7963b"},{url:"images/icons/nextjs_logo.webp",revision:"9f7f98b8a2d0d297055e2fa086b8d398"},{url:"images/icons/og_512.jpg",revision:"d7e17206a697693a2dde234bc5299e8a"},{url:"images/icons/reactjs_logo.webp",revision:"5e6d3d33a96413d1ee9746fd7629b9af"},{url:"index.html",revision:"13352b0790c9091c06a56070c54c7194"},{url:"manifest.json",revision:"26d4d73be81484ec5fa351a7f074f0c8"},{url:"robots.txt",revision:"9e4382f1357105bd9aaeeca8b9537f98"},{url:"scripts/jquery.min.js",revision:"8f2bd55d31c72d762702c6023f425c5d"},{url:"scripts/lazysizes.min.js",revision:"d8513e7860f747ccf55c52308943beab"},{url:"scripts/main.js",revision:"83e5a26ff07ce6045fb623a9312dee74"},{url:"scripts/materialize-plm.min.js",revision:"b339732d61f433f326d5f6279626e5aa"},{url:"scripts/network.min.js",revision:"2d7badac11efd69350ba512ed3c66719"},{url:"scripts/sweetalert2.js",revision:"3559ee1361b74120451d7ce67320eed4"},{url:"styles/main.css",revision:"aa48f22b56c97daf9348a4baa46e2ad8"},{url:"styles/materialize.min.css",revision:"1035ecff3f17989aa89f6bb37efa21ed"}],{})}));
//# sourceMappingURL=sw.js.map
