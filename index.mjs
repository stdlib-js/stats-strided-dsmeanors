// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@esm/index.mjs";import{ndarray as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dssumors@esm/index.mjs";function r(s,e,r,n){return s<=0?NaN:1===s||0===r?e[n]:t(s,e,r,n)/s}function n(s,t,n){return r(s,t,n,e(s,n))}s(n,"ndarray",r);export{n as default,r as ndarray};
//# sourceMappingURL=index.mjs.map
