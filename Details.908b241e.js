parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"a8IE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("react")),t=require("@emotion/core");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(a,i,o):a[i]=e[i]}return a.default=e,t&&t.set(e,a),a}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class i extends e.Component{constructor(...e){super(...e),n(this,"state",{photos:[],active:0}),n(this,"handleIndexClick",e=>{this.setState({active:+e.target.dataset.index})})}static getDerivedStateFromProps({media:e}){let t=["http://placecorgi.com/600/600"];return e.length&&(t=e.map(({large:e})=>e)),{photos:t}}render(){const{photos:e,active:r}=this.state;return(0,t.jsx)("div",{className:"carousel"},(0,t.jsx)("img",{src:e[r],alt:"animal"}),(0,t.jsx)("div",{className:"carousel-smaller"},e.map((e,a)=>(0,t.jsx)("img",{key:e,onClick:this.handleIndexClick,"data-index":a,src:e,className:a===r?"active":"",alt:"animal thumnail"}))))}}var o=i;exports.default=o;
},{"react":"n8MK","@emotion/core":"haMh"}],"Vlsp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("react")),r=require("@reach/router"),t=require("@emotion/core");function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function n(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o();if(r&&r.has(e))return r.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=n?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(t,i,a):t[i]=e[i]}return t.default=e,r&&r.set(e,t),t}function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}class a extends e.Component{constructor(...e){super(...e),i(this,"state",{hasError:!1,redirect:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,r){console.error("ErrorBoundary cought an erro",e,r)}componentDidUpdate(){this.state.hasError&&setTimeout(()=>{this.setState({redirect:!0})},5e3)}render(){return this.state.redirect?(0,t.jsx)(r.Redirect,{to:"/"}):this.state.hasError?(0,t.jsx)("h1",null,"There was an error with this listing. ",(0,t.jsx)(r.Link,{to:"/"},"Click here")," ","to go to the home page or wait 5 seconds"):this.props.children}}var s=a;exports.default=s;
},{"react":"n8MK","@reach/router":"VJZj","@emotion/core":"haMh"}],"XGSj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=f;var e=u(require("react")),t=s(require("@frontendmasters/pet")),r=require("@reach/router"),o=s(require("./Carousel")),n=s(require("./ErrorBoundary")),a=s(require("./ThemeContext")),l=require("@emotion/core");function s(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=o?Object.getOwnPropertyDescriptor(e,n):null;a&&(a.get||a.set)?Object.defineProperty(r,n,a):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const c=(0,e.lazy)(()=>require("_bundle_loader")(require.resolve("./Modal")));class p extends e.Component{constructor(...e){super(...e),d(this,"state",{loading:!0,showModal:!1}),d(this,"toggleModal",()=>this.setState({showModal:!this.state.showModal})),d(this,"adopt",()=>(0,r.navigate)(this.state.url))}componentDidMount(){t.default.animal(this.props.id).then(({animal:e})=>{this.setState({url:e.url,name:e.name,animal:e.type,location:`${e.contact.address.city}, ${e.contact.address.state}`,description:e.description,media:e.photos,breed:e.breeds.primary,loading:!1})},console.error)}render(){if(this.state.loading)return(0,l.jsx)("h1",null,"Loading ...");const{animal:e,breed:t,location:r,description:n,name:s,media:i,showModal:u}=this.state;return(0,l.jsx)("div",{className:"details"},(0,l.jsx)(o.default,{media:i}),(0,l.jsx)("div",null,(0,l.jsx)("h1",null,s),(0,l.jsx)("h2",null,`${e} - ${t} - ${r}`),(0,l.jsx)(a.default.Consumer,null,([e])=>(0,l.jsx)("button",{onClick:this.toggleModal,style:{backgroundColor:e}},"Adopt ",s)),(0,l.jsx)("p",null,n),u?(0,l.jsx)(c,null,(0,l.jsx)("div",null,(0,l.jsx)("h1",null,"Whould you like to adopt ",s,"? "),(0,l.jsx)("div",{className:"buttons"},(0,l.jsx)("button",{onClick:this.adopt},"Yes"),(0,l.jsx)("button",{onClick:this.toggleModal},"No, not now")))):null))}}function f(e){return(0,l.jsx)(n.default,null,(0,l.jsx)(p,e))}
},{"react":"n8MK","@frontendmasters/pet":"OpLS","@reach/router":"VJZj","./Carousel":"a8IE","./ErrorBoundary":"Vlsp","./ThemeContext":"DIxv","@emotion/core":"haMh","_bundle_loader":"TUK3","./Modal":[["Modal.6ec4aa95.js","DtdL"],"Modal.6ec4aa95.js.map","DtdL"]}],"FheM":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"TUK3":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"FheM"}],"Yi9z":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("TUK3");b.register("js",require("Yi9z"));b.load([]).then(function(){require("XGSj");});
},{}]},{},[0], null)
//# sourceMappingURL=/Details.908b241e.js.map