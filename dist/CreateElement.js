!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(self,(function(){return(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{CreateElement:()=>o});const o=({tagname:e,classnames:t,content:o,attributes:r})=>{let n;if(n=e?document.createElement(e):document.createElement("div"),t&&(n.className=t),o&&(n.innerHTML=o),r&&0!==Object.keys(r).length&&Object.getPrototypeOf(r)===Object.prototype)for(const e in r)if(Object.hasOwnProperty.call(r,e)){const t=r[e];n.setAttribute(e,t)}return n};return t})()}));