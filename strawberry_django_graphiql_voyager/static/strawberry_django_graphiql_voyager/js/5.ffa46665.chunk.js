(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{127:function(e,r,n){"use strict";n.r(r),n.d(r,"b",function(){return c});var t,i=n(21),o=n(198),a=Object.defineProperty,f=function(e,r){return a(e,"name",{value:r,configurable:!0})};function l(e,r){return r.forEach(function(r){r&&"string"!==typeof r&&!Array.isArray(r)&&Object.keys(r).forEach(function(n){if("default"!==n&&!(n in e)){var t=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(e,n,t.get?t:{enumerable:!0,get:function(){return r[n]}})}})}),Object.freeze(e)}f(l,"_mergeNamespaces");var u={exports:{}};!function(e){function r(r){return function(n,t){var i=t.line,o=n.getLine(i);function a(r){for(var a,f=t.ch,l=0;;){var u=f<=0?-1:o.lastIndexOf(r[0],f-1);if(-1!=u){if(1==l&&u<t.ch)break;if(a=n.getTokenTypeAt(e.Pos(i,u+1)),!/^(comment|string)/.test(a))return{ch:u+1,tokenType:a,pair:r};f=u-1}else{if(1==l)break;l=1,f=o.length}}}function l(r){var t,o,a=1,f=n.lastLine(),l=r.ch;e:for(var u=i;u<=f;++u)for(var s=n.getLine(u),c=u==i?l:0;;){var p=s.indexOf(r.pair[0],c),g=s.indexOf(r.pair[1],c);if(p<0&&(p=s.length),g<0&&(g=s.length),(c=Math.min(p,g))==s.length)break;if(n.getTokenTypeAt(e.Pos(u,c+1))==r.tokenType)if(c==p)++a;else if(!--a){t=u,o=c;break e}++c}return null==t||i==t?null:{from:e.Pos(i,l),to:e.Pos(t,o)}}f(a,"findOpening"),f(l,"findRange");for(var u=[],s=0;s<r.length;s++){var c=a(r[s]);c&&u.push(c)}u.sort(function(e,r){return e.ch-r.ch});for(var s=0;s<u.length;s++){var p=l(u[s]);if(p)return p}return null}}f(r,"bracketFolding"),e.registerHelper("fold","brace",r([["{","}"],["[","]"]])),e.registerHelper("fold","brace-paren",r([["{","}"],["[","]"],["(",")"]])),e.registerHelper("fold","import",function(r,n){function t(n){if(n<r.firstLine()||n>r.lastLine())return null;var t=r.getTokenAt(e.Pos(n,1));if(/\S/.test(t.string)||(t=r.getTokenAt(e.Pos(n,t.end+1))),"keyword"!=t.type||"import"!=t.string)return null;for(var i=n,o=Math.min(r.lastLine(),n+10);i<=o;++i){var a=r.getLine(i),f=a.indexOf(";");if(-1!=f)return{startCh:t.end,end:e.Pos(i,f)}}}f(t,"hasImport");var i,o=n.line,a=t(o);if(!a||t(o-1)||(i=t(o-2))&&i.end.line==o-1)return null;for(var l=a.end;;){var u=t(l.line+1);if(null==u)break;l=u.end}return{from:r.clipPos(e.Pos(o,a.startCh+1)),to:l}}),e.registerHelper("fold","include",function(r,n){function t(n){if(n<r.firstLine()||n>r.lastLine())return null;var t=r.getTokenAt(e.Pos(n,1));return/\S/.test(t.string)||(t=r.getTokenAt(e.Pos(n,t.end+1))),"meta"==t.type&&"#include"==t.string.slice(0,8)?t.start+8:void 0}f(t,"hasInclude");var i=n.line,o=t(i);if(null==o||null!=t(i-1))return null;for(var a=i;;){var l=t(a+1);if(null==l)break;++a}return{from:e.Pos(i,o+1),to:r.clipPos(e.Pos(a))}})}(o.a.exports);var s=u.exports,c=Object.freeze(l((t={__proto__:null},Object(i.a)(t,Symbol.toStringTag,"Module"),Object(i.a)(t,"default",s),t),[u.exports]))}}]);
//# sourceMappingURL=5.ffa46665.chunk.js.map