(function(e){function o(o){for(var r,u,a=o[0],c=o[1],i=o[2],s=0,f=[];s<a.length;s++)u=a[s],Object.prototype.hasOwnProperty.call(l,u)&&l[u]&&f.push(l[u][0]),l[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(o);while(f.length)f.shift()();return n.push.apply(n,i||[]),t()}function t(){for(var e,o=0;o<n.length;o++){for(var t=n[o],r=!0,u=1;u<t.length;u++){var c=t[u];0!==l[c]&&(r=!1)}r&&(n.splice(o--,1),e=a(a.s=t[0]))}return e}var r={},l={app:0},n=[];function u(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-177cfcb5":"8cfc1935","chunk-516b649b":"34b809a0"}[e]+".js"}function a(o){if(r[o])return r[o].exports;var t=r[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var o=[],t=l[e];if(0!==t)if(t)o.push(t[2]);else{var r=new Promise((function(o,r){t=l[e]=[o,r]}));o.push(t[2]=r);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=u(e);var i=new Error;n=function(o){c.onerror=c.onload=null,clearTimeout(s);var t=l[e];if(0!==t){if(t){var r=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",i.name="ChunkLoadError",i.type=r,i.request=n,t[1](i)}l[e]=void 0}};var s=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(o)},a.m=e,a.c=r,a.d=function(e,o,t){a.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,o){if(1&o&&(e=a(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)a.d(t,r,function(o){return e[o]}.bind(null,r));return t},a.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(o,"a",o),o},a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},a.p="/",a.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=o,c=c.slice();for(var s=0;s<c.length;s++)o(c[s]);var p=i;n.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("56d7")},"569e":function(e,o,t){},"56d7":function(e,o,t){"use strict";t.r(o);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),l=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},n=[],u=r["a"].extend({name:"App"}),a=u,c=t("2877"),i=Object(c["a"])(a,l,n,!1,null,null,null),s=i.exports,p=t("2f62");r["a"].use(p["a"]);var f=new p["a"].Store({strict:!1,state:{puzzles:{}},mutations:{setPuzzles:function(e,o){e.puzzles=o}}}),b=(t("d3b7"),t("8c4f"));r["a"].use(b["a"]);var d=[{path:"/",name:"Home",component:function(){return t.e("chunk-516b649b").then(t.bind(null,"bb51"))}},{path:"/:level",name:"Level",component:function(){return t.e("chunk-516b649b").then(t.bind(null,"bb51"))}},{path:"/:level/:puzzleNumber",name:"Constructor",component:function(){return t.e("chunk-177cfcb5").then(t.bind(null,"871a"))}},{path:"*",redirect:"/"}],y=new b["a"]({mode:"history",routes:d}),w=y,h=t("9c39");t("ab8b"),t("569e");console.log("L11 puzzlesJSON:",h),f.commit("setPuzzles",h),r["a"].config.productionTip=!1,new r["a"]({router:w,store:f,render:function(e){return e(s)}}).$mount("#app")},"9c39":function(e){e.exports=JSON.parse('{"Level-1":[{"title":"Swan","rotate":false,"grid":{"x":4,"y":4},"data":[{"color":["blue","yellow"],"rotate":0},{"color":["blue","yellow"],"rotate":90},{"color":["blue"],"rotate":null},{"color":["yellow"],"rotate":null},{"color":["blue","yellow"],"rotate":90},{"color":["blue","yellow"],"rotate":270},{"color":["blue","yellow"],"rotate":0},{"color":["blue","yellow"],"rotate":90},{"color":["blue"],"rotate":null},{"color":["yellow"],"rotate":null},{"color":["blue","yellow"],"rotate":90},{"color":["blue","yellow"],"rotate":270},{"color":["blue","yellow"],"rotate":0},{"color":["blue","yellow"],"rotate":90},{"color":["blue"],"rotate":null},{"color":["yellow"],"rotate":null}]},{"title":"Lala","rotate":false,"grid":{"x":3,"y":2},"data":[{"color":["blue","yellow"],"rotate":0},{"color":["blue","yellow"],"rotate":90},{"color":["blue"],"rotate":null},{"color":["yellow"],"rotate":null},{"color":["blue","yellow"],"rotate":90},{"color":["blue","yellow"],"rotate":270}]}],"Level-2":[{"title":"Baaa","rotate":false,"grid":{"x":3,"y":2},"data":[{"color":["blue","yellow"],"rotate":0},{"color":["blue","yellow"],"rotate":90},{"color":["blue"],"rotate":null},{"color":["yellow"],"rotate":null},{"color":["blue","yellow"],"rotate":90},{"color":["blue","yellow"],"rotate":270}]}]}')}});
//# sourceMappingURL=app.9eb63c00.js.map