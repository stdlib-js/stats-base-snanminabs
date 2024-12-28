"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var f=t(function(B,m){
var x=require('@stdlib/math-base-assert-is-nanf/dist'),v=require('@stdlib/math-base-special-abs/dist');function l(r,e,n,q){var u,s,a,i;if(r<=0)return NaN;if(r===1||n===0)return v(e[q]);for(s=q,i=0;i<r&&(a=e[s],a!==a);i++)s+=n;if(i===r)return NaN;for(u=v(a),i+=1,i;i<r;i++)s+=n,a=v(e[s]),!x(a)&&a<u&&(u=a);return u}m.exports=l
});var b=t(function(C,c){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=f();function k(r,e,n){return _(r,e,n,R(r,n))}c.exports=k
});var d=t(function(D,y){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=b(),O=f();E(p,"ndarray",O);y.exports=p
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=d(),o,j=h(g(__dirname,"./native.js"));w(j)?o=z:o=j;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
