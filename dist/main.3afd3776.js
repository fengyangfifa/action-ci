!function(){"use strict";var e,t,r,n,o,i={8938:function(e,t,r){var n=r(7294),o=r(745),i=r(5567),u=r(5893),a=function(){var e=(0,n.useState)(1),t=(0,i.Z)(e,2),r=t[0],o=t[1];return(0,u.jsxs)("div",{children:["hello react",(0,u.jsx)("p",{className:"app2_count-s__LVR97",children:r}),(0,u.jsx)("button",{className:"app2_click__Zkklq",onClick:function(){o(r+1)},children:"click"})]})},c=n.lazy((function(){return r.e(143).then(r.bind(r,3518))}));function l(){return(0,u.jsxs)("div",{children:[(0,u.jsx)(c,{}),(0,u.jsx)(a,{})]})}(0,o.s)(document.getElementById("root")).render((0,u.jsx)(l,{}))}},u={};function a(e){var t=u[e];if(void 0!==t)return t.exports;var r=u[e]={exports:{}};return i[e](r,r.exports,a),r.exports}a.m=i,e=[],a.O=function(t,r,n,o){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],n=e[s][1],o=e[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[c])}))?r.splice(c--,1):(u=!1,o<i&&(i=o));if(u){e.splice(s--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,n,o]},a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,r){return a.f[r](e,t),t}),[]))},a.u=function(e){return"static/js/app.314c07ec.chunk.js"},a.miniCssF=function(e){return"static/css/app.4758d8ba.chunk.css"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},r="react-workflow:",a.l=function(e,n,o,i){if(t[e])t[e].push(n);else{var u,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==r+o){u=f;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.setAttribute("data-webpack",r+o),u.src=e),t[e]=[n];var d=function(r,n){u.onerror=u.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),r)return r(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e}(),n=function(e){return new Promise((function(t,r){var n=a.miniCssF(e),o=a.p+n;if(function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(u=r[n]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(o===e||o===t))return u}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var u;if((o=(u=i[n]).getAttribute("data-href"))===e||o===t)return u}}(n,o))return t();!function(e,t,r,n){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)r();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,o.parentNode.removeChild(o),n(c)}},o.href=t,document.head.appendChild(o)}(e,o,t,r)}))},o={179:0},a.f.miniCss=function(e,t){o[e]?t.push(o[e]):0!==o[e]&&{143:1}[e]&&t.push(o[e]=n(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))},function(){var e={179:0};a.f.j=function(t,r){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(r,o){n=e[t]=[r,o]}));r.push(n[2]=o);var i=a.p+a.u(t),u=new Error;a.l(i,(function(r){if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}}),"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,i=r[0],u=r[1],c=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(n in u)a.o(u,n)&&(a.m[n]=u[n]);if(c)var s=c(a)}for(t&&t(r);l<i.length;l++)o=i[l],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(s)},r=self.webpackChunkreact_workflow=self.webpackChunkreact_workflow||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var c=a.O(void 0,[216],(function(){return a(8938)}));c=a.O(c)}();
//# sourceMappingURL=main.3afd3776.js.map