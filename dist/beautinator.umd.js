!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.beautinator=t():n.beautinator=t()}(this,function(){return function(n){function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var e={};return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(n,t){function e(n,t){var f=typeof n;if("function"===f)return a(n.toString(),t.indent);if(n instanceof Array){var u=[],c=[u];n.forEach(function(n){j=e(n,t),o(u)+2*(u.length-1)+j.length>t.targetWidth?(u=[j],c.push(u)):u.push(j)});var l=c.map(function(n){return n.map(function(n){return n.replace(/\n/g,"\n ")}).join(", ")}),h="["+l.join(",\n ");return(l.length>1||-1!==h.indexOf("\n"))&&(h+="\n"),h+"]"}if("object"===f){var u=[],c=[u];for(var d in n){if(r(d))var p=d;else var p='"'+d.replace(/"/g,'\\"')+'"';if("function"==typeof n[d])var s=t.indent;else var s=t.indent+p.length+2;var v=e(n[d],t).split("\n");if(v.length>1)var g=v.slice(0,-1).join("\n"+i(s))+"\n"+i(t.indent)+v.slice(-1);else var g=v[0];var j=p+": "+g;o(u)+2*(u.length-1)+j.length>t.targetWidth?(u=[j],c.push(u)):u.push(j)}var l=c.map(function(n){return n.join(", ")}),h="{"+i(t.indent-1)+l.join(",\n"+i(t.indent));return(l.length>1||-1!==h.indexOf("\n"))&&(h+="\n"),h+"}"}return JSON.stringify(n)}function r(n){if(0===n.length)return!1;var t=n[0],e=t.charCodeAt(0);if(!(f<=e&&e<=u||c<=e&&e<=l||t in{_:1,$:1}))return!1;for(var r=1;r<n.length;r++){var i=n[r],o=i.charCodeAt(0);if(!(f<=o&&o<=u||c<=o&&o<=l||h<=o&&o<=d||t in{_:1,$:1}))return!1}return!0}function i(n){for(var t=[],e=0;e<n;e++)t.push(" ");return t.join("")}function o(n){var t=0;return n.forEach(function(n){t+=n.length}),t}function a(n,t){var e=n.split("\n");if(1===e.length)return fnString;var r=e[e.length-1];if("}"!==r){e[e.length-1]=r.slice(0,-1);for(var i=!0,r=e[e.length-1],o=0;o<r.length;o++)if(" "!==r[o]&&"\t"!==r[o]){i=!1;break}i?e[e.length-1]="}":e.push("}")}var a=1/0;e.slice(1,-1).forEach(function(n){for(var t=0,e=0;e<n.length;e++)if(" "===n[e])t++;else{if("\t"!==n[e])break;t+=4}t<a&&(a=t)});for(var f=a-t,o=1;o<e.length-1;o++)f>0?e[o]=e[o].slice(f):f<0&&(e[o]=t(-f)+e[o]);return e.join("\n")}n.exports=function(n,t){return t||(t={}),void 0===t.indent&&(t.indent=2),void 0===t.targetWidth&&(t.targetWidth=50),e(n,t)};var f="a".charCodeAt(0),u="z".charCodeAt(0),c="A".charCodeAt(0),l="Z".charCodeAt(0),h="0".charCodeAt(0),d="9".charCodeAt(0)}])});