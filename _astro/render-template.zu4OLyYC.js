import{A as g,c as u}from"./astro/assets-service.adgvQEOQ.js";import{m as a,H as m,i as d,e as $,a as S,b as A}from"./hoisted.e3IDx96y.js";function R(t){return!(t.length!==3||!t[0]||typeof t[0]!="object")}function p(t,e,n){const r=e?.split("/").pop()?.replace(".astro","")??"",s=(...o)=>{if(!R(o))throw new g({...u,message:u.message(r)});return t(...o)};return Object.defineProperty(s,"name",{value:r,writable:!1}),s.isAstroComponentFactory=!0,s.moduleId=e,s.propagation=n,s}function T(t){return p(t.factory,t.moduleId,t.propagation)}function q(t,e,n){return typeof t=="function"?p(t,e,n):T(t)}const C=Symbol.for("astro:render");function I(t){return Object.defineProperty(t,C,{value:!0})}function b(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=b(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function h(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=b(t))&&(r&&(r+=" "),r+=e);return r}const P=/^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i,j=/^(contenteditable|draggable|spellcheck|value)$/i,x=/^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i,D=new Set(["set:html","set:text"]),i=(t,e=!0)=>e?String(t).replace(/&/g,"&#38;").replace(/"/g,"&#34;"):t,H=t=>t.toLowerCase()===t?t:t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),c=t=>Object.entries(t).filter(([e,n])=>typeof n=="string"&&n.trim()||typeof n=="number").map(([e,n])=>e[0]!=="-"&&e[1]!=="-"?`${H(e)}:${n}`:`${e}:${n}`).join(";");function W(t,e,n=!0){if(t==null)return"";if(t===!1)return j.test(e)||x.test(e)?a(` ${e}="false"`):"";if(D.has(e))return console.warn(`[astro] The "${e}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${e}={value}\`) instead of the dynamic spread syntax (\`{...{ "${e}": value }}\`).`),"";if(e==="class:list"){const r=i(h(t),n);return r===""?"":a(` ${e.slice(0,-5)}="${r}"`)}if(e==="style"&&!(t instanceof m)){if(Array.isArray(t)&&t.length===2)return a(` ${e}="${i(`${c(t[0])};${t[1]}`,n)}"`);if(typeof t=="object")return a(` ${e}="${i(c(t),n)}"`)}return e==="className"?a(` class="${i(t,n)}"`):t===!0&&(e.startsWith("data-")||P.test(e))?a(` ${e}`):a(` ${e}="${i(t,n)}"`)}function y(t){const e=[],n={write:s=>e.push(s)},r=t(n);return{async renderToFinalDestination(s){for(const o of e)s.write(o);n.write=o=>s.write(o),await r}}}function*E(){yield I({type:"maybe-head"})}const l=Symbol.for("astro:slot-string");class L extends m{instructions;[l];constructor(e,n){super(e),this.instructions=n,this[l]=!0}}async function f(t,e){if(e=await e,e instanceof L)t.write(e);else if(d(e))t.write(e);else if(Array.isArray(e)){const n=e.map(r=>y(s=>f(s,r)));for(const r of n)r&&await r.renderToFinalDestination(t)}else if(typeof e=="function")await f(t,e());else if(typeof e=="string")t.write(a($(e)));else if(!(!e&&e!==0))if(S(e))await e.render(t);else if(v(e))await e.render(t);else if(F(e))await e.render(t);else if(ArrayBuffer.isView(e))t.write(e);else if(typeof e=="object"&&(Symbol.asyncIterator in e||Symbol.iterator in e))for await(const n of e)await f(t,n);else t.write(e)}const M=Symbol.for("astro.componentInstance");function F(t){return typeof t=="object"&&!!t[M]}const w=Symbol.for("astro.renderTemplateResult");class O{[w]=!0;htmlParts;expressions;error;constructor(e,n){this.htmlParts=e,this.error=void 0,this.expressions=n.map(r=>A(r)?Promise.resolve(r).catch(s=>{if(!this.error)throw this.error=s,s}):r)}async render(e){const n=this.expressions.map(r=>y(s=>{if(r||r===0)return f(s,r)}));for(let r=0;r<this.htmlParts.length;r++){const s=this.htmlParts[r],o=n[r];e.write(a(s)),o&&await o.renderToFinalDestination(e)}}}function v(t){return typeof t=="object"&&!!t[w]}function N(t,...e){return new O(t,e)}export{W as a,q as c,E as m,N as r};
