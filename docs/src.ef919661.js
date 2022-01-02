parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"P7I2":[function(require,module,exports) {
!function(){"use strict";var e,t,n,r,a,o,s=function(e){e.defaults=function(e){if(!e)return e;for(var t=1,n=arguments.length;t<n;t++){var r=arguments[t];if(r)for(var a in r)null==e[a]&&(e[a]=r[a])}return e},e.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var t=/(.)^/,n={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"},r=/\\|'|\r|\n|\t|\u2028|\u2029/g;return e.template=function(a,o,s){var i;s=e.defaults({},s,e.templateSettings);var c=new RegExp([(s.escape||t).source,(s.interpolate||t).source,(s.evaluate||t).source].join("|")+"|$","g"),u=0,l="__p+='";a.replace(c,function(e,t,o,s,i){return l+=a.slice(u,i).replace(r,function(e){return"\\"+n[e]}),t&&(l+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'"),o&&(l+="'+\n((__t=("+o+"))==null?'':__t)+\n'"),s&&(l+="';\n"+s+"\n__p+='"),u=i+e.length,e}),l+="';\n",s.variable||(l="with(obj||{}){\n"+l+"}\n"),l="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+l+"return __p;\n";try{i=new Function(s.variable||"obj","_",l)}catch(p){throw p.source=l,p}if(o)return i(o,e);var f=function(t){return i.call(this,t,e)};return f.source="function("+(s.variable||"obj")+"){\n"+l+"}",f},e}({});function i(){var e=location.href.indexOf("examples/");return location.href.substr(0,e)}function c(e,t){if(!(this instanceof c))return new c(e,t);var n,r;if("object"!=typeof e)try{e=JSON.parse(e)}catch(a){return}t&&(n=t.template,r=t.framework),!n&&e.templates&&(n=e.templates.todomvc),!r&&document.querySelector("[data-framework]")&&(r=document.querySelector("[data-framework]").dataset.framework),this.template=n,e.backend?(this.frameworkJSON=e.backend,this.frameworkJSON.issueLabel=r,this.append({backend:!0})):e[r]&&(this.frameworkJSON=e[r],this.frameworkJSON.issueLabel=r,this.append()),this.fetchIssueCount()}"todomvc.com"===location.hostname&&(e=window,t=document,n="script",r="ga",e.GoogleAnalyticsObject=r,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,a=t.createElement(n),o=t.getElementsByTagName(n)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",o.parentNode.insertBefore(a,o),ga("create","UA-31081062-1","auto"),ga("send","pageview")),c.prototype.append=function(e){var t=document.createElement("aside");if(t.innerHTML=s.template(this.template,this.frameworkJSON),t.className="learn",e&&e.backend){var n=t.querySelector(".source-links"),r=n.firstElementChild,a=n.lastElementChild,o=a.getAttribute("href");a.setAttribute("href",o.substr(o.lastIndexOf("http"))),n.innerHTML=r.outerHTML+a.outerHTML}else{var c=t.querySelectorAll(".demo-link");Array.prototype.forEach.call(c,function(e){"http"!==e.getAttribute("href").substr(0,4)&&e.setAttribute("href",i()+e.getAttribute("href"))})}document.body.className=(document.body.className+" learn-bar").trim(),document.body.insertAdjacentHTML("afterBegin",t.outerHTML)},c.prototype.fetchIssueCount=function(){var e=document.getElementById("issue-count-link");if(e){var t=e.href.replace("https://github.com","https://api.github.com/repos"),n=new XMLHttpRequest;n.open("GET",t,!0),n.onload=function(t){var n=JSON.parse(t.target.responseText);if(n instanceof Array){var r=n.length;0!==r&&(e.innerHTML="This app has "+r+" open issues",document.getElementById("issue-count").style.display="inline")}},n.send()}},"tastejs.github.io"===location.hostname&&(location.href=location.href.replace("tastejs.github.io/todomvc","todomvc.com")),function(e,t){if(!location.host)return console.info("Miss the info bar? Run TodoMVC from a server to avoid a cross-origin error.");var n=new XMLHttpRequest;n.open("GET",i()+e,!0),n.send(),n.onload=function(){200===n.status&&t&&t(n.responseText)}}("learn.json",c)}();
},{}],"h3iU":[function(require,module,exports) {

},{}],"hFXD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e={};var t=e;exports.default=t;
},{}],"ge02":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r,exports.checkComponentNameIsValid=n;var e=t(require("../registry.js"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!e)throw new Error(t)}function n(t){r("string"==typeof t,"The name should be a string"),r(!!e.default[t],`The coelement of the given name is not registered: ${t}`)}
},{"../registry.js":"hFXD"}],"jvwM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./util/check.js"),t=l(require("./registry.js"));function l(e){return e&&e.__esModule?e:{default:e}}var r=(l,r)=>{let u;l?((0,e.checkComponentNameIsValid)(l),u=[l]):u=Object.keys(t.default),u.map(e=>{[].map.call((r||document).querySelectorAll(t.default[e].sel),t.default[e])})};exports.default=r;
},{"./util/check.js":"ge02","./registry.js":"hFXD"}],"VjIb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BEFORE_MOUNT_KEY=exports.IS_KEY=exports.COMPONENT_NAME_KEY=exports.KEY_EVENT_LISTENERS=exports.COELEMENT_DATA_KEY_PREFIX=void 0;const E="C$";exports.COELEMENT_DATA_KEY_PREFIX="C$";const _="K$";exports.KEY_EVENT_LISTENERS="K$";const t="N$";exports.COMPONENT_NAME_KEY="N$";const e="S$";exports.IS_KEY="S$";const o="B$";exports.BEFORE_MOUNT_KEY="B$";
},{}],"MTXq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./util/const.js"),t=(t,r)=>{const o=new t;o.el=r;const _=t[e.BEFORE_MOUNT_KEY];return Array.isArray(_)&&_.forEach(e=>{e(r,o)}),"function"==typeof o.__mount__&&o.__mount__(),o};exports.default=t;
},{"./util/const.js":"VjIb"}],"pHGY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ready=r;const e="readystatechange";let t;function r(){return t=t||new Promise(t=>{const r=document,n=()=>{"complete"===r.readyState&&(t(),r.removeEventListener(e,n))};r.addEventListener(e,n),n()})}
},{}],"tBOI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.addMountHook=void 0;var e=require("./util/const.js");const o=(e,o,t)=>{e[o]=(e[o]||[]).concat(t)},t=(t,r)=>{o(t,e.BEFORE_MOUNT_KEY,r)};exports.addMountHook=t;var r=o;exports.default=r;
},{"./util/const.js":"VjIb"}],"LfdL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=u(require("./registry.js")),t=u(require("./prep.js")),s=u(require("./init_component.js")),o=u(require("./util/check.js")),r=require("./util/document.js"),n=require("./util/const.js"),a=require("./add_hidden_item.js");function u(e){return e&&e.__esModule?e:{default:e}}const i=(u,i)=>{(0,o.default)("string"==typeof u,"`name` of a class component has to be a string."),(0,o.default)("function"==typeof i,"`Constructor` of a class component has to be a function"),i[n.COMPONENT_NAME_KEY]=u;const d=`${u}-💊`;(0,a.addMountHook)(i,(e,t)=>{e[n.COELEMENT_DATA_KEY_PREFIX+u]=t,e.classList.add(u),e.classList.add(d)});const c=e=>{e.classList.contains(d)||(0,s.default)(i,e)};c.sel=`.${u}:not(.${d})`,e.default[u]=c,(0,r.ready)().then(()=>{(0,t.default)(u)})};var d=i;exports.default=d;
},{"./registry.js":"hFXD","./prep.js":"jvwM","./init_component.js":"MTXq","./util/check.js":"ge02","./util/document.js":"pHGY","./util/const.js":"VjIb","./add_hidden_item.js":"tBOI"}],"yygc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("./util/check.js")),t=require("./util/const.js");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function n(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var o=(r,n)=>{(0,e.checkComponentNameIsValid)(r);const o=n[t.COELEMENT_DATA_KEY_PREFIX+r];return(0,e.default)(o,`no coelement named: ${r}, on the dom: ${n.tagName}`),o};exports.default=o;
},{"./util/check.js":"ge02","./util/const.js":"VjIb"}],"f0JP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=u(require("./get.js")),r=require("./util/check.js"),t=u(require("./registry.js"));function u(e){return e&&e.__esModule?e:{default:e}}var s=(u,s)=>((0,r.checkComponentNameIsValid)(u),t.default[u](s),(0,e.default)(u,s));exports.default=s;
},{"./get.js":"yygc","./util/check.js":"ge02","./registry.js":"hFXD"}],"zxuI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./init_component.js"));function t(e){return e&&e.__esModule?e:{default:e}}var r=e.default;exports.default=r;
},{"./init_component.js":"MTXq"}],"KInX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=u(require("./get.js")),t=require("./util/const.js");function u(e){return e&&e.__esModule?e:{default:e}}var o=(u,o)=>{const r=(0,e.default)(u,o);"function"==typeof r.__unmount__&&r.__unmount__(),o.classList.remove(u,`${u}-💊`),(r[t.KEY_EVENT_LISTENERS]||[]).forEach(e=>{e.remove()}),delete o[t.COELEMENT_DATA_KEY_PREFIX+u],delete r.el};exports.default=o;
},{"./get.js":"yygc","./util/const.js":"VjIb"}],"U9Uy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=e=>{"function"==typeof capsidDebugMessage&&capsidDebugMessage(e)};exports.default=e;
},{}],"PmDB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../util/const.js"),t=a(require("../util/debug_message.js")),r=a(require("../util/check.js")),n=u(require("../add_hidden_item.js"));function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=n?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(r,u,a):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}function a(e){return e&&e.__esModule?e:{default:e}}const i=(o,{at:u}={})=>(a,i,l)=>{const c=a.constructor;(0,r.default)(!!o,`Empty event handler is given: constructor=${c.name} key=${i}`),(0,n.addMountHook)(c,(r,a)=>{const l=e=>{if(!u||[].some.call(r.querySelectorAll(u),t=>t===e.target||t.contains(e.target))){!0&&(0,t.default)({type:"event",module:"💊",color:"#e0407b",e:e,el:r,coel:a}),a[i](e)}};l.remove=(()=>{r.removeEventListener(o,l)}),(0,n.default)(a,e.KEY_EVENT_LISTENERS,l),r.addEventListener(o,l)})};var l=i;exports.default=l;
},{"../util/const.js":"VjIb","../util/debug_message.js":"U9Uy","../util/check.js":"ge02","../add_hidden_item.js":"tBOI"}],"Nncs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./on.js"));function t(e){return e&&e.__esModule?e:{default:e}}var u=t=>{e.default[t]=(0,e.default)(t),e.default[t].at=(u=>(0,e.default)(t,{at:u}))};exports.default=u;
},{"./on.js":"PmDB"}],"k0CH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.triggerToElements=void 0;const e=(e,t,s,o)=>{const r=o=>{e.forEach(e=>{e.dispatchEvent(new CustomEvent(t,{detail:o,bubbles:s}))})};o&&o.then?o.then(r):r(o)};exports.triggerToElements=e;
},{}],"ui07":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../util/event_trigger.js"),t=r(require("../util/check.js"));function r(e){return e&&e.__esModule?e:{default:e}}const u=r=>(u,n,o)=>{const s=o.value,l=u.constructor;(0,t.default)(!!r,`Unable to emits an empty event: constructor=${l.name} key=${n}`),o.value=function(){const t=s.apply(this,arguments);return(0,e.triggerToElements)([this.el],r,!0,t),t}};var n=u;exports.default=n;
},{"../util/event_trigger.js":"k0CH","../util/check.js":"ge02"}],"HTCu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=e=>(t,r)=>({get:function(){return this.el.querySelector(e)},configurable:!1}),t=e=>(t,r)=>({get(){return this.el.querySelectorAll(e)}});e.all=t;var r=e;exports.default=r;
},{}],"kfG5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("../def.js")),t=r(require("../util/check.js"));function r(e){return e&&e.__esModule?e:{default:e}}const u=r=>((0,t.default)("string"==typeof r&&!!r,"Component name must be a non-empty string"),t=>{(0,e.default)(r,t)});var o=u;exports.default=o;
},{"../def.js":"LfdL","../util/check.js":"ge02"}],"o0bd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../add_hidden_item.js"),d=(...d)=>t=>{(0,e.addMountHook)(t,e=>{e.classList.add(...d)})};exports.default=d;
},{"../add_hidden_item.js":"tBOI"}],"aJvL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../prep.js")),r=require("../add_hidden_item.js");function t(e){return e&&e.__esModule?e:{default:e}}var d=t=>d=>{(0,r.addMountHook)(d,r=>{r.innerHTML=t,(0,e.default)(null,r)})};exports.default=d;
},{"../prep.js":"jvwM","../add_hidden_item.js":"tBOI"}],"sXZw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../util/event_trigger.js"),t=r(require("../util/check.js"));function r(e){return e&&e.__esModule?e:{default:e}}var u=(r,u)=>(o,l,n)=>{const s=n.value,c=o.constructor;(0,t.default)(!!r,`Unable to publish empty event: constructor=${c.name} key=${l}`);const a=u||`.sub\\:${r}`;n.value=function(){const t=s.apply(this,arguments);return(0,e.triggerToElements)([].concat.apply([],document.querySelectorAll(a)),r,!1,t),t}};exports.default=u;
},{"../util/event_trigger.js":"k0CH","../util/check.js":"ge02"}],"OroG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./is.js"));function t(e){return e&&e.__esModule?e:{default:e}}var r=(...t)=>r=>{(0,e.default)(...t.map(e=>"sub:"+e))(r)};exports.default=r;
},{"./is.js":"o0bd"}],"IwoR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"on",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"emits",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"wired",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(exports,"component",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(exports,"is",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(exports,"innerHTML",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(exports,"pub",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(exports,"sub",{enumerable:!0,get:function(){return f.default}});var e=d(require("./on.js")),r=d(require("./on_use_handler.js")),t=d(require("./emits.js")),n=d(require("./wired.js")),u=d(require("./component.js")),i=d(require("./is.js")),o=d(require("./inner_html.js")),s=d(require("./pub.js")),f=d(require("./sub.js"));function d(e){return e&&e.__esModule?e:{default:e}}e.default.useHandler=r.default,e.default.useHandler("click");
},{"./on.js":"PmDB","./on_use_handler.js":"Nncs","./emits.js":"ui07","./wired.js":"HTCu","./component.js":"kfG5","./is.js":"o0bd","./inner_html.js":"aJvL","./pub.js":"sXZw","./sub.js":"OroG"}],"zihM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=l(require("./def.js")),t=l(require("./prep.js")),r=l(require("./make.js")),u=l(require("./mount.js")),i=l(require("./unmount.js")),s=l(require("./get.js")),n=require("./add_hidden_item.js"),d=require("./decorators/index.js"),o=l(require("./util/check.js")),a=l(require("./registry.js"));function l(e){return e&&e.__esModule?e:{default:e}}const f=(l,c)=>{(0,o.default)("function"==typeof l.install,"The given capsid module does not have `install` method. Please check the install call."),l.install({def:e.default,prep:t.default,make:r.default,mount:u.default,unmount:i.default,get:s.default,install:f,addMountHook:n.addMountHook,component:d.component,emits:d.emits,innerHTML:d.innerHTML,is:d.is,on:d.on,pub:d.pub,sub:d.sub,wired:d.wired,__registry__:a.default},c||{})};var c=f;exports.default=c;
},{"./def.js":"LfdL","./prep.js":"jvwM","./make.js":"f0JP","./mount.js":"zxuI","./unmount.js":"KInX","./get.js":"yygc","./add_hidden_item.js":"tBOI","./decorators/index.js":"IwoR","./util/check.js":"ge02","./registry.js":"hFXD"}],"PPR6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"def",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"prep",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"make",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"mount",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(exports,"unmount",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(exports,"get",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(exports,"install",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(exports,"addMountHook",{enumerable:!0,get:function(){return f.addMountHook}}),Object.defineProperty(exports,"component",{enumerable:!0,get:function(){return p.component}}),Object.defineProperty(exports,"emits",{enumerable:!0,get:function(){return p.emits}}),Object.defineProperty(exports,"innerHTML",{enumerable:!0,get:function(){return p.innerHTML}}),Object.defineProperty(exports,"is",{enumerable:!0,get:function(){return p.is}}),Object.defineProperty(exports,"on",{enumerable:!0,get:function(){return p.on}}),Object.defineProperty(exports,"pub",{enumerable:!0,get:function(){return p.pub}}),Object.defineProperty(exports,"sub",{enumerable:!0,get:function(){return p.sub}}),Object.defineProperty(exports,"wired",{enumerable:!0,get:function(){return p.wired}}),Object.defineProperty(exports,"__registry__",{enumerable:!0,get:function(){return d.default}});var e=s(require("./def.js")),r=s(require("./prep.js")),t=s(require("./make.js")),n=s(require("./mount.js")),u=s(require("./unmount.js")),o=s(require("./get.js")),i=s(require("./install.js")),f=require("./add_hidden_item.js"),p=require("./decorators/index.js"),d=s(require("./registry.js"));function s(e){return e&&e.__esModule?e:{default:e}}
},{"./def.js":"LfdL","./prep.js":"jvwM","./make.js":"f0JP","./mount.js":"zxuI","./unmount.js":"KInX","./get.js":"yygc","./install.js":"zihM","./add_hidden_item.js":"tBOI","./decorators/index.js":"IwoR","./registry.js":"hFXD"}],"kBNW":[function(require,module,exports) {
"use strict";var t=this&&this.__spreadArrays||function(){for(var t=0,o=0,e=arguments.length;o<e;o++)t+=arguments[o].length;var n=Array(t),r=0;for(o=0;o<e;o++)for(var i=arguments[o],s=0,u=i.length;s<u;s++,r++)n[r]=i[s];return n};Object.defineProperty(exports,"__esModule",{value:!0}),exports.TodoCollection=exports.Todo=void 0;var o=function(){function t(t,o,e){this.id=t,this.title=o,this.completed=e}return t.prototype.toggle=function(){this.completed=!this.completed},t}();exports.Todo=o;var e="capsidjs-todomvc2",n=function(){function n(t){void 0===t&&(t=[]),this.todos=t}return n.prototype.getById=function(t){return this.todos.find(function(o){return o.id===t})},n.prototype.remove=function(t){this.todos=this.todos.filter(function(o){return o.id!==t.id})},n.prototype.add=function(t){this.todos.push(t)},Object.defineProperty(n.prototype,"length",{get:function(){return this.todos.length},enumerable:!1,configurable:!0}),n.prototype.has=function(t){return this.todos.some(function(o){return o.id===t.id})},n.prototype.completed=function(){return new n(this.todos.filter(function(t){return t.completed}))},n.prototype.uncompleted=function(){return new n(this.todos.filter(function(t){return!t.completed}))},n.prototype.completeAll=function(){this.todos.forEach(function(t){t.completed=!0})},n.prototype.uncompleteAll=function(){this.todos.forEach(function(t){t.completed=!1})},n.prototype.forEach=function(t){this.todos.forEach(t)},n.prototype.toJSON=function(){return JSON.stringify(this.todos)},n.fromJson=function(t){return new n(JSON.parse(t).map(function(t){var e=t.id,n=t.title,r=t.completed;return new o(e,n,r)}))},n.prototype.save=function(){localStorage.setItem(e,this.toJSON())},n.restore=function(){return n.fromJson(localStorage.getItem(e)||"[]")},n.prototype.maxId=function(){return Math.max.apply(Math,t([0],this.todos.map(function(t){return+t.id})))},n}();exports.TodoCollection=n;
},{}],"xE2A":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e=this&&this.__decorate||function(e,o,i,l){var n,d=arguments.length,r=d<3?o:null===l?l=Object.getOwnPropertyDescriptor(o,i):l;if("object"===("undefined"==typeof Reflect?"undefined":t(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,o,i,l);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(d<3?n(r):d>3?n(o,i,r):n(o,i))||r);return d>3&&r&&Object.defineProperty(o,i,r),r};Object.defineProperty(exports,"__esModule",{value:!0});var o=require("capsid"),i=require("./todo-models"),l=0,n=function(){function t(){var t=this;this.todos=i.TodoCollection.restore(),l=this.todos.maxId()+1,this.filter="all",window.onhashchange=function(){t.onChangeFilter()}}return t.prototype.__mount__=function(){this.onChangeFilter(),this.newTodoInput.focus()},t.prototype.onNewTodoInput=function(t){var e;if(13===t.which){var o=null===(e=this.newTodoInput.value)||void 0===e?void 0:e.trim();o&&(this.newTodoInput.value="",this.addTodo(new i.Todo(""+l++,o,!1)))}},t.prototype.addTodo=function(t){this.todos.add(t)},t.prototype.check=function(t){var e;null===(e=this.todos.getById(t.target.parentElement.parentElement.id))||void 0===e||e.toggle()},t.prototype.toggleAll=function(t){t.target.checked?this.todos.completeAll():this.todos.uncompleteAll()},t.prototype.destroy=function(t){var e=this.todos.getById(t.target.parentElement.parentElement.id);this.todos.remove(e)},t.prototype.clearCompleted=function(){var t=this;this.todos.completed().forEach(function(e){t.todos.remove(e)})},t.prototype.startEditing=function(t){var e=t.target.parentElement.parentElement,o=this.todos.getById(e.id);e.classList.add("editing");var i=e.querySelector(".edit");i.value=o.title,i.focus()},t.prototype.onCancelOrFinishEditing=function(t){13===t.which?t.target.blur():27===t.which&&(t.target.value=this.todos.getById(t.target.parentElement.id).title,t.target.blur())},t.prototype.onFocusOut=function(t){this.finishEditing(t.target.value,t.target.parentElement)},t.prototype.finishEditing=function(t,e){(t=t.trim())?(this.todos.getById(e.id).title=t,e.classList.remove("editing")):(this.todos.remove(this.todos.getById(e.id)),e.classList.remove("editing"))},t.prototype.getFilterFromString=function(t){switch(t){case"active":return"active";case"completed":return"completed";default:return"all"}},t.prototype.onChangeFilter=function(){this.filter=this.getFilterFromString(location.hash.slice(2)),this.allFilterButton.classList.toggle("selected","all"===this.filter),this.activeFilterButton.classList.toggle("selected","active"===this.filter),this.completedFilterButton.classList.toggle("selected","completed"===this.filter)},t.prototype.onUpdateTodo=function(){var t=this;this.todos.save();var e=this.todos.uncompleted(),o=this.todos.completed();if(this.todoCount.textContent=""+e.length,this.todoCountPlural.classList.toggle("hidden",1===e.length),this.mainArea.classList.toggle("hidden",0===this.todos.length),this.footer.classList.toggle("hidden",0===this.todos.length),this.toggleAllCheckbox.classList.toggle("hidden",0===this.todos.length),this.toggleAllLabel.classList.toggle("hidden",0===this.todos.length),this.toggleAllCheckbox.checked=0===e.length,this.clearCompletedButton.classList.toggle("hidden",0===o.length),"all"===this.filter&&this.todos.length===this.todoList.children.length)this.todos.forEach(function(e){var o=t.todoList.querySelector('[id="'+e.id+'"]');o.classList.toggle("completed",e.completed),o.querySelector("label").textContent=e.title,o.querySelector(".toggle").checked=e.completed});else{var i="active"===this.filter?e:"completed"===this.filter?o:this.todos;this.todoList.innerHTML="",i.forEach(function(e){var o=document.createElement("li");o.innerHTML='\n\t\t\t\t\t<div class="view">\n\t\t\t\t\t\t<input class="toggle" type="checkbox" '+(e.completed?"checked":"")+"/>\n\t\t\t\t\t\t<label>"+e.title+'</label>\n\t\t\t\t\t\t<button class="destroy"></button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<input class="edit" type="text" />\n\t\t\t\t',o.id=e.id,o.classList.add("todo"),o.classList.toggle("completed",e.completed),t.todoList.appendChild(o)})}},e([o.wired(".new-todo")],t.prototype,"newTodoInput",void 0),e([o.wired(".main")],t.prototype,"mainArea",void 0),e([o.wired(".todo-list")],t.prototype,"todoList",void 0),e([o.wired(".toggle-all")],t.prototype,"toggleAllCheckbox",void 0),e([o.wired('label[for="toggle-all"]')],t.prototype,"toggleAllLabel",void 0),e([o.wired(".footer")],t.prototype,"footer",void 0),e([o.wired(".todo-count strong")],t.prototype,"todoCount",void 0),e([o.wired(".todo-count .plural")],t.prototype,"todoCountPlural",void 0),e([o.wired('a[href="#/all"]')],t.prototype,"allFilterButton",void 0),e([o.wired('a[href="#/active"]')],t.prototype,"activeFilterButton",void 0),e([o.wired('a[href="#/completed"]')],t.prototype,"completedFilterButton",void 0),e([o.wired(".clear-completed")],t.prototype,"clearCompletedButton",void 0),e([o.emits("update-todo")],t.prototype,"__mount__",null),e([o.on("keypress",{at:".new-todo"})],t.prototype,"onNewTodoInput",null),e([o.emits("update-todo")],t.prototype,"addTodo",null),e([o.emits("update-todo"),o.on.click.at(".toggle")],t.prototype,"check",null),e([o.emits("update-todo"),o.on.click.at(".toggle-all")],t.prototype,"toggleAll",null),e([o.emits("update-todo"),o.on.click.at(".destroy")],t.prototype,"destroy",null),e([o.emits("update-todo"),o.on.click.at(".clear-completed")],t.prototype,"clearCompleted",null),e([o.on("dblclick",{at:".todo > .view > label"})],t.prototype,"startEditing",null),e([o.on("keypress",{at:".edit"}),o.on("keydown",{at:".edit"})],t.prototype,"onCancelOrFinishEditing",null),e([o.on("focusout",{at:".edit"})],t.prototype,"onFocusOut",null),e([o.emits("update-todo")],t.prototype,"finishEditing",null),e([o.emits("update-todo")],t.prototype,"onChangeFilter",null),e([o.on("update-todo")],t.prototype,"onUpdateTodo",null),t=e([o.component("todoapp")],t)}();
},{"capsid":"PPR6","./todo-models":"kBNW"}],"B6dB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("todomvc-common/base.js"),require("todomvc-common/base.css"),require("todomvc-app-css/index.css"),require("./todoapp");
},{"todomvc-common/base.js":"P7I2","todomvc-common/base.css":"h3iU","todomvc-app-css/index.css":"h3iU","./todoapp":"xE2A"}]},{},["B6dB"], null)
//# sourceMappingURL=src.ef919661.js.map