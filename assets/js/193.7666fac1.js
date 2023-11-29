"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[193],{4137:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>p});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,p=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(p,o(o({ref:n},m),{},{components:t})):r.createElement(p,o({ref:n},m))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8207:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(7462),a=t(7294),i=t(6010),o=t(7325),l=t(107),c=t(3699);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function m(e){let{as:n,id:t,...m}=e;const{navbar:{hideOnScroll:d}}=(0,l.L)();if("h1"===n||!t)return a.createElement(n,(0,r.Z)({},m,{id:void 0}));const u=(0,o.translate)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:t});return a.createElement(n,(0,r.Z)({},m,{className:(0,i.Z)("anchor",d?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar,m.className),id:t}),m.children,a.createElement(c.Z,{className:"hash-link",to:`#${t}`,"aria-label":u,title:u},"\u200b"))}},8569:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(7294),a=t(4137),i=t(7462),o=t(1514);var l=t(2053);var c=t(3699);var s=t(2286);var m=t(8207);function d(e){return r.createElement(m.Z,e)}var u=t(6010);const f={containsTaskList:"containsTaskList_mC6p"};const p={img:"img_ev3q"};var h=t(3702),v=t(7325);const g="admonition_LlT9",b="admonitionHeading_tbUL",E="admonitionIcon_kALy",y="admonitionContent_S0QG";const C={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(v.default,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(v.default,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(v.default,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(v.default,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(v.default,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},N={secondary:"note",important:"info",success:"tip",warning:"danger"};function L(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=r.Children.toArray(e),t=n.find((e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),a=r.createElement(r.Fragment,null,n.filter((e=>e!==t)));return{mdxAdmonitionTitle:t,rest:a}}(e.children);return{...e,title:e.title??n,children:t}}const O={head:function(e){const n=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:n,originalType:t,...a}=e.props;return r.createElement(e.props.originalType,a)}return e}(e):e));return r.createElement(o.Z,e,n)},code:function(e){const n=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return r.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&n.includes(e.props?.mdxType)))?r.createElement("code",e):r.createElement(l.default,e)},a:function(e){return r.createElement(c.Z,e)},pre:function(e){return r.createElement(l.default,(0,r.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const n=r.Children.toArray(e.children),t=n.find((e=>r.isValidElement(e)&&"summary"===e.props?.mdxType)),a=r.createElement(r.Fragment,null,n.filter((e=>e!==t)));return r.createElement(s.default,(0,i.Z)({},e,{summary:t}),a)},ul:function(e){return r.createElement("ul",(0,i.Z)({},e,{className:(n=e.className,(0,u.Z)(n,n?.includes("contains-task-list")&&f.containsTaskList))}));var n},img:function(e){return r.createElement("img",(0,i.Z)({loading:"lazy"},e,{className:(n=e.className,(0,u.Z)(n,p.img))}));var n},h1:e=>r.createElement(d,(0,i.Z)({as:"h1"},e)),h2:e=>r.createElement(d,(0,i.Z)({as:"h2"},e)),h3:e=>r.createElement(d,(0,i.Z)({as:"h3"},e)),h4:e=>r.createElement(d,(0,i.Z)({as:"h4"},e)),h5:e=>r.createElement(d,(0,i.Z)({as:"h5"},e)),h6:e=>r.createElement(d,(0,i.Z)({as:"h6"},e)),admonition:function(e){const{children:n,type:t,title:a,icon:i}=L(e),o=function(e){const n=N[e]??e,t=C[n];return t||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),C.info)}(t),l=a??o.label,{iconComponent:c}=o,s=i??r.createElement(c,null);return r.createElement("div",{className:(0,u.Z)(h.k.common.admonition,h.k.common.admonitionType(e.type),"alert",`alert--${o.infimaClassName}`,g)},r.createElement("div",{className:b},r.createElement("span",{className:E},s),l),r.createElement("div",{className:y},n))},mermaid:()=>null};function k(e){let{children:n}=e;return r.createElement(a.Zo,{components:O},n)}},7086:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(7462),a=t(7294),i=t(6010),o=t(2728);const l={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},c="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:n,...t}=e;return a.createElement("div",{className:(0,i.Z)(l.tableOfContents,"thin-scrollbar",n)},a.createElement(o.Z,(0,r.Z)({},t,{linkClassName:c,linkActiveClassName:s})))}},2728:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(7462),a=t(7294),i=t(107);function o(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):r.push(a)})),r}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[{...e,children:n}]:n}))}function c(e){const n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function s(e,n){let{anchorTopOffset:t}=n;const r=e.find((e=>c(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function m(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=m();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const r=[];for(let a=n;a<=t;a+=1)r.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),c=s(l,{anchorTopOffset:t.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===m)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}function u(e){let{toc:n,className:t,linkClassName:r,isChild:i}=e;return n.length?a.createElement("ul",{className:i?void 0:t},n.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(u,{isChild:!0,toc:e.children,className:t,linkClassName:r}))))):null}const f=a.memo(u);function p(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...p}=e;const h=(0,i.L)(),v=m??h.tableOfContents.minHeadingLevel,g=u??h.tableOfContents.maxHeadingLevel,b=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>l({toc:o(n),minHeadingLevel:t,maxHeadingLevel:r})),[n,t,r])}({toc:n,minHeadingLevel:v,maxHeadingLevel:g});return d((0,a.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:v,maxHeadingLevel:g}}),[c,s,v,g])),a.createElement(f,(0,r.Z)({toc:b,className:t,linkClassName:c},p))}}}]);