(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[836,404,969,452,373],{5751:function(e,t,a){Promise.resolve().then(a.t.bind(a,5250,23)),Promise.resolve().then(a.bind(a,720)),Promise.resolve().then(a.bind(a,9753)),Promise.resolve().then(a.bind(a,5543))},8792:function(e,t,a){"use strict";a.d(t,{default:function(){return r.a}});var n=a(5250),r=a.n(n)},720:function(e,t,a){"use strict";a.r(t);var n=a(3827),r=a(4367),s=a(8792),i=a(7907);t.default=e=>{let{className:t}=e,a=(0,i.usePathname)(),l=a.split("/").filter(e=>e),o=[{label:"Home",href:"/","aria-label":"/"===a?"page":void 0}];return l.forEach((e,t)=>{let n="/".concat(l.slice(0,t+1).join("/"));"page"!==e&&o.push({label:(0,r.OI)(e.replace(/[-_]/g," "))||"",href:n,"aria-label":a===n?"page":void 0})}),(0,n.jsx)("nav",{"aria-label":"Breadcrumb",className:t,children:(0,n.jsx)("ol",{className:"inline-flex",role:"list",children:o.map((e,t)=>{let{label:a,...r}=e;return(0,n.jsxs)("li",{className:"mx-1 capitalize",role:"listitem",children:[t>0&&(0,n.jsx)("span",{className:"inlin-block mr-1",children:"/"}),t!==o.length-1?(0,n.jsx)(s.default,{className:"text-primary dark:text-darkmode-primary",...r,children:a}):(0,n.jsx)("span",{className:"text-light dark:text-darkmode-light",children:a})]},t)})})})}},9753:function(e,t,a){"use strict";a.r(t);var n=a(3827),r=a(703),s=a(4090);t.default=e=>{let{src:t,fallback:a,...i}=e,[l,o]=(0,s.useState)(t);return(0,s.useEffect)(()=>{o(t)},[t]),(0,n.jsx)(r.default,{...i,src:l,onError:()=>{o(a)}})}},5543:function(e,t,a){"use strict";a.r(t);var n=a(3827),r=a(145),s=a(4367),i=a(7907);t.default=e=>{let{title:t,meta_title:a,image:l,description:o,canonical:c,noindex:m}=e,{meta_image:u,meta_author:p,meta_description:g}=r.metadata,{base_url:d}=r.site,h=(0,i.usePathname)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("title",{children:(0,s.ab)(a||t||r.site.title)}),c&&(0,n.jsx)("link",{rel:"canonical",href:c,itemProp:"url"}),m&&(0,n.jsx)("meta",{name:"robots",content:"noindex,nofollow"}),(0,n.jsx)("meta",{name:"description",content:(0,s.ab)(o||g)}),(0,n.jsx)("meta",{name:"author",content:p}),(0,n.jsx)("meta",{property:"og:title",content:(0,s.ab)(a||t||r.site.title)}),(0,n.jsx)("meta",{property:"og:description",content:(0,s.ab)(o||g)}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:"".concat(d,"/").concat(h.replace("/",""))}),(0,n.jsx)("meta",{name:"twitter:title",content:(0,s.ab)(a||t||r.site.title)}),(0,n.jsx)("meta",{name:"twitter:description",content:(0,s.ab)(o||g)}),(0,n.jsx)("meta",{property:"og:image",content:"".concat(d).concat(l||u)}),(0,n.jsx)("meta",{name:"twitter:image",content:"".concat(d).concat(l||u)}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}},4367:function(e,t,a){"use strict";a.d(t,{OI:function(){return s},ab:function(){return l},gI:function(){return r},nR:function(){return i}}),a(3439);var n=a(2009);let r=(e,t)=>({__html:t?n.TU.parse(e):n.TU.parseInline(e)}),s=e=>e.replace(/^[\s_]+|[\s_]+$/g,"").replace(/[_\s]+/g," ").replace(/^[a-z]/,function(e){return e.toUpperCase()}),i=e=>s(e).split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "),l=e=>o(n.TU.parse(e).replace(/<\/?[^>]+(>|$)/gm,"").replace(/[\r\n]\s*[\r\n]/gm,"")),o=e=>{let t={"&nbsp;":" ","&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};return e.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g,e=>t[e])}},145:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"Nextplate","base_url":"https://businessai.net","logo":"/images/logo.png","logo_darkmode":"/images/logo-darkmode.png","logo_width":"150","logo_height":"27","logo_text":"Business AI"},"settings":{"search":true,"sticky_header":true,"theme_switcher":true,"default_theme":"system","pagination":2,"summary_length":200,"blog_folder":"blog"},"params":{"copyright":"Designed And Developed by [Business AI](https://businessesai.net)"},"navigation_button":{"enable":true,"label":"Get Started","link":"https://businessesai.net/elements"},"disqus":{"enable":true,"shortname":"Business AI","settings":{}},"metadata":{"meta_author":"Themefisher","meta_image":"/images/og-image.png","meta_description":"Next Boilerplate"}}')}},function(e){e.O(0,[14,703,971,69,744],function(){return e(e.s=5751)}),_N_E=e.O()}]);