import{A as u,a as A,b as y,I,i as P,g as z}from"./astro/assets-service.adgvQEOQ.js";import{m as E}from"./hoisted.e3IDx96y.js";import{a as l,c as S,r as f,m as k}from"./render-template.zu4OLyYC.js";const H="4.0.3";function L(){return i=>{if(typeof i=="string")throw new u({...A,message:A.message(JSON.stringify(i))});let r=[...Object.values(i)];if(r.length===0)throw new u({...y,message:y.message(JSON.stringify(i))});return Promise.all(r.map(o=>o()))}}function v(t){return{site:t?new URL(t):void 0,generator:`Astro v${H}`,glob:L()}}function a(t={},i,{class:r}={}){let o="";r&&(typeof t.class<"u"?t.class+=` ${r}`:typeof t["class:list"]<"u"?t["class:list"]=[t["class:list"],r]:t.class=r);for(const[e,n]of Object.entries(t))o+=l(n,e,!0);return E(o)}const T=v("https://astro-cactus.chriswilliams.dev/"),U=S(async(t,i,r)=>{const o=t.createAstro(T,i,r);o.self=U;const e=o.props;if(e.alt===void 0||e.alt===null)throw new u(I);typeof e.width=="string"&&(e.width=parseInt(e.width)),typeof e.height=="string"&&(e.height=parseInt(e.height));const n=await g(e),m={};return n.srcSet.values.length>0&&(m.srcset=n.srcSet.attribute),f`${k()}<img${l(n.src,"src")}${a(m)}${a(n.attributes)}>`},"/home/runner/work/woofmung/woofmung/node_modules/.pnpm/astro@4.0.3_typescript@5.3.3/node_modules/astro/components/Image.astro",void 0),J=v("https://astro-cactus.chriswilliams.dev/"),R=S(async(t,i,r)=>{const o=t.createAstro(J,i,r);o.self=R;const e=["webp"],n="png",m=["gif","svg","jpg","jpeg"],{formats:F=e,pictureAttributes:_={},fallbackFormat:p,...s}=o.props;if(s.alt===void 0||s.alt===null)throw new u(I);const O=await Promise.all(F.map(async $=>await g({...s,format:$,widths:s.widths,densities:s.densities})));let w=p??n;!p&&P(s.src)&&m.includes(s.src.format)&&(w=s.src.format);const d=await g({...s,format:w,widths:s.widths,densities:s.densities}),h={},b={};return s.sizes&&(b.sizes=s.sizes),d.srcSet.values.length>0&&(h.srcset=d.srcSet.attribute),f`${k()}<picture${a(_)}> ${Object.entries(O).map(([$,c])=>{const j=s.densities||!s.densities&&!s.widths?`${c.src}${c.srcSet.values.length>0?", "+c.srcSet.attribute:""}`:c.srcSet.attribute;return f`<source${l(j,"srcset")}${l("image/"+c.options.format,"type")}${a(b)}>`})} <img${l(d.src,"src")}${a(h)}${a(d.attributes)}> </picture>`},"/home/runner/work/woofmung/woofmung/node_modules/.pnpm/astro@4.0.3_typescript@5.3.3/node_modules/astro/components/Picture.astro",void 0),x={service:{entrypoint:"astro/assets/services/sharp",config:{}},domains:["webmention.io"],remotePatterns:[]};new URL("file:///home/runner/work/woofmung/woofmung/dist/");const g=async t=>await z(t,x);export{U as $,g,a as s};
