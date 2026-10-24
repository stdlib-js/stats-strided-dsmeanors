"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var i=s(function(h,t){
var y=require('@stdlib/blas-ext-base-dssumors/dist').ndarray;function f(e,r,a,u){return e<=0?NaN:e===1||a===0?r[u]:y(e,r,a,u)/e}t.exports=f
});var v=s(function(k,o){
var p=require('@stdlib/strided-base-stride2offset/dist'),j=i();function x(e,r,a){return j(e,r,a,p(e,a))}o.exports=x
});var m=s(function(w,d){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),R=i();l(q,"ndarray",R);d.exports=q
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=m(),n,c=E(_(__dirname,"./native.js"));O(c)?n=b:n=c;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
