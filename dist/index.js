"use strict";var t=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var b=t(function(C,m){
var x=require('@stdlib/math-base-assert-is-nanf/dist'),f=require('@stdlib/math-base-special-abs/dist');function R(a,e,u){var s,n,i,r;if(a<=0)return NaN;if(a===1||u===0)return f(e[0]);for(u<0?n=(1-a)*u:n=0,r=0;r<a&&(i=e[n],i!==i);r++)n+=u;if(r===a)return NaN;for(s=f(i),r+=1,r;r<a;r++)n+=u,i=f(e[n]),!x(i)&&i<s&&(s=i);return s}m.exports=R
});var p=t(function(D,c){
var _=require('@stdlib/math-base-assert-is-nanf/dist'),o=require('@stdlib/math-base-special-abs/dist');function E(a,e,u,s){var n,i,r,v;if(a<=0)return NaN;if(a===1||u===0)return o(e[s]);for(i=s,v=0;v<a&&(r=e[i],r!==r);v++)i+=u;if(v===a)return NaN;for(n=o(r),v+=1,v;v<a;v++)i+=u,r=o(e[i]),!_(r)&&r<n&&(n=r);return n}c.exports=E
});var l=t(function(F,j){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=b(),g=p();O(y,"ndarray",g);j.exports=y
});var h=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=l(),q,k=w(h(__dirname,"./native.js"));z(k)?q=A:q=k;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
