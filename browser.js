// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function",e={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function t(r){var t=e[r];return"function"==typeof t?t:e.default}var n={float64:function(r,e,t){r[e]=t},float32:function(r,e,t){r[e]=t},int32:function(r,e,t){r[e]=t},int16:function(r,e,t){r[e]=t},int8:function(r,e,t){r[e]=t},uint32:function(r,e,t){r[e]=t},uint16:function(r,e,t){r[e]=t},uint8:function(r,e,t){r[e]=t},uint8c:function(r,e,t){r[e]=t},generic:function(r,e,t){r[e]=t},default:function(r,e,t){r[e]=t}};function i(r){var e=n[r];return"function"==typeof e?e:n.default}var o={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function a(r){var e=o[r];return"function"==typeof e?e:o.default}var u={complex128:function(r,e,t){r.set(t,e)},complex64:function(r,e,t){r.set(t,e)},default:function(r,e,t){r.set(t,e)}};function f(r){var e=u[r];return"function"==typeof e?e:u.default}var c="function"==typeof Object.defineProperty?Object.defineProperty:null,l=Object.defineProperty;function s(r){return"number"==typeof r}function y(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function p(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+y(i):y(i)+r,n&&(r="-"+r)),r}var h=String.prototype.toLowerCase,g=String.prototype.toUpperCase;function m(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!s(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=p(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=p(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===g.call(r.specifier)?g.call(t):h.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function w(r){return"string"==typeof r}var b=Math.abs,v=String.prototype.toLowerCase,d=String.prototype.toUpperCase,E=String.prototype.replace,A=/e\+(\d)$/,T=/e-(\d)$/,_=/^(\d+)$/,x=/^(\d+)e/,j=/\.0$/,k=/\.0*e/,V=/(\..*[^0])0*e/;function B(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!s(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":b(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=E.call(t,V,"$1e"),t=E.call(t,k,"e"),t=E.call(t,j,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=E.call(t,A,"e+0$1"),t=E.call(t,T,"e-0$1"),r.alternate&&(t=E.call(t,_,"$1."),t=E.call(t,x,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===d.call(r.specifier)?d.call(t):v.call(t)}function L(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function R(r,e,t){var n=e-r.length;return n<0?r:r=t?r+L(n):L(n)+r}var S=String.fromCharCode,I=isNaN,C=Array.isArray;function M(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,i,o,a,u,f,c;if(!C(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(w(n=r[f]))a+=n;else{if(e=void 0!==n.precision,!(n=M(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,I(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,I(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!I(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=I(o)?String(n.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=B(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=p(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=R(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function N(r){var e,t,n,i;for(t=[],i=0,n=F.exec(r);n;)(e=r.slice(i,F.lastIndex-n[0].length)).length&&t.push(e),t.push(P(n)),i=F.lastIndex,n=F.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function U(r){return"string"==typeof r}function Y(r){var e,t,n;if(!U(r))throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=N(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return O.apply(null,t)}var W,$=Object.prototype,G=$.toString,Z=$.__defineGetter__,X=$.__defineSetter__,J=$.__lookupGetter__,z=$.__lookupSetter__;W=function(){try{return c({},"x",{}),!0}catch(r){return!1}}()?l:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===G.call(r))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(J.call(r,e)||z.call(r,e)?(n=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Z&&Z.call(r,e,t.get),a&&X&&X.call(r,e,t.set),r};var q=W;function D(r,e,t){q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function K(){return H&&"symbol"==typeof Symbol.toStringTag}var Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty;function er(r,e){return null!=r&&rr.call(r,e)}var tr="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof tr?tr.toStringTag:"",ir=K()?function(r){var e,t,n;if(null==r)return Q.call(r);t=r[nr],e=er(r,nr);try{r[nr]=void 0}catch(e){return Q.call(r)}return n=Q.call(r),e?r[nr]=t:delete r[nr],n}:function(r){return Q.call(r)},or=Array.isArray?Array.isArray:function(r){return"[object Array]"===ir(r)};function ar(r){return null!==r&&"object"==typeof r}function ur(r){return ar(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function fr(){return/^\s*function\s*([^(]*)/i}D(ar,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!or(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(ar));var cr=/^\s*function\s*([^(]*)/i;D(fr,"REGEXP",cr);var lr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},sr="function"==typeof Float64Array,yr="function"==typeof Float64Array?Float64Array:null,pr="function"==typeof Float64Array?Float64Array:void 0,hr=function(){var r,e,t;if("function"!=typeof yr)return!1;try{e=new yr([1,3.14,-3.14,NaN]),t=e,r=(sr&&t instanceof Float64Array||"[object Float64Array]"===ir(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")},gr="function"==typeof Float32Array,mr=Number.POSITIVE_INFINITY,wr="function"==typeof Float32Array?Float32Array:null,br="function"==typeof Float32Array?Float32Array:void 0,vr=function(){var r,e,t;if("function"!=typeof wr)return!1;try{e=new wr([1,3.14,-3.14,5e40]),t=e,r=(gr&&t instanceof Float32Array||"[object Float32Array]"===ir(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===mr}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")},dr="function"==typeof Uint32Array,Er="function"==typeof Uint32Array?Uint32Array:null,Ar="function"==typeof Uint32Array?Uint32Array:void 0,Tr=function(){var r,e,t;if("function"!=typeof Er)return!1;try{e=new Er(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(dr&&t instanceof Uint32Array||"[object Uint32Array]"===ir(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")},_r="function"==typeof Int32Array,xr="function"==typeof Int32Array?Int32Array:null,jr="function"==typeof Int32Array?Int32Array:void 0,kr=function(){var r,e,t;if("function"!=typeof xr)return!1;try{e=new xr([1,3.14,-3.14,2147483648]),t=e,r=(_r&&t instanceof Int32Array||"[object Int32Array]"===ir(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?jr:function(){throw new Error("not implemented")},Vr="function"==typeof Uint16Array,Br="function"==typeof Uint16Array?Uint16Array:null,Lr="function"==typeof Uint16Array?Uint16Array:void 0,Rr=function(){var r,e,t;if("function"!=typeof Br)return!1;try{e=new Br(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Vr&&t instanceof Uint16Array||"[object Uint16Array]"===ir(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Lr:function(){throw new Error("not implemented")},Sr="function"==typeof Int16Array,Ir="function"==typeof Int16Array?Int16Array:null,Cr="function"==typeof Int16Array?Int16Array:void 0,Mr=function(){var r,e,t;if("function"!=typeof Ir)return!1;try{e=new Ir([1,3.14,-3.14,32768]),t=e,r=(Sr&&t instanceof Int16Array||"[object Int16Array]"===ir(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Cr:function(){throw new Error("not implemented")},Or="function"==typeof Uint8Array,Fr="function"==typeof Uint8Array?Uint8Array:null,Pr="function"==typeof Uint8Array?Uint8Array:void 0,Nr=function(){var r,e,t;if("function"!=typeof Fr)return!1;try{e=new Fr(e=[1,3.14,-3.14,256,257]),t=e,r=(Or&&t instanceof Uint8Array||"[object Uint8Array]"===ir(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Pr:function(){throw new Error("not implemented")},Ur="function"==typeof Uint8ClampedArray,Yr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Wr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,$r=function(){var r,e,t;if("function"!=typeof Yr)return!1;try{e=new Yr([-1,0,1,3.14,4.99,255,256]),t=e,r=(Ur&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===ir(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Wr:function(){throw new Error("not implemented")},Gr="function"==typeof Int8Array,Zr="function"==typeof Int8Array?Int8Array:null,Xr="function"==typeof Int8Array?Int8Array:void 0,Jr=function(){var r,e,t;if("function"!=typeof Zr)return!1;try{e=new Zr([1,3.14,-3.14,128]),t=e,r=(Gr&&t instanceof Int8Array||"[object Int8Array]"===ir(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};function zr(r){return"number"==typeof r}var qr=Number,Dr=qr.prototype.toString,Hr=K();function Kr(r){return"object"==typeof r&&(r instanceof qr||(Hr?function(r){try{return Dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===ir(r)))}function Qr(r){return zr(r)||Kr(r)}D(Qr,"isPrimitive",zr),D(Qr,"isObject",Kr);var re=qr.NEGATIVE_INFINITY,ee=Math.floor;function te(r){return ee(r)===r}function ne(r){return r<mr&&r>re&&te(r)}function ie(r){return zr(r)&&ne(r)}function oe(r){return Kr(r)&&ne(r.valueOf())}function ae(r){return ie(r)||oe(r)}function ue(r){return ie(r)&&r>=0}function fe(r){return oe(r)&&r.valueOf()>=0}function ce(r){return ue(r)||fe(r)}function le(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&te(r.length)&&r.length>=0&&r.length<=4294967295}function se(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&te(r.length)&&r.length>=0&&r.length<=9007199254740991}D(ae,"isPrimitive",ie),D(ae,"isObject",oe),D(ce,"isPrimitive",ue),D(ce,"isObject",fe);var ye="function"==typeof ArrayBuffer;function pe(r){return ye&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===ir(r)}function he(r){return"object"==typeof r&&null!==r&&!or(r)}var ge=/./;function me(r){return"boolean"==typeof r}var we=Boolean,be=Boolean.prototype.toString,ve=K();function de(r){return"object"==typeof r&&(r instanceof we||(ve?function(r){try{return be.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===ir(r)))}function Ee(r){return me(r)||de(r)}function Ae(){return new Function("return this;")()}D(Ee,"isPrimitive",me),D(Ee,"isObject",de);var Te="object"==typeof self?self:null,_e="object"==typeof window?window:null,xe="object"==typeof globalThis?globalThis:null,je=function(r){if(arguments.length){if(!me(r))throw new TypeError(Y("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ae()}if(xe)return xe;if(Te)return Te;if(_e)return _e;throw new Error("unexpected error. Unable to resolve global object.")}(),ke=je.document&&je.document.childNodes,Ve=Int8Array;function Be(){return/^\s*function\s*([^(]*)/i}var Le=/^\s*function\s*([^(]*)/i;function Re(r){return null!==r&&"object"==typeof r}function Se(r){var e,t,n,i;if(("Object"===(t=ir(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Le.exec(n.toString()))return e[1]}return Re(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}D(Be,"REGEXP",Le),D(Re,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!or(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Re));var Ie="function"==typeof ge||"object"==typeof Ve||"function"==typeof ke?function(r){return Se(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Se(r).toLowerCase():e};function Ce(r){return"function"===Ie(r)}function Me(r,e){if(!(this instanceof Me))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!zr(r))throw new TypeError(Y("invalid argument. Real component must be a number. Value: `%s`.",r));if(!zr(e))throw new TypeError(Y("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}D(Me,"BYTES_PER_ELEMENT",8),D(Me.prototype,"BYTES_PER_ELEMENT",8),D(Me.prototype,"byteLength",16),D(Me.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),D(Me.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Oe="function"==typeof Math.fround?Math.fround:null,Fe=new vr(1),Pe="function"==typeof Oe?Oe:function(r){return Fe[0]=r,Fe[0]};function Ne(r,e){if(!(this instanceof Ne))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!zr(r))throw new TypeError(Y("invalid argument. Real component must be a number. Value: `%s`.",r));if(!zr(e))throw new TypeError(Y("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Pe(r)}),q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Pe(e)}),this}function Ue(r){return r instanceof Me||r instanceof Ne||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Ye(r){return te(r/2)}function We(){return"function"==typeof tr&&"symbol"==typeof tr("foo")&&er(tr,"iterator")&&"symbol"==typeof tr.iterator}D(Ne,"BYTES_PER_ELEMENT",4),D(Ne.prototype,"BYTES_PER_ELEMENT",4),D(Ne.prototype,"byteLength",8),D(Ne.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),D(Ne.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var $e=We()?Symbol.iterator:null;function Ge(r,e,t){q(r,e,{configurable:!1,enumerable:!1,get:t})}function Ze(r){return r.re}function Xe(r){return r.im}function Je(r,e){return new vr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function ze(r,e){return new hr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}var qe={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function De(r){var e=qe[r];return"function"==typeof e?e:qe.default}var He={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function Ke(r){var e=He[r];return"function"==typeof e?e:He.default}function Qe(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(le(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ue(n))return new TypeError(Y("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Ze(n),Xe(n))}return e}function rt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,le(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ue(o))return new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ze(o),Xe(o))}return n}function et(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ue(n=e[i]))return null;r[o]=Ze(n),r[o+1]=Xe(n),o+=2}return r}var tt=2*vr.BYTES_PER_ELEMENT,nt=We();function it(r){return r instanceof ft||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ot(r){return r===ft||"Complex128Array"===r.name}function at(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===tt}function ut(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*tt}function ft(){var r,e,t,n;if(e=arguments.length,!(this instanceof ft))return 0===e?new ft:1===e?new ft(arguments[0]):2===e?new ft(arguments[0],arguments[1]):new ft(arguments[0],arguments[1],arguments[2]);if(0===e)t=new vr(0);else if(1===e)if(ue(arguments[0]))t=new vr(2*arguments[0]);else if(se(arguments[0]))if((n=(t=arguments[0]).length)&&or(t)&&Ue(t[0])){if(null===(t=et(new vr(2*n),t))){if(!Ye(n))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new vr(arguments[0])}}else{if(at(t))t=Je(t,0);else if(ut(t))t=ze(t,0);else if(!Ye(n))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new vr(t)}else if(pe(arguments[0])){if(!te((t=arguments[0]).byteLength/tt))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",tt,t.byteLength));t=new vr(t)}else{if(!he(arguments[0]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===nt)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ce(t[$e]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ce((t=t[$e]()).next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Qe(t))instanceof Error)throw t;t=new vr(t)}else{if(!pe(t=arguments[0]))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ue(r=arguments[1]))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!te(r/tt))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",tt,r));if(2===e){if(!te((n=t.byteLength-r)/tt))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",tt,n));t=new vr(t,r)}else{if(!ue(n=arguments[2]))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*tt>t.byteLength-r)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*tt));t=new vr(t,r,2*n)}}return D(this,"_buffer",t),D(this,"_length",t.length/2),this}function ct(r){return r.re}function lt(r){return r.im}D(ft,"BYTES_PER_ELEMENT",tt),D(ft,"name","Complex64Array"),D(ft,"from",(function(r){var e,t,n,i,o,a,u,f,c,l,s,y;if(!Ce(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ce(n=arguments[1]))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(it(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ue(l=n.call(e,r.get(s),s)))o[y]=Ze(l),o[y+1]=Xe(l);else{if(!(le(l)&&l.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(r)}if(se(r)){if(n){for(f=r.length,u=r.get&&r.set?Ke("default"):De("default"),s=0;s<f;s++)if(!Ue(u(r,s))){c=!0;break}if(c){if(!Ye(f))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ue(l=n.call(e,u(r,s),s)))o[y]=Ze(l),o[y+1]=Xe(l);else{if(!(le(l)&&l.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(r)}if(he(r)&&nt&&Ce(r[$e])){if(!Ce((o=r[$e]()).next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?rt(o,n,e):Qe(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),D(ft,"of",(function(){var r,e;if(!Ce(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ge(ft.prototype,"buffer",(function(){return this._buffer.buffer})),Ge(ft.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ge(ft.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),D(ft.prototype,"BYTES_PER_ELEMENT",ft.BYTES_PER_ELEMENT),D(ft.prototype,"copyWithin",(function(r,e){if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),D(ft.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,D(t={},"next",(function(){var e;return o+=1,i||o>=n?{done:!0}:(e=new Ne(r[a+=2],r[a+1]),{value:[o,e],done:!1})})),D(t,"return",(function(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}})),$e&&D(t,$e,(function(){return e.entries()})),t})),D(ft.prototype,"get",(function(r){var e;if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ue(r))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Ne((e=this._buffer)[r*=2],e[r+1])})),Ge(ft.prototype,"length",(function(){return this._length})),D(ft.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,c;if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ue(t=arguments[1]))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ue(r)){if(t>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Ze(r),void(n[t+1]=Xe(r))}if(it(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,c=n.byteOffset+t*tt,e.buffer===n.buffer&&e.byteOffset<c&&e.byteOffset+e.byteLength>c){for(i=new vr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,c=0,f=0;f<a;f++)n[t]=e[c],n[t+1]=e[c+1],t+=2,c+=2}else{if(!se(r))throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Ue(r[f])){o=!0;break}if(o){if(!Ye(a))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,c=n.byteOffset+t*tt,e.buffer===n.buffer&&e.byteOffset<c&&e.byteOffset+e.byteLength>c){for(i=new vr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,c=0,f=0;f<a;f++)n[t]=e[c],n[t+1]=e[c+1],t+=2,c+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Ze(u),n[t+1]=Xe(u),t+=2}}));var st={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function yt(r){var e=st[r];return"function"==typeof e?e:st.default}var pt={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function ht(r){var e=pt[r];return"function"==typeof e?e:pt.default}function gt(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(le(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ue(n))return new TypeError(Y("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(ct(n),lt(n))}return e}function mt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,le(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ue(o))return new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(ct(o),lt(o))}return n}function wt(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ue(n=e[i]))return null;r[o]=ct(n),r[o+1]=lt(n),o+=2}return r}var bt=2*hr.BYTES_PER_ELEMENT,vt=We();function dt(r){return r instanceof _t||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function Et(r){return r===_t||"Complex64Array"===r.name}function At(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===bt/2}function Tt(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===bt}function _t(){var r,e,t,n;if(e=arguments.length,!(this instanceof _t))return 0===e?new _t:1===e?new _t(arguments[0]):2===e?new _t(arguments[0],arguments[1]):new _t(arguments[0],arguments[1],arguments[2]);if(0===e)t=new hr(0);else if(1===e)if(ue(arguments[0]))t=new hr(2*arguments[0]);else if(se(arguments[0]))if((n=(t=arguments[0]).length)&&or(t)&&Ue(t[0])){if(null===(t=wt(new hr(2*n),t))){if(!Ye(n))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new hr(arguments[0])}}else{if(At(t))t=Je(t,0);else if(Tt(t))t=ze(t,0);else if(!Ye(n))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new hr(t)}else if(pe(arguments[0])){if(!te((t=arguments[0]).byteLength/bt))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",bt,t.byteLength));t=new hr(t)}else{if(!he(arguments[0]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===vt)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ce(t[$e]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ce((t=t[$e]()).next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=gt(t))instanceof Error)throw t;t=new hr(t)}else{if(!pe(t=arguments[0]))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ue(r=arguments[1]))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!te(r/bt))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",bt,r));if(2===e){if(!te((n=t.byteLength-r)/bt))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",bt,n));t=new hr(t,r)}else{if(!ue(n=arguments[2]))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*bt>t.byteLength-r)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*bt));t=new hr(t,r,2*n)}}return D(this,"_buffer",t),D(this,"_length",t.length/2),this}D(_t,"BYTES_PER_ELEMENT",bt),D(_t,"name","Complex128Array"),D(_t,"from",(function(r){var e,t,n,i,o,a,u,f,c,l,s,y;if(!Ce(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ce(n=arguments[1]))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(dt(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ue(l=n.call(e,r.get(s),s)))o[y]=ct(l),o[y+1]=lt(l);else{if(!(le(l)&&l.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(r)}if(se(r)){if(n){for(f=r.length,u=r.get&&r.set?ht("default"):yt("default"),s=0;s<f;s++)if(!Ue(u(r,s))){c=!0;break}if(c){if(!Ye(f))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ue(l=n.call(e,u(r,s),s)))o[y]=ct(l),o[y+1]=lt(l);else{if(!(le(l)&&l.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(r)}if(he(r)&&vt&&Ce(r[$e])){if(!Ce((o=r[$e]()).next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?mt(o,n,e):gt(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),D(_t,"of",(function(){var r,e;if(!Ce(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ge(_t.prototype,"buffer",(function(){return this._buffer.buffer})),Ge(_t.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ge(_t.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),D(_t.prototype,"BYTES_PER_ELEMENT",_t.BYTES_PER_ELEMENT),D(_t.prototype,"copyWithin",(function(r,e){if(!dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),D(_t.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,D(t={},"next",(function(){var e;return o+=1,i||o>=n?{done:!0}:(e=new Me(r[a+=2],r[a+1]),{value:[o,e],done:!1})})),D(t,"return",(function(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}})),$e&&D(t,$e,(function(){return e.entries()})),t})),D(_t.prototype,"get",(function(r){var e;if(!dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ue(r))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Me((e=this._buffer)[r*=2],e[r+1])})),Ge(_t.prototype,"length",(function(){return this._length})),D(_t.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,c;if(!dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ue(t=arguments[1]))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ue(r)){if(t>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=ct(r),void(n[t+1]=lt(r))}if(dt(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,c=n.byteOffset+t*bt,e.buffer===n.buffer&&e.byteOffset<c&&e.byteOffset+e.byteLength>c){for(i=new hr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,c=0,f=0;f<a;f++)n[t]=e[c],n[t+1]=e[c+1],t+=2,c+=2}else{if(!se(r))throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Ue(r[f])){o=!0;break}if(o){if(!Ye(a))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,c=n.byteOffset+t*bt,e.buffer===n.buffer&&e.byteOffset<c&&e.byteOffset+e.byteLength>c){for(i=new hr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,c=0,f=0;f<a;f++)n[t]=e[c],n[t+1]=e[c+1],t+=2,c+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=ct(u),n[t+1]=lt(u),t+=2}}));var xt=[hr,vr,kr,Tr,Mr,Rr,Jr,Nr,$r,ft,_t],jt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],kt=jt.length;function Vt(r){var e;if(or(r))return"generic";if(ur(r))return null;for(e=0;e<kt;e++)if(r instanceof xt[e])return jt[e];return lr[function(r){var e,t,n;if(("Object"===(t=ir(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=cr.exec(n.toString()))return e[1]}return ur(r)?"Buffer":t}(r)]||null}function Bt(e){var n,o=Vt(e);return typeof(n=e).get===r&&typeof n.set===r?{accessorProtocol:!0,accessors:[a(o),f(o)]}:{accessorProtocol:!1,accessors:[t(o),i(o)]}}function Lt(r){var e;for(e=0;e<r.length;e+=2)if(!r[e]&&!r[e+1])return!1;return!0}return function(r){var e,t=function(r){var e=Bt(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}(r);return t.accessorProtocol?"object"==typeof(e=r)&&null!==e&&"Complex128Array"===e.constructor.name&&16===e.BYTES_PER_ELEMENT?Lt(ze(r,0)):function(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&8===r.BYTES_PER_ELEMENT}(r)?Lt(Je(r,0)):function(r){var e,t,n;for(e=r.data,t=r.accessors[0],n=0;n<e.length;n++)if(!t(e,n))return!1;return!0}(t):function(r){var e;for(e=0;e<r.length;e++)if(!r[e])return!1;return!0}(r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).every=e();
//# sourceMappingURL=browser.js.map