/*! created 2019/04/30 by zhaoyiming */!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){!function(t,n,o){e.exports=function(e,t){"use strict";function n(){}return n.prototype.get=function(e){var n,o,r=t.cookie.split(";"),i=r.length,u={};for(n=0;n<i;n+=1)u[(o=r[n].replace(/\s/g,"").split("="))[0]]=o[1];return u[e]},n.prototype.set=function(n){var o=e.location.host,r=n.name,i=n.value,u=n.expires?n.expires:"",a=n.path?n.path:"/",c=n.domain?n.domain:o.substr(0,o.indexOf(":"));if(!r)return console.error("请设置cookie名！"),!1;var l=r+"="+i+"; path="+a+"; domain="+c;""!==u&&(l+="; expires="+new Date(Date.now()+u).toGMTString()),t.cookie=l},n.prototype.unset=function(e){this.set({name:e.name,value:"",path:e.path,domain:e.domain,expires:-1})},new n}(t,n)}(window,document)},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o);r.a.set({name:"uname",value:"zhaoyiming",expires:36e5,path:"/",domain:"localhost"}),setTimeout(()=>{console.log(r.a.get("uname"))},2e3),setTimeout(()=>{r.a.unset({name:"uname",path:"/",domain:"localhost"})},5e3)}]);