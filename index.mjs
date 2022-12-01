// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";function n(r,n,s){var i,a,f,d;if(r<=0)return NaN;if(1===r||0===s)return t(n[0]);for(a=s<0?(1-r)*s:0,d=0;d<r&&(f=n[a])!=f;d++)a+=s;if(d===r)return NaN;for(i=t(f),d+=1;d<r;d++)f=t(n[a+=s]),e(f)||f<i&&(i=f);return i}function s(r,n,s,i){var a,f,d,o;if(r<=0)return NaN;if(1===r||0===s)return t(n[i]);for(f=i,o=0;o<r&&(d=n[f])!=d;o++)f+=s;if(o===r)return NaN;for(a=t(d),o+=1;o<r;o++)d=t(n[f+=s]),e(d)||d<a&&(a=d);return a}r(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map