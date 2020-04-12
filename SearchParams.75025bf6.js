parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EcQx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=i;var e=a(require("react")),r=require("@reach/router"),t=require("@emotion/core");function a(e){return e&&e.__esModule?e:{default:e}}function i({name:e,animal:a,breed:i,media:l,location:s,id:n}){let o="http://placecorgi.com/300/300";return l.length&&(o=l[0].small),(0,t.jsx)(r.Link,{to:`/details/${n}`,className:"pet"},(0,t.jsx)("div",{className:"image-container"},(0,t.jsx)("img",{src:o,alt:e})),(0,t.jsx)("div",{className:"info"},(0,t.jsx)("h1",null,e),(0,t.jsx)("h2",null,`${a} - ${i} - ${s}`)))}
},{"react":"n8MK","@reach/router":"VJZj","@emotion/core":"haMh"}],"tKTj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("react")),t=a(require("./Pet")),r=require("@emotion/core");function a(e){return e&&e.__esModule?e:{default:e}}const s=({pets:e})=>(0,r.jsx)("div",{className:"search"},0===e.length?(0,r.jsx)("h1",null,"No Pets Found"):e.map(e=>(0,r.jsx)(t.default,{animal:e.type,key:e.id,name:e.name,breed:e.breeds.primary,media:e.photos,location:`${e.contact.address.city}, ${e.contact.address.state}`,id:e.id})));var d=s;exports.default=d;
},{"react":"n8MK","./Pet":"EcQx","@emotion/core":"haMh"}],"pmSn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("react")),t=require("@emotion/core");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=n?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(o,u,a):o[u]=e[u]}return o.default=e,t&&t.set(e,o),o}const n=(r,o,n)=>{const[u,a]=(0,e.useState)(o),l=`use-dropdown-${r.replace(" ","").toLowerCase()}`;return[u,()=>(0,t.jsx)("label",{htmlFor:"{id}"},r,(0,t.jsx)("select",{id:l,value:u,onChange:e=>a(e.target.value),onBlur:e=>a(e.target.value),disabled:0===n.length},(0,t.jsx)("option",null,"All"),n.map(e=>(0,t.jsx)("option",{key:e,value:e},e)))),a]};var u=n;exports.default=u;
},{"react":"n8MK","@emotion/core":"haMh"}],"oLoL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=s(require("react")),t=s(require("@frontendmasters/pet")),r=u(require("./Results")),o=u(require("./useDropdown")),a=u(require("./ThemeContext")),n=require("@emotion/core");function u(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=o?Object.getOwnPropertyDescriptor(e,a):null;n&&(n.get||n.set)?Object.defineProperty(r,a,n):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}const i=()=>{const[u,l]=(0,e.useState)("Seattle, WA"),[s,i]=(0,e.useState)([]),[c,d]=(0,o.default)("animal","dog",t.ANIMALS),[f,p,j]=(0,o.default)("Breed","",s),[m,v]=(0,e.useState)([]),[x,b]=(0,e.useContext)(a.default);return(0,e.useEffect)(()=>{i([]),j(""),t.default.breeds(c).then(({breeds:e})=>{const t=e.map(({name:e})=>e);i(t)},console.error)},[c,j,i]),(0,n.jsx)("div",{className:"search-params"},(0,n.jsx)("form",{onSubmit:e=>{e.preventDefault(),async function(){const{animals:e}=await t.default.animals({location:u,breed:f,type:c});v(e||[])}()}},(0,n.jsx)("label",{htmlFor:"location"},"Location",(0,n.jsx)("input",{type:"text",id:"location",value:u,placeholder:"Location",onChange:e=>l(e.target.value)})),(0,n.jsx)(d,null),(0,n.jsx)(p,null),(0,n.jsx)("label",{htmlFor:"theme"},"Theme",(0,n.jsx)("select",{id:"theme",value:x,onChange:e=>b(e.target.value),onBlur:e=>b(e.target.value)},(0,n.jsx)("option",{value:"peru"},"Peru"),(0,n.jsx)("option",{value:"darkblue"},"Dark blue"),(0,n.jsx)("option",{value:"mediumorchid"},"Medium orchid"),(0,n.jsx)("option",{value:"green"},"Green"))),(0,n.jsx)("button",{style:{backgroundColor:x}},"Submit")),(0,n.jsx)(r.default,{pets:m}))};var c=i;exports.default=c;
},{"react":"n8MK","@frontendmasters/pet":"OpLS","./Results":"tKTj","./useDropdown":"pmSn","./ThemeContext":"DIxv","@emotion/core":"haMh"}]},{},[], null)
//# sourceMappingURL=/SearchParams.75025bf6.js.map