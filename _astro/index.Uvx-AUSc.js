import{R as m,m as u,F as d}from"./hoisted.8SEDVz5s.js";import{$ as g}from"./_astro_assets.EoXcxX_t.js";import"./astro/assets-service.adgvQEOQ.js";import"./render-template.yMYvqz-v.js";const h="astro:jsx",i=Symbol("empty"),c=t=>t;function l(t){return t&&typeof t=="object"&&t[h]}function f(t){if(typeof t.type=="string")return t;const e={};if(l(t.props.children)){const r=t.props.children;if(!l(r)||!("slot"in r.props))return;const o=c(r.props.slot);e[o]=[r],e[o].$$slot=!0,delete r.props.slot,delete t.props.children}Array.isArray(t.props.children)&&(t.props.children=t.props.children.map(r=>{if(!l(r)||!("slot"in r.props))return r;const o=c(r.props.slot);return Array.isArray(e[o])?e[o].push(r):(e[o]=[r],e[o].$$slot=!0),delete r.props.slot,i}).filter(r=>r!==i)),Object.assign(t.props,e)}function p(t){return typeof t=="string"?u(t):Array.isArray(t)?t.map(e=>p(e)):t}function y(t){if("set:html"in t.props||"set:text"in t.props){if("set:html"in t.props){const e=p(t.props["set:html"]);delete t.props["set:html"],Object.assign(t.props,{children:e});return}if("set:text"in t.props){const e=t.props["set:text"];delete t.props["set:text"],Object.assign(t.props,{children:e});return}}}function n(t,e){const r={[m]:"astro:jsx",[h]:!0,type:t,props:e??{}};return y(r),f(r),r}const b={src:"/_astro/pug.eWeVCgIi.jpeg",width:550,height:460,format:"jpg",orientation:1},w={title:"Testing testing 123!",publishDate:"13 May 2022",description:"Hello world!!! This is an example blog post showcasing some of the cool stuff Astro Cactus theme can do.",tags:["example","blog","cool"],draft:!0,minutesRead:"1 min read"};function _(){return[{depth:2,slug:"hello-world",text:"Hello World"},{depth:2,slug:"using-some-markdown-elements",text:"Using some markdown elements"},{depth:2,slug:"tailwind-css-prose-styling",text:"Tailwind CSS Prose styling"}]}const C=!0;function a(t){const e={a:"a","astro-image":"astro-image",blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t.components},r=e["astro-image"];return n(d,{children:[n(e.h2,{id:"hello-world",children:"Hello World"}),`
`,n(e.p,{children:["Following is an example blog post written in an mdx file. You can find me @ src/content/post/hello-world/index.mdx. Here you can add/update/delete details and watch the changes live when running in develop mode, ",n(e.code,{children:"pnpm dev"})]}),`
`,n(e.p,{children:n(r,{src:b,alt:"A pug in the woods, wrapped in a blanket"})}),`
`,n(e.h2,{id:"using-some-markdown-elements",children:"Using some markdown elements"}),`
`,n(e.p,{children:"Here we have a simple js code block."}),`
`,n(e.pre,{class:"astro-code dracula",style:{backgroundColor:"#282A36",color:"#F8F8F2",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},tabindex:"0",children:n(e.code,{children:n(e.span,{class:"line",children:[n(e.span,{style:{color:"#FF79C6"},children:"let"}),n(e.span,{style:{color:"#F8F8F2"},children:" string "}),n(e.span,{style:{color:"#FF79C6"},children:"="}),n(e.span,{style:{color:"#E9F284"},children:' "'}),n(e.span,{style:{color:"#F1FA8C"},children:"JavaScript syntax highlighting"}),n(e.span,{style:{color:"#E9F284"},children:'"'}),n(e.span,{style:{color:"#F8F8F2"},children:";"})]})})}),`
`,n(e.p,{children:["This is styled by Shiki, set via the ",n(e.a,{href:"https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting",rel:"nofollow, noopener, noreferrer",target:"_blank",children:"config"})," for Astro."]}),`
`,n(e.p,{children:["You can choose your own theme from this ",n(e.a,{href:"https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes",rel:"nofollow, noopener, noreferrer",target:"_blank",children:"library"}),", which is currently set to Dracula, in the file ",n(e.code,{children:"astro.config.mjs"}),"."]}),`
`,n(e.p,{children:"Here is a horizontal rule."}),`
`,n(e.hr,{}),`
`,n(e.p,{children:"Here is a list:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Item number 1"}),`
`,n(e.li,{children:"Item number 2"}),`
`,n(e.li,{children:"Item number 3"}),`
`]}),`
`,n(e.p,{children:"And an ordered list:"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:"James Madison"}),`
`,n(e.li,{children:"James Monroe"}),`
`,n(e.li,{children:"John Quincy Adams"}),`
`]}),`
`,n(e.p,{children:"Here is a table:"}),`




















`,n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Item"}),n(e.th,{style:{textAlign:"center"},children:"Price"}),n(e.th,{style:{textAlign:"right"},children:"# In stock"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"Juicy Apples"}),n(e.td,{style:{textAlign:"center"},children:"1.99"}),n(e.td,{style:{textAlign:"right"},children:"739"})]}),n(e.tr,{children:[n(e.td,{children:"Bananas"}),n(e.td,{style:{textAlign:"center"},children:"1.89"}),n(e.td,{style:{textAlign:"right"},children:"6"})]})]})]}),`
`,n(e.h2,{id:"tailwind-css-prose-styling",children:"Tailwind CSS Prose styling"}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:`I’m a simple blockquote.
I’m styled by Tailwind CSS prose plugin`}),`
`]})]})}function x(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(a,{...t})}):a(t)}const j="src/content/post/hello-world/index.mdx",H="/home/runner/work/woofmung.github.io/woofmung.github.io/src/content/post/hello-world/index.mdx",s=(t={})=>x({...t,components:{Fragment:d,...t.components,"astro-image":t.components?.img??g}});s[Symbol.for("mdx-component")]=!0;s[Symbol.for("astro.needsHeadRendering")]=!w.layout;s.moduleId="/home/runner/work/woofmung.github.io/woofmung.github.io/src/content/post/hello-world/index.mdx";export{s as Content,C as __usesAstroImage,s as default,H as file,w as frontmatter,_ as getHeadings,j as url};
