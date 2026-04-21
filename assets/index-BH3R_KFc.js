(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))o(C);new MutationObserver(C=>{for(const f of C)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(C){const f={};return C.integrity&&(f.integrity=C.integrity),C.referrerPolicy&&(f.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?f.credentials="include":C.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(C){if(C.ep)return;C.ep=!0;const f=r(C);fetch(C.href,f)}})();var I9={exports:{}},v7={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vl;function KC(){if(Vl)return v7;Vl=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(o,C,f){var d=null;if(f!==void 0&&(d=""+f),C.key!==void 0&&(d=""+C.key),"key"in C){f={};for(var p in C)p!=="key"&&(f[p]=C[p])}else f=C;return C=f.ref,{$$typeof:a,type:o,key:d,ref:C!==void 0?C:null,props:f}}return v7.Fragment=i,v7.jsx=r,v7.jsxs=r,v7}var _l;function QC(){return _l||(_l=1,I9.exports=KC()),I9.exports}var s=QC(),nn={exports:{}},i0={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bl;function JC(){if(Bl)return i0;Bl=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),M=Symbol.iterator;function S(b){return b===null||typeof b!="object"?null:(b=M&&b[M]||b["@@iterator"],typeof b=="function"?b:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,N={};function D(b,q,K){this.props=b,this.context=q,this.refs=N,this.updater=K||E}D.prototype.isReactComponent={},D.prototype.setState=function(b,q){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,q,"setState")},D.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function Y(){}Y.prototype=D.prototype;function U(b,q,K){this.props=b,this.context=q,this.refs=N,this.updater=K||E}var G=U.prototype=new Y;G.constructor=U,O(G,D.prototype),G.isPureReactComponent=!0;var Z=Array.isArray;function a0(){}var W={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function m0(b,q,K){var F=K.ref;return{$$typeof:a,type:b,key:q,ref:F!==void 0?F:null,props:K}}function t0(b,q){return m0(b.type,q,b.props)}function y0(b){return typeof b=="object"&&b!==null&&b.$$typeof===a}function v0(b){var q={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(K){return q[K]})}var W0=/\/+/g;function _0(b,q){return typeof b=="object"&&b!==null&&b.key!=null?v0(""+b.key):q.toString(36)}function z0(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(a0,a0):(b.status="pending",b.then(function(q){b.status==="pending"&&(b.status="fulfilled",b.value=q)},function(q){b.status==="pending"&&(b.status="rejected",b.reason=q)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function _(b,q,K,F,l0){var u0=typeof b;(u0==="undefined"||u0==="boolean")&&(b=null);var j0=!1;if(b===null)j0=!0;else switch(u0){case"bigint":case"string":case"number":j0=!0;break;case"object":switch(b.$$typeof){case a:case i:j0=!0;break;case x:return j0=b._init,_(j0(b._payload),q,K,F,l0)}}if(j0)return l0=l0(b),j0=F===""?"."+_0(b,0):F,Z(l0)?(K="",j0!=null&&(K=j0.replace(W0,"$&/")+"/"),_(l0,q,K,"",function(T2){return T2})):l0!=null&&(y0(l0)&&(l0=t0(l0,K+(l0.key==null||b&&b.key===l0.key?"":(""+l0.key).replace(W0,"$&/")+"/")+j0)),q.push(l0)),1;j0=0;var r6=F===""?".":F+":";if(Z(b))for(var q0=0;q0<b.length;q0++)F=b[q0],u0=r6+_0(F,q0),j0+=_(F,q,K,u0,l0);else if(q0=S(b),typeof q0=="function")for(b=q0.call(b),q0=0;!(F=b.next()).done;)F=F.value,u0=r6+_0(F,q0++),j0+=_(F,q,K,u0,l0);else if(u0==="object"){if(typeof b.then=="function")return _(z0(b),q,K,F,l0);throw q=String(b),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return j0}function X(b,q,K){if(b==null)return b;var F=[],l0=0;return _(b,F,"","",function(u0){return q.call(K,u0,l0++)}),F}function Q(b){if(b._status===-1){var q=b._result;q=q(),q.then(function(K){(b._status===0||b._status===-1)&&(b._status=1,b._result=K)},function(K){(b._status===0||b._status===-1)&&(b._status=2,b._result=K)}),b._status===-1&&(b._status=0,b._result=q)}if(b._status===1)return b._result.default;throw b._result}var o0=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},h0={map:X,forEach:function(b,q,K){X(b,function(){q.apply(this,arguments)},K)},count:function(b){var q=0;return X(b,function(){q++}),q},toArray:function(b){return X(b,function(q){return q})||[]},only:function(b){if(!y0(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return i0.Activity=g,i0.Children=h0,i0.Component=D,i0.Fragment=r,i0.Profiler=C,i0.PureComponent=U,i0.StrictMode=o,i0.Suspense=y,i0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,i0.__COMPILER_RUNTIME={__proto__:null,c:function(b){return W.H.useMemoCache(b)}},i0.cache=function(b){return function(){return b.apply(null,arguments)}},i0.cacheSignal=function(){return null},i0.cloneElement=function(b,q,K){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var F=O({},b.props),l0=b.key;if(q!=null)for(u0 in q.key!==void 0&&(l0=""+q.key),q)!I.call(q,u0)||u0==="key"||u0==="__self"||u0==="__source"||u0==="ref"&&q.ref===void 0||(F[u0]=q[u0]);var u0=arguments.length-2;if(u0===1)F.children=K;else if(1<u0){for(var j0=Array(u0),r6=0;r6<u0;r6++)j0[r6]=arguments[r6+2];F.children=j0}return m0(b.type,l0,F)},i0.createContext=function(b){return b={$$typeof:d,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:f,_context:b},b},i0.createElement=function(b,q,K){var F,l0={},u0=null;if(q!=null)for(F in q.key!==void 0&&(u0=""+q.key),q)I.call(q,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(l0[F]=q[F]);var j0=arguments.length-2;if(j0===1)l0.children=K;else if(1<j0){for(var r6=Array(j0),q0=0;q0<j0;q0++)r6[q0]=arguments[q0+2];l0.children=r6}if(b&&b.defaultProps)for(F in j0=b.defaultProps,j0)l0[F]===void 0&&(l0[F]=j0[F]);return m0(b,u0,l0)},i0.createRef=function(){return{current:null}},i0.forwardRef=function(b){return{$$typeof:p,render:b}},i0.isValidElement=y0,i0.lazy=function(b){return{$$typeof:x,_payload:{_status:-1,_result:b},_init:Q}},i0.memo=function(b,q){return{$$typeof:m,type:b,compare:q===void 0?null:q}},i0.startTransition=function(b){var q=W.T,K={};W.T=K;try{var F=b(),l0=W.S;l0!==null&&l0(K,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(a0,o0)}catch(u0){o0(u0)}finally{q!==null&&K.types!==null&&(q.types=K.types),W.T=q}},i0.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},i0.use=function(b){return W.H.use(b)},i0.useActionState=function(b,q,K){return W.H.useActionState(b,q,K)},i0.useCallback=function(b,q){return W.H.useCallback(b,q)},i0.useContext=function(b){return W.H.useContext(b)},i0.useDebugValue=function(){},i0.useDeferredValue=function(b,q){return W.H.useDeferredValue(b,q)},i0.useEffect=function(b,q){return W.H.useEffect(b,q)},i0.useEffectEvent=function(b){return W.H.useEffectEvent(b)},i0.useId=function(){return W.H.useId()},i0.useImperativeHandle=function(b,q,K){return W.H.useImperativeHandle(b,q,K)},i0.useInsertionEffect=function(b,q){return W.H.useInsertionEffect(b,q)},i0.useLayoutEffect=function(b,q){return W.H.useLayoutEffect(b,q)},i0.useMemo=function(b,q){return W.H.useMemo(b,q)},i0.useOptimistic=function(b,q){return W.H.useOptimistic(b,q)},i0.useReducer=function(b,q,K){return W.H.useReducer(b,q,K)},i0.useRef=function(b){return W.H.useRef(b)},i0.useState=function(b){return W.H.useState(b)},i0.useSyncExternalStore=function(b,q,K){return W.H.useSyncExternalStore(b,q,K)},i0.useTransition=function(){return W.H.useTransition()},i0.version="19.2.4",i0}var Ul;function $n(){return Ul||(Ul=1,nn.exports=JC()),nn.exports}var k=$n(),tn={exports:{}},M7={},en={exports:{}},an={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ll;function PC(){return Ll||(Ll=1,(function(a){function i(_,X){var Q=_.length;_.push(X);n:for(;0<Q;){var o0=Q-1>>>1,h0=_[o0];if(0<C(h0,X))_[o0]=X,_[Q]=h0,Q=o0;else break n}}function r(_){return _.length===0?null:_[0]}function o(_){if(_.length===0)return null;var X=_[0],Q=_.pop();if(Q!==X){_[0]=Q;n:for(var o0=0,h0=_.length,b=h0>>>1;o0<b;){var q=2*(o0+1)-1,K=_[q],F=q+1,l0=_[F];if(0>C(K,Q))F<h0&&0>C(l0,K)?(_[o0]=l0,_[F]=Q,o0=F):(_[o0]=K,_[q]=Q,o0=q);else if(F<h0&&0>C(l0,Q))_[o0]=l0,_[F]=Q,o0=F;else break n}}return X}function C(_,X){var Q=_.sortIndex-X.sortIndex;return Q!==0?Q:_.id-X.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var d=Date,p=d.now();a.unstable_now=function(){return d.now()-p}}var y=[],m=[],x=1,g=null,M=3,S=!1,E=!1,O=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function G(_){for(var X=r(m);X!==null;){if(X.callback===null)o(m);else if(X.startTime<=_)o(m),X.sortIndex=X.expirationTime,i(y,X);else break;X=r(m)}}function Z(_){if(O=!1,G(_),!E)if(r(y)!==null)E=!0,a0||(a0=!0,v0());else{var X=r(m);X!==null&&z0(Z,X.startTime-_)}}var a0=!1,W=-1,I=5,m0=-1;function t0(){return N?!0:!(a.unstable_now()-m0<I)}function y0(){if(N=!1,a0){var _=a.unstable_now();m0=_;var X=!0;try{n:{E=!1,O&&(O=!1,Y(W),W=-1),S=!0;var Q=M;try{t:{for(G(_),g=r(y);g!==null&&!(g.expirationTime>_&&t0());){var o0=g.callback;if(typeof o0=="function"){g.callback=null,M=g.priorityLevel;var h0=o0(g.expirationTime<=_);if(_=a.unstable_now(),typeof h0=="function"){g.callback=h0,G(_),X=!0;break t}g===r(y)&&o(y),G(_)}else o(y);g=r(y)}if(g!==null)X=!0;else{var b=r(m);b!==null&&z0(Z,b.startTime-_),X=!1}}break n}finally{g=null,M=Q,S=!1}X=void 0}}finally{X?v0():a0=!1}}}var v0;if(typeof U=="function")v0=function(){U(y0)};else if(typeof MessageChannel<"u"){var W0=new MessageChannel,_0=W0.port2;W0.port1.onmessage=y0,v0=function(){_0.postMessage(null)}}else v0=function(){D(y0,0)};function z0(_,X){W=D(function(){_(a.unstable_now())},X)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(_){_.callback=null},a.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<_?Math.floor(1e3/_):5},a.unstable_getCurrentPriorityLevel=function(){return M},a.unstable_next=function(_){switch(M){case 1:case 2:case 3:var X=3;break;default:X=M}var Q=M;M=X;try{return _()}finally{M=Q}},a.unstable_requestPaint=function(){N=!0},a.unstable_runWithPriority=function(_,X){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var Q=M;M=_;try{return X()}finally{M=Q}},a.unstable_scheduleCallback=function(_,X,Q){var o0=a.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?o0+Q:o0):Q=o0,_){case 1:var h0=-1;break;case 2:h0=250;break;case 5:h0=1073741823;break;case 4:h0=1e4;break;default:h0=5e3}return h0=Q+h0,_={id:x++,callback:X,priorityLevel:_,startTime:Q,expirationTime:h0,sortIndex:-1},Q>o0?(_.sortIndex=Q,i(m,_),r(y)===null&&_===r(m)&&(O?(Y(W),W=-1):O=!0,z0(Z,Q-o0))):(_.sortIndex=h0,i(y,_),E||S||(E=!0,a0||(a0=!0,v0()))),_},a.unstable_shouldYield=t0,a.unstable_wrapCallback=function(_){var X=M;return function(){var Q=M;M=X;try{return _.apply(this,arguments)}finally{M=Q}}}})(an)),an}var Hl;function FC(){return Hl||(Hl=1,en.exports=PC()),en.exports}var ln={exports:{}},o6={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ql;function WC(){if(ql)return o6;ql=1;var a=$n();function i(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},C=Symbol.for("react.portal");function f(y,m,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:g==null?null:""+g,children:y,containerInfo:m,implementation:x}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return o6.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,o6.createPortal=function(y,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return f(y,m,null,x)},o6.flushSync=function(y){var m=d.T,x=o.p;try{if(d.T=null,o.p=2,y)return y()}finally{d.T=m,o.p=x,o.d.f()}},o6.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(y,m))},o6.prefetchDNS=function(y){typeof y=="string"&&o.d.D(y)},o6.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var x=m.as,g=p(x,m.crossOrigin),M=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?o.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:g,integrity:M,fetchPriority:S}):x==="script"&&o.d.X(y,{crossOrigin:g,integrity:M,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},o6.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=p(m.as,m.crossOrigin);o.d.M(y,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(y)},o6.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,g=p(x,m.crossOrigin);o.d.L(y,x,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},o6.preloadModule=function(y,m){if(typeof y=="string")if(m){var x=p(m.as,m.crossOrigin);o.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(y)},o6.requestFormReset=function(y){o.d.r(y)},o6.unstable_batchedUpdates=function(y,m){return y(m)},o6.useFormState=function(y,m,x){return d.H.useFormState(y,m,x)},o6.useFormStatus=function(){return d.H.useHostTransitionStatus()},o6.version="19.2.4",o6}var Yl;function $C(){if(Yl)return ln.exports;Yl=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),ln.exports=WC(),ln.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gl;function IC(){if(Gl)return M7;Gl=1;var a=FC(),i=$n(),r=$C();function o(n){var t="https://react.dev/errors/"+n;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function f(n){var t=n,e=n;if(n.alternate)for(;t.return;)t=t.return;else{n=t;do t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;while(n)}return t.tag===3?e:null}function d(n){if(n.tag===13){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function p(n){if(n.tag===31){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function y(n){if(f(n)!==n)throw Error(o(188))}function m(n){var t=n.alternate;if(!t){if(t=f(n),t===null)throw Error(o(188));return t!==n?null:n}for(var e=n,l=t;;){var u=e.return;if(u===null)break;var c=u.alternate;if(c===null){if(l=u.return,l!==null){e=l;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===e)return y(u),n;if(c===l)return y(u),t;c=c.sibling}throw Error(o(188))}if(e.return!==l.return)e=u,l=c;else{for(var h=!1,v=u.child;v;){if(v===e){h=!0,e=u,l=c;break}if(v===l){h=!0,l=u,e=c;break}v=v.sibling}if(!h){for(v=c.child;v;){if(v===e){h=!0,e=c,l=u;break}if(v===l){h=!0,l=c,e=u;break}v=v.sibling}if(!h)throw Error(o(189))}}if(e.alternate!==l)throw Error(o(190))}if(e.tag!==3)throw Error(o(188));return e.stateNode.current===e?n:t}function x(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n;for(n=n.child;n!==null;){if(t=x(n),t!==null)return t;n=n.sibling}return null}var g=Object.assign,M=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),U=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),a0=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),m0=Symbol.for("react.activity"),t0=Symbol.for("react.memo_cache_sentinel"),y0=Symbol.iterator;function v0(n){return n===null||typeof n!="object"?null:(n=y0&&n[y0]||n["@@iterator"],typeof n=="function"?n:null)}var W0=Symbol.for("react.client.reference");function _0(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===W0?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case D:return"Profiler";case N:return"StrictMode";case Z:return"Suspense";case a0:return"SuspenseList";case m0:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case E:return"Portal";case U:return n.displayName||"Context";case Y:return(n._context.displayName||"Context")+".Consumer";case G:var t=n.render;return n=n.displayName,n||(n=t.displayName||t.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case W:return t=n.displayName||null,t!==null?t:_0(n.type)||"Memo";case I:t=n._payload,n=n._init;try{return _0(n(t))}catch{}}return null}var z0=Array.isArray,_=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},o0=[],h0=-1;function b(n){return{current:n}}function q(n){0>h0||(n.current=o0[h0],o0[h0]=null,h0--)}function K(n,t){h0++,o0[h0]=n.current,n.current=t}var F=b(null),l0=b(null),u0=b(null),j0=b(null);function r6(n,t){switch(K(u0,t),K(l0,n),K(F,null),t.nodeType){case 9:case 11:n=(n=t.documentElement)&&(n=n.namespaceURI)?il(n):0;break;default:if(n=t.tagName,t=t.namespaceURI)t=il(t),n=ll(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}q(F),K(F,n)}function q0(){q(F),q(l0),q(u0)}function T2(n){n.memoizedState!==null&&K(j0,n);var t=F.current,e=ll(t,n.type);t!==e&&(K(l0,n),K(F,e))}function q7(n){l0.current===n&&(q(F),q(l0)),j0.current===n&&(q(j0),m7._currentValue=Q)}var V3,Ot;function s1(n){if(V3===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);V3=t&&t[1]||"",Ot=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+V3+n+Ot}var _3=!1;function B3(n,t){if(!n||_3)return"";_3=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(V){var R=V}Reflect.construct(n,[],H)}else{try{H.call()}catch(V){R=V}n.call(H.prototype)}}else{try{throw Error()}catch(V){R=V}(H=n())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(V){if(V&&R&&typeof V.stack=="string")return[V.stack,R.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),h=c[0],v=c[1];if(h&&v){var z=h.split(`
`),w=v.split(`
`);for(u=l=0;l<z.length&&!z[l].includes("DetermineComponentFrameRoot");)l++;for(;u<w.length&&!w[u].includes("DetermineComponentFrameRoot");)u++;if(l===z.length||u===w.length)for(l=z.length-1,u=w.length-1;1<=l&&0<=u&&z[l]!==w[u];)u--;for(;1<=l&&0<=u;l--,u--)if(z[l]!==w[u]){if(l!==1||u!==1)do if(l--,u--,0>u||z[l]!==w[u]){var B=`
`+z[l].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=l&&0<=u);break}}}finally{_3=!1,Error.prepareStackTrace=e}return(e=n?n.displayName||n.name:"")?s1(e):""}function ju(n,t){switch(n.tag){case 26:case 27:case 5:return s1(n.type);case 16:return s1("Lazy");case 13:return n.child!==t&&t!==null?s1("Suspense Fallback"):s1("Suspense");case 19:return s1("SuspenseList");case 0:case 15:return B3(n.type,!1);case 11:return B3(n.type.render,!1);case 1:return B3(n.type,!0);case 31:return s1("Activity");default:return""}}function Vt(n){try{var t="",e=null;do t+=ju(n,e),e=n,n=n.return;while(n);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var U3=Object.prototype.hasOwnProperty,L3=a.unstable_scheduleCallback,H3=a.unstable_cancelCallback,bu=a.unstable_shouldYield,Su=a.unstable_requestPaint,v6=a.unstable_now,ku=a.unstable_getCurrentPriorityLevel,_t=a.unstable_ImmediatePriority,Bt=a.unstable_UserBlockingPriority,Y7=a.unstable_NormalPriority,Tu=a.unstable_LowPriority,Ut=a.unstable_IdlePriority,Eu=a.log,Au=a.unstable_setDisableYieldValue,E2=null,M6=null;function A8(n){if(typeof Eu=="function"&&Au(n),M6&&typeof M6.setStrictMode=="function")try{M6.setStrictMode(E2,n)}catch{}}var z6=Math.clz32?Math.clz32:Du,wu=Math.log,Ru=Math.LN2;function Du(n){return n>>>=0,n===0?32:31-(wu(n)/Ru|0)|0}var G7=256,X7=262144,Z7=4194304;function o1(n){var t=n&42;if(t!==0)return t;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function K7(n,t,e){var l=n.pendingLanes;if(l===0)return 0;var u=0,c=n.suspendedLanes,h=n.pingedLanes;n=n.warmLanes;var v=l&134217727;return v!==0?(l=v&~c,l!==0?u=o1(l):(h&=v,h!==0?u=o1(h):e||(e=v&~n,e!==0&&(u=o1(e))))):(v=l&~c,v!==0?u=o1(v):h!==0?u=o1(h):e||(e=l&~n,e!==0&&(u=o1(e)))),u===0?0:t!==0&&t!==u&&(t&c)===0&&(c=u&-u,e=t&-t,c>=e||c===32&&(e&4194048)!==0)?t:u}function A2(n,t){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&t)===0}function Nu(n,t){switch(n){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lt(){var n=Z7;return Z7<<=1,(Z7&62914560)===0&&(Z7=4194304),n}function q3(n){for(var t=[],e=0;31>e;e++)t.push(n);return t}function w2(n,t){n.pendingLanes|=t,t!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Ou(n,t,e,l,u,c){var h=n.pendingLanes;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=e,n.entangledLanes&=e,n.errorRecoveryDisabledLanes&=e,n.shellSuspendCounter=0;var v=n.entanglements,z=n.expirationTimes,w=n.hiddenUpdates;for(e=h&~e;0<e;){var B=31-z6(e),H=1<<B;v[B]=0,z[B]=-1;var R=w[B];if(R!==null)for(w[B]=null,B=0;B<R.length;B++){var V=R[B];V!==null&&(V.lane&=-536870913)}e&=~H}l!==0&&Ht(n,l,0),c!==0&&u===0&&n.tag!==0&&(n.suspendedLanes|=c&~(h&~t))}function Ht(n,t,e){n.pendingLanes|=t,n.suspendedLanes&=~t;var l=31-z6(t);n.entangledLanes|=t,n.entanglements[l]=n.entanglements[l]|1073741824|e&261930}function qt(n,t){var e=n.entangledLanes|=t;for(n=n.entanglements;e;){var l=31-z6(e),u=1<<l;u&t|n[l]&t&&(n[l]|=t),e&=~u}}function Yt(n,t){var e=t&-t;return e=(e&42)!==0?1:Y3(e),(e&(n.suspendedLanes|t))!==0?0:e}function Y3(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function G3(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Gt(){var n=X.p;return n!==0?n:(n=window.event,n===void 0?32:El(n.type))}function Xt(n,t){var e=X.p;try{return X.p=n,t()}finally{X.p=e}}var w8=Math.random().toString(36).slice(2),n6="__reactFiber$"+w8,f6="__reactProps$"+w8,D1="__reactContainer$"+w8,X3="__reactEvents$"+w8,Vu="__reactListeners$"+w8,_u="__reactHandles$"+w8,Zt="__reactResources$"+w8,R2="__reactMarker$"+w8;function Z3(n){delete n[n6],delete n[f6],delete n[X3],delete n[Vu],delete n[_u]}function N1(n){var t=n[n6];if(t)return t;for(var e=n.parentNode;e;){if(t=e[D1]||e[n6]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(n=fl(n);n!==null;){if(e=n[n6])return e;n=fl(n)}return t}n=e,e=n.parentNode}return null}function O1(n){if(n=n[n6]||n[D1]){var t=n.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return n}return null}function D2(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n.stateNode;throw Error(o(33))}function V1(n){var t=n[Zt];return t||(t=n[Zt]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $0(n){n[R2]=!0}var Kt=new Set,Qt={};function r1(n,t){_1(n,t),_1(n+"Capture",t)}function _1(n,t){for(Qt[n]=t,n=0;n<t.length;n++)Kt.add(t[n])}var Bu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},Pt={};function Uu(n){return U3.call(Pt,n)?!0:U3.call(Jt,n)?!1:Bu.test(n)?Pt[n]=!0:(Jt[n]=!0,!1)}function Q7(n,t,e){if(Uu(t))if(e===null)n.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":n.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(t);return}}n.setAttribute(t,""+e)}}function J7(n,t,e){if(e===null)n.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttribute(t,""+e)}}function u8(n,t,e,l){if(l===null)n.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttributeNS(t,e,""+l)}}function R6(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ft(n){var t=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lu(n,t,e){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,t);if(!n.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,c=l.set;return Object.defineProperty(n,t,{configurable:!0,get:function(){return u.call(this)},set:function(h){e=""+h,c.call(this,h)}}),Object.defineProperty(n,t,{enumerable:l.enumerable}),{getValue:function(){return e},setValue:function(h){e=""+h},stopTracking:function(){n._valueTracker=null,delete n[t]}}}}function K3(n){if(!n._valueTracker){var t=Ft(n)?"checked":"value";n._valueTracker=Lu(n,t,""+n[t])}}function Wt(n){if(!n)return!1;var t=n._valueTracker;if(!t)return!0;var e=t.getValue(),l="";return n&&(l=Ft(n)?n.checked?"true":"false":n.value),n=l,n!==e?(t.setValue(n),!0):!1}function P7(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Hu=/[\n"\\]/g;function D6(n){return n.replace(Hu,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Q3(n,t,e,l,u,c,h,v){n.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?n.type=h:n.removeAttribute("type"),t!=null?h==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+R6(t)):n.value!==""+R6(t)&&(n.value=""+R6(t)):h!=="submit"&&h!=="reset"||n.removeAttribute("value"),t!=null?J3(n,h,R6(t)):e!=null?J3(n,h,R6(e)):l!=null&&n.removeAttribute("value"),u==null&&c!=null&&(n.defaultChecked=!!c),u!=null&&(n.checked=u&&typeof u!="function"&&typeof u!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?n.name=""+R6(v):n.removeAttribute("name")}function $t(n,t,e,l,u,c,h,v){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(n.type=c),t!=null||e!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){K3(n);return}e=e!=null?""+R6(e):"",t=t!=null?""+R6(t):e,v||t===n.value||(n.value=t),n.defaultValue=t}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=v?n.checked:!!l,n.defaultChecked=!!l,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(n.name=h),K3(n)}function J3(n,t,e){t==="number"&&P7(n.ownerDocument)===n||n.defaultValue===""+e||(n.defaultValue=""+e)}function B1(n,t,e,l){if(n=n.options,t){t={};for(var u=0;u<e.length;u++)t["$"+e[u]]=!0;for(e=0;e<n.length;e++)u=t.hasOwnProperty("$"+n[e].value),n[e].selected!==u&&(n[e].selected=u),u&&l&&(n[e].defaultSelected=!0)}else{for(e=""+R6(e),t=null,u=0;u<n.length;u++){if(n[u].value===e){n[u].selected=!0,l&&(n[u].defaultSelected=!0);return}t!==null||n[u].disabled||(t=n[u])}t!==null&&(t.selected=!0)}}function It(n,t,e){if(t!=null&&(t=""+R6(t),t!==n.value&&(n.value=t),e==null)){n.defaultValue!==t&&(n.defaultValue=t);return}n.defaultValue=e!=null?""+R6(e):""}function ne(n,t,e,l){if(t==null){if(l!=null){if(e!=null)throw Error(o(92));if(z0(l)){if(1<l.length)throw Error(o(93));l=l[0]}e=l}e==null&&(e=""),t=e}e=R6(t),n.defaultValue=e,l=n.textContent,l===e&&l!==""&&l!==null&&(n.value=l),K3(n)}function U1(n,t){if(t){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=t;return}}n.textContent=t}var qu=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function te(n,t,e){var l=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?l?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="":l?n.setProperty(t,e):typeof e!="number"||e===0||qu.has(t)?t==="float"?n.cssFloat=e:n[t]=(""+e).trim():n[t]=e+"px"}function ee(n,t,e){if(t!=null&&typeof t!="object")throw Error(o(62));if(n=n.style,e!=null){for(var l in e)!e.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var u in t)l=t[u],t.hasOwnProperty(u)&&e[u]!==l&&te(n,u,l)}else for(var c in t)t.hasOwnProperty(c)&&te(n,c,t[c])}function P3(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gu=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function F7(n){return Gu.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function c8(){}var F3=null;function W3(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var L1=null,H1=null;function ae(n){var t=O1(n);if(t&&(n=t.stateNode)){var e=n[f6]||null;n:switch(n=t.stateNode,t.type){case"input":if(Q3(n,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+D6(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var l=e[t];if(l!==n&&l.form===n.form){var u=l[f6]||null;if(!u)throw Error(o(90));Q3(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<e.length;t++)l=e[t],l.form===n.form&&Wt(l)}break n;case"textarea":It(n,e.value,e.defaultValue);break n;case"select":t=e.value,t!=null&&B1(n,!!e.multiple,t,!1)}}}var $3=!1;function ie(n,t,e){if($3)return n(t,e);$3=!0;try{var l=n(t);return l}finally{if($3=!1,(L1!==null||H1!==null)&&(B5(),L1&&(t=L1,n=H1,H1=L1=null,ae(t),n)))for(t=0;t<n.length;t++)ae(n[t])}}function N2(n,t){var e=n.stateNode;if(e===null)return null;var l=e[f6]||null;if(l===null)return null;e=l[t];n:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break n;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(o(231,t,typeof e));return e}var C8=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),I3=!1;if(C8)try{var O2={};Object.defineProperty(O2,"passive",{get:function(){I3=!0}}),window.addEventListener("test",O2,O2),window.removeEventListener("test",O2,O2)}catch{I3=!1}var R8=null,n4=null,W7=null;function le(){if(W7)return W7;var n,t=n4,e=t.length,l,u="value"in R8?R8.value:R8.textContent,c=u.length;for(n=0;n<e&&t[n]===u[n];n++);var h=e-n;for(l=1;l<=h&&t[e-l]===u[c-l];l++);return W7=u.slice(n,1<l?1-l:void 0)}function $7(n){var t=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&t===13&&(n=13)):n=t,n===10&&(n=13),32<=n||n===13?n:0}function I7(){return!0}function se(){return!1}function d6(n){function t(e,l,u,c,h){this._reactName=e,this._targetInst=u,this.type=l,this.nativeEvent=c,this.target=h,this.currentTarget=null;for(var v in n)n.hasOwnProperty(v)&&(e=n[v],this[v]=e?e(c):c[v]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?I7:se,this.isPropagationStopped=se,this}return g(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=I7)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=I7)},persist:function(){},isPersistent:I7}),t}var u1={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},n5=d6(u1),V2=g({},u1,{view:0,detail:0}),Xu=d6(V2),t4,e4,_2,t5=g({},V2,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:i4,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_2&&(_2&&n.type==="mousemove"?(t4=n.screenX-_2.screenX,e4=n.screenY-_2.screenY):e4=t4=0,_2=n),t4)},movementY:function(n){return"movementY"in n?n.movementY:e4}}),oe=d6(t5),Zu=g({},t5,{dataTransfer:0}),Ku=d6(Zu),Qu=g({},V2,{relatedTarget:0}),a4=d6(Qu),Ju=g({},u1,{animationName:0,elapsedTime:0,pseudoElement:0}),Pu=d6(Ju),Fu=g({},u1,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Wu=d6(Fu),$u=g({},u1,{data:0}),re=d6($u),Iu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ec(n){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(n):(n=tc[n])?!!t[n]:!1}function i4(){return ec}var ac=g({},V2,{key:function(n){if(n.key){var t=Iu[n.key]||n.key;if(t!=="Unidentified")return t}return n.type==="keypress"?(n=$7(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?nc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:i4,charCode:function(n){return n.type==="keypress"?$7(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?$7(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ic=d6(ac),lc=g({},t5,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ue=d6(lc),sc=g({},V2,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:i4}),oc=d6(sc),rc=g({},u1,{propertyName:0,elapsedTime:0,pseudoElement:0}),uc=d6(rc),cc=g({},t5,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Cc=d6(cc),fc=g({},u1,{newState:0,oldState:0}),dc=d6(fc),hc=[9,13,27,32],l4=C8&&"CompositionEvent"in window,B2=null;C8&&"documentMode"in document&&(B2=document.documentMode);var pc=C8&&"TextEvent"in window&&!B2,ce=C8&&(!l4||B2&&8<B2&&11>=B2),Ce=" ",fe=!1;function de(n,t){switch(n){case"keyup":return hc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function he(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var q1=!1;function mc(n,t){switch(n){case"compositionend":return he(t);case"keypress":return t.which!==32?null:(fe=!0,Ce);case"textInput":return n=t.data,n===Ce&&fe?null:n;default:return null}}function yc(n,t){if(q1)return n==="compositionend"||!l4&&de(n,t)?(n=le(),W7=n4=R8=null,q1=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ce&&t.locale!=="ko"?null:t.data;default:return null}}var xc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pe(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t==="input"?!!xc[n.type]:t==="textarea"}function me(n,t,e,l){L1?H1?H1.push(l):H1=[l]:L1=l,t=X5(t,"onChange"),0<t.length&&(e=new n5("onChange","change",null,e,l),n.push({event:e,listeners:t}))}var U2=null,L2=null;function gc(n){$i(n,0)}function e5(n){var t=D2(n);if(Wt(t))return n}function ye(n,t){if(n==="change")return t}var xe=!1;if(C8){var s4;if(C8){var o4="oninput"in document;if(!o4){var ge=document.createElement("div");ge.setAttribute("oninput","return;"),o4=typeof ge.oninput=="function"}s4=o4}else s4=!1;xe=s4&&(!document.documentMode||9<document.documentMode)}function ve(){U2&&(U2.detachEvent("onpropertychange",Me),L2=U2=null)}function Me(n){if(n.propertyName==="value"&&e5(L2)){var t=[];me(t,L2,n,W3(n)),ie(gc,t)}}function vc(n,t,e){n==="focusin"?(ve(),U2=t,L2=e,U2.attachEvent("onpropertychange",Me)):n==="focusout"&&ve()}function Mc(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return e5(L2)}function zc(n,t){if(n==="click")return e5(t)}function jc(n,t){if(n==="input"||n==="change")return e5(t)}function bc(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var j6=typeof Object.is=="function"?Object.is:bc;function H2(n,t){if(j6(n,t))return!0;if(typeof n!="object"||n===null||typeof t!="object"||t===null)return!1;var e=Object.keys(n),l=Object.keys(t);if(e.length!==l.length)return!1;for(l=0;l<e.length;l++){var u=e[l];if(!U3.call(t,u)||!j6(n[u],t[u]))return!1}return!0}function ze(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function je(n,t){var e=ze(n);n=0;for(var l;e;){if(e.nodeType===3){if(l=n+e.textContent.length,n<=t&&l>=t)return{node:e,offset:t-n};n=l}n:{for(;e;){if(e.nextSibling){e=e.nextSibling;break n}e=e.parentNode}e=void 0}e=ze(e)}}function be(n,t){return n&&t?n===t?!0:n&&n.nodeType===3?!1:t&&t.nodeType===3?be(n,t.parentNode):"contains"in n?n.contains(t):n.compareDocumentPosition?!!(n.compareDocumentPosition(t)&16):!1:!1}function Se(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var t=P7(n.document);t instanceof n.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)n=t.contentWindow;else break;t=P7(n.document)}return t}function r4(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t&&(t==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||t==="textarea"||n.contentEditable==="true")}var Sc=C8&&"documentMode"in document&&11>=document.documentMode,Y1=null,u4=null,q2=null,c4=!1;function ke(n,t,e){var l=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;c4||Y1==null||Y1!==P7(l)||(l=Y1,"selectionStart"in l&&r4(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),q2&&H2(q2,l)||(q2=l,l=X5(u4,"onSelect"),0<l.length&&(t=new n5("onSelect","select",null,t,e),n.push({event:t,listeners:l}),t.target=Y1)))}function c1(n,t){var e={};return e[n.toLowerCase()]=t.toLowerCase(),e["Webkit"+n]="webkit"+t,e["Moz"+n]="moz"+t,e}var G1={animationend:c1("Animation","AnimationEnd"),animationiteration:c1("Animation","AnimationIteration"),animationstart:c1("Animation","AnimationStart"),transitionrun:c1("Transition","TransitionRun"),transitionstart:c1("Transition","TransitionStart"),transitioncancel:c1("Transition","TransitionCancel"),transitionend:c1("Transition","TransitionEnd")},C4={},Te={};C8&&(Te=document.createElement("div").style,"AnimationEvent"in window||(delete G1.animationend.animation,delete G1.animationiteration.animation,delete G1.animationstart.animation),"TransitionEvent"in window||delete G1.transitionend.transition);function C1(n){if(C4[n])return C4[n];if(!G1[n])return n;var t=G1[n],e;for(e in t)if(t.hasOwnProperty(e)&&e in Te)return C4[n]=t[e];return n}var Ee=C1("animationend"),Ae=C1("animationiteration"),we=C1("animationstart"),kc=C1("transitionrun"),Tc=C1("transitionstart"),Ec=C1("transitioncancel"),Re=C1("transitionend"),De=new Map,f4="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");f4.push("scrollEnd");function Z6(n,t){De.set(n,t),r1(t,[n])}var a5=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},N6=[],X1=0,d4=0;function i5(){for(var n=X1,t=d4=X1=0;t<n;){var e=N6[t];N6[t++]=null;var l=N6[t];N6[t++]=null;var u=N6[t];N6[t++]=null;var c=N6[t];if(N6[t++]=null,l!==null&&u!==null){var h=l.pending;h===null?u.next=u:(u.next=h.next,h.next=u),l.pending=u}c!==0&&Ne(e,u,c)}}function l5(n,t,e,l){N6[X1++]=n,N6[X1++]=t,N6[X1++]=e,N6[X1++]=l,d4|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function h4(n,t,e,l){return l5(n,t,e,l),s5(n)}function f1(n,t){return l5(n,null,null,t),s5(n)}function Ne(n,t,e){n.lanes|=e;var l=n.alternate;l!==null&&(l.lanes|=e);for(var u=!1,c=n.return;c!==null;)c.childLanes|=e,l=c.alternate,l!==null&&(l.childLanes|=e),c.tag===22&&(n=c.stateNode,n===null||n._visibility&1||(u=!0)),n=c,c=c.return;return n.tag===3?(c=n.stateNode,u&&t!==null&&(u=31-z6(e),n=c.hiddenUpdates,l=n[u],l===null?n[u]=[t]:l.push(t),t.lane=e|536870912),c):null}function s5(n){if(50<u7)throw u7=0,j9=null,Error(o(185));for(var t=n.return;t!==null;)n=t,t=n.return;return n.tag===3?n.stateNode:null}var Z1={};function Ac(n,t,e,l){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function b6(n,t,e,l){return new Ac(n,t,e,l)}function p4(n){return n=n.prototype,!(!n||!n.isReactComponent)}function f8(n,t){var e=n.alternate;return e===null?(e=b6(n.tag,t,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=t,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&65011712,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e.refCleanup=n.refCleanup,e}function Oe(n,t){n.flags&=65011714;var e=n.alternate;return e===null?(n.childLanes=0,n.lanes=t,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.type=e.type,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n}function o5(n,t,e,l,u,c){var h=0;if(l=n,typeof n=="function")p4(n)&&(h=1);else if(typeof n=="string")h=OC(n,e,F.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case m0:return n=b6(31,e,t,u),n.elementType=m0,n.lanes=c,n;case O:return d1(e.children,u,c,t);case N:h=8,u|=24;break;case D:return n=b6(12,e,t,u|2),n.elementType=D,n.lanes=c,n;case Z:return n=b6(13,e,t,u),n.elementType=Z,n.lanes=c,n;case a0:return n=b6(19,e,t,u),n.elementType=a0,n.lanes=c,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case U:h=10;break n;case Y:h=9;break n;case G:h=11;break n;case W:h=14;break n;case I:h=16,l=null;break n}h=29,e=Error(o(130,n===null?"null":typeof n,"")),l=null}return t=b6(h,e,t,u),t.elementType=n,t.type=l,t.lanes=c,t}function d1(n,t,e,l){return n=b6(7,n,l,t),n.lanes=e,n}function m4(n,t,e){return n=b6(6,n,null,t),n.lanes=e,n}function Ve(n){var t=b6(18,null,null,0);return t.stateNode=n,t}function y4(n,t,e){return t=b6(4,n.children!==null?n.children:[],n.key,t),t.lanes=e,t.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},t}var _e=new WeakMap;function O6(n,t){if(typeof n=="object"&&n!==null){var e=_e.get(n);return e!==void 0?e:(t={value:n,source:t,stack:Vt(t)},_e.set(n,t),t)}return{value:n,source:t,stack:Vt(t)}}var K1=[],Q1=0,r5=null,Y2=0,V6=[],_6=0,D8=null,n8=1,t8="";function d8(n,t){K1[Q1++]=Y2,K1[Q1++]=r5,r5=n,Y2=t}function Be(n,t,e){V6[_6++]=n8,V6[_6++]=t8,V6[_6++]=D8,D8=n;var l=n8;n=t8;var u=32-z6(l)-1;l&=~(1<<u),e+=1;var c=32-z6(t)+u;if(30<c){var h=u-u%5;c=(l&(1<<h)-1).toString(32),l>>=h,u-=h,n8=1<<32-z6(t)+u|e<<u|l,t8=c+n}else n8=1<<c|e<<u|l,t8=n}function x4(n){n.return!==null&&(d8(n,1),Be(n,1,0))}function g4(n){for(;n===r5;)r5=K1[--Q1],K1[Q1]=null,Y2=K1[--Q1],K1[Q1]=null;for(;n===D8;)D8=V6[--_6],V6[_6]=null,t8=V6[--_6],V6[_6]=null,n8=V6[--_6],V6[_6]=null}function Ue(n,t){V6[_6++]=n8,V6[_6++]=t8,V6[_6++]=D8,n8=t.id,t8=t.overflow,D8=n}var t6=null,R0=null,p0=!1,N8=null,B6=!1,v4=Error(o(519));function O8(n){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw G2(O6(t,n)),v4}function Le(n){var t=n.stateNode,e=n.type,l=n.memoizedProps;switch(t[n6]=n,t[f6]=l,e){case"dialog":C0("cancel",t),C0("close",t);break;case"iframe":case"object":case"embed":C0("load",t);break;case"video":case"audio":for(e=0;e<C7.length;e++)C0(C7[e],t);break;case"source":C0("error",t);break;case"img":case"image":case"link":C0("error",t),C0("load",t);break;case"details":C0("toggle",t);break;case"input":C0("invalid",t),$t(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":C0("invalid",t);break;case"textarea":C0("invalid",t),ne(t,l.value,l.defaultValue,l.children)}e=l.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||l.suppressHydrationWarning===!0||el(t.textContent,e)?(l.popover!=null&&(C0("beforetoggle",t),C0("toggle",t)),l.onScroll!=null&&C0("scroll",t),l.onScrollEnd!=null&&C0("scrollend",t),l.onClick!=null&&(t.onclick=c8),t=!0):t=!1,t||O8(n,!0)}function He(n){for(t6=n.return;t6;)switch(t6.tag){case 5:case 31:case 13:B6=!1;return;case 27:case 3:B6=!0;return;default:t6=t6.return}}function J1(n){if(n!==t6)return!1;if(!p0)return He(n),p0=!0,!1;var t=n.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=n.type,e=!(e!=="form"&&e!=="button")||U9(n.type,n.memoizedProps)),e=!e),e&&R0&&O8(n),He(n),t===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));R0=Cl(n)}else if(t===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));R0=Cl(n)}else t===27?(t=R0,J8(n.type)?(n=G9,G9=null,R0=n):R0=t):R0=t6?L6(n.stateNode.nextSibling):null;return!0}function h1(){R0=t6=null,p0=!1}function M4(){var n=N8;return n!==null&&(y6===null?y6=n:y6.push.apply(y6,n),N8=null),n}function G2(n){N8===null?N8=[n]:N8.push(n)}var z4=b(null),p1=null,h8=null;function V8(n,t,e){K(z4,t._currentValue),t._currentValue=e}function p8(n){n._currentValue=z4.current,q(z4)}function j4(n,t,e){for(;n!==null;){var l=n.alternate;if((n.childLanes&t)!==t?(n.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),n===e)break;n=n.return}}function b4(n,t,e,l){var u=n.child;for(u!==null&&(u.return=n);u!==null;){var c=u.dependencies;if(c!==null){var h=u.child;c=c.firstContext;n:for(;c!==null;){var v=c;c=u;for(var z=0;z<t.length;z++)if(v.context===t[z]){c.lanes|=e,v=c.alternate,v!==null&&(v.lanes|=e),j4(c.return,e,n),l||(h=null);break n}c=v.next}}else if(u.tag===18){if(h=u.return,h===null)throw Error(o(341));h.lanes|=e,c=h.alternate,c!==null&&(c.lanes|=e),j4(h,e,n),h=null}else h=u.child;if(h!==null)h.return=u;else for(h=u;h!==null;){if(h===n){h=null;break}if(u=h.sibling,u!==null){u.return=h.return,h=u;break}h=h.return}u=h}}function P1(n,t,e,l){n=null;for(var u=t,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var h=u.alternate;if(h===null)throw Error(o(387));if(h=h.memoizedProps,h!==null){var v=u.type;j6(u.pendingProps.value,h.value)||(n!==null?n.push(v):n=[v])}}else if(u===j0.current){if(h=u.alternate,h===null)throw Error(o(387));h.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(n!==null?n.push(m7):n=[m7])}u=u.return}n!==null&&b4(t,n,e,l),t.flags|=262144}function u5(n){for(n=n.firstContext;n!==null;){if(!j6(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function m1(n){p1=n,h8=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function e6(n){return qe(p1,n)}function c5(n,t){return p1===null&&m1(n),qe(n,t)}function qe(n,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},h8===null){if(n===null)throw Error(o(308));h8=t,n.dependencies={lanes:0,firstContext:t},n.flags|=524288}else h8=h8.next=t;return e}var wc=typeof AbortController<"u"?AbortController:function(){var n=[],t=this.signal={aborted:!1,addEventListener:function(e,l){n.push(l)}};this.abort=function(){t.aborted=!0,n.forEach(function(e){return e()})}},Rc=a.unstable_scheduleCallback,Dc=a.unstable_NormalPriority,X0={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function S4(){return{controller:new wc,data:new Map,refCount:0}}function X2(n){n.refCount--,n.refCount===0&&Rc(Dc,function(){n.controller.abort()})}var Z2=null,k4=0,F1=0,W1=null;function Nc(n,t){if(Z2===null){var e=Z2=[];k4=0,F1=A9(),W1={status:"pending",value:void 0,then:function(l){e.push(l)}}}return k4++,t.then(Ye,Ye),t}function Ye(){if(--k4===0&&Z2!==null){W1!==null&&(W1.status="fulfilled");var n=Z2;Z2=null,F1=0,W1=null;for(var t=0;t<n.length;t++)(0,n[t])()}}function Oc(n,t){var e=[],l={status:"pending",value:null,reason:null,then:function(u){e.push(u)}};return n.then(function(){l.status="fulfilled",l.value=t;for(var u=0;u<e.length;u++)(0,e[u])(t)},function(u){for(l.status="rejected",l.reason=u,u=0;u<e.length;u++)(0,e[u])(void 0)}),l}var Ge=_.S;_.S=function(n,t){ki=v6(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Nc(n,t),Ge!==null&&Ge(n,t)};var y1=b(null);function T4(){var n=y1.current;return n!==null?n:A0.pooledCache}function C5(n,t){t===null?K(y1,y1.current):K(y1,t.pool)}function Xe(){var n=T4();return n===null?null:{parent:X0._currentValue,pool:n}}var $1=Error(o(460)),E4=Error(o(474)),f5=Error(o(542)),d5={then:function(){}};function Ze(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Ke(n,t,e){switch(e=n[e],e===void 0?n.push(t):e!==t&&(t.then(c8,c8),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,Je(n),n;default:if(typeof t.status=="string")t.then(c8,c8);else{if(n=A0,n!==null&&100<n.shellSuspendCounter)throw Error(o(482));n=t,n.status="pending",n.then(function(l){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=l}},function(l){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,Je(n),n}throw g1=t,$1}}function x1(n){try{var t=n._init;return t(n._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(g1=e,$1):e}}var g1=null;function Qe(){if(g1===null)throw Error(o(459));var n=g1;return g1=null,n}function Je(n){if(n===$1||n===f5)throw Error(o(483))}var I1=null,K2=0;function h5(n){var t=K2;return K2+=1,I1===null&&(I1=[]),Ke(I1,n,t)}function Q2(n,t){t=t.props.ref,n.ref=t!==void 0?t:null}function p5(n,t){throw t.$$typeof===M?Error(o(525)):(n=Object.prototype.toString.call(t),Error(o(31,n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)))}function Pe(n){function t(T,j){if(n){var A=T.deletions;A===null?(T.deletions=[j],T.flags|=16):A.push(j)}}function e(T,j){if(!n)return null;for(;j!==null;)t(T,j),j=j.sibling;return null}function l(T){for(var j=new Map;T!==null;)T.key!==null?j.set(T.key,T):j.set(T.index,T),T=T.sibling;return j}function u(T,j){return T=f8(T,j),T.index=0,T.sibling=null,T}function c(T,j,A){return T.index=A,n?(A=T.alternate,A!==null?(A=A.index,A<j?(T.flags|=67108866,j):A):(T.flags|=67108866,j)):(T.flags|=1048576,j)}function h(T){return n&&T.alternate===null&&(T.flags|=67108866),T}function v(T,j,A,L){return j===null||j.tag!==6?(j=m4(A,T.mode,L),j.return=T,j):(j=u(j,A),j.return=T,j)}function z(T,j,A,L){var n0=A.type;return n0===O?B(T,j,A.props.children,L,A.key):j!==null&&(j.elementType===n0||typeof n0=="object"&&n0!==null&&n0.$$typeof===I&&x1(n0)===j.type)?(j=u(j,A.props),Q2(j,A),j.return=T,j):(j=o5(A.type,A.key,A.props,null,T.mode,L),Q2(j,A),j.return=T,j)}function w(T,j,A,L){return j===null||j.tag!==4||j.stateNode.containerInfo!==A.containerInfo||j.stateNode.implementation!==A.implementation?(j=y4(A,T.mode,L),j.return=T,j):(j=u(j,A.children||[]),j.return=T,j)}function B(T,j,A,L,n0){return j===null||j.tag!==7?(j=d1(A,T.mode,L,n0),j.return=T,j):(j=u(j,A),j.return=T,j)}function H(T,j,A){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=m4(""+j,T.mode,A),j.return=T,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case S:return A=o5(j.type,j.key,j.props,null,T.mode,A),Q2(A,j),A.return=T,A;case E:return j=y4(j,T.mode,A),j.return=T,j;case I:return j=x1(j),H(T,j,A)}if(z0(j)||v0(j))return j=d1(j,T.mode,A,null),j.return=T,j;if(typeof j.then=="function")return H(T,h5(j),A);if(j.$$typeof===U)return H(T,c5(T,j),A);p5(T,j)}return null}function R(T,j,A,L){var n0=j!==null?j.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return n0!==null?null:v(T,j,""+A,L);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case S:return A.key===n0?z(T,j,A,L):null;case E:return A.key===n0?w(T,j,A,L):null;case I:return A=x1(A),R(T,j,A,L)}if(z0(A)||v0(A))return n0!==null?null:B(T,j,A,L,null);if(typeof A.then=="function")return R(T,j,h5(A),L);if(A.$$typeof===U)return R(T,j,c5(T,A),L);p5(T,A)}return null}function V(T,j,A,L,n0){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return T=T.get(A)||null,v(j,T,""+L,n0);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case S:return T=T.get(L.key===null?A:L.key)||null,z(j,T,L,n0);case E:return T=T.get(L.key===null?A:L.key)||null,w(j,T,L,n0);case I:return L=x1(L),V(T,j,A,L,n0)}if(z0(L)||v0(L))return T=T.get(A)||null,B(j,T,L,n0,null);if(typeof L.then=="function")return V(T,j,A,h5(L),n0);if(L.$$typeof===U)return V(T,j,A,c5(j,L),n0);p5(j,L)}return null}function J(T,j,A,L){for(var n0=null,x0=null,$=j,r0=j=0,d0=null;$!==null&&r0<A.length;r0++){$.index>r0?(d0=$,$=null):d0=$.sibling;var g0=R(T,$,A[r0],L);if(g0===null){$===null&&($=d0);break}n&&$&&g0.alternate===null&&t(T,$),j=c(g0,j,r0),x0===null?n0=g0:x0.sibling=g0,x0=g0,$=d0}if(r0===A.length)return e(T,$),p0&&d8(T,r0),n0;if($===null){for(;r0<A.length;r0++)$=H(T,A[r0],L),$!==null&&(j=c($,j,r0),x0===null?n0=$:x0.sibling=$,x0=$);return p0&&d8(T,r0),n0}for($=l($);r0<A.length;r0++)d0=V($,T,r0,A[r0],L),d0!==null&&(n&&d0.alternate!==null&&$.delete(d0.key===null?r0:d0.key),j=c(d0,j,r0),x0===null?n0=d0:x0.sibling=d0,x0=d0);return n&&$.forEach(function(I8){return t(T,I8)}),p0&&d8(T,r0),n0}function e0(T,j,A,L){if(A==null)throw Error(o(151));for(var n0=null,x0=null,$=j,r0=j=0,d0=null,g0=A.next();$!==null&&!g0.done;r0++,g0=A.next()){$.index>r0?(d0=$,$=null):d0=$.sibling;var I8=R(T,$,g0.value,L);if(I8===null){$===null&&($=d0);break}n&&$&&I8.alternate===null&&t(T,$),j=c(I8,j,r0),x0===null?n0=I8:x0.sibling=I8,x0=I8,$=d0}if(g0.done)return e(T,$),p0&&d8(T,r0),n0;if($===null){for(;!g0.done;r0++,g0=A.next())g0=H(T,g0.value,L),g0!==null&&(j=c(g0,j,r0),x0===null?n0=g0:x0.sibling=g0,x0=g0);return p0&&d8(T,r0),n0}for($=l($);!g0.done;r0++,g0=A.next())g0=V($,T,r0,g0.value,L),g0!==null&&(n&&g0.alternate!==null&&$.delete(g0.key===null?r0:g0.key),j=c(g0,j,r0),x0===null?n0=g0:x0.sibling=g0,x0=g0);return n&&$.forEach(function(ZC){return t(T,ZC)}),p0&&d8(T,r0),n0}function E0(T,j,A,L){if(typeof A=="object"&&A!==null&&A.type===O&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case S:n:{for(var n0=A.key;j!==null;){if(j.key===n0){if(n0=A.type,n0===O){if(j.tag===7){e(T,j.sibling),L=u(j,A.props.children),L.return=T,T=L;break n}}else if(j.elementType===n0||typeof n0=="object"&&n0!==null&&n0.$$typeof===I&&x1(n0)===j.type){e(T,j.sibling),L=u(j,A.props),Q2(L,A),L.return=T,T=L;break n}e(T,j);break}else t(T,j);j=j.sibling}A.type===O?(L=d1(A.props.children,T.mode,L,A.key),L.return=T,T=L):(L=o5(A.type,A.key,A.props,null,T.mode,L),Q2(L,A),L.return=T,T=L)}return h(T);case E:n:{for(n0=A.key;j!==null;){if(j.key===n0)if(j.tag===4&&j.stateNode.containerInfo===A.containerInfo&&j.stateNode.implementation===A.implementation){e(T,j.sibling),L=u(j,A.children||[]),L.return=T,T=L;break n}else{e(T,j);break}else t(T,j);j=j.sibling}L=y4(A,T.mode,L),L.return=T,T=L}return h(T);case I:return A=x1(A),E0(T,j,A,L)}if(z0(A))return J(T,j,A,L);if(v0(A)){if(n0=v0(A),typeof n0!="function")throw Error(o(150));return A=n0.call(A),e0(T,j,A,L)}if(typeof A.then=="function")return E0(T,j,h5(A),L);if(A.$$typeof===U)return E0(T,j,c5(T,A),L);p5(T,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,j!==null&&j.tag===6?(e(T,j.sibling),L=u(j,A),L.return=T,T=L):(e(T,j),L=m4(A,T.mode,L),L.return=T,T=L),h(T)):e(T,j)}return function(T,j,A,L){try{K2=0;var n0=E0(T,j,A,L);return I1=null,n0}catch($){if($===$1||$===f5)throw $;var x0=b6(29,$,null,T.mode);return x0.lanes=L,x0.return=T,x0}finally{}}}var v1=Pe(!0),Fe=Pe(!1),_8=!1;function A4(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function w4(n,t){n=n.updateQueue,t.updateQueue===n&&(t.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function B8(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function U8(n,t,e){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(M0&2)!==0){var u=l.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),l.pending=t,t=s5(n),Ne(n,null,e),t}return l5(n,l,t,e),s5(n)}function J2(n,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var l=t.lanes;l&=n.pendingLanes,e|=l,t.lanes=e,qt(n,e)}}function R4(n,t){var e=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,e===l)){var u=null,c=null;if(e=e.firstBaseUpdate,e!==null){do{var h={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};c===null?u=c=h:c=c.next=h,e=e.next}while(e!==null);c===null?u=c=t:c=c.next=t}else u=c=t;e={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=t:n.next=t,e.lastBaseUpdate=t}var D4=!1;function P2(){if(D4){var n=W1;if(n!==null)throw n}}function F2(n,t,e,l){D4=!1;var u=n.updateQueue;_8=!1;var c=u.firstBaseUpdate,h=u.lastBaseUpdate,v=u.shared.pending;if(v!==null){u.shared.pending=null;var z=v,w=z.next;z.next=null,h===null?c=w:h.next=w,h=z;var B=n.alternate;B!==null&&(B=B.updateQueue,v=B.lastBaseUpdate,v!==h&&(v===null?B.firstBaseUpdate=w:v.next=w,B.lastBaseUpdate=z))}if(c!==null){var H=u.baseState;h=0,B=w=z=null,v=c;do{var R=v.lane&-536870913,V=R!==v.lane;if(V?(f0&R)===R:(l&R)===R){R!==0&&R===F1&&(D4=!0),B!==null&&(B=B.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});n:{var J=n,e0=v;R=t;var E0=e;switch(e0.tag){case 1:if(J=e0.payload,typeof J=="function"){H=J.call(E0,H,R);break n}H=J;break n;case 3:J.flags=J.flags&-65537|128;case 0:if(J=e0.payload,R=typeof J=="function"?J.call(E0,H,R):J,R==null)break n;H=g({},H,R);break n;case 2:_8=!0}}R=v.callback,R!==null&&(n.flags|=64,V&&(n.flags|=8192),V=u.callbacks,V===null?u.callbacks=[R]:V.push(R))}else V={lane:R,tag:v.tag,payload:v.payload,callback:v.callback,next:null},B===null?(w=B=V,z=H):B=B.next=V,h|=R;if(v=v.next,v===null){if(v=u.shared.pending,v===null)break;V=v,v=V.next,V.next=null,u.lastBaseUpdate=V,u.shared.pending=null}}while(!0);B===null&&(z=H),u.baseState=z,u.firstBaseUpdate=w,u.lastBaseUpdate=B,c===null&&(u.shared.lanes=0),G8|=h,n.lanes=h,n.memoizedState=H}}function We(n,t){if(typeof n!="function")throw Error(o(191,n));n.call(t)}function $e(n,t){var e=n.callbacks;if(e!==null)for(n.callbacks=null,n=0;n<e.length;n++)We(e[n],t)}var n2=b(null),m5=b(0);function Ie(n,t){n=b8,K(m5,n),K(n2,t),b8=n|t.baseLanes}function N4(){K(m5,b8),K(n2,n2.current)}function O4(){b8=m5.current,q(n2),q(m5)}var S6=b(null),U6=null;function L8(n){var t=n.alternate;K(Y0,Y0.current&1),K(S6,n),U6===null&&(t===null||n2.current!==null||t.memoizedState!==null)&&(U6=n)}function V4(n){K(Y0,Y0.current),K(S6,n),U6===null&&(U6=n)}function na(n){n.tag===22?(K(Y0,Y0.current),K(S6,n),U6===null&&(U6=n)):H8()}function H8(){K(Y0,Y0.current),K(S6,S6.current)}function k6(n){q(S6),U6===n&&(U6=null),q(Y0)}var Y0=b(0);function y5(n){for(var t=n;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||q9(e)||Y9(e)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var m8=0,s0=null,k0=null,Z0=null,x5=!1,t2=!1,M1=!1,g5=0,W2=0,e2=null,Vc=0;function U0(){throw Error(o(321))}function _4(n,t){if(t===null)return!1;for(var e=0;e<t.length&&e<n.length;e++)if(!j6(n[e],t[e]))return!1;return!0}function B4(n,t,e,l,u,c){return m8=c,s0=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=n===null||n.memoizedState===null?Ba:$4,M1=!1,c=e(l,u),M1=!1,t2&&(c=ea(t,e,l,u)),ta(n),c}function ta(n){_.H=n7;var t=k0!==null&&k0.next!==null;if(m8=0,Z0=k0=s0=null,x5=!1,W2=0,e2=null,t)throw Error(o(300));n===null||K0||(n=n.dependencies,n!==null&&u5(n)&&(K0=!0))}function ea(n,t,e,l){s0=n;var u=0;do{if(t2&&(e2=null),W2=0,t2=!1,25<=u)throw Error(o(301));if(u+=1,Z0=k0=null,n.updateQueue!=null){var c=n.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}_.H=Ua,c=t(e,l)}while(t2);return c}function _c(){var n=_.H,t=n.useState()[0];return t=typeof t.then=="function"?$2(t):t,n=n.useState()[0],(k0!==null?k0.memoizedState:null)!==n&&(s0.flags|=1024),t}function U4(){var n=g5!==0;return g5=0,n}function L4(n,t,e){t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~e}function H4(n){if(x5){for(n=n.memoizedState;n!==null;){var t=n.queue;t!==null&&(t.pending=null),n=n.next}x5=!1}m8=0,Z0=k0=s0=null,t2=!1,W2=g5=0,e2=null}function u6(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z0===null?s0.memoizedState=Z0=n:Z0=Z0.next=n,Z0}function G0(){if(k0===null){var n=s0.alternate;n=n!==null?n.memoizedState:null}else n=k0.next;var t=Z0===null?s0.memoizedState:Z0.next;if(t!==null)Z0=t,k0=n;else{if(n===null)throw s0.alternate===null?Error(o(467)):Error(o(310));k0=n,n={memoizedState:k0.memoizedState,baseState:k0.baseState,baseQueue:k0.baseQueue,queue:k0.queue,next:null},Z0===null?s0.memoizedState=Z0=n:Z0=Z0.next=n}return Z0}function v5(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $2(n){var t=W2;return W2+=1,e2===null&&(e2=[]),n=Ke(e2,n,t),t=s0,(Z0===null?t.memoizedState:Z0.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?Ba:$4),n}function M5(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return $2(n);if(n.$$typeof===U)return e6(n)}throw Error(o(438,String(n)))}function q4(n){var t=null,e=s0.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var l=s0.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=v5(),s0.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(n),l=0;l<n;l++)e[l]=t0;return t.index++,e}function y8(n,t){return typeof t=="function"?t(n):t}function z5(n){var t=G0();return Y4(t,k0,n)}function Y4(n,t,e){var l=n.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=e;var u=n.baseQueue,c=l.pending;if(c!==null){if(u!==null){var h=u.next;u.next=c.next,c.next=h}t.baseQueue=u=c,l.pending=null}if(c=n.baseState,u===null)n.memoizedState=c;else{t=u.next;var v=h=null,z=null,w=t,B=!1;do{var H=w.lane&-536870913;if(H!==w.lane?(f0&H)===H:(m8&H)===H){var R=w.revertLane;if(R===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),H===F1&&(B=!0);else if((m8&R)===R){w=w.next,R===F1&&(B=!0);continue}else H={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},z===null?(v=z=H,h=c):z=z.next=H,s0.lanes|=R,G8|=R;H=w.action,M1&&e(c,H),c=w.hasEagerState?w.eagerState:e(c,H)}else R={lane:H,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},z===null?(v=z=R,h=c):z=z.next=R,s0.lanes|=H,G8|=H;w=w.next}while(w!==null&&w!==t);if(z===null?h=c:z.next=v,!j6(c,n.memoizedState)&&(K0=!0,B&&(e=W1,e!==null)))throw e;n.memoizedState=c,n.baseState=h,n.baseQueue=z,l.lastRenderedState=c}return u===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function G4(n){var t=G0(),e=t.queue;if(e===null)throw Error(o(311));e.lastRenderedReducer=n;var l=e.dispatch,u=e.pending,c=t.memoizedState;if(u!==null){e.pending=null;var h=u=u.next;do c=n(c,h.action),h=h.next;while(h!==u);j6(c,t.memoizedState)||(K0=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),e.lastRenderedState=c}return[c,l]}function aa(n,t,e){var l=s0,u=G0(),c=p0;if(c){if(e===void 0)throw Error(o(407));e=e()}else e=t();var h=!j6((k0||u).memoizedState,e);if(h&&(u.memoizedState=e,K0=!0),u=u.queue,K4(sa.bind(null,l,u,n),[n]),u.getSnapshot!==t||h||Z0!==null&&Z0.memoizedState.tag&1){if(l.flags|=2048,a2(9,{destroy:void 0},la.bind(null,l,u,e,t),null),A0===null)throw Error(o(349));c||(m8&127)!==0||ia(l,t,e)}return e}function ia(n,t,e){n.flags|=16384,n={getSnapshot:t,value:e},t=s0.updateQueue,t===null?(t=v5(),s0.updateQueue=t,t.stores=[n]):(e=t.stores,e===null?t.stores=[n]:e.push(n))}function la(n,t,e,l){t.value=e,t.getSnapshot=l,oa(t)&&ra(n)}function sa(n,t,e){return e(function(){oa(t)&&ra(n)})}function oa(n){var t=n.getSnapshot;n=n.value;try{var e=t();return!j6(n,e)}catch{return!0}}function ra(n){var t=f1(n,2);t!==null&&x6(t,n,2)}function X4(n){var t=u6();if(typeof n=="function"){var e=n;if(n=e(),M1){A8(!0);try{e()}finally{A8(!1)}}}return t.memoizedState=t.baseState=n,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:y8,lastRenderedState:n},t}function ua(n,t,e,l){return n.baseState=e,Y4(n,k0,typeof l=="function"?l:y8)}function Bc(n,t,e,l,u){if(S5(n))throw Error(o(485));if(n=t.action,n!==null){var c={payload:u,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){c.listeners.push(h)}};_.T!==null?e(!0):c.isTransition=!1,l(c),e=t.pending,e===null?(c.next=t.pending=c,ca(t,c)):(c.next=e.next,t.pending=e.next=c)}}function ca(n,t){var e=t.action,l=t.payload,u=n.state;if(t.isTransition){var c=_.T,h={};_.T=h;try{var v=e(u,l),z=_.S;z!==null&&z(h,v),Ca(n,t,v)}catch(w){Z4(n,t,w)}finally{c!==null&&h.types!==null&&(c.types=h.types),_.T=c}}else try{c=e(u,l),Ca(n,t,c)}catch(w){Z4(n,t,w)}}function Ca(n,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(l){fa(n,t,l)},function(l){return Z4(n,t,l)}):fa(n,t,e)}function fa(n,t,e){t.status="fulfilled",t.value=e,da(t),n.state=e,t=n.pending,t!==null&&(e=t.next,e===t?n.pending=null:(e=e.next,t.next=e,ca(n,e)))}function Z4(n,t,e){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=e,da(t),t=t.next;while(t!==l)}n.action=null}function da(n){n=n.listeners;for(var t=0;t<n.length;t++)(0,n[t])()}function ha(n,t){return t}function pa(n,t){if(p0){var e=A0.formState;if(e!==null){n:{var l=s0;if(p0){if(R0){t:{for(var u=R0,c=B6;u.nodeType!==8;){if(!c){u=null;break t}if(u=L6(u.nextSibling),u===null){u=null;break t}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){R0=L6(u.nextSibling),l=u.data==="F!";break n}}O8(l)}l=!1}l&&(t=e[0])}}return e=u6(),e.memoizedState=e.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},e.queue=l,e=Oa.bind(null,s0,l),l.dispatch=e,l=X4(!1),c=W4.bind(null,s0,!1,l.queue),l=u6(),u={state:t,dispatch:null,action:n,pending:null},l.queue=u,e=Bc.bind(null,s0,u,c,e),u.dispatch=e,l.memoizedState=n,[t,e,!1]}function ma(n){var t=G0();return ya(t,k0,n)}function ya(n,t,e){if(t=Y4(n,t,ha)[0],n=z5(y8)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=$2(t)}catch(h){throw h===$1?f5:h}else l=t;t=G0();var u=t.queue,c=u.dispatch;return e!==t.memoizedState&&(s0.flags|=2048,a2(9,{destroy:void 0},Uc.bind(null,u,e),null)),[l,c,n]}function Uc(n,t){n.action=t}function xa(n){var t=G0(),e=k0;if(e!==null)return ya(t,e,n);G0(),t=t.memoizedState,e=G0();var l=e.queue.dispatch;return e.memoizedState=n,[t,l,!1]}function a2(n,t,e,l){return n={tag:n,create:e,deps:l,inst:t,next:null},t=s0.updateQueue,t===null&&(t=v5(),s0.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=n.next=n:(l=e.next,e.next=n,n.next=l,t.lastEffect=n),n}function ga(){return G0().memoizedState}function j5(n,t,e,l){var u=u6();s0.flags|=n,u.memoizedState=a2(1|t,{destroy:void 0},e,l===void 0?null:l)}function b5(n,t,e,l){var u=G0();l=l===void 0?null:l;var c=u.memoizedState.inst;k0!==null&&l!==null&&_4(l,k0.memoizedState.deps)?u.memoizedState=a2(t,c,e,l):(s0.flags|=n,u.memoizedState=a2(1|t,c,e,l))}function va(n,t){j5(8390656,8,n,t)}function K4(n,t){b5(2048,8,n,t)}function Lc(n){s0.flags|=4;var t=s0.updateQueue;if(t===null)t=v5(),s0.updateQueue=t,t.events=[n];else{var e=t.events;e===null?t.events=[n]:e.push(n)}}function Ma(n){var t=G0().memoizedState;return Lc({ref:t,nextImpl:n}),function(){if((M0&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function za(n,t){return b5(4,2,n,t)}function ja(n,t){return b5(4,4,n,t)}function ba(n,t){if(typeof t=="function"){n=n();var e=t(n);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return n=n(),t.current=n,function(){t.current=null}}function Sa(n,t,e){e=e!=null?e.concat([n]):null,b5(4,4,ba.bind(null,t,n),e)}function Q4(){}function ka(n,t){var e=G0();t=t===void 0?null:t;var l=e.memoizedState;return t!==null&&_4(t,l[1])?l[0]:(e.memoizedState=[n,t],n)}function Ta(n,t){var e=G0();t=t===void 0?null:t;var l=e.memoizedState;if(t!==null&&_4(t,l[1]))return l[0];if(l=n(),M1){A8(!0);try{n()}finally{A8(!1)}}return e.memoizedState=[l,t],l}function J4(n,t,e){return e===void 0||(m8&1073741824)!==0&&(f0&261930)===0?n.memoizedState=t:(n.memoizedState=e,n=Ei(),s0.lanes|=n,G8|=n,e)}function Ea(n,t,e,l){return j6(e,t)?e:n2.current!==null?(n=J4(n,e,l),j6(n,t)||(K0=!0),n):(m8&42)===0||(m8&1073741824)!==0&&(f0&261930)===0?(K0=!0,n.memoizedState=e):(n=Ei(),s0.lanes|=n,G8|=n,t)}function Aa(n,t,e,l,u){var c=X.p;X.p=c!==0&&8>c?c:8;var h=_.T,v={};_.T=v,W4(n,!1,t,e);try{var z=u(),w=_.S;if(w!==null&&w(v,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var B=Oc(z,l);I2(n,t,B,A6(n))}else I2(n,t,l,A6(n))}catch(H){I2(n,t,{then:function(){},status:"rejected",reason:H},A6())}finally{X.p=c,h!==null&&v.types!==null&&(h.types=v.types),_.T=h}}function Hc(){}function P4(n,t,e,l){if(n.tag!==5)throw Error(o(476));var u=wa(n).queue;Aa(n,u,t,Q,e===null?Hc:function(){return Ra(n),e(l)})}function wa(n){var t=n.memoizedState;if(t!==null)return t;t={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:y8,lastRenderedState:Q},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:y8,lastRenderedState:e},next:null},n.memoizedState=t,n=n.alternate,n!==null&&(n.memoizedState=t),t}function Ra(n){var t=wa(n);t.next===null&&(t=n.alternate.memoizedState),I2(n,t.next.queue,{},A6())}function F4(){return e6(m7)}function Da(){return G0().memoizedState}function Na(){return G0().memoizedState}function qc(n){for(var t=n.return;t!==null;){switch(t.tag){case 24:case 3:var e=A6();n=B8(e);var l=U8(t,n,e);l!==null&&(x6(l,t,e),J2(l,t,e)),t={cache:S4()},n.payload=t;return}t=t.return}}function Yc(n,t,e){var l=A6();e={lane:l,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},S5(n)?Va(t,e):(e=h4(n,t,e,l),e!==null&&(x6(e,n,l),_a(e,t,l)))}function Oa(n,t,e){var l=A6();I2(n,t,e,l)}function I2(n,t,e,l){var u={lane:l,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(S5(n))Va(t,u);else{var c=n.alternate;if(n.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var h=t.lastRenderedState,v=c(h,e);if(u.hasEagerState=!0,u.eagerState=v,j6(v,h))return l5(n,t,u,0),A0===null&&i5(),!1}catch{}finally{}if(e=h4(n,t,u,l),e!==null)return x6(e,n,l),_a(e,t,l),!0}return!1}function W4(n,t,e,l){if(l={lane:2,revertLane:A9(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},S5(n)){if(t)throw Error(o(479))}else t=h4(n,e,l,2),t!==null&&x6(t,n,2)}function S5(n){var t=n.alternate;return n===s0||t!==null&&t===s0}function Va(n,t){t2=x5=!0;var e=n.pending;e===null?t.next=t:(t.next=e.next,e.next=t),n.pending=t}function _a(n,t,e){if((e&4194048)!==0){var l=t.lanes;l&=n.pendingLanes,e|=l,t.lanes=e,qt(n,e)}}var n7={readContext:e6,use:M5,useCallback:U0,useContext:U0,useEffect:U0,useImperativeHandle:U0,useLayoutEffect:U0,useInsertionEffect:U0,useMemo:U0,useReducer:U0,useRef:U0,useState:U0,useDebugValue:U0,useDeferredValue:U0,useTransition:U0,useSyncExternalStore:U0,useId:U0,useHostTransitionStatus:U0,useFormState:U0,useActionState:U0,useOptimistic:U0,useMemoCache:U0,useCacheRefresh:U0};n7.useEffectEvent=U0;var Ba={readContext:e6,use:M5,useCallback:function(n,t){return u6().memoizedState=[n,t===void 0?null:t],n},useContext:e6,useEffect:va,useImperativeHandle:function(n,t,e){e=e!=null?e.concat([n]):null,j5(4194308,4,ba.bind(null,t,n),e)},useLayoutEffect:function(n,t){return j5(4194308,4,n,t)},useInsertionEffect:function(n,t){j5(4,2,n,t)},useMemo:function(n,t){var e=u6();t=t===void 0?null:t;var l=n();if(M1){A8(!0);try{n()}finally{A8(!1)}}return e.memoizedState=[l,t],l},useReducer:function(n,t,e){var l=u6();if(e!==void 0){var u=e(t);if(M1){A8(!0);try{e(t)}finally{A8(!1)}}}else u=t;return l.memoizedState=l.baseState=u,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:u},l.queue=n,n=n.dispatch=Yc.bind(null,s0,n),[l.memoizedState,n]},useRef:function(n){var t=u6();return n={current:n},t.memoizedState=n},useState:function(n){n=X4(n);var t=n.queue,e=Oa.bind(null,s0,t);return t.dispatch=e,[n.memoizedState,e]},useDebugValue:Q4,useDeferredValue:function(n,t){var e=u6();return J4(e,n,t)},useTransition:function(){var n=X4(!1);return n=Aa.bind(null,s0,n.queue,!0,!1),u6().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,t,e){var l=s0,u=u6();if(p0){if(e===void 0)throw Error(o(407));e=e()}else{if(e=t(),A0===null)throw Error(o(349));(f0&127)!==0||ia(l,t,e)}u.memoizedState=e;var c={value:e,getSnapshot:t};return u.queue=c,va(sa.bind(null,l,c,n),[n]),l.flags|=2048,a2(9,{destroy:void 0},la.bind(null,l,c,e,t),null),e},useId:function(){var n=u6(),t=A0.identifierPrefix;if(p0){var e=t8,l=n8;e=(l&~(1<<32-z6(l)-1)).toString(32)+e,t="_"+t+"R_"+e,e=g5++,0<e&&(t+="H"+e.toString(32)),t+="_"}else e=Vc++,t="_"+t+"r_"+e.toString(32)+"_";return n.memoizedState=t},useHostTransitionStatus:F4,useFormState:pa,useActionState:pa,useOptimistic:function(n){var t=u6();t.memoizedState=t.baseState=n;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=W4.bind(null,s0,!0,e),e.dispatch=t,[n,t]},useMemoCache:q4,useCacheRefresh:function(){return u6().memoizedState=qc.bind(null,s0)},useEffectEvent:function(n){var t=u6(),e={impl:n};return t.memoizedState=e,function(){if((M0&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}},$4={readContext:e6,use:M5,useCallback:ka,useContext:e6,useEffect:K4,useImperativeHandle:Sa,useInsertionEffect:za,useLayoutEffect:ja,useMemo:Ta,useReducer:z5,useRef:ga,useState:function(){return z5(y8)},useDebugValue:Q4,useDeferredValue:function(n,t){var e=G0();return Ea(e,k0.memoizedState,n,t)},useTransition:function(){var n=z5(y8)[0],t=G0().memoizedState;return[typeof n=="boolean"?n:$2(n),t]},useSyncExternalStore:aa,useId:Da,useHostTransitionStatus:F4,useFormState:ma,useActionState:ma,useOptimistic:function(n,t){var e=G0();return ua(e,k0,n,t)},useMemoCache:q4,useCacheRefresh:Na};$4.useEffectEvent=Ma;var Ua={readContext:e6,use:M5,useCallback:ka,useContext:e6,useEffect:K4,useImperativeHandle:Sa,useInsertionEffect:za,useLayoutEffect:ja,useMemo:Ta,useReducer:G4,useRef:ga,useState:function(){return G4(y8)},useDebugValue:Q4,useDeferredValue:function(n,t){var e=G0();return k0===null?J4(e,n,t):Ea(e,k0.memoizedState,n,t)},useTransition:function(){var n=G4(y8)[0],t=G0().memoizedState;return[typeof n=="boolean"?n:$2(n),t]},useSyncExternalStore:aa,useId:Da,useHostTransitionStatus:F4,useFormState:xa,useActionState:xa,useOptimistic:function(n,t){var e=G0();return k0!==null?ua(e,k0,n,t):(e.baseState=n,[n,e.queue.dispatch])},useMemoCache:q4,useCacheRefresh:Na};Ua.useEffectEvent=Ma;function I4(n,t,e,l){t=n.memoizedState,e=e(l,t),e=e==null?t:g({},t,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var n9={enqueueSetState:function(n,t,e){n=n._reactInternals;var l=A6(),u=B8(l);u.payload=t,e!=null&&(u.callback=e),t=U8(n,u,l),t!==null&&(x6(t,n,l),J2(t,n,l))},enqueueReplaceState:function(n,t,e){n=n._reactInternals;var l=A6(),u=B8(l);u.tag=1,u.payload=t,e!=null&&(u.callback=e),t=U8(n,u,l),t!==null&&(x6(t,n,l),J2(t,n,l))},enqueueForceUpdate:function(n,t){n=n._reactInternals;var e=A6(),l=B8(e);l.tag=2,t!=null&&(l.callback=t),t=U8(n,l,e),t!==null&&(x6(t,n,e),J2(t,n,e))}};function La(n,t,e,l,u,c,h){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,c,h):t.prototype&&t.prototype.isPureReactComponent?!H2(e,l)||!H2(u,c):!0}function Ha(n,t,e,l){n=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,l),t.state!==n&&n9.enqueueReplaceState(t,t.state,null)}function z1(n,t){var e=t;if("ref"in t){e={};for(var l in t)l!=="ref"&&(e[l]=t[l])}if(n=n.defaultProps){e===t&&(e=g({},e));for(var u in n)e[u]===void 0&&(e[u]=n[u])}return e}function qa(n){a5(n)}function Ya(n){console.error(n)}function Ga(n){a5(n)}function k5(n,t){try{var e=n.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Xa(n,t,e){try{var l=n.onCaughtError;l(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function t9(n,t,e){return e=B8(e),e.tag=3,e.payload={element:null},e.callback=function(){k5(n,t)},e}function Za(n){return n=B8(n),n.tag=3,n}function Ka(n,t,e,l){var u=e.type.getDerivedStateFromError;if(typeof u=="function"){var c=l.value;n.payload=function(){return u(c)},n.callback=function(){Xa(t,e,l)}}var h=e.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(n.callback=function(){Xa(t,e,l),typeof u!="function"&&(X8===null?X8=new Set([this]):X8.add(this));var v=l.stack;this.componentDidCatch(l.value,{componentStack:v!==null?v:""})})}function Gc(n,t,e,l,u){if(e.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=e.alternate,t!==null&&P1(t,e,u,!0),e=S6.current,e!==null){switch(e.tag){case 31:case 13:return U6===null?U5():e.alternate===null&&L0===0&&(L0=3),e.flags&=-257,e.flags|=65536,e.lanes=u,l===d5?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([l]):t.add(l),k9(n,l,u)),!1;case 22:return e.flags|=65536,l===d5?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([l]):e.add(l)),k9(n,l,u)),!1}throw Error(o(435,e.tag))}return k9(n,l,u),U5(),!1}if(p0)return t=S6.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,l!==v4&&(n=Error(o(422),{cause:l}),G2(O6(n,e)))):(l!==v4&&(t=Error(o(423),{cause:l}),G2(O6(t,e))),n=n.current.alternate,n.flags|=65536,u&=-u,n.lanes|=u,l=O6(l,e),u=t9(n.stateNode,l,u),R4(n,u),L0!==4&&(L0=2)),!1;var c=Error(o(520),{cause:l});if(c=O6(c,e),r7===null?r7=[c]:r7.push(c),L0!==4&&(L0=2),t===null)return!0;l=O6(l,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,n=u&-u,e.lanes|=n,n=t9(e.stateNode,l,n),R4(e,n),!1;case 1:if(t=e.type,c=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(X8===null||!X8.has(c))))return e.flags|=65536,u&=-u,e.lanes|=u,u=Za(u),Ka(u,n,e,l),R4(e,u),!1}e=e.return}while(e!==null);return!1}var e9=Error(o(461)),K0=!1;function a6(n,t,e,l){t.child=n===null?Fe(t,null,e,l):v1(t,n.child,e,l)}function Qa(n,t,e,l,u){e=e.render;var c=t.ref;if("ref"in l){var h={};for(var v in l)v!=="ref"&&(h[v]=l[v])}else h=l;return m1(t),l=B4(n,t,e,h,c,u),v=U4(),n!==null&&!K0?(L4(n,t,u),x8(n,t,u)):(p0&&v&&x4(t),t.flags|=1,a6(n,t,l,u),t.child)}function Ja(n,t,e,l,u){if(n===null){var c=e.type;return typeof c=="function"&&!p4(c)&&c.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=c,Pa(n,t,c,l,u)):(n=o5(e.type,null,l,t,t.mode,u),n.ref=t.ref,n.return=t,t.child=n)}if(c=n.child,!c9(n,u)){var h=c.memoizedProps;if(e=e.compare,e=e!==null?e:H2,e(h,l)&&n.ref===t.ref)return x8(n,t,u)}return t.flags|=1,n=f8(c,l),n.ref=t.ref,n.return=t,t.child=n}function Pa(n,t,e,l,u){if(n!==null){var c=n.memoizedProps;if(H2(c,l)&&n.ref===t.ref)if(K0=!1,t.pendingProps=l=c,c9(n,u))(n.flags&131072)!==0&&(K0=!0);else return t.lanes=n.lanes,x8(n,t,u)}return a9(n,t,e,l,u)}function Fa(n,t,e,l){var u=l.children,c=n!==null?n.memoizedState:null;if(n===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|e:e,n!==null){for(l=t.child=n.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~c}else l=0,t.child=null;return Wa(n,t,c,e,l)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},n!==null&&C5(t,c!==null?c.cachePool:null),c!==null?Ie(t,c):N4(),na(t);else return l=t.lanes=536870912,Wa(n,t,c!==null?c.baseLanes|e:e,e,l)}else c!==null?(C5(t,c.cachePool),Ie(t,c),H8(),t.memoizedState=null):(n!==null&&C5(t,null),N4(),H8());return a6(n,t,u,e),t.child}function t7(n,t){return n!==null&&n.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Wa(n,t,e,l,u){var c=T4();return c=c===null?null:{parent:X0._currentValue,pool:c},t.memoizedState={baseLanes:e,cachePool:c},n!==null&&C5(t,null),N4(),na(t),n!==null&&P1(n,t,l,!0),t.childLanes=u,null}function T5(n,t){return t=A5({mode:t.mode,children:t.children},n.mode),t.ref=n.ref,n.child=t,t.return=n,t}function $a(n,t,e){return v1(t,n.child,null,e),n=T5(t,t.pendingProps),n.flags|=2,k6(t),t.memoizedState=null,n}function Xc(n,t,e){var l=t.pendingProps,u=(t.flags&128)!==0;if(t.flags&=-129,n===null){if(p0){if(l.mode==="hidden")return n=T5(t,l),t.lanes=536870912,t7(null,n);if(V4(t),(n=R0)?(n=cl(n,B6),n=n!==null&&n.data==="&"?n:null,n!==null&&(t.memoizedState={dehydrated:n,treeContext:D8!==null?{id:n8,overflow:t8}:null,retryLane:536870912,hydrationErrors:null},e=Ve(n),e.return=t,t.child=e,t6=t,R0=null)):n=null,n===null)throw O8(t);return t.lanes=536870912,null}return T5(t,l)}var c=n.memoizedState;if(c!==null){var h=c.dehydrated;if(V4(t),u)if(t.flags&256)t.flags&=-257,t=$a(n,t,e);else if(t.memoizedState!==null)t.child=n.child,t.flags|=128,t=null;else throw Error(o(558));else if(K0||P1(n,t,e,!1),u=(e&n.childLanes)!==0,K0||u){if(l=A0,l!==null&&(h=Yt(l,e),h!==0&&h!==c.retryLane))throw c.retryLane=h,f1(n,h),x6(l,n,h),e9;U5(),t=$a(n,t,e)}else n=c.treeContext,R0=L6(h.nextSibling),t6=t,p0=!0,N8=null,B6=!1,n!==null&&Ue(t,n),t=T5(t,l),t.flags|=4096;return t}return n=f8(n.child,{mode:l.mode,children:l.children}),n.ref=t.ref,t.child=n,n.return=t,n}function E5(n,t){var e=t.ref;if(e===null)n!==null&&n.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(o(284));(n===null||n.ref!==e)&&(t.flags|=4194816)}}function a9(n,t,e,l,u){return m1(t),e=B4(n,t,e,l,void 0,u),l=U4(),n!==null&&!K0?(L4(n,t,u),x8(n,t,u)):(p0&&l&&x4(t),t.flags|=1,a6(n,t,e,u),t.child)}function Ia(n,t,e,l,u,c){return m1(t),t.updateQueue=null,e=ea(t,l,e,u),ta(n),l=U4(),n!==null&&!K0?(L4(n,t,c),x8(n,t,c)):(p0&&l&&x4(t),t.flags|=1,a6(n,t,e,c),t.child)}function ni(n,t,e,l,u){if(m1(t),t.stateNode===null){var c=Z1,h=e.contextType;typeof h=="object"&&h!==null&&(c=e6(h)),c=new e(l,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=n9,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=l,c.state=t.memoizedState,c.refs={},A4(t),h=e.contextType,c.context=typeof h=="object"&&h!==null?e6(h):Z1,c.state=t.memoizedState,h=e.getDerivedStateFromProps,typeof h=="function"&&(I4(t,e,h,l),c.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(h=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),h!==c.state&&n9.enqueueReplaceState(c,c.state,null),F2(t,l,c,u),P2(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(n===null){c=t.stateNode;var v=t.memoizedProps,z=z1(e,v);c.props=z;var w=c.context,B=e.contextType;h=Z1,typeof B=="object"&&B!==null&&(h=e6(B));var H=e.getDerivedStateFromProps;B=typeof H=="function"||typeof c.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,B||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(v||w!==h)&&Ha(t,c,l,h),_8=!1;var R=t.memoizedState;c.state=R,F2(t,l,c,u),P2(),w=t.memoizedState,v||R!==w||_8?(typeof H=="function"&&(I4(t,e,H,l),w=t.memoizedState),(z=_8||La(t,e,z,l,R,w,h))?(B||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=w),c.props=l,c.state=w,c.context=h,l=z):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{c=t.stateNode,w4(n,t),h=t.memoizedProps,B=z1(e,h),c.props=B,H=t.pendingProps,R=c.context,w=e.contextType,z=Z1,typeof w=="object"&&w!==null&&(z=e6(w)),v=e.getDerivedStateFromProps,(w=typeof v=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==H||R!==z)&&Ha(t,c,l,z),_8=!1,R=t.memoizedState,c.state=R,F2(t,l,c,u),P2();var V=t.memoizedState;h!==H||R!==V||_8||n!==null&&n.dependencies!==null&&u5(n.dependencies)?(typeof v=="function"&&(I4(t,e,v,l),V=t.memoizedState),(B=_8||La(t,e,B,l,R,V,z)||n!==null&&n.dependencies!==null&&u5(n.dependencies))?(w||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,V,z),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,V,z)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||h===n.memoizedProps&&R===n.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===n.memoizedProps&&R===n.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=V),c.props=l,c.state=V,c.context=z,l=B):(typeof c.componentDidUpdate!="function"||h===n.memoizedProps&&R===n.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===n.memoizedProps&&R===n.memoizedState||(t.flags|=1024),l=!1)}return c=l,E5(n,t),l=(t.flags&128)!==0,c||l?(c=t.stateNode,e=l&&typeof e.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,n!==null&&l?(t.child=v1(t,n.child,null,u),t.child=v1(t,null,e,u)):a6(n,t,e,u),t.memoizedState=c.state,n=t.child):n=x8(n,t,u),n}function ti(n,t,e,l){return h1(),t.flags|=256,a6(n,t,e,l),t.child}var i9={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function l9(n){return{baseLanes:n,cachePool:Xe()}}function s9(n,t,e){return n=n!==null?n.childLanes&~e:0,t&&(n|=E6),n}function ei(n,t,e){var l=t.pendingProps,u=!1,c=(t.flags&128)!==0,h;if((h=c)||(h=n!==null&&n.memoizedState===null?!1:(Y0.current&2)!==0),h&&(u=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,n===null){if(p0){if(u?L8(t):H8(),(n=R0)?(n=cl(n,B6),n=n!==null&&n.data!=="&"?n:null,n!==null&&(t.memoizedState={dehydrated:n,treeContext:D8!==null?{id:n8,overflow:t8}:null,retryLane:536870912,hydrationErrors:null},e=Ve(n),e.return=t,t.child=e,t6=t,R0=null)):n=null,n===null)throw O8(t);return Y9(n)?t.lanes=32:t.lanes=536870912,null}var v=l.children;return l=l.fallback,u?(H8(),u=t.mode,v=A5({mode:"hidden",children:v},u),l=d1(l,u,e,null),v.return=t,l.return=t,v.sibling=l,t.child=v,l=t.child,l.memoizedState=l9(e),l.childLanes=s9(n,h,e),t.memoizedState=i9,t7(null,l)):(L8(t),o9(t,v))}var z=n.memoizedState;if(z!==null&&(v=z.dehydrated,v!==null)){if(c)t.flags&256?(L8(t),t.flags&=-257,t=r9(n,t,e)):t.memoizedState!==null?(H8(),t.child=n.child,t.flags|=128,t=null):(H8(),v=l.fallback,u=t.mode,l=A5({mode:"visible",children:l.children},u),v=d1(v,u,e,null),v.flags|=2,l.return=t,v.return=t,l.sibling=v,t.child=l,v1(t,n.child,null,e),l=t.child,l.memoizedState=l9(e),l.childLanes=s9(n,h,e),t.memoizedState=i9,t=t7(null,l));else if(L8(t),Y9(v)){if(h=v.nextSibling&&v.nextSibling.dataset,h)var w=h.dgst;h=w,l=Error(o(419)),l.stack="",l.digest=h,G2({value:l,source:null,stack:null}),t=r9(n,t,e)}else if(K0||P1(n,t,e,!1),h=(e&n.childLanes)!==0,K0||h){if(h=A0,h!==null&&(l=Yt(h,e),l!==0&&l!==z.retryLane))throw z.retryLane=l,f1(n,l),x6(h,n,l),e9;q9(v)||U5(),t=r9(n,t,e)}else q9(v)?(t.flags|=192,t.child=n.child,t=null):(n=z.treeContext,R0=L6(v.nextSibling),t6=t,p0=!0,N8=null,B6=!1,n!==null&&Ue(t,n),t=o9(t,l.children),t.flags|=4096);return t}return u?(H8(),v=l.fallback,u=t.mode,z=n.child,w=z.sibling,l=f8(z,{mode:"hidden",children:l.children}),l.subtreeFlags=z.subtreeFlags&65011712,w!==null?v=f8(w,v):(v=d1(v,u,e,null),v.flags|=2),v.return=t,l.return=t,l.sibling=v,t.child=l,t7(null,l),l=t.child,v=n.child.memoizedState,v===null?v=l9(e):(u=v.cachePool,u!==null?(z=X0._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=Xe(),v={baseLanes:v.baseLanes|e,cachePool:u}),l.memoizedState=v,l.childLanes=s9(n,h,e),t.memoizedState=i9,t7(n.child,l)):(L8(t),e=n.child,n=e.sibling,e=f8(e,{mode:"visible",children:l.children}),e.return=t,e.sibling=null,n!==null&&(h=t.deletions,h===null?(t.deletions=[n],t.flags|=16):h.push(n)),t.child=e,t.memoizedState=null,e)}function o9(n,t){return t=A5({mode:"visible",children:t},n.mode),t.return=n,n.child=t}function A5(n,t){return n=b6(22,n,null,t),n.lanes=0,n}function r9(n,t,e){return v1(t,n.child,null,e),n=o9(t,t.pendingProps.children),n.flags|=2,t.memoizedState=null,n}function ai(n,t,e){n.lanes|=t;var l=n.alternate;l!==null&&(l.lanes|=t),j4(n.return,t,e)}function u9(n,t,e,l,u,c){var h=n.memoizedState;h===null?n.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:e,tailMode:u,treeForkCount:c}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=e,h.tailMode=u,h.treeForkCount=c)}function ii(n,t,e){var l=t.pendingProps,u=l.revealOrder,c=l.tail;l=l.children;var h=Y0.current,v=(h&2)!==0;if(v?(h=h&1|2,t.flags|=128):h&=1,K(Y0,h),a6(n,t,l,e),l=p0?Y2:0,!v&&n!==null&&(n.flags&128)!==0)n:for(n=t.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ai(n,e,t);else if(n.tag===19)ai(n,e,t);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break n;for(;n.sibling===null;){if(n.return===null||n.return===t)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(u){case"forwards":for(e=t.child,u=null;e!==null;)n=e.alternate,n!==null&&y5(n)===null&&(u=e),e=e.sibling;e=u,e===null?(u=t.child,t.child=null):(u=e.sibling,e.sibling=null),u9(t,!1,u,e,c,l);break;case"backwards":case"unstable_legacy-backwards":for(e=null,u=t.child,t.child=null;u!==null;){if(n=u.alternate,n!==null&&y5(n)===null){t.child=u;break}n=u.sibling,u.sibling=e,e=u,u=n}u9(t,!0,e,null,c,l);break;case"together":u9(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function x8(n,t,e){if(n!==null&&(t.dependencies=n.dependencies),G8|=t.lanes,(e&t.childLanes)===0)if(n!==null){if(P1(n,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(n!==null&&t.child!==n.child)throw Error(o(153));if(t.child!==null){for(n=t.child,e=f8(n,n.pendingProps),t.child=e,e.return=t;n.sibling!==null;)n=n.sibling,e=e.sibling=f8(n,n.pendingProps),e.return=t;e.sibling=null}return t.child}function c9(n,t){return(n.lanes&t)!==0?!0:(n=n.dependencies,!!(n!==null&&u5(n)))}function Zc(n,t,e){switch(t.tag){case 3:r6(t,t.stateNode.containerInfo),V8(t,X0,n.memoizedState.cache),h1();break;case 27:case 5:T2(t);break;case 4:r6(t,t.stateNode.containerInfo);break;case 10:V8(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,V4(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(L8(t),t.flags|=128,null):(e&t.child.childLanes)!==0?ei(n,t,e):(L8(t),n=x8(n,t,e),n!==null?n.sibling:null);L8(t);break;case 19:var u=(n.flags&128)!==0;if(l=(e&t.childLanes)!==0,l||(P1(n,t,e,!1),l=(e&t.childLanes)!==0),u){if(l)return ii(n,t,e);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),K(Y0,Y0.current),l)break;return null;case 22:return t.lanes=0,Fa(n,t,e,t.pendingProps);case 24:V8(t,X0,n.memoizedState.cache)}return x8(n,t,e)}function li(n,t,e){if(n!==null)if(n.memoizedProps!==t.pendingProps)K0=!0;else{if(!c9(n,e)&&(t.flags&128)===0)return K0=!1,Zc(n,t,e);K0=(n.flags&131072)!==0}else K0=!1,p0&&(t.flags&1048576)!==0&&Be(t,Y2,t.index);switch(t.lanes=0,t.tag){case 16:n:{var l=t.pendingProps;if(n=x1(t.elementType),t.type=n,typeof n=="function")p4(n)?(l=z1(n,l),t.tag=1,t=ni(null,t,n,l,e)):(t.tag=0,t=a9(null,t,n,l,e));else{if(n!=null){var u=n.$$typeof;if(u===G){t.tag=11,t=Qa(null,t,n,l,e);break n}else if(u===W){t.tag=14,t=Ja(null,t,n,l,e);break n}}throw t=_0(n)||n,Error(o(306,t,""))}}return t;case 0:return a9(n,t,t.type,t.pendingProps,e);case 1:return l=t.type,u=z1(l,t.pendingProps),ni(n,t,l,u,e);case 3:n:{if(r6(t,t.stateNode.containerInfo),n===null)throw Error(o(387));l=t.pendingProps;var c=t.memoizedState;u=c.element,w4(n,t),F2(t,l,null,e);var h=t.memoizedState;if(l=h.cache,V8(t,X0,l),l!==c.cache&&b4(t,[X0],e,!0),P2(),l=h.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=ti(n,t,l,e);break n}else if(l!==u){u=O6(Error(o(424)),t),G2(u),t=ti(n,t,l,e);break n}else{switch(n=t.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(R0=L6(n.firstChild),t6=t,p0=!0,N8=null,B6=!0,e=Fe(t,null,l,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(h1(),l===u){t=x8(n,t,e);break n}a6(n,t,l,e)}t=t.child}return t;case 26:return E5(n,t),n===null?(e=ml(t.type,null,t.pendingProps,null))?t.memoizedState=e:p0||(e=t.type,n=t.pendingProps,l=Z5(u0.current).createElement(e),l[n6]=t,l[f6]=n,i6(l,e,n),$0(l),t.stateNode=l):t.memoizedState=ml(t.type,n.memoizedProps,t.pendingProps,n.memoizedState),null;case 27:return T2(t),n===null&&p0&&(l=t.stateNode=dl(t.type,t.pendingProps,u0.current),t6=t,B6=!0,u=R0,J8(t.type)?(G9=u,R0=L6(l.firstChild)):R0=u),a6(n,t,t.pendingProps.children,e),E5(n,t),n===null&&(t.flags|=4194304),t.child;case 5:return n===null&&p0&&((u=l=R0)&&(l=MC(l,t.type,t.pendingProps,B6),l!==null?(t.stateNode=l,t6=t,R0=L6(l.firstChild),B6=!1,u=!0):u=!1),u||O8(t)),T2(t),u=t.type,c=t.pendingProps,h=n!==null?n.memoizedProps:null,l=c.children,U9(u,c)?l=null:h!==null&&U9(u,h)&&(t.flags|=32),t.memoizedState!==null&&(u=B4(n,t,_c,null,null,e),m7._currentValue=u),E5(n,t),a6(n,t,l,e),t.child;case 6:return n===null&&p0&&((n=e=R0)&&(e=zC(e,t.pendingProps,B6),e!==null?(t.stateNode=e,t6=t,R0=null,n=!0):n=!1),n||O8(t)),null;case 13:return ei(n,t,e);case 4:return r6(t,t.stateNode.containerInfo),l=t.pendingProps,n===null?t.child=v1(t,null,l,e):a6(n,t,l,e),t.child;case 11:return Qa(n,t,t.type,t.pendingProps,e);case 7:return a6(n,t,t.pendingProps,e),t.child;case 8:return a6(n,t,t.pendingProps.children,e),t.child;case 12:return a6(n,t,t.pendingProps.children,e),t.child;case 10:return l=t.pendingProps,V8(t,t.type,l.value),a6(n,t,l.children,e),t.child;case 9:return u=t.type._context,l=t.pendingProps.children,m1(t),u=e6(u),l=l(u),t.flags|=1,a6(n,t,l,e),t.child;case 14:return Ja(n,t,t.type,t.pendingProps,e);case 15:return Pa(n,t,t.type,t.pendingProps,e);case 19:return ii(n,t,e);case 31:return Xc(n,t,e);case 22:return Fa(n,t,e,t.pendingProps);case 24:return m1(t),l=e6(X0),n===null?(u=T4(),u===null&&(u=A0,c=S4(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=e),u=c),t.memoizedState={parent:l,cache:u},A4(t),V8(t,X0,u)):((n.lanes&e)!==0&&(w4(n,t),F2(t,null,null,e),P2()),u=n.memoizedState,c=t.memoizedState,u.parent!==l?(u={parent:l,cache:l},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),V8(t,X0,l)):(l=c.cache,V8(t,X0,l),l!==u.cache&&b4(t,[X0],e,!0))),a6(n,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function g8(n){n.flags|=4}function C9(n,t,e,l,u){if((t=(n.mode&32)!==0)&&(t=!1),t){if(n.flags|=16777216,(u&335544128)===u)if(n.stateNode.complete)n.flags|=8192;else if(Di())n.flags|=8192;else throw g1=d5,E4}else n.flags&=-16777217}function si(n,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Ml(t))if(Di())n.flags|=8192;else throw g1=d5,E4}function w5(n,t){t!==null&&(n.flags|=4),n.flags&16384&&(t=n.tag!==22?Lt():536870912,n.lanes|=t,o2|=t)}function e7(n,t){if(!p0)switch(n.tailMode){case"hidden":t=n.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function D0(n){var t=n.alternate!==null&&n.alternate.child===n.child,e=0,l=0;if(t)for(var u=n.child;u!==null;)e|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=n,u=u.sibling;else for(u=n.child;u!==null;)e|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=n,u=u.sibling;return n.subtreeFlags|=l,n.childLanes=e,t}function Kc(n,t,e){var l=t.pendingProps;switch(g4(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return D0(t),null;case 1:return D0(t),null;case 3:return e=t.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),p8(X0),q0(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(n===null||n.child===null)&&(J1(t)?g8(t):n===null||n.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,M4())),D0(t),null;case 26:var u=t.type,c=t.memoizedState;return n===null?(g8(t),c!==null?(D0(t),si(t,c)):(D0(t),C9(t,u,null,l,e))):c?c!==n.memoizedState?(g8(t),D0(t),si(t,c)):(D0(t),t.flags&=-16777217):(n=n.memoizedProps,n!==l&&g8(t),D0(t),C9(t,u,n,l,e)),null;case 27:if(q7(t),e=u0.current,u=t.type,n!==null&&t.stateNode!=null)n.memoizedProps!==l&&g8(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return D0(t),null}n=F.current,J1(t)?Le(t):(n=dl(u,l,e),t.stateNode=n,g8(t))}return D0(t),null;case 5:if(q7(t),u=t.type,n!==null&&t.stateNode!=null)n.memoizedProps!==l&&g8(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return D0(t),null}if(c=F.current,J1(t))Le(t);else{var h=Z5(u0.current);switch(c){case 1:c=h.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=h.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=h.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=h.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=h.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?h.createElement(u,{is:l.is}):h.createElement(u)}}c[n6]=t,c[f6]=l;n:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)c.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break n;for(;h.sibling===null;){if(h.return===null||h.return===t)break n;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=c;n:switch(i6(c,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break n;case"img":l=!0;break n;default:l=!1}l&&g8(t)}}return D0(t),C9(t,t.type,n===null?null:n.memoizedProps,t.pendingProps,e),null;case 6:if(n&&t.stateNode!=null)n.memoizedProps!==l&&g8(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(n=u0.current,J1(t)){if(n=t.stateNode,e=t.memoizedProps,l=null,u=t6,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}n[n6]=t,n=!!(n.nodeValue===e||l!==null&&l.suppressHydrationWarning===!0||el(n.nodeValue,e)),n||O8(t,!0)}else n=Z5(n).createTextNode(l),n[n6]=t,t.stateNode=n}return D0(t),null;case 31:if(e=t.memoizedState,n===null||n.memoizedState!==null){if(l=J1(t),e!==null){if(n===null){if(!l)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(557));n[n6]=t}else h1(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;D0(t),n=!1}else e=M4(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=e),n=!0;if(!n)return t.flags&256?(k6(t),t):(k6(t),null);if((t.flags&128)!==0)throw Error(o(558))}return D0(t),null;case 13:if(l=t.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(u=J1(t),l!==null&&l.dehydrated!==null){if(n===null){if(!u)throw Error(o(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[n6]=t}else h1(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;D0(t),u=!1}else u=M4(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(k6(t),t):(k6(t),null)}return k6(t),(t.flags&128)!==0?(t.lanes=e,t):(e=l!==null,n=n!==null&&n.memoizedState!==null,e&&(l=t.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==u&&(l.flags|=2048)),e!==n&&e&&(t.child.flags|=8192),w5(t,t.updateQueue),D0(t),null);case 4:return q0(),n===null&&N9(t.stateNode.containerInfo),D0(t),null;case 10:return p8(t.type),D0(t),null;case 19:if(q(Y0),l=t.memoizedState,l===null)return D0(t),null;if(u=(t.flags&128)!==0,c=l.rendering,c===null)if(u)e7(l,!1);else{if(L0!==0||n!==null&&(n.flags&128)!==0)for(n=t.child;n!==null;){if(c=y5(n),c!==null){for(t.flags|=128,e7(l,!1),n=c.updateQueue,t.updateQueue=n,w5(t,n),t.subtreeFlags=0,n=e,e=t.child;e!==null;)Oe(e,n),e=e.sibling;return K(Y0,Y0.current&1|2),p0&&d8(t,l.treeForkCount),t.child}n=n.sibling}l.tail!==null&&v6()>V5&&(t.flags|=128,u=!0,e7(l,!1),t.lanes=4194304)}else{if(!u)if(n=y5(c),n!==null){if(t.flags|=128,u=!0,n=n.updateQueue,t.updateQueue=n,w5(t,n),e7(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!p0)return D0(t),null}else 2*v6()-l.renderingStartTime>V5&&e!==536870912&&(t.flags|=128,u=!0,e7(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(n=l.last,n!==null?n.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=v6(),n.sibling=null,e=Y0.current,K(Y0,u?e&1|2:e&1),p0&&d8(t,l.treeForkCount),n):(D0(t),null);case 22:case 23:return k6(t),O4(),l=t.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(e&536870912)!==0&&(t.flags&128)===0&&(D0(t),t.subtreeFlags&6&&(t.flags|=8192)):D0(t),e=t.updateQueue,e!==null&&w5(t,e.retryQueue),e=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==e&&(t.flags|=2048),n!==null&&q(y1),null;case 24:return e=null,n!==null&&(e=n.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),p8(X0),D0(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Qc(n,t){switch(g4(t),t.tag){case 1:return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 3:return p8(X0),q0(),n=t.flags,(n&65536)!==0&&(n&128)===0?(t.flags=n&-65537|128,t):null;case 26:case 27:case 5:return q7(t),null;case 31:if(t.memoizedState!==null){if(k6(t),t.alternate===null)throw Error(o(340));h1()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 13:if(k6(t),n=t.memoizedState,n!==null&&n.dehydrated!==null){if(t.alternate===null)throw Error(o(340));h1()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 19:return q(Y0),null;case 4:return q0(),null;case 10:return p8(t.type),null;case 22:case 23:return k6(t),O4(),n!==null&&q(y1),n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 24:return p8(X0),null;case 25:return null;default:return null}}function oi(n,t){switch(g4(t),t.tag){case 3:p8(X0),q0();break;case 26:case 27:case 5:q7(t);break;case 4:q0();break;case 31:t.memoizedState!==null&&k6(t);break;case 13:k6(t);break;case 19:q(Y0);break;case 10:p8(t.type);break;case 22:case 23:k6(t),O4(),n!==null&&q(y1);break;case 24:p8(X0)}}function a7(n,t){try{var e=t.updateQueue,l=e!==null?e.lastEffect:null;if(l!==null){var u=l.next;e=u;do{if((e.tag&n)===n){l=void 0;var c=e.create,h=e.inst;l=c(),h.destroy=l}e=e.next}while(e!==u)}}catch(v){S0(t,t.return,v)}}function q8(n,t,e){try{var l=t.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var c=u.next;l=c;do{if((l.tag&n)===n){var h=l.inst,v=h.destroy;if(v!==void 0){h.destroy=void 0,u=t;var z=e,w=v;try{w()}catch(B){S0(u,z,B)}}}l=l.next}while(l!==c)}}catch(B){S0(t,t.return,B)}}function ri(n){var t=n.updateQueue;if(t!==null){var e=n.stateNode;try{$e(t,e)}catch(l){S0(n,n.return,l)}}}function ui(n,t,e){e.props=z1(n.type,n.memoizedProps),e.state=n.memoizedState;try{e.componentWillUnmount()}catch(l){S0(n,t,l)}}function i7(n,t){try{var e=n.ref;if(e!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof e=="function"?n.refCleanup=e(l):e.current=l}}catch(u){S0(n,t,u)}}function e8(n,t){var e=n.ref,l=n.refCleanup;if(e!==null)if(typeof l=="function")try{l()}catch(u){S0(n,t,u)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(u){S0(n,t,u)}else e.current=null}function ci(n){var t=n.type,e=n.memoizedProps,l=n.stateNode;try{n:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&l.focus();break n;case"img":e.src?l.src=e.src:e.srcSet&&(l.srcset=e.srcSet)}}catch(u){S0(n,n.return,u)}}function f9(n,t,e){try{var l=n.stateNode;pC(l,n.type,e,t),l[f6]=t}catch(u){S0(n,n.return,u)}}function Ci(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&J8(n.type)||n.tag===4}function d9(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Ci(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&J8(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function h9(n,t,e){var l=n.tag;if(l===5||l===6)n=n.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(n,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(n),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=c8));else if(l!==4&&(l===27&&J8(n.type)&&(e=n.stateNode,t=null),n=n.child,n!==null))for(h9(n,t,e),n=n.sibling;n!==null;)h9(n,t,e),n=n.sibling}function R5(n,t,e){var l=n.tag;if(l===5||l===6)n=n.stateNode,t?e.insertBefore(n,t):e.appendChild(n);else if(l!==4&&(l===27&&J8(n.type)&&(e=n.stateNode),n=n.child,n!==null))for(R5(n,t,e),n=n.sibling;n!==null;)R5(n,t,e),n=n.sibling}function fi(n){var t=n.stateNode,e=n.memoizedProps;try{for(var l=n.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);i6(t,l,e),t[n6]=n,t[f6]=e}catch(c){S0(n,n.return,c)}}var v8=!1,Q0=!1,p9=!1,di=typeof WeakSet=="function"?WeakSet:Set,I0=null;function Jc(n,t){if(n=n.containerInfo,_9=$5,n=Se(n),r4(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else n:{e=(e=n.ownerDocument)&&e.defaultView||window;var l=e.getSelection&&e.getSelection();if(l&&l.rangeCount!==0){e=l.anchorNode;var u=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{e.nodeType,c.nodeType}catch{e=null;break n}var h=0,v=-1,z=-1,w=0,B=0,H=n,R=null;t:for(;;){for(var V;H!==e||u!==0&&H.nodeType!==3||(v=h+u),H!==c||l!==0&&H.nodeType!==3||(z=h+l),H.nodeType===3&&(h+=H.nodeValue.length),(V=H.firstChild)!==null;)R=H,H=V;for(;;){if(H===n)break t;if(R===e&&++w===u&&(v=h),R===c&&++B===l&&(z=h),(V=H.nextSibling)!==null)break;H=R,R=H.parentNode}H=V}e=v===-1||z===-1?null:{start:v,end:z}}else e=null}e=e||{start:0,end:0}}else e=null;for(B9={focusedElem:n,selectionRange:e},$5=!1,I0=t;I0!==null;)if(t=I0,n=t.child,(t.subtreeFlags&1028)!==0&&n!==null)n.return=t,I0=n;else for(;I0!==null;){switch(t=I0,c=t.alternate,n=t.flags,t.tag){case 0:if((n&4)!==0&&(n=t.updateQueue,n=n!==null?n.events:null,n!==null))for(e=0;e<n.length;e++)u=n[e],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&c!==null){n=void 0,e=t,u=c.memoizedProps,c=c.memoizedState,l=e.stateNode;try{var J=z1(e.type,u);n=l.getSnapshotBeforeUpdate(J,c),l.__reactInternalSnapshotBeforeUpdate=n}catch(e0){S0(e,e.return,e0)}}break;case 3:if((n&1024)!==0){if(n=t.stateNode.containerInfo,e=n.nodeType,e===9)H9(n);else if(e===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":H9(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(o(163))}if(n=t.sibling,n!==null){n.return=t.return,I0=n;break}I0=t.return}}function hi(n,t,e){var l=e.flags;switch(e.tag){case 0:case 11:case 15:z8(n,e),l&4&&a7(5,e);break;case 1:if(z8(n,e),l&4)if(n=e.stateNode,t===null)try{n.componentDidMount()}catch(h){S0(e,e.return,h)}else{var u=z1(e.type,t.memoizedProps);t=t.memoizedState;try{n.componentDidUpdate(u,t,n.__reactInternalSnapshotBeforeUpdate)}catch(h){S0(e,e.return,h)}}l&64&&ri(e),l&512&&i7(e,e.return);break;case 3:if(z8(n,e),l&64&&(n=e.updateQueue,n!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{$e(n,t)}catch(h){S0(e,e.return,h)}}break;case 27:t===null&&l&4&&fi(e);case 26:case 5:z8(n,e),t===null&&l&4&&ci(e),l&512&&i7(e,e.return);break;case 12:z8(n,e);break;case 31:z8(n,e),l&4&&yi(n,e);break;case 13:z8(n,e),l&4&&xi(n,e),l&64&&(n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(e=aC.bind(null,e),jC(n,e))));break;case 22:if(l=e.memoizedState!==null||v8,!l){t=t!==null&&t.memoizedState!==null||Q0,u=v8;var c=Q0;v8=l,(Q0=t)&&!c?j8(n,e,(e.subtreeFlags&8772)!==0):z8(n,e),v8=u,Q0=c}break;case 30:break;default:z8(n,e)}}function pi(n){var t=n.alternate;t!==null&&(n.alternate=null,pi(t)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(t=n.stateNode,t!==null&&Z3(t)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var V0=null,h6=!1;function M8(n,t,e){for(e=e.child;e!==null;)mi(n,t,e),e=e.sibling}function mi(n,t,e){if(M6&&typeof M6.onCommitFiberUnmount=="function")try{M6.onCommitFiberUnmount(E2,e)}catch{}switch(e.tag){case 26:Q0||e8(e,t),M8(n,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Q0||e8(e,t);var l=V0,u=h6;J8(e.type)&&(V0=e.stateNode,h6=!1),M8(n,t,e),d7(e.stateNode),V0=l,h6=u;break;case 5:Q0||e8(e,t);case 6:if(l=V0,u=h6,V0=null,M8(n,t,e),V0=l,h6=u,V0!==null)if(h6)try{(V0.nodeType===9?V0.body:V0.nodeName==="HTML"?V0.ownerDocument.body:V0).removeChild(e.stateNode)}catch(c){S0(e,t,c)}else try{V0.removeChild(e.stateNode)}catch(c){S0(e,t,c)}break;case 18:V0!==null&&(h6?(n=V0,rl(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.stateNode),p2(n)):rl(V0,e.stateNode));break;case 4:l=V0,u=h6,V0=e.stateNode.containerInfo,h6=!0,M8(n,t,e),V0=l,h6=u;break;case 0:case 11:case 14:case 15:q8(2,e,t),Q0||q8(4,e,t),M8(n,t,e);break;case 1:Q0||(e8(e,t),l=e.stateNode,typeof l.componentWillUnmount=="function"&&ui(e,t,l)),M8(n,t,e);break;case 21:M8(n,t,e);break;case 22:Q0=(l=Q0)||e.memoizedState!==null,M8(n,t,e),Q0=l;break;default:M8(n,t,e)}}function yi(n,t){if(t.memoizedState===null&&(n=t.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{p2(n)}catch(e){S0(t,t.return,e)}}}function xi(n,t){if(t.memoizedState===null&&(n=t.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{p2(n)}catch(e){S0(t,t.return,e)}}function Pc(n){switch(n.tag){case 31:case 13:case 19:var t=n.stateNode;return t===null&&(t=n.stateNode=new di),t;case 22:return n=n.stateNode,t=n._retryCache,t===null&&(t=n._retryCache=new di),t;default:throw Error(o(435,n.tag))}}function D5(n,t){var e=Pc(n);t.forEach(function(l){if(!e.has(l)){e.add(l);var u=iC.bind(null,n,l);l.then(u,u)}})}function p6(n,t){var e=t.deletions;if(e!==null)for(var l=0;l<e.length;l++){var u=e[l],c=n,h=t,v=h;n:for(;v!==null;){switch(v.tag){case 27:if(J8(v.type)){V0=v.stateNode,h6=!1;break n}break;case 5:V0=v.stateNode,h6=!1;break n;case 3:case 4:V0=v.stateNode.containerInfo,h6=!0;break n}v=v.return}if(V0===null)throw Error(o(160));mi(c,h,u),V0=null,h6=!1,c=u.alternate,c!==null&&(c.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)gi(t,n),t=t.sibling}var K6=null;function gi(n,t){var e=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:p6(t,n),m6(n),l&4&&(q8(3,n,n.return),a7(3,n),q8(5,n,n.return));break;case 1:p6(t,n),m6(n),l&512&&(Q0||e===null||e8(e,e.return)),l&64&&v8&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(e=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=e===null?l:e.concat(l))));break;case 26:var u=K6;if(p6(t,n),m6(n),l&512&&(Q0||e===null||e8(e,e.return)),l&4){var c=e!==null?e.memoizedState:null;if(l=n.memoizedState,e===null)if(l===null)if(n.stateNode===null){n:{l=n.type,e=n.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":c=u.getElementsByTagName("title")[0],(!c||c[R2]||c[n6]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=u.createElement(l),u.head.insertBefore(c,u.querySelector("head > title"))),i6(c,l,e),c[n6]=n,$0(c),l=c;break n;case"link":var h=gl("link","href",u).get(l+(e.href||""));if(h){for(var v=0;v<h.length;v++)if(c=h[v],c.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&c.getAttribute("rel")===(e.rel==null?null:e.rel)&&c.getAttribute("title")===(e.title==null?null:e.title)&&c.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){h.splice(v,1);break t}}c=u.createElement(l),i6(c,l,e),u.head.appendChild(c);break;case"meta":if(h=gl("meta","content",u).get(l+(e.content||""))){for(v=0;v<h.length;v++)if(c=h[v],c.getAttribute("content")===(e.content==null?null:""+e.content)&&c.getAttribute("name")===(e.name==null?null:e.name)&&c.getAttribute("property")===(e.property==null?null:e.property)&&c.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&c.getAttribute("charset")===(e.charSet==null?null:e.charSet)){h.splice(v,1);break t}}c=u.createElement(l),i6(c,l,e),u.head.appendChild(c);break;default:throw Error(o(468,l))}c[n6]=n,$0(c),l=c}n.stateNode=l}else vl(u,n.type,n.stateNode);else n.stateNode=xl(u,l,n.memoizedProps);else c!==l?(c===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):c.count--,l===null?vl(u,n.type,n.stateNode):xl(u,l,n.memoizedProps)):l===null&&n.stateNode!==null&&f9(n,n.memoizedProps,e.memoizedProps)}break;case 27:p6(t,n),m6(n),l&512&&(Q0||e===null||e8(e,e.return)),e!==null&&l&4&&f9(n,n.memoizedProps,e.memoizedProps);break;case 5:if(p6(t,n),m6(n),l&512&&(Q0||e===null||e8(e,e.return)),n.flags&32){u=n.stateNode;try{U1(u,"")}catch(J){S0(n,n.return,J)}}l&4&&n.stateNode!=null&&(u=n.memoizedProps,f9(n,u,e!==null?e.memoizedProps:u)),l&1024&&(p9=!0);break;case 6:if(p6(t,n),m6(n),l&4){if(n.stateNode===null)throw Error(o(162));l=n.memoizedProps,e=n.stateNode;try{e.nodeValue=l}catch(J){S0(n,n.return,J)}}break;case 3:if(J5=null,u=K6,K6=K5(t.containerInfo),p6(t,n),K6=u,m6(n),l&4&&e!==null&&e.memoizedState.isDehydrated)try{p2(t.containerInfo)}catch(J){S0(n,n.return,J)}p9&&(p9=!1,vi(n));break;case 4:l=K6,K6=K5(n.stateNode.containerInfo),p6(t,n),m6(n),K6=l;break;case 12:p6(t,n),m6(n);break;case 31:p6(t,n),m6(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,D5(n,l)));break;case 13:p6(t,n),m6(n),n.child.flags&8192&&n.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(O5=v6()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,D5(n,l)));break;case 22:u=n.memoizedState!==null;var z=e!==null&&e.memoizedState!==null,w=v8,B=Q0;if(v8=w||u,Q0=B||z,p6(t,n),Q0=B,v8=w,m6(n),l&8192)n:for(t=n.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(e===null||z||v8||Q0||j1(n)),e=null,t=n;;){if(t.tag===5||t.tag===26){if(e===null){z=e=t;try{if(c=z.stateNode,u)h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{v=z.stateNode;var H=z.memoizedProps.style,R=H!=null&&H.hasOwnProperty("display")?H.display:null;v.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(J){S0(z,z.return,J)}}}else if(t.tag===6){if(e===null){z=t;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(J){S0(z,z.return,J)}}}else if(t.tag===18){if(e===null){z=t;try{var V=z.stateNode;u?ul(V,!0):ul(z.stateNode,!1)}catch(J){S0(z,z.return,J)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===n)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break n;for(;t.sibling===null;){if(t.return===null||t.return===n)break n;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=n.updateQueue,l!==null&&(e=l.retryQueue,e!==null&&(l.retryQueue=null,D5(n,e))));break;case 19:p6(t,n),m6(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,D5(n,l)));break;case 30:break;case 21:break;default:p6(t,n),m6(n)}}function m6(n){var t=n.flags;if(t&2){try{for(var e,l=n.return;l!==null;){if(Ci(l)){e=l;break}l=l.return}if(e==null)throw Error(o(160));switch(e.tag){case 27:var u=e.stateNode,c=d9(n);R5(n,c,u);break;case 5:var h=e.stateNode;e.flags&32&&(U1(h,""),e.flags&=-33);var v=d9(n);R5(n,v,h);break;case 3:case 4:var z=e.stateNode.containerInfo,w=d9(n);h9(n,w,z);break;default:throw Error(o(161))}}catch(B){S0(n,n.return,B)}n.flags&=-3}t&4096&&(n.flags&=-4097)}function vi(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var t=n;vi(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),n=n.sibling}}function z8(n,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hi(n,t.alternate,t),t=t.sibling}function j1(n){for(n=n.child;n!==null;){var t=n;switch(t.tag){case 0:case 11:case 14:case 15:q8(4,t,t.return),j1(t);break;case 1:e8(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&ui(t,t.return,e),j1(t);break;case 27:d7(t.stateNode);case 26:case 5:e8(t,t.return),j1(t);break;case 22:t.memoizedState===null&&j1(t);break;case 30:j1(t);break;default:j1(t)}n=n.sibling}}function j8(n,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,u=n,c=t,h=c.flags;switch(c.tag){case 0:case 11:case 15:j8(u,c,e),a7(4,c);break;case 1:if(j8(u,c,e),l=c,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(w){S0(l,l.return,w)}if(l=c,u=l.updateQueue,u!==null){var v=l.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)We(z[u],v)}catch(w){S0(l,l.return,w)}}e&&h&64&&ri(c),i7(c,c.return);break;case 27:fi(c);case 26:case 5:j8(u,c,e),e&&l===null&&h&4&&ci(c),i7(c,c.return);break;case 12:j8(u,c,e);break;case 31:j8(u,c,e),e&&h&4&&yi(u,c);break;case 13:j8(u,c,e),e&&h&4&&xi(u,c);break;case 22:c.memoizedState===null&&j8(u,c,e),i7(c,c.return);break;case 30:break;default:j8(u,c,e)}t=t.sibling}}function m9(n,t){var e=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==e&&(n!=null&&n.refCount++,e!=null&&X2(e))}function y9(n,t){n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&X2(n))}function Q6(n,t,e,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Mi(n,t,e,l),t=t.sibling}function Mi(n,t,e,l){var u=t.flags;switch(t.tag){case 0:case 11:case 15:Q6(n,t,e,l),u&2048&&a7(9,t);break;case 1:Q6(n,t,e,l);break;case 3:Q6(n,t,e,l),u&2048&&(n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&X2(n)));break;case 12:if(u&2048){Q6(n,t,e,l),n=t.stateNode;try{var c=t.memoizedProps,h=c.id,v=c.onPostCommit;typeof v=="function"&&v(h,t.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(z){S0(t,t.return,z)}}else Q6(n,t,e,l);break;case 31:Q6(n,t,e,l);break;case 13:Q6(n,t,e,l);break;case 23:break;case 22:c=t.stateNode,h=t.alternate,t.memoizedState!==null?c._visibility&2?Q6(n,t,e,l):l7(n,t):c._visibility&2?Q6(n,t,e,l):(c._visibility|=2,i2(n,t,e,l,(t.subtreeFlags&10256)!==0||!1)),u&2048&&m9(h,t);break;case 24:Q6(n,t,e,l),u&2048&&y9(t.alternate,t);break;default:Q6(n,t,e,l)}}function i2(n,t,e,l,u){for(u=u&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=n,h=t,v=e,z=l,w=h.flags;switch(h.tag){case 0:case 11:case 15:i2(c,h,v,z,u),a7(8,h);break;case 23:break;case 22:var B=h.stateNode;h.memoizedState!==null?B._visibility&2?i2(c,h,v,z,u):l7(c,h):(B._visibility|=2,i2(c,h,v,z,u)),u&&w&2048&&m9(h.alternate,h);break;case 24:i2(c,h,v,z,u),u&&w&2048&&y9(h.alternate,h);break;default:i2(c,h,v,z,u)}t=t.sibling}}function l7(n,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=n,l=t,u=l.flags;switch(l.tag){case 22:l7(e,l),u&2048&&m9(l.alternate,l);break;case 24:l7(e,l),u&2048&&y9(l.alternate,l);break;default:l7(e,l)}t=t.sibling}}var s7=8192;function l2(n,t,e){if(n.subtreeFlags&s7)for(n=n.child;n!==null;)zi(n,t,e),n=n.sibling}function zi(n,t,e){switch(n.tag){case 26:l2(n,t,e),n.flags&s7&&n.memoizedState!==null&&VC(e,K6,n.memoizedState,n.memoizedProps);break;case 5:l2(n,t,e);break;case 3:case 4:var l=K6;K6=K5(n.stateNode.containerInfo),l2(n,t,e),K6=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=s7,s7=16777216,l2(n,t,e),s7=l):l2(n,t,e));break;default:l2(n,t,e)}}function ji(n){var t=n.alternate;if(t!==null&&(n=t.child,n!==null)){t.child=null;do t=n.sibling,n.sibling=null,n=t;while(n!==null)}}function o7(n){var t=n.deletions;if((n.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var l=t[e];I0=l,Si(l,n)}ji(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)bi(n),n=n.sibling}function bi(n){switch(n.tag){case 0:case 11:case 15:o7(n),n.flags&2048&&q8(9,n,n.return);break;case 3:o7(n);break;case 12:o7(n);break;case 22:var t=n.stateNode;n.memoizedState!==null&&t._visibility&2&&(n.return===null||n.return.tag!==13)?(t._visibility&=-3,N5(n)):o7(n);break;default:o7(n)}}function N5(n){var t=n.deletions;if((n.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var l=t[e];I0=l,Si(l,n)}ji(n)}for(n=n.child;n!==null;){switch(t=n,t.tag){case 0:case 11:case 15:q8(8,t,t.return),N5(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,N5(t));break;default:N5(t)}n=n.sibling}}function Si(n,t){for(;I0!==null;){var e=I0;switch(e.tag){case 0:case 11:case 15:q8(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var l=e.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:X2(e.memoizedState.cache)}if(l=e.child,l!==null)l.return=e,I0=l;else n:for(e=n;I0!==null;){l=I0;var u=l.sibling,c=l.return;if(pi(l),l===e){I0=null;break n}if(u!==null){u.return=c,I0=u;break n}I0=c}}}var Fc={getCacheForType:function(n){var t=e6(X0),e=t.data.get(n);return e===void 0&&(e=n(),t.data.set(n,e)),e},cacheSignal:function(){return e6(X0).controller.signal}},Wc=typeof WeakMap=="function"?WeakMap:Map,M0=0,A0=null,c0=null,f0=0,b0=0,T6=null,Y8=!1,s2=!1,x9=!1,b8=0,L0=0,G8=0,b1=0,g9=0,E6=0,o2=0,r7=null,y6=null,v9=!1,O5=0,ki=0,V5=1/0,_5=null,X8=null,P0=0,Z8=null,r2=null,S8=0,M9=0,z9=null,Ti=null,u7=0,j9=null;function A6(){return(M0&2)!==0&&f0!==0?f0&-f0:_.T!==null?A9():Gt()}function Ei(){if(E6===0)if((f0&536870912)===0||p0){var n=X7;X7<<=1,(X7&3932160)===0&&(X7=262144),E6=n}else E6=536870912;return n=S6.current,n!==null&&(n.flags|=32),E6}function x6(n,t,e){(n===A0&&(b0===2||b0===9)||n.cancelPendingCommit!==null)&&(u2(n,0),K8(n,f0,E6,!1)),w2(n,e),((M0&2)===0||n!==A0)&&(n===A0&&((M0&2)===0&&(b1|=e),L0===4&&K8(n,f0,E6,!1)),a8(n))}function Ai(n,t,e){if((M0&6)!==0)throw Error(o(327));var l=!e&&(t&127)===0&&(t&n.expiredLanes)===0||A2(n,t),u=l?nC(n,t):S9(n,t,!0),c=l;do{if(u===0){s2&&!l&&K8(n,t,0,!1);break}else{if(e=n.current.alternate,c&&!$c(e)){u=S9(n,t,!1),c=!1;continue}if(u===2){if(c=t,n.errorRecoveryDisabledLanes&c)var h=0;else h=n.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;n:{var v=n;u=r7;var z=v.current.memoizedState.isDehydrated;if(z&&(u2(v,h).flags|=256),h=S9(v,h,!1),h!==2){if(x9&&!z){v.errorRecoveryDisabledLanes|=c,b1|=c,u=4;break n}c=y6,y6=u,c!==null&&(y6===null?y6=c:y6.push.apply(y6,c))}u=h}if(c=!1,u!==2)continue}}if(u===1){u2(n,0),K8(n,t,0,!0);break}n:{switch(l=n,c=u,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:K8(l,t,E6,!Y8);break n;case 2:y6=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(u=O5+300-v6(),10<u)){if(K8(l,t,E6,!Y8),K7(l,0,!0)!==0)break n;S8=t,l.timeoutHandle=sl(wi.bind(null,l,e,y6,_5,v9,t,E6,b1,o2,Y8,c,"Throttled",-0,0),u);break n}wi(l,e,y6,_5,v9,t,E6,b1,o2,Y8,c,null,-0,0)}}break}while(!0);a8(n)}function wi(n,t,e,l,u,c,h,v,z,w,B,H,R,V){if(n.timeoutHandle=-1,H=t.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:c8},zi(t,c,H);var J=(c&62914560)===c?O5-v6():(c&4194048)===c?ki-v6():0;if(J=_C(H,J),J!==null){S8=c,n.cancelPendingCommit=J(Ui.bind(null,n,t,c,e,l,u,h,v,z,B,H,null,R,V)),K8(n,c,h,!w);return}}Ui(n,t,c,e,l,u,h,v,z)}function $c(n){for(var t=n;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var l=0;l<e.length;l++){var u=e[l],c=u.getSnapshot;u=u.value;try{if(!j6(c(),u))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function K8(n,t,e,l){t&=~g9,t&=~b1,n.suspendedLanes|=t,n.pingedLanes&=~t,l&&(n.warmLanes|=t),l=n.expirationTimes;for(var u=t;0<u;){var c=31-z6(u),h=1<<c;l[c]=-1,u&=~h}e!==0&&Ht(n,e,t)}function B5(){return(M0&6)===0?(c7(0),!1):!0}function b9(){if(c0!==null){if(b0===0)var n=c0.return;else n=c0,h8=p1=null,H4(n),I1=null,K2=0,n=c0;for(;n!==null;)oi(n.alternate,n),n=n.return;c0=null}}function u2(n,t){var e=n.timeoutHandle;e!==-1&&(n.timeoutHandle=-1,xC(e)),e=n.cancelPendingCommit,e!==null&&(n.cancelPendingCommit=null,e()),S8=0,b9(),A0=n,c0=e=f8(n.current,null),f0=t,b0=0,T6=null,Y8=!1,s2=A2(n,t),x9=!1,o2=E6=g9=b1=G8=L0=0,y6=r7=null,v9=!1,(t&8)!==0&&(t|=t&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=t;0<l;){var u=31-z6(l),c=1<<u;t|=n[u],l&=~c}return b8=t,i5(),e}function Ri(n,t){s0=null,_.H=n7,t===$1||t===f5?(t=Qe(),b0=3):t===E4?(t=Qe(),b0=4):b0=t===e9?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,T6=t,c0===null&&(L0=1,k5(n,O6(t,n.current)))}function Di(){var n=S6.current;return n===null?!0:(f0&4194048)===f0?U6===null:(f0&62914560)===f0||(f0&536870912)!==0?n===U6:!1}function Ni(){var n=_.H;return _.H=n7,n===null?n7:n}function Oi(){var n=_.A;return _.A=Fc,n}function U5(){L0=4,Y8||(f0&4194048)!==f0&&S6.current!==null||(s2=!0),(G8&134217727)===0&&(b1&134217727)===0||A0===null||K8(A0,f0,E6,!1)}function S9(n,t,e){var l=M0;M0|=2;var u=Ni(),c=Oi();(A0!==n||f0!==t)&&(_5=null,u2(n,t)),t=!1;var h=L0;n:do try{if(b0!==0&&c0!==null){var v=c0,z=T6;switch(b0){case 8:b9(),h=6;break n;case 3:case 2:case 9:case 6:S6.current===null&&(t=!0);var w=b0;if(b0=0,T6=null,c2(n,v,z,w),e&&s2){h=0;break n}break;default:w=b0,b0=0,T6=null,c2(n,v,z,w)}}Ic(),h=L0;break}catch(B){Ri(n,B)}while(!0);return t&&n.shellSuspendCounter++,h8=p1=null,M0=l,_.H=u,_.A=c,c0===null&&(A0=null,f0=0,i5()),h}function Ic(){for(;c0!==null;)Vi(c0)}function nC(n,t){var e=M0;M0|=2;var l=Ni(),u=Oi();A0!==n||f0!==t?(_5=null,V5=v6()+500,u2(n,t)):s2=A2(n,t);n:do try{if(b0!==0&&c0!==null){t=c0;var c=T6;t:switch(b0){case 1:b0=0,T6=null,c2(n,t,c,1);break;case 2:case 9:if(Ze(c)){b0=0,T6=null,_i(t);break}t=function(){b0!==2&&b0!==9||A0!==n||(b0=7),a8(n)},c.then(t,t);break n;case 3:b0=7;break n;case 4:b0=5;break n;case 7:Ze(c)?(b0=0,T6=null,_i(t)):(b0=0,T6=null,c2(n,t,c,7));break;case 5:var h=null;switch(c0.tag){case 26:h=c0.memoizedState;case 5:case 27:var v=c0;if(h?Ml(h):v.stateNode.complete){b0=0,T6=null;var z=v.sibling;if(z!==null)c0=z;else{var w=v.return;w!==null?(c0=w,L5(w)):c0=null}break t}}b0=0,T6=null,c2(n,t,c,5);break;case 6:b0=0,T6=null,c2(n,t,c,6);break;case 8:b9(),L0=6;break n;default:throw Error(o(462))}}tC();break}catch(B){Ri(n,B)}while(!0);return h8=p1=null,_.H=l,_.A=u,M0=e,c0!==null?0:(A0=null,f0=0,i5(),L0)}function tC(){for(;c0!==null&&!bu();)Vi(c0)}function Vi(n){var t=li(n.alternate,n,b8);n.memoizedProps=n.pendingProps,t===null?L5(n):c0=t}function _i(n){var t=n,e=t.alternate;switch(t.tag){case 15:case 0:t=Ia(e,t,t.pendingProps,t.type,void 0,f0);break;case 11:t=Ia(e,t,t.pendingProps,t.type.render,t.ref,f0);break;case 5:H4(t);default:oi(e,t),t=c0=Oe(t,b8),t=li(e,t,b8)}n.memoizedProps=n.pendingProps,t===null?L5(n):c0=t}function c2(n,t,e,l){h8=p1=null,H4(t),I1=null,K2=0;var u=t.return;try{if(Gc(n,u,t,e,f0)){L0=1,k5(n,O6(e,n.current)),c0=null;return}}catch(c){if(u!==null)throw c0=u,c;L0=1,k5(n,O6(e,n.current)),c0=null;return}t.flags&32768?(p0||l===1?n=!0:s2||(f0&536870912)!==0?n=!1:(Y8=n=!0,(l===2||l===9||l===3||l===6)&&(l=S6.current,l!==null&&l.tag===13&&(l.flags|=16384))),Bi(t,n)):L5(t)}function L5(n){var t=n;do{if((t.flags&32768)!==0){Bi(t,Y8);return}n=t.return;var e=Kc(t.alternate,t,b8);if(e!==null){c0=e;return}if(t=t.sibling,t!==null){c0=t;return}c0=t=n}while(t!==null);L0===0&&(L0=5)}function Bi(n,t){do{var e=Qc(n.alternate,n);if(e!==null){e.flags&=32767,c0=e;return}if(e=n.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(n=n.sibling,n!==null)){c0=n;return}c0=n=e}while(n!==null);L0=6,c0=null}function Ui(n,t,e,l,u,c,h,v,z){n.cancelPendingCommit=null;do H5();while(P0!==0);if((M0&6)!==0)throw Error(o(327));if(t!==null){if(t===n.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=d4,Ou(n,e,c,h,v,z),n===A0&&(c0=A0=null,f0=0),r2=t,Z8=n,S8=e,M9=c,z9=u,Ti=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,lC(Y7,function(){return Gi(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=_.T,_.T=null,u=X.p,X.p=2,h=M0,M0|=4;try{Jc(n,t,e)}finally{M0=h,X.p=u,_.T=l}}P0=1,Li(),Hi(),qi()}}function Li(){if(P0===1){P0=0;var n=Z8,t=r2,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=_.T,_.T=null;var l=X.p;X.p=2;var u=M0;M0|=4;try{gi(t,n);var c=B9,h=Se(n.containerInfo),v=c.focusedElem,z=c.selectionRange;if(h!==v&&v&&v.ownerDocument&&be(v.ownerDocument.documentElement,v)){if(z!==null&&r4(v)){var w=z.start,B=z.end;if(B===void 0&&(B=w),"selectionStart"in v)v.selectionStart=w,v.selectionEnd=Math.min(B,v.value.length);else{var H=v.ownerDocument||document,R=H&&H.defaultView||window;if(R.getSelection){var V=R.getSelection(),J=v.textContent.length,e0=Math.min(z.start,J),E0=z.end===void 0?e0:Math.min(z.end,J);!V.extend&&e0>E0&&(h=E0,E0=e0,e0=h);var T=je(v,e0),j=je(v,E0);if(T&&j&&(V.rangeCount!==1||V.anchorNode!==T.node||V.anchorOffset!==T.offset||V.focusNode!==j.node||V.focusOffset!==j.offset)){var A=H.createRange();A.setStart(T.node,T.offset),V.removeAllRanges(),e0>E0?(V.addRange(A),V.extend(j.node,j.offset)):(A.setEnd(j.node,j.offset),V.addRange(A))}}}}for(H=[],V=v;V=V.parentNode;)V.nodeType===1&&H.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<H.length;v++){var L=H[v];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}$5=!!_9,B9=_9=null}finally{M0=u,X.p=l,_.T=e}}n.current=t,P0=2}}function Hi(){if(P0===2){P0=0;var n=Z8,t=r2,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=_.T,_.T=null;var l=X.p;X.p=2;var u=M0;M0|=4;try{hi(n,t.alternate,t)}finally{M0=u,X.p=l,_.T=e}}P0=3}}function qi(){if(P0===4||P0===3){P0=0,Su();var n=Z8,t=r2,e=S8,l=Ti;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?P0=5:(P0=0,r2=Z8=null,Yi(n,n.pendingLanes));var u=n.pendingLanes;if(u===0&&(X8=null),G3(e),t=t.stateNode,M6&&typeof M6.onCommitFiberRoot=="function")try{M6.onCommitFiberRoot(E2,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=_.T,u=X.p,X.p=2,_.T=null;try{for(var c=n.onRecoverableError,h=0;h<l.length;h++){var v=l[h];c(v.value,{componentStack:v.stack})}}finally{_.T=t,X.p=u}}(S8&3)!==0&&H5(),a8(n),u=n.pendingLanes,(e&261930)!==0&&(u&42)!==0?n===j9?u7++:(u7=0,j9=n):u7=0,c7(0)}}function Yi(n,t){(n.pooledCacheLanes&=t)===0&&(t=n.pooledCache,t!=null&&(n.pooledCache=null,X2(t)))}function H5(){return Li(),Hi(),qi(),Gi()}function Gi(){if(P0!==5)return!1;var n=Z8,t=M9;M9=0;var e=G3(S8),l=_.T,u=X.p;try{X.p=32>e?32:e,_.T=null,e=z9,z9=null;var c=Z8,h=S8;if(P0=0,r2=Z8=null,S8=0,(M0&6)!==0)throw Error(o(331));var v=M0;if(M0|=4,bi(c.current),Mi(c,c.current,h,e),M0=v,c7(0,!1),M6&&typeof M6.onPostCommitFiberRoot=="function")try{M6.onPostCommitFiberRoot(E2,c)}catch{}return!0}finally{X.p=u,_.T=l,Yi(n,t)}}function Xi(n,t,e){t=O6(e,t),t=t9(n.stateNode,t,2),n=U8(n,t,2),n!==null&&(w2(n,2),a8(n))}function S0(n,t,e){if(n.tag===3)Xi(n,n,e);else for(;t!==null;){if(t.tag===3){Xi(t,n,e);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(X8===null||!X8.has(l))){n=O6(e,n),e=Za(2),l=U8(t,e,2),l!==null&&(Ka(e,l,t,n),w2(l,2),a8(l));break}}t=t.return}}function k9(n,t,e){var l=n.pingCache;if(l===null){l=n.pingCache=new Wc;var u=new Set;l.set(t,u)}else u=l.get(t),u===void 0&&(u=new Set,l.set(t,u));u.has(e)||(x9=!0,u.add(e),n=eC.bind(null,n,t,e),t.then(n,n))}function eC(n,t,e){var l=n.pingCache;l!==null&&l.delete(t),n.pingedLanes|=n.suspendedLanes&e,n.warmLanes&=~e,A0===n&&(f0&e)===e&&(L0===4||L0===3&&(f0&62914560)===f0&&300>v6()-O5?(M0&2)===0&&u2(n,0):g9|=e,o2===f0&&(o2=0)),a8(n)}function Zi(n,t){t===0&&(t=Lt()),n=f1(n,t),n!==null&&(w2(n,t),a8(n))}function aC(n){var t=n.memoizedState,e=0;t!==null&&(e=t.retryLane),Zi(n,e)}function iC(n,t){var e=0;switch(n.tag){case 31:case 13:var l=n.stateNode,u=n.memoizedState;u!==null&&(e=u.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Zi(n,e)}function lC(n,t){return L3(n,t)}var q5=null,C2=null,T9=!1,Y5=!1,E9=!1,Q8=0;function a8(n){n!==C2&&n.next===null&&(C2===null?q5=C2=n:C2=C2.next=n),Y5=!0,T9||(T9=!0,oC())}function c7(n,t){if(!E9&&Y5){E9=!0;do for(var e=!1,l=q5;l!==null;){if(n!==0){var u=l.pendingLanes;if(u===0)var c=0;else{var h=l.suspendedLanes,v=l.pingedLanes;c=(1<<31-z6(42|n)+1)-1,c&=u&~(h&~v),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(e=!0,Pi(l,c))}else c=f0,c=K7(l,l===A0?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||A2(l,c)||(e=!0,Pi(l,c));l=l.next}while(e);E9=!1}}function sC(){Ki()}function Ki(){Y5=T9=!1;var n=0;Q8!==0&&yC()&&(n=Q8);for(var t=v6(),e=null,l=q5;l!==null;){var u=l.next,c=Qi(l,t);c===0?(l.next=null,e===null?q5=u:e.next=u,u===null&&(C2=e)):(e=l,(n!==0||(c&3)!==0)&&(Y5=!0)),l=u}P0!==0&&P0!==5||c7(n),Q8!==0&&(Q8=0)}function Qi(n,t){for(var e=n.suspendedLanes,l=n.pingedLanes,u=n.expirationTimes,c=n.pendingLanes&-62914561;0<c;){var h=31-z6(c),v=1<<h,z=u[h];z===-1?((v&e)===0||(v&l)!==0)&&(u[h]=Nu(v,t)):z<=t&&(n.expiredLanes|=v),c&=~v}if(t=A0,e=f0,e=K7(n,n===t?e:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,e===0||n===t&&(b0===2||b0===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&H3(l),n.callbackNode=null,n.callbackPriority=0;if((e&3)===0||A2(n,e)){if(t=e&-e,t===n.callbackPriority)return t;switch(l!==null&&H3(l),G3(e)){case 2:case 8:e=Bt;break;case 32:e=Y7;break;case 268435456:e=Ut;break;default:e=Y7}return l=Ji.bind(null,n),e=L3(e,l),n.callbackPriority=t,n.callbackNode=e,t}return l!==null&&l!==null&&H3(l),n.callbackPriority=2,n.callbackNode=null,2}function Ji(n,t){if(P0!==0&&P0!==5)return n.callbackNode=null,n.callbackPriority=0,null;var e=n.callbackNode;if(H5()&&n.callbackNode!==e)return null;var l=f0;return l=K7(n,n===A0?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(Ai(n,l,t),Qi(n,v6()),n.callbackNode!=null&&n.callbackNode===e?Ji.bind(null,n):null)}function Pi(n,t){if(H5())return null;Ai(n,t,!0)}function oC(){gC(function(){(M0&6)!==0?L3(_t,sC):Ki()})}function A9(){if(Q8===0){var n=F1;n===0&&(n=G7,G7<<=1,(G7&261888)===0&&(G7=256)),Q8=n}return Q8}function Fi(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:F7(""+n)}function Wi(n,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,n.id&&e.setAttribute("form",n.id),t.parentNode.insertBefore(e,t),n=new FormData(n),e.parentNode.removeChild(e),n}function rC(n,t,e,l,u){if(t==="submit"&&e&&e.stateNode===u){var c=Fi((u[f6]||null).action),h=l.submitter;h&&(t=(t=h[f6]||null)?Fi(t.formAction):h.getAttribute("formAction"),t!==null&&(c=t,h=null));var v=new n5("action","action",null,l,u);n.push({event:v,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Q8!==0){var z=h?Wi(u,h):new FormData(u);P4(e,{pending:!0,data:z,method:u.method,action:c},null,z)}}else typeof c=="function"&&(v.preventDefault(),z=h?Wi(u,h):new FormData(u),P4(e,{pending:!0,data:z,method:u.method,action:c},c,z))},currentTarget:u}]})}}for(var w9=0;w9<f4.length;w9++){var R9=f4[w9],uC=R9.toLowerCase(),cC=R9[0].toUpperCase()+R9.slice(1);Z6(uC,"on"+cC)}Z6(Ee,"onAnimationEnd"),Z6(Ae,"onAnimationIteration"),Z6(we,"onAnimationStart"),Z6("dblclick","onDoubleClick"),Z6("focusin","onFocus"),Z6("focusout","onBlur"),Z6(kc,"onTransitionRun"),Z6(Tc,"onTransitionStart"),Z6(Ec,"onTransitionCancel"),Z6(Re,"onTransitionEnd"),_1("onMouseEnter",["mouseout","mouseover"]),_1("onMouseLeave",["mouseout","mouseover"]),_1("onPointerEnter",["pointerout","pointerover"]),_1("onPointerLeave",["pointerout","pointerover"]),r1("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),r1("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),r1("onBeforeInput",["compositionend","keypress","textInput","paste"]),r1("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),r1("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),r1("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var C7="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(C7));function $i(n,t){t=(t&4)!==0;for(var e=0;e<n.length;e++){var l=n[e],u=l.event;l=l.listeners;n:{var c=void 0;if(t)for(var h=l.length-1;0<=h;h--){var v=l[h],z=v.instance,w=v.currentTarget;if(v=v.listener,z!==c&&u.isPropagationStopped())break n;c=v,u.currentTarget=w;try{c(u)}catch(B){a5(B)}u.currentTarget=null,c=z}else for(h=0;h<l.length;h++){if(v=l[h],z=v.instance,w=v.currentTarget,v=v.listener,z!==c&&u.isPropagationStopped())break n;c=v,u.currentTarget=w;try{c(u)}catch(B){a5(B)}u.currentTarget=null,c=z}}}}function C0(n,t){var e=t[X3];e===void 0&&(e=t[X3]=new Set);var l=n+"__bubble";e.has(l)||(Ii(t,n,2,!1),e.add(l))}function D9(n,t,e){var l=0;t&&(l|=4),Ii(e,n,l,t)}var G5="_reactListening"+Math.random().toString(36).slice(2);function N9(n){if(!n[G5]){n[G5]=!0,Kt.forEach(function(e){e!=="selectionchange"&&(CC.has(e)||D9(e,!1,n),D9(e,!0,n))});var t=n.nodeType===9?n:n.ownerDocument;t===null||t[G5]||(t[G5]=!0,D9("selectionchange",!1,t))}}function Ii(n,t,e,l){switch(El(t)){case 2:var u=LC;break;case 8:u=HC;break;default:u=J9}e=u.bind(null,t,e,n),u=void 0,!I3||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),l?u!==void 0?n.addEventListener(t,e,{capture:!0,passive:u}):n.addEventListener(t,e,!0):u!==void 0?n.addEventListener(t,e,{passive:u}):n.addEventListener(t,e,!1)}function O9(n,t,e,l,u){var c=l;if((t&1)===0&&(t&2)===0&&l!==null)n:for(;;){if(l===null)return;var h=l.tag;if(h===3||h===4){var v=l.stateNode.containerInfo;if(v===u)break;if(h===4)for(h=l.return;h!==null;){var z=h.tag;if((z===3||z===4)&&h.stateNode.containerInfo===u)return;h=h.return}for(;v!==null;){if(h=N1(v),h===null)return;if(z=h.tag,z===5||z===6||z===26||z===27){l=c=h;continue n}v=v.parentNode}}l=l.return}ie(function(){var w=c,B=W3(e),H=[];n:{var R=De.get(n);if(R!==void 0){var V=n5,J=n;switch(n){case"keypress":if($7(e)===0)break n;case"keydown":case"keyup":V=ic;break;case"focusin":J="focus",V=a4;break;case"focusout":J="blur",V=a4;break;case"beforeblur":case"afterblur":V=a4;break;case"click":if(e.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=oe;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=Ku;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=oc;break;case Ee:case Ae:case we:V=Pu;break;case Re:V=uc;break;case"scroll":case"scrollend":V=Xu;break;case"wheel":V=Cc;break;case"copy":case"cut":case"paste":V=Wu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=ue;break;case"toggle":case"beforetoggle":V=dc}var e0=(t&4)!==0,E0=!e0&&(n==="scroll"||n==="scrollend"),T=e0?R!==null?R+"Capture":null:R;e0=[];for(var j=w,A;j!==null;){var L=j;if(A=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||A===null||T===null||(L=N2(j,T),L!=null&&e0.push(f7(j,L,A))),E0)break;j=j.return}0<e0.length&&(R=new V(R,J,null,e,B),H.push({event:R,listeners:e0}))}}if((t&7)===0){n:{if(R=n==="mouseover"||n==="pointerover",V=n==="mouseout"||n==="pointerout",R&&e!==F3&&(J=e.relatedTarget||e.fromElement)&&(N1(J)||J[D1]))break n;if((V||R)&&(R=B.window===B?B:(R=B.ownerDocument)?R.defaultView||R.parentWindow:window,V?(J=e.relatedTarget||e.toElement,V=w,J=J?N1(J):null,J!==null&&(E0=f(J),e0=J.tag,J!==E0||e0!==5&&e0!==27&&e0!==6)&&(J=null)):(V=null,J=w),V!==J)){if(e0=oe,L="onMouseLeave",T="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(e0=ue,L="onPointerLeave",T="onPointerEnter",j="pointer"),E0=V==null?R:D2(V),A=J==null?R:D2(J),R=new e0(L,j+"leave",V,e,B),R.target=E0,R.relatedTarget=A,L=null,N1(B)===w&&(e0=new e0(T,j+"enter",J,e,B),e0.target=A,e0.relatedTarget=E0,L=e0),E0=L,V&&J)t:{for(e0=fC,T=V,j=J,A=0,L=T;L;L=e0(L))A++;L=0;for(var n0=j;n0;n0=e0(n0))L++;for(;0<A-L;)T=e0(T),A--;for(;0<L-A;)j=e0(j),L--;for(;A--;){if(T===j||j!==null&&T===j.alternate){e0=T;break t}T=e0(T),j=e0(j)}e0=null}else e0=null;V!==null&&nl(H,R,V,e0,!1),J!==null&&E0!==null&&nl(H,E0,J,e0,!0)}}n:{if(R=w?D2(w):window,V=R.nodeName&&R.nodeName.toLowerCase(),V==="select"||V==="input"&&R.type==="file")var x0=ye;else if(pe(R))if(xe)x0=jc;else{x0=Mc;var $=vc}else V=R.nodeName,!V||V.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?w&&P3(w.elementType)&&(x0=ye):x0=zc;if(x0&&(x0=x0(n,w))){me(H,x0,e,B);break n}$&&$(n,R,w),n==="focusout"&&w&&R.type==="number"&&w.memoizedProps.value!=null&&J3(R,"number",R.value)}switch($=w?D2(w):window,n){case"focusin":(pe($)||$.contentEditable==="true")&&(Y1=$,u4=w,q2=null);break;case"focusout":q2=u4=Y1=null;break;case"mousedown":c4=!0;break;case"contextmenu":case"mouseup":case"dragend":c4=!1,ke(H,e,B);break;case"selectionchange":if(Sc)break;case"keydown":case"keyup":ke(H,e,B)}var r0;if(l4)n:{switch(n){case"compositionstart":var d0="onCompositionStart";break n;case"compositionend":d0="onCompositionEnd";break n;case"compositionupdate":d0="onCompositionUpdate";break n}d0=void 0}else q1?de(n,e)&&(d0="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&(d0="onCompositionStart");d0&&(ce&&e.locale!=="ko"&&(q1||d0!=="onCompositionStart"?d0==="onCompositionEnd"&&q1&&(r0=le()):(R8=B,n4="value"in R8?R8.value:R8.textContent,q1=!0)),$=X5(w,d0),0<$.length&&(d0=new re(d0,n,null,e,B),H.push({event:d0,listeners:$}),r0?d0.data=r0:(r0=he(e),r0!==null&&(d0.data=r0)))),(r0=pc?mc(n,e):yc(n,e))&&(d0=X5(w,"onBeforeInput"),0<d0.length&&($=new re("onBeforeInput","beforeinput",null,e,B),H.push({event:$,listeners:d0}),$.data=r0)),rC(H,n,w,e,B)}$i(H,t)})}function f7(n,t,e){return{instance:n,listener:t,currentTarget:e}}function X5(n,t){for(var e=t+"Capture",l=[];n!==null;){var u=n,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=N2(n,e),u!=null&&l.unshift(f7(n,u,c)),u=N2(n,t),u!=null&&l.push(f7(n,u,c))),n.tag===3)return l;n=n.return}return[]}function fC(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function nl(n,t,e,l,u){for(var c=t._reactName,h=[];e!==null&&e!==l;){var v=e,z=v.alternate,w=v.stateNode;if(v=v.tag,z!==null&&z===l)break;v!==5&&v!==26&&v!==27||w===null||(z=w,u?(w=N2(e,c),w!=null&&h.unshift(f7(e,w,z))):u||(w=N2(e,c),w!=null&&h.push(f7(e,w,z)))),e=e.return}h.length!==0&&n.push({event:t,listeners:h})}var dC=/\r\n?/g,hC=/\u0000|\uFFFD/g;function tl(n){return(typeof n=="string"?n:""+n).replace(dC,`
`).replace(hC,"")}function el(n,t){return t=tl(t),tl(n)===t}function T0(n,t,e,l,u,c){switch(e){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||U1(n,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&U1(n,""+l);break;case"className":J7(n,"class",l);break;case"tabIndex":J7(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":J7(n,e,l);break;case"style":ee(n,l,c);break;case"data":if(t!=="object"){J7(n,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||e!=="href")){n.removeAttribute(e);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(e);break}l=F7(""+l),n.setAttribute(e,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(e==="formAction"?(t!=="input"&&T0(n,t,"name",u.name,u,null),T0(n,t,"formEncType",u.formEncType,u,null),T0(n,t,"formMethod",u.formMethod,u,null),T0(n,t,"formTarget",u.formTarget,u,null)):(T0(n,t,"encType",u.encType,u,null),T0(n,t,"method",u.method,u,null),T0(n,t,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(e);break}l=F7(""+l),n.setAttribute(e,l);break;case"onClick":l!=null&&(n.onclick=c8);break;case"onScroll":l!=null&&C0("scroll",n);break;case"onScrollEnd":l!=null&&C0("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(e=l.__html,e!=null){if(u.children!=null)throw Error(o(60));n.innerHTML=e}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}e=F7(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(e,""+l):n.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(e,""):n.removeAttribute(e);break;case"capture":case"download":l===!0?n.setAttribute(e,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(e,l):n.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(e,l):n.removeAttribute(e);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(e):n.setAttribute(e,l);break;case"popover":C0("beforetoggle",n),C0("toggle",n),Q7(n,"popover",l);break;case"xlinkActuate":u8(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":u8(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":u8(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":u8(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":u8(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":u8(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":u8(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":u8(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":u8(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Q7(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Yu.get(e)||e,Q7(n,e,l))}}function V9(n,t,e,l,u,c){switch(e){case"style":ee(n,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(e=l.__html,e!=null){if(u.children!=null)throw Error(o(60));n.innerHTML=e}}break;case"children":typeof l=="string"?U1(n,l):(typeof l=="number"||typeof l=="bigint")&&U1(n,""+l);break;case"onScroll":l!=null&&C0("scroll",n);break;case"onScrollEnd":l!=null&&C0("scrollend",n);break;case"onClick":l!=null&&(n.onclick=c8);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qt.hasOwnProperty(e))n:{if(e[0]==="o"&&e[1]==="n"&&(u=e.endsWith("Capture"),t=e.slice(2,u?e.length-7:void 0),c=n[f6]||null,c=c!=null?c[e]:null,typeof c=="function"&&n.removeEventListener(t,c,u),typeof l=="function")){typeof c!="function"&&c!==null&&(e in n?n[e]=null:n.hasAttribute(e)&&n.removeAttribute(e)),n.addEventListener(t,l,u);break n}e in n?n[e]=l:l===!0?n.setAttribute(e,""):Q7(n,e,l)}}}function i6(n,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":C0("error",n),C0("load",n);var l=!1,u=!1,c;for(c in e)if(e.hasOwnProperty(c)){var h=e[c];if(h!=null)switch(c){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:T0(n,t,c,h,e,null)}}u&&T0(n,t,"srcSet",e.srcSet,e,null),l&&T0(n,t,"src",e.src,e,null);return;case"input":C0("invalid",n);var v=c=h=u=null,z=null,w=null;for(l in e)if(e.hasOwnProperty(l)){var B=e[l];if(B!=null)switch(l){case"name":u=B;break;case"type":h=B;break;case"checked":z=B;break;case"defaultChecked":w=B;break;case"value":c=B;break;case"defaultValue":v=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,t));break;default:T0(n,t,l,B,e,null)}}$t(n,c,v,z,w,h,u,!1);return;case"select":C0("invalid",n),l=h=c=null;for(u in e)if(e.hasOwnProperty(u)&&(v=e[u],v!=null))switch(u){case"value":c=v;break;case"defaultValue":h=v;break;case"multiple":l=v;default:T0(n,t,u,v,e,null)}t=c,e=h,n.multiple=!!l,t!=null?B1(n,!!l,t,!1):e!=null&&B1(n,!!l,e,!0);return;case"textarea":C0("invalid",n),c=u=l=null;for(h in e)if(e.hasOwnProperty(h)&&(v=e[h],v!=null))switch(h){case"value":l=v;break;case"defaultValue":u=v;break;case"children":c=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(91));break;default:T0(n,t,h,v,e,null)}ne(n,l,u,c);return;case"option":for(z in e)if(e.hasOwnProperty(z)&&(l=e[z],l!=null))switch(z){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:T0(n,t,z,l,e,null)}return;case"dialog":C0("beforetoggle",n),C0("toggle",n),C0("cancel",n),C0("close",n);break;case"iframe":case"object":C0("load",n);break;case"video":case"audio":for(l=0;l<C7.length;l++)C0(C7[l],n);break;case"image":C0("error",n),C0("load",n);break;case"details":C0("toggle",n);break;case"embed":case"source":case"link":C0("error",n),C0("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in e)if(e.hasOwnProperty(w)&&(l=e[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:T0(n,t,w,l,e,null)}return;default:if(P3(t)){for(B in e)e.hasOwnProperty(B)&&(l=e[B],l!==void 0&&V9(n,t,B,l,e,void 0));return}}for(v in e)e.hasOwnProperty(v)&&(l=e[v],l!=null&&T0(n,t,v,l,e,null))}function pC(n,t,e,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,h=null,v=null,z=null,w=null,B=null;for(V in e){var H=e[V];if(e.hasOwnProperty(V)&&H!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":z=H;default:l.hasOwnProperty(V)||T0(n,t,V,null,l,H)}}for(var R in l){var V=l[R];if(H=e[R],l.hasOwnProperty(R)&&(V!=null||H!=null))switch(R){case"type":c=V;break;case"name":u=V;break;case"checked":w=V;break;case"defaultChecked":B=V;break;case"value":h=V;break;case"defaultValue":v=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(o(137,t));break;default:V!==H&&T0(n,t,R,V,l,H)}}Q3(n,h,v,z,w,B,c,u);return;case"select":V=h=v=R=null;for(c in e)if(z=e[c],e.hasOwnProperty(c)&&z!=null)switch(c){case"value":break;case"multiple":V=z;default:l.hasOwnProperty(c)||T0(n,t,c,null,l,z)}for(u in l)if(c=l[u],z=e[u],l.hasOwnProperty(u)&&(c!=null||z!=null))switch(u){case"value":R=c;break;case"defaultValue":v=c;break;case"multiple":h=c;default:c!==z&&T0(n,t,u,c,l,z)}t=v,e=h,l=V,R!=null?B1(n,!!e,R,!1):!!l!=!!e&&(t!=null?B1(n,!!e,t,!0):B1(n,!!e,e?[]:"",!1));return;case"textarea":V=R=null;for(v in e)if(u=e[v],e.hasOwnProperty(v)&&u!=null&&!l.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:T0(n,t,v,null,l,u)}for(h in l)if(u=l[h],c=e[h],l.hasOwnProperty(h)&&(u!=null||c!=null))switch(h){case"value":R=u;break;case"defaultValue":V=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==c&&T0(n,t,h,u,l,c)}It(n,R,V);return;case"option":for(var J in e)if(R=e[J],e.hasOwnProperty(J)&&R!=null&&!l.hasOwnProperty(J))switch(J){case"selected":n.selected=!1;break;default:T0(n,t,J,null,l,R)}for(z in l)if(R=l[z],V=e[z],l.hasOwnProperty(z)&&R!==V&&(R!=null||V!=null))switch(z){case"selected":n.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:T0(n,t,z,R,l,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var e0 in e)R=e[e0],e.hasOwnProperty(e0)&&R!=null&&!l.hasOwnProperty(e0)&&T0(n,t,e0,null,l,R);for(w in l)if(R=l[w],V=e[w],l.hasOwnProperty(w)&&R!==V&&(R!=null||V!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(o(137,t));break;default:T0(n,t,w,R,l,V)}return;default:if(P3(t)){for(var E0 in e)R=e[E0],e.hasOwnProperty(E0)&&R!==void 0&&!l.hasOwnProperty(E0)&&V9(n,t,E0,void 0,l,R);for(B in l)R=l[B],V=e[B],!l.hasOwnProperty(B)||R===V||R===void 0&&V===void 0||V9(n,t,B,R,l,V);return}}for(var T in e)R=e[T],e.hasOwnProperty(T)&&R!=null&&!l.hasOwnProperty(T)&&T0(n,t,T,null,l,R);for(H in l)R=l[H],V=e[H],!l.hasOwnProperty(H)||R===V||R==null&&V==null||T0(n,t,H,R,l,V)}function al(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mC(){if(typeof performance.getEntriesByType=="function"){for(var n=0,t=0,e=performance.getEntriesByType("resource"),l=0;l<e.length;l++){var u=e[l],c=u.transferSize,h=u.initiatorType,v=u.duration;if(c&&v&&al(h)){for(h=0,v=u.responseEnd,l+=1;l<e.length;l++){var z=e[l],w=z.startTime;if(w>v)break;var B=z.transferSize,H=z.initiatorType;B&&al(H)&&(z=z.responseEnd,h+=B*(z<v?1:(v-w)/(z-w)))}if(--l,t+=8*(c+h)/(u.duration/1e3),n++,10<n)break}}if(0<n)return t/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var _9=null,B9=null;function Z5(n){return n.nodeType===9?n:n.ownerDocument}function il(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ll(n,t){if(n===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&t==="foreignObject"?0:n}function U9(n,t){return n==="textarea"||n==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var L9=null;function yC(){var n=window.event;return n&&n.type==="popstate"?n===L9?!1:(L9=n,!0):(L9=null,!1)}var sl=typeof setTimeout=="function"?setTimeout:void 0,xC=typeof clearTimeout=="function"?clearTimeout:void 0,ol=typeof Promise=="function"?Promise:void 0,gC=typeof queueMicrotask=="function"?queueMicrotask:typeof ol<"u"?function(n){return ol.resolve(null).then(n).catch(vC)}:sl;function vC(n){setTimeout(function(){throw n})}function J8(n){return n==="head"}function rl(n,t){var e=t,l=0;do{var u=e.nextSibling;if(n.removeChild(e),u&&u.nodeType===8)if(e=u.data,e==="/$"||e==="/&"){if(l===0){n.removeChild(u),p2(t);return}l--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")l++;else if(e==="html")d7(n.ownerDocument.documentElement);else if(e==="head"){e=n.ownerDocument.head,d7(e);for(var c=e.firstChild;c;){var h=c.nextSibling,v=c.nodeName;c[R2]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&c.rel.toLowerCase()==="stylesheet"||e.removeChild(c),c=h}}else e==="body"&&d7(n.ownerDocument.body);e=u}while(e);p2(t)}function ul(n,t){var e=n;n=0;do{var l=e.nextSibling;if(e.nodeType===1?t?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(t?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),l&&l.nodeType===8)if(e=l.data,e==="/$"){if(n===0)break;n--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||n++;e=l}while(e)}function H9(n){var t=n.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":H9(e),Z3(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}n.removeChild(e)}}function MC(n,t,e,l){for(;n.nodeType===1;){var u=e;if(n.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[R2])switch(t){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(c=n.getAttribute("rel"),c==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(c!==u.rel||n.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||n.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||n.getAttribute("title")!==(u.title==null?null:u.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(c=n.getAttribute("src"),(c!==(u.src==null?null:u.src)||n.getAttribute("type")!==(u.type==null?null:u.type)||n.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(t==="input"&&n.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&n.getAttribute("name")===c)return n}else return n;if(n=L6(n.nextSibling),n===null)break}return null}function zC(n,t,e){if(t==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=L6(n.nextSibling),n===null))return null;return n}function cl(n,t){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=L6(n.nextSibling),n===null))return null;return n}function q9(n){return n.data==="$?"||n.data==="$~"}function Y9(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function jC(n,t){var e=n.ownerDocument;if(n.data==="$~")n._reactRetry=t;else if(n.data!=="$?"||e.readyState!=="loading")t();else{var l=function(){t(),e.removeEventListener("DOMContentLoaded",l)};e.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function L6(n){for(;n!=null;n=n.nextSibling){var t=n.nodeType;if(t===1||t===3)break;if(t===8){if(t=n.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return n}var G9=null;function Cl(n){n=n.nextSibling;for(var t=0;n;){if(n.nodeType===8){var e=n.data;if(e==="/$"||e==="/&"){if(t===0)return L6(n.nextSibling);t--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||t++}n=n.nextSibling}return null}function fl(n){n=n.previousSibling;for(var t=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(t===0)return n;t--}else e!=="/$"&&e!=="/&"||t++}n=n.previousSibling}return null}function dl(n,t,e){switch(t=Z5(e),n){case"html":if(n=t.documentElement,!n)throw Error(o(452));return n;case"head":if(n=t.head,!n)throw Error(o(453));return n;case"body":if(n=t.body,!n)throw Error(o(454));return n;default:throw Error(o(451))}}function d7(n){for(var t=n.attributes;t.length;)n.removeAttributeNode(t[0]);Z3(n)}var H6=new Map,hl=new Set;function K5(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var k8=X.d;X.d={f:bC,r:SC,D:kC,C:TC,L:EC,m:AC,X:RC,S:wC,M:DC};function bC(){var n=k8.f(),t=B5();return n||t}function SC(n){var t=O1(n);t!==null&&t.tag===5&&t.type==="form"?Ra(t):k8.r(n)}var f2=typeof document>"u"?null:document;function pl(n,t,e){var l=f2;if(l&&typeof t=="string"&&t){var u=D6(t);u='link[rel="'+n+'"][href="'+u+'"]',typeof e=="string"&&(u+='[crossorigin="'+e+'"]'),hl.has(u)||(hl.add(u),n={rel:n,crossOrigin:e,href:t},l.querySelector(u)===null&&(t=l.createElement("link"),i6(t,"link",n),$0(t),l.head.appendChild(t)))}}function kC(n){k8.D(n),pl("dns-prefetch",n,null)}function TC(n,t){k8.C(n,t),pl("preconnect",n,t)}function EC(n,t,e){k8.L(n,t,e);var l=f2;if(l&&n&&t){var u='link[rel="preload"][as="'+D6(t)+'"]';t==="image"&&e&&e.imageSrcSet?(u+='[imagesrcset="'+D6(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(u+='[imagesizes="'+D6(e.imageSizes)+'"]')):u+='[href="'+D6(n)+'"]';var c=u;switch(t){case"style":c=d2(n);break;case"script":c=h2(n)}H6.has(c)||(n=g({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:n,as:t},e),H6.set(c,n),l.querySelector(u)!==null||t==="style"&&l.querySelector(h7(c))||t==="script"&&l.querySelector(p7(c))||(t=l.createElement("link"),i6(t,"link",n),$0(t),l.head.appendChild(t)))}}function AC(n,t){k8.m(n,t);var e=f2;if(e&&n){var l=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+D6(l)+'"][href="'+D6(n)+'"]',c=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=h2(n)}if(!H6.has(c)&&(n=g({rel:"modulepreload",href:n},t),H6.set(c,n),e.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(p7(c)))return}l=e.createElement("link"),i6(l,"link",n),$0(l),e.head.appendChild(l)}}}function wC(n,t,e){k8.S(n,t,e);var l=f2;if(l&&n){var u=V1(l).hoistableStyles,c=d2(n);t=t||"default";var h=u.get(c);if(!h){var v={loading:0,preload:null};if(h=l.querySelector(h7(c)))v.loading=5;else{n=g({rel:"stylesheet",href:n,"data-precedence":t},e),(e=H6.get(c))&&X9(n,e);var z=h=l.createElement("link");$0(z),i6(z,"link",n),z._p=new Promise(function(w,B){z.onload=w,z.onerror=B}),z.addEventListener("load",function(){v.loading|=1}),z.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Q5(h,t,l)}h={type:"stylesheet",instance:h,count:1,state:v},u.set(c,h)}}}function RC(n,t){k8.X(n,t);var e=f2;if(e&&n){var l=V1(e).hoistableScripts,u=h2(n),c=l.get(u);c||(c=e.querySelector(p7(u)),c||(n=g({src:n,async:!0},t),(t=H6.get(u))&&Z9(n,t),c=e.createElement("script"),$0(c),i6(c,"link",n),e.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(u,c))}}function DC(n,t){k8.M(n,t);var e=f2;if(e&&n){var l=V1(e).hoistableScripts,u=h2(n),c=l.get(u);c||(c=e.querySelector(p7(u)),c||(n=g({src:n,async:!0,type:"module"},t),(t=H6.get(u))&&Z9(n,t),c=e.createElement("script"),$0(c),i6(c,"link",n),e.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(u,c))}}function ml(n,t,e,l){var u=(u=u0.current)?K5(u):null;if(!u)throw Error(o(446));switch(n){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=d2(e.href),e=V1(u).hoistableStyles,l=e.get(t),l||(l={type:"style",instance:null,count:0,state:null},e.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){n=d2(e.href);var c=V1(u).hoistableStyles,h=c.get(n);if(h||(u=u.ownerDocument||u,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(n,h),(c=u.querySelector(h7(n)))&&!c._p&&(h.instance=c,h.state.loading=5),H6.has(n)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},H6.set(n,e),c||NC(u,n,e,h.state))),t&&l===null)throw Error(o(528,""));return h}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=h2(e),e=V1(u).hoistableScripts,l=e.get(t),l||(l={type:"script",instance:null,count:0,state:null},e.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,n))}}function d2(n){return'href="'+D6(n)+'"'}function h7(n){return'link[rel="stylesheet"]['+n+"]"}function yl(n){return g({},n,{"data-precedence":n.precedence,precedence:null})}function NC(n,t,e,l){n.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=n.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),i6(t,"link",e),$0(t),n.head.appendChild(t))}function h2(n){return'[src="'+D6(n)+'"]'}function p7(n){return"script[async]"+n}function xl(n,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var l=n.querySelector('style[data-href~="'+D6(e.href)+'"]');if(l)return t.instance=l,$0(l),l;var u=g({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),$0(l),i6(l,"style",u),Q5(l,e.precedence,n),t.instance=l;case"stylesheet":u=d2(e.href);var c=n.querySelector(h7(u));if(c)return t.state.loading|=4,t.instance=c,$0(c),c;l=yl(e),(u=H6.get(u))&&X9(l,u),c=(n.ownerDocument||n).createElement("link"),$0(c);var h=c;return h._p=new Promise(function(v,z){h.onload=v,h.onerror=z}),i6(c,"link",l),t.state.loading|=4,Q5(c,e.precedence,n),t.instance=c;case"script":return c=h2(e.src),(u=n.querySelector(p7(c)))?(t.instance=u,$0(u),u):(l=e,(u=H6.get(c))&&(l=g({},e),Z9(l,u)),n=n.ownerDocument||n,u=n.createElement("script"),$0(u),i6(u,"link",l),n.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Q5(l,e.precedence,n));return t.instance}function Q5(n,t,e){for(var l=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,c=u,h=0;h<l.length;h++){var v=l[h];if(v.dataset.precedence===t)c=v;else if(c!==u)break}c?c.parentNode.insertBefore(n,c.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(n,t.firstChild))}function X9(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.title==null&&(n.title=t.title)}function Z9(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.integrity==null&&(n.integrity=t.integrity)}var J5=null;function gl(n,t,e){if(J5===null){var l=new Map,u=J5=new Map;u.set(e,l)}else u=J5,l=u.get(e),l||(l=new Map,u.set(e,l));if(l.has(n))return l;for(l.set(n,null),e=e.getElementsByTagName(n),u=0;u<e.length;u++){var c=e[u];if(!(c[R2]||c[n6]||n==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var h=c.getAttribute(t)||"";h=n+h;var v=l.get(h);v?v.push(c):l.set(h,[c])}}return l}function vl(n,t,e){n=n.ownerDocument||n,n.head.insertBefore(e,t==="title"?n.querySelector("head > title"):null)}function OC(n,t,e){if(e===1||t.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return n=t.disabled,typeof t.precedence=="string"&&n==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ml(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function VC(n,t,e,l){if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var u=d2(l.href),c=t.querySelector(h7(u));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=P5.bind(n),t.then(n,n)),e.state.loading|=4,e.instance=c,$0(c);return}c=t.ownerDocument||t,l=yl(l),(u=H6.get(u))&&X9(l,u),c=c.createElement("link"),$0(c);var h=c;h._p=new Promise(function(v,z){h.onload=v,h.onerror=z}),i6(c,"link",l),e.instance=c}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=P5.bind(n),t.addEventListener("load",e),t.addEventListener("error",e))}}var K9=0;function _C(n,t){return n.stylesheets&&n.count===0&&W5(n,n.stylesheets),0<n.count||0<n.imgCount?function(e){var l=setTimeout(function(){if(n.stylesheets&&W5(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4+t);0<n.imgBytes&&K9===0&&(K9=62500*mC());var u=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&W5(n,n.stylesheets),n.unsuspend)){var c=n.unsuspend;n.unsuspend=null,c()}},(n.imgBytes>K9?50:800)+t);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function P5(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)W5(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var F5=null;function W5(n,t){n.stylesheets=null,n.unsuspend!==null&&(n.count++,F5=new Map,t.forEach(BC,n),F5=null,P5.call(n))}function BC(n,t){if(!(t.state.loading&4)){var e=F5.get(n);if(e)var l=e.get(null);else{e=new Map,F5.set(n,e);for(var u=n.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var h=u[c];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(e.set(h.dataset.precedence,h),l=h)}l&&e.set(null,l)}u=t.instance,h=u.getAttribute("data-precedence"),c=e.get(h)||l,c===l&&e.set(null,u),e.set(h,u),this.count++,l=P5.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),c?c.parentNode.insertBefore(u,c.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(u,n.firstChild)),t.state.loading|=4}}var m7={$$typeof:U,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function UC(n,t,e,l,u,c,h,v,z){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=q3(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=q3(0),this.hiddenUpdates=q3(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function zl(n,t,e,l,u,c,h,v,z,w,B,H){return n=new UC(n,t,e,h,z,w,B,H,v),t=1,c===!0&&(t|=24),c=b6(3,null,null,t),n.current=c,c.stateNode=n,t=S4(),t.refCount++,n.pooledCache=t,t.refCount++,c.memoizedState={element:l,isDehydrated:e,cache:t},A4(c),n}function jl(n){return n?(n=Z1,n):Z1}function bl(n,t,e,l,u,c){u=jl(u),l.context===null?l.context=u:l.pendingContext=u,l=B8(t),l.payload={element:e},c=c===void 0?null:c,c!==null&&(l.callback=c),e=U8(n,l,t),e!==null&&(x6(e,n,t),J2(e,n,t))}function Sl(n,t){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<t?e:t}}function Q9(n,t){Sl(n,t),(n=n.alternate)&&Sl(n,t)}function kl(n){if(n.tag===13||n.tag===31){var t=f1(n,67108864);t!==null&&x6(t,n,67108864),Q9(n,67108864)}}function Tl(n){if(n.tag===13||n.tag===31){var t=A6();t=Y3(t);var e=f1(n,t);e!==null&&x6(e,n,t),Q9(n,t)}}var $5=!0;function LC(n,t,e,l){var u=_.T;_.T=null;var c=X.p;try{X.p=2,J9(n,t,e,l)}finally{X.p=c,_.T=u}}function HC(n,t,e,l){var u=_.T;_.T=null;var c=X.p;try{X.p=8,J9(n,t,e,l)}finally{X.p=c,_.T=u}}function J9(n,t,e,l){if($5){var u=P9(l);if(u===null)O9(n,t,l,I5,e),Al(n,l);else if(YC(u,n,t,e,l))l.stopPropagation();else if(Al(n,l),t&4&&-1<qC.indexOf(n)){for(;u!==null;){var c=O1(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var h=o1(c.pendingLanes);if(h!==0){var v=c;for(v.pendingLanes|=2,v.entangledLanes|=2;h;){var z=1<<31-z6(h);v.entanglements[1]|=z,h&=~z}a8(c),(M0&6)===0&&(V5=v6()+500,c7(0))}}break;case 31:case 13:v=f1(c,2),v!==null&&x6(v,c,2),B5(),Q9(c,2)}if(c=P9(l),c===null&&O9(n,t,l,I5,e),c===u)break;u=c}u!==null&&l.stopPropagation()}else O9(n,t,l,null,e)}}function P9(n){return n=W3(n),F9(n)}var I5=null;function F9(n){if(I5=null,n=N1(n),n!==null){var t=f(n);if(t===null)n=null;else{var e=t.tag;if(e===13){if(n=d(t),n!==null)return n;n=null}else if(e===31){if(n=p(t),n!==null)return n;n=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;n=null}else t!==n&&(n=null)}}return I5=n,null}function El(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ku()){case _t:return 2;case Bt:return 8;case Y7:case Tu:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var W9=!1,P8=null,F8=null,W8=null,y7=new Map,x7=new Map,$8=[],qC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Al(n,t){switch(n){case"focusin":case"focusout":P8=null;break;case"dragenter":case"dragleave":F8=null;break;case"mouseover":case"mouseout":W8=null;break;case"pointerover":case"pointerout":y7.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":x7.delete(t.pointerId)}}function g7(n,t,e,l,u,c){return n===null||n.nativeEvent!==c?(n={blockedOn:t,domEventName:e,eventSystemFlags:l,nativeEvent:c,targetContainers:[u]},t!==null&&(t=O1(t),t!==null&&kl(t)),n):(n.eventSystemFlags|=l,t=n.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),n)}function YC(n,t,e,l,u){switch(t){case"focusin":return P8=g7(P8,n,t,e,l,u),!0;case"dragenter":return F8=g7(F8,n,t,e,l,u),!0;case"mouseover":return W8=g7(W8,n,t,e,l,u),!0;case"pointerover":var c=u.pointerId;return y7.set(c,g7(y7.get(c)||null,n,t,e,l,u)),!0;case"gotpointercapture":return c=u.pointerId,x7.set(c,g7(x7.get(c)||null,n,t,e,l,u)),!0}return!1}function wl(n){var t=N1(n.target);if(t!==null){var e=f(t);if(e!==null){if(t=e.tag,t===13){if(t=d(e),t!==null){n.blockedOn=t,Xt(n.priority,function(){Tl(e)});return}}else if(t===31){if(t=p(e),t!==null){n.blockedOn=t,Xt(n.priority,function(){Tl(e)});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function n3(n){if(n.blockedOn!==null)return!1;for(var t=n.targetContainers;0<t.length;){var e=P9(n.nativeEvent);if(e===null){e=n.nativeEvent;var l=new e.constructor(e.type,e);F3=l,e.target.dispatchEvent(l),F3=null}else return t=O1(e),t!==null&&kl(t),n.blockedOn=e,!1;t.shift()}return!0}function Rl(n,t,e){n3(n)&&e.delete(t)}function GC(){W9=!1,P8!==null&&n3(P8)&&(P8=null),F8!==null&&n3(F8)&&(F8=null),W8!==null&&n3(W8)&&(W8=null),y7.forEach(Rl),x7.forEach(Rl)}function t3(n,t){n.blockedOn===t&&(n.blockedOn=null,W9||(W9=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,GC)))}var e3=null;function Dl(n){e3!==n&&(e3=n,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){e3===n&&(e3=null);for(var t=0;t<n.length;t+=3){var e=n[t],l=n[t+1],u=n[t+2];if(typeof l!="function"){if(F9(l||e)===null)continue;break}var c=O1(e);c!==null&&(n.splice(t,3),t-=3,P4(c,{pending:!0,data:u,method:e.method,action:l},l,u))}}))}function p2(n){function t(z){return t3(z,n)}P8!==null&&t3(P8,n),F8!==null&&t3(F8,n),W8!==null&&t3(W8,n),y7.forEach(t),x7.forEach(t);for(var e=0;e<$8.length;e++){var l=$8[e];l.blockedOn===n&&(l.blockedOn=null)}for(;0<$8.length&&(e=$8[0],e.blockedOn===null);)wl(e),e.blockedOn===null&&$8.shift();if(e=(n.ownerDocument||n).$$reactFormReplay,e!=null)for(l=0;l<e.length;l+=3){var u=e[l],c=e[l+1],h=u[f6]||null;if(typeof c=="function")h||Dl(e);else if(h){var v=null;if(c&&c.hasAttribute("formAction")){if(u=c,h=c[f6]||null)v=h.formAction;else if(F9(u)!==null)continue}else v=h.action;typeof v=="function"?e[l+1]=v:(e.splice(l,3),l-=3),Dl(e)}}}function Nl(){function n(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(h){return u=h})},focusReset:"manual",scroll:"manual"})}function t(){u!==null&&(u(),u=null),l||setTimeout(e,20)}function e(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(e,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),u!==null&&(u(),u=null)}}}function $9(n){this._internalRoot=n}a3.prototype.render=$9.prototype.render=function(n){var t=this._internalRoot;if(t===null)throw Error(o(409));var e=t.current,l=A6();bl(e,l,n,t,null,null)},a3.prototype.unmount=$9.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var t=n.containerInfo;bl(n.current,2,null,n,null,null),B5(),t[D1]=null}};function a3(n){this._internalRoot=n}a3.prototype.unstable_scheduleHydration=function(n){if(n){var t=Gt();n={blockedOn:null,target:n,priority:t};for(var e=0;e<$8.length&&t!==0&&t<$8[e].priority;e++);$8.splice(e,0,n),e===0&&wl(n)}};var Ol=i.version;if(Ol!=="19.2.4")throw Error(o(527,Ol,"19.2.4"));X.findDOMNode=function(n){var t=n._reactInternals;if(t===void 0)throw typeof n.render=="function"?Error(o(188)):(n=Object.keys(n).join(","),Error(o(268,n)));return n=m(t),n=n!==null?x(n):null,n=n===null?null:n.stateNode,n};var XC={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var i3=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!i3.isDisabled&&i3.supportsFiber)try{E2=i3.inject(XC),M6=i3}catch{}}return M7.createRoot=function(n,t){if(!C(n))throw Error(o(299));var e=!1,l="",u=qa,c=Ya,h=Ga;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=zl(n,1,!1,null,null,e,l,null,u,c,h,Nl),n[D1]=t.current,N9(n),new $9(t)},M7.hydrateRoot=function(n,t,e){if(!C(n))throw Error(o(299));var l=!1,u="",c=qa,h=Ya,v=Ga,z=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(u=e.identifierPrefix),e.onUncaughtError!==void 0&&(c=e.onUncaughtError),e.onCaughtError!==void 0&&(h=e.onCaughtError),e.onRecoverableError!==void 0&&(v=e.onRecoverableError),e.formState!==void 0&&(z=e.formState)),t=zl(n,1,!0,t,e??null,l,u,z,c,h,v,Nl),t.context=jl(null),e=t.current,l=A6(),l=Y3(l),u=B8(l),u.callback=null,U8(e,u,l),e=l,t.current.lanes=e,w2(t,e),a8(t),n[D1]=t.current,N9(n),new a3(t)},M7.version="19.2.4",M7}var Xl;function nf(){if(Xl)return tn.exports;Xl=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),tn.exports=IC(),tn.exports}var tf=nf();/**
 * react-router v7.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Zl="popstate";function Kl(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function ef(a={}){function i(o,C){var m;let f=(m=C.state)==null?void 0:m.masked,{pathname:d,search:p,hash:y}=f||o.location;return Sn("",{pathname:d,search:p,hash:y},C.state&&C.state.usr||null,C.state&&C.state.key||"default",f?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function r(o,C){return typeof C=="string"?C:A7(C)}return lf(i,r,null,a)}function B0(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function $6(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function af(){return Math.random().toString(36).substring(2,10)}function Ql(a,i){return{usr:a.state,key:a.key,idx:i,masked:a.unstable_mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function Sn(a,i,r=null,o,C){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof i=="string"?z2(i):i,state:r,key:i&&i.key||o||af(),unstable_mask:C}}function A7({pathname:a="/",search:i="",hash:r=""}){return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(a+=r.charAt(0)==="#"?r:"#"+r),a}function z2(a){let i={};if(a){let r=a.indexOf("#");r>=0&&(i.hash=a.substring(r),a=a.substring(0,r));let o=a.indexOf("?");o>=0&&(i.search=a.substring(o),a=a.substring(0,o)),a&&(i.pathname=a)}return i}function lf(a,i,r,o={}){let{window:C=document.defaultView,v5Compat:f=!1}=o,d=C.history,p="POP",y=null,m=x();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function x(){return(d.state||{idx:null}).idx}function g(){p="POP";let N=x(),D=N==null?null:N-m;m=N,y&&y({action:p,location:O.location,delta:D})}function M(N,D){p="PUSH";let Y=Kl(N)?N:Sn(O.location,N,D);m=x()+1;let U=Ql(Y,m),G=O.createHref(Y.unstable_mask||Y);try{d.pushState(U,"",G)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;C.location.assign(G)}f&&y&&y({action:p,location:O.location,delta:1})}function S(N,D){p="REPLACE";let Y=Kl(N)?N:Sn(O.location,N,D);m=x();let U=Ql(Y,m),G=O.createHref(Y.unstable_mask||Y);d.replaceState(U,"",G),f&&y&&y({action:p,location:O.location,delta:0})}function E(N){return sf(N)}let O={get action(){return p},get location(){return a(C,d)},listen(N){if(y)throw new Error("A history only accepts one active listener");return C.addEventListener(Zl,g),y=N,()=>{C.removeEventListener(Zl,g),y=null}},createHref(N){return i(C,N)},createURL:E,encodeLocation(N){let D=E(N);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:M,replace:S,go(N){return d.go(N)}};return O}function sf(a,i=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),B0(r,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:A7(a);return o=o.replace(/ $/,"%20"),!i&&o.startsWith("//")&&(o=r+o),new URL(o,r)}function po(a,i,r="/"){return of(a,i,r,!1)}function of(a,i,r,o){let C=typeof i=="string"?z2(i):i,f=T8(C.pathname||"/",r);if(f==null)return null;let d=mo(a);rf(d);let p=null;for(let y=0;p==null&&y<d.length;++y){let m=gf(f);p=yf(d[y],m,o)}return p}function mo(a,i=[],r=[],o="",C=!1){let f=(d,p,y=C,m)=>{let x={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:p,route:d};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(o)&&y)return;B0(x.relativePath.startsWith(o),`Absolute route path "${x.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(o.length)}let g=s8([o,x.relativePath]),M=r.concat(x);d.children&&d.children.length>0&&(B0(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),mo(d.children,i,M,g,y)),!(d.path==null&&!d.index)&&i.push({path:g,score:pf(g,d.index),routesMeta:M})};return a.forEach((d,p)=>{var y;if(d.path===""||!((y=d.path)!=null&&y.includes("?")))f(d,p);else for(let m of yo(d.path))f(d,p,!0,m)}),i}function yo(a){let i=a.split("/");if(i.length===0)return[];let[r,...o]=i,C=r.endsWith("?"),f=r.replace(/\?$/,"");if(o.length===0)return C?[f,""]:[f];let d=yo(o.join("/")),p=[];return p.push(...d.map(y=>y===""?f:[f,y].join("/"))),C&&p.push(...d),p.map(y=>a.startsWith("/")&&y===""?"/":y)}function rf(a){a.sort((i,r)=>i.score!==r.score?r.score-i.score:mf(i.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}var uf=/^:[\w-]+$/,cf=3,Cf=2,ff=1,df=10,hf=-2,Jl=a=>a==="*";function pf(a,i){let r=a.split("/"),o=r.length;return r.some(Jl)&&(o+=hf),i&&(o+=Cf),r.filter(C=>!Jl(C)).reduce((C,f)=>C+(uf.test(f)?cf:f===""?ff:df),o)}function mf(a,i){return a.length===i.length&&a.slice(0,-1).every((o,C)=>o===i[C])?a[a.length-1]-i[i.length-1]:0}function yf(a,i,r=!1){let{routesMeta:o}=a,C={},f="/",d=[];for(let p=0;p<o.length;++p){let y=o[p],m=p===o.length-1,x=f==="/"?i:i.slice(f.length)||"/",g=g3({path:y.relativePath,caseSensitive:y.caseSensitive,end:m},x),M=y.route;if(!g&&m&&r&&!o[o.length-1].route.index&&(g=g3({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},x)),!g)return null;Object.assign(C,g.params),d.push({params:C,pathname:s8([f,g.pathname]),pathnameBase:jf(s8([f,g.pathnameBase])),route:M}),g.pathnameBase!=="/"&&(f=s8([f,g.pathnameBase]))}return d}function g3(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[r,o]=xf(a.path,a.caseSensitive,a.end),C=i.match(r);if(!C)return null;let f=C[0],d=f.replace(/(.)\/+$/,"$1"),p=C.slice(1);return{params:o.reduce((m,{paramName:x,isOptional:g},M)=>{if(x==="*"){let E=p[M]||"";d=f.slice(0,f.length-E.length).replace(/(.)\/+$/,"$1")}const S=p[M];return g&&!S?m[x]=void 0:m[x]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:d,pattern:a}}function xf(a,i=!1,r=!0){$6(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],C="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,y,m,x)=>{if(o.push({paramName:p,isOptional:y!=null}),y){let g=x.charAt(m+d.length);return g&&g!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),C+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?C+="\\/*$":a!==""&&a!=="/"&&(C+="(?:(?=\\/|$))"),[new RegExp(C,i?void 0:"i"),o]}function gf(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return $6(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),a}}function T8(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let r=i.endsWith("/")?i.length-1:i.length,o=a.charAt(r);return o&&o!=="/"?null:a.slice(r)||"/"}var vf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Mf(a,i="/"){let{pathname:r,search:o="",hash:C=""}=typeof a=="string"?z2(a):a,f;return r?(r=r.replace(/\/\/+/g,"/"),r.startsWith("/")?f=Pl(r.substring(1),"/"):f=Pl(r,i)):f=i,{pathname:f,search:bf(o),hash:Sf(C)}}function Pl(a,i){let r=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(C=>{C===".."?r.length>1&&r.pop():C!=="."&&r.push(C)}),r.length>1?r.join("/"):"/"}function sn(a,i,r,o){return`Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zf(a){return a.filter((i,r)=>r===0||i.route.path&&i.route.path.length>0)}function xo(a){let i=zf(a);return i.map((r,o)=>o===i.length-1?r.pathname:r.pathnameBase)}function In(a,i,r,o=!1){let C;typeof a=="string"?C=z2(a):(C={...a},B0(!C.pathname||!C.pathname.includes("?"),sn("?","pathname","search",C)),B0(!C.pathname||!C.pathname.includes("#"),sn("#","pathname","hash",C)),B0(!C.search||!C.search.includes("#"),sn("#","search","hash",C)));let f=a===""||C.pathname==="",d=f?"/":C.pathname,p;if(d==null)p=r;else{let g=i.length-1;if(!o&&d.startsWith("..")){let M=d.split("/");for(;M[0]==="..";)M.shift(),g-=1;C.pathname=M.join("/")}p=g>=0?i[g]:"/"}let y=Mf(C,p),m=d&&d!=="/"&&d.endsWith("/"),x=(f||d===".")&&r.endsWith("/");return!y.pathname.endsWith("/")&&(m||x)&&(y.pathname+="/"),y}var s8=a=>a.join("/").replace(/\/\/+/g,"/"),jf=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),bf=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Sf=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,kf=class{constructor(a,i,r,o=!1){this.status=a,this.statusText=i||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Tf(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function Ef(a){return a.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var go=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function vo(a,i){let r=a;if(typeof r!="string"||!vf.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let o=r,C=!1;if(go)try{let f=new URL(window.location.href),d=r.startsWith("//")?new URL(f.protocol+r):new URL(r),p=T8(d.pathname,i);d.origin===f.origin&&p!=null?r=p+d.search+d.hash:C=!0}catch{$6(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:C,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Mo=["POST","PUT","PATCH","DELETE"];new Set(Mo);var Af=["GET",...Mo];new Set(Af);var j2=k.createContext(null);j2.displayName="DataRouter";var A3=k.createContext(null);A3.displayName="DataRouterState";var zo=k.createContext(!1);function wf(){return k.useContext(zo)}var jo=k.createContext({isTransitioning:!1});jo.displayName="ViewTransition";var Rf=k.createContext(new Map);Rf.displayName="Fetchers";var Df=k.createContext(null);Df.displayName="Await";var G6=k.createContext(null);G6.displayName="Navigation";var O7=k.createContext(null);O7.displayName="Location";var E8=k.createContext({outlet:null,matches:[],isDataRoute:!1});E8.displayName="Route";var nt=k.createContext(null);nt.displayName="RouteError";var bo="REACT_ROUTER_ERROR",Nf="REDIRECT",Of="ROUTE_ERROR_RESPONSE";function Vf(a){if(a.startsWith(`${bo}:${Nf}:{`))try{let i=JSON.parse(a.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function _f(a){if(a.startsWith(`${bo}:${Of}:{`))try{let i=JSON.parse(a.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new kf(i.status,i.statusText,i.data)}catch{}}function Bf(a,{relative:i}={}){B0(V7(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=k.useContext(G6),{hash:C,pathname:f,search:d}=_7(a,{relative:i}),p=f;return r!=="/"&&(p=f==="/"?r:s8([r,f])),o.createHref({pathname:p,search:d,hash:C})}function V7(){return k.useContext(O7)!=null}function I6(){return B0(V7(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(O7).location}var So="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ko(a){k.useContext(G6).static||k.useLayoutEffect(a)}function To(){let{isDataRoute:a}=k.useContext(E8);return a?Ff():Uf()}function Uf(){B0(V7(),"useNavigate() may be used only in the context of a <Router> component.");let a=k.useContext(j2),{basename:i,navigator:r}=k.useContext(G6),{matches:o}=k.useContext(E8),{pathname:C}=I6(),f=JSON.stringify(xo(o)),d=k.useRef(!1);return ko(()=>{d.current=!0}),k.useCallback((y,m={})=>{if($6(d.current,So),!d.current)return;if(typeof y=="number"){r.go(y);return}let x=In(y,JSON.parse(f),C,m.relative==="path");a==null&&i!=="/"&&(x.pathname=x.pathname==="/"?i:s8([i,x.pathname])),(m.replace?r.replace:r.push)(x,m.state,m)},[i,r,f,C,a])}k.createContext(null);function _7(a,{relative:i}={}){let{matches:r}=k.useContext(E8),{pathname:o}=I6(),C=JSON.stringify(xo(r));return k.useMemo(()=>In(a,JSON.parse(C),o,i==="path"),[a,C,o,i])}function Lf(a,i){return Eo(a,i)}function Eo(a,i,r){var N;B0(V7(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=k.useContext(G6),{matches:C}=k.useContext(E8),f=C[C.length-1],d=f?f.params:{},p=f?f.pathname:"/",y=f?f.pathnameBase:"/",m=f&&f.route;{let D=m&&m.path||"";wo(p,!m||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let x=I6(),g;if(i){let D=typeof i=="string"?z2(i):i;B0(y==="/"||((N=D.pathname)==null?void 0:N.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${D.pathname}" was given in the \`location\` prop.`),g=D}else g=x;let M=g.pathname||"/",S=M;if(y!=="/"){let D=y.replace(/^\//,"").split("/");S="/"+M.replace(/^\//,"").split("/").slice(D.length).join("/")}let E=po(a,{pathname:S});$6(m||E!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),$6(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=Xf(E&&E.map(D=>Object.assign({},D,{params:Object.assign({},d,D.params),pathname:s8([y,o.encodeLocation?o.encodeLocation(D.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?y:s8([y,o.encodeLocation?o.encodeLocation(D.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),C,r);return i&&O?k.createElement(O7.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...g},navigationType:"POP"}},O):O}function Hf(){let a=Pf(),i=Tf(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),r=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",C={padding:"0.5rem",backgroundColor:o},f={padding:"2px 4px",backgroundColor:o},d=null;return console.error("Error handled by React Router default ErrorBoundary:",a),d=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:f},"ErrorBoundary")," or"," ",k.createElement("code",{style:f},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},i),r?k.createElement("pre",{style:C},r):null,d)}var qf=k.createElement(Hf,null),Ao=class extends k.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){this.props.onError?this.props.onError(a,i):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const r=_f(a.digest);r&&(a=r)}let i=a!==void 0?k.createElement(E8.Provider,{value:this.props.routeContext},k.createElement(nt.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?k.createElement(Yf,{error:a},i):i}};Ao.contextType=zo;var on=new WeakMap;function Yf({children:a,error:i}){let{basename:r}=k.useContext(G6);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let o=Vf(i.digest);if(o){let C=on.get(i);if(C)throw C;let f=vo(o.location,r);if(go&&!on.get(i))if(f.isExternal||o.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:o.replace}));throw on.set(i,d),d}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return a}function Gf({routeContext:a,match:i,children:r}){let o=k.useContext(j2);return o&&o.static&&o.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=i.route.id),k.createElement(E8.Provider,{value:a},r)}function Xf(a,i=[],r){let o=r==null?void 0:r.state;if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let C=a,f=o==null?void 0:o.errors;if(f!=null){let x=C.findIndex(g=>g.route.id&&(f==null?void 0:f[g.route.id])!==void 0);B0(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),C=C.slice(0,Math.min(C.length,x+1))}let d=!1,p=-1;if(r&&o){d=o.renderFallback;for(let x=0;x<C.length;x++){let g=C[x];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=x),g.route.id){let{loaderData:M,errors:S}=o,E=g.route.loader&&!M.hasOwnProperty(g.route.id)&&(!S||S[g.route.id]===void 0);if(g.route.lazy||E){r.isStatic&&(d=!0),p>=0?C=C.slice(0,p+1):C=[C[0]];break}}}}let y=r==null?void 0:r.onError,m=o&&y?(x,g)=>{var M,S;y(x,{location:o.location,params:((S=(M=o.matches)==null?void 0:M[0])==null?void 0:S.params)??{},unstable_pattern:Ef(o.matches),errorInfo:g})}:void 0;return C.reduceRight((x,g,M)=>{let S,E=!1,O=null,N=null;o&&(S=f&&g.route.id?f[g.route.id]:void 0,O=g.route.errorElement||qf,d&&(p<0&&M===0?(wo("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,N=null):p===M&&(E=!0,N=g.route.hydrateFallbackElement||null)));let D=i.concat(C.slice(0,M+1)),Y=()=>{let U;return S?U=O:E?U=N:g.route.Component?U=k.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=x,k.createElement(Gf,{match:g,routeContext:{outlet:x,matches:D,isDataRoute:o!=null},children:U})};return o&&(g.route.ErrorBoundary||g.route.errorElement||M===0)?k.createElement(Ao,{location:o.location,revalidation:o.revalidation,component:O,error:S,children:Y(),routeContext:{outlet:null,matches:D,isDataRoute:!0},onError:m}):Y()},null)}function tt(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zf(a){let i=k.useContext(j2);return B0(i,tt(a)),i}function Kf(a){let i=k.useContext(A3);return B0(i,tt(a)),i}function Qf(a){let i=k.useContext(E8);return B0(i,tt(a)),i}function et(a){let i=Qf(a),r=i.matches[i.matches.length-1];return B0(r.route.id,`${a} can only be used on routes that contain a unique "id"`),r.route.id}function Jf(){return et("useRouteId")}function Pf(){var o;let a=k.useContext(nt),i=Kf("useRouteError"),r=et("useRouteError");return a!==void 0?a:(o=i.errors)==null?void 0:o[r]}function Ff(){let{router:a}=Zf("useNavigate"),i=et("useNavigate"),r=k.useRef(!1);return ko(()=>{r.current=!0}),k.useCallback(async(C,f={})=>{$6(r.current,So),r.current&&(typeof C=="number"?await a.navigate(C):await a.navigate(C,{fromRouteId:i,...f}))},[a,i])}var Fl={};function wo(a,i,r){!i&&!Fl[a]&&(Fl[a]=!0,$6(!1,r))}k.memo(Wf);function Wf({routes:a,future:i,state:r,isStatic:o,onError:C}){return Eo(a,void 0,{state:r,isStatic:o,onError:C})}function k1(a){B0(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function $f({basename:a="/",children:i=null,location:r,navigationType:o="POP",navigator:C,static:f=!1,unstable_useTransitions:d}){B0(!V7(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=a.replace(/^\/*/,"/"),y=k.useMemo(()=>({basename:p,navigator:C,static:f,unstable_useTransitions:d,future:{}}),[p,C,f,d]);typeof r=="string"&&(r=z2(r));let{pathname:m="/",search:x="",hash:g="",state:M=null,key:S="default",unstable_mask:E}=r,O=k.useMemo(()=>{let N=T8(m,p);return N==null?null:{location:{pathname:N,search:x,hash:g,state:M,key:S,unstable_mask:E},navigationType:o}},[p,m,x,g,M,S,o,E]);return $6(O!=null,`<Router basename="${p}"> is not able to match the URL "${m}${x}${g}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:k.createElement(G6.Provider,{value:y},k.createElement(O7.Provider,{children:i,value:O}))}function If({children:a,location:i}){return Lf(kn(a),i)}function kn(a,i=[]){let r=[];return k.Children.forEach(a,(o,C)=>{if(!k.isValidElement(o))return;let f=[...i,C];if(o.type===k.Fragment){r.push.apply(r,kn(o.props.children,f));return}B0(o.type===k1,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),B0(!o.props.index||!o.props.children,"An index route cannot have child routes.");let d={id:o.props.id||f.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(d.children=kn(o.props.children,f)),r.push(d)}),r}var c3="get",C3="application/x-www-form-urlencoded";function w3(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function nd(a){return w3(a)&&a.tagName.toLowerCase()==="button"}function td(a){return w3(a)&&a.tagName.toLowerCase()==="form"}function ed(a){return w3(a)&&a.tagName.toLowerCase()==="input"}function ad(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function id(a,i){return a.button===0&&(!i||i==="_self")&&!ad(a)}function Tn(a=""){return new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((i,r)=>{let o=a[r];return i.concat(Array.isArray(o)?o.map(C=>[r,C]):[[r,o]])},[]))}function ld(a,i){let r=Tn(a);return i&&i.forEach((o,C)=>{r.has(C)||i.getAll(C).forEach(f=>{r.append(C,f)})}),r}var l3=null;function sd(){if(l3===null)try{new FormData(document.createElement("form"),0),l3=!1}catch{l3=!0}return l3}var od=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function rn(a){return a!=null&&!od.has(a)?($6(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${C3}"`),null):a}function rd(a,i){let r,o,C,f,d;if(td(a)){let p=a.getAttribute("action");o=p?T8(p,i):null,r=a.getAttribute("method")||c3,C=rn(a.getAttribute("enctype"))||C3,f=new FormData(a)}else if(nd(a)||ed(a)&&(a.type==="submit"||a.type==="image")){let p=a.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=a.getAttribute("formaction")||p.getAttribute("action");if(o=y?T8(y,i):null,r=a.getAttribute("formmethod")||p.getAttribute("method")||c3,C=rn(a.getAttribute("formenctype"))||rn(p.getAttribute("enctype"))||C3,f=new FormData(p,a),!sd()){let{name:m,type:x,value:g}=a;if(x==="image"){let M=m?`${m}.`:"";f.append(`${M}x`,"0"),f.append(`${M}y`,"0")}else m&&f.append(m,g)}}else{if(w3(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=c3,o=null,C=C3,d=a}return f&&C==="text/plain"&&(d=f,f=void 0),{action:o,method:r.toLowerCase(),encType:C,formData:f,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function at(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function Ro(a,i,r,o){let C=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return r?C.pathname.endsWith("/")?C.pathname=`${C.pathname}_.${o}`:C.pathname=`${C.pathname}.${o}`:C.pathname==="/"?C.pathname=`_root.${o}`:i&&T8(C.pathname,i)==="/"?C.pathname=`${i.replace(/\/$/,"")}/_root.${o}`:C.pathname=`${C.pathname.replace(/\/$/,"")}.${o}`,C}async function ud(a,i){if(a.id in i)return i[a.id];try{let r=await import(a.module);return i[a.id]=r,r}catch(r){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cd(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Cd(a,i,r){let o=await Promise.all(a.map(async C=>{let f=i.routes[C.route.id];if(f){let d=await ud(f,r);return d.links?d.links():[]}return[]}));return pd(o.flat(1).filter(cd).filter(C=>C.rel==="stylesheet"||C.rel==="preload").map(C=>C.rel==="stylesheet"?{...C,rel:"prefetch",as:"style"}:{...C,rel:"prefetch"}))}function Wl(a,i,r,o,C,f){let d=(y,m)=>r[m]?y.route.id!==r[m].route.id:!0,p=(y,m)=>{var x;return r[m].pathname!==y.pathname||((x=r[m].route.path)==null?void 0:x.endsWith("*"))&&r[m].params["*"]!==y.params["*"]};return f==="assets"?i.filter((y,m)=>d(y,m)||p(y,m)):f==="data"?i.filter((y,m)=>{var g;let x=o.routes[y.route.id];if(!x||!x.hasLoader)return!1;if(d(y,m)||p(y,m))return!0;if(y.route.shouldRevalidate){let M=y.route.shouldRevalidate({currentUrl:new URL(C.pathname+C.search+C.hash,window.origin),currentParams:((g=r[0])==null?void 0:g.params)||{},nextUrl:new URL(a,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof M=="boolean")return M}return!0}):[]}function fd(a,i,{includeHydrateFallback:r}={}){return dd(a.map(o=>{let C=i.routes[o.route.id];if(!C)return[];let f=[C.module];return C.clientActionModule&&(f=f.concat(C.clientActionModule)),C.clientLoaderModule&&(f=f.concat(C.clientLoaderModule)),r&&C.hydrateFallbackModule&&(f=f.concat(C.hydrateFallbackModule)),C.imports&&(f=f.concat(C.imports)),f}).flat(1))}function dd(a){return[...new Set(a)]}function hd(a){let i={},r=Object.keys(a).sort();for(let o of r)i[o]=a[o];return i}function pd(a,i){let r=new Set;return new Set(i),a.reduce((o,C)=>{let f=JSON.stringify(hd(C));return r.has(f)||(r.add(f),o.push({key:f,link:C})),o},[])}function it(){let a=k.useContext(j2);return at(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function md(){let a=k.useContext(A3);return at(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var lt=k.createContext(void 0);lt.displayName="FrameworkContext";function st(){let a=k.useContext(lt);return at(a,"You must render this element inside a <HydratedRouter> element"),a}function yd(a,i){let r=k.useContext(lt),[o,C]=k.useState(!1),[f,d]=k.useState(!1),{onFocus:p,onBlur:y,onMouseEnter:m,onMouseLeave:x,onTouchStart:g}=i,M=k.useRef(null);k.useEffect(()=>{if(a==="render"&&d(!0),a==="viewport"){let O=D=>{D.forEach(Y=>{d(Y.isIntersecting)})},N=new IntersectionObserver(O,{threshold:.5});return M.current&&N.observe(M.current),()=>{N.disconnect()}}},[a]),k.useEffect(()=>{if(o){let O=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(O)}}},[o]);let S=()=>{C(!0)},E=()=>{C(!1),d(!1)};return r?a!=="intent"?[f,M,{}]:[f,M,{onFocus:z7(p,S),onBlur:z7(y,E),onMouseEnter:z7(m,S),onMouseLeave:z7(x,E),onTouchStart:z7(g,S)}]:[!1,M,{}]}function z7(a,i){return r=>{a&&a(r),r.defaultPrevented||i(r)}}function xd({page:a,...i}){let r=wf(),{router:o}=it(),C=k.useMemo(()=>po(o.routes,a,o.basename),[o.routes,a,o.basename]);return C?r?k.createElement(vd,{page:a,matches:C,...i}):k.createElement(Md,{page:a,matches:C,...i}):null}function gd(a){let{manifest:i,routeModules:r}=st(),[o,C]=k.useState([]);return k.useEffect(()=>{let f=!1;return Cd(a,i,r).then(d=>{f||C(d)}),()=>{f=!0}},[a,i,r]),o}function vd({page:a,matches:i,...r}){let o=I6(),{future:C}=st(),{basename:f}=it(),d=k.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let p=Ro(a,f,C.unstable_trailingSlashAwareDataRequests,"rsc"),y=!1,m=[];for(let x of i)typeof x.route.shouldRevalidate=="function"?y=!0:m.push(x.route.id);return y&&m.length>0&&p.searchParams.set("_routes",m.join(",")),[p.pathname+p.search]},[f,C.unstable_trailingSlashAwareDataRequests,a,o,i]);return k.createElement(k.Fragment,null,d.map(p=>k.createElement("link",{key:p,rel:"prefetch",as:"fetch",href:p,...r})))}function Md({page:a,matches:i,...r}){let o=I6(),{future:C,manifest:f,routeModules:d}=st(),{basename:p}=it(),{loaderData:y,matches:m}=md(),x=k.useMemo(()=>Wl(a,i,m,f,o,"data"),[a,i,m,f,o]),g=k.useMemo(()=>Wl(a,i,m,f,o,"assets"),[a,i,m,f,o]),M=k.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let O=new Set,N=!1;if(i.forEach(Y=>{var G;let U=f.routes[Y.route.id];!U||!U.hasLoader||(!x.some(Z=>Z.route.id===Y.route.id)&&Y.route.id in y&&((G=d[Y.route.id])!=null&&G.shouldRevalidate)||U.hasClientLoader?N=!0:O.add(Y.route.id))}),O.size===0)return[];let D=Ro(a,p,C.unstable_trailingSlashAwareDataRequests,"data");return N&&O.size>0&&D.searchParams.set("_routes",i.filter(Y=>O.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[D.pathname+D.search]},[p,C.unstable_trailingSlashAwareDataRequests,y,o,f,x,i,a,d]),S=k.useMemo(()=>fd(g,f),[g,f]),E=gd(g);return k.createElement(k.Fragment,null,M.map(O=>k.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...r})),S.map(O=>k.createElement("link",{key:O,rel:"modulepreload",href:O,...r})),E.map(({key:O,link:N})=>k.createElement("link",{key:O,nonce:r.nonce,...N,crossOrigin:N.crossOrigin??r.crossOrigin})))}function zd(...a){return i=>{a.forEach(r=>{typeof r=="function"?r(i):r!=null&&(r.current=i)})}}var jd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{jd&&(window.__reactRouterVersion="7.14.0")}catch{}function bd({basename:a,children:i,unstable_useTransitions:r,window:o}){let C=k.useRef();C.current==null&&(C.current=ef({window:o,v5Compat:!0}));let f=C.current,[d,p]=k.useState({action:f.action,location:f.location}),y=k.useCallback(m=>{r===!1?p(m):k.startTransition(()=>p(m))},[r]);return k.useLayoutEffect(()=>f.listen(y),[f,y]),k.createElement($f,{basename:a,children:i,location:d.location,navigationType:d.action,navigator:f,unstable_useTransitions:r})}var Do=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,N0=k.forwardRef(function({onClick:i,discover:r="render",prefetch:o="none",relative:C,reloadDocument:f,replace:d,unstable_mask:p,state:y,target:m,to:x,preventScrollReset:g,viewTransition:M,unstable_defaultShouldRevalidate:S,...E},O){let{basename:N,navigator:D,unstable_useTransitions:Y}=k.useContext(G6),U=typeof x=="string"&&Do.test(x),G=vo(x,N);x=G.to;let Z=Bf(x,{relative:C}),a0=I6(),W=null;if(p){let z0=In(p,[],a0.unstable_mask?a0.unstable_mask.pathname:"/",!0);N!=="/"&&(z0.pathname=z0.pathname==="/"?N:s8([N,z0.pathname])),W=D.createHref(z0)}let[I,m0,t0]=yd(o,E),y0=Ed(x,{replace:d,unstable_mask:p,state:y,target:m,preventScrollReset:g,relative:C,viewTransition:M,unstable_defaultShouldRevalidate:S,unstable_useTransitions:Y});function v0(z0){i&&i(z0),z0.defaultPrevented||y0(z0)}let W0=!(G.isExternal||f),_0=k.createElement("a",{...E,...t0,href:(W0?W:void 0)||G.absoluteURL||Z,onClick:W0?v0:i,ref:zd(O,m0),target:m,"data-discover":!U&&r==="render"?"true":void 0});return I&&!U?k.createElement(k.Fragment,null,_0,k.createElement(xd,{page:Z})):_0});N0.displayName="Link";var Sd=k.forwardRef(function({"aria-current":i="page",caseSensitive:r=!1,className:o="",end:C=!1,style:f,to:d,viewTransition:p,children:y,...m},x){let g=_7(d,{relative:m.relative}),M=I6(),S=k.useContext(A3),{navigator:E,basename:O}=k.useContext(G6),N=S!=null&&Od(g)&&p===!0,D=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,Y=M.pathname,U=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;r||(Y=Y.toLowerCase(),U=U?U.toLowerCase():null,D=D.toLowerCase()),U&&O&&(U=T8(U,O)||U);const G=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let Z=Y===D||!C&&Y.startsWith(D)&&Y.charAt(G)==="/",a0=U!=null&&(U===D||!C&&U.startsWith(D)&&U.charAt(D.length)==="/"),W={isActive:Z,isPending:a0,isTransitioning:N},I=Z?i:void 0,m0;typeof o=="function"?m0=o(W):m0=[o,Z?"active":null,a0?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let t0=typeof f=="function"?f(W):f;return k.createElement(N0,{...m,"aria-current":I,className:m0,ref:x,style:t0,to:d,viewTransition:p},typeof y=="function"?y(W):y)});Sd.displayName="NavLink";var kd=k.forwardRef(({discover:a="render",fetcherKey:i,navigate:r,reloadDocument:o,replace:C,state:f,method:d=c3,action:p,onSubmit:y,relative:m,preventScrollReset:x,viewTransition:g,unstable_defaultShouldRevalidate:M,...S},E)=>{let{unstable_useTransitions:O}=k.useContext(G6),N=Dd(),D=Nd(p,{relative:m}),Y=d.toLowerCase()==="get"?"get":"post",U=typeof p=="string"&&Do.test(p),G=Z=>{if(y&&y(Z),Z.defaultPrevented)return;Z.preventDefault();let a0=Z.nativeEvent.submitter,W=(a0==null?void 0:a0.getAttribute("formmethod"))||d,I=()=>N(a0||Z.currentTarget,{fetcherKey:i,method:W,navigate:r,replace:C,state:f,relative:m,preventScrollReset:x,viewTransition:g,unstable_defaultShouldRevalidate:M});O&&r!==!1?k.startTransition(()=>I()):I()};return k.createElement("form",{ref:E,method:Y,action:D,onSubmit:o?y:G,...S,"data-discover":!U&&a==="render"?"true":void 0})});kd.displayName="Form";function Td(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function No(a){let i=k.useContext(j2);return B0(i,Td(a)),i}function Ed(a,{target:i,replace:r,unstable_mask:o,state:C,preventScrollReset:f,relative:d,viewTransition:p,unstable_defaultShouldRevalidate:y,unstable_useTransitions:m}={}){let x=To(),g=I6(),M=_7(a,{relative:d});return k.useCallback(S=>{if(id(S,i)){S.preventDefault();let E=r!==void 0?r:A7(g)===A7(M),O=()=>x(a,{replace:E,unstable_mask:o,state:C,preventScrollReset:f,relative:d,viewTransition:p,unstable_defaultShouldRevalidate:y});m?k.startTransition(()=>O()):O()}},[g,x,M,r,o,C,i,a,f,d,p,y,m])}function Ad(a){$6(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let i=k.useRef(Tn(a)),r=k.useRef(!1),o=I6(),C=k.useMemo(()=>ld(o.search,r.current?null:i.current),[o.search]),f=To(),d=k.useCallback((p,y)=>{const m=Tn(typeof p=="function"?p(new URLSearchParams(C)):p);r.current=!0,f("?"+m,y)},[f,C]);return[C,d]}var wd=0,Rd=()=>`__${String(++wd)}__`;function Dd(){let{router:a}=No("useSubmit"),{basename:i}=k.useContext(G6),r=Jf(),o=a.fetch,C=a.navigate;return k.useCallback(async(f,d={})=>{let{action:p,method:y,encType:m,formData:x,body:g}=rd(f,i);if(d.navigate===!1){let M=d.fetcherKey||Rd();await o(M,r,d.action||p,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:x,body:g,formMethod:d.method||y,formEncType:d.encType||m,flushSync:d.flushSync})}else await C(d.action||p,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:x,body:g,formMethod:d.method||y,formEncType:d.encType||m,replace:d.replace,state:d.state,fromRouteId:r,flushSync:d.flushSync,viewTransition:d.viewTransition})},[o,C,i,r])}function Nd(a,{relative:i}={}){let{basename:r}=k.useContext(G6),o=k.useContext(E8);B0(o,"useFormAction must be used inside a RouteContext");let[C]=o.matches.slice(-1),f={..._7(a||".",{relative:i})},d=I6();if(a==null){f.search=d.search;let p=new URLSearchParams(f.search),y=p.getAll("index");if(y.some(x=>x==="")){p.delete("index"),y.filter(g=>g).forEach(g=>p.append("index",g));let x=p.toString();f.search=x?`?${x}`:""}}return(!a||a===".")&&C.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(f.pathname=f.pathname==="/"?r:s8([r,f.pathname])),A7(f)}function Od(a,{relative:i}={}){let r=k.useContext(jo);B0(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=No("useViewTransitionState"),C=_7(a,{relative:i});if(!r.isTransitioning)return!1;let f=T8(r.currentLocation.pathname,o)||r.currentLocation.pathname,d=T8(r.nextLocation.pathname,o)||r.nextLocation.pathname;return g3(C.pathname,d)!=null||g3(C.pathname,f)!=null}const Oo=k.createContext({});function Vd(a){const i=k.useRef(null);return i.current===null&&(i.current=a()),i.current}const _d=typeof window<"u",Bd=_d?k.useLayoutEffect:k.useEffect,ot=k.createContext(null);function rt(a,i){a.indexOf(i)===-1&&a.push(i)}function v3(a,i){const r=a.indexOf(i);r>-1&&a.splice(r,1)}const r8=(a,i,r)=>r>i?i:r<a?a:r;let ut=()=>{};const a1={},Vo=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);function _o(a){return typeof a=="object"&&a!==null}const Bo=a=>/^0[^.\s]+$/u.test(a);function Uo(a){let i;return()=>(i===void 0&&(i=a()),i)}const Y6=a=>a,Ud=(a,i)=>r=>i(a(r)),B7=(...a)=>a.reduce(Ud),w7=(a,i,r)=>{const o=i-a;return o===0?1:(r-a)/o};class ct{constructor(){this.subscriptions=[]}add(i){return rt(this.subscriptions,i),()=>v3(this.subscriptions,i)}notify(i,r,o){const C=this.subscriptions.length;if(C)if(C===1)this.subscriptions[0](i,r,o);else for(let f=0;f<C;f++){const d=this.subscriptions[f];d&&d(i,r,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const w6=a=>a*1e3,q6=a=>a/1e3;function Lo(a,i){return i?a*(1e3/i):0}const Ho=(a,i,r)=>(((1-3*r+3*i)*a+(3*r-6*i))*a+3*i)*a,Ld=1e-7,Hd=12;function qd(a,i,r,o,C){let f,d,p=0;do d=i+(r-i)/2,f=Ho(d,o,C)-a,f>0?r=d:i=d;while(Math.abs(f)>Ld&&++p<Hd);return d}function U7(a,i,r,o){if(a===i&&r===o)return Y6;const C=f=>qd(f,0,1,a,r);return f=>f===0||f===1?f:Ho(C(f),i,o)}const qo=a=>i=>i<=.5?a(2*i)/2:(2-a(2*(1-i)))/2,Yo=a=>i=>1-a(1-i),Go=U7(.33,1.53,.69,.99),Ct=Yo(Go),Xo=qo(Ct),Zo=a=>a>=1?1:(a*=2)<1?.5*Ct(a):.5*(2-Math.pow(2,-10*(a-1))),ft=a=>1-Math.sin(Math.acos(a)),Ko=Yo(ft),Qo=qo(ft),Yd=U7(.42,0,1,1),Gd=U7(0,0,.58,1),Jo=U7(.42,0,.58,1),Xd=a=>Array.isArray(a)&&typeof a[0]!="number",Po=a=>Array.isArray(a)&&typeof a[0]=="number",Zd={linear:Y6,easeIn:Yd,easeInOut:Jo,easeOut:Gd,circIn:ft,circInOut:Qo,circOut:Ko,backIn:Ct,backInOut:Xo,backOut:Go,anticipate:Zo},Kd=a=>typeof a=="string",$l=a=>{if(Po(a)){ut(a.length===4);const[i,r,o,C]=a;return U7(i,r,o,C)}else if(Kd(a))return Zd[a];return a},s3=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Qd(a,i){let r=new Set,o=new Set,C=!1,f=!1;const d=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function y(x){d.has(x)&&(m.schedule(x),a()),x(p)}const m={schedule:(x,g=!1,M=!1)=>{const E=M&&C?r:o;return g&&d.add(x),E.add(x),x},cancel:x=>{o.delete(x),d.delete(x)},process:x=>{if(p=x,C){f=!0;return}C=!0;const g=r;r=o,o=g,r.forEach(y),r.clear(),C=!1,f&&(f=!1,m.process(x))}};return m}const Jd=40;function Fo(a,i){let r=!1,o=!0;const C={delta:0,timestamp:0,isProcessing:!1},f=()=>r=!0,d=s3.reduce((U,G)=>(U[G]=Qd(f),U),{}),{setup:p,read:y,resolveKeyframes:m,preUpdate:x,update:g,preRender:M,render:S,postRender:E}=d,O=()=>{const U=a1.useManualTiming,G=U?C.timestamp:performance.now();r=!1,U||(C.delta=o?1e3/60:Math.max(Math.min(G-C.timestamp,Jd),1)),C.timestamp=G,C.isProcessing=!0,p.process(C),y.process(C),m.process(C),x.process(C),g.process(C),M.process(C),S.process(C),E.process(C),C.isProcessing=!1,r&&i&&(o=!1,a(O))},N=()=>{r=!0,o=!0,C.isProcessing||a(O)};return{schedule:s3.reduce((U,G)=>{const Z=d[G];return U[G]=(a0,W=!1,I=!1)=>(r||N(),Z.schedule(a0,W,I)),U},{}),cancel:U=>{for(let G=0;G<s3.length;G++)d[s3[G]].cancel(U)},state:C,steps:d}}const{schedule:w0,cancel:i1,state:l6,steps:un}=Fo(typeof requestAnimationFrame<"u"?requestAnimationFrame:Y6,!0);let f3;function Pd(){f3=void 0}const c6={now:()=>(f3===void 0&&c6.set(l6.isProcessing||a1.useManualTiming?l6.timestamp:performance.now()),f3),set:a=>{f3=a,queueMicrotask(Pd)}},Wo=a=>i=>typeof i=="string"&&i.startsWith(a),$o=Wo("--"),Fd=Wo("var(--"),dt=a=>Fd(a)?Wd.test(a.split("/*")[0].trim()):!1,Wd=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Il(a){return typeof a!="string"?!1:a.split("/*")[0].includes("var(--")}const b2={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},R7={...b2,transform:a=>r8(0,1,a)},o3={...b2,default:1},S7=a=>Math.round(a*1e5)/1e5,ht=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function $d(a){return a==null}const Id=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,pt=(a,i)=>r=>!!(typeof r=="string"&&Id.test(r)&&r.startsWith(a)||i&&!$d(r)&&Object.prototype.hasOwnProperty.call(r,i)),Io=(a,i,r)=>o=>{if(typeof o!="string")return o;const[C,f,d,p]=o.match(ht);return{[a]:parseFloat(C),[i]:parseFloat(f),[r]:parseFloat(d),alpha:p!==void 0?parseFloat(p):1}},nh=a=>r8(0,255,a),cn={...b2,transform:a=>Math.round(nh(a))},E1={test:pt("rgb","red"),parse:Io("red","green","blue"),transform:({red:a,green:i,blue:r,alpha:o=1})=>"rgba("+cn.transform(a)+", "+cn.transform(i)+", "+cn.transform(r)+", "+S7(R7.transform(o))+")"};function th(a){let i="",r="",o="",C="";return a.length>5?(i=a.substring(1,3),r=a.substring(3,5),o=a.substring(5,7),C=a.substring(7,9)):(i=a.substring(1,2),r=a.substring(2,3),o=a.substring(3,4),C=a.substring(4,5),i+=i,r+=r,o+=o,C+=C),{red:parseInt(i,16),green:parseInt(r,16),blue:parseInt(o,16),alpha:C?parseInt(C,16)/255:1}}const En={test:pt("#"),parse:th,transform:E1.transform},L7=a=>({test:i=>typeof i=="string"&&i.endsWith(a)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${a}`}),n1=L7("deg"),o8=L7("%"),P=L7("px"),eh=L7("vh"),ah=L7("vw"),ns={...o8,parse:a=>o8.parse(a)/100,transform:a=>o8.transform(a*100)},y2={test:pt("hsl","hue"),parse:Io("hue","saturation","lightness"),transform:({hue:a,saturation:i,lightness:r,alpha:o=1})=>"hsla("+Math.round(a)+", "+o8.transform(S7(i))+", "+o8.transform(S7(r))+", "+S7(R7.transform(o))+")"},J0={test:a=>E1.test(a)||En.test(a)||y2.test(a),parse:a=>E1.test(a)?E1.parse(a):y2.test(a)?y2.parse(a):En.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?E1.transform(a):y2.transform(a),getAnimatableNone:a=>{const i=J0.parse(a);return i.alpha=0,J0.transform(i)}},ih=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function lh(a){var i,r;return isNaN(a)&&typeof a=="string"&&(((i=a.match(ht))==null?void 0:i.length)||0)+(((r=a.match(ih))==null?void 0:r.length)||0)>0}const nr="number",tr="color",sh="var",oh="var(",ts="${}",rh=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function v2(a){const i=a.toString(),r=[],o={color:[],number:[],var:[]},C=[];let f=0;const p=i.replace(rh,y=>(J0.test(y)?(o.color.push(f),C.push(tr),r.push(J0.parse(y))):y.startsWith(oh)?(o.var.push(f),C.push(sh),r.push(y)):(o.number.push(f),C.push(nr),r.push(parseFloat(y))),++f,ts)).split(ts);return{values:r,split:p,indexes:o,types:C}}function uh(a){return v2(a).values}function er({split:a,types:i}){const r=a.length;return o=>{let C="";for(let f=0;f<r;f++)if(C+=a[f],o[f]!==void 0){const d=i[f];d===nr?C+=S7(o[f]):d===tr?C+=J0.transform(o[f]):C+=o[f]}return C}}function ch(a){return er(v2(a))}const Ch=a=>typeof a=="number"?0:J0.test(a)?J0.getAnimatableNone(a):a,fh=(a,i)=>typeof a=="number"?i!=null&&i.trim().endsWith("/")?a:0:Ch(a);function dh(a){const i=v2(a);return er(i)(i.values.map((o,C)=>fh(o,i.split[C])))}const W6={test:lh,parse:uh,createTransformer:ch,getAnimatableNone:dh};function Cn(a,i,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?a+(i-a)*6*r:r<1/2?i:r<2/3?a+(i-a)*(2/3-r)*6:a}function hh({hue:a,saturation:i,lightness:r,alpha:o}){a/=360,i/=100,r/=100;let C=0,f=0,d=0;if(!i)C=f=d=r;else{const p=r<.5?r*(1+i):r+i-r*i,y=2*r-p;C=Cn(y,p,a+1/3),f=Cn(y,p,a),d=Cn(y,p,a-1/3)}return{red:Math.round(C*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:o}}function M3(a,i){return r=>r>0?i:a}const O0=(a,i,r)=>a+(i-a)*r,fn=(a,i,r)=>{const o=a*a,C=r*(i*i-o)+o;return C<0?0:Math.sqrt(C)},ph=[En,E1,y2],mh=a=>ph.find(i=>i.test(a));function es(a){const i=mh(a);if(!i)return!1;let r=i.parse(a);return i===y2&&(r=hh(r)),r}const as=(a,i)=>{const r=es(a),o=es(i);if(!r||!o)return M3(a,i);const C={...r};return f=>(C.red=fn(r.red,o.red,f),C.green=fn(r.green,o.green,f),C.blue=fn(r.blue,o.blue,f),C.alpha=O0(r.alpha,o.alpha,f),E1.transform(C))},An=new Set(["none","hidden"]);function yh(a,i){return An.has(a)?r=>r<=0?a:i:r=>r>=1?i:a}function xh(a,i){return r=>O0(a,i,r)}function mt(a){return typeof a=="number"?xh:typeof a=="string"?dt(a)?M3:J0.test(a)?as:Mh:Array.isArray(a)?ar:typeof a=="object"?J0.test(a)?as:gh:M3}function ar(a,i){const r=[...a],o=r.length,C=a.map((f,d)=>mt(f)(f,i[d]));return f=>{for(let d=0;d<o;d++)r[d]=C[d](f);return r}}function gh(a,i){const r={...a,...i},o={};for(const C in r)a[C]!==void 0&&i[C]!==void 0&&(o[C]=mt(a[C])(a[C],i[C]));return C=>{for(const f in o)r[f]=o[f](C);return r}}function vh(a,i){const r=[],o={color:0,var:0,number:0};for(let C=0;C<i.values.length;C++){const f=i.types[C],d=a.indexes[f][o[f]],p=a.values[d]??0;r[C]=p,o[f]++}return r}const Mh=(a,i)=>{const r=W6.createTransformer(i),o=v2(a),C=v2(i);return o.indexes.var.length===C.indexes.var.length&&o.indexes.color.length===C.indexes.color.length&&o.indexes.number.length>=C.indexes.number.length?An.has(a)&&!C.values.length||An.has(i)&&!o.values.length?yh(a,i):B7(ar(vh(o,C),C.values),r):M3(a,i)};function ir(a,i,r){return typeof a=="number"&&typeof i=="number"&&typeof r=="number"?O0(a,i,r):mt(a)(a,i)}const zh=a=>{const i=({timestamp:r})=>a(r);return{start:(r=!0)=>w0.update(i,r),stop:()=>i1(i),now:()=>l6.isProcessing?l6.timestamp:c6.now()}},lr=(a,i,r=10)=>{let o="";const C=Math.max(Math.round(i/r),2);for(let f=0;f<C;f++)o+=Math.round(a(f/(C-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},z3=2e4;function yt(a){let i=0;const r=50;let o=a.next(i);for(;!o.done&&i<z3;)i+=r,o=a.next(i);return i>=z3?1/0:i}function jh(a,i=100,r){const o=r({...a,keyframes:[0,i]}),C=Math.min(yt(o),z3);return{type:"keyframes",ease:f=>o.next(C*f).value/i,duration:q6(C)}}const H0={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function wn(a,i){return a*Math.sqrt(1-i*i)}const bh=12;function Sh(a,i,r){let o=r;for(let C=1;C<bh;C++)o=o-a(o)/i(o);return o}const dn=.001;function kh({duration:a=H0.duration,bounce:i=H0.bounce,velocity:r=H0.velocity,mass:o=H0.mass}){let C,f,d=1-i;d=r8(H0.minDamping,H0.maxDamping,d),a=r8(H0.minDuration,H0.maxDuration,q6(a)),d<1?(C=m=>{const x=m*d,g=x*a,M=x-r,S=wn(m,d),E=Math.exp(-g);return dn-M/S*E},f=m=>{const g=m*d*a,M=g*r+r,S=Math.pow(d,2)*Math.pow(m,2)*a,E=Math.exp(-g),O=wn(Math.pow(m,2),d);return(-C(m)+dn>0?-1:1)*((M-S)*E)/O}):(C=m=>{const x=Math.exp(-m*a),g=(m-r)*a+1;return-dn+x*g},f=m=>{const x=Math.exp(-m*a),g=(r-m)*(a*a);return x*g});const p=5/a,y=Sh(C,f,p);if(a=w6(a),isNaN(y))return{stiffness:H0.stiffness,damping:H0.damping,duration:a};{const m=Math.pow(y,2)*o;return{stiffness:m,damping:d*2*Math.sqrt(o*m),duration:a}}}const Th=["duration","bounce"],Eh=["stiffness","damping","mass"];function is(a,i){return i.some(r=>a[r]!==void 0)}function Ah(a){let i={velocity:H0.velocity,stiffness:H0.stiffness,damping:H0.damping,mass:H0.mass,isResolvedFromDuration:!1,...a};if(!is(a,Eh)&&is(a,Th))if(i.velocity=0,a.visualDuration){const r=a.visualDuration,o=2*Math.PI/(r*1.2),C=o*o,f=2*r8(.05,1,1-(a.bounce||0))*Math.sqrt(C);i={...i,mass:H0.mass,stiffness:C,damping:f}}else{const r=kh({...a,velocity:0});i={...i,...r,mass:H0.mass},i.isResolvedFromDuration=!0}return i}function j3(a=H0.visualDuration,i=H0.bounce){const r=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:i}:a;let{restSpeed:o,restDelta:C}=r;const f=r.keyframes[0],d=r.keyframes[r.keyframes.length-1],p={done:!1,value:f},{stiffness:y,damping:m,mass:x,duration:g,velocity:M,isResolvedFromDuration:S}=Ah({...r,velocity:-q6(r.velocity||0)}),E=M||0,O=m/(2*Math.sqrt(y*x)),N=d-f,D=q6(Math.sqrt(y/x)),Y=Math.abs(N)<5;o||(o=Y?H0.restSpeed.granular:H0.restSpeed.default),C||(C=Y?H0.restDelta.granular:H0.restDelta.default);let U,G,Z,a0,W,I;if(O<1)Z=wn(D,O),a0=(E+O*D*N)/Z,U=t0=>{const y0=Math.exp(-O*D*t0);return d-y0*(a0*Math.sin(Z*t0)+N*Math.cos(Z*t0))},W=O*D*a0+N*Z,I=O*D*N-a0*Z,G=t0=>Math.exp(-O*D*t0)*(W*Math.sin(Z*t0)+I*Math.cos(Z*t0));else if(O===1){U=y0=>d-Math.exp(-D*y0)*(N+(E+D*N)*y0);const t0=E+D*N;G=y0=>Math.exp(-D*y0)*(D*t0*y0-E)}else{const t0=D*Math.sqrt(O*O-1);U=_0=>{const z0=Math.exp(-O*D*_0),_=Math.min(t0*_0,300);return d-z0*((E+O*D*N)*Math.sinh(_)+t0*N*Math.cosh(_))/t0};const y0=(E+O*D*N)/t0,v0=O*D*y0-N*t0,W0=O*D*N-y0*t0;G=_0=>{const z0=Math.exp(-O*D*_0),_=Math.min(t0*_0,300);return z0*(v0*Math.sinh(_)+W0*Math.cosh(_))}}const m0={calculatedDuration:S&&g||null,velocity:t0=>w6(G(t0)),next:t0=>{if(!S&&O<1){const v0=Math.exp(-O*D*t0),W0=Math.sin(Z*t0),_0=Math.cos(Z*t0),z0=d-v0*(a0*W0+N*_0),_=w6(v0*(W*W0+I*_0));return p.done=Math.abs(_)<=o&&Math.abs(d-z0)<=C,p.value=p.done?d:z0,p}const y0=U(t0);if(S)p.done=t0>=g;else{const v0=w6(G(t0));p.done=Math.abs(v0)<=o&&Math.abs(d-y0)<=C}return p.value=p.done?d:y0,p},toString:()=>{const t0=Math.min(yt(m0),z3),y0=lr(v0=>m0.next(t0*v0).value,t0,30);return t0+"ms "+y0},toTransition:()=>{}};return m0}j3.applyToOptions=a=>{const i=jh(a,100,j3);return a.ease=i.ease,a.duration=w6(i.duration),a.type="keyframes",a};const wh=5;function sr(a,i,r){const o=Math.max(i-wh,0);return Lo(r-a(o),i-o)}function Rn({keyframes:a,velocity:i=0,power:r=.8,timeConstant:o=325,bounceDamping:C=10,bounceStiffness:f=500,modifyTarget:d,min:p,max:y,restDelta:m=.5,restSpeed:x}){const g=a[0],M={done:!1,value:g},S=I=>p!==void 0&&I<p||y!==void 0&&I>y,E=I=>p===void 0?y:y===void 0||Math.abs(p-I)<Math.abs(y-I)?p:y;let O=r*i;const N=g+O,D=d===void 0?N:d(N);D!==N&&(O=D-g);const Y=I=>-O*Math.exp(-I/o),U=I=>D+Y(I),G=I=>{const m0=Y(I),t0=U(I);M.done=Math.abs(m0)<=m,M.value=M.done?D:t0};let Z,a0;const W=I=>{S(M.value)&&(Z=I,a0=j3({keyframes:[M.value,E(M.value)],velocity:sr(U,I,M.value),damping:C,stiffness:f,restDelta:m,restSpeed:x}))};return W(0),{calculatedDuration:null,next:I=>{let m0=!1;return!a0&&Z===void 0&&(m0=!0,G(I),W(I)),Z!==void 0&&I>=Z?a0.next(I-Z):(!m0&&G(I),M)}}}function Rh(a,i,r){const o=[],C=r||a1.mix||ir,f=a.length-1;for(let d=0;d<f;d++){let p=C(a[d],a[d+1]);if(i){const y=Array.isArray(i)?i[d]||Y6:i;p=B7(y,p)}o.push(p)}return o}function Dh(a,i,{clamp:r=!0,ease:o,mixer:C}={}){const f=a.length;if(ut(f===i.length),f===1)return()=>i[0];if(f===2&&i[0]===i[1])return()=>i[1];const d=a[0]===a[1];a[0]>a[f-1]&&(a=[...a].reverse(),i=[...i].reverse());const p=Rh(i,o,C),y=p.length,m=x=>{if(d&&x<a[0])return i[0];let g=0;if(y>1)for(;g<a.length-2&&!(x<a[g+1]);g++);const M=w7(a[g],a[g+1],x);return p[g](M)};return r?x=>m(r8(a[0],a[f-1],x)):m}function Nh(a,i){const r=a[a.length-1];for(let o=1;o<=i;o++){const C=w7(0,i,o);a.push(O0(r,1,C))}}function Oh(a){const i=[0];return Nh(i,a.length-1),i}function Vh(a,i){return a.map(r=>r*i)}function _h(a,i){return a.map(()=>i||Jo).splice(0,a.length-1)}function k7({duration:a=300,keyframes:i,times:r,ease:o="easeInOut"}){const C=Xd(o)?o.map($l):$l(o),f={done:!1,value:i[0]},d=Vh(r&&r.length===i.length?r:Oh(i),a),p=Dh(d,i,{ease:Array.isArray(C)?C:_h(i,C)});return{calculatedDuration:a,next:y=>(f.value=p(y),f.done=y>=a,f)}}const Bh=a=>a!==null;function R3(a,{repeat:i,repeatType:r="loop"},o,C=1){const f=a.filter(Bh),p=C<0||i&&r!=="loop"&&i%2===1?0:f.length-1;return!p||o===void 0?f[p]:o}const Uh={decay:Rn,inertia:Rn,tween:k7,keyframes:k7,spring:j3};function or(a){typeof a.type=="string"&&(a.type=Uh[a.type])}class xt{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,r){return this.finished.then(i,r)}}const Lh=a=>a/100;class b3 extends xt{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var o,C;const{motionValue:r}=this.options;r&&r.updatedAt!==c6.now()&&this.tick(c6.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(C=(o=this.options).onStop)==null||C.call(o))},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;or(i);const{type:r=k7,repeat:o=0,repeatDelay:C=0,repeatType:f,velocity:d=0}=i;let{keyframes:p}=i;const y=r||k7;y!==k7&&typeof p[0]!="number"&&(this.mixKeyframes=B7(Lh,ir(p[0],p[1])),p=[0,100]);const m=y({...i,keyframes:p});f==="mirror"&&(this.mirroredGenerator=y({...i,keyframes:[...p].reverse(),velocity:-d})),m.calculatedDuration===null&&(m.calculatedDuration=yt(m));const{calculatedDuration:x}=m;this.calculatedDuration=x,this.resolvedDuration=x+C,this.totalDuration=this.resolvedDuration*(o+1)-C,this.generator=m}updateTime(i){const r=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(i,r=!1){const{generator:o,totalDuration:C,mixKeyframes:f,mirroredGenerator:d,resolvedDuration:p,calculatedDuration:y}=this;if(this.startTime===null)return o.next(0);const{delay:m=0,keyframes:x,repeat:g,repeatType:M,repeatDelay:S,type:E,onUpdate:O,finalKeyframe:N}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-C/this.speed,this.startTime)),r?this.currentTime=i:this.updateTime(i);const D=this.currentTime-m*(this.playbackSpeed>=0?1:-1),Y=this.playbackSpeed>=0?D<0:D>C;this.currentTime=Math.max(D,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=C);let U=this.currentTime,G=o;if(g){const I=Math.min(this.currentTime,C)/p;let m0=Math.floor(I),t0=I%1;!t0&&I>=1&&(t0=1),t0===1&&m0--,m0=Math.min(m0,g+1),!!(m0%2)&&(M==="reverse"?(t0=1-t0,S&&(t0-=S/p)):M==="mirror"&&(G=d)),U=r8(0,1,t0)*p}let Z;Y?(this.delayState.value=x[0],Z=this.delayState):Z=G.next(U),f&&!Y&&(Z.value=f(Z.value));let{done:a0}=Z;!Y&&y!==null&&(a0=this.playbackSpeed>=0?this.currentTime>=C:this.currentTime<=0);const W=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&a0);return W&&E!==Rn&&(Z.value=R3(x,this.options,N,this.speed)),O&&O(Z.value),W&&this.finish(),Z}then(i,r){return this.finished.then(i,r)}get duration(){return q6(this.calculatedDuration)}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+q6(i)}get time(){return q6(this.currentTime)}set time(i){i=w6(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=i,this.tick(i))}getGeneratorVelocity(){const i=this.currentTime;if(i<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(i);const r=this.generator.next(i).value;return sr(o=>this.generator.next(o).value,i,r)}get speed(){return this.playbackSpeed}set speed(i){const r=this.playbackSpeed!==i;r&&this.driver&&this.updateTime(c6.now()),this.playbackSpeed=i,r&&this.driver&&(this.time=q6(this.currentTime))}play(){var C,f;if(this.isStopped)return;const{driver:i=zh,startTime:r}=this.options;this.driver||(this.driver=i(d=>this.tick(d))),(f=(C=this.options).onPlay)==null||f.call(C);const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=r??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(c6.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var i,r;this.notifyFinished(),this.teardown(),this.state="finished",(r=(i=this.options).onComplete)==null||r.call(i)}cancel(){var i,r;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(r=(i=this.options).onCancel)==null||r.call(i)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){var r;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(r=this.driver)==null||r.stop(),i.observe(this)}}function Hh(a){for(let i=1;i<a.length;i++)a[i]??(a[i]=a[i-1])}const A1=a=>a*180/Math.PI,Dn=a=>{const i=A1(Math.atan2(a[1],a[0]));return Nn(i)},qh={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:Dn,rotateZ:Dn,skewX:a=>A1(Math.atan(a[1])),skewY:a=>A1(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},Nn=a=>(a=a%360,a<0&&(a+=360),a),ls=Dn,ss=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),os=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),Yh={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ss,scaleY:os,scale:a=>(ss(a)+os(a))/2,rotateX:a=>Nn(A1(Math.atan2(a[6],a[5]))),rotateY:a=>Nn(A1(Math.atan2(-a[2],a[0]))),rotateZ:ls,rotate:ls,skewX:a=>A1(Math.atan(a[4])),skewY:a=>A1(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function On(a){return a.includes("scale")?1:0}function Vn(a,i){if(!a||a==="none")return On(i);const r=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,C;if(r)o=Yh,C=r;else{const p=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=qh,C=p}if(!C)return On(i);const f=o[i],d=C[1].split(",").map(Xh);return typeof f=="function"?f(d):d[f]}const Gh=(a,i)=>{const{transform:r="none"}=getComputedStyle(a);return Vn(r,i)};function Xh(a){return parseFloat(a.trim())}const S2=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],k2=new Set(S2),rs=a=>a===b2||a===P,Zh=new Set(["x","y","z"]),Kh=S2.filter(a=>!Zh.has(a));function Qh(a){const i=[];return Kh.forEach(r=>{const o=a.getValue(r);o!==void 0&&(i.push([r,o.get()]),o.set(r.startsWith("scale")?1:0))}),i}const e1={width:({x:a},{paddingLeft:i="0",paddingRight:r="0",boxSizing:o})=>{const C=a.max-a.min;return o==="border-box"?C:C-parseFloat(i)-parseFloat(r)},height:({y:a},{paddingTop:i="0",paddingBottom:r="0",boxSizing:o})=>{const C=a.max-a.min;return o==="border-box"?C:C-parseFloat(i)-parseFloat(r)},top:(a,{top:i})=>parseFloat(i),left:(a,{left:i})=>parseFloat(i),bottom:({y:a},{top:i})=>parseFloat(i)+(a.max-a.min),right:({x:a},{left:i})=>parseFloat(i)+(a.max-a.min),x:(a,{transform:i})=>Vn(i,"x"),y:(a,{transform:i})=>Vn(i,"y")};e1.translateX=e1.x;e1.translateY=e1.y;const w1=new Set;let _n=!1,Bn=!1,Un=!1;function rr(){if(Bn){const a=Array.from(w1).filter(o=>o.needsMeasurement),i=new Set(a.map(o=>o.element)),r=new Map;i.forEach(o=>{const C=Qh(o);C.length&&(r.set(o,C),o.render())}),a.forEach(o=>o.measureInitialState()),i.forEach(o=>{o.render();const C=r.get(o);C&&C.forEach(([f,d])=>{var p;(p=o.getValue(f))==null||p.set(d)})}),a.forEach(o=>o.measureEndState()),a.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Bn=!1,_n=!1,w1.forEach(a=>a.complete(Un)),w1.clear()}function ur(){w1.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(Bn=!0)})}function Jh(){Un=!0,ur(),rr(),Un=!1}class gt{constructor(i,r,o,C,f,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=r,this.name=o,this.motionValue=C,this.element=f,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(w1.add(this),_n||(_n=!0,w0.read(ur),w0.resolveKeyframes(rr))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:r,element:o,motionValue:C}=this;if(i[0]===null){const f=C==null?void 0:C.get(),d=i[i.length-1];if(f!==void 0)i[0]=f;else if(o&&r){const p=o.readValue(r,d);p!=null&&(i[0]=p)}i[0]===void 0&&(i[0]=d),C&&f===void 0&&C.set(i[0])}Hh(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),w1.delete(this)}cancel(){this.state==="scheduled"&&(w1.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Ph=a=>a.startsWith("--");function cr(a,i,r){Ph(i)?a.style.setProperty(i,r):a.style[i]=r}const Fh={};function Cr(a,i){const r=Uo(a);return()=>Fh[i]??r()}const Wh=Cr(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),fr=Cr(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),b7=([a,i,r,o])=>`cubic-bezier(${a}, ${i}, ${r}, ${o})`,us={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:b7([0,.65,.55,1]),circOut:b7([.55,0,1,.45]),backIn:b7([.31,.01,.66,-.59]),backOut:b7([.33,1.53,.69,.99])};function dr(a,i){if(a)return typeof a=="function"?fr()?lr(a,i):"ease-out":Po(a)?b7(a):Array.isArray(a)?a.map(r=>dr(r,i)||us.easeOut):us[a]}function $h(a,i,r,{delay:o=0,duration:C=300,repeat:f=0,repeatType:d="loop",ease:p="easeOut",times:y}={},m=void 0){const x={[i]:r};y&&(x.offset=y);const g=dr(p,C);Array.isArray(g)&&(x.easing=g);const M={delay:o,duration:C,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"};return m&&(M.pseudoElement=m),a.animate(x,M)}function hr(a){return typeof a=="function"&&"applyToOptions"in a}function Ih({type:a,...i}){return hr(a)&&fr()?a.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class pr extends xt{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!i)return;const{element:r,name:o,keyframes:C,pseudoElement:f,allowFlatten:d=!1,finalKeyframe:p,onComplete:y}=i;this.isPseudoElement=!!f,this.allowFlatten=d,this.options=i,ut(typeof i.type!="string");const m=Ih(i);this.animation=$h(r,o,C,m,f),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const x=R3(C,this.options,p,this.speed);this.updateMotionValue&&this.updateMotionValue(x),cr(r,o,x),this.animation.cancel()}y==null||y(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var i,r;(r=(i=this.animation).finish)==null||r.call(i)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var r,o,C;const i=(r=this.options)==null?void 0:r.element;!this.isPseudoElement&&(i!=null&&i.isConnected)&&((C=(o=this.animation).commitStyles)==null||C.call(o))}get duration(){var r,o;const i=((o=(r=this.animation.effect)==null?void 0:r.getComputedTiming)==null?void 0:o.call(r).duration)||0;return q6(Number(i))}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+q6(i)}get time(){return q6(Number(this.animation.currentTime)||0)}set time(i){const r=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=w6(i),r&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(i){this.manualStartTime=this.animation.startTime=i}attachTimeline({timeline:i,rangeStart:r,rangeEnd:o,observe:C}){var f;return this.allowFlatten&&((f=this.animation.effect)==null||f.updateTiming({easing:"linear"})),this.animation.onfinish=null,i&&Wh()?(this.animation.timeline=i,r&&(this.animation.rangeStart=r),o&&(this.animation.rangeEnd=o),Y6):C(this)}}const mr={anticipate:Zo,backInOut:Xo,circInOut:Qo};function np(a){return a in mr}function tp(a){typeof a.ease=="string"&&np(a.ease)&&(a.ease=mr[a.ease])}const hn=10;class ep extends pr{constructor(i){tp(i),or(i),super(i),i.startTime!==void 0&&i.autoplay!==!1&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:r,onUpdate:o,onComplete:C,element:f,...d}=this.options;if(!r)return;if(i!==void 0){r.set(i);return}const p=new b3({...d,autoplay:!1}),y=Math.max(hn,c6.now()-this.startTime),m=r8(0,hn,y-hn),x=p.sample(y).value,{name:g}=this.options;f&&g&&cr(f,g,x),r.setWithVelocity(p.sample(Math.max(0,y-m)).value,x,m),p.stop()}}const cs=(a,i)=>i==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(W6.test(a)||a==="0")&&!a.startsWith("url("));function ap(a){const i=a[0];if(a.length===1)return!0;for(let r=0;r<a.length;r++)if(a[r]!==i)return!0}function ip(a,i,r,o){const C=a[0];if(C===null)return!1;if(i==="display"||i==="visibility")return!0;const f=a[a.length-1],d=cs(C,i),p=cs(f,i);return!d||!p?!1:ap(a)||(r==="spring"||hr(r))&&o}function Ln(a){a.duration=0,a.type="keyframes"}const yr=new Set(["opacity","clipPath","filter","transform"]),lp=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function sp(a){for(let i=0;i<a.length;i++)if(typeof a[i]=="string"&&lp.test(a[i]))return!0;return!1}const op=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),rp=Uo(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function up(a){var g;const{motionValue:i,name:r,repeatDelay:o,repeatType:C,damping:f,type:d,keyframes:p}=a;if(!(((g=i==null?void 0:i.owner)==null?void 0:g.current)instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:x}=i.owner.getProps();return rp()&&r&&(yr.has(r)||op.has(r)&&sp(p))&&(r!=="transform"||!x)&&!m&&!o&&C!=="mirror"&&f!==0&&d!=="inertia"}const cp=40;class Cp extends xt{constructor({autoplay:i=!0,delay:r=0,type:o="keyframes",repeat:C=0,repeatDelay:f=0,repeatType:d="loop",keyframes:p,name:y,motionValue:m,element:x,...g}){var E;super(),this.stop=()=>{var O,N;this._animation&&(this._animation.stop(),(O=this.stopTimeline)==null||O.call(this)),(N=this.keyframeResolver)==null||N.cancel()},this.createdAt=c6.now();const M={autoplay:i,delay:r,type:o,repeat:C,repeatDelay:f,repeatType:d,name:y,motionValue:m,element:x,...g},S=(x==null?void 0:x.KeyframeResolver)||gt;this.keyframeResolver=new S(p,(O,N,D)=>this.onKeyframesResolved(O,N,M,!D),y,m,x),(E=this.keyframeResolver)==null||E.scheduleResolve()}onKeyframesResolved(i,r,o,C){var D,Y;this.keyframeResolver=void 0;const{name:f,type:d,velocity:p,delay:y,isHandoff:m,onUpdate:x}=o;this.resolvedAt=c6.now();let g=!0;ip(i,f,d,p)||(g=!1,(a1.instantAnimations||!y)&&(x==null||x(R3(i,o,r))),i[0]=i[i.length-1],Ln(o),o.repeat=0);const S={startTime:C?this.resolvedAt?this.resolvedAt-this.createdAt>cp?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...o,keyframes:i},E=g&&!m&&up(S),O=(Y=(D=S.motionValue)==null?void 0:D.owner)==null?void 0:Y.current;let N;if(E)try{N=new ep({...S,element:O})}catch{N=new b3(S)}else N=new b3(S);N.finished.then(()=>{this.notifyFinished()}).catch(Y6),this.pendingTimeline&&(this.stopTimeline=N.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=N}get finished(){return this._animation?this.animation.finished:this._finished}then(i,r){return this.finished.finally(i).then(()=>{})}get animation(){var i;return this._animation||((i=this.keyframeResolver)==null||i.resume(),Jh()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var i;this._animation&&this.animation.cancel(),(i=this.keyframeResolver)==null||i.cancel()}}function xr(a,i,r,o=0,C=1){const f=Array.from(a).sort((m,x)=>m.sortNodePosition(x)).indexOf(i),d=a.size,p=(d-1)*o;return typeof r=="function"?r(f,d):C===1?f*o:p-f*o}const fp=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function dp(a){const i=fp.exec(a);if(!i)return[,];const[,r,o,C]=i;return[`--${r??o}`,C]}function gr(a,i,r=1){const[o,C]=dp(a);if(!o)return;const f=window.getComputedStyle(i).getPropertyValue(o);if(f){const d=f.trim();return Vo(d)?parseFloat(d):d}return dt(C)?gr(C,i,r+1):C}const hp={type:"spring",stiffness:500,damping:25,restSpeed:10},pp=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),mp={type:"keyframes",duration:.8},yp={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},xp=(a,{keyframes:i})=>i.length>2?mp:k2.has(a)?a.startsWith("scale")?pp(i[1]):hp:yp;function vr(a,i){if(a!=null&&a.inherit&&i){const{inherit:r,...o}=a;return{...i,...o}}return a}function vt(a,i){const r=(a==null?void 0:a[i])??(a==null?void 0:a.default)??a;return r!==a?vr(r,a):r}const gp=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function vp(a){for(const i in a)if(!gp.has(i))return!0;return!1}const Mt=(a,i,r,o={},C,f)=>d=>{const p=vt(o,a)||{},y=p.delay||o.delay||0;let{elapsed:m=0}=o;m=m-w6(y);const x={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:i.getVelocity(),...p,delay:-m,onUpdate:M=>{i.set(M),p.onUpdate&&p.onUpdate(M)},onComplete:()=>{d(),p.onComplete&&p.onComplete()},name:a,motionValue:i,element:f?void 0:C};vp(p)||Object.assign(x,xp(a,x)),x.duration&&(x.duration=w6(x.duration)),x.repeatDelay&&(x.repeatDelay=w6(x.repeatDelay)),x.from!==void 0&&(x.keyframes[0]=x.from);let g=!1;if((x.type===!1||x.duration===0&&!x.repeatDelay)&&(Ln(x),x.delay===0&&(g=!0)),(a1.instantAnimations||a1.skipAnimations||C!=null&&C.shouldSkipAnimations)&&(g=!0,Ln(x),x.delay=0),x.allowFlatten=!p.type&&!p.ease,g&&!f&&i.get()!==void 0){const M=R3(x.keyframes,p);if(M!==void 0){w0.update(()=>{x.onUpdate(M),x.onComplete()});return}}return p.isSync?new b3(x):new Cp(x)};function Cs(a){const i=[{},{}];return a==null||a.values.forEach((r,o)=>{i[0][o]=r.get(),i[1][o]=r.getVelocity()}),i}function zt(a,i,r,o){if(typeof i=="function"){const[C,f]=Cs(o);i=i(r!==void 0?r:a.custom,C,f)}if(typeof i=="string"&&(i=a.variants&&a.variants[i]),typeof i=="function"){const[C,f]=Cs(o);i=i(r!==void 0?r:a.custom,C,f)}return i}function R1(a,i,r){const o=a.getProps();return zt(o,i,r!==void 0?r:o.custom,a)}const Mr=new Set(["width","height","top","left","right","bottom",...S2]),fs=30,Mp=a=>!isNaN(parseFloat(a));class zp{constructor(i,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{var f;const C=c6.now();if(this.updatedAt!==C&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&((f=this.events.change)==null||f.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(i),this.owner=r.owner}setCurrent(i){this.current=i,this.updatedAt=c6.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=Mp(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,r){this.events[i]||(this.events[i]=new ct);const o=this.events[i].add(r);return i==="change"?()=>{o(),w0.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,r){this.passiveEffect=i,this.stopPassiveEffect=r}set(i){this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)}setWithVelocity(i,r,o){this.set(r),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-o}jump(i,r=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var i;(i=this.events.change)==null||i.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=c6.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>fs)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,fs);return Lo(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(i){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=i(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var i,r;(i=this.dependents)==null||i.clear(),(r=this.events.destroy)==null||r.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function M2(a,i){return new zp(a,i)}const Hn=a=>Array.isArray(a);function jp(a,i,r){a.hasValue(i)?a.getValue(i).set(r):a.addValue(i,M2(r))}function bp(a){return Hn(a)?a[a.length-1]||0:a}function Sp(a,i){const r=R1(a,i);let{transitionEnd:o={},transition:C={},...f}=r||{};f={...f,...o};for(const d in f){const p=bp(f[d]);jp(a,d,p)}}const s6=a=>!!(a&&a.getVelocity);function kp(a){return!!(s6(a)&&a.add)}function qn(a,i){const r=a.getValue("willChange");if(kp(r))return r.add(i);if(!r&&a1.WillChange){const o=new a1.WillChange("auto");a.addValue("willChange",o),o.add(i)}}function jt(a){return a.replace(/([A-Z])/g,i=>`-${i.toLowerCase()}`)}const Tp="framerAppearId",zr="data-"+jt(Tp);function jr(a){return a.props[zr]}function Ep({protectedKeys:a,needsAnimating:i},r){const o=a.hasOwnProperty(r)&&i[r]!==!0;return i[r]=!1,o}function br(a,i,{delay:r=0,transitionOverride:o,type:C}={}){let{transition:f,transitionEnd:d,...p}=i;const y=a.getDefaultTransition();f=f?vr(f,y):y;const m=f==null?void 0:f.reduceMotion;o&&(f=o);const x=[],g=C&&a.animationState&&a.animationState.getState()[C];for(const M in p){const S=a.getValue(M,a.latestValues[M]??null),E=p[M];if(E===void 0||g&&Ep(g,M))continue;const O={delay:r,...vt(f||{},M)},N=S.get();if(N!==void 0&&!S.isAnimating()&&!Array.isArray(E)&&E===N&&!O.velocity){w0.update(()=>S.set(E));continue}let D=!1;if(window.MotionHandoffAnimation){const G=jr(a);if(G){const Z=window.MotionHandoffAnimation(G,M,w0);Z!==null&&(O.startTime=Z,D=!0)}}qn(a,M);const Y=m??a.shouldReduceMotion;S.start(Mt(M,S,E,Y&&Mr.has(M)?{type:!1}:O,a,D));const U=S.animation;U&&x.push(U)}if(d){const M=()=>w0.update(()=>{d&&Sp(a,d)});x.length?Promise.all(x).then(M):M()}return x}function Yn(a,i,r={}){var y;const o=R1(a,i,r.type==="exit"?(y=a.presenceContext)==null?void 0:y.custom:void 0);let{transition:C=a.getDefaultTransition()||{}}=o||{};r.transitionOverride&&(C=r.transitionOverride);const f=o?()=>Promise.all(br(a,o,r)):()=>Promise.resolve(),d=a.variantChildren&&a.variantChildren.size?(m=0)=>{const{delayChildren:x=0,staggerChildren:g,staggerDirection:M}=C;return Ap(a,i,m,x,g,M,r)}:()=>Promise.resolve(),{when:p}=C;if(p){const[m,x]=p==="beforeChildren"?[f,d]:[d,f];return m().then(()=>x())}else return Promise.all([f(),d(r.delay)])}function Ap(a,i,r=0,o=0,C=0,f=1,d){const p=[];for(const y of a.variantChildren)y.notify("AnimationStart",i),p.push(Yn(y,i,{...d,delay:r+(typeof o=="function"?0:o)+xr(a.variantChildren,y,o,C,f)}).then(()=>y.notify("AnimationComplete",i)));return Promise.all(p)}function wp(a,i,r={}){a.notify("AnimationStart",i);let o;if(Array.isArray(i)){const C=i.map(f=>Yn(a,f,r));o=Promise.all(C)}else if(typeof i=="string")o=Yn(a,i,r);else{const C=typeof i=="function"?R1(a,i,r.custom):i;o=Promise.all(br(a,C,r))}return o.then(()=>{a.notify("AnimationComplete",i)})}const Rp={test:a=>a==="auto",parse:a=>a},Sr=a=>i=>i.test(a),kr=[b2,P,o8,n1,ah,eh,Rp],ds=a=>kr.find(Sr(a));function Dp(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||Bo(a):!0}const Np=new Set(["brightness","contrast","saturate","opacity"]);function Op(a){const[i,r]=a.slice(0,-1).split("(");if(i==="drop-shadow")return a;const[o]=r.match(ht)||[];if(!o)return a;const C=r.replace(o,"");let f=Np.has(i)?1:0;return o!==r&&(f*=100),i+"("+f+C+")"}const Vp=/\b([a-z-]*)\(.*?\)/gu,Gn={...W6,getAnimatableNone:a=>{const i=a.match(Vp);return i?i.map(Op).join(" "):a}},Xn={...W6,getAnimatableNone:a=>{const i=W6.parse(a);return W6.createTransformer(a)(i.map(o=>typeof o=="number"?0:typeof o=="object"?{...o,alpha:1}:o))}},hs={...b2,transform:Math.round},_p={rotate:n1,rotateX:n1,rotateY:n1,rotateZ:n1,scale:o3,scaleX:o3,scaleY:o3,scaleZ:o3,skew:n1,skewX:n1,skewY:n1,distance:P,translateX:P,translateY:P,translateZ:P,x:P,y:P,z:P,perspective:P,transformPerspective:P,opacity:R7,originX:ns,originY:ns,originZ:P},bt={borderWidth:P,borderTopWidth:P,borderRightWidth:P,borderBottomWidth:P,borderLeftWidth:P,borderRadius:P,borderTopLeftRadius:P,borderTopRightRadius:P,borderBottomRightRadius:P,borderBottomLeftRadius:P,width:P,maxWidth:P,height:P,maxHeight:P,top:P,right:P,bottom:P,left:P,inset:P,insetBlock:P,insetBlockStart:P,insetBlockEnd:P,insetInline:P,insetInlineStart:P,insetInlineEnd:P,padding:P,paddingTop:P,paddingRight:P,paddingBottom:P,paddingLeft:P,paddingBlock:P,paddingBlockStart:P,paddingBlockEnd:P,paddingInline:P,paddingInlineStart:P,paddingInlineEnd:P,margin:P,marginTop:P,marginRight:P,marginBottom:P,marginLeft:P,marginBlock:P,marginBlockStart:P,marginBlockEnd:P,marginInline:P,marginInlineStart:P,marginInlineEnd:P,fontSize:P,backgroundPositionX:P,backgroundPositionY:P,..._p,zIndex:hs,fillOpacity:R7,strokeOpacity:R7,numOctaves:hs},Bp={...bt,color:J0,backgroundColor:J0,outlineColor:J0,fill:J0,stroke:J0,borderColor:J0,borderTopColor:J0,borderRightColor:J0,borderBottomColor:J0,borderLeftColor:J0,filter:Gn,WebkitFilter:Gn,mask:Xn,WebkitMask:Xn},Tr=a=>Bp[a],Up=new Set([Gn,Xn]);function Er(a,i){let r=Tr(a);return Up.has(r)||(r=W6),r.getAnimatableNone?r.getAnimatableNone(i):void 0}const Lp=new Set(["auto","none","0"]);function Hp(a,i,r){let o=0,C;for(;o<a.length&&!C;){const f=a[o];typeof f=="string"&&!Lp.has(f)&&v2(f).values.length&&(C=a[o]),o++}if(C&&r)for(const f of i)a[f]=Er(r,C)}class qp extends gt{constructor(i,r,o,C,f){super(i,r,o,C,f,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:r,name:o}=this;if(!r||!r.current)return;super.readKeyframes();for(let x=0;x<i.length;x++){let g=i[x];if(typeof g=="string"&&(g=g.trim(),dt(g))){const M=gr(g,r.current);M!==void 0&&(i[x]=M),x===i.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!Mr.has(o)||i.length!==2)return;const[C,f]=i,d=ds(C),p=ds(f),y=Il(C),m=Il(f);if(y!==m&&e1[o]){this.needsMeasurement=!0;return}if(d!==p)if(rs(d)&&rs(p))for(let x=0;x<i.length;x++){const g=i[x];typeof g=="string"&&(i[x]=parseFloat(g))}else e1[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:r}=this,o=[];for(let C=0;C<i.length;C++)(i[C]===null||Dp(i[C]))&&o.push(C);o.length&&Hp(i,o,r)}measureInitialState(){const{element:i,unresolvedKeyframes:r,name:o}=this;if(!i||!i.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=e1[o](i.measureViewportBox(),window.getComputedStyle(i.current)),r[0]=this.measuredOrigin;const C=r[r.length-1];C!==void 0&&i.getValue(o,C).jump(C,!1)}measureEndState(){var p;const{element:i,name:r,unresolvedKeyframes:o}=this;if(!i||!i.current)return;const C=i.getValue(r);C&&C.jump(this.measuredOrigin,!1);const f=o.length-1,d=o[f];o[f]=e1[r](i.measureViewportBox(),window.getComputedStyle(i.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(p=this.removedTransforms)!=null&&p.length&&this.removedTransforms.forEach(([y,m])=>{i.getValue(y).set(m)}),this.resolveNoneKeyframes()}}function Ar(a,i,r){if(a==null)return[];if(a instanceof EventTarget)return[a];if(typeof a=="string"){let o=document;const C=(r==null?void 0:r[a])??o.querySelectorAll(a);return C?Array.from(C):[]}return Array.from(a).filter(o=>o!=null)}const wr=(a,i)=>i&&typeof a=="number"?i.transform(a):a;function Yp(a){return _o(a)&&"offsetHeight"in a&&!("ownerSVGElement"in a)}const{schedule:St}=Fo(queueMicrotask,!1),P6={x:!1,y:!1};function Rr(){return P6.x||P6.y}function Gp(a){return a==="x"||a==="y"?P6[a]?null:(P6[a]=!0,()=>{P6[a]=!1}):P6.x||P6.y?null:(P6.x=P6.y=!0,()=>{P6.x=P6.y=!1})}function Dr(a,i){const r=Ar(a),o=new AbortController,C={passive:!0,...i,signal:o.signal};return[r,C,()=>o.abort()]}function Xp(a){return!(a.pointerType==="touch"||Rr())}function Zp(a,i,r={}){const[o,C,f]=Dr(a,r);return o.forEach(d=>{let p=!1,y=!1,m;const x=()=>{d.removeEventListener("pointerleave",E)},g=N=>{m&&(m(N),m=void 0),x()},M=N=>{p=!1,window.removeEventListener("pointerup",M),window.removeEventListener("pointercancel",M),y&&(y=!1,g(N))},S=()=>{p=!0,window.addEventListener("pointerup",M,C),window.addEventListener("pointercancel",M,C)},E=N=>{if(N.pointerType!=="touch"){if(p){y=!0;return}g(N)}},O=N=>{if(!Xp(N))return;y=!1;const D=i(d,N);typeof D=="function"&&(m=D,d.addEventListener("pointerleave",E,C))};d.addEventListener("pointerenter",O,C),d.addEventListener("pointerdown",S,C)}),f}const Nr=(a,i)=>i?a===i?!0:Nr(a,i.parentElement):!1,kt=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,Kp=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Qp(a){return Kp.has(a.tagName)||a.isContentEditable===!0}const Jp=new Set(["INPUT","SELECT","TEXTAREA"]);function Pp(a){return Jp.has(a.tagName)||a.isContentEditable===!0}const d3=new WeakSet;function ps(a){return i=>{i.key==="Enter"&&a(i)}}function pn(a,i){a.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const Fp=(a,i)=>{const r=a.currentTarget;if(!r)return;const o=ps(()=>{if(d3.has(r))return;pn(r,"down");const C=ps(()=>{pn(r,"up")}),f=()=>pn(r,"cancel");r.addEventListener("keyup",C,i),r.addEventListener("blur",f,i)});r.addEventListener("keydown",o,i),r.addEventListener("blur",()=>r.removeEventListener("keydown",o),i)};function ms(a){return kt(a)&&!Rr()}const ys=new WeakSet;function Wp(a,i,r={}){const[o,C,f]=Dr(a,r),d=p=>{const y=p.currentTarget;if(!ms(p)||ys.has(p))return;d3.add(y),r.stopPropagation&&ys.add(p);const m=i(y,p),x=(S,E)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",M),d3.has(y)&&d3.delete(y),ms(S)&&typeof m=="function"&&m(S,{success:E})},g=S=>{x(S,y===window||y===document||r.useGlobalTarget||Nr(y,S.target))},M=S=>{x(S,!1)};window.addEventListener("pointerup",g,C),window.addEventListener("pointercancel",M,C)};return o.forEach(p=>{(r.useGlobalTarget?window:p).addEventListener("pointerdown",d,C),Yp(p)&&(p.addEventListener("focus",m=>Fp(m,C)),!Qp(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),f}function Tt(a){return _o(a)&&"ownerSVGElement"in a}const h3=new WeakMap;let t1;const Or=(a,i,r)=>(o,C)=>C&&C[0]?C[0][a+"Size"]:Tt(o)&&"getBBox"in o?o.getBBox()[i]:o[r],$p=Or("inline","width","offsetWidth"),Ip=Or("block","height","offsetHeight");function nm({target:a,borderBoxSize:i}){var r;(r=h3.get(a))==null||r.forEach(o=>{o(a,{get width(){return $p(a,i)},get height(){return Ip(a,i)}})})}function tm(a){a.forEach(nm)}function em(){typeof ResizeObserver>"u"||(t1=new ResizeObserver(tm))}function am(a,i){t1||em();const r=Ar(a);return r.forEach(o=>{let C=h3.get(o);C||(C=new Set,h3.set(o,C)),C.add(i),t1==null||t1.observe(o)}),()=>{r.forEach(o=>{const C=h3.get(o);C==null||C.delete(i),C!=null&&C.size||t1==null||t1.unobserve(o)})}}const p3=new Set;let x2;function im(){x2=()=>{const a={get width(){return window.innerWidth},get height(){return window.innerHeight}};p3.forEach(i=>i(a))},window.addEventListener("resize",x2)}function lm(a){return p3.add(a),x2||im(),()=>{p3.delete(a),!p3.size&&typeof x2=="function"&&(window.removeEventListener("resize",x2),x2=void 0)}}function xs(a,i){return typeof a=="function"?lm(a):am(a,i)}function sm(a){return Tt(a)&&a.tagName==="svg"}const om=[...kr,J0,W6],rm=a=>om.find(Sr(a)),gs=()=>({translate:0,scale:1,origin:0,originPoint:0}),g2=()=>({x:gs(),y:gs()}),vs=()=>({min:0,max:0}),F0=()=>({x:vs(),y:vs()}),um=new WeakMap;function D3(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function D7(a){return typeof a=="string"||Array.isArray(a)}const Et=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],At=["initial",...Et];function N3(a){return D3(a.animate)||At.some(i=>D7(a[i]))}function Vr(a){return!!(N3(a)||a.variants)}function cm(a,i,r){for(const o in i){const C=i[o],f=r[o];if(s6(C))a.addValue(o,C);else if(s6(f))a.addValue(o,M2(C,{owner:a}));else if(f!==C)if(a.hasValue(o)){const d=a.getValue(o);d.liveStyle===!0?d.jump(C):d.hasAnimated||d.set(C)}else{const d=a.getStaticValue(o);a.addValue(o,M2(d!==void 0?d:C,{owner:a}))}}for(const o in r)i[o]===void 0&&a.removeValue(o);return i}const Zn={current:null},_r={current:!1},Cm=typeof window<"u";function fm(){if(_r.current=!0,!!Cm)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),i=()=>Zn.current=a.matches;a.addEventListener("change",i),i()}else Zn.current=!1}const Ms=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let S3={};function Br(a){S3=a}function dm(){return S3}class hm{scrapeMotionValuesFromProps(i,r,o){return{}}constructor({parent:i,props:r,presenceContext:o,reducedMotionConfig:C,skipAnimations:f,blockInitialAnimation:d,visualState:p},y={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=gt,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=c6.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,w0.render(this.render,!1,!0))};const{latestValues:m,renderState:x}=p;this.latestValues=m,this.baseTarget={...m},this.initialValues=r.initial?{...m}:{},this.renderState=x,this.parent=i,this.props=r,this.presenceContext=o,this.depth=i?i.depth+1:0,this.reducedMotionConfig=C,this.skipAnimationsConfig=f,this.options=y,this.blockInitialAnimation=!!d,this.isControllingVariants=N3(r),this.isVariantNode=Vr(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:g,...M}=this.scrapeMotionValuesFromProps(r,{},this);for(const S in M){const E=M[S];m[S]!==void 0&&s6(E)&&E.set(m[S])}}mount(i){var r,o;if(this.hasBeenMounted)for(const C in this.initialValues)(r=this.values.get(C))==null||r.jump(this.initialValues[C]),this.latestValues[C]=this.initialValues[C];this.current=i,um.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((C,f)=>this.bindToMotionValue(f,C)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(_r.current||fm(),this.shouldReduceMotion=Zn.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(o=this.parent)==null||o.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var i;this.projection&&this.projection.unmount(),i1(this.notifyUpdate),i1(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(i=this.parent)==null||i.removeChild(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const o=this.features[r];o&&(o.unmount(),o.isMounted=!1)}this.current=null}addChild(i){this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)}removeChild(i){this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)}bindToMotionValue(i,r){if(this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)(),r.accelerate&&yr.has(i)&&this.current instanceof HTMLElement){const{factory:d,keyframes:p,times:y,ease:m,duration:x}=r.accelerate,g=new pr({element:this.current,name:i,keyframes:p,times:y,ease:m,duration:w6(x)}),M=d(g);this.valueSubscriptions.set(i,()=>{M(),g.cancel()});return}const o=k2.has(i);o&&this.onBindTransform&&this.onBindTransform();const C=r.on("change",d=>{this.latestValues[i]=d,this.props.onUpdate&&w0.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let f;typeof window<"u"&&window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,i,r)),this.valueSubscriptions.set(i,()=>{C(),f&&f(),r.owner&&r.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in S3){const r=S3[i];if(!r)continue;const{isEnabled:o,Feature:C}=r;if(!this.features[i]&&C&&o(this.props)&&(this.features[i]=new C(this)),this.features[i]){const f=this.features[i];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):F0()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,r){this.latestValues[i]=r}update(i,r){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let o=0;o<Ms.length;o++){const C=Ms[o];this.propEventSubscriptions[C]&&(this.propEventSubscriptions[C](),delete this.propEventSubscriptions[C]);const f="on"+C,d=i[f];d&&(this.propEventSubscriptions[C]=this.on(C,d))}this.prevMotionValues=cm(this,this.scrapeMotionValuesFromProps(i,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(i),()=>r.variantChildren.delete(i)}addValue(i,r){const o=this.values.get(i);r!==o&&(o&&this.removeValue(i),this.bindToMotionValue(i,r),this.values.set(i,r),this.latestValues[i]=r.get())}removeValue(i){this.values.delete(i);const r=this.valueSubscriptions.get(i);r&&(r(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,r){if(this.props.values&&this.props.values[i])return this.props.values[i];let o=this.values.get(i);return o===void 0&&r!==void 0&&(o=M2(r===null?void 0:r,{owner:this}),this.addValue(i,o)),o}readValue(i,r){let o=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return o!=null&&(typeof o=="string"&&(Vo(o)||Bo(o))?o=parseFloat(o):!rm(o)&&W6.test(r)&&(o=Er(i,r)),this.setBaseTarget(i,s6(o)?o.get():o)),s6(o)?o.get():o}setBaseTarget(i,r){this.baseTarget[i]=r}getBaseTarget(i){var f;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const d=zt(this.props,r,(f=this.presenceContext)==null?void 0:f.custom);d&&(o=d[i])}if(r&&o!==void 0)return o;const C=this.getBaseTargetFromProps(this.props,i);return C!==void 0&&!s6(C)?C:this.initialValues[i]!==void 0&&o===void 0?void 0:this.baseTarget[i]}on(i,r){return this.events[i]||(this.events[i]=new ct),this.events[i].add(r)}notify(i,...r){this.events[i]&&this.events[i].notify(...r)}scheduleRenderMicrotask(){St.render(this.render)}}class Ur extends hm{constructor(){super(...arguments),this.KeyframeResolver=qp}sortInstanceNodePosition(i,r){return i.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(i,r){const o=i.style;return o?o[r]:void 0}removeValueFromRenderState(i,{vars:r,style:o}){delete r[i],delete o[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;s6(i)&&(this.childSubscription=i.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}class l1{constructor(i){this.isMounted=!1,this.node=i}update(){}}function Lr({top:a,left:i,right:r,bottom:o}){return{x:{min:i,max:r},y:{min:a,max:o}}}function pm({x:a,y:i}){return{top:i.min,right:a.max,bottom:i.max,left:a.min}}function mm(a,i){if(!i)return a;const r=i({x:a.left,y:a.top}),o=i({x:a.right,y:a.bottom});return{top:r.y,left:r.x,bottom:o.y,right:o.x}}function mn(a){return a===void 0||a===1}function Kn({scale:a,scaleX:i,scaleY:r}){return!mn(a)||!mn(i)||!mn(r)}function T1(a){return Kn(a)||Hr(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function Hr(a){return zs(a.x)||zs(a.y)}function zs(a){return a&&a!=="0%"}function k3(a,i,r){const o=a-r,C=i*o;return r+C}function js(a,i,r,o,C){return C!==void 0&&(a=k3(a,C,o)),k3(a,r,o)+i}function Qn(a,i=0,r=1,o,C){a.min=js(a.min,i,r,o,C),a.max=js(a.max,i,r,o,C)}function qr(a,{x:i,y:r}){Qn(a.x,i.translate,i.scale,i.originPoint),Qn(a.y,r.translate,r.scale,r.originPoint)}const bs=.999999999999,Ss=1.0000000000001;function ym(a,i,r,o=!1){var p;const C=r.length;if(!C)return;i.x=i.y=1;let f,d;for(let y=0;y<C;y++){f=r[y],d=f.projectionDelta;const{visualElement:m}=f.options;m&&m.props.style&&m.props.style.display==="contents"||(o&&f.options.layoutScroll&&f.scroll&&f!==f.root&&(l8(a.x,-f.scroll.offset.x),l8(a.y,-f.scroll.offset.y)),d&&(i.x*=d.x.scale,i.y*=d.y.scale,qr(a,d)),o&&T1(f.latestValues)&&m3(a,f.latestValues,(p=f.layout)==null?void 0:p.layoutBox))}i.x<Ss&&i.x>bs&&(i.x=1),i.y<Ss&&i.y>bs&&(i.y=1)}function l8(a,i){a.min+=i,a.max+=i}function ks(a,i,r,o,C=.5){const f=O0(a.min,a.max,C);Qn(a,i,r,f,o)}function Ts(a,i){return typeof a=="string"?parseFloat(a)/100*(i.max-i.min):a}function m3(a,i,r){const o=r??a;ks(a.x,Ts(i.x,o.x),i.scaleX,i.scale,i.originX),ks(a.y,Ts(i.y,o.y),i.scaleY,i.scale,i.originY)}function Yr(a,i){return Lr(mm(a.getBoundingClientRect(),i))}function xm(a,i,r){const o=Yr(a,r),{scroll:C}=i;return C&&(l8(o.x,C.offset.x),l8(o.y,C.offset.y)),o}const gm={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},vm=S2.length;function Mm(a,i,r){let o="",C=!0;for(let f=0;f<vm;f++){const d=S2[f],p=a[d];if(p===void 0)continue;let y=!0;if(typeof p=="number")y=p===(d.startsWith("scale")?1:0);else{const m=parseFloat(p);y=d.startsWith("scale")?m===1:m===0}if(!y||r){const m=wr(p,bt[d]);if(!y){C=!1;const x=gm[d]||d;o+=`${x}(${m}) `}r&&(i[d]=m)}}return o=o.trim(),r?o=r(i,C?"":o):C&&(o="none"),o}function wt(a,i,r){const{style:o,vars:C,transformOrigin:f}=a;let d=!1,p=!1;for(const y in i){const m=i[y];if(k2.has(y)){d=!0;continue}else if($o(y)){C[y]=m;continue}else{const x=wr(m,bt[y]);y.startsWith("origin")?(p=!0,f[y]=x):o[y]=x}}if(i.transform||(d||r?o.transform=Mm(i,a.transform,r):o.transform&&(o.transform="none")),p){const{originX:y="50%",originY:m="50%",originZ:x=0}=f;o.transformOrigin=`${y} ${m} ${x}`}}function Gr(a,{style:i,vars:r},o,C){const f=a.style;let d;for(d in i)f[d]=i[d];C==null||C.applyProjectionStyles(f,o);for(d in r)f.setProperty(d,r[d])}function Es(a,i){return i.max===i.min?0:a/(i.max-i.min)*100}const j7={correct:(a,i)=>{if(!i.target)return a;if(typeof a=="string")if(P.test(a))a=parseFloat(a);else return a;const r=Es(a,i.target.x),o=Es(a,i.target.y);return`${r}% ${o}%`}},zm={correct:(a,{treeScale:i,projectionDelta:r})=>{const o=a,C=W6.parse(a);if(C.length>5)return o;const f=W6.createTransformer(a),d=typeof C[0]!="number"?1:0,p=r.x.scale*i.x,y=r.y.scale*i.y;C[0+d]/=p,C[1+d]/=y;const m=O0(p,y,.5);return typeof C[2+d]=="number"&&(C[2+d]/=m),typeof C[3+d]=="number"&&(C[3+d]/=m),f(C)}},Jn={borderRadius:{...j7,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:j7,borderTopRightRadius:j7,borderBottomLeftRadius:j7,borderBottomRightRadius:j7,boxShadow:zm};function Xr(a,{layout:i,layoutId:r}){return k2.has(a)||a.startsWith("origin")||(i||r!==void 0)&&(!!Jn[a]||a==="opacity")}function Rt(a,i,r){var d;const o=a.style,C=i==null?void 0:i.style,f={};if(!o)return f;for(const p in o)(s6(o[p])||C&&s6(C[p])||Xr(p,a)||((d=r==null?void 0:r.getValue(p))==null?void 0:d.liveStyle)!==void 0)&&(f[p]=o[p]);return f}function jm(a){return window.getComputedStyle(a)}class bm extends Ur{constructor(){super(...arguments),this.type="html",this.renderInstance=Gr}readValueFromInstance(i,r){var o;if(k2.has(r))return(o=this.projection)!=null&&o.isProjecting?On(r):Gh(i,r);{const C=jm(i),f=($o(r)?C.getPropertyValue(r):C[r])||0;return typeof f=="string"?f.trim():f}}measureInstanceViewportBox(i,{transformPagePoint:r}){return Yr(i,r)}build(i,r,o){wt(i,r,o.transformTemplate)}scrapeMotionValuesFromProps(i,r,o){return Rt(i,r,o)}}const Sm={offset:"stroke-dashoffset",array:"stroke-dasharray"},km={offset:"strokeDashoffset",array:"strokeDasharray"};function Tm(a,i,r=1,o=0,C=!0){a.pathLength=1;const f=C?Sm:km;a[f.offset]=`${-o}`,a[f.array]=`${i} ${r}`}const Em=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Zr(a,{attrX:i,attrY:r,attrScale:o,pathLength:C,pathSpacing:f=1,pathOffset:d=0,...p},y,m,x){if(wt(a,p,m),y){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:g,style:M}=a;g.transform&&(M.transform=g.transform,delete g.transform),(M.transform||g.transformOrigin)&&(M.transformOrigin=g.transformOrigin??"50% 50%",delete g.transformOrigin),M.transform&&(M.transformBox=(x==null?void 0:x.transformBox)??"fill-box",delete g.transformBox);for(const S of Em)g[S]!==void 0&&(M[S]=g[S],delete g[S]);i!==void 0&&(g.x=i),r!==void 0&&(g.y=r),o!==void 0&&(g.scale=o),C!==void 0&&Tm(g,C,f,d,!1)}const Kr=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Qr=a=>typeof a=="string"&&a.toLowerCase()==="svg";function Am(a,i,r,o){Gr(a,i,void 0,o);for(const C in i.attrs)a.setAttribute(Kr.has(C)?C:jt(C),i.attrs[C])}function Jr(a,i,r){const o=Rt(a,i,r);for(const C in a)if(s6(a[C])||s6(i[C])){const f=S2.indexOf(C)!==-1?"attr"+C.charAt(0).toUpperCase()+C.substring(1):C;o[f]=a[C]}return o}class wm extends Ur{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=F0}getBaseTargetFromProps(i,r){return i[r]}readValueFromInstance(i,r){if(k2.has(r)){const o=Tr(r);return o&&o.default||0}return r=Kr.has(r)?r:jt(r),i.getAttribute(r)}scrapeMotionValuesFromProps(i,r,o){return Jr(i,r,o)}build(i,r,o){Zr(i,r,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(i,r,o,C){Am(i,r,o,C)}mount(i){this.isSVGTag=Qr(i.tagName),super.mount(i)}}const Rm=At.length;function Pr(a){if(!a)return;if(!a.isControllingVariants){const r=a.parent?Pr(a.parent)||{}:{};return a.props.initial!==void 0&&(r.initial=a.props.initial),r}const i={};for(let r=0;r<Rm;r++){const o=At[r],C=a.props[o];(D7(C)||C===!1)&&(i[o]=C)}return i}function Fr(a,i){if(!Array.isArray(i))return!1;const r=i.length;if(r!==a.length)return!1;for(let o=0;o<r;o++)if(i[o]!==a[o])return!1;return!0}const Dm=[...Et].reverse(),Nm=Et.length;function Om(a){return i=>Promise.all(i.map(({animation:r,options:o})=>wp(a,r,o)))}function Vm(a){let i=Om(a),r=As(),o=!0,C=!1;const f=m=>(x,g)=>{var S;const M=R1(a,g,m==="exit"?(S=a.presenceContext)==null?void 0:S.custom:void 0);if(M){const{transition:E,transitionEnd:O,...N}=M;x={...x,...N,...O}}return x};function d(m){i=m(a)}function p(m){const{props:x}=a,g=Pr(a.parent)||{},M=[],S=new Set;let E={},O=1/0;for(let D=0;D<Nm;D++){const Y=Dm[D],U=r[Y],G=x[Y]!==void 0?x[Y]:g[Y],Z=D7(G),a0=Y===m?U.isActive:null;a0===!1&&(O=D);let W=G===g[Y]&&G!==x[Y]&&Z;if(W&&(o||C)&&a.manuallyAnimateOnMount&&(W=!1),U.protectedKeys={...E},!U.isActive&&a0===null||!G&&!U.prevProp||D3(G)||typeof G=="boolean")continue;if(Y==="exit"&&U.isActive&&a0!==!0){U.prevResolvedValues&&(E={...E,...U.prevResolvedValues});continue}const I=_m(U.prevProp,G);let m0=I||Y===m&&U.isActive&&!W&&Z||D>O&&Z,t0=!1;const y0=Array.isArray(G)?G:[G];let v0=y0.reduce(f(Y),{});a0===!1&&(v0={});const{prevResolvedValues:W0={}}=U,_0={...W0,...v0},z0=Q=>{m0=!0,S.has(Q)&&(t0=!0,S.delete(Q)),U.needsAnimating[Q]=!0;const o0=a.getValue(Q);o0&&(o0.liveStyle=!1)};for(const Q in _0){const o0=v0[Q],h0=W0[Q];if(E.hasOwnProperty(Q))continue;let b=!1;Hn(o0)&&Hn(h0)?b=!Fr(o0,h0):b=o0!==h0,b?o0!=null?z0(Q):S.add(Q):o0!==void 0&&S.has(Q)?z0(Q):U.protectedKeys[Q]=!0}U.prevProp=G,U.prevResolvedValues=v0,U.isActive&&(E={...E,...v0}),(o||C)&&a.blockInitialAnimation&&(m0=!1);const _=W&&I;m0&&(!_||t0)&&M.push(...y0.map(Q=>{const o0={type:Y};if(typeof Q=="string"&&(o||C)&&!_&&a.manuallyAnimateOnMount&&a.parent){const{parent:h0}=a,b=R1(h0,Q);if(h0.enteringChildren&&b){const{delayChildren:q}=b.transition||{};o0.delay=xr(h0.enteringChildren,a,q)}}return{animation:Q,options:o0}}))}if(S.size){const D={};if(typeof x.initial!="boolean"){const Y=R1(a,Array.isArray(x.initial)?x.initial[0]:x.initial);Y&&Y.transition&&(D.transition=Y.transition)}S.forEach(Y=>{const U=a.getBaseTarget(Y),G=a.getValue(Y);G&&(G.liveStyle=!0),D[Y]=U??null}),M.push({animation:D})}let N=!!M.length;return o&&(x.initial===!1||x.initial===x.animate)&&!a.manuallyAnimateOnMount&&(N=!1),o=!1,C=!1,N?i(M):Promise.resolve()}function y(m,x){var M;if(r[m].isActive===x)return Promise.resolve();(M=a.variantChildren)==null||M.forEach(S=>{var E;return(E=S.animationState)==null?void 0:E.setActive(m,x)}),r[m].isActive=x;const g=p(m);for(const S in r)r[S].protectedKeys={};return g}return{animateChanges:p,setActive:y,setAnimateFunction:d,getState:()=>r,reset:()=>{r=As(),C=!0}}}function _m(a,i){return typeof i=="string"?i!==a:Array.isArray(i)?!Fr(i,a):!1}function S1(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function As(){return{animate:S1(!0),whileInView:S1(),whileHover:S1(),whileTap:S1(),whileDrag:S1(),whileFocus:S1(),exit:S1()}}function Pn(a,i){a.min=i.min,a.max=i.max}function J6(a,i){Pn(a.x,i.x),Pn(a.y,i.y)}function ws(a,i){a.translate=i.translate,a.scale=i.scale,a.originPoint=i.originPoint,a.origin=i.origin}const Wr=1e-4,Bm=1-Wr,Um=1+Wr,$r=.01,Lm=0-$r,Hm=0+$r;function C6(a){return a.max-a.min}function qm(a,i,r){return Math.abs(a-i)<=r}function Rs(a,i,r,o=.5){a.origin=o,a.originPoint=O0(i.min,i.max,a.origin),a.scale=C6(r)/C6(i),a.translate=O0(r.min,r.max,a.origin)-a.originPoint,(a.scale>=Bm&&a.scale<=Um||isNaN(a.scale))&&(a.scale=1),(a.translate>=Lm&&a.translate<=Hm||isNaN(a.translate))&&(a.translate=0)}function T7(a,i,r,o){Rs(a.x,i.x,r.x,o?o.originX:void 0),Rs(a.y,i.y,r.y,o?o.originY:void 0)}function Ds(a,i,r,o=0){const C=o?O0(r.min,r.max,o):r.min;a.min=C+i.min,a.max=a.min+C6(i)}function Ym(a,i,r,o){Ds(a.x,i.x,r.x,o==null?void 0:o.x),Ds(a.y,i.y,r.y,o==null?void 0:o.y)}function Ns(a,i,r,o=0){const C=o?O0(r.min,r.max,o):r.min;a.min=i.min-C,a.max=a.min+C6(i)}function T3(a,i,r,o){Ns(a.x,i.x,r.x,o==null?void 0:o.x),Ns(a.y,i.y,r.y,o==null?void 0:o.y)}function Os(a,i,r,o,C){return a-=i,a=k3(a,1/r,o),C!==void 0&&(a=k3(a,1/C,o)),a}function Gm(a,i=0,r=1,o=.5,C,f=a,d=a){if(o8.test(i)&&(i=parseFloat(i),i=O0(d.min,d.max,i/100)-d.min),typeof i!="number")return;let p=O0(f.min,f.max,o);a===f&&(p-=i),a.min=Os(a.min,i,r,p,C),a.max=Os(a.max,i,r,p,C)}function Vs(a,i,[r,o,C],f,d){Gm(a,i[r],i[o],i[C],i.scale,f,d)}const Xm=["x","scaleX","originX"],Zm=["y","scaleY","originY"];function _s(a,i,r,o){Vs(a.x,i,Xm,r?r.x:void 0,o?o.x:void 0),Vs(a.y,i,Zm,r?r.y:void 0,o?o.y:void 0)}function Bs(a){return a.translate===0&&a.scale===1}function Ir(a){return Bs(a.x)&&Bs(a.y)}function Us(a,i){return a.min===i.min&&a.max===i.max}function Km(a,i){return Us(a.x,i.x)&&Us(a.y,i.y)}function Ls(a,i){return Math.round(a.min)===Math.round(i.min)&&Math.round(a.max)===Math.round(i.max)}function nu(a,i){return Ls(a.x,i.x)&&Ls(a.y,i.y)}function Hs(a){return C6(a.x)/C6(a.y)}function qs(a,i){return a.translate===i.translate&&a.scale===i.scale&&a.originPoint===i.originPoint}function i8(a){return[a("x"),a("y")]}function Qm(a,i,r){let o="";const C=a.x.translate/i.x,f=a.y.translate/i.y,d=(r==null?void 0:r.z)||0;if((C||f||d)&&(o=`translate3d(${C}px, ${f}px, ${d}px) `),(i.x!==1||i.y!==1)&&(o+=`scale(${1/i.x}, ${1/i.y}) `),r){const{transformPerspective:m,rotate:x,rotateX:g,rotateY:M,skewX:S,skewY:E}=r;m&&(o=`perspective(${m}px) ${o}`),x&&(o+=`rotate(${x}deg) `),g&&(o+=`rotateX(${g}deg) `),M&&(o+=`rotateY(${M}deg) `),S&&(o+=`skewX(${S}deg) `),E&&(o+=`skewY(${E}deg) `)}const p=a.x.scale*i.x,y=a.y.scale*i.y;return(p!==1||y!==1)&&(o+=`scale(${p}, ${y})`),o||"none"}const tu=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Jm=tu.length,Ys=a=>typeof a=="string"?parseFloat(a):a,Gs=a=>typeof a=="number"||P.test(a);function Pm(a,i,r,o,C,f){C?(a.opacity=O0(0,r.opacity??1,Fm(o)),a.opacityExit=O0(i.opacity??1,0,Wm(o))):f&&(a.opacity=O0(i.opacity??1,r.opacity??1,o));for(let d=0;d<Jm;d++){const p=tu[d];let y=Xs(i,p),m=Xs(r,p);if(y===void 0&&m===void 0)continue;y||(y=0),m||(m=0),y===0||m===0||Gs(y)===Gs(m)?(a[p]=Math.max(O0(Ys(y),Ys(m),o),0),(o8.test(m)||o8.test(y))&&(a[p]+="%")):a[p]=m}(i.rotate||r.rotate)&&(a.rotate=O0(i.rotate||0,r.rotate||0,o))}function Xs(a,i){return a[i]!==void 0?a[i]:a.borderRadius}const Fm=eu(0,.5,Ko),Wm=eu(.5,.95,Y6);function eu(a,i,r){return o=>o<a?0:o>i?1:r(w7(a,i,o))}function $m(a,i,r){const o=s6(a)?a:M2(a);return o.start(Mt("",o,i,r)),o.animation}function N7(a,i,r,o={passive:!0}){return a.addEventListener(i,r,o),()=>a.removeEventListener(i,r)}const Im=(a,i)=>a.depth-i.depth;class ny{constructor(){this.children=[],this.isDirty=!1}add(i){rt(this.children,i),this.isDirty=!0}remove(i){v3(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(Im),this.isDirty=!1,this.children.forEach(i)}}function ty(a,i){const r=c6.now(),o=({timestamp:C})=>{const f=C-r;f>=i&&(i1(o),a(f-i))};return w0.setup(o,!0),()=>i1(o)}function y3(a){return s6(a)?a.get():a}class ey{constructor(){this.members=[]}add(i){rt(this.members,i);for(let r=this.members.length-1;r>=0;r--){const o=this.members[r];if(o===i||o===this.lead||o===this.prevLead)continue;const C=o.instance;(!C||C.isConnected===!1)&&!o.snapshot&&(v3(this.members,o),o.unmount())}i.scheduleRender()}remove(i){if(v3(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(i){var r;for(let o=this.members.indexOf(i)-1;o>=0;o--){const C=this.members[o];if(C.isPresent!==!1&&((r=C.instance)==null?void 0:r.isConnected)!==!1)return this.promote(C),!0}return!1}promote(i,r){var C;const o=this.lead;if(i!==o&&(this.prevLead=o,this.lead=i,i.show(),o)){o.updateSnapshot(),i.scheduleRender();const{layoutDependency:f}=o.options,{layoutDependency:d}=i.options;(f===void 0||f!==d)&&(i.resumeFrom=o,r&&(o.preserveOpacity=!0),o.snapshot&&(i.snapshot=o.snapshot,i.snapshot.latestValues=o.animationValues||o.latestValues),(C=i.root)!=null&&C.isUpdating&&(i.isLayoutDirty=!0)),i.options.crossfade===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(i=>{var r,o,C,f,d;(o=(r=i.options).onExitComplete)==null||o.call(r),(d=(C=i.resumingFrom)==null?void 0:(f=C.options).onExitComplete)==null||d.call(f)})}scheduleRender(){this.members.forEach(i=>i.instance&&i.scheduleRender(!1))}removeLeadSnapshot(){var i;(i=this.lead)!=null&&i.snapshot&&(this.lead.snapshot=void 0)}}const x3={hasAnimatedSinceResize:!0,hasEverUpdated:!1},yn=["","X","Y","Z"],ay=1e3;let iy=0;function xn(a,i,r,o){const{latestValues:C}=i;C[a]&&(r[a]=C[a],i.setStaticValue(a,0),o&&(o[a]=0))}function au(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:i}=a.options;if(!i)return;const r=jr(i);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:C,layoutId:f}=a.options;window.MotionCancelOptimisedAnimation(r,"transform",w0,!(C||f))}const{parent:o}=a;o&&!o.hasCheckedOptimisedAppear&&au(o)}function iu({attachResizeListener:a,defaultParent:i,measureScroll:r,checkIsScrollRoot:o,resetTransform:C}){return class{constructor(d={},p=i==null?void 0:i()){this.id=iy++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(oy),this.nodes.forEach(dy),this.nodes.forEach(hy),this.nodes.forEach(ry)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let y=0;y<this.path.length;y++)this.path[y].shouldResetTransform=!0;this.root===this&&(this.nodes=new ny)}addEventListener(d,p){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new ct),this.eventHandlers.get(d).add(p)}notifyListeners(d,...p){const y=this.eventHandlers.get(d);y&&y.notify(...p)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Tt(d)&&!sm(d),this.instance=d;const{layoutId:p,layout:y,visualElement:m}=this.options;if(m&&!m.current&&m.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(y||p)&&(this.isLayoutDirty=!0),a){let x,g=0;const M=()=>this.root.updateBlockedByResize=!1;w0.read(()=>{g=window.innerWidth}),a(d,()=>{const S=window.innerWidth;S!==g&&(g=S,this.root.updateBlockedByResize=!0,x&&x(),x=ty(M,250),x3.hasAnimatedSinceResize&&(x3.hasAnimatedSinceResize=!1,this.nodes.forEach(Qs)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&m&&(p||y)&&this.addEventListener("didUpdate",({delta:x,hasLayoutChanged:g,hasRelativeLayoutChanged:M,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||m.getDefaultTransition()||gy,{onLayoutAnimationStart:O,onLayoutAnimationComplete:N}=m.getProps(),D=!this.targetLayout||!nu(this.targetLayout,S),Y=!g&&M;if(this.options.layoutRoot||this.resumeFrom||Y||g&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const U={...vt(E,"layout"),onPlay:O,onComplete:N};(m.shouldReduceMotion||this.options.layoutRoot)&&(U.delay=0,U.type=!1),this.startAnimation(U),this.setAnimationOrigin(x,Y)}else g||Qs(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),i1(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(py),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&au(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let x=0;x<this.path.length;x++){const g=this.path[x];g.shouldResetTransform=!0,(typeof g.latestValues.x=="string"||typeof g.latestValues.y=="string")&&(g.isLayoutDirty=!0),g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:p,layout:y}=this.options;if(p===void 0&&!y)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const y=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),y&&this.nodes.forEach(cy),this.nodes.forEach(Zs);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Ks);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Cy),this.nodes.forEach(fy),this.nodes.forEach(ly),this.nodes.forEach(sy)):this.nodes.forEach(Ks),this.clearAllSnapshots();const p=c6.now();l6.delta=r8(0,1e3/60,p-l6.timestamp),l6.timestamp=p,l6.isProcessing=!0,un.update.process(l6),un.preRender.process(l6),un.render.process(l6),l6.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,St.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(uy),this.sharedNodes.forEach(my)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,w0.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){w0.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!C6(this.snapshot.measuredBox.x)&&!C6(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let y=0;y<this.path.length;y++)this.path[y].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=F0()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(p=!1),p&&this.instance){const y=o(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:y,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:y}}}resetTransform(){if(!C)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!Ir(this.projectionDelta),y=this.getTransformTemplate(),m=y?y(this.latestValues,""):void 0,x=m!==this.prevTransformTemplateValue;d&&this.instance&&(p||T1(this.latestValues)||x)&&(C(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const p=this.measurePageBox();let y=this.removeElementScroll(p);return d&&(y=this.removeTransform(y)),vy(y),{animationId:this.root.animationId,measuredBox:p,layoutBox:y,latestValues:{},source:this.id}}measurePageBox(){var m;const{visualElement:d}=this.options;if(!d)return F0();const p=d.measureViewportBox();if(!(((m=this.scroll)==null?void 0:m.wasRoot)||this.path.some(My))){const{scroll:x}=this.root;x&&(l8(p.x,x.offset.x),l8(p.y,x.offset.y))}return p}removeElementScroll(d){var y;const p=F0();if(J6(p,d),(y=this.scroll)!=null&&y.wasRoot)return p;for(let m=0;m<this.path.length;m++){const x=this.path[m],{scroll:g,options:M}=x;x!==this.root&&g&&M.layoutScroll&&(g.wasRoot&&J6(p,d),l8(p.x,g.offset.x),l8(p.y,g.offset.y))}return p}applyTransform(d,p=!1,y){var x,g;const m=y||F0();J6(m,d);for(let M=0;M<this.path.length;M++){const S=this.path[M];!p&&S.options.layoutScroll&&S.scroll&&S!==S.root&&(l8(m.x,-S.scroll.offset.x),l8(m.y,-S.scroll.offset.y)),T1(S.latestValues)&&m3(m,S.latestValues,(x=S.layout)==null?void 0:x.layoutBox)}return T1(this.latestValues)&&m3(m,this.latestValues,(g=this.layout)==null?void 0:g.layoutBox),m}removeTransform(d){var y;const p=F0();J6(p,d);for(let m=0;m<this.path.length;m++){const x=this.path[m];if(!T1(x.latestValues))continue;let g;x.instance&&(Kn(x.latestValues)&&x.updateSnapshot(),g=F0(),J6(g,x.measurePageBox())),_s(p,x.latestValues,(y=x.snapshot)==null?void 0:y.layoutBox,g)}return T1(this.latestValues)&&_s(p,this.latestValues),p}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==l6.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var S;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const y=!!this.resumingFrom||this!==p;if(!(d||y&&this.isSharedProjectionDirty||this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:x,layoutId:g}=this.options;if(!this.layout||!(x||g))return;this.resolvedRelativeTargetAt=l6.timestamp;const M=this.getClosestProjectingParent();M&&this.linkedParentVersion!==M.layoutVersion&&!M.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&M&&M.layout?this.createRelativeTarget(M,this.layout.layoutBox,M.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=F0(),this.targetWithTransforms=F0()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Ym(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):J6(this.target,this.layout.layoutBox),qr(this.target,this.targetDelta)):J6(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&M&&!!M.resumingFrom==!!this.resumingFrom&&!M.options.layoutScroll&&M.target&&this.animationProgress!==1?this.createRelativeTarget(M,this.target,M.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Kn(this.parent.latestValues)||Hr(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,p,y){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=F0(),this.relativeTargetOrigin=F0(),T3(this.relativeTargetOrigin,p,y,this.options.layoutAnchor||void 0),J6(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var E;const d=this.getLead(),p=!!this.resumingFrom||this!==d;let y=!0;if((this.isProjectionDirty||(E=this.parent)!=null&&E.isProjectionDirty)&&(y=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(y=!1),this.resolvedRelativeTargetAt===l6.timestamp&&(y=!1),y)return;const{layout:m,layoutId:x}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||x))return;J6(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,M=this.treeScale.y;ym(this.layoutCorrected,this.treeScale,this.path,p),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=F0());const{target:S}=d;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ws(this.prevProjectionDelta.x,this.projectionDelta.x),ws(this.prevProjectionDelta.y,this.projectionDelta.y)),T7(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==g||this.treeScale.y!==M||!qs(this.projectionDelta.x,this.prevProjectionDelta.x)||!qs(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var p;if((p=this.options.visualElement)==null||p.scheduleRender(),d){const y=this.getStack();y&&y.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=g2(),this.projectionDelta=g2(),this.projectionDeltaWithTransform=g2()}setAnimationOrigin(d,p=!1){const y=this.snapshot,m=y?y.latestValues:{},x={...this.latestValues},g=g2();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const M=F0(),S=y?y.source:void 0,E=this.layout?this.layout.source:void 0,O=S!==E,N=this.getStack(),D=!N||N.members.length<=1,Y=!!(O&&!D&&this.options.crossfade===!0&&!this.path.some(xy));this.animationProgress=0;let U;this.mixTargetDelta=G=>{const Z=G/1e3;Js(g.x,d.x,Z),Js(g.y,d.y,Z),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(T3(M,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),yy(this.relativeTarget,this.relativeTargetOrigin,M,Z),U&&Km(this.relativeTarget,U)&&(this.isProjectionDirty=!1),U||(U=F0()),J6(U,this.relativeTarget)),O&&(this.animationValues=x,Pm(x,m,this.latestValues,Z,Y,D)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Z},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var p,y,m;this.notifyListeners("animationStart"),(p=this.currentAnimation)==null||p.stop(),(m=(y=this.resumingFrom)==null?void 0:y.currentAnimation)==null||m.stop(),this.pendingAnimation&&(i1(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=w0.update(()=>{x3.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=M2(0)),this.motionValue.jump(0,!1),this.currentAnimation=$m(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:x=>{this.mixTargetDelta(x),d.onUpdate&&d.onUpdate(x)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ay),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:p,target:y,layout:m,latestValues:x}=d;if(!(!p||!y||!m)){if(this!==d&&this.layout&&m&&lu(this.options.animationType,this.layout.layoutBox,m.layoutBox)){y=this.target||F0();const g=C6(this.layout.layoutBox.x);y.x.min=d.target.x.min,y.x.max=y.x.min+g;const M=C6(this.layout.layoutBox.y);y.y.min=d.target.y.min,y.y.max=y.y.min+M}J6(p,y),m3(p,x),T7(this.projectionDeltaWithTransform,this.layoutCorrected,p,x)}}registerSharedNode(d,p){this.sharedNodes.has(d)||this.sharedNodes.set(d,new ey),this.sharedNodes.get(d).add(p);const m=p.options.initialPromotionConfig;p.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(p):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var p;const{layoutId:d}=this.options;return d?((p=this.getStack())==null?void 0:p.lead)||this:this}getPrevLead(){var p;const{layoutId:d}=this.options;return d?(p=this.getStack())==null?void 0:p.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:p,preserveFollowOpacity:y}={}){const m=this.getStack();m&&m.promote(this,y),d&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let p=!1;const{latestValues:y}=d;if((y.z||y.rotate||y.rotateX||y.rotateY||y.rotateZ||y.skewX||y.skewY)&&(p=!0),!p)return;const m={};y.z&&xn("z",d,m,this.animationValues);for(let x=0;x<yn.length;x++)xn(`rotate${yn[x]}`,d,m,this.animationValues),xn(`skew${yn[x]}`,d,m,this.animationValues);d.render();for(const x in m)d.setStaticValue(x,m[x]),this.animationValues&&(this.animationValues[x]=m[x]);d.scheduleRender()}applyProjectionStyles(d,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const y=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=y3(p==null?void 0:p.pointerEvents)||"",d.transform=y?y(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=y3(p==null?void 0:p.pointerEvents)||""),this.hasProjected&&!T1(this.latestValues)&&(d.transform=y?y({},""):"none",this.hasProjected=!1);return}d.visibility="";const x=m.animationValues||m.latestValues;this.applyTransformsToTarget();let g=Qm(this.projectionDeltaWithTransform,this.treeScale,x);y&&(g=y(x,g)),d.transform=g;const{x:M,y:S}=this.projectionDelta;d.transformOrigin=`${M.origin*100}% ${S.origin*100}% 0`,m.animationValues?d.opacity=m===this?x.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:d.opacity=m===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const E in Jn){if(x[E]===void 0)continue;const{correct:O,applyTo:N,isCSSVariable:D}=Jn[E],Y=g==="none"?x[E]:O(x[E],m);if(N){const U=N.length;for(let G=0;G<U;G++)d[N[G]]=Y}else D?this.options.visualElement.renderState.vars[E]=Y:d[E]=Y}this.options.layoutId&&(d.pointerEvents=m===this?y3(p==null?void 0:p.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var p;return(p=d.currentAnimation)==null?void 0:p.stop()}),this.root.nodes.forEach(Zs),this.root.sharedNodes.clear()}}}function ly(a){a.updateLayout()}function sy(a){var r;const i=((r=a.resumeFrom)==null?void 0:r.snapshot)||a.snapshot;if(a.isLead()&&a.layout&&i&&a.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:C}=a.layout,{animationType:f}=a.options,d=i.source!==a.layout.source;if(f==="size")i8(g=>{const M=d?i.measuredBox[g]:i.layoutBox[g],S=C6(M);M.min=o[g].min,M.max=M.min+S});else if(f==="x"||f==="y"){const g=f==="x"?"y":"x";Pn(d?i.measuredBox[g]:i.layoutBox[g],o[g])}else lu(f,i.layoutBox,o)&&i8(g=>{const M=d?i.measuredBox[g]:i.layoutBox[g],S=C6(o[g]);M.max=M.min+S,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[g].max=a.relativeTarget[g].min+S)});const p=g2();T7(p,o,i.layoutBox);const y=g2();d?T7(y,a.applyTransform(C,!0),i.measuredBox):T7(y,o,i.layoutBox);const m=!Ir(p);let x=!1;if(!a.resumeFrom){const g=a.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:M,layout:S}=g;if(M&&S){const E=a.options.layoutAnchor||void 0,O=F0();T3(O,i.layoutBox,M.layoutBox,E);const N=F0();T3(N,o,S.layoutBox,E),nu(O,N)||(x=!0),g.options.layoutRoot&&(a.relativeTarget=N,a.relativeTargetOrigin=O,a.relativeParent=g)}}}a.notifyListeners("didUpdate",{layout:o,snapshot:i,delta:y,layoutDelta:p,hasLayoutChanged:m,hasRelativeLayoutChanged:x})}else if(a.isLead()){const{onExitComplete:o}=a.options;o&&o()}a.options.transition=void 0}function oy(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function ry(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function uy(a){a.clearSnapshot()}function Zs(a){a.clearMeasurements()}function cy(a){a.isLayoutDirty=!0,a.updateLayout()}function Ks(a){a.isLayoutDirty=!1}function Cy(a){a.isAnimationBlocked&&a.layout&&!a.isLayoutDirty&&(a.snapshot=a.layout,a.isLayoutDirty=!0)}function fy(a){const{visualElement:i}=a.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),a.resetTransform()}function Qs(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function dy(a){a.resolveTargetDelta()}function hy(a){a.calcProjection()}function py(a){a.resetSkewAndRotation()}function my(a){a.removeLeadSnapshot()}function Js(a,i,r){a.translate=O0(i.translate,0,r),a.scale=O0(i.scale,1,r),a.origin=i.origin,a.originPoint=i.originPoint}function Ps(a,i,r,o){a.min=O0(i.min,r.min,o),a.max=O0(i.max,r.max,o)}function yy(a,i,r,o){Ps(a.x,i.x,r.x,o),Ps(a.y,i.y,r.y,o)}function xy(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const gy={duration:.45,ease:[.4,0,.1,1]},Fs=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),Ws=Fs("applewebkit/")&&!Fs("chrome/")?Math.round:Y6;function $s(a){a.min=Ws(a.min),a.max=Ws(a.max)}function vy(a){$s(a.x),$s(a.y)}function lu(a,i,r){return a==="position"||a==="preserve-aspect"&&!qm(Hs(i),Hs(r),.2)}function My(a){var i;return a!==a.root&&((i=a.scroll)==null?void 0:i.wasRoot)}const zy=iu({attachResizeListener:(a,i)=>N7(a,"resize",i),measureScroll:()=>{var a,i;return{x:document.documentElement.scrollLeft||((a=document.body)==null?void 0:a.scrollLeft)||0,y:document.documentElement.scrollTop||((i=document.body)==null?void 0:i.scrollTop)||0}},checkIsScrollRoot:()=>!0}),gn={current:void 0},su=iu({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!gn.current){const a=new zy({});a.mount(window),a.setOptions({layoutScroll:!0}),gn.current=a}return gn.current},resetTransform:(a,i)=>{a.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),ou=k.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});function jy(a=!0){const i=k.useContext(ot);if(i===null)return[!0,null];const{isPresent:r,onExitComplete:o,register:C}=i,f=k.useId();k.useEffect(()=>{if(a)return C(f)},[a]);const d=k.useCallback(()=>a&&o&&o(f),[f,o,a]);return!r&&o?[!1,d]:[!0]}const ru=k.createContext({strict:!1}),Is={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let no=!1;function by(){if(no)return;const a={};for(const i in Is)a[i]={isEnabled:r=>Is[i].some(o=>!!r[o])};Br(a),no=!0}function uu(){return by(),dm()}function Sy(a){const i=uu();for(const r in a)i[r]={...i[r],...a[r]};Br(i)}const ky=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function E3(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||ky.has(a)}let cu=a=>!E3(a);function Ty(a){typeof a=="function"&&(cu=i=>i.startsWith("on")?!E3(i):a(i))}try{Ty(require("@emotion/is-prop-valid").default)}catch{}function Ey(a,i,r){const o={};for(const C in a)C==="values"&&typeof a.values=="object"||s6(a[C])||(cu(C)||r===!0&&E3(C)||!i&&!E3(C)||a.draggable&&C.startsWith("onDrag"))&&(o[C]=a[C]);return o}const O3=k.createContext({});function Ay(a,i){if(N3(a)){const{initial:r,animate:o}=a;return{initial:r===!1||D7(r)?r:void 0,animate:D7(o)?o:void 0}}return a.inherit!==!1?i:{}}function wy(a){const{initial:i,animate:r}=Ay(a,k.useContext(O3));return k.useMemo(()=>({initial:i,animate:r}),[to(i),to(r)])}function to(a){return Array.isArray(a)?a.join(" "):a}const Dt=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Cu(a,i,r){for(const o in i)!s6(i[o])&&!Xr(o,r)&&(a[o]=i[o])}function Ry({transformTemplate:a},i){return k.useMemo(()=>{const r=Dt();return wt(r,i,a),Object.assign({},r.vars,r.style)},[i])}function Dy(a,i){const r=a.style||{},o={};return Cu(o,r,a),Object.assign(o,Ry(a,i)),o}function Ny(a,i){const r={},o=Dy(a,i);return a.drag&&a.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(r.tabIndex=0),r.style=o,r}const fu=()=>({...Dt(),attrs:{}});function Oy(a,i,r,o){const C=k.useMemo(()=>{const f=fu();return Zr(f,i,Qr(o),a.transformTemplate,a.style),{...f.attrs,style:{...f.style}}},[i]);if(a.style){const f={};Cu(f,a.style,a),C.style={...f,...C.style}}return C}const Vy=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Nt(a){return typeof a!="string"||a.includes("-")?!1:!!(Vy.indexOf(a)>-1||/[A-Z]/u.test(a))}function _y(a,i,r,{latestValues:o},C,f=!1,d){const y=(d??Nt(a)?Oy:Ny)(i,o,C,a),m=Ey(i,typeof a=="string",f),x=a!==k.Fragment?{...m,...y,ref:r}:{},{children:g}=i,M=k.useMemo(()=>s6(g)?g.get():g,[g]);return k.createElement(a,{...x,children:M})}function By({scrapeMotionValuesFromProps:a,createRenderState:i},r,o,C){return{latestValues:Uy(r,o,C,a),renderState:i()}}function Uy(a,i,r,o){const C={},f=o(a,{});for(const M in f)C[M]=y3(f[M]);let{initial:d,animate:p}=a;const y=N3(a),m=Vr(a);i&&m&&!y&&a.inherit!==!1&&(d===void 0&&(d=i.initial),p===void 0&&(p=i.animate));let x=r?r.initial===!1:!1;x=x||d===!1;const g=x?p:d;if(g&&typeof g!="boolean"&&!D3(g)){const M=Array.isArray(g)?g:[g];for(let S=0;S<M.length;S++){const E=zt(a,M[S]);if(E){const{transitionEnd:O,transition:N,...D}=E;for(const Y in D){let U=D[Y];if(Array.isArray(U)){const G=x?U.length-1:0;U=U[G]}U!==null&&(C[Y]=U)}for(const Y in O)C[Y]=O[Y]}}}return C}const du=a=>(i,r)=>{const o=k.useContext(O3),C=k.useContext(ot),f=()=>By(a,i,o,C);return r?f():Vd(f)},Ly=du({scrapeMotionValuesFromProps:Rt,createRenderState:Dt}),Hy=du({scrapeMotionValuesFromProps:Jr,createRenderState:fu}),qy=Symbol.for("motionComponentSymbol");function Yy(a,i,r){const o=k.useRef(r);k.useInsertionEffect(()=>{o.current=r});const C=k.useRef(null);return k.useCallback(f=>{var p;f&&((p=a.onMount)==null||p.call(a,f));const d=o.current;if(typeof d=="function")if(f){const y=d(f);typeof y=="function"&&(C.current=y)}else C.current?(C.current(),C.current=null):d(f);else d&&(d.current=f);i&&(f?i.mount(f):i.unmount())},[i])}const hu=k.createContext({});function m2(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function Gy(a,i,r,o,C,f){var U,G;const{visualElement:d}=k.useContext(O3),p=k.useContext(ru),y=k.useContext(ot),m=k.useContext(ou),x=m.reducedMotion,g=m.skipAnimations,M=k.useRef(null),S=k.useRef(!1);o=o||p.renderer,!M.current&&o&&(M.current=o(a,{visualState:i,parent:d,props:r,presenceContext:y,blockInitialAnimation:y?y.initial===!1:!1,reducedMotionConfig:x,skipAnimations:g,isSVG:f}),S.current&&M.current&&(M.current.manuallyAnimateOnMount=!0));const E=M.current,O=k.useContext(hu);E&&!E.projection&&C&&(E.type==="html"||E.type==="svg")&&Xy(M.current,r,C,O);const N=k.useRef(!1);k.useInsertionEffect(()=>{E&&N.current&&E.update(r,y)});const D=r[zr],Y=k.useRef(!!D&&typeof window<"u"&&!((U=window.MotionHandoffIsComplete)!=null&&U.call(window,D))&&((G=window.MotionHasOptimisedAnimation)==null?void 0:G.call(window,D)));return Bd(()=>{S.current=!0,E&&(N.current=!0,window.MotionIsMounted=!0,E.updateFeatures(),E.scheduleRenderMicrotask(),Y.current&&E.animationState&&E.animationState.animateChanges())}),k.useEffect(()=>{E&&(!Y.current&&E.animationState&&E.animationState.animateChanges(),Y.current&&(queueMicrotask(()=>{var Z;(Z=window.MotionHandoffMarkAsComplete)==null||Z.call(window,D)}),Y.current=!1),E.enteringChildren=void 0)}),E}function Xy(a,i,r,o){const{layoutId:C,layout:f,drag:d,dragConstraints:p,layoutScroll:y,layoutRoot:m,layoutAnchor:x,layoutCrossfade:g}=i;a.projection=new r(a.latestValues,i["data-framer-portal-id"]?void 0:pu(a.parent)),a.projection.setOptions({layoutId:C,layout:f,alwaysMeasureLayout:!!d||p&&m2(p),visualElement:a,animationType:typeof f=="string"?f:"both",initialPromotionConfig:o,crossfade:g,layoutScroll:y,layoutRoot:m,layoutAnchor:x})}function pu(a){if(a)return a.options.allowProjection!==!1?a.projection:pu(a.parent)}function vn(a,{forwardMotionProps:i=!1,type:r}={},o,C){o&&Sy(o);const f=r?r==="svg":Nt(a),d=f?Hy:Ly;function p(m,x){let g;const M={...k.useContext(ou),...m,layoutId:Zy(m)},{isStatic:S}=M,E=wy(m),O=d(m,S);if(!S&&typeof window<"u"){Ky();const N=Qy(M);g=N.MeasureLayout,E.visualElement=Gy(a,O,M,C,N.ProjectionNode,f)}return s.jsxs(O3.Provider,{value:E,children:[g&&E.visualElement?s.jsx(g,{visualElement:E.visualElement,...M}):null,_y(a,m,Yy(O,E.visualElement,x),O,S,i,f)]})}p.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const y=k.forwardRef(p);return y[qy]=a,y}function Zy({layoutId:a}){const i=k.useContext(Oo).id;return i&&a!==void 0?i+"-"+a:a}function Ky(a,i){k.useContext(ru).strict}function Qy(a){const i=uu(),{drag:r,layout:o}=i;if(!r&&!o)return{};const C={...r,...o};return{MeasureLayout:r!=null&&r.isEnabled(a)||o!=null&&o.isEnabled(a)?C.MeasureLayout:void 0,ProjectionNode:C.ProjectionNode}}function Jy(a,i){if(typeof Proxy>"u")return vn;const r=new Map,o=(f,d)=>vn(f,d,a,i),C=(f,d)=>o(f,d);return new Proxy(C,{get:(f,d)=>d==="create"?o:(r.has(d)||r.set(d,vn(d,void 0,a,i)),r.get(d))})}const Py=(a,i)=>i.isSVG??Nt(a)?new wm(i):new bm(i,{allowProjection:a!==k.Fragment});class Fy extends l1{constructor(i){super(i),i.animationState||(i.animationState=Vm(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();D3(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:r}=this.node.prevProps||{};i!==r&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)==null||i.call(this)}}let Wy=0;class $y extends l1{constructor(){super(...arguments),this.id=Wy++,this.isExitComplete=!1}update(){var f;if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:r}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===o)return;if(i&&o===!1){if(this.isExitComplete){const{initial:d,custom:p}=this.node.getProps();if(typeof d=="string"){const y=R1(this.node,d,p);if(y){const{transition:m,transitionEnd:x,...g}=y;for(const M in g)(f=this.node.getValue(M))==null||f.jump(g[M])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const C=this.node.animationState.setActive("exit",!i);r&&!i&&C.then(()=>{this.isExitComplete=!0,r(this.id)})}mount(){const{register:i,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const Iy={animation:{Feature:Fy},exit:{Feature:$y}};function H7(a){return{point:{x:a.pageX,y:a.pageY}}}const nx=a=>i=>kt(i)&&a(i,H7(i));function E7(a,i,r,o){return N7(a,i,nx(r),o)}const mu=({current:a})=>a?a.ownerDocument.defaultView:null,eo=(a,i)=>Math.abs(a-i);function tx(a,i){const r=eo(a.x,i.x),o=eo(a.y,i.y);return Math.sqrt(r**2+o**2)}const ao=new Set(["auto","scroll"]);class yu{constructor(i,r,{transformPagePoint:o,contextWindow:C=window,dragSnapToOrigin:f=!1,distanceThreshold:d=3,element:p}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=S=>{this.handleScroll(S.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=r3(this.lastRawMoveEventInfo,this.transformPagePoint));const S=Mn(this.lastMoveEventInfo,this.history),E=this.startEvent!==null,O=tx(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!E&&!O)return;const{point:N}=S,{timestamp:D}=l6;this.history.push({...N,timestamp:D});const{onStart:Y,onMove:U}=this.handlers;E||(Y&&Y(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),U&&U(this.lastMoveEvent,S)},this.handlePointerMove=(S,E)=>{this.lastMoveEvent=S,this.lastRawMoveEventInfo=E,this.lastMoveEventInfo=r3(E,this.transformPagePoint),w0.update(this.updatePoint,!0)},this.handlePointerUp=(S,E)=>{this.end();const{onEnd:O,onSessionEnd:N,resumeAnimation:D}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&D&&D(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const Y=Mn(S.type==="pointercancel"?this.lastMoveEventInfo:r3(E,this.transformPagePoint),this.history);this.startEvent&&O&&O(S,Y),N&&N(S,Y)},!kt(i))return;this.dragSnapToOrigin=f,this.handlers=r,this.transformPagePoint=o,this.distanceThreshold=d,this.contextWindow=C||window;const y=H7(i),m=r3(y,this.transformPagePoint),{point:x}=m,{timestamp:g}=l6;this.history=[{...x,timestamp:g}];const{onSessionStart:M}=r;M&&M(i,Mn(m,this.history)),this.removeListeners=B7(E7(this.contextWindow,"pointermove",this.handlePointerMove),E7(this.contextWindow,"pointerup",this.handlePointerUp),E7(this.contextWindow,"pointercancel",this.handlePointerUp)),p&&this.startScrollTracking(p)}startScrollTracking(i){let r=i.parentElement;for(;r;){const o=getComputedStyle(r);(ao.has(o.overflowX)||ao.has(o.overflowY))&&this.scrollPositions.set(r,{x:r.scrollLeft,y:r.scrollTop}),r=r.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(i){const r=this.scrollPositions.get(i);if(!r)return;const o=i===window,C=o?{x:window.scrollX,y:window.scrollY}:{x:i.scrollLeft,y:i.scrollTop},f={x:C.x-r.x,y:C.y-r.y};f.x===0&&f.y===0||(o?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=f.x,this.lastMoveEventInfo.point.y+=f.y):this.history.length>0&&(this.history[0].x-=f.x,this.history[0].y-=f.y),this.scrollPositions.set(i,C),w0.update(this.updatePoint,!0))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),i1(this.updatePoint)}}function r3(a,i){return i?{point:i(a.point)}:a}function io(a,i){return{x:a.x-i.x,y:a.y-i.y}}function Mn({point:a},i){return{point:a,delta:io(a,xu(i)),offset:io(a,ex(i)),velocity:ax(i,.1)}}function ex(a){return a[0]}function xu(a){return a[a.length-1]}function ax(a,i){if(a.length<2)return{x:0,y:0};let r=a.length-1,o=null;const C=xu(a);for(;r>=0&&(o=a[r],!(C.timestamp-o.timestamp>w6(i)));)r--;if(!o)return{x:0,y:0};o===a[0]&&a.length>2&&C.timestamp-o.timestamp>w6(i)*2&&(o=a[1]);const f=q6(C.timestamp-o.timestamp);if(f===0)return{x:0,y:0};const d={x:(C.x-o.x)/f,y:(C.y-o.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function ix(a,{min:i,max:r},o){return i!==void 0&&a<i?a=o?O0(i,a,o.min):Math.max(a,i):r!==void 0&&a>r&&(a=o?O0(r,a,o.max):Math.min(a,r)),a}function lo(a,i,r){return{min:i!==void 0?a.min+i:void 0,max:r!==void 0?a.max+r-(a.max-a.min):void 0}}function lx(a,{top:i,left:r,bottom:o,right:C}){return{x:lo(a.x,r,C),y:lo(a.y,i,o)}}function so(a,i){let r=i.min-a.min,o=i.max-a.max;return i.max-i.min<a.max-a.min&&([r,o]=[o,r]),{min:r,max:o}}function sx(a,i){return{x:so(a.x,i.x),y:so(a.y,i.y)}}function ox(a,i){let r=.5;const o=C6(a),C=C6(i);return C>o?r=w7(i.min,i.max-o,a.min):o>C&&(r=w7(a.min,a.max-C,i.min)),r8(0,1,r)}function rx(a,i){const r={};return i.min!==void 0&&(r.min=i.min-a.min),i.max!==void 0&&(r.max=i.max-a.min),r}const Fn=.35;function ux(a=Fn){return a===!1?a=0:a===!0&&(a=Fn),{x:oo(a,"left","right"),y:oo(a,"top","bottom")}}function oo(a,i,r){return{min:ro(a,i),max:ro(a,r)}}function ro(a,i){return typeof a=="number"?a:a[i]||0}const cx=new WeakMap;class Cx{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=F0(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:r=!1,distanceThreshold:o}={}){const{presenceContext:C}=this.visualElement;if(C&&C.isPresent===!1)return;const f=g=>{r&&this.snapToCursor(H7(g).point),this.stopAnimation()},d=(g,M)=>{const{drag:S,dragPropagation:E,onDragStart:O}=this.getProps();if(S&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Gp(S),!this.openDragLock))return;this.latestPointerEvent=g,this.latestPanInfo=M,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),i8(D=>{let Y=this.getAxisMotionValue(D).get()||0;if(o8.test(Y)){const{projection:U}=this.visualElement;if(U&&U.layout){const G=U.layout.layoutBox[D];G&&(Y=C6(G)*(parseFloat(Y)/100))}}this.originPoint[D]=Y}),O&&w0.update(()=>O(g,M),!1,!0),qn(this.visualElement,"transform");const{animationState:N}=this.visualElement;N&&N.setActive("whileDrag",!0)},p=(g,M)=>{this.latestPointerEvent=g,this.latestPanInfo=M;const{dragPropagation:S,dragDirectionLock:E,onDirectionLock:O,onDrag:N}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:D}=M;if(E&&this.currentDirection===null){this.currentDirection=dx(D),this.currentDirection!==null&&O&&O(this.currentDirection);return}this.updateAxis("x",M.point,D),this.updateAxis("y",M.point,D),this.visualElement.render(),N&&w0.update(()=>N(g,M),!1,!0)},y=(g,M)=>{this.latestPointerEvent=g,this.latestPanInfo=M,this.stop(g,M),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>{const{dragSnapToOrigin:g}=this.getProps();(g||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:x}=this.getProps();this.panSession=new yu(i,{onSessionStart:f,onStart:d,onMove:p,onSessionEnd:y,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:x,distanceThreshold:o,contextWindow:mu(this.visualElement),element:this.visualElement.current})}stop(i,r){const o=i||this.latestPointerEvent,C=r||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!C||!o)return;const{velocity:d}=C;this.startAnimation(d);const{onDragEnd:p}=this.getProps();p&&w0.postRender(()=>p(o,C))}cancel(){this.isDragging=!1;const{projection:i,animationState:r}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(i,r,o){const{drag:C}=this.getProps();if(!o||!u3(i,C,this.currentDirection))return;const f=this.getAxisMotionValue(i);let d=this.originPoint[i]+o[i];this.constraints&&this.constraints[i]&&(d=ix(d,this.constraints[i],this.elastic[i])),f.set(d)}resolveConstraints(){var f;const{dragConstraints:i,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(f=this.visualElement.projection)==null?void 0:f.layout,C=this.constraints;i&&m2(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&o?this.constraints=lx(o.layoutBox,i):this.constraints=!1,this.elastic=ux(r),C!==this.constraints&&!m2(i)&&o&&this.constraints&&!this.hasMutatedConstraints&&i8(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=rx(o.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:r}=this.getProps();if(!i||!m2(i))return!1;const o=i.current,{projection:C}=this.visualElement;if(!C||!C.layout)return!1;const f=xm(o,C.root,this.visualElement.getTransformPagePoint());let d=sx(C.layout.layoutBox,f);if(r){const p=r(pm(d));this.hasMutatedConstraints=!!p,p&&(d=Lr(p))}return d}startAnimation(i){const{drag:r,dragMomentum:o,dragElastic:C,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:p}=this.getProps(),y=this.constraints||{},m=i8(x=>{if(!u3(x,r,this.currentDirection))return;let g=y&&y[x]||{};(d===!0||d===x)&&(g={min:0,max:0});const M=C?200:1e6,S=C?40:1e7,E={type:"inertia",velocity:o?i[x]:0,bounceStiffness:M,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...f,...g};return this.startAxisValueAnimation(x,E)});return Promise.all(m).then(p)}startAxisValueAnimation(i,r){const o=this.getAxisMotionValue(i);return qn(this.visualElement,i),o.start(Mt(i,o,0,r,this.visualElement,!1))}stopAnimation(){i8(i=>this.getAxisMotionValue(i).stop())}getAxisMotionValue(i){const r=`_drag${i.toUpperCase()}`,o=this.visualElement.getProps(),C=o[r];return C||this.visualElement.getValue(i,(o.initial?o.initial[i]:void 0)||0)}snapToCursor(i){i8(r=>{const{drag:o}=this.getProps();if(!u3(r,o,this.currentDirection))return;const{projection:C}=this.visualElement,f=this.getAxisMotionValue(r);if(C&&C.layout){const{min:d,max:p}=C.layout.layoutBox[r],y=f.get()||0;f.set(i[r]-O0(d,p,.5)+y)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:r}=this.getProps(),{projection:o}=this.visualElement;if(!m2(r)||!o||!this.constraints)return;this.stopAnimation();const C={x:0,y:0};i8(d=>{const p=this.getAxisMotionValue(d);if(p&&this.constraints!==!1){const y=p.get();C[d]=ox({min:y,max:y},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.constraints=!1,this.resolveConstraints(),i8(d=>{if(!u3(d,i,null))return;const p=this.getAxisMotionValue(d),{min:y,max:m}=this.constraints[d];p.set(O0(y,m,C[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;cx.set(this.visualElement,this);const i=this.visualElement.current,r=E7(i,"pointerdown",m=>{const{drag:x,dragListener:g=!0}=this.getProps(),M=m.target,S=M!==i&&Pp(M);x&&g&&!S&&this.start(m)});let o;const C=()=>{const{dragConstraints:m}=this.getProps();m2(m)&&m.current&&(this.constraints=this.resolveRefConstraints(),o||(o=fx(i,m.current,()=>this.scalePositionWithinConstraints())))},{projection:f}=this.visualElement,d=f.addEventListener("measure",C);f&&!f.layout&&(f.root&&f.root.updateScroll(),f.updateLayout()),w0.read(C);const p=N7(window,"resize",()=>this.scalePositionWithinConstraints()),y=f.addEventListener("didUpdate",(({delta:m,hasLayoutChanged:x})=>{this.isDragging&&x&&(i8(g=>{const M=this.getAxisMotionValue(g);M&&(this.originPoint[g]+=m[g].translate,M.set(M.get()+m[g].translate))}),this.visualElement.render())}));return()=>{p(),r(),d(),y&&y(),o&&o()}}getProps(){const i=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:o=!1,dragPropagation:C=!1,dragConstraints:f=!1,dragElastic:d=Fn,dragMomentum:p=!0}=i;return{...i,drag:r,dragDirectionLock:o,dragPropagation:C,dragConstraints:f,dragElastic:d,dragMomentum:p}}}function uo(a){let i=!0;return()=>{if(i){i=!1;return}a()}}function fx(a,i,r){const o=xs(a,uo(r)),C=xs(i,uo(r));return()=>{o(),C()}}function u3(a,i,r){return(i===!0||i===a)&&(r===null||r===a)}function dx(a,i=10){let r=null;return Math.abs(a.y)>i?r="y":Math.abs(a.x)>i&&(r="x"),r}class hx extends l1{constructor(i){super(i),this.removeGroupControls=Y6,this.removeListeners=Y6,this.controls=new Cx(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Y6}update(){const{dragControls:i}=this.node.getProps(),{dragControls:r}=this.node.prevProps||{};i!==r&&(this.removeGroupControls(),i&&(this.removeGroupControls=i.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const zn=a=>(i,r)=>{a&&w0.update(()=>a(i,r),!1,!0)};class px extends l1{constructor(){super(...arguments),this.removePointerDownListener=Y6}onPointerDown(i){this.session=new yu(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:mu(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:r,onPan:o,onPanEnd:C}=this.node.getProps();return{onSessionStart:zn(i),onStart:zn(r),onMove:zn(o),onEnd:(f,d)=>{delete this.session,C&&w0.postRender(()=>C(f,d))}}}mount(){this.removePointerDownListener=E7(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let jn=!1;class mx extends k.Component{componentDidMount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:o,layoutId:C}=this.props,{projection:f}=i;f&&(r.group&&r.group.add(f),o&&o.register&&C&&o.register(f),jn&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),x3.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:r,visualElement:o,drag:C,isPresent:f}=this.props,{projection:d}=o;return d&&(d.isPresent=f,i.layoutDependency!==r&&d.setOptions({...d.options,layoutDependency:r}),jn=!0,C||i.layoutDependency!==r||r===void 0||i.isPresent!==f?d.willUpdate():this.safeToRemove(),i.isPresent!==f&&(f?d.promote():d.relegate()||w0.postRender(()=>{const p=d.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:i,layoutAnchor:r}=this.props,{projection:o}=i;o&&(o.options.layoutAnchor=r,o.root.didUpdate(),St.postRender(()=>{!o.currentAnimation&&o.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:o}=this.props,{projection:C}=i;jn=!0,C&&(C.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(C),o&&o.deregister&&o.deregister(C))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function gu(a){const[i,r]=jy(),o=k.useContext(Oo);return s.jsx(mx,{...a,layoutGroup:o,switchLayoutGroup:k.useContext(hu),isPresent:i,safeToRemove:r})}const yx={pan:{Feature:px},drag:{Feature:hx,ProjectionNode:su,MeasureLayout:gu}};function co(a,i,r){const{props:o}=a;a.animationState&&o.whileHover&&a.animationState.setActive("whileHover",r==="Start");const C="onHover"+r,f=o[C];f&&w0.postRender(()=>f(i,H7(i)))}class xx extends l1{mount(){const{current:i}=this.node;i&&(this.unmount=Zp(i,(r,o)=>(co(this.node,o,"Start"),C=>co(this.node,C,"End"))))}unmount(){}}class gx extends l1{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=B7(N7(this.node.current,"focus",()=>this.onFocus()),N7(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Co(a,i,r){const{props:o}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&o.whileTap&&a.animationState.setActive("whileTap",r==="Start");const C="onTap"+(r==="End"?"":r),f=o[C];f&&w0.postRender(()=>f(i,H7(i)))}class vx extends l1{mount(){const{current:i}=this.node;if(!i)return;const{globalTapTarget:r,propagate:o}=this.node.props;this.unmount=Wp(i,(C,f)=>(Co(this.node,f,"Start"),(d,{success:p})=>Co(this.node,d,p?"End":"Cancel")),{useGlobalTarget:r,stopPropagation:(o==null?void 0:o.tap)===!1})}unmount(){}}const Wn=new WeakMap,bn=new WeakMap,Mx=a=>{const i=Wn.get(a.target);i&&i(a)},zx=a=>{a.forEach(Mx)};function jx({root:a,...i}){const r=a||document;bn.has(r)||bn.set(r,{});const o=bn.get(r),C=JSON.stringify(i);return o[C]||(o[C]=new IntersectionObserver(zx,{root:a,...i})),o[C]}function bx(a,i,r){const o=jx(i);return Wn.set(a,r),o.observe(a),()=>{Wn.delete(a),o.unobserve(a)}}const Sx={some:0,all:1};class kx extends l1{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var y;(y=this.stopObserver)==null||y.call(this);const{viewport:i={}}=this.node.getProps(),{root:r,margin:o,amount:C="some",once:f}=i,d={root:r?r.current:void 0,rootMargin:o,threshold:typeof C=="number"?C:Sx[C]},p=m=>{const{isIntersecting:x}=m;if(this.isInView===x||(this.isInView=x,f&&!x&&this.hasEnteredView))return;x&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",x);const{onViewportEnter:g,onViewportLeave:M}=this.node.getProps(),S=x?g:M;S&&S(m)};this.stopObserver=bx(this.node.current,d,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:r}=this.node;["amount","margin","root"].some(Tx(i,r))&&this.startObserver()}unmount(){var i;(i=this.stopObserver)==null||i.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Tx({viewport:a={}},{viewport:i={}}={}){return r=>a[r]!==i[r]}const Ex={inView:{Feature:kx},tap:{Feature:vx},focus:{Feature:gx},hover:{Feature:xx}},Ax={layout:{ProjectionNode:su,MeasureLayout:gu}},wx={...Iy,...Ex,...yx,...Ax},g6=Jy(wx,Py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Dx=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,r,o)=>o?o.toUpperCase():r.toLowerCase()),fo=a=>{const i=Dx(a);return i.charAt(0).toUpperCase()+i.slice(1)},vu=(...a)=>a.filter((i,r,o)=>!!i&&i.trim()!==""&&o.indexOf(i)===r).join(" ").trim(),Nx=a=>{for(const i in a)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ox={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=k.forwardRef(({color:a="currentColor",size:i=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:C="",children:f,iconNode:d,...p},y)=>k.createElement("svg",{ref:y,...Ox,width:i,height:i,stroke:a,strokeWidth:o?Number(r)*24/Number(i):r,className:vu("lucide",C),...!f&&!Nx(p)&&{"aria-hidden":"true"},...p},[...d.map(([m,x])=>k.createElement(m,x)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=(a,i)=>{const r=k.forwardRef(({className:o,...C},f)=>k.createElement(Vx,{ref:f,iconNode:i,className:vu(`lucide-${Rx(fo(a))}`,`lucide-${a}`,o),...C}));return r.displayName=fo(a),r};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Bx=X6("arrow-right",_x);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],F6=X6("circle-check",Ux);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Hx=X6("credit-card",Lx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Yx=X6("file-text",qx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Xx=X6("globe",Gx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Kx=X6("menu",Zx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Jx=X6("search",Qx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Mu=X6("send",Px);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Wx=X6("shield-check",Fx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Ix=X6("trending-up",$x);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],tg=X6("x",ng);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ho=X6("zap",eg),zu=({className:a})=>s.jsxs("svg",{className:a,version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"100%",viewBox:"0 0 1119 944","enable-background":"new 0 0 1119 944","xml:space":"preserve",children:[s.jsx("path",{fill:"#FFFFFF",opacity:"1.000000",stroke:"none",d:`
M1.000000,323.000000 
	C1.000000,215.333328 1.000000,108.166664 1.000000,1.000000 
	C374.000000,1.000000 747.000000,1.000000 1120.000000,1.000000 
	C1120.000000,315.666656 1120.000000,630.333313 1120.000000,945.000000 
	C747.000000,945.000000 374.000000,945.000000 1.000000,945.000000 
	C1.000000,737.833313 1.000000,530.666687 1.000000,323.000000 
M886.124390,192.992798 
	C886.124390,192.992798 886.382324,192.637085 886.237122,192.167786 
	C886.067078,191.865036 885.814697,191.667679 885.013428,191.665283 
	C885.013428,191.665283 885.474121,191.547318 885.251953,191.030731 
	C884.841309,190.667664 884.430664,190.304611 883.887756,189.484863 
	C883.721924,189.185959 883.470520,189.007584 882.911377,188.309906 
	C873.292236,178.825348 863.673035,169.340790 853.889771,159.417877 
	C853.696777,159.143692 853.433228,158.992386 852.900024,158.448441 
	C852.458801,158.125549 852.017578,157.802658 851.462769,157.468857 
	C851.462769,157.468857 851.411865,157.366638 851.210999,156.991364 
	C851.025940,156.757324 850.786499,156.614304 850.401489,156.578491 
	C850.401489,156.578491 850.416870,156.487152 850.199402,156.057449 
	C849.985474,155.792953 849.709595,155.641129 849.018311,155.646561 
	C849.018311,155.646561 849.369995,155.577530 849.074158,155.019608 
	C847.732788,153.985840 846.391418,152.952087 845.011902,151.995209 
	C845.011902,151.995209 845.081787,151.945404 844.853882,151.431747 
	C844.390625,151.123886 843.927368,150.816025 843.247498,150.781418 
	C843.247498,150.781418 843.414795,150.475479 843.172302,150.049683 
	C842.939209,149.795120 842.650513,149.655563 842.162659,149.996048 
	C842.162659,149.996048 842.336487,149.644272 842.054688,149.089767 
	C841.054138,148.364471 840.053650,147.639175 839.012756,146.994003 
	C839.012756,146.994003 839.085388,146.941284 838.790283,146.348801 
	C836.874146,144.875473 834.958069,143.402161 833.011230,141.999786 
	C833.011230,141.999786 833.072327,141.952469 832.771545,141.383621 
	C831.548767,140.539703 830.326050,139.695770 829.036194,138.965881 
	C829.036194,138.965881 829.143066,138.887909 828.911865,138.368896 
	C828.430908,138.076950 827.950012,137.785004 827.301147,137.748718 
	C827.301147,137.748718 827.411621,137.463501 827.147156,137.044647 
	C826.894653,136.807068 826.595215,136.680588 826.130920,136.883392 
	C826.130920,136.883392 826.298584,136.700638 826.027893,136.159714 
	C825.199890,135.602966 824.371948,135.046234 823.437622,134.488968 
	C823.437622,134.488968 823.410095,134.386215 823.043091,133.905228 
	C821.877136,133.101288 820.711182,132.297333 819.439270,131.493332 
	C819.439270,131.493332 819.411438,131.391083 819.045593,130.916473 
	C818.031128,130.273987 817.016724,129.631500 816.000000,129.001770 
	C816.000000,129.001770 816.013306,128.995987 815.692749,128.463104 
	C814.811157,127.948822 813.929504,127.434540 813.017151,126.999680 
	C813.017151,126.999680 813.080994,126.943222 812.766846,126.400681 
	C811.871582,125.891678 810.976318,125.382683 810.033203,124.978630 
	C810.033203,124.978630 810.122864,124.906044 809.795044,124.337891 
	C808.345886,123.398453 806.896729,122.459023 805.272339,121.648087 
	C805.272339,121.648087 805.392273,121.466957 805.043274,120.995514 
	C804.216309,120.486435 803.389343,119.977356 802.454956,119.478416 
	C802.454956,119.478416 802.400146,119.385529 802.118408,118.997200 
	C801.864563,118.776337 801.569397,118.666992 801.184570,118.788437 
	C801.184570,118.788437 801.302673,118.737289 801.055908,118.249023 
	C800.718201,118.132050 800.380554,118.015083 800.027954,117.983002 
	C800.027954,117.983002 800.096863,117.931145 799.762329,117.386780 
	C798.677368,116.750275 797.592468,116.113762 796.411438,115.505646 
	C796.411438,115.505646 796.395508,115.406700 796.011292,114.957184 
	C795.154724,114.475685 794.298157,113.994194 793.257935,113.669975 
	C793.257935,113.669975 793.386475,113.465157 793.008972,112.993301 
	C792.127197,112.514214 791.245361,112.035126 790.002441,111.998779 
	C790.122498,111.851364 790.242493,111.703949 789.986633,111.036674 
	C788.504578,110.181320 787.022461,109.325966 785.436462,108.484772 
	C785.436462,108.484772 785.392578,108.389503 784.965820,107.938988 
	C783.655884,107.270691 782.345947,106.602386 781.018555,106.004105 
	C781.018555,106.004105 781.070496,105.953896 780.674133,105.403404 
	C775.870117,102.810303 771.066101,100.217201 766.170471,97.764786 
	C766.170471,97.764786 766.319824,97.688141 766.042603,97.224823 
	C765.701660,97.133194 765.360657,97.041565 765.012390,97.005463 
	C765.012390,97.005463 765.052490,96.966232 764.674988,96.469749 
	C763.920593,96.138451 763.166199,95.807144 762.154907,95.941605 
	C762.230530,95.781250 762.306091,95.620895 761.927429,94.995911 
	C755.395203,91.842529 748.862976,88.689148 742.259888,85.544868 
	C742.259888,85.544868 742.317627,85.558853 741.845276,85.074455 
	C692.979614,62.141357 641.512695,49.044872 587.761353,45.220932 
	C528.881897,41.032173 471.196777,47.777905 414.918427,65.827568 
	C390.178741,73.762108 366.301971,83.721992 343.634216,96.586449 
	C343.634216,96.586449 343.533722,96.480637 343.002106,96.643555 
	C342.560944,96.958977 342.119812,97.274399 341.735657,97.778557 
	C341.735657,97.778557 341.665802,97.579506 340.978485,97.760254 
	C337.969788,99.496613 334.961090,101.232971 331.987488,103.006523 
	C331.987488,103.006523 331.976135,102.957062 331.329498,103.035812 
	C330.088379,103.831558 328.847260,104.627304 327.578308,105.516953 
	C327.578308,105.516953 327.484772,105.487808 326.868011,105.711502 
	C325.220764,106.790970 323.573486,107.870445 321.981964,109.003021 
	C321.981964,109.003021 321.958954,108.929581 321.310211,109.021255 
	C320.081451,109.858025 318.852722,110.694794 317.864594,111.983498 
	C317.776154,111.837448 317.687714,111.691391 317.023499,111.715179 
	C316.217224,112.281586 315.410950,112.848000 314.579224,113.511192 
	C314.579224,113.511192 314.480957,113.492241 313.936737,113.700691 
	C313.156708,114.261810 312.376648,114.822937 311.565704,115.483986 
	C311.565704,115.483986 311.462982,115.464279 310.945770,115.662163 
	C310.541229,116.015938 310.136658,116.369713 309.862915,116.812965 
	C309.862915,116.812965 309.795624,116.669487 309.212158,116.792824 
	C308.774689,117.171516 308.337219,117.550209 307.974609,117.991066 
	C307.974609,117.991066 307.939667,117.900246 307.372162,117.974831 
	C306.775391,118.429344 306.178619,118.883850 305.519897,119.441605 
	C305.519897,119.441605 305.400116,119.453674 304.900116,119.659668 
	C304.506042,120.005844 304.111938,120.352020 303.878693,120.824783 
	C303.878693,120.824783 303.771606,120.650368 303.193329,120.783447 
	C302.765747,121.168640 302.338165,121.553841 301.980042,121.995865 
	C301.980042,121.995865 301.947144,121.912346 301.280945,122.058578 
	C299.161255,123.688652 297.041565,125.318718 294.985565,126.998222 
	C294.985565,126.998222 294.956421,126.923065 294.376221,127.037697 
	C293.792328,127.546333 293.208435,128.054977 292.904541,129.020081 
	C292.816315,128.865433 292.728058,128.710800 292.087433,128.732468 
	C291.681824,129.122742 291.276215,129.513016 290.963928,129.972290 
	C290.963928,129.972290 290.914185,129.867432 290.299286,129.989716 
	C289.512146,130.646957 288.724976,131.304199 287.989899,132.002960 
	C287.989899,132.002960 287.967194,131.940338 287.340363,132.090271 
	C286.205170,133.046173 285.069977,134.002075 283.990631,135.001587 
	C283.990631,135.001587 283.963074,134.936356 283.361084,135.089981 
	C282.438721,135.887009 281.516327,136.684036 280.885101,137.750793 
	C280.885101,137.750793 280.561676,137.520752 280.029419,137.721268 
	C279.644684,138.117432 279.259979,138.513611 278.967468,138.972885 
	C278.967468,138.972885 278.918213,138.872604 278.341339,139.011368 
	C277.774719,139.543411 277.208130,140.075455 276.976013,140.887604 
	C276.976013,140.887604 276.643036,140.616013 276.189911,140.735947 
	C275.897827,140.885162 275.692078,141.112518 275.546173,141.515091 
	C275.546173,141.515091 275.450623,141.483337 274.951782,141.715591 
	C274.584320,142.104553 274.216888,142.493500 273.957062,142.959854 
	C273.957062,142.959854 273.892151,142.844269 273.319031,142.981949 
	C272.751953,143.506287 272.184875,144.030624 271.970612,144.892319 
	C271.970612,144.892319 271.619629,144.562500 271.084991,144.759460 
	C270.707794,145.168076 270.330627,145.576691 269.488831,146.102875 
	C269.181946,146.263290 268.999939,146.514267 268.340759,147.047501 
	C267.444397,147.908035 266.548035,148.768555 265.842712,149.978256 
	C265.842712,149.978256 265.663269,149.630219 265.188049,149.766663 
	C264.877777,149.929459 264.674103,150.179184 264.687988,150.960266 
	C264.687988,150.960266 264.542206,150.525925 264.030914,150.751587 
	C263.671143,151.162918 263.311371,151.574249 262.489899,152.112732 
	C262.191010,152.282471 262.012451,152.536728 261.318085,153.094376 
	C259.186127,155.053848 257.054138,157.013306 254.393112,159.158142 
	C253.901993,159.704208 253.410889,160.250275 252.289474,161.050140 
	C249.048782,164.164520 245.808090,167.278900 242.514053,170.505508 
	C242.514053,170.505508 242.410034,170.573486 242.028793,170.747940 
	C241.789734,170.916794 241.633148,171.142776 241.513840,171.531250 
	C241.513840,171.531250 241.407501,171.574112 241.026855,171.747772 
	C240.788162,171.916351 240.632309,172.142105 240.513168,172.530624 
	C240.513168,172.530624 240.406769,172.574860 240.025711,172.749252 
	C239.786819,172.918518 239.631287,173.145004 239.516327,173.533768 
	C239.516327,173.533768 239.410721,173.575165 239.027176,173.751633 
	C238.786758,173.922607 238.630692,174.151184 238.523270,174.540939 
	C238.523270,174.540939 238.419388,174.575729 238.029541,174.758545 
	C237.785324,174.934799 237.628540,175.169479 237.543533,175.561569 
	C237.543533,175.561569 237.444183,175.574860 237.046310,175.755157 
	C236.796616,175.931107 236.634811,176.167267 236.544418,176.562546 
	C236.544418,176.562546 236.445312,176.577637 236.038879,176.774628 
	C235.784058,176.964096 235.627640,177.214935 235.559952,177.615005 
	C235.559952,177.615005 235.476608,177.585541 234.909851,177.891891 
	C231.874710,181.235184 228.839569,184.578491 225.254608,188.175293 
	C224.501022,189.108505 223.747437,190.041718 222.477859,191.190918 
	C222.159607,191.642593 221.841354,192.094254 221.629166,192.747940 
	C221.629166,192.747940 221.463821,192.590729 220.929611,192.924606 
	C219.584808,194.602997 218.240021,196.281387 216.442230,198.136948 
	C216.157684,198.341171 216.007492,198.618225 215.397537,199.275330 
	C212.547623,202.813950 209.697708,206.352570 206.967209,209.962555 
	C206.967209,209.962555 206.882202,209.852448 206.369019,210.081573 
	C206.073578,210.553024 205.778137,211.024490 205.511856,211.593201 
	C205.511856,211.593201 205.410797,211.583496 204.919708,211.930969 
	C204.244827,212.932098 203.569946,213.933243 202.986435,214.978333 
	C202.986435,214.978333 202.926559,214.896515 202.341370,215.206573 
	C201.065552,216.973221 199.789734,218.739853 198.531036,220.601974 
	C198.531036,220.601974 198.434097,220.598679 197.942978,220.967697 
	C197.138351,222.164230 196.333725,223.360748 195.712372,224.799789 
	C195.712372,224.799789 195.482712,224.600632 195.005859,224.930878 
	C194.624725,225.591110 194.243607,226.251343 193.968658,226.961044 
	C193.968658,226.961044 193.899445,226.866531 193.388397,227.114365 
	C193.096420,227.595322 192.804443,228.076263 192.681992,228.806503 
	C192.681992,228.806503 192.463409,228.598892 191.994476,228.936386 
	C191.623932,229.599884 191.253372,230.263382 190.982040,230.969910 
	C190.982040,230.969910 190.914871,230.885117 190.354797,231.206039 
	C189.572662,232.473572 188.790543,233.741104 188.000000,235.000000 
	C188.000000,235.000000 188.009064,235.007736 187.476624,235.359116 
	C186.835312,236.447693 186.194000,237.536270 185.941345,239.013062 
	C185.809509,238.884354 185.677673,238.755630 185.058945,238.953171 
	C184.694916,239.629959 184.330887,240.306747 184.005142,240.993500 
	C184.005142,240.993500 183.978729,240.963287 183.453598,241.299896 
	C182.961914,242.197250 182.470230,243.094620 182.003922,243.996445 
	C182.003922,243.996445 181.988129,243.974854 181.470535,244.320160 
	C180.981979,245.215546 180.493439,246.110916 180.000000,247.000000 
	C180.000000,247.000000 180.006241,247.003845 179.484665,247.378128 
	C178.855988,248.485733 178.227325,249.593353 177.912552,250.926208 
	C177.912552,250.926208 177.624832,250.668381 177.091629,251.033463 
	C176.230042,252.533234 175.368469,254.033005 174.553146,255.625168 
	C174.553146,255.625168 174.450562,255.612839 173.975250,256.028839 
	C173.144653,257.514008 172.314056,258.999176 171.506638,260.581848 
	C171.506638,260.581848 171.409424,260.606079 170.952332,261.029236 
	C170.268417,262.333252 169.584503,263.637268 168.992554,264.970734 
	C168.992554,264.970734 168.927261,264.899597 168.380035,265.300659 
	C167.096893,267.734100 165.813736,270.167542 164.709641,272.717102 
	C164.709641,272.717102 164.501938,272.667969 164.083328,273.023743 
	C163.878021,273.531342 163.672699,274.038910 163.635345,274.672638 
	C163.635345,274.672638 163.432800,274.617004 162.973633,275.071625 
	C161.838928,277.271973 160.704224,279.472321 159.633499,281.841675 
	C159.633499,281.841675 159.587234,281.680054 159.095703,282.072937 
	C158.703278,283.033020 158.310852,283.993103 158.000626,284.974274 
	C158.000626,284.974274 157.939774,284.915100 157.458527,285.280304 
	C157.264267,285.838562 157.070007,286.396851 156.963196,286.956085 
	C156.963196,286.956085 156.912415,286.884888 156.374939,287.299530 
	C155.543686,289.183228 154.712433,291.066956 153.971573,292.958496 
	C153.971573,292.958496 153.914337,292.888092 153.431625,293.257263 
	C153.250351,293.824524 153.069077,294.391754 152.974609,294.963684 
	C152.974609,294.963684 152.920044,294.895996 152.416428,295.288208 
	C152.111313,296.074951 151.806198,296.861694 151.669006,297.570862 
	C151.669006,297.570862 151.517563,297.673126 151.037506,298.145782 
	C131.127396,340.100433 117.847359,384.037079 111.729637,430.093658 
	C103.022789,495.642242 108.172203,560.071167 128.293457,623.094910 
	C133.229477,638.555420 139.905853,653.460327 145.743210,668.846558 
	C145.743210,668.846558 145.922470,668.989502 145.964401,669.739502 
	C149.615082,677.196228 153.265762,684.653015 156.972488,692.038574 
	C156.972488,692.038574 156.882477,692.048706 156.928391,692.649780 
	C157.267120,693.126160 157.605850,693.602539 158.003418,694.024231 
	C158.003418,694.024231 157.925522,694.043823 158.010040,694.756531 
	C159.809311,697.967224 161.608582,701.177856 163.504623,704.406982 
	C163.504623,704.406982 163.453156,704.490967 163.638397,705.069153 
	C164.081818,705.729004 164.525238,706.388916 165.006577,707.012939 
	C165.006577,707.012939 164.955917,707.023987 165.041504,707.692932 
	C165.994751,709.171021 166.948013,710.649170 167.977982,712.037048 
	C167.977982,712.037048 167.869476,712.084473 167.954544,712.713562 
	C168.552917,713.558472 169.151291,714.403320 169.846466,715.109375 
	C169.846466,715.109375 169.698868,715.192261 169.812180,715.811707 
	C170.382446,716.665100 170.952713,717.518555 172.002182,718.043640 
	C171.844940,718.157104 171.687714,718.270508 171.684799,718.944275 
	C172.043060,719.377380 172.401321,719.810547 172.849945,720.112976 
	C172.849945,720.112976 172.708282,720.184875 172.855270,720.878662 
	C175.384506,724.716736 177.913742,728.554749 180.537933,732.402954 
	C180.537933,732.402954 180.497665,732.489563 180.694687,733.040894 
	C181.256851,733.826416 181.819016,734.611877 182.479935,735.436401 
	C182.479935,735.436401 182.468842,735.541992 182.678329,736.053955 
	C183.038483,736.451050 183.398621,736.848145 183.885345,737.093567 
	C183.885345,737.093567 183.716629,737.196228 183.796036,737.681030 
	C183.897583,738.015320 184.106094,738.257446 184.511139,738.444397 
	C184.511139,738.444397 184.470779,738.532410 184.674393,739.049500 
	C185.039749,739.444885 185.405090,739.840210 185.843246,740.119568 
	C185.843246,740.119568 185.715805,740.169861 185.836243,740.749756 
	C186.213058,741.184021 186.589890,741.618347 187.005371,742.010010 
	C187.005371,742.010010 186.950653,742.027344 187.085327,742.662720 
	C187.651062,743.305725 188.216797,743.948730 188.875015,745.064209 
	C189.192108,745.399536 189.509216,745.734924 189.973541,746.682190 
	C190.637787,747.472290 191.302048,748.262451 192.005356,749.009949 
	C192.005356,749.009949 191.950760,749.028381 192.113052,749.689453 
	C193.877945,751.931458 195.642822,754.173523 197.508011,756.440369 
	C197.508011,756.440369 197.499786,756.543335 197.751480,757.103760 
	C198.649414,758.204895 199.547333,759.306030 200.590988,760.338257 
	C200.590988,760.338257 200.502090,760.472717 200.710785,760.997681 
	C201.106827,761.377258 201.502869,761.756897 201.965988,762.037231 
	C201.965988,762.037231 201.860168,762.093323 202.020355,762.717041 
	C202.999069,763.834167 203.977798,764.951294 205.000778,766.010376 
	C205.000778,766.010376 204.933044,766.037476 205.072891,766.621582 
	C205.631393,767.173157 206.189911,767.724731 206.858414,768.143799 
	C206.858414,768.143799 206.701859,768.215576 206.821426,768.727600 
	C207.079361,768.949585 207.337280,769.171631 207.975479,769.289185 
	C207.975479,769.289185 207.595108,769.411194 207.720505,769.842041 
	C207.868958,770.117859 208.089264,770.312256 208.479874,770.480591 
	C208.479874,770.480591 208.483841,770.593506 208.727203,771.076904 
	C209.126266,771.419922 209.525330,771.762878 209.983963,772.018860 
	C209.983963,772.018860 209.892105,772.070679 210.056931,772.647583 
	C210.624481,773.187805 211.192032,773.728088 211.868042,774.132568 
	C211.868042,774.132568 211.712708,774.210449 211.849411,774.725647 
	C212.119019,774.940247 212.388626,775.154846 212.857086,775.044067 
	C212.857086,775.044067 212.623215,775.345276 212.759430,775.816162 
	C212.922729,776.120667 213.169220,776.324646 213.901566,776.331909 
	C213.901566,776.331909 213.511765,776.471313 213.727722,776.987732 
	C214.134354,777.351746 214.541000,777.715698 214.996323,778.011536 
	C214.996323,778.011536 214.920990,778.048157 215.122665,778.685059 
	C217.075119,780.811035 219.027573,782.936951 221.096954,785.527832 
	C221.264557,785.832092 221.520615,786.006409 222.096603,786.686523 
	C225.222031,789.931519 228.347458,793.176514 231.563660,796.406006 
	C231.563660,796.406006 231.574173,796.497437 231.734558,796.910278 
	C231.900726,797.171265 232.131775,797.346985 232.527466,797.455444 
	C232.527466,797.455444 232.506561,797.554688 232.763214,798.027527 
	C233.176025,798.354980 233.588837,798.682373 234.272964,799.617493 
	C237.179535,802.409607 240.086121,805.201660 243.181854,808.512939 
	C243.617310,808.841003 244.052765,809.169006 244.580002,809.459106 
	C244.580002,809.459106 244.574127,809.558228 244.757919,809.956848 
	C244.936050,810.206848 245.174286,810.368042 245.569870,810.447998 
	C245.569870,810.447998 245.574966,810.545410 245.767639,810.953430 
	C245.953964,811.209351 246.201965,811.369995 246.602585,811.418335 
	C246.602585,811.418335 246.580276,811.508179 246.790649,811.938110 
	C246.997696,812.205139 247.268539,812.361938 247.957886,812.330505 
	C247.957886,812.330505 247.613953,812.447388 247.909241,813.026550 
	C250.582870,815.410217 253.256516,817.793945 256.169128,820.693970 
	C256.777802,821.127380 257.386444,821.560852 258.294220,822.581360 
	C260.159485,824.105896 262.024719,825.630432 263.930023,827.061401 
	C263.930023,827.061401 263.833832,827.094727 264.035583,827.598816 
	C264.346710,827.765625 264.657837,827.932495 265.155396,828.548096 
	C265.361694,828.828674 265.638672,828.979736 266.230499,829.519531 
	C266.708191,829.820374 267.185883,830.121155 267.843781,830.003967 
	C267.843781,830.003967 267.635712,830.409058 267.935974,830.954224 
	C268.932922,831.698181 269.929901,832.442200 271.100433,833.626221 
	C271.313446,833.890869 271.589783,834.024170 272.201599,834.546997 
	C272.705627,834.831726 273.209625,835.116394 273.833984,835.172852 
	C273.833984,835.172852 273.658661,835.362183 273.949677,835.885437 
	C274.612549,836.310608 275.275421,836.735779 276.127167,837.599670 
	C276.345734,837.860535 276.625061,837.996704 277.223755,838.529236 
	C277.718292,838.818359 278.212830,839.107422 278.856506,839.149170 
	C278.856506,839.149170 278.658844,839.359802 278.941895,839.889465 
	C279.606873,840.316223 280.271851,840.742981 281.130554,841.611206 
	C281.353027,841.876404 281.637360,842.006653 282.317474,842.557373 
	C283.705872,843.539490 285.094269,844.521606 286.571716,845.466003 
	C286.571716,845.466003 286.589386,845.561096 286.850189,845.968445 
	C287.094330,846.202209 287.385071,846.329834 287.882385,846.078125 
	C287.882385,846.078125 287.682251,846.323425 287.956238,846.854004 
	C288.630798,847.249756 289.305359,847.645508 289.993408,847.995056 
	C289.993408,847.995056 289.955414,848.025024 290.285187,848.601746 
	C292.493683,850.112366 294.702179,851.622986 296.964111,853.025146 
	C296.964111,853.025146 296.868988,853.099915 297.136597,853.620911 
	C297.648743,853.890625 298.160889,854.160400 298.887939,854.018860 
	C298.887939,854.018860 298.646179,854.415039 298.960907,854.927063 
	C299.804291,855.452881 300.647675,855.978699 301.588196,856.482666 
	C301.588196,856.482666 301.594604,856.582031 301.949036,857.033630 
	C302.614685,857.386292 303.280365,857.738892 303.975342,858.004578 
	C303.975342,858.004578 303.906738,858.065552 304.237457,858.597961 
	C305.147308,859.084534 306.057190,859.571106 306.989044,859.996094 
	C306.989044,859.996094 306.939728,860.039246 307.251129,860.582825 
	C308.143890,861.092285 309.036621,861.601685 309.969147,862.011230 
	C309.969147,862.011230 309.889374,862.083313 310.212006,862.622925 
	C311.117126,863.119446 312.022217,863.616028 312.970947,864.011536 
	C312.970947,864.011536 312.888702,864.084595 313.201263,864.631714 
	C314.113495,865.121582 315.025696,865.611511 315.973602,866.008179 
	C315.973602,866.008179 315.898651,866.074158 316.232178,866.622620 
	C317.336487,867.246216 318.440796,867.869812 319.675812,868.393127 
	C319.675812,868.393127 319.612793,868.545288 320.030304,869.018921 
	C321.507385,869.854065 322.984497,870.689209 324.567047,871.515930 
	C324.567047,871.515930 324.615204,871.610107 325.057526,872.052429 
	C326.536072,872.873047 328.014618,873.693665 329.588379,874.489075 
	C329.588379,874.489075 329.615173,874.583862 330.057831,875.036743 
	C331.585999,875.838806 333.114197,876.640808 334.794037,877.020752 
	C334.794037,877.020752 334.671021,877.451782 334.992828,877.890320 
	C335.487122,878.111938 335.981415,878.333496 336.575928,878.527405 
	C336.575928,878.527405 336.613220,878.624451 337.064026,879.064697 
	C338.594238,879.856079 340.124420,880.647461 341.683136,881.055969 
	C341.683136,881.055969 341.679382,881.438110 342.023865,881.875977 
	C342.536285,882.089905 343.048706,882.303833 343.742737,882.267456 
	C343.742737,882.267456 343.616791,882.549927 344.074738,883.011414 
	C356.276581,888.828430 368.478424,894.645447 380.857239,900.483154 
	C380.857239,900.483154 380.688202,900.428711 381.171295,900.914062 
	C432.732422,922.964294 486.617767,934.328796 542.607910,935.931335 
	C581.440063,937.042847 619.759277,933.038574 657.518555,923.918884 
	C681.463684,918.135620 704.840332,910.604736 727.132202,900.467163 
	C727.132202,900.467163 727.318115,900.447754 728.035278,900.307739 
	C730.794800,899.012878 733.554260,897.717957 736.209412,896.480835 
	C736.209412,896.480835 736.326782,896.455627 736.884888,896.365906 
	C737.366455,896.093506 737.847961,895.821106 738.363098,895.467651 
	C738.363098,895.467651 738.438232,895.512939 739.138062,895.324402 
	C747.124573,891.240051 755.111145,887.155701 763.031982,883.012573 
	C763.031982,883.012573 763.045593,883.099670 763.576477,883.069702 
	C763.840820,882.853821 764.105225,882.638000 764.030640,882.365295 
	C764.030640,882.365295 764.359497,882.465088 764.923157,882.327576 
	C765.379639,881.998108 765.836121,881.668701 766.084534,881.184814 
	C766.084534,881.184814 766.250000,881.384155 766.839905,881.273071 
	C767.308777,880.932983 767.777710,880.592834 768.107300,880.153015 
	C768.107300,880.153015 768.190796,880.302673 768.803833,880.201599 
	C769.663818,879.664246 770.523804,879.126831 771.424927,878.497437 
	C771.424927,878.497437 771.524170,878.515259 772.171509,878.282898 
	C776.126953,875.862244 780.082397,873.441528 784.008118,870.994141 
	C784.008118,870.994141 784.015015,871.033020 784.580811,870.979492 
	C785.189514,870.548706 785.798279,870.117981 786.497925,869.587585 
	C786.497925,869.587585 786.628967,869.555908 787.125916,869.370605 
	C787.523315,869.041077 787.920715,868.711548 787.950745,868.157532 
	C787.950745,868.157532 788.310486,868.398376 788.908875,868.246155 
	C789.731262,867.658936 790.553711,867.071716 791.139282,866.103760 
	C791.139282,866.103760 791.410095,866.461121 791.986145,866.283936 
	C792.788818,865.705383 793.591431,865.126892 794.383118,864.449219 
	C794.383118,864.449219 794.474060,864.490051 795.025269,864.288757 
	C795.815613,863.731689 796.606018,863.174622 797.445557,862.520325 
	C797.445557,862.520325 797.554443,862.521545 798.126831,862.286133 
	C799.114685,861.545044 800.102539,860.804016 801.021545,860.004211 
	C801.021545,860.004211 801.052734,860.089172 801.620911,860.001526 
	C802.218018,859.539734 802.815125,859.077942 803.456177,858.517090 
	C803.456177,858.517090 803.564392,858.522583 804.102417,858.308044 
	C804.868469,857.733459 805.634460,857.158813 806.422485,856.486389 
	C806.422485,856.486389 806.521179,856.503723 807.070862,856.278503 
	C807.837769,855.669189 808.604675,855.059875 809.015015,854.058044 
	C809.139343,854.183655 809.263611,854.309265 809.984253,854.234680 
	C811.125732,853.362488 812.267212,852.490295 813.453918,851.517456 
	C813.453918,851.517456 813.564026,851.511658 814.107605,851.275085 
	C814.852295,850.641846 815.596985,850.008545 816.106873,849.099548 
	C816.106873,849.099548 816.303467,849.403625 816.866577,849.244934 
	C817.276428,848.852356 817.686279,848.459778 818.019409,848.008118 
	C818.019409,848.008118 818.060425,848.095886 818.684692,847.937500 
	C819.815308,846.975037 820.945923,846.012634 822.012573,845.001831 
	C822.012573,845.001831 822.043762,845.075684 822.623474,844.936218 
	C823.191406,844.401428 823.759338,843.866638 824.163025,843.183105 
	C824.163025,843.183105 824.270142,843.377136 824.831177,843.220032 
	C825.235413,842.822266 825.639648,842.424500 826.005066,841.995911 
	C826.005066,841.995911 826.023315,842.041748 826.627991,841.890503 
	C827.546692,841.079407 828.465454,840.268311 829.017761,839.151123 
	C829.017761,839.151123 829.383484,839.447510 829.923035,839.256165 
	C830.309387,838.855286 830.695740,838.454407 831.012817,838.004456 
	C831.012817,838.004456 831.048706,838.081543 831.648804,837.921875 
	C832.568176,837.122437 833.487549,836.322998 834.171753,835.295166 
	C834.171753,835.295166 834.444824,835.476562 834.973022,835.263306 
	C835.347656,834.854187 835.722229,834.445068 836.547913,833.924988 
	C836.848083,833.771606 837.023560,833.528320 837.678345,833.001709 
	C838.573486,832.134155 839.468628,831.266602 839.985474,830.220093 
	C839.985474,830.220093 840.366516,830.382690 840.829407,830.243225 
	C841.128845,830.080444 841.328430,829.836060 841.304199,829.187134 
	C841.304199,829.187134 841.480469,829.484924 841.989319,829.252991 
	C842.351624,828.844543 842.713867,828.436096 843.531799,827.914856 
	C843.837219,827.763306 844.016846,827.519165 844.689575,826.982178 
	C845.931335,825.832886 847.173035,824.683655 848.229431,823.331970 
	C848.229431,823.331970 848.459106,823.482056 848.980957,823.263489 
	C849.346497,822.851440 849.712097,822.439453 850.532166,821.894714 
	C850.824951,821.722473 850.997803,821.468506 851.687317,820.904175 
	C856.473206,816.272888 861.259094,811.641602 866.642517,806.743103 
	C868.431396,804.840149 870.220276,802.937256 872.518250,800.831970 
	C872.846436,800.400757 873.174622,799.969543 873.487244,799.437256 
	C873.487244,799.437256 873.588257,799.422241 873.975647,799.238586 
	C874.218140,799.062012 874.373047,798.827515 874.454407,798.436462 
	C874.454407,798.436462 874.553284,798.424011 874.956970,798.236633 
	C875.210144,798.054138 875.370239,797.810547 875.431580,797.412231 
	C875.431580,797.412231 875.524719,797.422668 875.942566,797.231445 
	C876.204834,797.042664 876.367432,796.789795 876.343018,796.312805 
	C876.343018,796.312805 876.490967,796.419312 876.921082,796.235291 
	C877.191895,796.047852 877.361084,795.792969 877.336426,795.303650 
	C877.336426,795.303650 877.488647,795.418762 877.919434,795.234253 
	C878.190735,795.046631 878.360352,794.791382 878.331299,794.302185 
	C878.331299,794.302185 878.486877,794.415588 878.924255,794.213013 
	C879.197693,794.009460 879.359314,793.739136 879.040955,792.987488 
	C879.166870,793.123230 879.292847,793.258972 879.884949,793.193176 
	C880.048889,792.905090 880.212830,792.617065 880.109558,792.118164 
	C880.109558,792.118164 880.342163,792.366760 880.831055,792.187500 
	C881.011719,791.900818 881.192444,791.614197 881.042480,791.309265 
	C881.042480,791.309265 881.374451,791.349487 881.956055,791.066772 
	C883.366821,789.401489 884.777649,787.736206 886.702087,785.832153 
	C887.135071,785.227356 887.567993,784.622620 888.518433,783.781799 
	C888.827209,783.313354 889.135986,782.844910 889.226929,782.181763 
	C889.226929,782.181763 889.454956,782.384521 890.001770,782.070068 
	C891.054871,780.733398 892.107971,779.396790 893.600525,777.890991 
	C893.869202,777.686523 894.010498,777.415588 894.545959,776.837524 
	C894.853271,776.360474 895.160583,775.883362 895.376465,774.993225 
	C895.376465,774.993225 895.497986,775.398987 896.030334,775.073364 
	C897.041626,773.727295 898.052917,772.381165 898.999756,771.007080 
	C898.999756,771.007080 899.039124,771.065186 899.564636,770.825562 
	C899.857971,770.336853 900.151306,769.848145 900.007507,769.244568 
	C900.007507,769.244568 900.443665,769.376770 900.997253,769.040894 
	C903.158081,766.189758 905.318909,763.338623 907.461609,760.393188 
	C907.461609,760.393188 907.557007,760.404297 908.053467,760.052917 
	C908.875854,758.901001 909.698242,757.749084 910.546631,756.478210 
	C910.546631,756.478210 910.651428,756.416138 911.126831,756.057129 
	C911.930969,754.930603 912.735168,753.804077 913.611511,752.533997 
	C913.611511,752.533997 913.715088,752.411011 914.177429,752.034302 
	C914.956360,750.869995 915.735291,749.705688 916.504333,748.437378 
	C916.504333,748.437378 916.604858,748.409302 917.101318,748.015320 
	C919.240417,744.864319 921.379578,741.713318 923.519409,738.452820 
	C923.519409,738.452820 923.619263,738.407837 924.051636,738.038879 
	C924.393433,737.373962 924.735168,736.709045 925.000244,736.017273 
	C925.000244,736.017273 925.053406,736.078857 925.595642,735.749023 
	C926.240417,734.679932 926.885193,733.610901 927.517456,732.436768 
	C927.517456,732.436768 927.617310,732.401733 928.089844,731.984863 
	C929.223022,730.144043 930.356201,728.303223 931.396423,726.346191 
	C931.396423,726.346191 931.538757,726.389648 932.024719,725.960632 
	C934.709106,721.322327 937.393433,716.684021 939.998230,712.021973 
	C939.998230,712.021973 940.056763,712.080933 940.604675,711.690796 
	C941.762878,709.475830 942.921082,707.260803 943.998413,705.024109 
	C943.998413,705.024109 944.057983,705.082886 944.605469,704.679871 
	C949.087280,695.786804 953.569092,686.893799 958.253967,677.848755 
	C958.253967,677.848755 958.209839,677.598938 958.765381,677.112915 
	C984.135742,622.902161 997.719849,565.822205 999.918823,506.069611 
	C1001.871521,453.006409 994.951233,401.047760 977.787964,350.773865 
	C971.157227,331.351471 962.181274,312.729706 954.162903,293.909943 
	C954.162903,293.909943 954.323486,293.790253 954.200195,293.069885 
	C950.809021,286.701385 947.417847,280.332886 943.996460,273.993225 
	C943.996460,273.993225 944.033020,273.977722 943.952148,273.292725 
	C942.802490,271.401611 941.652832,269.510498 940.206177,267.749420 
	C940.206177,267.749420 940.474487,267.567383 940.291077,266.942780 
	C939.399109,265.496796 938.507202,264.050812 937.519470,262.564850 
	C937.519470,262.564850 937.544739,262.464233 937.364563,261.947601 
	C937.036011,261.527252 936.707458,261.106903 936.227356,261.049316 
	C936.227356,261.049316 936.400574,260.694489 936.263428,260.100861 
	C935.714844,259.268433 935.166199,258.435974 934.519470,257.568085 
	C934.519470,257.568085 934.541809,257.466125 934.364868,256.946350 
	C934.031860,256.528503 933.698792,256.110626 933.156372,256.044952 
	C933.156372,256.044952 933.387756,255.705933 933.250488,255.111588 
	C932.700989,254.278061 932.151489,253.444534 931.505310,252.581360 
	C931.505310,252.581360 931.531555,252.483704 931.351868,251.957428 
	C931.004578,251.543747 930.657227,251.130081 930.133911,250.930740 
	C930.133911,250.930740 930.348145,250.754654 930.208313,250.140533 
	C929.600708,249.313431 928.993164,248.486328 928.035645,247.986633 
	C928.035645,247.986633 928.400146,247.675385 928.230164,247.078705 
	C927.616760,246.271301 927.003357,245.463913 926.026184,244.979401 
	C926.026184,244.979401 926.403564,244.672501 926.228027,244.075409 
	C925.601379,243.274979 924.974792,242.474548 924.165344,241.860687 
	C924.165344,241.860687 924.388489,241.724930 924.240540,241.152557 
	C923.859375,240.724960 923.478271,240.297379 923.046692,239.951447 
	C923.046692,239.951447 923.140991,239.933380 923.053223,239.391937 
	C922.794128,239.153961 922.535095,238.916000 922.209900,238.820312 
	C922.209900,238.820312 922.342163,238.735931 922.262817,238.269806 
	C922.143127,237.959763 921.933167,237.733566 921.546448,237.508347 
	C921.546448,237.508347 921.540405,237.388733 921.344604,236.855423 
	C920.782288,236.102463 920.219971,235.349487 919.557068,234.528915 
	C919.557068,234.528915 919.540710,234.408844 919.338379,233.902542 
	C918.974304,233.518204 918.610291,233.133865 918.117920,232.897598 
	C918.117920,232.897598 918.288147,232.800629 918.200378,232.299957 
	C917.970947,232.062805 917.741516,231.825653 917.331482,231.608215 
	C917.331482,231.608215 917.486145,231.513016 917.259033,230.914413 
	C916.202759,229.569107 915.146484,228.223801 914.022217,226.966415 
	C914.022217,226.966415 914.124023,226.921906 914.008179,226.340408 
	C913.486633,225.766937 912.965149,225.193466 912.049927,224.913834 
	C912.049927,224.913834 912.440186,224.626160 912.256714,224.082123 
	C911.864197,223.684235 911.471680,223.286346 911.016907,222.971542 
	C911.016907,222.971542 911.112305,222.930542 910.995361,222.348877 
	C910.472900,221.774368 909.950439,221.199860 908.979797,220.877594 
	C909.132141,220.799759 909.284485,220.721939 909.256714,220.096191 
	C908.862549,219.696381 908.468384,219.296570 908.011047,218.977386 
	C908.011047,218.977386 908.103821,218.933929 907.975708,218.350922 
	C907.437378,217.785965 906.898987,217.220993 906.132568,216.865891 
	C906.132568,216.865891 906.395142,216.701202 906.231262,216.145844 
	C905.829956,215.748810 905.428589,215.351761 904.996033,214.994675 
	C904.996033,214.994675 905.043091,214.976440 904.889282,214.368988 
	C904.060669,213.457947 903.232056,212.546906 902.011353,211.879410 
	C902.011353,211.879410 902.418579,211.662384 902.239197,211.115692 
	C901.838623,210.723312 901.438110,210.330948 900.997864,209.991272 
	C900.997864,209.991272 901.059387,209.967438 900.924561,209.383728 
	C900.382324,208.820175 899.840088,208.256622 899.099915,207.873672 
	C899.099915,207.873672 899.331421,207.738800 899.213745,207.243607 
	C898.966125,207.024399 898.718506,206.805191 898.107788,206.566071 
	C898.107788,206.566071 898.474487,206.562363 898.270569,206.034943 
	C897.869568,205.657562 897.468628,205.280182 897.009460,204.981873 
	C897.009460,204.981873 897.097107,204.937683 896.902100,204.304138 
	C895.268860,202.528458 893.635559,200.752777 891.826660,198.437241 
	C891.276245,197.934265 890.725769,197.431290 889.984741,196.321442 
	C889.094849,195.441223 888.204895,194.561005 887.044434,193.878998 
	C887.044434,193.878998 887.338074,193.716919 887.184692,193.215164 
	C886.908264,193.016479 886.631775,192.817795 886.124390,192.992798 
z`}),s.jsx("path",{fill:"#1C5679",opacity:"1.000000",stroke:"none",d:`
M242.992706,807.993713 
	C240.086121,805.201660 237.179535,802.409607 234.104996,798.990967 
	C233.460205,798.094543 232.983383,797.824646 232.506561,797.554688 
	C232.506561,797.554688 232.527466,797.455444 232.543152,797.156921 
	C232.230621,796.738098 231.902390,796.617737 231.574173,796.497437 
	C231.574173,796.497437 231.563660,796.406006 231.650665,796.058777 
	C228.446823,792.491272 225.155991,789.271057 221.865143,786.050781 
	C221.520615,786.006409 221.264557,785.832092 221.046173,784.925049 
	C218.970596,782.230957 216.945786,780.139587 214.920990,778.048157 
	C214.920990,778.048157 214.996323,778.011536 214.957153,777.715942 
	C214.449249,777.104004 213.980515,776.787659 213.511780,776.471313 
	C213.511765,776.471313 213.901566,776.331909 213.745697,776.085449 
	C213.267624,775.674438 212.945419,775.509888 212.623215,775.345276 
	C212.623215,775.345276 212.857086,775.044067 212.754288,774.914307 
	C212.338562,774.593201 212.025635,774.401855 211.712708,774.210449 
	C211.712708,774.210449 211.868042,774.132568 211.848511,773.850952 
	C211.183350,773.069702 210.537735,772.570190 209.892120,772.070679 
	C209.892105,772.070679 209.983963,772.018860 209.943680,771.729675 
	C209.430206,771.158203 208.957016,770.875854 208.483826,770.593506 
	C208.483841,770.593506 208.479874,770.480591 208.513611,770.170044 
	C208.229935,769.710083 207.912537,769.560608 207.595123,769.411133 
	C207.595108,769.411194 207.975479,769.289185 207.803131,769.047729 
	C207.321136,768.609375 207.011505,768.412476 206.701874,768.215576 
	C206.701859,768.215576 206.858414,768.143799 206.844696,767.862671 
	C206.198349,767.066772 205.565704,766.552124 204.933044,766.037476 
	C204.933044,766.037476 205.000778,766.010376 204.992599,765.664673 
	C203.943008,764.243713 202.901596,763.168518 201.860184,762.093323 
	C201.860168,762.093323 201.965988,762.037231 201.933716,761.750488 
	C201.434982,761.133362 200.968536,760.803040 200.502106,760.472717 
	C200.502090,760.472717 200.590988,760.338257 200.661499,760.019897 
	C199.654617,758.648804 198.577209,757.596069 197.499786,756.543335 
	C197.499786,756.543335 197.508011,756.440369 197.608856,756.074219 
	C195.790070,753.481567 193.870422,751.254944 191.950760,749.028381 
	C191.950760,749.028381 192.005356,749.009949 191.995529,748.662842 
	C191.265900,747.567261 190.546097,746.818787 189.826294,746.070312 
	C189.509216,745.734924 189.192108,745.399536 188.862427,744.451904 
	C188.216797,743.235474 187.583740,742.631409 186.950653,742.027344 
	C186.950653,742.027344 187.005371,742.010010 186.975769,741.712646 
	C186.536041,741.000122 186.125916,740.585022 185.715805,740.169861 
	C185.715805,740.169861 185.843246,740.119568 185.843750,739.833984 
	C185.386414,739.209717 184.928589,738.871094 184.470764,738.532410 
	C184.470779,738.532410 184.511139,738.444397 184.546158,738.144653 
	C184.292999,737.628601 184.004822,737.412415 183.716644,737.196228 
	C183.716629,737.196228 183.885345,737.093567 183.862854,736.824829 
	C183.383209,736.218018 182.926025,735.880005 182.468842,735.541992 
	C182.468842,735.541992 182.479935,735.436401 182.591553,735.068970 
	C181.967987,733.964172 181.232834,733.226868 180.497665,732.489563 
	C180.497665,732.489563 180.537933,732.402954 180.634918,732.036377 
	C178.057358,727.841553 175.382812,724.013184 172.708282,720.184875 
	C172.708282,720.184875 172.849945,720.112976 172.849792,719.836182 
	C172.409912,719.167480 171.970200,718.775696 171.530487,718.383911 
	C171.687714,718.270508 171.844940,718.157104 171.883224,717.858276 
	C171.075790,716.846069 170.387329,716.019165 169.698868,715.192261 
	C169.698868,715.192261 169.846466,715.109375 169.867920,714.802307 
	C169.216080,713.691650 168.542786,712.888062 167.869476,712.084473 
	C167.869476,712.084473 167.977982,712.037048 167.969788,711.705566 
	C166.959717,709.924011 165.957825,708.473999 164.955917,707.023987 
	C164.955917,707.023987 165.006577,707.012939 165.001190,706.666382 
	C164.481583,705.710266 163.967361,705.100586 163.453156,704.490967 
	C163.453156,704.490967 163.504623,704.406982 163.609879,704.035217 
	C161.785263,700.456909 159.855392,697.250366 157.925507,694.043823 
	C157.925522,694.043823 158.003418,694.024231 157.979248,693.737244 
	C157.597565,692.983093 157.240021,692.515869 156.882477,692.048706 
	C156.882477,692.048706 156.972488,692.038574 156.975494,691.678467 
	C154.583359,685.739868 152.295700,680.111450 149.736938,674.609070 
	C148.794647,672.582825 147.212646,670.854004 145.922455,668.989502 
	C145.922470,668.989502 145.743210,668.846558 145.819580,668.309814 
	C145.513458,666.351990 145.254456,664.883484 144.728928,663.517456 
	C140.568207,652.702759 135.861633,642.069641 132.259949,631.073792 
	C123.745155,605.078430 116.702034,578.666016 113.947891,551.357361 
	C111.940285,531.451111 110.423195,511.488525 109.107338,491.523376 
	C108.696121,485.284088 109.573463,478.949127 110.000565,472.667450 
	C110.977394,458.300537 111.310371,443.839417 113.262291,429.602661 
	C115.458824,413.581787 118.347046,397.559845 122.371407,381.907806 
	C128.564224,357.821930 136.258789,334.155640 146.685730,311.468018 
	C148.711380,307.060455 149.927856,302.281036 151.517563,297.673126 
	C151.517563,297.673126 151.669006,297.570862 151.946289,297.566162 
	C152.455734,296.672943 152.687881,295.784485 152.920044,294.895996 
	C152.920044,294.895996 152.974609,294.963684 153.205780,294.805878 
	C153.596085,294.061401 153.755219,293.474762 153.914337,292.888092 
	C153.914337,292.888092 153.971573,292.958496 154.256119,292.821503 
	C155.331253,290.751312 156.121841,288.818085 156.912415,286.884888 
	C156.912415,286.884888 156.963196,286.956085 157.195541,286.805908 
	C157.598511,286.075531 157.769135,285.495331 157.939758,284.915100 
	C157.939774,284.915100 158.000626,284.974274 158.331619,284.915710 
	C158.970825,283.798096 159.279022,282.739075 159.587234,281.680054 
	C159.587234,281.680054 159.633499,281.841675 159.968689,281.745850 
	C161.346848,279.305664 162.389816,276.961334 163.432800,274.617004 
	C163.432800,274.617004 163.635345,274.672638 163.907288,274.607483 
	C164.286804,273.917511 164.394363,273.292755 164.501938,272.667969 
	C164.501938,272.667969 164.709641,272.717102 164.989212,272.673035 
	C166.488281,270.052521 167.707779,267.476044 168.927277,264.899597 
	C168.927261,264.899597 168.992554,264.970734 169.309845,264.921387 
	C170.221222,263.450043 170.815323,262.028076 171.409424,260.606079 
	C171.409424,260.606079 171.506638,260.581848 171.867340,260.587524 
	C172.968872,258.933075 173.709717,257.272949 174.450562,255.612839 
	C174.450562,255.612839 174.553146,255.625168 174.910477,255.616119 
	C176.053482,253.960846 176.839157,252.314621 177.624832,250.668381 
	C177.624832,250.668381 177.912552,250.926208 178.118988,250.788712 
	C178.885696,249.435425 179.445969,248.219635 180.006241,247.003845 
	C180.006241,247.003845 180.000000,247.000000 180.348724,246.950333 
	C181.127670,245.925400 181.557907,244.950134 181.988129,243.974854 
	C181.988129,243.974854 182.003922,243.996445 182.340057,243.945374 
	C183.110367,242.917297 183.544540,241.940292 183.978729,240.963287 
	C183.978729,240.963287 184.005142,240.993500 184.336121,240.938568 
	C184.960007,240.131409 185.252930,239.379166 185.545837,238.626923 
	C185.677673,238.755630 185.809509,238.884354 186.113297,238.822235 
	C186.859863,237.423523 187.434464,236.215637 188.009064,235.007736 
	C188.009064,235.007736 188.000000,235.000000 188.364929,234.962372 
	C189.458191,233.578186 190.186523,232.231659 190.914871,230.885117 
	C190.914871,230.885117 190.982040,230.969910 191.293030,230.915970 
	C191.890472,230.107651 192.176941,229.353271 192.463409,228.598892 
	C192.463409,228.598892 192.681992,228.806503 192.931641,228.692139 
	C193.420670,228.007339 193.660049,227.436935 193.899445,226.866531 
	C193.899445,226.866531 193.968658,226.961044 194.278107,226.910553 
	C194.885941,226.106934 195.184326,225.353775 195.482712,224.600632 
	C195.482712,224.600632 195.712372,224.799789 195.993469,224.709473 
	C196.994400,223.279007 197.714264,221.938843 198.434113,220.598679 
	C198.434097,220.598679 198.531036,220.601974 198.887512,220.607269 
	C200.471527,218.707214 201.699051,216.801865 202.926575,214.896515 
	C202.926559,214.896515 202.986435,214.978333 203.313629,214.938416 
	C204.230804,213.793518 204.820801,212.688507 205.410797,211.583496 
	C205.410797,211.583496 205.511856,211.593201 205.832550,211.576355 
	C206.396240,210.990479 206.639221,210.421463 206.882202,209.852448 
	C206.882202,209.852448 206.967209,209.962555 207.264679,209.929413 
	C210.371994,206.253540 213.181824,202.610825 215.991669,198.968109 
	C216.007492,198.618225 216.157684,198.341171 217.028168,198.030273 
	C218.897354,196.145966 220.180588,194.368347 221.463821,192.590729 
	C221.463821,192.590729 221.629166,192.747940 221.900116,192.668884 
	C222.445312,192.051514 222.719574,191.513214 222.993866,190.974930 
	C223.747437,190.041718 224.501022,189.108505 225.887131,188.044861 
	C229.505295,184.471466 232.490952,181.028503 235.476608,177.585541 
	C235.476608,177.585541 235.559952,177.615005 235.859421,177.599518 
	C236.254364,177.248566 236.349854,176.913101 236.445312,176.577637 
	C236.445312,176.577637 236.544418,176.562546 236.843628,176.564484 
	C237.243286,176.235901 237.343735,175.905380 237.444183,175.574860 
	C237.444183,175.574860 237.543533,175.561569 237.841614,175.563461 
	C238.232925,175.235474 238.326157,174.905609 238.419388,174.575729 
	C238.419388,174.575729 238.523270,174.540939 238.828796,174.549149 
	C239.226456,174.229965 239.318588,173.902557 239.410721,173.575165 
	C239.410721,173.575165 239.516327,173.533768 239.824585,173.544342 
	C240.224152,173.228210 240.315460,172.901535 240.406769,172.574860 
	C240.406769,172.574860 240.513168,172.530624 240.823135,172.542633 
	C241.224564,172.227798 241.316040,171.900955 241.407501,171.574112 
	C241.407501,171.574112 241.513840,171.531250 241.823990,171.543793 
	C242.226105,171.228714 242.318069,170.901108 242.410034,170.573486 
	C242.410034,170.573486 242.514053,170.505508 242.888123,170.605072 
	C246.481400,167.401871 249.700592,164.099106 252.919785,160.796341 
	C253.410889,160.250275 253.901993,159.704208 255.029190,159.073181 
	C257.761566,156.950638 259.857880,154.913071 261.954193,152.875488 
	C262.012451,152.536728 262.191010,152.282471 263.046387,152.023361 
	C263.916016,151.464630 264.229095,150.995285 264.542206,150.525925 
	C264.542206,150.525925 264.687988,150.960266 264.926819,150.777557 
	C265.331543,150.273315 265.497406,149.951767 265.663269,149.630219 
	C265.663269,149.630219 265.842712,149.978256 266.113556,149.885849 
	C267.237213,148.814240 268.090027,147.835037 268.942841,146.855835 
	C268.999939,146.514267 269.181946,146.263290 270.044983,146.020386 
	C270.940613,145.479431 271.280121,145.020966 271.619629,144.562500 
	C271.619629,144.562500 271.970612,144.892319 272.146637,144.819305 
	C272.845825,144.112289 273.368988,143.478271 273.892151,142.844269 
	C273.892151,142.844269 273.957062,142.959854 274.240143,142.924576 
	C274.832367,142.420639 275.141479,141.951996 275.450623,141.483337 
	C275.450623,141.483337 275.546173,141.515091 275.846008,141.538269 
	C276.311554,141.246307 276.477295,140.931152 276.643036,140.616013 
	C276.643036,140.616013 276.976013,140.887604 277.160828,140.829590 
	C277.869812,140.138596 278.394012,139.505600 278.918213,138.872589 
	C278.918213,138.872604 278.967468,138.972885 279.255371,138.939697 
	C279.882721,138.444580 280.222198,137.982666 280.561676,137.520752 
	C280.561676,137.520752 280.885101,137.750793 281.095154,137.745117 
	C282.191162,136.805084 283.077118,135.870712 283.963074,134.936356 
	C283.963074,134.936356 283.990631,135.001587 284.333588,134.993179 
	C285.773438,133.969955 286.870300,132.955139 287.967194,131.940338 
	C287.967194,131.940338 287.989899,132.002960 288.330078,131.994110 
	C289.418243,131.279312 290.166199,130.573364 290.914185,129.867432 
	C290.914185,129.867432 290.963928,129.972290 291.251038,129.941177 
	C291.905365,129.458771 292.272583,129.007462 292.639801,128.556152 
	C292.728058,128.710800 292.816315,128.865433 293.112183,128.890610 
	C293.865356,128.148453 294.410889,127.535759 294.956421,126.923065 
	C294.956421,126.923065 294.985565,126.998222 295.327332,126.990906 
	C297.761810,125.293182 299.854462,123.602768 301.947144,121.912346 
	C301.947144,121.912346 301.980042,121.995865 302.270996,121.962967 
	C302.965179,121.503494 303.368378,121.076935 303.771606,120.650368 
	C303.771606,120.650368 303.878693,120.824783 304.144745,120.820976 
	C304.740570,120.362671 305.070343,119.908165 305.400085,119.453667 
	C305.400116,119.453674 305.519897,119.441605 305.881714,119.552277 
	C306.808929,119.075378 307.374298,118.487808 307.939667,117.900238 
	C307.939667,117.900246 307.974609,117.991066 308.263367,117.960129 
	C308.966614,117.509293 309.381104,117.089386 309.795624,116.669479 
	C309.795624,116.669487 309.862915,116.812965 310.143616,116.821526 
	C310.770569,116.374817 311.116760,115.919548 311.462982,115.464279 
	C311.462982,115.464279 311.565704,115.483986 311.930420,115.593460 
	C313.023712,114.966034 313.752319,114.229134 314.480957,113.492233 
	C314.480957,113.492241 314.579224,113.511192 314.940613,113.614334 
	C316.067749,112.993431 316.833527,112.269386 317.599274,111.545334 
	C317.687714,111.691391 317.776154,111.837448 318.107239,111.873154 
	C319.552917,110.818405 320.755951,109.873993 321.958954,108.929581 
	C321.958954,108.929581 321.981964,109.003021 322.330261,108.993996 
	C324.280640,107.819252 325.882690,106.653526 327.484772,105.487808 
	C327.484772,105.487808 327.578308,105.516953 327.945129,105.617905 
	C329.533325,104.798248 330.754730,103.877647 331.976135,102.957062 
	C331.976135,102.957062 331.987488,103.006523 332.349365,103.000671 
	C335.696106,101.189713 338.680969,99.384621 341.665802,97.579514 
	C341.665802,97.579506 341.735657,97.778557 342.050995,97.780243 
	C342.755463,97.348160 343.144592,96.914398 343.533722,96.480637 
	C343.533722,96.480637 343.634216,96.586449 343.990784,96.656464 
	C354.278931,92.125389 364.041779,87.105385 374.181732,83.021812 
	C389.237396,76.958611 404.273193,70.548645 419.840210,66.126549 
	C440.160583,60.354164 460.863953,55.687683 481.643890,51.853294 
	C497.848816,48.863106 514.384705,46.773544 530.839294,46.211479 
	C567.335999,44.964802 603.683105,46.458565 639.736450,53.751431 
	C670.422424,59.958580 700.178284,68.681534 728.958313,80.915802 
	C733.287048,82.755959 737.858459,84.025414 742.317627,85.558853 
	C742.317627,85.558853 742.259888,85.544868 742.335449,85.896675 
	C749.067932,89.319168 755.724854,92.389854 762.381714,95.460541 
	C762.306091,95.620895 762.230530,95.781250 762.300476,96.068024 
	C763.314880,96.451706 764.183655,96.708969 765.052490,96.966232 
	C765.052490,96.966232 765.012390,97.005463 765.154236,97.215927 
	C765.637329,97.513641 765.978577,97.600891 766.319824,97.688141 
	C766.319824,97.688141 766.170471,97.764786 766.252075,98.052223 
	C771.245972,100.877747 776.158264,103.415825 781.070496,105.953903 
	C781.070496,105.953896 781.018555,106.004105 781.068665,106.330368 
	C782.543396,107.234261 783.967957,107.811882 785.392578,108.389503 
	C785.392578,108.389503 785.436462,108.484772 785.422241,108.848145 
	C787.059570,109.993187 788.711060,110.774857 790.362549,111.556534 
	C790.242493,111.703949 790.122498,111.851364 790.187378,112.152412 
	C791.377014,112.692413 792.381714,113.078773 793.386475,113.465149 
	C793.386475,113.465157 793.257935,113.669975 793.323730,113.970451 
	C794.391541,114.649521 795.393555,115.028114 796.395508,115.406708 
	C796.395508,115.406700 796.411438,115.505646 796.408936,115.865799 
	C797.636536,116.794342 798.866699,117.362740 800.096863,117.931137 
	C800.096863,117.931145 800.027954,117.983002 800.158325,118.190224 
	C800.626648,118.510719 800.964661,118.624001 801.302673,118.737289 
	C801.302673,118.737289 801.184570,118.788437 801.270874,119.013947 
	C801.704773,119.288147 802.052490,119.336838 802.400146,119.385529 
	C802.400146,119.385529 802.454956,119.478416 802.439819,119.847610 
	C803.413879,120.633514 804.403076,121.050232 805.392273,121.466957 
	C805.392273,121.466957 805.272339,121.648087 805.325684,121.956429 
	C806.960327,123.145195 808.541626,124.025627 810.122864,124.906052 
	C810.122864,124.906044 810.033203,124.978630 810.082886,125.286484 
	C811.115356,126.043968 812.098206,126.493599 813.080994,126.943222 
	C813.080994,126.943222 813.017151,126.999680 813.067200,127.312210 
	C814.082581,128.081818 815.047974,128.538895 816.013306,128.995972 
	C816.013306,128.995987 816.000000,129.001770 816.039368,129.361572 
	C817.189636,130.277939 818.300537,130.834503 819.411438,131.391083 
	C819.411438,131.391083 819.439270,131.493332 819.425171,131.864441 
	C820.744141,132.952454 822.077087,133.669327 823.410095,134.386215 
	C823.410095,134.386215 823.437622,134.488968 823.427124,134.854538 
	C824.377258,135.713608 825.337952,136.207123 826.298584,136.700638 
	C826.298584,136.700638 826.130920,136.883392 826.245911,137.062866 
	C826.711121,137.316040 827.061401,137.389771 827.411621,137.463501 
	C827.411621,137.463501 827.301147,137.748718 827.364563,137.957031 
	C827.999695,138.406204 828.571350,138.647049 829.143066,138.887909 
	C829.143066,138.887909 829.036194,138.965881 829.073242,139.279465 
	C830.430908,140.379517 831.751648,141.166000 833.072327,141.952469 
	C833.072327,141.952469 833.011230,141.999786 833.045166,142.322021 
	C835.081177,144.076584 837.083252,145.508926 839.085388,146.941284 
	C839.085388,146.941284 839.012756,146.994003 839.051880,147.319214 
	C840.172852,148.311035 841.254700,148.977646 842.336487,149.644272 
	C842.336487,149.644272 842.162659,149.996048 842.268188,150.106613 
	C842.720764,150.303268 843.067749,150.389374 843.414795,150.475479 
	C843.414795,150.475479 843.247498,150.781418 843.333435,150.974564 
	C843.973511,151.426941 844.527649,151.686188 845.081787,151.945404 
	C845.081787,151.945404 845.011902,151.995209 845.048584,152.319061 
	C846.513489,153.621109 847.941711,154.599319 849.369995,155.577530 
	C849.369995,155.577530 849.018311,155.646561 849.203369,155.920319 
	C849.731262,156.291779 850.074036,156.389465 850.416870,156.487152 
	C850.416870,156.487152 850.401489,156.578491 850.411377,156.861328 
	C850.751404,157.218323 851.081665,157.292480 851.411865,157.366638 
	C851.411865,157.366638 851.462769,157.468857 851.459595,157.801346 
	C852.003967,158.410538 852.551575,158.687241 853.099121,158.963959 
	C853.433228,158.992386 853.696777,159.143692 853.983643,159.991516 
	C854.351318,161.153152 854.489075,161.875977 854.918762,162.309204 
	C863.289734,170.749069 871.674316,179.175919 880.128967,187.531723 
	C880.871948,188.266052 882.120056,188.489197 883.133606,188.949753 
	C883.470520,189.007584 883.721924,189.185959 883.978271,190.039795 
	C884.537231,190.912247 885.005676,191.229782 885.474121,191.547318 
	C885.474121,191.547318 885.013428,191.665283 885.209961,191.915558 
	C885.731750,192.322906 886.057068,192.479996 886.382324,192.637085 
	C886.382324,192.637085 886.124390,192.992798 886.244141,193.100510 
	C886.688660,193.377792 887.013367,193.547363 887.338074,193.716919 
	C887.338074,193.716919 887.044434,193.878998 887.115356,194.148895 
	C888.182556,195.255295 889.178955,196.091797 890.175293,196.928314 
	C890.725769,197.431290 891.276245,197.934265 891.912231,199.075867 
	C893.697632,201.455551 895.397400,203.196609 897.097107,204.937683 
	C897.097107,204.937683 897.009460,204.981873 897.047729,205.273026 
	C897.548767,205.896896 898.011658,206.229630 898.474487,206.562363 
	C898.474487,206.562363 898.107788,206.566071 898.250854,206.869614 
	C898.706421,207.361710 899.018921,207.550247 899.331421,207.738800 
	C899.331421,207.738800 899.099915,207.873672 899.143311,208.131195 
	C899.810974,208.914963 900.435181,209.441193 901.059387,209.967438 
	C901.059387,209.967438 900.997864,209.991272 901.032593,210.290100 
	C901.517700,210.946762 901.968140,211.304565 902.418579,211.662384 
	C902.418579,211.662384 902.011353,211.879410 902.114075,212.117401 
	C903.158936,213.229080 904.101013,214.102753 905.043091,214.976440 
	C905.043091,214.976440 904.996033,214.994675 905.028564,215.297455 
	C905.505737,215.967239 905.950439,216.334229 906.395142,216.701202 
	C906.395142,216.701202 906.132568,216.865891 906.173706,217.112030 
	C906.844482,217.883408 907.474121,218.408676 908.103821,218.933929 
	C908.103821,218.933929 908.011047,218.977386 908.047119,219.267181 
	C908.534424,219.919342 908.985596,220.281723 909.436829,220.644104 
	C909.284485,220.721939 909.132141,220.799759 909.109863,221.101654 
	C909.864136,221.860641 910.488220,222.395584 911.112305,222.930542 
	C911.112305,222.930542 911.016907,222.971542 911.050293,223.260895 
	C911.535828,223.908890 911.987976,224.267517 912.440186,224.626160 
	C912.440186,224.626160 912.049927,224.913834 912.149414,225.117401 
	C912.873901,225.854614 913.498962,226.388275 914.124023,226.921906 
	C914.124023,226.921906 914.022217,226.966415 914.028198,227.296066 
	C915.184814,228.921478 916.335510,230.217239 917.486145,231.513000 
	C917.486145,231.513016 917.331482,231.608215 917.363770,231.887604 
	C917.693420,232.378189 917.990784,232.589417 918.288147,232.800629 
	C918.288147,232.800629 918.117920,232.897598 918.139160,233.168549 
	C918.620544,233.762619 919.080627,234.085739 919.540710,234.408844 
	C919.540710,234.408844 919.557068,234.528915 919.436707,234.910248 
	C920.057678,235.990616 920.799072,236.689682 921.540405,237.388733 
	C921.540405,237.388733 921.546448,237.508347 921.495605,237.828552 
	C921.743896,238.344498 922.043030,238.540207 922.342163,238.735931 
	C922.342163,238.735931 922.209900,238.820312 922.252197,239.033264 
	C922.576660,239.475266 922.858826,239.704330 923.140991,239.933380 
	C923.140991,239.933380 923.046692,239.951447 923.066162,240.241974 
	C923.519836,240.929993 923.954163,241.327469 924.388489,241.724945 
	C924.388489,241.724930 924.165344,241.860687 924.175049,242.126389 
	C924.924316,243.152237 925.663940,243.912384 926.403564,244.672516 
	C926.403564,244.672501 926.026184,244.979401 926.114868,245.175751 
	C926.935730,246.139877 927.667908,246.907639 928.400146,247.675385 
	C928.400146,247.675385 928.035645,247.986633 928.119324,248.178329 
	C928.918030,249.164902 929.633118,249.959778 930.348145,250.754654 
	C930.348145,250.754654 930.133911,250.930740 930.158813,251.169037 
	C930.632996,251.766129 931.082275,252.124924 931.531555,252.483704 
	C931.531555,252.483704 931.505310,252.581360 931.398254,252.938782 
	C931.990051,254.099457 932.688904,254.902695 933.387756,255.705933 
	C933.387756,255.705933 933.156372,256.044952 933.181152,256.214600 
	C933.651245,256.744873 934.096558,257.105499 934.541809,257.466125 
	C934.541809,257.466125 934.519470,257.568085 934.408569,257.928223 
	C934.998596,259.090424 935.699585,259.892456 936.400574,260.694519 
	C936.400574,260.694489 936.227356,261.049316 936.218140,261.214264 
	C936.654114,261.740906 937.099426,262.102570 937.544739,262.464233 
	C937.544739,262.464233 937.519470,262.564850 937.407288,262.937195 
	C938.354919,264.728851 939.414673,266.148102 940.474487,267.567383 
	C940.474487,267.567383 940.206177,267.749420 940.227661,268.050049 
	C941.510498,270.226318 942.771790,272.102020 944.033020,273.977722 
	C944.033020,273.977722 943.996460,273.993225 944.000977,274.359009 
	C945.961731,279.047577 947.768433,283.447327 949.935486,287.661774 
	C951.072144,289.872223 952.840393,291.757904 954.323486,293.790253 
	C954.323486,293.790253 954.162903,293.909943 954.137573,294.217896 
	C954.909546,296.678650 955.681030,298.841461 956.508240,300.982727 
	C964.328247,321.225708 973.068237,341.169952 979.747742,361.782104 
	C987.599304,386.011017 992.955261,410.969238 995.078552,436.469910 
	C996.492065,453.446075 998.304321,470.421326 998.806152,487.430389 
	C999.171326,499.807129 997.880615,512.252747 996.968384,524.641113 
	C996.167480,535.517883 995.612610,546.497131 993.618958,557.182922 
	C990.263916,575.165222 986.612488,593.163879 981.668213,610.757263 
	C977.065613,627.134460 970.636597,643.000000 964.965576,659.074524 
	C962.778992,665.272400 960.465454,671.425476 958.209839,677.598938 
	C958.209839,677.598938 958.253967,677.848755 957.799866,677.978760 
	C953.918640,684.367249 950.383118,690.570007 947.117126,696.911499 
	C945.794678,699.479370 945.060059,702.349976 944.057983,705.082886 
	C944.057983,705.082886 943.998413,705.024109 943.683960,705.070801 
	C942.265198,707.438599 941.160950,709.759766 940.056763,712.080933 
	C940.056763,712.080933 939.998230,712.021973 939.691895,712.066528 
	C936.769958,716.870605 934.154358,721.630127 931.538757,726.389648 
	C931.538757,726.389648 931.396423,726.346191 931.073486,726.362915 
	C929.706055,728.386963 928.661621,730.394348 927.617310,732.401733 
	C927.617310,732.401733 927.517456,732.436768 927.152405,732.426636 
	C926.209351,733.637268 925.631409,734.858093 925.053406,736.078857 
	C925.053406,736.078857 925.000244,736.017273 924.680176,736.074646 
	C924.113220,736.890625 923.866211,737.649231 923.619263,738.407837 
	C923.619263,738.407837 923.519409,738.452820 923.161255,738.430359 
	C920.737061,741.741699 918.671021,745.075500 916.604858,748.409302 
	C916.604858,748.409302 916.504333,748.437378 916.135376,748.422974 
	C915.082581,749.742676 914.398804,751.076843 913.715088,752.411011 
	C913.715088,752.411011 913.611511,752.533997 913.213196,752.497559 
	C912.093750,753.779419 911.372620,755.097778 910.651489,756.416138 
	C910.651428,756.416138 910.546631,756.478210 910.167114,756.453735 
	C909.044067,757.754333 908.300537,759.079285 907.557007,760.404297 
	C907.557007,760.404297 907.461609,760.393188 907.113464,760.387329 
	C904.658081,763.379883 902.550903,766.378357 900.443726,769.376770 
	C900.443665,769.376770 900.007507,769.244568 899.898438,769.315613 
	C899.539246,769.946167 899.289185,770.505676 899.039124,771.065186 
	C899.039124,771.065186 898.999756,771.007080 898.669678,771.042969 
	C897.392395,772.518921 896.445190,773.958923 895.497986,775.398987 
	C895.497986,775.398987 895.376465,774.993225 895.091858,775.197998 
	C894.546326,775.961182 894.285400,776.519714 894.024475,777.078186 
	C894.010498,777.415588 893.869202,777.686523 893.013062,777.989014 
	C891.435425,779.519531 890.445190,780.952026 889.454956,782.384521 
	C889.454956,782.384521 889.226929,782.181763 889.012634,782.284058 
	C888.532532,782.930176 888.266724,783.474060 888.000977,784.017883 
	C887.567993,784.622620 887.135071,785.227356 886.081787,785.959595 
	C884.099182,787.841187 882.736816,789.595337 881.374451,791.349487 
	C881.374451,791.349487 881.042480,791.309265 880.913208,791.336182 
	C880.636658,791.697693 880.489380,792.032227 880.342163,792.366760 
	C880.342163,792.366760 880.109558,792.118164 879.948486,792.244812 
	C879.664490,792.712585 879.541626,793.053650 879.418762,793.394775 
	C879.292847,793.258972 879.166870,793.123230 878.928223,793.191162 
	C878.705994,793.735107 878.596436,794.075317 878.486877,794.415588 
	C878.486877,794.415588 878.331299,794.302185 878.083618,794.356934 
	C877.720154,794.747375 877.604370,795.083069 877.488647,795.418762 
	C877.488647,795.418762 877.336426,795.303650 877.086487,795.358032 
	C876.721375,795.748108 876.606201,796.083740 876.490967,796.419312 
	C876.490967,796.419312 876.343018,796.312805 876.090942,796.363525 
	C875.734070,796.750427 875.629395,797.086548 875.524719,797.422668 
	C875.524719,797.422668 875.431580,797.412231 875.140503,797.417725 
	C874.750671,797.756836 874.651978,798.090393 874.553223,798.424011 
	C874.553284,798.424011 874.454407,798.436462 874.156982,798.434326 
	C873.769226,798.762268 873.678772,799.092285 873.588257,799.422241 
	C873.588257,799.422241 873.487244,799.437256 873.172119,799.434692 
	C872.574402,799.966248 872.291748,800.500244 872.009155,801.034302 
	C870.220276,802.937256 868.431396,804.840149 865.975647,806.873047 
	C860.556091,811.713013 855.803406,816.422974 851.050781,821.132935 
	C850.997803,821.468506 850.824951,821.722473 849.975830,821.983276 
	C849.099365,822.541931 848.779236,823.012024 848.459106,823.482056 
	C848.459106,823.482056 848.229431,823.331970 847.962158,823.299194 
	C846.486816,824.571777 845.278687,825.877197 844.070557,827.182495 
	C844.016846,827.519165 843.837219,827.763306 842.975220,827.993347 
	C842.105896,828.542847 841.793152,829.013855 841.480469,829.484863 
	C841.480469,829.484924 841.304199,829.187134 841.072998,829.300903 
	C840.683289,829.737305 840.524841,830.059998 840.366455,830.382690 
	C840.366516,830.382690 839.985474,830.220093 839.805298,830.219971 
	C838.774902,831.211609 837.924622,832.203369 837.074341,833.195129 
	C837.023560,833.528320 836.848083,833.771606 835.991455,833.999023 
	C835.104980,834.540894 834.774902,835.008728 834.444824,835.476562 
	C834.444824,835.476562 834.171753,835.295166 833.933044,835.279602 
	C832.812439,836.203186 831.930542,837.142334 831.048706,838.081543 
	C831.048706,838.081543 831.012817,838.004456 830.719299,838.041016 
	C830.078308,838.534241 829.730896,838.990845 829.383423,839.447510 
	C829.383484,839.447510 829.017761,839.151123 828.843262,839.194702 
	C827.786987,840.172791 826.905151,841.107300 826.023315,842.041748 
	C826.023315,842.041748 826.005066,841.995911 825.702637,842.028076 
	C825.023560,842.499268 824.646851,842.938171 824.270142,843.377075 
	C824.270142,843.377136 824.163025,843.183105 823.896240,843.192261 
	C823.100891,843.826172 822.572327,844.450928 822.043762,845.075684 
	C822.043762,845.075684 822.012573,845.001831 821.671448,845.010986 
	C820.240356,846.045410 819.150391,847.070618 818.060425,848.095886 
	C818.060425,848.095886 818.019409,848.008118 817.730103,848.043884 
	C817.061646,848.520996 816.682556,848.962280 816.303467,849.403625 
	C816.303467,849.403625 816.106873,849.099548 815.858887,849.150024 
	C814.928650,849.970947 814.246338,850.741272 813.564026,851.511658 
	C813.564026,851.511658 813.453918,851.517456 813.087891,851.408813 
	C811.610596,852.345093 810.499268,853.390015 809.387939,854.434875 
	C809.263611,854.309265 809.139343,854.183655 808.831177,854.143677 
	C807.938660,854.987427 807.229919,855.745605 806.521240,856.503784 
	C806.521179,856.503723 806.422485,856.486389 806.057495,856.385620 
	C804.983154,857.030823 804.273743,857.776672 803.564392,858.522583 
	C803.564392,858.522583 803.456177,858.517090 803.099487,858.416748 
	C802.179504,858.907349 801.616089,859.498230 801.052734,860.089172 
	C801.052734,860.089172 801.021545,860.004211 800.679993,860.013306 
	C799.410461,860.855469 798.482483,861.688538 797.554443,862.521545 
	C797.554443,862.521545 797.445557,862.520325 797.073853,862.409363 
	C795.959412,863.028931 795.216736,863.759460 794.474060,864.490051 
	C794.474060,864.490051 794.383118,864.449219 794.035706,864.358032 
	C792.928894,864.998230 792.169495,865.729675 791.410095,866.461121 
	C791.410095,866.461121 791.139282,866.103760 790.903687,866.171387 
	C789.882202,866.958740 789.096375,867.678589 788.310486,868.398376 
	C788.310486,868.398376 787.950745,868.157532 787.789001,868.186829 
	C787.294495,868.662720 786.961731,869.109314 786.628967,869.555908 
	C786.628967,869.555908 786.497925,869.587585 786.130493,869.468628 
	C785.180359,869.910828 784.597717,870.471924 784.015015,871.033020 
	C784.015015,871.033020 784.008118,870.994141 783.644043,870.997559 
	C779.361328,873.505737 775.442749,876.010498 771.524170,878.515259 
	C771.524170,878.515259 771.424927,878.497437 771.065247,878.389465 
	C769.867310,878.955261 769.029053,879.628967 768.190796,880.302734 
	C768.190796,880.302673 768.107300,880.153015 767.838135,880.151001 
	C767.129333,880.560730 766.689697,880.972473 766.250000,881.384155 
	C766.250000,881.384155 766.084534,881.184814 765.845520,881.186096 
	C765.190857,881.613281 764.775146,882.039185 764.359497,882.465088 
	C764.359497,882.465088 764.030640,882.365295 763.919556,882.349487 
	C763.554199,882.588989 763.299866,882.844299 763.045532,883.099609 
	C763.045593,883.099670 763.031982,883.012573 762.680420,883.018005 
	C755.378662,886.278992 748.404724,889.485352 741.501526,892.837585 
	C740.324890,893.409058 739.451599,894.605286 738.438232,895.512939 
	C738.438232,895.512939 738.363098,895.467651 738.016357,895.366882 
	C737.221985,895.662598 736.774414,896.059143 736.326782,896.455627 
	C736.326782,896.455627 736.209412,896.480835 735.875488,896.328003 
	C732.800415,897.599426 730.059265,899.023621 727.318115,900.447754 
	C727.318115,900.447754 727.132202,900.467163 726.827515,900.318115 
	C725.711914,900.279297 724.833801,900.224731 724.099731,900.523743 
	C698.697449,910.871216 672.894958,920.099731 645.795410,924.758179 
	C624.473022,928.423523 603.040527,932.155090 581.503601,933.655945 
	C562.165710,935.003540 542.588745,933.904053 523.173462,932.849365 
	C507.515747,931.998840 491.790588,930.455139 476.364288,927.708435 
	C449.280060,922.886108 422.691193,915.910400 397.057373,905.635559 
	C391.756897,903.510986 386.152496,902.144592 380.688202,900.428711 
	C380.688202,900.428711 380.857239,900.483154 380.726318,900.115051 
	C368.909180,893.958862 357.228271,888.159790 345.517975,882.420715 
	C345.023987,882.178650 344.256744,882.494202 343.616791,882.549927 
	C343.616791,882.549927 343.742737,882.267456 343.643738,882.040039 
	C342.922974,881.687744 342.301178,881.562927 341.679382,881.438110 
	C341.679382,881.438110 341.683136,881.055969 341.659637,880.875000 
	C339.961853,880.004150 338.287537,879.314270 336.613220,878.624451 
	C336.613220,878.624451 336.575928,878.527405 336.551208,878.187439 
	C335.907990,877.715576 335.289490,877.583679 334.671021,877.451782 
	C334.671021,877.451782 334.794037,877.020752 334.715698,876.859192 
	C332.963257,875.993042 331.289215,875.288452 329.615173,874.583862 
	C329.615173,874.583862 329.588379,874.489075 329.593750,874.127930 
	C327.937836,873.047913 326.276520,872.328979 324.615204,871.610107 
	C324.615204,871.610107 324.567047,871.515930 324.577118,871.148926 
	C322.929047,870.036438 321.270905,869.290894 319.612793,868.545288 
	C319.612793,868.545288 319.675812,868.393127 319.640747,868.068604 
	C318.369965,867.187439 317.134308,866.630798 315.898651,866.074158 
	C315.898651,866.074158 315.973602,866.008179 315.921021,865.695129 
	C314.875214,864.949585 313.881958,864.517090 312.888702,864.084595 
	C312.888702,864.084595 312.970947,864.011536 312.918488,863.701416 
	C311.873810,862.955261 310.881592,862.519287 309.889374,862.083313 
	C309.889374,862.083313 309.969147,862.011230 309.919250,861.703857 
	C308.892822,860.944092 307.916260,860.491699 306.939697,860.039307 
	C306.939728,860.039246 306.989044,859.996094 306.935303,859.671631 
	C305.889954,858.919983 304.898346,858.492737 303.906738,858.065552 
	C303.906738,858.065552 303.975342,858.004578 303.920197,857.688965 
	C303.108246,857.109558 302.351440,856.845764 301.594604,856.582031 
	C301.594604,856.582031 301.588196,856.482666 301.589355,856.121948 
	C300.609100,855.312439 299.627625,854.863770 298.646179,854.415039 
	C298.646179,854.415039 298.887939,854.018860 298.747314,853.894165 
	C298.027466,853.546326 297.448242,853.323120 296.868988,853.099915 
	C296.868988,853.099915 296.964111,853.025146 296.930847,852.716919 
	C294.583527,850.947449 292.269470,849.486206 289.955414,848.025024 
	C289.955414,848.025024 289.993408,847.995056 289.942261,847.671509 
	C289.154816,847.006470 288.418549,846.664917 287.682251,846.323425 
	C287.682251,846.323425 287.882385,846.078125 287.757385,845.924683 
	C287.284729,845.701172 286.937042,845.631165 286.589386,845.561096 
	C286.589386,845.561096 286.571716,845.466003 286.586853,845.118164 
	C285.062500,843.847473 283.523010,842.924744 281.983490,842.001953 
	C281.637360,842.006653 281.353027,841.876404 281.002991,841.031616 
	C280.136536,840.088013 279.397675,839.723938 278.658844,839.359802 
	C278.658844,839.359802 278.856506,839.149170 278.742737,838.953125 
	C278.074341,838.507446 277.519745,838.257874 276.965149,838.008301 
	C276.625061,837.996704 276.345734,837.860535 276.001587,837.021973 
	C275.136871,836.083618 274.397766,835.722900 273.658661,835.362183 
	C273.658661,835.362183 273.833984,835.172852 273.728882,834.964172 
	C273.058990,834.512390 272.494232,834.269287 271.929443,834.026184 
	C271.589783,834.024170 271.313446,833.890869 271.000732,833.032593 
	C269.812622,831.762329 268.724182,831.085693 267.635712,830.409058 
	C267.635712,830.409058 267.843781,830.003967 267.733459,829.892090 
	C267.077545,829.520630 266.531921,829.260986 265.986298,829.001282 
	C265.638672,828.979736 265.361694,828.828674 264.956360,828.074951 
	C264.449493,827.432800 264.141663,827.263733 263.833862,827.094727 
	C263.833832,827.094727 263.930023,827.061401 263.911957,826.746399 
	C261.927612,824.952332 259.961365,823.473328 257.995117,821.994263 
	C257.386444,821.560852 256.777802,821.127380 256.041290,820.078857 
	C253.146973,817.125000 250.380463,814.786194 247.613953,812.447388 
	C247.613953,812.447388 247.957886,812.330505 247.781586,812.072571 
	C247.263611,811.712463 246.921951,811.610291 246.580292,811.508179 
	C246.580276,811.508179 246.602585,811.418335 246.591949,811.131592 
	C246.245865,810.745056 245.910416,810.645264 245.574966,810.545410 
	C245.574966,810.545410 245.569870,810.447998 245.570328,810.151611 
	C245.238571,809.756226 244.906342,809.657227 244.574127,809.558228 
	C244.574127,809.558228 244.580002,809.459106 244.580856,809.156006 
	C244.052048,808.566467 243.522385,808.280090 242.992706,807.993713 
M597.649902,623.272217 
	C597.456421,623.586365 597.262939,623.900513 596.934998,624.650146 
	C596.741943,624.919495 596.479736,625.052734 595.470337,625.082214 
	C595.132751,625.556824 594.795166,626.031372 594.224609,626.309937 
	C594.224609,626.309937 594.410034,626.551453 593.687317,626.267151 
	C591.472778,627.872314 589.258301,629.477539 587.024048,631.002747 
	C587.024048,631.002747 587.086975,631.055786 586.273132,631.013367 
	C584.993042,631.278381 583.647583,631.372986 582.443115,631.835144 
	C571.862305,635.894714 561.282593,637.861633 550.229553,633.309326 
	C545.905945,631.528564 541.220520,630.626465 536.841553,629.242188 
	C536.841553,629.242188 536.761963,629.385315 536.627258,628.734619 
	C536.035400,628.526489 535.443604,628.318298 534.949280,628.045715 
	C534.949280,628.045715 534.902344,628.152771 534.870422,627.429932 
	C533.896973,626.962524 532.923523,626.495117 531.995239,625.996887 
	C531.995239,625.996887 531.982300,626.049805 531.746826,625.570557 
	C531.436646,625.413269 531.126465,625.255981 530.907837,625.082336 
	C530.907837,625.082336 530.882324,625.171875 530.899414,624.442078 
	C529.121155,623.143860 527.342957,621.845703 525.825378,620.358459 
	C525.825378,620.358459 525.533447,620.494324 525.597778,619.846008 
	C525.060791,619.563293 524.523865,619.280518 523.375000,618.733826 
	C519.893127,615.225220 516.411255,611.716614 512.741821,607.672852 
	C512.426208,607.484009 512.110596,607.295166 511.910889,607.087585 
	C511.910889,607.087585 511.890259,607.203125 511.727936,606.666138 
	C511.415649,606.482483 511.103333,606.298828 510.888947,606.101257 
	C510.888947,606.101257 510.856079,606.194519 510.894012,605.478333 
	C506.229095,600.516846 501.591553,595.528687 496.848358,590.643250 
	C496.459381,590.242615 495.350983,590.540405 494.722595,590.416809 
	C494.722595,590.416809 494.549194,590.440063 494.592194,589.835510 
	C494.245300,589.733398 493.898407,589.631226 493.524628,589.433594 
	C493.524628,589.433594 493.425598,589.439514 493.723969,588.721619 
	C491.780273,587.159546 489.836578,585.597412 487.286804,583.799133 
	C485.499359,581.931580 483.711914,580.063965 481.873108,577.449707 
	C480.850525,577.022461 479.827972,576.595276 478.906097,576.121155 
	C478.906097,576.121155 478.906006,576.232239 478.585358,575.559875 
	C475.967682,575.414062 472.490845,574.126953 470.890076,575.331970 
	C465.655487,579.272583 461.073792,584.089355 456.338745,588.670227 
	C455.883942,589.110229 456.109833,590.253845 455.792999,591.653137 
	C454.599701,592.795288 453.406372,593.937439 451.494965,595.080811 
	C448.496857,598.526672 445.498718,601.972534 442.421783,605.197449 
	C442.421783,605.197449 442.438049,605.431458 441.828674,605.399536 
	C441.723541,605.749695 441.618439,606.099854 441.063202,606.305298 
	C441.063202,606.305298 441.499298,606.487976 440.851929,606.406311 
	C440.566132,606.941711 440.280304,607.477112 439.762207,608.612244 
	C438.253448,610.101746 436.744659,611.591248 434.514038,613.079651 
	C430.713135,615.828125 426.250885,618.003479 425.371124,623.159729 
	C425.371124,623.159729 425.489838,623.459595 424.834412,623.413147 
	C424.561859,623.962219 424.289307,624.511292 423.783539,625.657288 
	C422.269287,627.134644 420.755005,628.611938 418.519409,630.083679 
	C413.529236,634.004395 407.861115,637.317810 405.814056,644.621765 
	C404.937836,645.433228 404.061615,646.244690 402.656677,647.251343 
	C402.470673,647.566406 402.284668,647.881470 402.088135,648.097961 
	C402.088135,648.097961 402.182343,648.128723 401.467102,648.099854 
	C398.858002,650.353455 396.013550,652.393311 393.712982,654.927063 
	C391.817810,657.014282 390.567108,659.686707 388.855133,662.627869 
	C388.311218,663.111816 387.767303,663.595764 386.503723,664.079468 
	C381.817352,667.642883 376.587799,670.724609 374.791595,677.608398 
	C373.912323,678.420715 373.033020,679.233093 371.638733,680.243591 
	C371.450623,680.549500 371.262482,680.855408 371.066559,681.073181 
	C371.066559,681.073181 371.150909,681.099915 370.438812,681.089905 
	C367.087250,683.591309 362.818146,685.320679 362.468048,690.389282 
	C362.468048,690.389282 362.501465,690.500366 361.855316,690.414246 
	C361.570099,690.948792 361.284882,691.483337 360.749359,692.609131 
	C359.243256,694.100281 357.737152,695.591370 355.510590,697.081726 
	C352.486603,699.742981 349.270935,702.222900 346.513702,705.136597 
	C344.967010,706.771057 344.178864,709.123352 342.931976,711.593384 
	C342.762604,711.880127 342.511688,712.033630 341.652161,712.252014 
	C341.469238,712.568359 341.286316,712.884644 341.091217,713.102051 
	C341.091217,713.102051 341.186157,713.132507 340.470490,713.101746 
	C335.816040,716.691467 330.515472,719.712219 328.814148,726.651794 
	C327.942352,727.455566 327.070587,728.259277 325.666016,729.253113 
	C325.476227,729.567444 325.286438,729.881836 325.088470,730.096619 
	C325.088470,730.096619 325.182831,730.129333 324.466156,730.100281 
	C322.127930,732.867737 319.789734,735.635254 317.463287,738.343811 
	C317.463287,738.343811 317.425171,738.384521 316.814362,738.387268 
	C316.713928,738.741150 316.613525,739.095093 316.047119,739.400208 
	C316.047119,739.400208 316.509033,739.480835 315.850586,739.410767 
	C315.572388,739.959778 315.294189,740.508789 314.799561,741.645569 
	C313.604736,742.789978 312.409912,743.934387 310.496826,745.080688 
	C305.862793,749.419067 301.200043,753.727905 296.644409,758.147156 
	C296.241302,758.538208 296.537170,759.649719 296.532166,760.266113 
	C296.532166,760.266113 296.483734,760.415649 295.826538,760.390991 
	C295.559021,760.943054 295.291504,761.495117 294.996521,762.003662 
	C294.996521,762.003662 295.045105,762.020142 294.336975,762.106934 
	C293.904816,763.093750 293.472626,764.080505 292.997681,765.016663 
	C292.997681,765.016663 293.063690,765.022583 292.580383,765.306824 
	C292.506805,765.657471 292.433258,766.008118 292.312775,766.218018 
	C292.312775,766.218018 292.444427,766.286438 291.709656,766.415710 
	C290.576355,769.784546 288.402771,773.199097 288.548523,776.511658 
	C288.779022,781.750610 288.104218,787.788025 293.532623,791.554810 
	C293.532623,791.554810 293.633514,791.585571 293.318359,792.254578 
	C293.914093,792.825684 294.509827,793.396790 295.656128,794.257751 
	C296.787476,795.457214 297.918793,796.656616 299.079926,798.591431 
	C300.757721,799.701416 302.435486,800.811462 304.028748,801.980469 
	C304.028748,801.980469 304.070374,801.886169 304.088806,802.619629 
	C305.769501,803.714844 307.450165,804.810059 309.036377,805.968628 
	C309.036377,805.968628 309.086395,805.866455 309.090912,806.586304 
	C311.745087,808.380859 314.399292,810.175415 317.007843,812.004395 
	C317.007843,812.004395 317.024841,811.949768 317.081299,812.680786 
	C318.421967,813.430786 319.762634,814.180847 321.030762,814.975220 
	C321.030762,814.975220 321.043365,814.891113 321.284454,815.394714 
	C321.620117,815.524902 321.955750,815.655090 322.148895,815.824829 
	C322.148895,815.824829 322.181305,815.680481 322.337433,816.296387 
	C322.897461,816.531189 323.457489,816.766052 324.490234,817.072144 
	C324.822266,817.194885 325.017212,817.430847 325.294159,818.323547 
	C325.643982,818.459961 325.993805,818.596436 326.186462,818.770264 
	C326.186462,818.770264 326.240570,818.618042 326.364929,819.262329 
	C326.944153,819.485291 327.523407,819.708252 328.030243,819.977295 
	C328.030243,819.977295 328.044708,819.892700 328.286835,820.396118 
	C328.623810,820.522766 328.960754,820.649414 329.165497,820.816284 
	C329.165497,820.816284 329.202728,820.683167 329.352570,821.257568 
	C329.710052,821.314941 330.067505,821.372314 330.439667,821.551941 
	C330.439667,821.551941 330.514587,821.454224 330.454346,822.145935 
	C331.053711,822.351929 331.653076,822.557922 332.142517,822.826111 
	C332.142517,822.826111 332.180267,822.705566 332.348053,823.272400 
	C332.705902,823.329224 333.063721,823.386047 333.415527,823.653198 
	C333.415527,823.653198 333.495911,823.458740 333.451569,824.153320 
	C334.055420,824.351257 334.659271,824.549194 335.141876,824.824097 
	C335.141876,824.824097 335.196503,824.691284 335.352844,825.257507 
	C335.706177,825.299255 336.059509,825.341003 336.470947,825.473022 
	C336.470947,825.473022 336.576508,825.453979 336.427673,826.198303 
	C337.663147,826.765869 338.898590,827.333496 340.044861,827.967102 
	C340.044861,827.967102 340.083954,827.863220 340.140839,828.599792 
	C340.900024,828.828125 341.659210,829.056396 342.539215,829.385620 
	C342.539215,829.385620 342.683929,829.447754 342.451691,830.145630 
	C345.341705,831.734863 348.231689,833.324036 351.046295,834.959290 
	C351.046295,834.959290 351.052155,834.871155 351.312195,835.380432 
	C351.667053,835.457031 352.021912,835.533691 352.114197,835.677551 
	C352.114197,835.677551 352.353424,835.550110 352.353760,836.294006 
	C354.031311,837.031189 355.708862,837.768433 356.970032,838.817383 
	C357.107941,838.709412 357.245819,838.601501 357.426147,839.198914 
	C358.053101,839.351440 358.680054,839.503967 359.086700,839.781372 
	C359.086700,839.781372 359.268646,839.605225 359.329956,840.333618 
	C361.683868,841.356140 364.037781,842.378662 366.385773,843.556335 
	C366.385773,843.556335 366.475128,843.429382 366.458008,844.161316 
	C367.341797,844.415466 368.225586,844.669556 369.038635,844.970825 
	C369.038635,844.970825 369.042419,844.885925 369.319611,845.385742 
	C369.675842,845.423950 370.032074,845.462158 370.429443,845.509949 
	C370.429443,845.509949 370.418762,845.468933 370.442352,846.185181 
	C371.075500,846.299988 371.708649,846.414856 372.431519,846.797485 
	C372.431519,846.797485 372.376984,846.520203 372.373657,847.293823 
	C373.682068,847.749817 374.990479,848.205811 376.152649,848.733154 
	C376.152649,848.733154 376.240326,848.596069 376.394684,849.270630 
	C377.022247,849.417297 377.649841,849.563965 378.158691,849.761536 
	C378.158691,849.761536 378.196686,849.638062 378.387482,850.299866 
	C379.017242,850.436462 379.647003,850.573120 380.142395,850.775818 
	C380.142395,850.775818 380.216125,850.645447 380.329315,851.382507 
	C382.328430,852.109436 384.327515,852.836365 386.053741,853.580872 
	C386.053741,853.580872 386.318756,853.513550 386.423859,854.231201 
	C387.313385,854.466431 388.202911,854.701721 389.028687,854.985352 
	C389.028687,854.985352 389.032227,854.905396 389.353973,855.452820 
	C389.950073,855.599121 390.546204,855.745361 391.062927,855.935913 
	C391.062927,855.935913 391.064545,855.845032 391.312561,856.527710 
	C393.315521,857.204285 395.318512,857.880920 397.227600,858.493713 
	C397.227600,858.493713 397.340637,858.504333 397.405579,859.233276 
	C398.974182,860.123657 400.466248,861.202148 402.122925,861.875977 
	C424.421173,870.945984 447.168823,878.627014 470.875214,883.079651 
	C481.237305,885.025940 491.716888,886.346436 502.585876,887.976746 
	C502.585876,887.976746 503.007660,888.113892 503.595032,888.643921 
	C505.776215,888.744629 507.957367,888.845337 510.591095,888.982422 
	C510.591095,888.982422 511.022186,889.124756 511.626648,889.655212 
	C520.690613,890.435974 529.743713,891.703674 538.820618,891.907288 
	C567.385986,892.548218 595.834961,891.437805 624.046265,886.116150 
	C645.948120,881.984680 667.294983,876.005554 688.309631,868.714172 
	C689.254883,868.386230 689.933289,867.289124 690.845215,866.638977 
	C690.845215,866.638977 690.704468,866.636841 691.502808,866.858459 
	C697.896545,864.081665 704.290344,861.304871 710.877930,858.550842 
	C710.877930,858.550842 710.685974,858.585876 711.457153,858.834961 
	C714.177917,857.386292 716.898682,855.937622 719.578003,854.662109 
	C719.578003,854.662109 719.670593,854.509949 720.342529,854.766113 
	C720.812378,854.370300 721.282227,853.974426 721.847717,853.694641 
	C721.847717,853.694641 721.702454,853.655396 722.483704,853.861816 
	C726.895081,851.438904 731.306458,849.015991 735.954102,846.748840 
	C735.954102,846.748840 735.691956,846.642151 736.382812,846.809387 
	C736.817688,846.385681 737.252625,845.961975 737.777832,845.652466 
	C737.777832,845.652466 737.635376,845.622070 738.197571,845.682068 
	C738.454224,845.427490 738.710815,845.172913 738.977173,844.994507 
	C738.977173,844.994507 738.916870,844.946960 739.549255,844.942261 
	C740.016174,844.582275 740.483093,844.222290 740.948975,843.948730 
	C740.948975,843.948730 740.872742,843.908020 741.628357,843.962708 
	C743.331055,842.844543 745.033752,841.726379 746.904358,840.778931 
	C746.904358,840.778931 746.695801,840.661194 747.392090,840.813049 
	C747.797058,840.372437 748.202026,839.931824 748.877869,839.537964 
	C748.877869,839.537964 748.603149,839.546936 749.176941,839.641357 
	C749.423950,839.368408 749.670959,839.095398 749.924500,838.916870 
	C749.924500,838.916870 749.839966,838.874329 750.589661,838.952637 
	C751.647522,838.177551 752.705383,837.402527 753.862000,836.772400 
	C753.862000,836.772400 753.708191,836.688049 754.404297,836.824219 
	C754.808594,836.382019 755.212891,835.939819 755.875427,835.569336 
	C755.875427,835.569336 755.607727,835.558167 756.182190,835.647339 
	C756.428711,835.373657 756.675232,835.099976 756.926331,834.918518 
	C756.926331,834.918518 756.842468,834.879944 757.581604,834.949951 
	C758.377380,834.279175 759.173096,833.608398 759.985535,833.003479 
	C759.985535,833.003479 759.932678,832.960754 760.686646,832.984741 
	C762.093323,831.939636 763.499939,830.894531 764.949524,829.955139 
	C764.949524,829.955139 764.854797,829.891724 765.617676,829.958801 
	C766.561462,829.124939 767.505249,828.291077 768.553711,827.475220 
	C768.553711,827.475220 768.599731,827.379456 769.298828,827.708313 
	C771.059570,826.313843 772.820312,824.919434 774.907288,823.920105 
	C774.807434,823.781494 774.707642,823.642822 775.328308,823.761414 
	C776.061768,823.004089 776.795166,822.246765 777.713013,821.709534 
	C777.713013,821.709534 777.585754,821.452148 778.269775,821.719299 
	C778.830627,821.117310 779.391479,820.515320 779.980103,819.993286 
	C779.980103,819.993286 779.911133,819.944153 780.567322,819.924316 
	C780.966553,819.490295 781.365784,819.056274 781.815857,818.769470 
	C781.815857,818.769470 781.665588,818.728760 782.239502,818.695435 
	C782.464661,818.404297 782.689880,818.113159 782.925171,817.914978 
	C782.925171,817.914978 782.838745,817.879272 783.518921,817.893311 
	C783.876465,817.431213 784.233948,816.969116 785.033691,816.921326 
	C784.888733,816.779785 784.743713,816.638184 785.290161,816.738586 
	C785.842590,816.127625 786.395020,815.516663 786.977844,814.989868 
	C786.977844,814.989868 786.904785,814.938110 787.651367,814.976074 
	C788.758362,813.965942 789.865356,812.955811 790.990601,812.003723 
	C790.990601,812.003723 790.941895,811.967102 791.684814,811.988770 
	C792.925049,810.817505 794.165344,809.646240 795.521729,808.461487 
	C795.521729,808.461487 795.571899,808.355957 796.269043,808.690918 
	C797.162964,807.745117 798.056885,806.799316 799.145203,805.401978 
	C799.375549,805.134399 799.667175,805.005493 800.747437,805.002136 
	C801.479614,804.279907 802.211792,803.557678 803.124756,802.388855 
	C803.348022,802.125183 803.632385,801.995117 804.726868,801.997803 
	C805.773132,800.934631 806.819397,799.871521 807.894714,798.904114 
	C807.894714,798.904114 807.795715,798.888733 808.330200,798.747253 
	C808.542297,798.457764 808.754395,798.168274 809.140564,797.429871 
	C809.349854,797.154236 809.627441,797.011353 810.720520,797.000366 
	C812.123474,795.601990 813.526428,794.203674 815.155090,792.284668 
	C815.762634,791.856262 816.370117,791.427856 817.720337,790.999756 
	C819.453186,789.258606 821.185974,787.517456 823.048889,785.348633 
	C823.231201,785.079041 823.485107,784.942383 824.336182,784.760742 
	C824.544556,784.465271 824.752930,784.169739 825.226135,783.289734 
	C826.804688,781.858154 828.383301,780.426514 830.699158,778.998291 
	C834.637939,777.432617 838.089661,775.419006 838.534729,770.602661 
	C838.534729,770.602661 838.552429,770.515198 839.156616,770.585449 
	C839.271667,770.240417 839.386658,769.895325 839.744324,769.784363 
	C839.744324,769.784363 839.547485,769.510559 840.147766,769.580872 
	C840.237366,769.237305 840.327026,768.893738 840.519531,768.541504 
	C840.519531,768.541504 840.489380,768.442688 841.130005,768.566284 
	C841.419067,768.035278 841.708130,767.504272 842.224182,766.387512 
	C843.420715,765.237793 844.617249,764.088135 846.342041,762.744568 
	C846.526855,762.429688 846.711670,762.114807 846.908997,761.897583 
	C846.908997,761.897583 846.815186,761.867432 847.543091,761.895142 
	C848.910583,760.146973 850.278137,758.398804 851.927734,756.809753 
	C851.927734,756.809753 851.624329,756.696411 852.220947,756.635254 
	C852.349487,756.286804 852.478027,755.938293 852.923340,755.939575 
	C852.923340,755.939575 852.581299,755.614319 853.184875,755.606262 
	C853.282898,755.255859 853.380920,754.905518 853.939453,754.741760 
	C853.939453,754.741760 853.495117,754.519348 854.155701,754.578491 
	C854.428223,754.024780 854.700806,753.471069 855.078918,752.457520 
	C855.234985,752.149963 855.484375,751.976379 856.560974,751.917236 
	C857.706726,750.269775 858.852417,748.622375 860.103943,746.502563 
	C860.263855,746.189575 860.517700,746.007263 861.609375,745.915771 
	C862.265259,744.815369 862.921082,743.714966 863.878357,742.595032 
	C863.878357,742.595032 863.582581,742.638672 864.188538,742.615234 
	C864.265991,742.262085 864.343445,741.908997 864.521057,741.542847 
	C864.521057,741.542847 864.470154,741.455566 865.134033,741.560852 
	C865.393860,740.998840 865.653687,740.436768 865.967651,739.966064 
	C865.967651,739.966064 865.871704,739.920532 866.587891,739.874512 
	C866.944519,739.133972 867.301086,738.393433 867.739563,737.774658 
	C867.739563,737.774658 867.599792,737.729980 868.247437,737.633301 
	C868.491150,737.063049 868.734802,736.492737 869.052673,735.465210 
	C869.176453,735.145569 869.407837,734.960022 870.485962,734.879150 
	C870.984924,733.899719 871.483887,732.920349 872.058716,731.478577 
	C872.186401,731.157776 872.420593,730.969299 873.511597,730.867188 
	C873.808899,730.101562 874.106262,729.335938 874.507324,728.578491 
	C874.507324,728.578491 874.470215,728.481201 875.145630,728.554749 
	C875.384155,727.977051 875.622742,727.399353 875.928589,726.932800 
	C875.928589,726.932800 875.813232,726.873047 876.539612,726.862610 
	C877.018860,725.895203 877.498108,724.927856 878.004700,723.994751 
	C878.004700,723.994751 877.963379,723.981079 878.662231,723.889282 
	C878.990234,723.143433 879.318237,722.397583 879.748047,721.789124 
	C879.748047,721.789124 879.590942,721.721619 880.243652,721.624817 
	C880.470398,721.045532 880.697144,720.466187 880.977112,719.970642 
	C880.977112,719.970642 880.885498,719.932617 881.608521,719.871216 
	C881.912537,719.113281 882.216553,718.355408 882.905823,718.034912 
	C882.781494,717.886353 882.657104,717.737793 883.265503,717.642029 
	C884.519287,715.446411 885.773132,713.250793 887.087830,710.564758 
	C887.202881,710.217590 887.439636,710.007629 888.336304,709.701416 
	C888.454468,709.345703 888.572632,708.989990 888.725708,708.792480 
	C888.725708,708.792480 888.579102,708.723511 889.244812,708.620972 
	C889.453064,708.024292 889.661255,707.427612 889.905640,706.922668 
	C889.905640,706.922668 889.807129,706.921265 890.379089,706.680176 
	C890.586731,706.118408 890.794373,705.556580 891.000000,705.000000 
	C891.000000,705.000000 890.997742,705.002258 891.701599,704.886047 
	C891.952820,704.121887 892.204041,703.357727 892.748291,702.752686 
	C892.748291,702.752686 892.489746,702.542114 893.246704,702.608826 
	C893.789734,701.353088 894.332764,700.097412 894.948608,698.941467 
	C894.948608,698.941467 894.834595,698.893921 895.573303,698.867371 
	C896.193176,697.441711 896.813049,696.016052 897.537720,694.593750 
	C897.537720,694.593750 897.481812,694.504944 898.229370,694.605713 
	C898.952698,692.937622 899.675964,691.269531 900.493103,689.563782 
	C900.493103,689.563782 900.462158,689.467529 901.197205,689.597778 
	C902.427673,687.016113 903.658081,684.434448 904.930420,681.933960 
	C904.930420,681.933960 904.839111,681.930725 905.356628,681.675049 
	C905.398804,681.317200 905.440979,680.959412 905.606689,680.501160 
	C905.606689,680.501160 905.463501,680.572327 906.179321,680.561340 
	C906.449341,679.699219 906.719360,678.837036 907.004517,677.995483 
	C907.004517,677.995483 906.980042,677.994019 907.675293,677.900452 
	C911.195862,671.422302 914.775696,664.974976 918.176086,658.434326 
	C918.715942,657.395935 918.447632,655.937439 918.491028,654.752502 
	C918.491028,654.752502 918.506592,654.653137 919.232605,654.593262 
	C920.458130,651.354431 921.683594,648.115662 922.957092,644.951904 
	C922.957092,644.951904 922.868225,644.947571 923.533264,644.691101 
	C926.977112,636.469849 930.844055,628.396545 933.781616,619.998230 
	C941.177673,598.853149 947.216370,577.293030 950.076477,555.029053 
	C952.433960,536.678467 954.445007,518.262024 955.823059,499.816010 
	C956.486450,490.936218 955.618408,481.899658 954.943420,472.971893 
	C953.859436,458.633392 952.764038,444.274902 950.950684,430.016785 
	C947.361633,401.797058 939.643616,374.586914 929.441284,348.081573 
	C927.694336,343.543152 925.092224,339.333862 922.759155,334.840149 
	C922.759155,334.840149 922.805908,334.663605 922.908508,333.805847 
	C920.574524,328.881683 918.240540,323.957550 915.985962,319.028595 
	C915.985962,319.028595 915.939575,319.093201 915.945801,318.467316 
	C915.611023,317.984314 915.276306,317.501312 915.003906,317.016266 
	C915.003906,317.016266 914.962524,317.062988 914.955444,316.444122 
	C914.619995,315.968262 914.284546,315.492432 914.005737,315.013733 
	C914.005737,315.013733 913.967224,315.055420 913.995361,314.269897 
	C912.814697,312.350159 911.633972,310.430420 910.481567,308.416656 
	C910.481567,308.416656 910.409058,308.350372 910.712463,307.680817 
	C910.281250,307.300476 909.849976,306.920135 909.457336,306.443634 
	C909.457336,306.443634 909.366760,306.393280 909.700684,305.680145 
	C907.664673,302.213318 905.628662,298.746460 903.753113,295.068512 
	C903.753113,295.068512 903.645020,295.310638 903.810059,294.614532 
	C903.373901,294.197571 902.937744,293.780609 902.602722,293.178619 
	C902.602722,293.178619 902.576538,293.387878 902.658264,292.816437 
	C902.390076,292.566650 902.121887,292.316833 901.947510,292.055939 
	C901.947510,292.055939 901.897522,292.136078 901.957520,291.382050 
	C900.963806,289.924500 899.970093,288.466949 899.004700,287.005615 
	C899.004700,287.005615 898.986023,287.028625 898.956482,286.406036 
	C898.588135,285.955383 898.219788,285.504730 897.938049,285.054138 
	C897.938049,285.054138 897.903259,285.133453 897.962952,284.376770 
	C897.142639,283.389923 896.322266,282.403107 895.469604,281.259003 
	C895.469604,281.259003 895.548584,281.398773 895.643250,280.821899 
	C895.365845,280.577789 895.088440,280.333679 894.904602,280.083282 
	C894.904602,280.083282 894.867981,280.169708 894.898132,279.496307 
	C894.469666,279.076294 894.041138,278.656281 893.758301,278.183807 
	C893.758301,278.183807 893.717163,278.333038 893.706238,277.767639 
	C893.435120,277.525787 893.164001,277.283936 892.976807,277.033142 
	C892.976807,277.033142 892.930603,277.103760 892.970947,276.375671 
	C892.304688,275.588562 891.638428,274.801453 891.004456,274.005829 
	C891.004456,274.005829 890.981995,274.031952 890.945740,273.399536 
	C890.557617,272.956848 890.169556,272.514160 889.345825,271.876892 
	C889.178040,271.442596 889.010315,271.008331 888.758545,269.927551 
	C888.454651,269.637360 888.150757,269.347137 887.933899,269.061066 
	C887.933899,269.061066 887.896729,269.139801 887.954956,268.395752 
	C887.261963,267.621490 886.568909,266.847229 885.972046,266.037048 
	C885.972046,266.037048 885.914856,266.122253 885.963196,265.379028 
	C885.263123,264.613800 884.562988,263.848572 883.963013,263.042358 
	C883.963013,263.042358 883.904541,263.133423 883.961487,262.372986 
	C882.278809,260.264618 880.596130,258.156219 878.993896,256.019592 
	C878.993896,256.019592 878.944031,256.088654 878.979736,255.343872 
	C877.816528,254.062424 876.653320,252.780960 875.697571,251.454956 
	C875.697571,251.454956 875.486755,251.430313 875.600342,250.839600 
	C875.288574,250.634781 874.976746,250.429962 874.799988,250.179581 
	C874.799988,250.179581 874.761536,250.316772 874.703796,249.745239 
	C874.407288,249.526703 874.110779,249.308182 873.908203,249.078415 
	C873.908203,249.078415 873.872681,249.166061 873.948853,248.410202 
	C872.608154,246.953461 871.267456,245.496719 869.997864,244.012589 
	C869.997864,244.012589 869.954529,244.075256 869.980896,243.315002 
	C868.914429,242.236557 867.848022,241.158112 866.343750,239.910263 
	C866.086365,239.691299 865.963623,239.412964 865.928467,238.413589 
	C865.460938,238.073776 864.993347,237.733963 864.760681,237.187622 
	C864.760681,237.187622 864.515625,237.402039 864.760864,236.676224 
	C863.792175,235.800262 862.823425,234.924301 861.402710,233.876114 
	C861.128906,233.660019 860.993591,233.377563 860.998535,232.281021 
	C859.597717,230.878021 858.196899,229.475021 856.358398,227.916306 
	C856.095398,227.708694 855.965515,227.437347 855.925659,226.432083 
	C855.450745,226.102188 854.975830,225.772278 854.683716,225.056503 
	C854.683716,225.056503 854.460693,225.420593 854.743591,224.708557 
	C853.105225,223.158524 851.466858,221.608475 849.247681,219.818237 
	C848.164062,218.554504 847.080444,217.290787 845.928101,215.371841 
	C845.445862,215.096069 844.963623,214.820312 844.546326,214.460037 
	C844.546326,214.460037 844.439758,214.455536 844.562622,213.861801 
	C844.222473,213.751663 843.882263,213.641525 843.574280,213.439301 
	C843.574280,213.439301 843.477295,213.449814 843.578003,212.850403 
	C843.238525,212.715378 842.898987,212.580353 842.973755,212.163162 
	C842.973755,212.163162 842.560669,212.435257 842.599426,211.828995 
	C842.254089,211.701385 841.908691,211.573761 842.029053,211.199219 
	C841.872314,211.276337 841.715637,211.353439 841.605042,210.826584 
	C841.267090,210.672867 840.929138,210.519165 840.816223,210.405579 
	C840.816223,210.405579 840.582520,210.386505 840.788391,209.666702 
	C838.343445,205.543900 835.965820,201.345871 830.953430,200.407288 
	C830.953430,200.407288 830.556458,200.487869 830.602173,199.836685 
	C830.060303,199.557739 829.518372,199.278793 828.381836,198.755280 
	C826.896667,197.238922 825.411560,195.722565 823.919617,193.481110 
	C821.805542,191.829483 819.691467,190.177872 817.980530,188.454132 
	C817.980530,188.454132 817.574951,188.499191 817.587769,187.824524 
	C817.013428,187.565308 816.439148,187.306091 815.413330,186.953278 
	C815.111572,186.798401 814.947693,186.551865 814.905579,185.454193 
	C813.798584,184.809067 812.691650,184.163940 812.021912,183.291626 
	C812.021912,183.291626 811.570862,183.489502 811.596741,182.828354 
	C811.038086,182.568253 810.479431,182.308136 809.986572,182.009232 
	C809.986572,182.009232 809.967102,182.083054 809.744507,181.591019 
	C809.433411,181.428055 809.122253,181.265091 808.903442,181.087204 
	C808.903442,181.087204 808.877136,181.176956 808.894287,180.436432 
	C807.225830,179.316025 805.557434,178.195602 803.972900,177.021027 
	C803.972900,177.021027 803.932556,177.112411 803.908936,176.379791 
	C802.599915,175.585754 801.290833,174.791702 799.505798,173.913284 
	C799.183350,173.766632 798.996704,173.518021 798.885254,172.440735 
	C798.133118,172.090485 797.381042,171.740234 796.806763,171.215958 
	C796.806763,171.215958 796.687256,171.434219 796.623657,170.776810 
	C796.050537,170.538467 795.477356,170.300125 794.980103,170.011505 
	C794.980103,170.011505 794.944458,170.095245 794.908508,169.353806 
	C793.557373,168.605011 792.206299,167.856201 790.952576,167.042648 
	C790.952576,167.042648 790.904236,167.149170 790.895630,166.397095 
	C789.537109,165.645737 788.178589,164.894363 786.932800,164.074173 
	C786.932800,164.074173 786.871155,164.190994 786.855774,163.447327 
	C785.849060,163.007706 784.842407,162.568085 783.941467,162.056015 
	C783.941467,162.056015 783.885864,162.171539 783.864685,161.443863 
	C782.888184,160.976349 781.911682,160.508850 780.988037,159.996689 
	C780.988037,159.996689 780.965149,160.061920 780.876953,159.345444 
	C780.112915,159.076202 779.348816,158.806961 778.805603,158.199356 
	C778.805603,158.199356 778.542236,158.505753 778.613770,157.750381 
	C777.610779,157.331757 776.607727,156.913132 776.021912,156.067169 
	C775.879333,156.205643 775.736755,156.344101 775.631165,155.739105 
	C774.407837,155.165939 773.184570,154.592773 771.993042,153.993851 
	C771.993042,153.993851 771.985718,154.033783 771.889160,153.321899 
	C770.886169,152.909256 769.883179,152.496628 768.955872,152.040070 
	C768.955872,152.040070 768.949463,152.127365 768.689270,151.617844 
	C768.333984,151.543930 767.978760,151.470032 767.888062,151.343124 
	C767.888062,151.343124 767.643250,151.456619 767.637024,150.697876 
	C766.625793,150.342590 765.614502,149.987289 764.567139,149.533295 
	C764.567139,149.533295 764.466553,149.563889 764.533020,148.858536 
	C763.916443,148.689194 763.299927,148.519852 762.893127,148.207245 
	C762.893127,148.207245 762.727234,148.399628 762.658386,147.660583 
	C761.402710,147.132217 760.147095,146.603836 758.964111,146.027100 
	C758.964111,146.027100 758.952881,146.113724 758.693176,145.608536 
	C758.341370,145.522156 757.989563,145.435776 757.803833,145.296906 
	C757.803833,145.296906 757.684692,145.423950 757.654175,144.668076 
	C755.986694,143.937988 754.319275,143.207916 752.634521,142.148804 
	C752.634521,142.148804 752.606628,142.477127 752.636169,141.727615 
	C750.706848,140.857147 748.777588,139.986679 746.930542,139.076126 
	C746.930542,139.076126 746.927795,139.167587 746.676941,138.644958 
	C746.318237,138.600220 745.959534,138.555481 745.500061,138.378845 
	C745.500061,138.378845 745.563538,138.532257 745.559204,137.820480 
	C744.931335,137.676758 744.303528,137.533035 743.899841,137.260239 
	C743.899841,137.260239 743.716614,137.442841 743.597839,136.754669 
	C742.969177,136.604721 742.340576,136.454773 741.865234,136.219940 
	C741.865234,136.219940 741.766663,136.364838 741.680420,135.646698 
	C737.278198,133.170670 732.979736,130.478638 728.437012,128.294952 
	C725.430969,126.849953 722.074402,126.134178 718.951111,125.046379 
	C718.951111,125.046379 718.946533,125.135155 718.697205,124.474113 
	C717.021423,123.440834 715.464844,122.073570 713.651306,121.425987 
	C695.708374,115.018822 677.909119,108.113373 659.686340,102.618431 
	C646.765625,98.722290 633.322754,96.396805 619.989990,94.077393 
	C608.618713,92.099220 597.103638,90.729729 585.594543,89.819595 
	C572.722900,88.801712 559.788147,88.245956 546.877319,88.179794 
	C538.642029,88.137589 530.365234,89.061089 522.168945,90.059616 
	C505.628082,92.074715 488.989227,93.711151 472.654572,96.868446 
	C457.743317,99.750603 443.127411,104.249641 428.494995,108.433571 
	C423.872803,109.755211 419.617096,112.358543 415.143463,114.253464 
	C415.143463,114.253464 415.270142,114.289696 414.462097,114.116127 
	C408.744843,116.570633 403.027557,119.025139 397.148346,121.436546 
	C397.148346,121.436546 397.313263,121.406708 396.527771,121.159782 
	C395.878967,121.205200 395.140625,121.063110 394.594574,121.323784 
	C384.049744,126.357689 373.512543,131.408554 363.027863,136.565796 
	C362.161865,136.991745 361.683014,138.204788 361.014618,138.993881 
	C361.014618,138.993881 361.058746,139.033127 360.321716,139.013077 
	C359.715912,139.534714 359.110107,140.056351 358.420685,140.521912 
	C358.420685,140.521912 358.392731,140.618637 357.692657,140.288422 
	C356.265381,141.353897 354.838104,142.419373 353.141174,142.984161 
	C353.224976,143.153809 353.308746,143.323441 352.729340,143.249908 
	C352.150970,143.804825 351.572571,144.359741 350.794434,145.166946 
	C350.794434,145.166946 350.472870,145.154907 349.725769,145.116089 
	C349.258209,145.572723 348.790619,146.029373 348.241394,146.357300 
	C348.241394,146.357300 348.386871,146.402786 347.811523,146.339218 
	C347.565460,146.612686 347.319427,146.886154 347.064636,147.065613 
	C347.064636,147.065613 347.146881,147.111984 346.413757,147.046814 
	C345.614441,147.707199 344.815125,148.367584 344.005646,148.995987 
	C344.005646,148.995987 344.031342,149.019760 343.324646,149.008575 
	C342.545197,149.654572 341.765778,150.300583 340.846924,151.177750 
	C340.846924,151.177750 340.579102,151.143814 339.933075,151.227036 
	C339.633759,151.522491 339.334473,151.817932 339.037262,152.031677 
	C339.037262,152.031677 339.108032,152.072571 338.377686,152.028458 
	C337.590240,152.697937 336.802795,153.367401 336.007233,153.993820 
	C336.007233,153.993820 336.041809,154.020981 335.300171,154.005585 
	C334.326569,154.826355 333.352936,155.647125 331.993896,156.018387 
	C332.122894,156.166916 332.251923,156.315460 331.661346,156.224838 
	C330.905487,156.973679 330.149628,157.722519 329.001221,158.001831 
	C329.131989,158.158066 329.262726,158.314316 328.703461,158.246368 
	C328.144379,158.848724 327.585297,159.451096 327.009644,159.995682 
	C327.009644,159.995682 327.057648,160.031876 326.409088,160.065582 
	C326.011017,160.496658 325.612915,160.927719 325.171570,161.236404 
	C325.171570,161.236404 325.288055,161.293655 324.524414,161.120316 
	C322.043121,163.123947 319.561829,165.127563 317.039154,167.032501 
	C317.039154,167.032501 317.128967,167.090698 316.374084,167.035065 
	C315.268188,168.055969 314.162323,169.076874 313.023132,170.011993 
	C313.023132,170.011993 313.098694,170.064499 312.344666,170.025620 
	C311.257294,171.061569 310.169922,172.097504 309.039276,173.034866 
	C309.039276,173.034866 309.130737,173.091675 308.374603,173.035797 
	C306.930237,174.402679 305.485840,175.769547 303.857758,177.589722 
	C303.631897,177.858093 303.343597,177.990967 302.250702,177.995529 
	C301.182739,179.043716 300.114777,180.091904 298.869415,181.589508 
	C298.652527,181.859802 298.370850,181.997528 297.279907,182.001495 
	C295.872589,183.388168 294.465302,184.774826 292.831146,186.686752 
	C292.218475,187.120941 291.605774,187.555130 290.259552,187.995300 
	C288.206635,190.047638 286.153717,192.099976 284.076508,194.067001 
	C284.076508,194.067001 284.164673,194.076797 283.641785,194.249191 
	C283.441589,194.545883 283.241394,194.842560 282.828186,195.666550 
	C282.234283,196.115433 281.640381,196.564316 280.386993,197.074448 
	C280.113190,197.556656 279.839386,198.038864 279.456573,198.522995 
	C279.456573,198.522995 279.445587,198.631470 278.756897,198.300018 
	C273.578461,203.197647 268.390869,208.085739 263.258179,213.030899 
	C263.070770,213.211487 263.422516,213.951675 263.405243,214.054932 
	C263.405243,214.054932 263.482208,214.441467 262.835510,214.395935 
	C262.555969,214.932816 262.276459,215.469681 261.770721,216.591080 
	C260.594635,217.755463 259.418549,218.919830 257.511078,220.082687 
	C255.682480,222.415375 253.853851,224.748062 251.919113,227.541718 
	C251.760361,227.848663 251.509247,228.021088 250.436203,228.079147 
	C248.971512,230.095764 247.506821,232.112366 245.963089,234.578140 
	C245.823349,234.884735 245.585876,235.055054 244.519943,235.086395 
	C242.355850,238.086136 240.191772,241.085876 237.949066,244.544220 
	C237.816040,244.861588 237.578842,245.042023 236.504532,245.086609 
	C234.704681,247.772217 232.904846,250.457825 231.046402,253.047714 
	C231.046402,253.047714 231.149368,253.092377 230.423050,253.127731 
	C229.963867,254.110092 229.504669,255.092468 229.000626,256.014618 
	C229.000626,256.014618 229.072144,256.037506 228.356705,256.119507 
	C228.065735,256.879547 227.774765,257.639557 227.014084,258.160431 
	C227.170547,258.236481 227.326996,258.312500 226.805923,258.407990 
	C226.582321,258.996582 226.358734,259.585175 226.098419,260.086578 
	C226.098419,260.086578 226.192734,260.093811 225.655716,260.305939 
	C225.537704,260.654541 225.419708,261.003143 225.256439,261.205475 
	C225.256439,261.205475 225.398712,261.262054 224.747894,261.371246 
	C224.525024,261.952667 224.302155,262.534119 224.021164,263.033813 
	C224.021164,263.033813 224.115356,263.068268 223.393066,263.123383 
	C222.948959,264.112976 222.504852,265.102600 222.006851,266.022614 
	C222.006851,266.022614 222.090271,266.050720 221.366272,266.127838 
	C221.103577,266.892090 220.840897,267.656342 220.465698,268.405304 
	C220.465698,268.405304 220.525177,268.502045 219.777420,268.399506 
	C219.205276,269.630920 218.633133,270.862335 218.008942,272.023529 
	C218.008942,272.023529 218.092346,272.049683 217.362396,272.130646 
	C217.149277,272.892944 216.936142,273.655273 216.622513,274.519562 
	C216.622513,274.519562 216.589767,274.658997 215.890869,274.511871 
	C215.748260,275.126160 215.605637,275.740448 215.222336,276.007324 
	C215.222336,276.007324 215.475662,276.354675 214.790634,276.407562 
	C214.592896,277.013519 214.395142,277.619446 214.154236,278.124756 
	C214.154236,278.124756 214.262131,278.143372 213.704987,278.336395 
	C213.657196,278.694763 213.609390,279.053162 213.485199,279.458649 
	C213.485199,279.458649 213.534851,279.533417 212.788208,279.399841 
	C212.071442,281.065186 211.354675,282.730530 210.542404,284.440857 
	C210.542404,284.440857 210.576035,284.540924 209.859665,284.473175 
	C209.732788,285.099762 209.605911,285.726349 209.079025,286.301117 
	C209.079025,286.301117 209.472244,286.391205 208.726074,286.363739 
	C207.839127,288.274902 206.952164,290.186035 206.007782,292.028168 
	C206.007782,292.028168 206.094238,292.052460 205.378830,292.111694 
	C204.466858,294.207947 203.554886,296.304199 202.544510,298.437256 
	C202.544510,298.437256 202.588699,298.532593 201.862076,298.474548 
	C201.597031,299.348663 201.331985,300.222809 201.016022,301.029510 
	C201.016022,301.029510 201.099716,301.041107 200.602402,301.316132 
	C200.542938,301.671204 200.483475,302.026245 200.367676,302.152618 
	C200.367676,302.152618 200.492599,302.352295 199.787003,302.423370 
	C199.655518,303.056244 199.524033,303.689087 199.271515,304.086761 
	C199.271515,304.086761 199.446579,304.285065 198.753494,304.408783 
	C198.626495,305.043732 198.499481,305.678680 198.272293,306.050903 
	C198.272293,306.050903 198.423508,306.287964 197.661148,306.350494 
	C197.203659,307.659149 196.746170,308.967804 196.243423,310.151733 
	C196.243423,310.151733 196.369095,310.194305 195.701218,310.383728 
	C195.570633,311.018219 195.440048,311.652710 195.261917,312.163300 
	C195.261917,312.163300 195.386108,312.210114 194.712570,312.391510 
	C194.588562,313.027985 194.464554,313.664459 194.255386,314.101532 
	C194.255386,314.101532 194.400635,314.262512 193.651596,314.335144 
	C192.934799,316.333557 192.218002,318.332001 191.396317,320.425262 
	C191.396317,320.425262 191.529114,320.376709 190.794846,320.441010 
	C190.567902,321.342499 190.340942,322.244019 190.069077,323.064209 
	C190.069077,323.064209 190.161819,323.069214 189.495163,323.299835 
	C188.741760,324.369141 187.725906,325.338379 187.274460,326.522766 
	C180.849701,343.378510 173.305008,359.927765 168.451996,377.230164 
	C162.980927,396.736023 159.341156,416.826599 156.062607,436.852386 
	C153.719925,451.161957 152.511917,465.768219 152.214981,480.271088 
	C151.910339,495.149689 152.661606,510.131500 154.169296,524.944092 
	C155.905777,542.004333 157.903412,559.176636 161.754547,575.845886 
	C166.065201,594.504211 172.407318,612.708496 178.250687,630.987244 
	C179.819397,635.894348 182.790405,640.353210 185.249039,645.155823 
	C185.249039,645.155823 185.198715,645.339539 185.124268,646.118835 
	C185.530228,646.695435 185.936188,647.272095 186.205902,647.868591 
	C186.205902,647.868591 186.261841,647.742737 186.106888,648.516357 
	C187.212646,650.593201 188.318405,652.670044 189.297318,654.856812 
	C189.297318,654.856812 189.352722,654.698364 189.142197,655.479736 
	C192.753754,663.087585 196.354141,670.700867 200.017288,678.283813 
	C200.165054,678.589661 200.906693,678.608643 201.225510,678.867554 
	C201.225510,678.867554 201.311279,678.708496 201.172989,679.402405 
	C201.602951,679.832336 202.032898,680.262207 202.293137,680.945251 
	C202.293137,680.945251 202.412369,680.664795 202.215927,681.363098 
	C202.660370,681.756409 203.104797,682.149719 203.282791,682.652161 
	C203.282791,682.652161 203.567123,682.606628 203.266876,683.314575 
	C204.308868,684.786316 205.350845,686.258057 206.208130,687.909241 
	C206.208130,687.909241 206.343201,687.690002 206.192825,688.389893 
	C206.644043,688.767822 207.095245,689.145752 207.445663,689.621826 
	C207.445663,689.621826 207.585419,689.605896 207.275909,690.295715 
	C207.983078,691.106812 208.690247,691.917908 209.215668,692.911621 
	C209.215668,692.911621 209.347076,692.690002 209.192535,693.389221 
	C209.641434,693.775208 210.090317,694.161194 210.192017,694.708130 
	C210.192017,694.708130 210.558640,694.598389 210.268723,695.311890 
	C211.208038,696.525696 212.147354,697.739563 213.005249,698.976562 
	C213.005249,698.976562 213.057800,698.910156 213.021011,699.658508 
	C213.838867,700.643311 214.656738,701.628052 215.006714,702.948242 
	C215.162521,702.838318 215.318344,702.728455 215.228592,703.333618 
	C215.967850,704.106506 216.707092,704.879456 217.075058,705.979065 
	C217.075058,705.979065 217.426254,705.630920 217.209625,706.355896 
	C217.968582,707.096558 218.727554,707.837158 219.100388,708.890076 
	C219.100388,708.890076 219.509064,708.607971 219.240723,709.324585 
	C219.994064,710.067200 220.747406,710.809814 221.159760,711.798462 
	C221.159760,711.798462 221.527466,711.594482 221.253937,712.326843 
	C222.560974,713.845520 223.868011,715.364136 225.061844,716.936951 
	C225.061844,716.936951 225.129089,716.830994 225.105698,717.508667 
	C225.553818,717.896362 226.001938,718.284119 226.127487,718.904968 
	C226.127487,718.904968 226.420044,718.635132 226.210632,719.360901 
	C226.971222,720.091187 227.731812,720.821411 228.152512,721.887634 
	C228.152512,721.887634 228.521042,721.583374 228.276291,722.291443 
	C228.915894,722.838196 229.555496,723.384888 230.633820,724.114929 
	C230.882599,724.344116 231.006317,724.627869 231.066544,725.620300 
	C231.539017,725.939575 232.011505,726.258850 232.307281,726.947144 
	C232.307281,726.947144 232.439987,726.560181 232.399200,727.170044 
	C232.746719,727.297607 233.094238,727.425232 233.053711,727.775391 
	C233.053711,727.775391 233.417007,727.514343 233.396851,728.173828 
	C233.953323,728.435730 234.509811,728.697693 235.008499,729.000061 
	C235.008499,729.000061 235.035355,728.934875 235.122513,729.651123 
	C235.885895,729.924561 236.649277,730.197998 236.998169,730.987793 
	C237.136505,730.816528 237.274841,730.645264 237.438446,731.187927 
	C238.070679,731.315125 238.702896,731.442322 239.023224,731.721130 
	C239.023224,731.721130 239.309662,731.525696 239.424591,732.280701 
	C246.935852,736.887634 254.461716,735.559082 261.949371,732.251404 
	C262.357513,732.071106 262.430817,731.132874 262.903168,730.882996 
	C262.903168,730.882996 262.624573,730.576172 263.319122,730.774963 
	C263.875000,730.165344 264.430847,729.555786 265.167542,728.481873 
	C265.378418,728.193970 265.661896,728.038025 266.662292,727.934998 
	C266.938934,727.455383 267.215576,726.975830 267.628998,726.857849 
	C267.628998,726.857849 267.541412,726.481262 268.139984,726.575134 
	C268.235901,726.232727 268.331848,725.890259 268.530975,725.552063 
	C268.530975,725.552063 268.481384,725.461487 269.135773,725.564331 
	C269.415649,725.017883 269.695496,724.471436 270.215118,723.331848 
	C271.729309,721.859985 273.243530,720.388123 275.304169,718.739258 
	C275.498749,718.422119 275.693329,718.104919 275.900024,717.888550 
	C275.900024,717.888550 275.804535,717.854187 276.520630,717.891785 
	C279.684021,714.263123 282.847412,710.634399 286.242432,706.402649 
	C287.770386,704.917236 289.298370,703.431824 291.350128,701.750183 
	C291.535889,701.437927 291.721680,701.125610 291.918732,700.907349 
	C291.918732,700.907349 291.827972,700.880188 292.542053,700.902039 
	C295.696716,697.265503 298.851410,693.628967 302.247803,689.394165 
	C303.779083,687.912415 305.310394,686.430603 307.357819,684.749817 
	C307.542725,684.441223 307.727631,684.132629 307.928009,683.928162 
	C307.928009,683.928162 307.824097,683.911743 308.351471,683.734009 
	C308.531433,683.422058 308.711395,683.110046 308.904541,682.895020 
	C308.904541,682.895020 308.811737,682.863953 309.527771,682.896057 
	C312.928101,680.436096 317.167389,678.685120 317.513794,673.592651 
	C317.513794,673.592651 317.489349,673.493103 318.143097,673.578369 
	C318.423767,673.034363 318.704407,672.490356 319.204498,671.382141 
	C320.088867,670.573486 320.973236,669.764832 322.374664,668.741638 
	C322.562347,668.428894 322.750061,668.116150 323.109680,667.283997 
	C323.658539,666.826050 324.207367,666.368103 325.479492,665.916870 
	C327.808960,663.135559 330.138428,660.354248 332.648407,657.917908 
	C332.648407,657.917908 332.512695,657.552979 333.163147,657.600525 
	C333.441864,657.059509 333.720581,656.518494 334.243225,655.382019 
	C335.766846,653.901001 337.290466,652.419983 339.340363,650.750488 
	C339.532074,650.441833 339.723785,650.133179 339.923645,649.914856 
	C339.923645,649.914856 339.837158,649.887451 340.553162,649.904358 
	C342.555786,647.472168 344.558441,645.039917 346.554962,642.711548 
	C346.554962,642.711548 346.583160,642.621033 347.188873,642.612366 
	C347.302704,642.262146 347.416534,641.911926 347.930267,641.913391 
	C347.804260,641.788391 347.678284,641.663330 348.151367,641.586670 
	C348.229156,641.243347 348.306976,640.900024 348.488434,640.522217 
	C348.488434,640.522217 348.481049,640.413208 349.123291,640.551392 
	C349.410492,640.015991 349.697662,639.480652 350.200958,638.358215 
	C351.390411,637.213013 352.579865,636.067810 354.312134,634.745422 
	C354.509216,634.431885 354.706268,634.118347 354.912445,633.902405 
	C354.912445,633.902405 354.819641,633.870789 355.535736,633.899536 
	C357.866516,631.130676 360.197327,628.361816 362.582947,625.898682 
	C362.582947,625.898682 362.572754,625.588318 363.177673,625.601624 
	C363.282593,625.252747 363.387512,624.903931 363.977936,624.721924 
	C363.820068,624.655762 363.662170,624.589600 364.153046,624.590210 
	C364.435394,624.052185 364.717712,623.514099 365.224396,622.388794 
	C366.422058,621.240234 367.619751,620.091736 369.348480,618.742676 
	C369.545044,618.429871 369.741608,618.117126 370.043732,617.370789 
	C370.205536,617.086304 370.449890,616.936157 371.499786,616.918884 
	C373.499023,614.472961 375.498260,612.027039 377.560028,609.972351 
	C377.560028,609.972351 377.524872,609.579102 378.172211,609.607361 
	C378.448975,609.068054 378.725739,608.528687 379.234833,607.405151 
	C380.426819,606.248718 381.618774,605.092285 383.339691,603.739990 
	C383.521637,603.422607 383.703583,603.105164 383.905518,602.905212 
	C383.905518,602.905212 383.788452,602.883240 384.328583,602.725037 
	C384.512207,602.411682 384.695831,602.098328 384.894318,601.884155 
	C384.894318,601.884155 384.799988,601.850159 385.517792,601.890625 
	C387.862701,599.127686 390.207642,596.364807 392.529083,593.844788 
	C392.529083,593.844788 392.579742,593.608459 393.182190,593.604309 
	C393.277161,593.254944 393.372101,592.905579 393.770508,592.677124 
	C393.770508,592.677124 393.495728,592.500488 394.145813,592.579773 
	C394.426910,592.039978 394.707977,591.500183 395.221161,590.377808 
	C396.414886,589.229675 397.608643,588.081604 399.333649,586.744446 
	C399.522461,586.430908 399.711273,586.117371 399.910767,585.900452 
	C399.910767,585.900452 399.818695,585.869446 400.536652,585.898560 
	C402.552948,583.472717 404.569214,581.046875 406.827332,578.574707 
	C406.827332,578.574707 406.594360,578.647095 407.199524,578.622925 
	C407.323334,578.272888 407.447144,577.922852 407.997559,577.992676 
	C407.853455,577.854675 407.709381,577.716736 408.170197,577.598877 
	C408.263000,577.250427 408.355804,576.902039 408.569366,576.571045 
	C408.569366,576.571045 408.497620,576.472351 409.138916,576.579346 
	C409.427826,576.049500 409.716736,575.519592 410.237762,574.389954 
	C411.747253,572.899109 413.256714,571.408203 415.487213,569.919556 
	C419.629364,566.860107 424.398499,564.349243 425.520264,558.593384 
	C425.520264,558.593384 425.498108,558.494507 426.142456,558.582764 
	C426.428284,558.050354 426.714081,557.517944 427.233429,556.399963 
	C428.440918,555.252625 429.648407,554.105347 431.365631,552.763062 
	C431.557770,552.463745 431.749878,552.164490 431.952179,551.952332 
	C431.952179,551.952332 431.865143,551.941223 432.375641,551.750793 
	C432.559143,551.447937 432.742645,551.145081 432.939819,550.939819 
	C432.939819,550.939819 432.842163,550.926758 433.360687,550.750488 
	C433.550629,550.449829 433.740570,550.149231 433.943146,549.943237 
	C433.943146,549.943237 433.848480,549.930908 434.366180,549.746399 
	C434.549866,549.440674 434.733582,549.134888 434.927277,548.918457 
	C434.927277,548.918457 434.841095,548.893127 435.555145,548.907532 
	C437.673340,546.558899 439.791534,544.210327 441.961243,541.963867 
	C441.961243,541.963867 441.864441,541.902832 442.623871,541.960449 
	C443.719635,540.926453 444.815430,539.892456 445.954102,538.962830 
	C445.954102,538.962830 445.861359,538.898560 446.636444,538.960083 
	C448.328369,538.348572 450.123383,537.930908 451.695801,537.094727 
	C463.583405,530.773132 476.165833,530.873169 488.894897,533.214661 
	C493.043701,533.977783 497.019897,535.679321 501.021362,537.003540 
	C501.021362,537.003540 501.037750,536.930725 501.080963,537.643372 
	C504.399017,539.760620 507.717102,541.877808 511.658325,544.225281 
	C514.126404,546.753113 516.594543,549.280884 519.256104,552.338562 
	C519.571655,552.524109 519.887207,552.709595 520.103516,552.905518 
	C520.103516,552.905518 520.136597,552.811401 520.102783,553.527039 
	C522.557190,556.338013 524.845215,559.322510 527.527954,561.895508 
	C529.161987,563.462708 531.404419,564.395691 533.297241,565.949158 
	C533.297241,565.949158 533.332581,565.606812 533.369629,566.210083 
	C533.718201,566.342651 534.066711,566.475220 534.103638,566.945007 
	C534.103638,566.945007 534.386658,566.583374 534.381714,567.191101 
	C534.727905,567.329590 535.074036,567.468018 535.481750,567.710754 
	C535.481750,567.710754 535.447632,567.591980 535.227661,568.358765 
	C536.299500,569.057983 537.371277,569.757202 538.136780,570.616394 
	C538.136780,570.616394 538.464966,570.508118 538.390564,571.151611 
	C538.920593,571.439087 539.450684,571.726624 540.599182,572.267822 
	C544.097473,575.761719 547.595825,579.255615 551.085876,583.474670 
	C553.494812,585.553650 555.903748,587.632629 558.190796,589.810913 
	C558.190796,589.810913 558.241211,589.661987 558.345398,590.251099 
	C558.695801,590.382751 559.046265,590.514465 559.244812,590.718506 
	C559.244812,590.718506 559.288879,590.556213 559.436829,591.307861 
	C562.329651,592.953918 565.296936,595.329834 567.524780,590.863037 
	C567.524780,590.863037 567.564270,590.485107 568.157776,590.590393 
	C568.339844,590.267761 568.521851,589.945068 568.813782,589.866455 
	C568.813782,589.866455 568.649475,589.655212 569.410400,589.809326 
	C570.143860,588.747009 570.877380,587.684692 571.932312,586.714905 
	C571.932312,586.714905 571.601074,586.668030 572.207703,586.629944 
	C572.329834,586.277283 572.452026,585.924561 572.753723,585.930420 
	C572.753723,585.930420 572.530823,585.597107 573.176392,585.619080 
	C573.454895,585.081604 573.733398,584.544189 574.262756,583.394714 
	C576.438232,581.240540 578.613770,579.086304 581.326050,576.741211 
	C581.512207,576.422302 581.698425,576.103455 581.896729,575.886597 
	C581.896729,575.886597 581.800354,575.850952 582.517029,575.892395 
	C586.665833,572.851562 591.382446,570.308960 592.535034,564.604126 
	C592.535034,564.604126 592.552734,564.516846 593.157593,564.586548 
	C593.274658,564.241333 593.391663,563.896057 593.992065,563.710388 
	C593.831299,563.651611 593.670532,563.592896 594.155701,563.598694 
	C594.439758,563.064453 594.723877,562.530273 595.249207,561.400391 
	C596.748962,559.903076 598.248779,558.405762 600.472900,556.915894 
	C602.807373,554.134705 605.141846,551.353577 607.565491,548.673889 
	C607.565491,548.673889 607.556824,548.539062 608.162354,548.589539 
	C608.268799,548.242432 608.375244,547.895386 608.616943,547.638306 
	C608.616943,547.638306 608.546936,547.491760 609.149353,547.577393 
	C609.259705,547.233093 609.370056,546.888733 609.622314,546.645142 
	C609.622314,546.645142 609.544495,546.489441 610.146545,546.576416 
	C610.252136,546.232117 610.357727,545.887817 610.813049,545.691589 
	C610.813049,545.691589 610.489319,545.493103 611.139648,545.581482 
	C611.423279,545.042297 611.706848,544.503113 612.234680,543.370239 
	C613.746643,541.886353 615.258667,540.402527 617.491028,538.919067 
	C621.299561,536.177490 625.732544,533.978149 626.560791,528.661011 
	C626.560791,528.661011 626.557129,528.538269 627.161316,528.588623 
	C627.265503,528.242188 627.369751,527.895813 627.873352,527.713440 
	C627.873352,527.713440 627.495056,527.505249 628.145203,527.583923 
	C628.427368,527.044739 628.709534,526.505493 629.210571,525.400940 
	C630.090881,524.585510 630.971191,523.770142 632.369446,522.745667 
	C632.560547,522.435852 632.751648,522.126099 633.044922,521.385010 
	C633.196777,521.095947 633.435730,520.941895 634.308533,520.742920 
	C634.503052,520.424622 634.697571,520.106384 634.901550,519.891907 
	C634.901550,519.891907 634.803650,519.856201 635.521606,519.894470 
	C637.872437,517.132935 640.223267,514.371460 642.662109,511.599609 
	C642.662109,511.599609 642.590637,511.629761 643.194153,511.615417 
	C643.315918,511.267029 643.437683,510.918671 643.973938,511.009064 
	C643.837646,510.861847 643.701294,510.714630 644.170288,510.595764 
	C644.276428,510.247711 644.382507,509.899658 644.972961,509.737854 
	C644.815979,509.665100 644.658997,509.592377 645.151489,509.588562 
	C645.432800,509.049683 645.714050,508.510773 646.236389,507.376862 
	C647.744690,505.888702 649.253052,504.400513 651.483765,502.916412 
	C653.859436,500.153564 656.235107,497.390747 658.958435,494.694092 
	C658.958435,494.694092 658.605774,494.665314 659.207886,494.628265 
	C659.340149,494.280334 659.472412,493.932434 659.927673,493.919617 
	C659.927673,493.919617 659.579041,493.611359 660.184875,493.608551 
	C660.292847,493.258209 660.400818,492.907837 660.993896,492.655762 
	C660.993896,492.655762 660.511475,492.535309 661.156738,492.596924 
	C661.439392,492.062531 661.722046,491.528137 662.228882,490.404724 
	C663.429626,489.251038 664.630432,488.097382 666.352051,486.745941 
	C666.535278,486.433807 666.718567,486.121674 666.913391,485.903076 
	C666.913391,485.903076 666.823669,485.874176 667.543640,485.898529 
	C669.262146,483.825317 670.980652,481.752075 672.840027,479.811951 
	C672.840027,479.811951 672.658752,479.743591 673.245422,479.662476 
	C673.409729,479.326843 673.574036,478.991211 673.786865,478.787231 
	C673.786865,478.787231 673.654297,478.741333 674.243347,478.655334 
	C674.392395,478.312592 674.541443,477.969849 674.753174,477.757629 
	C674.753174,477.757629 674.622070,477.696167 675.220276,477.636017 
	C675.350098,477.286926 675.479858,476.937836 675.916138,476.916443 
	C675.916138,476.916443 675.582092,476.616913 676.187805,476.610779 
	C676.302979,476.260986 676.418152,475.911194 676.930237,475.944550 
	C676.804749,475.810150 676.679260,475.675751 677.156128,475.588104 
	C677.242981,475.242615 677.329773,474.897125 677.521729,474.529053 
	C677.521729,474.529053 677.543396,474.423737 678.131287,474.555817 
	C678.225830,474.218170 678.320435,473.880524 678.519653,473.544586 
	C678.519653,473.544586 678.477478,473.448761 679.130737,473.562286 
	C679.412537,473.016754 679.694397,472.471191 680.178528,471.359802 
	C681.046021,470.548981 681.913513,469.738159 683.320557,468.742767 
	C683.511719,468.426422 683.702881,468.110046 683.903870,467.894897 
	C683.903870,467.894897 683.808228,467.860474 684.527771,467.895172 
	C686.519775,465.457794 688.511719,463.020386 690.575134,460.979736 
	C690.575134,460.979736 690.531555,460.580109 691.173157,460.609283 
	C691.450439,460.076050 691.727783,459.542786 692.253235,458.402283 
	C694.107422,456.581421 695.961609,454.760559 698.342712,452.745667 
	C698.529236,452.432343 698.715820,452.119019 698.911560,451.903046 
	C698.911560,451.903046 698.819031,451.871399 699.534485,451.899109 
	C702.286926,449.389252 705.224792,447.046021 707.701904,444.288818 
	C708.716370,443.159607 710.651367,440.685059 706.269714,439.904633 
	C705.815186,439.350494 705.360657,438.796356 704.913940,437.520752 
	C702.077820,433.398987 699.459961,429.024750 693.318115,427.782959 
	C691.535950,425.883301 689.753723,423.983643 687.986816,421.338593 
	C686.971069,420.236511 685.955322,419.134399 685.004700,418.015076 
	C685.004700,418.015076 684.960083,418.065521 684.987549,417.334595 
	C684.230164,416.271606 683.472778,415.208588 682.830017,414.119324 
	C682.830017,414.119324 682.791748,414.230530 682.916565,413.421936 
	C682.578918,411.993256 682.425598,410.488556 681.873352,409.148315 
	C678.571228,401.135315 678.155151,392.899902 680.115906,384.567230 
	C681.123108,380.287079 682.653320,376.130005 683.998718,371.978729 
	C683.998718,371.978729 683.921326,371.957703 684.637024,371.883545 
	C685.072327,370.892548 685.507568,369.901550 685.994080,368.979187 
	C685.994080,368.979187 685.913025,368.951538 686.615967,368.925598 
	C689.386414,365.910706 692.156921,362.895782 694.968140,359.973785 
	C694.968140,359.973785 694.881409,359.921173 695.550293,359.911560 
	C695.923462,359.458008 696.296631,359.004425 696.920227,358.843903 
	C696.920227,358.843903 696.634521,358.585144 697.390076,358.789154 
	C701.226074,357.248077 704.949646,355.278778 708.916809,354.237396 
	C730.184387,348.654510 751.509155,343.289276 772.820862,337.875275 
	C790.945068,333.271027 809.094177,328.764069 827.201904,324.096252 
	C838.748596,321.119690 850.316833,318.382355 862.354126,320.053406 
	C866.376953,320.611847 870.315491,321.777771 874.098816,322.708557 
	C874.098816,322.708557 874.264526,322.599548 874.329285,323.339722 
	C876.020142,324.034912 877.710999,324.730103 879.419556,325.521912 
	C879.419556,325.521912 879.512207,325.489288 879.385864,326.219055 
	C881.291687,327.468231 883.197510,328.717407 885.695374,330.187561 
	C886.803406,331.434448 887.911438,332.681305 889.006775,334.666443 
	C890.491943,336.315521 891.977173,337.964630 893.012207,339.944366 
	C893.161926,339.836029 893.311584,339.727692 893.220398,340.331055 
	C893.943115,341.135468 894.665771,341.939880 895.233643,342.882385 
	C895.233643,342.882385 895.330017,342.698669 895.179565,343.397675 
	C895.621765,343.809082 896.063965,344.220490 896.440613,344.847290 
	C896.440613,344.847290 896.437744,344.622223 896.328430,345.179565 
	C896.574463,345.444916 896.820557,345.710266 896.998413,345.980011 
	C896.998413,345.980011 897.043579,345.928772 897.008362,346.778137 
	C897.135559,347.759766 897.221008,348.748932 897.396606,349.721802 
	C898.567078,356.208252 901.147156,362.796692 900.665039,369.154480 
	C899.482300,384.750580 896.894958,400.240387 894.864868,415.771942 
	C892.578796,433.261444 890.315552,450.754028 887.982300,468.237244 
	C886.434265,479.835663 885.032349,491.462616 883.081360,502.994934 
	C881.878052,510.107056 879.765320,517.065247 878.006409,524.024902 
	C878.006409,524.024902 878.089905,524.048828 877.366577,524.119507 
	C876.942200,525.123047 876.517883,526.126526 876.033081,527.040039 
	C876.033081,527.040039 876.133362,527.081299 875.415466,527.122803 
	C874.946594,528.092834 874.477661,529.062927 873.872009,530.582520 
	C873.326172,531.083374 872.780334,531.584167 871.503113,532.084656 
	C870.375793,533.448425 869.248474,534.812195 868.094299,536.085083 
	C868.094299,536.085083 868.188110,536.098022 867.660828,536.246033 
	C867.456787,536.537048 867.252747,536.828064 867.032227,537.034363 
	C867.032227,537.034363 867.109741,537.072449 866.361145,537.027832 
	C865.081238,538.192749 863.801331,539.357727 862.428772,540.488586 
	C862.428772,540.488586 862.401367,540.583435 861.643494,540.243408 
	C860.708496,540.417847 859.656433,540.372864 858.855896,540.799622 
	C845.576599,547.879028 832.227783,547.630981 818.739258,541.417114 
	C817.492554,540.842834 815.986328,540.831726 814.603821,540.446594 
	C814.603821,540.446594 814.515015,540.515808 814.607544,539.765076 
	C813.612854,539.319275 812.618103,538.873413 811.838989,538.062134 
	C811.838989,538.062134 811.660767,538.447205 811.619690,537.789490 
	C811.054688,537.533569 810.489685,537.277649 809.457336,536.914917 
	C809.153748,536.743164 808.985596,536.483582 808.929321,535.427612 
	C804.834534,531.734802 800.739746,528.041992 796.771667,524.122681 
	C796.771667,524.122681 796.703613,524.373047 796.649658,523.774109 
	C796.308289,523.615356 795.966919,523.456604 795.755310,523.240784 
	C795.755310,523.240784 795.704834,523.373291 795.649658,522.774475 
	C795.308167,522.615540 794.966736,522.456604 794.767517,522.244263 
	C794.767517,522.244263 794.715393,522.387024 794.676575,521.689453 
	C791.117310,519.611694 788.066711,521.725159 786.759338,527.611328 
	C785.245850,529.100891 783.732300,530.590515 781.500061,532.080994 
	C777.390320,535.163391 772.574768,537.630615 771.495483,543.425110 
	C771.495483,543.425110 771.504578,543.527222 770.859741,543.424072 
	C770.573975,543.958801 770.288269,544.493530 769.748047,545.629883 
	C767.886536,547.437134 766.024963,549.244446 763.646423,551.241699 
	C763.452881,551.543640 763.259399,551.845581 763.054260,552.060242 
	C763.054260,552.060242 763.137329,552.089417 762.427429,552.087158 
	C758.420532,554.990967 754.019653,557.555725 752.735779,563.635376 
	C750.558594,565.778259 748.381409,567.921204 745.669434,570.254395 
	C745.480774,570.570740 745.292114,570.887085 745.094055,571.102783 
	C745.094055,571.102783 745.189270,571.136597 744.473328,571.102722 
	C740.130615,574.333679 735.244019,577.087708 733.769409,583.621155 
	C732.572510,584.766907 731.375549,585.912659 729.654053,587.252991 
	C729.467773,587.565125 729.281494,587.877258 729.085632,588.094482 
	C729.085632,588.094482 729.176147,588.124573 728.461670,588.099243 
	C725.300110,591.720520 722.138550,595.341736 718.739502,599.563843 
	C717.226746,601.063599 715.713928,602.563354 713.667725,604.252014 
	C713.477112,604.565979 713.286499,604.879944 713.087646,605.096130 
	C713.087646,605.096130 713.180359,605.128235 712.465454,605.099487 
	C708.155640,608.361755 703.193481,611.055908 702.003418,617.006409 
	C702.003418,617.006409 702.068298,617.038391 701.397034,617.093994 
	C700.942627,617.761597 700.488220,618.429199 699.797729,619.672668 
	C698.604248,620.805176 697.410767,621.937683 695.679077,623.252197 
	C695.483337,623.564697 695.287598,623.877258 695.084045,624.092957 
	C695.084045,624.092957 695.176147,624.124084 694.461365,624.099182 
	C691.806519,627.205688 689.151672,630.312195 686.430176,633.180664 
	C686.430176,633.180664 686.437744,633.427734 685.826782,633.397949 
	C685.718628,633.748962 685.610413,634.100037 685.021179,634.355408 
	C685.021179,634.355408 685.495483,634.481750 684.852661,634.398804 
	C684.563477,634.927917 684.274231,635.456970 683.753174,636.572693 
	C682.558289,637.733215 681.363464,638.893799 679.455200,640.070190 
	C674.552185,644.670776 669.596375,649.217834 664.808105,653.934814 
	C664.154480,654.578674 664.337036,656.071411 664.058960,657.056030 
	C664.058960,657.056030 664.176697,657.125122 663.462524,657.099792 
	C658.794556,660.657654 653.642029,663.785706 651.781860,670.614380 
	C650.593689,671.767883 649.405518,672.921326 647.678589,674.261353 
	C647.490417,674.579407 647.302185,674.897461 647.102173,675.112549 
	C647.102173,675.112549 647.199463,675.148010 646.475342,675.110229 
	C644.815613,677.211548 643.155823,679.312866 641.394165,681.214478 
	C641.394165,681.214478 641.431030,681.435608 640.827209,681.401428 
	C640.704102,681.746216 640.580994,682.091064 640.126038,681.998230 
	C640.229553,682.149048 640.333130,682.299927 639.833313,682.407288 
	C639.719788,682.752686 639.606262,683.098083 639.257568,683.219116 
	C639.257568,683.219116 639.446106,683.483826 638.845581,683.417908 
	C638.744995,683.761719 638.644409,684.105530 638.297424,684.347229 
	C638.297424,684.347229 638.507812,684.511169 637.856262,684.423584 
	C637.574402,684.965271 637.292603,685.506958 636.774780,686.643921 
	C635.272095,688.128357 633.769409,689.612854 631.541870,691.086060 
	C627.125732,694.266174 622.300354,697.084656 620.774597,703.602600 
	C619.595520,704.762451 618.416443,705.922241 616.503662,707.083008 
	C615.109253,708.832825 613.714905,710.582581 612.144226,712.187439 
	C612.144226,712.187439 612.355896,712.272766 611.764038,712.350098 
	C611.619080,712.694336 611.474060,713.038513 611.229187,713.223145 
	C611.229187,713.223145 611.389038,713.322632 610.788879,713.372803 
	C610.672607,713.724060 610.556396,714.075256 610.000000,714.008484 
	C610.145020,714.149658 610.290039,714.290894 609.830688,714.404602 
	C609.728638,714.752258 609.626648,715.099915 609.431030,715.420959 
	C609.431030,715.420959 609.451416,715.516113 608.852966,715.425903 
	C608.743774,715.767822 608.634521,716.109802 608.421143,716.409363 
	C608.421143,716.409363 608.454224,716.516846 607.859192,716.427551 
	C607.767639,716.767822 607.676025,717.108093 607.481201,717.454041 
	C607.481201,717.454041 607.513245,717.552429 606.866577,717.438354 
	C606.583618,717.977112 606.300720,718.515808 605.786743,719.636230 
	C604.591187,720.780029 603.395569,721.923828 601.667419,723.259216 
	C601.482178,723.576050 601.296875,723.892944 601.100220,724.109741 
	C601.100220,724.109741 601.194702,724.144409 600.477051,724.106140 
	C598.353638,726.456787 596.230225,728.807434 594.079224,731.069580 
	C594.079224,731.069580 594.169983,731.088257 593.655945,731.232727 
	C593.445740,731.509216 593.235535,731.785767 593.007324,731.999634 
	C593.007324,731.999634 593.061462,732.035828 592.408325,732.073425 
	C592.039001,732.522034 591.669678,732.970642 591.188599,733.211304 
	C591.188599,733.211304 591.359497,733.374207 590.658386,733.213989 
	C590.121033,733.837769 589.583679,734.461609 589.018738,735.006531 
	C589.018738,735.006531 589.087524,735.054138 588.431641,735.072937 
	C588.025085,735.502747 587.618591,735.932556 587.167419,736.210999 
	C587.167419,736.210999 587.320312,736.250183 586.752625,736.288086 
	C586.520203,736.570374 586.287720,736.852600 586.045715,737.046997 
	C586.045715,737.046997 586.124573,737.086914 585.366882,737.034180 
	C583.693787,738.176208 582.020691,739.318176 580.289978,740.466064 
	C580.289978,740.466064 580.320923,740.417175 579.523376,740.164612 
	C573.601868,741.516296 567.713745,743.042847 561.751465,744.180786 
	C551.444092,746.148010 541.802368,743.331665 532.296143,739.698669 
	C530.516663,739.018555 528.564392,738.790649 526.950684,738.248535 
	C526.950684,738.248535 526.718201,738.403748 526.656677,737.656555 
	C525.639160,737.293274 524.621582,736.929993 523.600342,736.469421 
	C523.600342,736.469421 523.510803,736.507568 523.618652,735.763855 
	C522.041382,734.868225 520.464172,733.972534 518.971985,733.023010 
	C518.971985,733.023010 518.931152,733.114990 518.906128,732.375793 
	C517.816406,731.708557 516.726624,731.041321 515.769592,730.046448 
	C515.769592,730.046448 515.678772,730.388000 515.631714,729.786682 
	C515.282104,729.659546 514.932495,729.532410 514.956482,729.045349 
	C514.838501,729.171814 514.720459,729.298218 514.607056,728.817627 
	C514.256592,728.710449 513.906067,728.603271 513.654297,728.006958 
	C513.614075,728.169128 513.573792,728.331360 513.594177,727.843384 
	C513.054138,727.563049 512.514038,727.282715 511.359589,726.745117 
	C506.878571,722.239258 502.397552,717.733398 497.913696,712.497131 
	C496.175507,711.089172 494.437317,709.681152 492.822327,708.173767 
	C492.822327,708.173767 492.768097,708.322510 492.666046,707.741943 
	C492.328217,707.584961 491.990387,707.428040 491.779144,707.220764 
	C491.779144,707.220764 491.731598,707.348450 491.657806,706.760315 
	C491.322083,706.596863 490.986328,706.433350 490.779938,706.219727 
	C490.779938,706.219727 490.732544,706.350098 490.653503,705.760315 
	C490.312225,705.608459 489.970978,705.456604 489.761383,705.236938 
	C489.761383,705.236938 489.698486,705.371033 489.645447,704.775879 
	C489.306122,704.618835 488.966766,704.461853 488.755127,704.241394 
	C488.755127,704.241394 488.698212,704.372192 488.643738,703.776489 
	C488.302643,703.623596 487.961517,703.470764 487.766388,703.228638 
	C487.766388,703.228638 487.684967,703.379150 487.640686,702.781494 
	C487.300507,702.625671 486.960358,702.469788 486.757172,702.237244 
	C486.757172,702.237244 486.687897,702.378113 486.643219,701.779724 
	C486.302856,701.622620 485.962463,701.465515 485.748749,701.246094 
	C485.748749,701.246094 485.693909,701.376221 485.645966,700.777710 
	C485.305542,700.619507 484.965118,700.461243 484.752747,700.246033 
	C484.752747,700.246033 484.700195,700.375977 484.642761,699.776367 
	C484.296173,699.633362 483.949585,699.490356 483.791656,699.200256 
	C483.791656,699.200256 483.657318,699.398193 483.632721,698.793945 
	C483.288635,698.644836 482.944550,698.495728 482.771210,698.230713 
	C482.771210,698.230713 482.659119,698.404053 482.622711,697.798889 
	C482.269012,697.693420 481.915344,697.587891 481.699768,697.278259 
	C481.699768,697.278259 481.550140,697.492798 481.594849,696.838684 
	C481.049072,696.562927 480.503296,696.287170 479.348877,695.773865 
	C477.541077,693.920227 475.733276,692.066528 473.739075,689.676697 
	C473.422882,689.488281 473.106689,689.299866 472.906769,689.092651 
	C472.906769,689.092651 472.884369,689.208313 472.725525,688.669983 
	C472.413300,688.486145 472.101044,688.302246 471.903015,688.096252 
	C471.903015,688.096252 471.882263,688.210754 471.724091,687.671509 
	C471.411377,687.487915 471.098663,687.304321 470.901154,687.098572 
	C470.901154,687.098572 470.879578,687.213867 470.723633,686.673523 
	C470.411102,686.489014 470.098572,686.304443 469.901703,686.097961 
	C469.901703,686.097961 469.880096,686.213684 469.724182,685.673218 
	C469.411835,685.488220 469.099518,685.303162 468.903137,685.096619 
	C468.903137,685.096619 468.881744,685.212585 468.725342,684.672241 
	C468.413177,684.486816 468.101013,684.301453 467.905121,684.094849 
	C467.905121,684.094849 467.883942,684.211121 467.727203,683.670959 
	C467.415527,683.484436 467.103882,683.297974 466.908966,683.092041 
	C466.908966,683.092041 466.887634,683.208496 466.728638,682.668213 
	C466.415710,682.482971 466.102814,682.297668 465.890564,682.097778 
	C465.890564,682.097778 465.859283,682.194580 465.894562,681.474976 
	C463.473572,679.445190 461.052582,677.415405 458.692902,675.047119 
	C458.692902,675.047119 458.670105,675.390381 458.637024,674.788391 
	C458.294067,674.637146 457.951080,674.485962 457.764099,674.235413 
	C457.764099,674.235413 457.670410,674.394836 457.628754,673.791626 
	C457.277679,673.670044 456.926605,673.548462 456.986481,672.995117 
	C456.851349,673.140503 456.716217,673.285828 456.602844,672.823914 
	C456.254059,672.710327 455.905243,672.596741 455.753723,672.133545 
	C455.753723,672.133545 455.545593,672.488647 455.597595,671.838562 
	C455.056976,671.559509 454.516327,671.280518 453.374329,670.759583 
	C451.913086,669.186768 450.451843,667.613892 448.935272,665.390503 
	C448.477753,665.038452 448.020203,664.686340 447.876495,664.058899 
	C447.876495,664.058899 447.592285,664.364746 447.787659,663.584534 
	C446.859222,658.957581 445.620941,654.364075 445.117004,649.691345 
	C444.807892,646.825317 445.623810,643.837830 445.984253,640.969971 
	C445.984253,640.969971 445.902527,640.964111 446.442688,640.665161 
	C446.618591,640.092773 446.794495,639.520386 447.006836,638.986938 
	C447.006836,638.986938 446.954468,638.977783 447.651062,638.930847 
	C449.763702,636.611755 451.876343,634.292664 453.995087,632.004822 
	C453.995087,632.004822 453.969360,631.984924 454.702026,631.992798 
	C455.302460,631.469727 455.902893,630.946655 456.600525,630.451050 
	C456.600525,630.451050 456.684906,630.395508 457.330627,630.721130 
	C457.812439,630.340820 458.294281,629.960510 458.865967,629.676086 
	C458.865967,629.676086 458.737549,629.703613 459.692749,629.900146 
	C466.245514,630.808838 472.798309,631.717529 479.159790,632.807922 
	C479.159790,632.807922 479.298309,632.583374 479.369354,633.229065 
	C479.928986,633.481262 480.488647,633.733521 481.668915,634.226929 
	C484.797363,637.428040 487.925812,640.629150 491.261719,644.356750 
	C491.576111,644.548767 491.890503,644.740845 492.635712,645.035706 
	C492.918335,645.197266 493.065613,645.440674 493.257141,646.311096 
	C493.574249,646.505737 493.891327,646.700378 494.105713,646.904480 
	C494.105713,646.904480 494.140564,646.807434 494.104187,647.523682 
	C497.846191,650.909851 501.588196,654.296082 505.185974,657.863342 
	C505.185974,657.863342 505.271332,657.648193 505.343048,658.238037 
	C505.679840,658.400513 506.016663,658.563049 506.223236,658.776489 
	C506.223236,658.776489 506.271332,658.645203 506.349884,659.236633 
	C506.693909,659.381714 507.037933,659.526794 507.219238,659.779602 
	C507.219238,659.779602 507.322510,659.614014 507.367584,660.213257 
	C507.713806,660.349792 508.060028,660.486328 508.121857,660.906433 
	C508.121857,660.906433 508.371796,660.592102 508.380127,661.194702 
	C508.723297,661.336853 509.066467,661.479004 509.130066,661.893066 
	C509.130066,661.893066 509.373535,661.588379 509.386475,662.191772 
	C509.734985,662.310669 510.083496,662.429565 509.989044,662.904114 
	C510.140808,662.791260 510.292603,662.678345 510.404175,663.169189 
	C510.748138,663.295288 511.092102,663.421387 510.987885,663.936096 
	C511.140564,663.810852 511.293213,663.685608 511.409271,664.162231 
	C511.755066,664.255310 512.100830,664.348328 512.449951,664.542053 
	C512.449951,664.542053 512.550476,664.547913 512.437073,665.138306 
	C512.775269,665.238770 513.113464,665.339233 513.450806,665.540527 
	C513.450806,665.540527 513.551392,665.547668 513.437317,666.138123 
	C513.775635,666.238037 514.114014,666.338013 514.451660,666.539062 
	C514.451660,666.539062 514.552490,666.546936 514.437561,667.137817 
	C514.776184,667.237000 515.114807,667.336243 515.453735,667.537109 
	C515.453735,667.537109 515.554993,667.545105 515.438538,668.135437 
	C515.776978,668.230469 516.115356,668.325500 516.457703,668.523865 
	C516.457703,668.523865 516.555420,668.490295 516.429077,669.125793 
	C516.952820,669.419373 517.476562,669.712891 518.606323,670.277100 
	C521.092041,672.783447 523.577698,675.289734 526.247620,678.330200 
	C526.558289,678.525391 526.869019,678.720581 527.070618,678.929871 
	C527.070618,678.929871 527.087585,678.821167 527.262634,679.350586 
	C527.574280,679.532410 527.885864,679.714294 528.101257,679.909180 
	C528.101257,679.909180 528.130920,679.816711 528.099915,680.532043 
	C532.499634,684.598694 536.899414,688.665283 541.185608,692.813477 
	C541.185608,692.813477 541.224243,692.679138 541.327454,693.260254 
	C541.664124,693.422119 542.000793,693.583984 542.205261,693.793579 
	C542.205261,693.793579 542.248901,693.659973 542.342712,694.246887 
	C542.686035,694.393616 543.029297,694.540344 543.233337,694.761414 
	C543.233337,694.761414 543.306946,694.621765 543.364746,695.219604 
	C543.713196,695.350037 544.061584,695.480469 544.197388,695.731689 
	C544.197388,695.731689 544.362427,695.551270 544.380005,696.198914 
	C544.928284,696.465088 545.476562,696.731262 546.490234,697.102417 
	C546.807983,697.243164 546.998840,697.484314 547.120361,698.571594 
	C552.137268,703.275024 559.632935,703.218628 563.645996,698.580383 
	C563.645996,698.580383 563.579407,698.402100 564.276367,698.692139 
	C564.823120,698.054688 565.369812,697.417236 566.182556,696.223999 
	C567.388184,695.124268 568.593872,694.024536 570.517090,692.919678 
	C572.845093,690.140442 575.173096,687.361206 577.595215,684.798706 
	C577.595215,684.798706 577.564270,684.564453 578.170532,684.596680 
	C578.280396,684.248596 578.390259,683.900452 578.998474,683.656006 
	C578.833679,683.613464 578.668884,683.570984 579.151917,683.594421 
	C579.435181,683.058044 579.718445,682.521667 580.254456,681.393250 
	C581.774841,679.908875 583.295166,678.424438 585.343201,676.745605 
	C585.528076,676.430725 585.712952,676.115906 585.909485,675.899109 
	C585.909485,675.899109 585.815613,675.868530 586.532288,675.898376 
	C589.645264,673.790771 593.398499,672.212830 593.575134,667.677002 
	C593.575134,667.677002 593.498535,667.507568 594.144409,667.591248 
	C594.430847,667.057800 594.717285,666.524353 595.256409,665.398132 
	C596.781067,663.913818 598.305725,662.429504 600.351440,660.747742 
	C600.536316,660.436462 600.721252,660.125183 600.916687,659.906860 
	C600.916687,659.906860 600.827576,659.878357 601.544861,659.900513 
	C603.513794,657.457031 605.482727,655.013550 607.538574,652.598999 
	C607.538574,652.598999 607.552551,652.508423 608.152283,652.579590 
	C608.254639,652.236389 608.357056,651.893127 608.556274,651.565918 
	C608.556274,651.565918 608.544739,651.468384 609.135437,651.567078 
	C609.220947,651.229126 609.306396,650.891174 609.496521,650.528198 
	C609.496521,650.528198 609.485718,650.421265 610.124939,650.554932 
	C610.414185,650.023926 610.703369,649.492859 611.223755,648.362183 
	C612.745605,646.884277 614.267456,645.406372 616.325928,643.739563 
	C616.512695,643.421448 616.699402,643.103333 616.899414,642.887756 
	C616.899414,642.887756 616.801697,642.853943 617.531128,642.888794 
	C618.895813,641.138123 620.260437,639.387512 621.954590,637.760376 
	C621.954590,637.760376 621.612305,637.678589 622.212952,637.631714 
	C622.341858,637.282776 622.470764,636.933838 622.955322,636.938965 
	C622.829895,636.828308 622.704407,636.717590 623.185181,636.609009 
	C623.301270,636.259644 623.417297,635.910278 623.906616,635.959473 
	C623.789490,635.820129 623.672424,635.680847 624.159363,635.589355 
	C624.256165,635.243042 624.353027,634.896729 624.610168,634.595459 
	C624.610168,634.595459 624.494141,634.476013 625.139465,634.577576 
	C625.425598,634.042847 625.711670,633.508057 626.222717,632.386780 
	C627.420593,631.237549 628.618469,630.088318 630.342957,628.743225 
	C630.527161,628.428528 630.711426,628.113770 630.907104,627.896973 
	C630.907104,627.896973 630.813782,627.865112 631.529114,627.896790 
	C634.073303,625.708679 636.790039,623.684265 639.088013,621.262573 
	C640.218933,620.070740 640.575134,618.143677 641.404541,616.460999 
	C641.404541,616.460999 641.483398,616.332092 642.111145,616.513123 
	C642.399353,615.984619 642.687622,615.456177 643.159668,614.394287 
	C643.720154,613.912231 644.280579,613.430176 645.356812,612.751892 
	C645.544250,612.445618 645.731689,612.139404 645.933350,611.933899 
	C645.933350,611.933899 645.832886,611.918457 646.357239,611.735474 
	C646.535156,611.423096 646.713074,611.110657 646.905884,610.894714 
	C646.905884,610.894714 646.812805,610.865479 647.531494,610.895813 
	C649.544922,608.466125 651.558411,606.036499 653.727051,603.549561 
	C653.727051,603.549561 653.586792,603.633667 654.195251,603.620850 
	C654.314819,603.269470 654.434448,602.918152 654.964844,603.012634 
	C654.830322,602.862610 654.695801,602.712524 655.171082,602.599548 
	C655.277222,602.249146 655.383362,601.898804 655.677734,601.705688 
	C655.677734,601.705688 655.544434,601.499817 656.148865,601.583252 
	C656.248657,601.237610 656.348450,600.891968 656.586853,600.575195 
	C656.586853,600.575195 656.494568,600.467834 657.134888,600.582153 
	C657.425964,600.053650 657.717041,599.525085 658.263367,598.379944 
	C665.238281,591.007446 672.210754,583.632568 679.188538,576.262817 
	C706.874084,547.021912 734.513611,517.737122 762.272644,488.566040 
	C772.802612,477.500366 785.627441,472.394958 801.016785,474.917023 
	C810.647034,476.495300 818.015869,481.962433 824.822571,488.592194 
	C829.302795,492.955963 834.239197,496.851349 839.737183,500.828491 
	C840.485657,498.056824 841.562500,495.327881 841.929749,492.506592 
	C844.402405,473.510742 846.602539,454.479065 849.128174,435.490540 
	C851.935913,414.381042 855.084961,393.316620 857.814941,372.197571 
	C858.104187,369.959656 859.918823,366.461426 855.883118,365.121399 
	C855.883118,365.121399 855.868286,365.230835 855.694580,364.674103 
	C855.367126,364.488739 855.039734,364.303375 854.307251,364.097595 
	C854.307251,364.097595 853.994141,363.839813 853.823120,363.115631 
	C852.170105,362.927643 850.397217,362.252777 848.882446,362.625916 
	C831.095886,367.007965 813.355408,371.576874 795.588013,376.037445 
	C773.972595,381.464050 752.334656,386.801239 730.735962,392.292969 
	C729.046082,392.722626 727.587341,394.061188 725.974487,395.484406 
	C726.006287,395.651154 726.038147,395.817871 725.723999,396.271240 
	C726.172974,396.502594 726.621948,396.733978 727.633667,397.181793 
	C728.442871,398.058899 729.252075,398.936005 730.255798,400.341919 
	C730.570862,400.527954 730.885864,400.713959 731.099915,400.909149 
	C731.099915,400.909149 731.132690,400.813141 731.101135,401.533234 
	C733.738220,403.689667 736.375244,405.846069 739.622742,408.247375 
	C741.416687,410.153870 743.210571,412.060364 745.068420,414.622284 
	C745.544678,414.931183 746.020935,415.240082 746.276855,415.861938 
	C746.276855,415.861938 746.539612,415.583557 746.255981,416.288818 
	C747.325134,417.395660 748.394287,418.502502 749.115112,419.653900 
	C749.115112,419.653900 749.466248,419.651245 749.189270,420.402710 
	C750.308960,422.121552 751.428650,423.840393 752.508667,425.611572 
	C752.508667,425.611572 752.515198,425.676941 752.198853,426.499451 
	C753.838135,435.405823 755.491821,444.304199 752.091431,453.200287 
	C750.705383,456.826538 749.433960,460.496613 748.045044,464.048431 
	C748.045044,464.048431 748.152527,464.097351 747.416138,464.141357 
	C747.136597,464.903870 746.857056,465.666382 746.392761,466.318329 
	C746.392761,466.318329 746.524719,466.488525 745.850647,466.430023 
	C745.583923,466.999268 745.317200,467.568481 744.951111,468.585602 
	C744.797852,468.887054 744.552490,469.049561 743.676819,469.261810 
	C743.489685,469.580688 743.302551,469.899536 743.104858,470.113708 
	C743.104858,470.113708 743.203247,470.151154 742.482910,470.109589 
	C740.455872,472.533661 738.428894,474.957733 736.080444,477.365021 
	C736.080444,477.365021 736.401550,477.343231 735.795898,477.371429 
	C735.661255,477.720123 735.526611,478.068848 735.089844,478.114807 
	C735.089844,478.114807 735.421387,478.385040 734.813049,478.386871 
	C734.692078,478.737061 734.571106,479.087280 734.275635,478.975555 
	C734.275635,478.975555 734.479431,479.425629 733.832520,479.391052 
	C733.553223,479.928772 733.273987,480.466492 732.765381,481.605774 
	C731.257690,483.100189 729.750000,484.594604 727.520874,486.084045 
	C722.807434,489.621887 717.610352,492.729462 715.827881,499.574188 
	C715.256165,500.059265 714.684448,500.544342 713.606201,501.254181 
	C713.423401,501.565979 713.240601,501.877747 712.959961,502.624969 
	C712.801025,502.912903 712.557190,503.063049 711.685059,503.258240 
	C711.492371,503.576111 711.299683,503.894012 711.098450,504.107056 
	C711.098450,504.107056 711.197205,504.143402 710.480408,504.105042 
	C705.819946,507.700836 700.479675,510.699402 698.804260,517.716431 
	C697.293701,519.177551 695.783203,520.638672 693.547363,522.087341 
	C690.751709,524.506348 687.737122,526.721802 685.234863,529.413513 
	C683.473633,531.308228 682.408936,533.850403 680.822144,536.660217 
	C679.966187,537.467957 679.110229,538.275696 677.700989,539.262817 
	C677.509033,539.586304 677.317017,539.909790 677.112793,540.123718 
	C677.112793,540.123718 677.215637,540.163452 676.497131,540.111938 
	C673.416504,542.824890 670.215576,545.417786 667.322449,548.317810 
	C666.347595,549.294922 666.154297,551.051697 665.501709,552.429688 
	C665.501709,552.429688 665.516602,552.533142 664.867859,552.424683 
	C664.580750,552.962463 664.293701,553.500244 663.786316,554.624329 
	C662.596008,555.771545 661.405762,556.918823 659.677246,558.249817 
	C659.481018,558.562561 659.284851,558.875366 659.081909,559.090332 
	C659.081909,559.090332 659.174866,559.121399 658.460144,559.097046 
	C655.771790,562.189941 653.083496,565.282776 650.047363,568.318604 
	C650.047363,568.318604 650.399170,568.338074 649.795044,568.373474 
	C649.669495,568.723755 649.543884,569.074097 648.996399,569.048218 
	C649.140808,569.169006 649.285217,569.289856 648.822083,569.395203 
	C648.702026,569.743713 648.581970,570.092224 648.095215,569.995544 
	C648.211609,570.148499 648.327942,570.301392 647.838379,570.409546 
	C647.733643,570.756897 647.628845,571.104309 647.091858,571.287292 
	C647.091858,571.287292 647.506348,571.492249 646.853088,571.417419 
	C646.573425,571.960815 646.293762,572.504150 645.798706,573.635315 
	C644.608215,574.782288 643.417664,575.929260 641.686218,577.256470 
	C641.490356,577.570251 641.294495,577.884094 641.082214,578.083130 
	C641.082214,578.083130 641.196350,578.103516 640.662598,578.268250 
	C640.476501,578.577942 640.290405,578.887634 640.083069,579.081909 
	C640.083069,579.081909 640.199341,579.097168 639.653931,579.287964 
	C639.465637,579.611694 639.277344,579.935364 638.993652,580.677063 
	C638.835327,580.950745 638.598145,581.090088 637.720215,581.264221 
	C637.520447,581.586853 637.320679,581.909424 637.111145,582.122803 
	C637.111145,582.122803 637.212708,582.164246 636.571777,582.096375 
	C636.046692,582.397583 635.521545,582.698792 634.387695,583.312195 
	C634.008606,584.304749 633.629517,585.297241 633.188782,586.185669 
	C633.188782,586.185669 633.308411,586.204041 632.727661,586.319763 
	C632.568237,586.659424 632.408813,586.999084 632.203979,587.200562 
	C632.203979,587.200562 632.342529,587.244934 631.750671,587.335205 
	C631.600952,587.680237 631.451233,588.025269 631.245361,588.241516 
	C631.245361,588.241516 631.376038,588.293213 630.776550,588.357971 
	C630.646057,588.708252 630.515564,589.058533 630.102417,589.097412 
	C630.102417,589.097412 630.416016,589.377625 629.809509,589.385681 
	C629.693420,589.736023 629.577332,590.086365 629.051392,590.030701 
	C629.182495,590.171387 629.313599,590.312012 628.839966,590.409119 
	C628.749817,590.756287 628.659729,591.103455 628.467712,591.453003 
	C628.467712,591.453003 628.510681,591.545532 627.870056,591.426819 
	C627.579407,591.956299 627.288818,592.485779 626.764221,593.614563 
	C625.249268,595.100159 623.734314,596.585815 621.679626,598.255432 
	C621.487061,598.571167 621.294434,598.886841 621.092834,599.102051 
	C621.092834,599.102051 621.187988,599.135803 620.469055,599.103088 
	C618.445496,601.526978 616.421936,603.950806 614.059814,606.361450 
	C614.059814,606.361450 614.397583,606.343628 613.795898,606.374939 
	C613.666870,606.722595 613.537903,607.070190 613.016541,607.045044 
	C613.152344,607.163818 613.288086,607.282593 612.818665,607.395935 
	C612.711487,607.745483 612.604309,608.094971 612.010742,608.355286 
	C612.010742,608.355286 612.494629,608.467224 611.846497,608.406494 
	C611.564087,608.943420 611.281677,609.480347 610.738281,610.629211 
	C607.884033,613.437256 605.029785,616.245239 601.653381,619.239807 
	C601.456665,619.542358 601.259949,619.844910 601.052429,620.052734 
	C601.052429,620.052734 601.146973,620.065247 600.630188,620.252991 
	C600.448364,620.560059 600.266479,620.867065 600.068787,621.068787 
	C600.068787,621.068787 600.174255,621.083374 599.646790,621.257629 
	C599.461426,621.565918 599.276062,621.874268 599.073486,622.074158 
	C599.073486,622.074158 599.182190,622.089661 598.652161,622.260681 
	C598.466187,622.569580 598.280273,622.878479 598.075378,623.075073 
	C598.075378,623.075073 598.188416,623.089478 597.649902,623.272217 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M742.081421,85.316650 
	C737.858459,84.025414 733.287048,82.755959 728.958313,80.915802 
	C700.178284,68.681534 670.422424,59.958580 639.736450,53.751431 
	C603.683105,46.458565 567.335999,44.964802 530.839294,46.211479 
	C514.384705,46.773544 497.848816,48.863106 481.643890,51.853294 
	C460.863953,55.687683 440.160583,60.354164 419.840210,66.126549 
	C404.273193,70.548645 389.237396,76.958611 374.181732,83.021812 
	C364.041779,87.105385 354.278931,92.125389 343.980499,96.584229 
	C366.301971,83.721992 390.178741,73.762108 414.918427,65.827568 
	C471.196777,47.777905 528.881897,41.032173 587.761353,45.220932 
	C641.512695,49.044872 692.979614,62.141357 742.081421,85.316650 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M958.487610,677.355957 
	C960.465454,671.425476 962.778992,665.272400 964.965576,659.074524 
	C970.636597,643.000000 977.065613,627.134460 981.668213,610.757263 
	C986.612488,593.163879 990.263916,575.165222 993.618958,557.182922 
	C995.612610,546.497131 996.167480,535.517883 996.968384,524.641113 
	C997.880615,512.252747 999.171326,499.807129 998.806152,487.430389 
	C998.304321,470.421326 996.492065,453.446075 995.078552,436.469910 
	C992.955261,410.969238 987.599304,386.011017 979.747742,361.782104 
	C973.068237,341.169952 964.328247,321.225708 956.508240,300.982727 
	C955.681030,298.841461 954.909546,296.678650 954.192993,294.134521 
	C962.181274,312.729706 971.157227,331.351471 977.787964,350.773865 
	C994.951233,401.047760 1001.871521,453.006409 999.918823,506.069611 
	C997.719849,565.822205 984.135742,622.902161 958.487610,677.355957 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M151.277527,297.909454 
	C149.927856,302.281036 148.711380,307.060455 146.685730,311.468018 
	C136.258789,334.155640 128.564224,357.821930 122.371407,381.907806 
	C118.347046,397.559845 115.458824,413.581787 113.262291,429.602661 
	C111.310371,443.839417 110.977394,458.300537 110.000565,472.667450 
	C109.573463,478.949127 108.696121,485.284088 109.107338,491.523376 
	C110.423195,511.488525 111.940285,531.451111 113.947891,551.357361 
	C116.702034,578.666016 123.745155,605.078430 132.259949,631.073792 
	C135.861633,642.069641 140.568207,652.702759 144.728928,663.517456 
	C145.254456,664.883484 145.513458,666.351990 145.839020,668.196838 
	C139.905853,653.460327 133.229477,638.555420 128.293457,623.094910 
	C108.172203,560.071167 103.022789,495.642242 111.729637,430.093658 
	C117.847359,384.037079 131.127396,340.100433 151.277527,297.909454 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M380.929749,900.671387 
	C386.152496,902.144592 391.756897,903.510986 397.057373,905.635559 
	C422.691193,915.910400 449.280060,922.886108 476.364288,927.708435 
	C491.790588,930.455139 507.515747,931.998840 523.173462,932.849365 
	C542.588745,933.904053 562.165710,935.003540 581.503601,933.655945 
	C603.040527,932.155090 624.473022,928.423523 645.795410,924.758179 
	C672.894958,920.099731 698.697449,910.871216 724.099731,900.523743 
	C724.833801,900.224731 725.711914,900.279297 726.916748,900.291138 
	C704.840332,910.604736 681.463684,918.135620 657.518555,923.918884 
	C619.759277,933.038574 581.440063,937.042847 542.607910,935.931335 
	C486.617767,934.328796 432.732422,922.964294 380.929749,900.671387 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M883.022461,188.629822 
	C882.120056,188.489197 880.871948,188.266052 880.128967,187.531723 
	C871.674316,179.175919 863.289734,170.749069 854.918762,162.309204 
	C854.489075,161.875977 854.351318,161.153152 854.065735,160.210693 
	C863.673035,169.340790 873.292236,178.825348 883.022461,188.629822 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M343.845764,882.780640 
	C344.256744,882.494202 345.023987,882.178650 345.517975,882.420715 
	C357.228271,888.159790 368.909180,893.958862 380.637848,900.104675 
	C368.478424,894.645447 356.276581,888.828430 343.845764,882.780640 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M944.331665,704.881348 
	C945.060059,702.349976 945.794678,699.479370 947.117126,696.911499 
	C950.383118,690.570007 953.918640,684.367249 957.698303,678.054810 
	C953.569092,686.893799 949.087280,695.786804 944.331665,704.881348 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M738.788086,895.418640 
	C739.451599,894.605286 740.324890,893.409058 741.501526,892.837585 
	C748.404724,889.485352 755.378662,886.278992 762.713257,883.047363 
	C755.111145,887.155701 747.124573,891.240051 738.788086,895.418640 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M145.943420,669.364502 
	C147.212646,670.854004 148.794647,672.582825 149.736938,674.609070 
	C152.295700,680.111450 154.583359,685.739868 156.947479,691.714050 
	C153.265762,684.653015 149.615082,677.196228 145.943420,669.364502 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M851.369019,821.018555 
	C855.803406,816.422974 860.556091,811.713013 865.676880,807.006714 
	C861.259094,811.641602 856.473206,816.272888 851.369019,821.018555 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M762.154541,95.228226 
	C755.724854,92.389854 749.067932,89.319168 742.370911,85.892120 
	C748.862976,88.689148 755.395203,91.842529 762.154541,95.228226 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M954.261841,293.430054 
	C952.840393,291.757904 951.072144,289.872223 949.935486,287.661774 
	C947.768433,283.447327 945.961731,279.047577 944.015991,274.344604 
	C947.417847,280.332886 950.809021,286.701385 954.261841,293.430054 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M931.781738,726.175171 
	C934.154358,721.630127 936.769958,716.870605 939.731689,712.078491 
	C937.393433,716.684021 934.709106,721.322327 931.781738,726.175171 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M780.872314,105.678650 
	C776.158264,103.415825 771.245972,100.877747 766.297913,97.981880 
	C771.066101,100.217201 775.870117,102.810303 780.872314,105.678650 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M235.193237,177.738708 
	C232.490952,181.028503 229.505295,184.471466 226.162048,187.918106 
	C228.839569,184.578491 231.874710,181.235184 235.193237,177.738708 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M252.604630,160.923248 
	C249.700592,164.099106 246.481400,167.401871 242.914810,170.548950 
	C245.808090,167.278900 249.048782,164.164520 252.604630,160.923248 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M221.980865,786.368652 
	C225.155991,789.271057 228.446823,792.491272 231.605286,796.066528 
	C228.347458,793.176514 225.222031,789.931519 221.980865,786.368652 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M215.694611,199.121719 
	C213.181824,202.610825 210.371994,206.253540 207.204971,209.893707 
	C209.697708,206.352570 212.547623,202.813950 215.694611,199.121719 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M172.781769,720.531738 
	C175.382812,724.013184 178.057358,727.841553 180.587433,732.031372 
	C177.913742,728.554749 175.384506,724.716736 172.781769,720.531738 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M771.847839,878.399109 
	C775.442749,876.010498 779.361328,873.505737 783.658875,871.010864 
	C780.082397,873.441528 776.126953,875.862244 771.847839,878.399109 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M247.761597,812.736938 
	C250.380463,814.786194 253.146973,817.125000 255.921814,819.820740 
	C253.256516,817.793945 250.582870,815.410217 247.761597,812.736938 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M916.853149,748.212341 
	C918.671021,745.075500 920.737061,741.741699 923.160950,738.485107 
	C921.379578,741.713318 919.240417,744.864319 916.853149,748.212341 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M900.720459,769.208862 
	C902.550903,766.378357 904.658081,763.379883 907.122559,760.434448 
	C905.318909,763.338623 903.158081,766.189758 900.720459,769.208862 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M157.967773,694.400146 
	C159.855392,697.250366 161.785263,700.456909 163.561493,704.026001 
	C161.608582,701.177856 159.809311,697.967224 157.967773,694.400146 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M341.322144,97.669891 
	C338.680969,99.384621 335.696106,101.189713 332.331818,102.982071 
	C334.961090,101.232971 337.969788,99.496613 341.322144,97.669891 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M261.636139,152.984924 
	C259.857880,154.913071 257.761566,156.950638 255.293732,158.980499 
	C257.054138,157.013306 259.186127,155.053848 261.636139,152.984924 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M215.021820,778.366577 
	C216.945786,780.139587 218.970596,782.230957 220.987701,784.692627 
	C219.027573,782.936951 217.075119,780.811035 215.021820,778.366577 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M192.031906,749.358887 
	C193.870422,751.254944 195.790070,753.481567 197.558716,756.061829 
	C195.642822,754.173523 193.877945,751.931458 192.031906,749.358887 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M290.120300,848.313354 
	C292.269470,849.486206 294.583527,850.947449 296.904114,852.771179 
	C294.702179,851.622986 292.493683,850.112366 290.120300,848.313354 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M727.676697,900.377808 
	C730.059265,899.023621 732.800415,897.599426 735.927612,896.299194 
	C733.554260,897.717957 730.794800,899.012878 727.676697,900.377808 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M301.614044,121.985458 
	C299.854462,123.602768 297.761810,125.293182 295.295502,126.966194 
	C297.041565,125.318718 299.161255,123.688652 301.614044,121.985458 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M838.937866,146.645035 
	C837.083252,145.508926 835.081177,144.076584 833.060486,142.286530 
	C834.958069,143.402161 836.874146,144.875473 838.937866,146.645035 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M896.999634,204.620911 
	C895.397400,203.196609 893.697632,201.455551 892.000061,199.345795 
	C893.635559,200.752777 895.268860,202.528458 896.999634,204.620911 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M168.653656,265.100128 
	C167.707779,267.476044 166.488281,270.052521 164.899689,272.614960 
	C165.813736,270.167542 167.096893,267.734100 168.653656,265.100128 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M258.144653,822.287842 
	C259.961365,823.473328 261.927612,824.952332 263.891907,826.793213 
	C262.024719,825.630432 260.159485,824.105896 258.144653,822.287842 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M940.330688,711.885864 
	C941.160950,709.759766 942.265198,707.438599 943.724365,705.081604 
	C942.921082,707.260803 941.762878,709.475830 940.330688,711.885864 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M881.665283,791.208130 
	C882.736816,789.595337 884.099182,787.841187 885.825012,786.078979 
	C884.777649,787.736206 883.366821,789.401489 881.665283,791.208130 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M163.203217,274.844299 
	C162.389816,276.961334 161.346848,279.305664 159.936707,281.661316 
	C160.704224,279.472321 161.838928,277.271973 163.203217,274.844299 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M221.196716,192.757660 
	C220.180588,194.368347 218.897354,196.145966 217.254669,197.941681 
	C218.240021,196.281387 219.584808,194.602997 221.196716,192.757660 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M927.853516,732.193237 
	C928.661621,730.394348 929.706055,728.386963 931.119873,726.421021 
	C930.356201,728.303223 929.223022,730.144043 927.853516,732.193237 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M202.633972,215.051544 
	C201.699051,216.801865 200.471527,218.707214 198.878967,220.559509 
	C199.789734,218.739853 201.065552,216.973221 202.633972,215.051544 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M943.992554,273.635223 
	C942.771790,272.102020 941.510498,270.226318 940.376221,267.984985 
	C941.652832,269.510498 942.802490,271.401611 943.992554,273.635223 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M156.643677,287.092224 
	C156.121841,288.818085 155.331253,290.751312 154.210922,292.817566 
	C154.712433,291.066956 155.543686,289.183228 156.643677,287.092224 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M889.728394,782.227295 
	C890.445190,780.952026 891.435425,779.519531 892.793335,778.073608 
	C892.107971,779.396790 891.054871,780.733398 889.728394,782.227295 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M895.764160,775.236206 
	C896.445190,773.958923 897.392395,772.518921 898.701904,771.057007 
	C898.052917,772.381165 897.041626,773.727295 895.764160,775.236206 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M844.380127,827.082397 
	C845.278687,825.877197 846.486816,824.571777 848.054810,823.400391 
	C847.173035,824.683655 845.931335,825.832886 844.380127,827.082397 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M327.176392,105.599655 
	C325.882690,106.653526 324.280640,107.819252 322.302399,108.967438 
	C323.573486,107.870445 325.220764,106.790970 327.176392,105.599655 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M177.358231,250.850922 
	C176.839157,252.314621 176.053482,253.960846 174.887360,255.569931 
	C175.368469,254.033005 176.230042,252.533234 177.358231,250.850922 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M849.222046,155.298569 
	C847.941711,154.599319 846.513489,153.621109 845.067627,152.280609 
	C846.391418,152.952087 847.732788,153.985840 849.222046,155.298569 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M174.212906,255.820831 
	C173.709717,257.272949 172.968872,258.933075 171.855743,260.538788 
	C172.314056,258.999176 173.144653,257.514008 174.212906,255.820831 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M790.174561,111.296600 
	C788.711060,110.774857 787.059570,109.993187 785.474243,108.841064 
	C787.022461,109.325966 788.504578,110.181320 790.174561,111.296600 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M917.372559,231.213715 
	C916.335510,230.217239 915.184814,228.921478 914.062195,227.252106 
	C915.146484,228.223801 916.202759,229.569107 917.372559,231.213715 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M940.382812,267.255066 
	C939.414673,266.148102 938.354919,264.728851 937.455200,262.957214 
	C938.507202,264.050812 939.399109,265.496796 940.382812,267.255066 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M329.836487,874.810303 
	C331.289215,875.288452 332.963257,875.993042 334.639862,877.070190 
	C333.114197,876.640808 331.585999,875.838806 329.836487,874.810303 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M336.838623,878.844604 
	C338.287537,879.314270 339.961853,880.004150 341.645386,881.066406 
	C340.124420,880.647461 338.594238,879.856079 336.838623,878.844604 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M164.998718,707.358459 
	C165.957825,708.473999 166.959717,709.924011 167.931427,711.750610 
	C166.948013,710.649170 165.994751,709.171021 164.998718,707.358459 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M282.150482,842.279663 
	C283.523010,842.924744 285.062500,843.847473 286.542358,845.136963 
	C285.094269,844.521606 283.705872,843.539490 282.150482,842.279663 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M809.958984,124.621979 
	C808.541626,124.025627 806.960327,123.145195 805.413330,121.892181 
	C806.896729,122.459023 808.345886,123.398453 809.958984,124.621979 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M324.836365,871.831299 
	C326.276520,872.328979 327.937836,873.047913 329.546143,874.140564 
	C328.014618,873.693665 326.536072,872.873047 324.836365,871.831299 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M319.821533,868.782104 
	C321.270905,869.290894 322.929047,870.036438 324.524384,871.153198 
	C322.984497,870.689209 321.507385,869.854065 319.821533,868.782104 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M321.634583,108.975418 
	C320.755951,109.873993 319.552917,110.818405 317.986938,111.647194 
	C318.852722,110.694794 320.081451,109.858025 321.634583,108.975418 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M785.179199,108.164246 
	C783.967957,107.811882 782.543396,107.234261 781.077393,106.295364 
	C782.345947,106.602386 783.655884,107.270691 785.179199,108.164246 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M198.188538,220.783188 
	C197.714264,221.938843 196.994400,223.279007 195.901825,224.588226 
	C196.333725,223.360748 197.138351,222.164230 198.188538,220.783188 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M823.226562,134.145721 
	C822.077087,133.669327 820.744141,132.952454 819.478149,131.864471 
	C820.711182,132.297333 821.877136,133.101288 823.226562,134.145721 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M287.653778,132.015305 
	C286.870300,132.955139 285.773438,133.969955 284.305664,134.971375 
	C285.069977,134.002075 286.205170,133.046173 287.653778,132.015305 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M809.686096,854.334778 
	C810.499268,853.390015 811.610596,852.345093 813.065247,851.459106 
	C812.267212,852.490295 811.125732,853.362488 809.686096,854.334778 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M832.921936,141.668045 
	C831.751648,141.166000 830.430908,140.379517 829.106750,139.222443 
	C830.326050,139.695770 831.548767,140.539703 832.921936,141.668045 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M913.946228,752.222656 
	C914.398804,751.076843 915.082581,749.742676 916.140259,748.474915 
	C915.735291,749.705688 914.956360,750.869995 913.946228,752.222656 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M910.889160,756.236633 
	C911.372620,755.097778 912.093750,753.779419 913.177124,752.569336 
	C912.735168,753.804077 911.930969,754.930603 910.889160,756.236633 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M171.180878,260.817657 
	C170.815323,262.028076 170.221222,263.450043 169.263855,264.906677 
	C169.584503,263.637268 170.268417,262.333252 171.180878,260.817657 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M197.625641,756.823547 
	C198.577209,757.596069 199.654617,758.648804 200.588654,760.054382 
	C199.547333,759.306030 198.649414,758.204895 197.625641,756.823547 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M907.805237,760.228638 
	C908.300537,759.079285 909.044067,757.754333 910.154175,756.513245 
	C909.698242,757.749084 908.875854,758.901001 907.805237,760.228638 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M818.372559,848.016724 
	C819.150391,847.070618 820.240356,846.045410 821.703491,845.035156 
	C820.945923,846.012634 819.815308,846.975037 818.372559,848.016724 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M190.634827,231.045578 
	C190.186523,232.231659 189.458191,233.578186 188.369141,234.966675 
	C188.790543,233.741104 189.572662,232.473572 190.634827,231.045578 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M201.940277,762.405151 
	C202.901596,763.168518 203.943008,764.243713 204.970459,765.693726 
	C203.977798,764.951294 202.999069,763.834167 201.940277,762.405151 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M331.652832,102.996429 
	C330.754730,103.877647 329.533325,104.798248 327.959045,105.570946 
	C328.847260,104.627304 330.088379,103.831558 331.652832,102.996429 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M826.325684,841.966125 
	C826.905151,841.107300 827.786987,840.172791 829.026489,839.347778 
	C828.465454,840.268311 827.546692,841.079407 826.325684,841.966125 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M904.966187,214.672699 
	C904.101013,214.102753 903.158936,213.229080 902.310120,211.995636 
	C903.232056,212.546906 904.060669,213.457947 904.966187,214.672699 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M837.376343,833.098389 
	C837.924622,832.203369 838.774902,831.211609 839.994507,830.309448 
	C839.468628,831.266602 838.573486,832.134155 837.376343,833.098389 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M831.348755,838.001709 
	C831.930542,837.142334 832.812439,836.203186 834.050659,835.393799 
	C833.487549,836.322998 832.568176,837.122437 831.348755,838.001709 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M205.165253,211.757233 
	C204.820801,212.688507 204.230804,213.793518 203.267944,214.916443 
	C203.569946,213.933243 204.244827,212.932098 205.165253,211.757233 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M268.641785,146.951660 
	C268.090027,147.835037 267.237213,148.814240 266.018036,149.711273 
	C266.548035,148.768555 267.444397,147.908035 268.641785,146.951660 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M890.080017,196.624878 
	C889.178955,196.091797 888.182556,195.255295 887.250610,194.049774 
	C888.204895,194.561005 889.094849,195.441223 890.080017,196.624878 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M842.195557,149.367020 
	C841.254700,148.977646 840.172852,148.311035 839.072083,147.279160 
	C840.053650,147.639175 841.054138,148.364471 842.195557,149.367020 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M283.662079,135.013168 
	C283.077118,135.870712 282.191162,136.805084 280.949585,137.610260 
	C281.516327,136.684036 282.438721,135.887009 283.662079,135.013168 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M267.785828,830.681641 
	C268.724182,831.085693 269.812622,831.762329 270.913940,832.812622 
	C269.929901,832.442200 268.932922,831.698181 267.785828,830.681641 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M819.228516,131.153778 
	C818.300537,130.834503 817.189636,130.277939 816.040527,129.355194 
	C817.016724,129.631500 818.031128,130.273987 819.228516,131.153778 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M925.324524,735.913940 
	C925.631409,734.858093 926.209351,733.637268 927.158691,732.479187 
	C926.885193,733.610901 926.240417,734.679932 925.324524,735.913940 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M797.840637,862.403809 
	C798.482483,861.688538 799.410461,860.855469 800.714417,860.042725 
	C800.102539,860.804016 799.114685,861.545044 797.840637,862.403809 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M799.929565,117.658951 
	C798.866699,117.362740 797.636536,116.794342 796.456909,115.851601 
	C797.592468,116.113762 798.677368,116.750275 799.929565,117.658951 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M316.065430,866.348389 
	C317.134308,866.630798 318.369965,867.187439 319.575378,868.118652 
	C318.440796,867.869812 317.336487,867.246216 316.065430,866.348389 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M187.742844,235.183426 
	C187.434464,236.215637 186.859863,237.423523 185.918976,238.628128 
	C186.194000,237.536270 186.835312,236.447693 187.742844,235.183426 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M179.745453,247.190979 
	C179.445969,248.219635 178.885696,249.435425 177.962036,250.676086 
	C178.227325,249.593353 178.855988,248.485733 179.745453,247.190979 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M930.278198,250.447601 
	C929.633118,249.959778 928.918030,249.164902 928.294312,248.014618 
	C928.993164,248.486328 929.600708,249.313431 930.278198,250.447601 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M936.332031,260.397705 
	C935.699585,259.892456 934.998596,259.090424 934.457642,257.945984 
	C935.166199,258.435974 935.714844,259.268433 936.332031,260.397705 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M314.208862,113.596466 
	C313.752319,114.229134 313.023712,114.966034 311.945862,115.543495 
	C312.376648,114.822937 313.156708,114.261810 314.208862,113.596466 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M928.315186,247.377045 
	C927.667908,246.907639 926.935730,246.139877 926.296753,245.014313 
	C927.003357,245.463913 927.616760,246.271301 928.315186,247.377045 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M813.835815,851.393372 
	C814.246338,850.741272 814.928650,849.970947 815.976318,849.287903 
	C815.596985,850.008545 814.852295,850.641846 813.835815,851.393372 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M189.899918,746.376221 
	C190.546097,746.818787 191.265900,747.567261 191.976013,748.684143 
	C191.302048,748.262451 190.637787,747.472290 189.899918,746.376221 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M169.755524,715.501953 
	C170.387329,716.019165 171.075790,716.846069 171.643631,718.022461 
	C170.952713,717.518555 170.382446,716.665100 169.755524,715.501953 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M793.197754,113.229218 
	C792.381714,113.078773 791.377014,112.692413 790.367920,111.931046 
	C791.245361,112.035126 792.127197,112.514214 793.197754,113.229218 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M933.319092,255.408768 
	C932.688904,254.902695 931.990051,254.099457 931.446594,252.953613 
	C932.151489,253.444534 932.700989,254.278061 933.319092,255.408768 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M167.912018,712.399048 
	C168.542786,712.888062 169.216080,713.691650 169.819519,714.871704 
	C169.151291,714.403320 168.552917,713.558472 167.912018,712.399048 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M317.311401,111.630264 
	C316.833527,112.269386 316.067749,112.993431 314.953308,113.565941 
	C315.410950,112.848000 316.217224,112.281586 317.311401,111.630264 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M159.341461,281.876495 
	C159.279022,282.739075 158.970825,283.798096 158.290527,284.905151 
	C158.310852,283.993103 158.703278,283.033020 159.341461,281.876495 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M812.923950,126.671951 
	C812.098206,126.493599 811.115356,126.043968 810.106812,125.234009 
	C810.976318,125.382683 811.871582,125.891678 812.923950,126.671951 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M826.163208,136.430176 
	C825.337952,136.207123 824.377258,135.713608 823.480286,134.854797 
	C824.371948,135.046234 825.199890,135.602966 826.163208,136.430176 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M307.095398,860.311035 
	C307.916260,860.491699 308.892822,860.944092 309.899384,861.753845 
	C309.036621,861.601685 308.143890,861.092285 307.095398,860.311035 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M290.606750,129.928574 
	C290.166199,130.573364 289.418243,131.279312 288.304016,131.973328 
	C288.724976,131.304199 289.512146,130.646957 290.606750,129.928574 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M310.050690,862.353149 
	C310.881592,862.519287 311.873810,862.955261 312.896667,863.751892 
	C312.022217,863.616028 311.117126,863.119446 310.050690,862.353149 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M794.749634,864.389404 
	C795.216736,863.759460 795.959412,863.028931 797.049255,862.458008 
	C796.606018,863.174622 795.815613,863.731689 794.749634,864.389404 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M313.044983,864.358154 
	C313.881958,864.517090 314.875214,864.949585 315.903198,865.741760 
	C315.025696,865.611511 314.113495,865.121582 313.044983,864.358154 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M791.698120,866.372559 
	C792.169495,865.729675 792.928894,864.998230 794.041199,864.407593 
	C793.591431,865.126892 792.788818,865.705383 791.698120,866.372559 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M788.609680,868.322266 
	C789.096375,867.678589 789.882202,866.958740 791.022095,866.361694 
	C790.553711,867.071716 789.731262,867.658936 788.609680,868.322266 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M815.853027,128.729538 
	C815.047974,128.538895 814.082581,128.081818 813.082581,127.272491 
	C813.929504,127.434540 814.811157,127.948822 815.853027,128.729538 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M926.315796,244.373962 
	C925.663940,243.912384 924.924316,243.152237 924.266479,242.033112 
	C924.974792,242.474548 925.601379,243.274979 926.315796,244.373962 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M796.203369,115.181946 
	C795.393555,115.028114 794.391541,114.649521 793.415588,113.891815 
	C794.298157,113.994194 795.154724,114.475685 796.203369,115.181946 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M183.716156,241.131592 
	C183.544540,241.940292 183.110367,242.917297 182.327362,243.943146 
	C182.470230,243.094620 182.961914,242.197250 183.716156,241.131592 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M805.217773,121.231232 
	C804.403076,121.050232 803.413879,120.633514 802.493530,119.842537 
	C803.389343,119.977356 804.216309,120.486435 805.217773,121.231232 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M768.497314,880.252197 
	C769.029053,879.628967 769.867310,878.955261 771.044678,878.435486 
	C770.523804,879.126831 769.663818,879.664246 768.497314,880.252197 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M921.442505,237.122086 
	C920.799072,236.689682 920.057678,235.990616 919.487000,234.944046 
	C920.219971,235.349487 920.782288,236.102463 921.442505,237.122086 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M180.596176,732.765259 
	C181.232834,733.226868 181.967987,733.964172 182.542160,735.049438 
	C181.819016,734.611877 181.256851,733.826416 180.596176,732.765259 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M803.833374,858.415283 
	C804.273743,857.776672 804.983154,857.030823 806.046509,856.434570 
	C805.634460,857.158813 804.868469,857.733459 803.833374,858.415283 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M181.729340,244.147507 
	C181.557907,244.950134 181.127670,245.925400 180.351166,246.953491 
	C180.493439,246.110916 180.981979,245.215546 181.729340,244.147507 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M806.796021,856.391113 
	C807.229919,855.745605 807.938660,854.987427 809.009521,854.339966 
	C808.604675,855.059875 807.837769,855.669189 806.796021,856.391113 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M304.072113,858.331726 
	C304.898346,858.492737 305.889954,858.919983 306.924316,859.702454 
	C306.057190,859.571106 305.147308,859.084534 304.072113,858.331726 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M298.803528,854.671021 
	C299.627625,854.863770 300.609100,855.312439 301.540802,856.132812 
	C300.647675,855.978699 299.804291,855.452881 298.803528,854.671021 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M900.991943,209.675583 
	C900.435181,209.441193 899.810974,208.914963 899.242310,208.040894 
	C899.840088,208.256622 900.382324,208.820175 900.991943,209.675583 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M205.002975,766.329529 
	C205.565704,766.552124 206.198349,767.066772 206.789703,767.928894 
	C206.189911,767.724731 205.631393,767.173157 205.002975,766.329529 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M187.018005,742.345032 
	C187.583740,742.631409 188.216797,743.235474 188.816193,744.215637 
	C188.216797,743.948730 187.651062,743.305725 187.018005,742.345032 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M185.302399,238.790039 
	C185.252930,239.379166 184.960007,240.131409 184.316971,240.933594 
	C184.330887,240.306747 184.694916,239.629959 185.302399,238.790039 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M923.835449,738.223389 
	C923.866211,737.649231 924.113220,736.890625 924.718567,736.088074 
	C924.735168,736.709045 924.393433,737.373962 923.835449,738.223389 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M209.974518,772.359131 
	C210.537735,772.570190 211.183350,773.069702 211.794266,773.918823 
	C211.192032,773.728088 210.624481,773.187805 209.974518,772.359131 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M301.771820,856.807800 
	C302.351440,856.845764 303.108246,857.109558 303.905518,857.732422 
	C303.280365,857.738892 302.614685,857.386292 301.771820,856.807800 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M195.244293,224.765747 
	C195.184326,225.353775 194.885941,226.106934 194.225021,226.885834 
	C194.243607,226.251343 194.624725,225.591110 195.244293,224.765747 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M914.066101,226.631165 
	C913.498962,226.388275 912.873901,225.854614 912.346313,224.970490 
	C912.965149,225.193466 913.486633,225.766937 914.066101,226.631165 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M273.605591,142.913116 
	C273.368988,143.478271 272.845825,144.112289 271.970215,144.650635 
	C272.184875,144.030624 272.751953,143.506287 273.605591,142.913116 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M911.053833,222.639709 
	C910.488220,222.395584 909.864136,221.860641 909.333984,220.975525 
	C909.950439,221.199860 910.472900,221.774368 911.053833,222.639709 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M278.800354,839.624634 
	C279.397675,839.723938 280.136536,840.088013 280.906128,840.810913 
	C280.271851,840.742981 279.606873,840.316223 278.800354,839.624634 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M192.228943,228.767639 
	C192.176941,229.353271 191.890472,230.107651 191.243408,230.894455 
	C191.253372,230.263382 191.623932,229.599884 192.228943,228.767639 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M278.629761,138.941986 
	C278.394012,139.505600 277.869812,140.138596 276.993591,140.689545 
	C277.208130,140.075455 277.774719,139.543411 278.629761,138.941986 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M287.819244,846.588745 
	C288.418549,846.664917 289.154816,847.006470 289.935516,847.694580 
	C289.305359,847.645508 288.630798,847.249756 287.819244,846.588745 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M273.804169,835.623779 
	C274.397766,835.722900 275.136871,836.083618 275.907104,836.802612 
	C275.275421,836.735779 274.612549,836.310608 273.804169,835.623779 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M801.336792,860.045349 
	C801.616089,859.498230 802.179504,858.907349 803.077576,858.466248 
	C802.815125,859.077942 802.218018,859.539734 801.336792,860.045349 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M908.039795,218.642426 
	C907.474121,218.408676 906.844482,217.883408 906.287720,217.007080 
	C906.898987,217.220993 907.437378,217.785965 908.039795,218.642426 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M294.666321,126.980385 
	C294.410889,127.535759 293.865356,128.148453 292.972168,128.662384 
	C293.208435,128.054977 293.792328,127.546333 294.666321,126.980385 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M822.333618,845.005981 
	C822.572327,844.450928 823.100891,843.826172 823.978333,843.266602 
	C823.759338,843.866638 823.191406,844.401428 822.333618,845.005981 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M784.297913,871.006226 
	C784.597717,870.471924 785.180359,869.910828 786.085083,869.518494 
	C785.798279,870.117981 785.189514,870.548706 784.297913,871.006226 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M307.655914,117.937531 
	C307.374298,118.487808 306.808929,119.075378 305.912689,119.500656 
	C306.178619,118.883850 306.775391,118.429344 307.655914,117.937531 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M764.863770,96.717987 
	C764.183655,96.708969 763.314880,96.451706 762.428955,95.835144 
	C763.166199,95.807144 763.920593,96.138451 764.863770,96.717987 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M152.668228,295.092102 
	C152.687881,295.784485 152.455734,296.672943 151.862335,297.604919 
	C151.806198,296.861694 152.111313,296.074951 152.668228,295.092102 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M163.545776,704.780029 
	C163.967361,705.100586 164.481583,705.710266 164.982239,706.684326 
	C164.525238,706.388916 164.081818,705.729004 163.545776,704.780029 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M919.439575,234.155701 
	C919.080627,234.085739 918.620544,233.762619 918.203369,233.094513 
	C918.610291,233.133865 918.974304,233.518204 919.439575,234.155701 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M909.346802,220.370148 
	C908.985596,220.281723 908.534424,219.919342 908.078735,219.226868 
	C908.468384,219.296570 908.862549,219.696381 909.346802,220.370148 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M906.313232,216.423523 
	C905.950439,216.334229 905.505737,215.967239 905.044189,215.277481 
	C905.428589,215.351761 905.829956,215.748810 906.313232,216.423523 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M898.372559,206.298645 
	C898.011658,206.229630 897.548767,205.896896 897.076782,205.233490 
	C897.468628,205.280182 897.869568,205.657562 898.372559,206.298645 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M902.328857,211.389038 
	C901.968140,211.304565 901.517700,210.946762 901.052429,210.263763 
	C901.438110,210.330948 901.838623,210.723312 902.328857,211.389038 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M888.259705,783.899841 
	C888.266724,783.474060 888.532532,782.930176 889.121521,782.381409 
	C889.135986,782.844910 888.827209,783.313354 888.259705,783.899841 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M193.643921,226.990448 
	C193.660049,227.436935 193.420670,228.007339 192.846878,228.567490 
	C192.804443,228.076263 193.096420,227.595322 193.643921,226.990448 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M206.625610,209.967010 
	C206.639221,210.421463 206.396240,210.990479 205.817993,211.527710 
	C205.778137,211.024490 206.073578,210.553024 206.625610,209.967010 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M343.267914,96.562096 
	C343.144592,96.914398 342.755463,97.348160 342.022522,97.685867 
	C342.119812,97.274399 342.560944,96.958977 343.267914,96.562096 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M912.348450,224.354141 
	C911.987976,224.267517 911.535828,223.908890 911.081421,223.219360 
	C911.471680,223.286346 911.864197,223.684235 912.348450,224.354141 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M171.607635,718.664062 
	C171.970200,718.775696 172.409912,719.167480 172.804596,719.901489 
	C172.401321,719.810547 172.043060,719.377380 171.607635,718.664062 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M156.905426,692.349243 
	C157.240021,692.515869 157.597565,692.983093 157.949829,693.764587 
	C157.605850,693.602539 157.267120,693.126160 156.905426,692.349243 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M829.653198,839.351807 
	C829.730896,838.990845 830.078308,838.534241 830.753967,838.065613 
	C830.695740,838.454407 830.309387,838.855286 829.653198,839.351807 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M816.585022,849.324280 
	C816.682556,848.962280 817.061646,848.520996 817.768433,848.073425 
	C817.686279,848.459778 817.276428,848.852356 816.585022,849.324280 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M829.027466,138.628387 
	C828.571350,138.647049 827.999695,138.406204 827.448486,137.829193 
	C827.950012,137.785004 828.430908,138.076950 829.027466,138.628387 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M824.550659,843.298584 
	C824.646851,842.938171 825.023560,842.499268 825.722107,842.043579 
	C825.639648,842.424500 825.235413,842.822266 824.550659,843.298584 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M275.201202,141.599457 
	C275.141479,141.951996 274.832367,142.420639 274.186340,142.885880 
	C274.216888,142.493500 274.584320,142.104553 275.201202,141.599457 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M277.094452,838.268799 
	C277.519745,838.257874 278.074341,838.507446 278.668152,839.076782 
	C278.212830,839.107422 277.718292,838.818359 277.094452,838.268799 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M271.352295,144.660980 
	C271.280121,145.020966 270.940613,145.479431 270.277283,145.961609 
	C270.330627,145.576691 270.707794,145.168076 271.352295,144.660980 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M834.708923,835.369934 
	C834.774902,835.008728 835.104980,834.540894 835.765930,834.054443 
	C835.722229,834.445068 835.347656,834.854187 834.708923,835.369934 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M272.065521,834.286621 
	C272.494232,834.269287 273.058990,834.512390 273.668701,835.078308 
	C273.209625,835.116394 272.705627,834.831726 272.065521,834.286621 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M266.108398,829.260376 
	C266.531921,829.260986 267.077545,829.520630 267.643372,830.101135 
	C267.185883,830.121155 266.708191,829.820374 266.108398,829.260376 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M786.877441,869.463257 
	C786.961731,869.109314 787.294495,868.662720 787.972656,868.299072 
	C787.920715,868.711548 787.523315,869.041077 786.877441,869.463257 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M309.503906,116.731148 
	C309.381104,117.089386 308.966614,117.509293 308.225952,117.929054 
	C308.337219,117.550209 308.774689,117.171516 309.503906,116.731148 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M736.605835,896.410767 
	C736.774414,896.059143 737.221985,895.662598 737.999573,895.407410 
	C737.847961,895.821106 737.366455,896.093506 736.605835,896.410767 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M305.150085,119.556664 
	C305.070343,119.908165 304.740570,120.362671 304.064331,120.757683 
	C304.111938,120.352020 304.506042,120.005844 305.150085,119.556664 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M764.641357,882.396362 
	C764.775146,882.039185 765.190857,881.613281 765.949585,881.263306 
	C765.836121,881.668701 765.379639,881.998108 764.641357,882.396362 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M341.851624,881.657043 
	C342.301178,881.562927 342.922974,881.687744 343.552948,882.165161 
	C343.048706,882.303833 342.536285,882.089905 341.851624,881.657043 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M766.544922,881.328613 
	C766.689697,880.972473 767.129333,880.560730 767.907837,880.200806 
	C767.777710,880.592834 767.308777,880.932983 766.544922,881.328613 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M334.831909,877.671082 
	C335.289490,877.583679 335.907990,877.715576 336.501099,878.201294 
	C335.981415,878.333496 335.487122,878.111938 334.831909,877.671082 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M303.482483,120.716904 
	C303.368378,121.076935 302.965179,121.503494 302.236267,121.934555 
	C302.338165,121.553841 302.765747,121.168640 303.482483,120.716904 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M841.734863,829.368896 
	C841.793152,829.013855 842.105896,828.542847 842.747375,828.049744 
	C842.713867,828.436096 842.351624,828.844543 841.734863,829.368896 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M292.363617,128.644318 
	C292.272583,129.007462 291.905365,129.458771 291.204376,129.906677 
	C291.276215,129.513016 291.681824,129.122742 292.363617,128.644318 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M297.002808,853.360413 
	C297.448242,853.323120 298.027466,853.546326 298.639893,854.099854 
	C298.160889,854.160400 297.648743,853.890625 297.002808,853.360413 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M280.295532,137.621002 
	C280.222198,137.982666 279.882721,138.444580 279.209290,138.908142 
	C279.259979,138.513611 279.644684,138.117432 280.295532,137.621002 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M222.735855,191.082916 
	C222.719574,191.513214 222.445312,192.051514 221.847076,192.567871 
	C221.841354,192.094254 222.159607,191.642593 222.735855,191.082916 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M200.606445,760.735229 
	C200.968536,760.803040 201.434982,761.133362 201.900162,761.800049 
	C201.502869,761.756897 201.106827,761.377258 200.606445,760.735229 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M885.363037,191.289032 
	C885.005676,191.229782 884.537231,190.912247 884.044373,190.268127 
	C884.430664,190.304611 884.841309,190.667664 885.363037,191.289032 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M899.301880,770.945374 
	C899.289185,770.505676 899.539246,769.946167 900.116943,769.373047 
	C900.151306,769.848145 899.857971,770.336853 899.301880,770.945374 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M185.776031,740.459839 
	C186.125916,740.585022 186.536041,741.000122 186.956451,741.733948 
	C186.589890,741.618347 186.213058,741.184021 185.776031,740.459839 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M184.572571,738.790955 
	C184.928589,738.871094 185.386414,739.209717 185.807343,739.891968 
	C185.405090,739.840210 185.039749,739.444885 184.572571,738.790955 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M182.573593,735.797974 
	C182.926025,735.880005 183.383209,736.218018 183.799576,736.900635 
	C183.398621,736.848145 183.038483,736.451050 182.573593,735.797974 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M243.087280,808.253296 
	C243.522385,808.280090 244.052048,808.566467 244.534973,809.174927 
	C244.052765,809.169006 243.617310,808.841003 243.087280,808.253296 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M848.720032,823.372803 
	C848.779236,823.012024 849.099365,822.541931 849.748535,822.049683 
	C849.712097,822.439453 849.346497,822.851440 848.720032,823.372803 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M264.286560,150.638763 
	C264.229095,150.995285 263.916016,151.464630 263.277252,151.959793 
	C263.311371,151.574249 263.671143,151.162918 264.286560,150.638763 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M844.967834,151.688583 
	C844.527649,151.686188 843.973511,151.426941 843.441772,150.837952 
	C843.927368,150.816025 844.390625,151.123886 844.967834,151.688583 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M872.263672,800.933105 
	C872.291748,800.500244 872.574402,799.966248 873.179932,799.485229 
	C873.174622,799.969543 872.846436,800.400757 872.263672,800.933105 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M232.634888,797.791138 
	C232.983383,797.824646 233.460205,798.094543 233.969330,798.687134 
	C233.588837,798.682373 233.176025,798.354980 232.634888,797.791138 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M852.999573,158.706207 
	C852.551575,158.687241 852.003967,158.410538 851.516357,157.806808 
	C852.017578,157.802658 852.458801,158.125549 852.999573,158.706207 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M311.204376,115.563217 
	C311.116760,115.919548 310.770569,116.374817 310.078247,116.776794 
	C310.136658,116.369713 310.541229,116.015938 311.204376,115.563217 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M213.619751,776.729492 
	C213.980515,776.787659 214.449249,777.104004 214.932800,777.750061 
	C214.541000,777.715698 214.134354,777.351746 213.619751,776.729492 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M894.285217,776.957886 
	C894.285400,776.519714 894.546326,775.961182 895.137573,775.404480 
	C895.160583,775.883362 894.853271,776.360474 894.285217,776.957886 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M208.605515,770.835205 
	C208.957016,770.875854 209.430206,771.158203 209.913910,771.773193 
	C209.525330,771.762878 209.126266,771.419922 208.605515,770.835205 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M937.454651,262.205933 
	C937.099426,262.102570 936.654114,261.740906 936.293823,261.032898 
	C936.707458,261.106903 937.036011,261.527252 937.454651,262.205933 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M934.453369,257.206238 
	C934.096558,257.105499 933.651245,256.744873 933.285889,256.038513 
	C933.698792,256.110626 934.031860,256.528503 934.453369,257.206238 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M153.672989,293.072693 
	C153.755219,293.474762 153.596085,294.061401 153.162369,294.803528 
	C153.069077,294.391754 153.250351,293.824524 153.672989,293.072693 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M931.441711,252.220581 
	C931.082275,252.124924 930.632996,251.766129 930.246826,251.061859 
	C930.657227,251.130081 931.004578,251.543747 931.441711,252.220581 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M924.314514,241.438751 
	C923.954163,241.327469 923.519836,240.929993 923.091370,240.201157 
	C923.478271,240.297379 923.859375,240.724960 924.314514,241.438751 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M164.292633,272.845856 
	C164.394363,273.292755 164.286804,273.917511 163.823303,274.544403 
	C163.672699,274.038910 163.878021,273.531342 164.292633,272.845856 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M157.699142,285.097717 
	C157.769135,285.495331 157.598511,286.075531 157.151810,286.805420 
	C157.070007,286.396851 157.264267,285.838562 157.699142,285.097717 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M265.425659,149.698441 
	C265.497406,149.951767 265.331543,150.273315 264.871338,150.555359 
	C264.674103,150.179184 264.877777,149.929459 265.425659,149.698441 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M843.293579,150.262573 
	C843.067749,150.389374 842.720764,150.303268 842.339966,149.924072 
	C842.650513,149.655563 842.939209,149.795120 843.293579,150.262573 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M231.654358,796.703857 
	C231.902390,796.617737 232.230621,796.738098 232.493271,797.147827 
	C232.131775,797.346985 231.900726,797.171265 231.654358,796.703857 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M873.781982,799.330444 
	C873.678772,799.092285 873.769226,798.762268 874.149963,798.483704 
	C874.373047,798.827515 874.218140,799.062012 873.781982,799.330444 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M850.308105,156.272308 
	C850.074036,156.389465 849.731262,156.291779 849.380066,155.898041 
	C849.709595,155.641129 849.985474,155.792953 850.308105,156.272308 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M874.755127,798.330322 
	C874.651978,798.090393 874.750671,797.756836 875.143311,797.464539 
	C875.370239,797.810547 875.210144,798.054138 874.755127,798.330322 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M875.733643,797.327026 
	C875.629395,797.086548 875.734070,796.750427 876.134583,796.443604 
	C876.367432,796.789795 876.204834,797.042664 875.733643,797.327026 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M876.706055,796.327271 
	C876.606201,796.083740 876.721375,795.748108 877.132629,795.441589 
	C877.361084,795.792969 877.191895,796.047852 876.706055,796.327271 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M877.703979,795.326538 
	C877.604370,795.083069 877.720154,794.747375 878.132080,794.440125 
	C878.360352,794.791382 878.190735,795.046631 877.703979,795.326538 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M878.705566,794.314331 
	C878.596436,794.075317 878.705994,793.735107 879.112366,793.398438 
	C879.359314,793.739136 879.197693,794.009460 878.705566,794.314331 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M851.311401,157.179001 
	C851.081665,157.292480 850.751404,157.218323 850.456909,156.853256 
	C850.786499,156.614304 851.025940,156.757324 851.311401,157.179001 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M879.651855,793.293945 
	C879.541626,793.053650 879.664490,792.712585 880.082031,792.350220 
	C880.212830,792.617065 880.048889,792.905090 879.651855,793.293945 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M880.586548,792.277100 
	C880.489380,792.032227 880.636658,791.697693 881.078491,791.345337 
	C881.192444,791.614197 881.011719,791.900818 880.586548,792.277100 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M246.685471,811.723145 
	C246.921951,811.610291 247.263611,811.712463 247.604218,812.111572 
	C247.268539,812.361938 246.997696,812.205139 246.685471,811.723145 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M245.671295,810.749390 
	C245.910416,810.645264 246.245865,810.745056 246.546478,811.140198 
	C246.201965,811.369995 245.953964,811.209351 245.671295,810.749390 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M244.666016,809.757568 
	C244.906342,809.657227 245.238571,809.756226 245.521698,810.147827 
	C245.174286,810.368042 244.936050,810.206848 244.666016,809.757568 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M827.279419,137.254074 
	C827.061401,137.389771 826.711121,137.316040 826.304932,136.953781 
	C826.595215,136.680588 826.894653,136.807068 827.279419,137.254074 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M801.179321,118.493149 
	C800.964661,118.624001 800.626648,118.510719 800.165771,118.147781 
	C800.380554,118.015083 800.718201,118.132050 801.179321,118.493149 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M802.259277,119.191360 
	C802.052490,119.336838 801.704773,119.288147 801.295044,118.954315 
	C801.569397,118.666992 801.864563,118.776337 802.259277,119.191360 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M763.311035,883.084656 
	C763.299866,882.844299 763.554199,882.588989 764.089050,882.377930 
	C764.105225,882.638000 763.840820,882.853821 763.311035,883.084656 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M840.597900,830.312927 
	C840.524841,830.059998 840.683289,829.737305 841.135010,829.462402 
	C841.328430,829.836060 841.128845,830.080444 840.597900,830.312927 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M263.934723,827.346741 
	C264.141663,827.263733 264.449493,827.432800 264.863159,827.850586 
	C264.657837,827.932495 264.346710,827.765625 263.934723,827.346741 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M276.416473,140.675980 
	C276.477295,140.931152 276.311554,141.246307 275.859253,141.489716 
	C275.692078,141.112518 275.897827,140.885162 276.416473,140.675980 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M286.719788,845.764771 
	C286.937042,845.631165 287.284729,845.701172 287.677399,846.061279 
	C287.385071,846.329834 287.094330,846.202209 286.719788,845.764771 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M922.302490,238.502869 
	C922.043030,238.540207 921.743896,238.344498 921.538818,237.870010 
	C921.933167,237.733566 922.143127,237.959763 922.302490,238.502869 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M923.097107,239.662659 
	C922.858826,239.704330 922.576660,239.475266 922.285278,238.962128 
	C922.535095,238.916000 922.794128,239.153961 923.097107,239.662659 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M766.181213,97.456482 
	C765.978577,97.600891 765.637329,97.513641 765.157898,97.188164 
	C765.360657,97.041565 765.701660,97.133194 766.181213,97.456482 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M918.244263,232.550293 
	C917.990784,232.589417 917.693420,232.378189 917.454041,231.877731 
	C917.741516,231.825653 917.970947,232.062805 918.244263,232.550293 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M238.224457,174.667145 
	C238.326157,174.905609 238.232925,175.235474 237.849442,175.513947 
	C237.628540,175.169479 237.785324,174.934799 238.224457,174.667145 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M242.219421,170.660706 
	C242.318069,170.901108 242.226105,171.228714 241.846588,171.491119 
	C241.633148,171.142776 241.789734,170.916794 242.219421,170.660706 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M241.217194,171.660950 
	C241.316040,171.900955 241.224564,172.227798 240.846191,172.489838 
	C240.632309,172.142105 240.788162,171.916351 241.217194,171.660950 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M240.216232,172.662048 
	C240.315460,172.901535 240.224152,173.228210 239.845978,173.491821 
	C239.631287,173.145004 239.786819,172.918518 240.216232,172.662048 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M239.218948,173.663391 
	C239.318588,173.902557 239.226456,174.229965 238.846649,174.497360 
	C238.630692,174.151184 238.786758,173.922607 239.218948,173.663391 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M237.245239,175.665009 
	C237.343735,175.905380 237.243286,176.235901 236.851868,176.515045 
	C236.634811,176.167267 236.796616,175.931107 237.245239,175.665009 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M236.242096,176.676132 
	C236.349854,176.913101 236.254364,177.248566 235.864258,177.555573 
	C235.627640,177.214935 235.784058,176.964096 236.242096,176.676132 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M212.691315,775.580688 
	C212.945419,775.509888 213.267624,775.674438 213.544373,776.133545 
	C213.169220,776.324646 212.922729,776.120667 212.691315,775.580688 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M211.781067,774.468018 
	C212.025635,774.401855 212.338562,774.593201 212.654861,775.077026 
	C212.388626,775.154846 212.119019,774.940247 211.781067,774.468018 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M207.657822,769.626587 
	C207.912537,769.560608 208.229935,769.710083 208.464355,770.142334 
	C208.089264,770.312256 207.868958,770.117859 207.657822,769.626587 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M206.761658,768.471558 
	C207.011505,768.412476 207.321136,768.609375 207.613007,769.099976 
	C207.337280,769.171631 207.079361,768.949585 206.761658,768.471558 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M886.309692,192.402435 
	C886.057068,192.479996 885.731750,192.322906 885.443176,191.870789 
	C885.814697,191.667679 886.067078,191.865036 886.309692,192.402435 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M887.261353,193.466034 
	C887.013367,193.547363 886.688660,193.377792 886.359619,192.913666 
	C886.631775,192.817795 886.908264,193.016479 887.261353,193.466034 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M183.756348,737.438599 
	C184.004822,737.412415 184.292999,737.628601 184.501373,738.126160 
	C184.106094,738.257446 183.897583,738.015320 183.756348,737.438599 
z`}),s.jsx("path",{fill:"#355C72",opacity:"1.000000",stroke:"none",d:`
M899.272583,207.491211 
	C899.018921,207.550247 898.706421,207.361710 898.432373,206.879562 
	C898.718506,206.805191 898.966125,207.024399 899.272583,207.491211 
z`}),s.jsx("path",{fill:"#FDFEFE",opacity:"1.000000",stroke:"none",d:`
M694.272705,522.099854 
	C695.783203,520.638672 697.293701,519.177551 699.231323,517.281982 
	C703.504700,512.612854 707.350952,508.378174 711.197266,504.143433 
	C711.197205,504.143402 711.098450,504.107056 711.371460,504.064880 
	C711.839172,503.706909 712.033875,503.391144 712.228577,503.075378 
	C712.557190,503.063049 712.801025,502.912903 713.266418,502.299988 
	C713.752869,501.659851 713.932800,501.344635 714.112793,501.029419 
	C714.684448,500.544342 715.256165,500.059265 716.217529,499.158295 
	C720.485596,494.524597 724.363953,490.306824 728.242371,486.089050 
	C729.750000,484.594604 731.257690,483.100189 733.138794,481.194336 
	C733.834595,480.330444 734.157043,479.878052 734.479431,479.425659 
	C734.479431,479.425629 734.275635,478.975555 734.589355,479.099091 
	C735.075806,478.943420 735.248596,478.664246 735.421387,478.385040 
	C735.421387,478.385040 735.089844,478.114807 735.479248,478.162842 
	C736.046326,477.921631 736.223938,477.632446 736.401550,477.343262 
	C736.401550,477.343231 736.080444,477.365021 736.533020,477.228821 
	C739.058167,474.778839 741.130737,472.464996 743.203247,470.151184 
	C743.203247,470.151154 743.104858,470.113708 743.375977,470.068787 
	C743.836426,469.706909 744.025757,469.389984 744.215088,469.073059 
	C744.552490,469.049561 744.797852,468.887054 745.263794,468.245239 
	C745.892517,467.432770 746.208618,466.960632 746.524719,466.488525 
	C746.524719,466.488525 746.392761,466.318329 746.714233,466.199585 
	C747.408020,465.419678 747.780273,464.758514 748.152527,464.097351 
	C748.152527,464.097351 748.045044,464.048431 748.370544,463.915741 
	C756.244019,451.709900 758.056030,439.061890 752.515198,425.676941 
	C752.515198,425.676941 752.508667,425.611572 752.448730,425.256439 
	C751.414612,423.151306 750.440430,421.401276 749.466248,419.651245 
	C749.466248,419.651245 749.115112,419.653900 749.188599,419.329041 
	C748.354553,417.863983 747.447083,416.723755 746.539612,415.583557 
	C746.539612,415.583557 746.276855,415.861938 746.272095,415.447174 
	C745.846313,414.677246 745.425415,414.322052 745.004456,413.966888 
	C743.210571,412.060364 741.416687,410.153870 739.178467,407.821686 
	C736.200378,405.201691 733.666565,403.007416 731.132690,400.813141 
	C731.132690,400.813141 731.099915,400.909149 731.054382,400.639709 
	C730.692932,400.184570 730.377075,399.998871 730.061218,399.813171 
	C729.252075,398.936005 728.442871,398.058899 727.272583,396.833252 
	C726.631042,396.317963 726.350525,396.151245 726.069946,395.984558 
	C726.038147,395.817871 726.006287,395.651154 726.386292,395.174774 
	C762.393188,385.906860 797.976562,376.901245 833.593872,368.032166 
	C840.324646,366.356201 847.190552,365.223297 853.994141,363.839813 
	C853.994141,363.839813 854.307251,364.097595 854.624390,364.364807 
	C855.250427,364.831604 855.559326,365.031219 855.868286,365.230835 
	C855.868286,365.230835 855.883118,365.121399 855.876648,365.587189 
	C855.878296,368.870941 856.187317,371.726257 855.842773,374.500397 
	C854.317261,386.781586 852.600586,399.038971 850.959473,411.305786 
	C846.961548,441.189117 842.967102,471.072876 838.971313,500.956482 
	C834.239197,496.851349 829.302795,492.955963 824.822571,488.592194 
	C818.015869,481.962433 810.647034,476.495300 801.016785,474.917023 
	C785.627441,472.394958 772.802612,477.500366 762.272644,488.566040 
	C734.513611,517.737122 706.874084,547.021912 679.188538,576.262817 
	C672.210754,583.632568 665.238281,591.007446 657.882385,598.790283 
	C657.165771,599.622986 656.830200,600.045410 656.494568,600.467834 
	C656.494568,600.467834 656.586853,600.575195 656.315613,600.664917 
	C655.790222,600.944336 655.623535,601.192688 655.544434,601.499817 
	C655.544434,601.499817 655.677734,601.705688 655.370605,601.735474 
	C654.794373,601.966919 654.626953,602.232605 654.561218,602.562378 
	C654.695801,602.712524 654.830322,602.862610 654.530579,602.896973 
	C653.926453,603.065491 653.756653,603.349548 653.586792,603.633667 
	C653.586792,603.633667 653.727051,603.549561 653.361450,603.726807 
	C650.934814,606.224487 648.873779,608.544983 646.812805,610.865479 
	C646.812805,610.865479 646.905884,610.894714 646.641235,610.943604 
	C646.195374,611.301086 646.014160,611.609802 645.832886,611.918457 
	C645.832886,611.918457 645.933350,611.933899 645.665283,611.976685 
	C645.211792,612.328979 645.026428,612.638550 644.841064,612.948120 
	C644.280579,613.430176 643.720154,613.912231 642.819702,614.753967 
	C642.147644,615.519775 641.815491,615.925964 641.483398,616.332092 
	C641.483398,616.332092 641.404541,616.460999 641.086182,616.679321 
	C637.449768,620.553467 634.131775,624.209290 630.813782,627.865112 
	C630.813782,627.865112 630.907104,627.896973 630.638550,627.945679 
	C630.185425,628.309326 630.000916,628.624207 629.816406,628.939087 
	C628.618469,630.088318 627.420593,631.237549 625.855713,632.784302 
	C625.157227,633.613281 624.825684,634.044617 624.494141,634.476013 
	C624.494141,634.476013 624.610168,634.595459 624.325867,634.681946 
	C623.786133,634.967468 623.624084,635.225159 623.555359,635.541504 
	C623.672424,635.680847 623.789490,635.820129 623.497192,635.868286 
	C622.808716,635.986633 622.639160,636.263245 622.578979,636.606934 
	C622.704407,636.717590 622.829895,636.828308 622.540283,636.868408 
	C621.954285,637.091431 621.783325,637.385010 621.612305,637.678589 
	C621.612305,637.678589 621.954590,637.760376 621.503235,637.845154 
	C619.635132,639.571228 618.218384,641.212585 616.801697,642.853943 
	C616.801697,642.853943 616.899414,642.887756 616.630737,642.938232 
	C616.171143,643.301941 615.980225,643.615173 615.789307,643.928467 
	C614.267456,645.406372 612.745605,646.884277 610.858887,648.766846 
	C610.157898,649.588135 609.821777,650.004700 609.485718,650.421265 
	C609.485718,650.421265 609.496521,650.528198 609.254761,650.642944 
	C608.774963,650.940613 608.618896,651.177551 608.544739,651.468384 
	C608.544739,651.468384 608.556274,651.565918 608.303589,651.661011 
	C607.794312,651.946899 607.628174,652.197693 607.552551,652.508423 
	C607.552551,652.508423 607.538574,652.598999 607.225464,652.752625 
	C604.884094,655.230286 602.855835,657.554321 600.827576,659.878357 
	C600.827576,659.878357 600.916687,659.906860 600.650146,659.957397 
	C600.199219,660.320374 600.014832,660.632812 599.830444,660.945190 
	C598.305725,662.429504 596.781067,663.913818 594.869324,665.791748 
	C594.154358,666.626099 593.826416,667.066833 593.498535,667.507568 
	C593.498535,667.507568 593.575134,667.677002 593.230103,667.779358 
	C590.528625,670.544006 588.172119,673.206299 585.815613,675.868530 
	C585.815613,675.868530 585.909485,675.899109 585.643494,675.950623 
	C585.190186,676.314758 585.002808,676.627380 584.815491,676.940002 
	C583.295166,678.424438 581.774841,679.908875 579.866760,681.789673 
	C579.154053,682.633606 578.829041,683.080994 578.504028,683.528442 
	C578.668884,683.570984 578.833679,683.613464 578.533936,683.710510 
	C577.798950,683.966980 577.630554,684.233459 577.564270,684.564453 
	C577.564270,684.564453 577.595215,684.798706 577.271606,684.853638 
	C574.565247,687.580688 572.182373,690.252747 569.799500,692.924805 
	C568.593872,694.024536 567.388184,695.124268 565.770752,696.585571 
	C564.765808,697.432129 564.172607,697.917114 563.579407,698.402100 
	C563.579407,698.402100 563.645996,698.580383 563.208984,698.657715 
	C557.371460,701.267151 552.148010,700.741211 547.062866,697.825928 
	C546.998840,697.484314 546.807983,697.243164 546.136536,696.790283 
	C545.309387,696.169128 544.835876,695.860229 544.362427,695.551270 
	C544.362427,695.551270 544.197388,695.731689 544.196655,695.432617 
	C543.899597,694.962952 543.603271,694.792358 543.306946,694.621765 
	C543.306946,694.621765 543.233337,694.761414 543.200684,694.473572 
	C542.861633,694.010498 542.555298,693.835205 542.248901,693.659973 
	C542.248901,693.659973 542.205261,693.793579 542.173279,693.513428 
	C541.835632,693.048523 541.529968,692.863831 541.224243,692.679138 
	C541.224243,692.679138 541.185608,692.813477 541.105896,692.469788 
	C536.727783,688.022949 532.429321,683.919861 528.130920,679.816711 
	C528.130920,679.816711 528.101257,679.909180 528.055115,679.643066 
	C527.701843,679.191711 527.394714,679.006409 527.087585,678.821167 
	C527.087585,678.821167 527.070618,678.929871 527.033447,678.655518 
	C526.685303,678.186096 526.374390,677.991089 526.063416,677.796082 
	C523.577698,675.289734 521.092041,672.783447 518.209229,669.887085 
	C517.393188,669.161560 516.974304,668.825928 516.555420,668.490295 
	C516.555420,668.490295 516.457703,668.523865 516.358398,668.278503 
	C516.080688,667.789185 515.846008,667.626465 515.554993,667.545105 
	C515.554993,667.545105 515.453735,667.537109 515.356934,667.290039 
	C515.081604,666.795715 514.845703,666.630371 514.552490,666.546936 
	C514.552490,666.546936 514.451660,666.539062 514.355591,666.291748 
	C514.081116,665.796692 513.845032,665.631104 513.551392,665.547668 
	C513.551392,665.547668 513.450806,665.540527 513.354736,665.293213 
	C513.080200,664.797974 512.844116,664.632019 512.550476,664.547913 
	C512.550476,664.547913 512.449951,664.542053 512.338013,664.288208 
	C512.024841,663.779602 511.764771,663.621582 511.445892,663.560425 
	C511.293213,663.685608 511.140564,663.810852 511.113190,663.518921 
	C511.042633,662.821106 510.777924,662.642334 510.444397,662.565491 
	C510.292603,662.678345 510.140808,662.791260 510.102600,662.500244 
	C509.935303,661.927063 509.654419,661.757690 509.373535,661.588379 
	C509.373535,661.588379 509.130066,661.893066 509.173157,661.518433 
	C508.934753,660.959839 508.653259,660.776001 508.371796,660.592102 
	C508.371796,660.592102 508.121857,660.906433 508.161194,660.524170 
	C507.907837,659.965942 507.615173,659.789978 507.322510,659.614014 
	C507.322510,659.614014 507.219238,659.779602 507.198578,659.477539 
	C506.875732,658.998779 506.573517,658.821960 506.271332,658.645203 
	C506.271332,658.645203 506.223236,658.776489 506.195251,658.495728 
	C505.868622,658.026001 505.569977,657.837097 505.271332,657.648193 
	C505.271332,657.648193 505.185974,657.863342 505.115295,657.474792 
	C501.409912,653.659973 497.775238,650.233704 494.140564,646.807434 
	C494.140564,646.807434 494.105713,646.904480 494.062683,646.630981 
	C493.705566,646.160339 493.391510,645.963135 493.077454,645.765930 
	C493.065613,645.440674 492.918335,645.197266 492.316589,644.720947 
	C491.683075,644.214233 491.368652,644.022278 491.054230,643.830261 
	C487.925812,640.629150 484.797363,637.428040 481.231079,633.843018 
	C480.294922,633.167236 479.796631,632.875305 479.298309,632.583374 
	C479.298309,632.583374 479.159790,632.807922 479.062836,632.437622 
	C472.605865,628.003784 465.955322,626.426392 458.737549,629.703613 
	C458.737549,629.703613 458.865967,629.676086 458.532532,629.649658 
	C457.694366,629.880615 457.189636,630.138062 456.684906,630.395508 
	C456.684906,630.395508 456.600525,630.451050 456.260193,630.524414 
	C455.269684,631.060181 454.619507,631.522583 453.969360,631.984924 
	C453.969360,631.984924 453.995087,632.004822 453.660828,632.058105 
	C451.202545,634.400208 449.078522,636.689026 446.954468,638.977783 
	C446.954468,638.977783 447.006836,638.986938 446.746643,639.145752 
	C446.291840,639.857727 446.097198,640.410950 445.902527,640.964111 
	C445.902527,640.964111 445.984253,640.969971 445.685455,641.185303 
	C442.315582,649.420959 442.060272,657.170776 447.592285,664.364746 
	C447.592285,664.364746 447.876495,664.058899 447.813232,664.472900 
	C448.163513,665.271606 448.577057,665.656311 448.990601,666.041077 
	C450.451843,667.613892 451.913086,669.186768 453.785858,671.138000 
	C454.646790,671.840515 455.096191,672.164551 455.545593,672.488647 
	C455.545593,672.488647 455.753723,672.133545 455.761414,672.527588 
	C455.973206,673.197632 456.243866,673.367432 456.581116,673.431091 
	C456.716217,673.285828 456.851349,673.140503 456.890076,673.444092 
	C457.085907,674.060364 457.378143,674.227600 457.670410,674.394836 
	C457.670410,674.394836 457.764099,674.235413 457.780914,674.532837 
	C458.088501,675.016968 458.379303,675.203674 458.670105,675.390381 
	C458.670105,675.390381 458.692902,675.047119 458.814636,675.504517 
	C461.243988,678.039429 463.551636,680.117004 465.859283,682.194580 
	C465.859283,682.194580 465.890564,682.097778 465.932281,682.366211 
	C466.278564,682.825928 466.583099,683.017212 466.887634,683.208496 
	C466.887634,683.208496 466.908966,683.092041 466.937927,683.365234 
	C467.272583,683.829346 467.578247,684.020264 467.883911,684.211182 
	C467.883942,684.211121 467.905121,684.094849 467.937073,684.367065 
	C468.273285,684.830322 468.577515,685.021423 468.881744,685.212585 
	C468.881744,685.212585 468.903137,685.096619 468.935699,685.368652 
	C469.272217,685.831665 469.576141,686.022705 469.880066,686.213745 
	C469.880096,686.213684 469.901703,686.097961 469.934692,686.369873 
	C470.271667,686.832458 470.575623,687.023132 470.879578,687.213867 
	C470.879578,687.213867 470.901154,687.098572 470.934937,687.370361 
	C471.273254,687.831604 471.577759,688.021179 471.882263,688.210754 
	C471.882263,688.210754 471.903015,688.096252 471.937927,688.367432 
	C472.276703,688.828491 472.580536,689.018372 472.884369,689.208313 
	C472.884369,689.208313 472.906769,689.092651 472.945892,689.366089 
	C473.298492,689.830688 473.612000,690.021790 473.925476,690.212891 
	C475.733276,692.066528 477.541077,693.920227 479.770416,696.148560 
	C480.644684,696.846436 481.097412,697.169617 481.550140,697.492798 
	C481.550140,697.492798 481.699768,697.278259 481.748474,697.601624 
	C482.084503,698.084656 482.371826,698.244385 482.659119,698.404053 
	C482.659119,698.404053 482.771210,698.230713 482.781311,698.534424 
	C483.080078,699.024841 483.368683,699.211548 483.657318,699.398193 
	C483.657318,699.398193 483.791656,699.200256 483.798706,699.520142 
	C484.103912,700.018677 484.402039,700.197327 484.700195,700.375977 
	C484.700195,700.375977 484.752747,700.246033 484.781921,700.526733 
	C485.105347,700.997070 485.399628,701.186646 485.693909,701.376221 
	C485.693909,701.376221 485.748749,701.246094 485.778809,701.528320 
	C486.101898,701.999695 486.394897,702.188904 486.687897,702.378113 
	C486.687897,702.378113 486.757172,702.237244 486.781982,702.526001 
	C487.099518,703.002869 487.392242,703.191040 487.684967,703.379150 
	C487.684967,703.379150 487.766388,703.228638 487.789551,703.522827 
	C488.107880,704.002136 488.403046,704.187195 488.698212,704.372192 
	C488.698212,704.372192 488.755127,704.241394 488.785309,704.524292 
	C489.109833,704.995178 489.404144,705.183105 489.698486,705.371033 
	C489.698486,705.371033 489.761383,705.236938 489.794250,705.522095 
	C490.128906,705.988220 490.430725,706.169128 490.732544,706.350098 
	C490.732544,706.350098 490.779938,706.219727 490.808289,706.500061 
	C491.134949,706.969727 491.433258,707.159119 491.731598,707.348450 
	C491.731598,707.348450 491.779144,707.220764 491.814453,707.500305 
	C492.155853,707.960754 492.461975,708.141602 492.768097,708.322510 
	C492.768097,708.322510 492.822327,708.173767 492.890808,708.523682 
	C494.611694,710.324890 496.264130,711.776184 497.916565,713.227478 
	C502.397552,717.733398 506.878571,722.239258 511.775269,727.131714 
	C512.638489,727.843384 513.086060,728.168457 513.533569,728.493530 
	C513.573792,728.331360 513.614075,728.169128 513.716064,728.468994 
	C513.988220,729.203369 514.263062,729.367920 514.602478,729.424561 
	C514.720459,729.298218 514.838501,729.171814 514.876709,729.461853 
	C515.090942,730.048279 515.384827,730.218140 515.678772,730.388000 
	C515.678772,730.388000 515.769592,730.046448 515.846680,730.486328 
	C516.926270,731.655762 517.928711,732.385376 518.931152,733.114990 
	C518.931152,733.114990 518.971985,733.023010 519.084106,733.339966 
	C520.634399,734.607178 522.072632,735.557373 523.510803,736.507568 
	C523.510803,736.507568 523.600342,736.469421 523.804260,736.744629 
	C524.911499,737.481140 525.814880,737.942444 526.718201,738.403748 
	C526.718201,738.403748 526.950684,738.248535 527.036255,738.570312 
	C544.616638,747.708191 562.324585,749.093384 580.320923,740.417175 
	C580.320923,740.417175 580.289978,740.466064 580.648682,740.379883 
	C582.713135,739.224731 584.418823,738.155823 586.124573,737.086914 
	C586.124573,737.086914 586.045715,737.046997 586.323242,737.041382 
	C586.840637,736.773926 587.080505,736.512085 587.320312,736.250183 
	C587.320312,736.250183 587.167419,736.210999 587.481079,736.216431 
	C588.225708,735.832642 588.656616,735.443359 589.087524,735.054138 
	C589.087524,735.054138 589.018738,735.006531 589.325500,734.984741 
	C590.208008,734.433289 590.783752,733.903748 591.359497,733.374207 
	C591.359497,733.374207 591.188599,733.211304 591.521729,733.224487 
	C592.257019,732.837036 592.659241,732.436462 593.061462,732.035828 
	C593.061462,732.035828 593.007324,731.999634 593.279663,731.968872 
	C593.757935,731.654846 593.963989,731.371521 594.169983,731.088257 
	C594.169983,731.088257 594.079224,731.069580 594.408936,731.003296 
	C596.890686,728.672791 599.042725,726.408569 601.194702,724.144409 
	C601.194702,724.144409 601.100220,724.109741 601.370605,724.062561 
	C601.827271,723.699463 602.013611,723.383545 602.199951,723.067627 
	C603.395569,721.923828 604.591187,720.780029 606.155273,719.240356 
	C606.853577,718.413818 607.183411,717.983093 607.513245,717.552429 
	C607.513245,717.552429 607.481201,717.454041 607.728027,717.348755 
	C608.219543,717.057373 608.379333,716.815125 608.454224,716.516846 
	C608.454224,716.516846 608.421143,716.409363 608.678894,716.331787 
	C609.195557,716.069092 609.367126,715.823059 609.451416,715.516113 
	C609.451416,715.516113 609.431030,715.420959 609.688110,715.324524 
	C610.208374,715.024353 610.371704,714.759033 610.435120,714.432129 
	C610.290039,714.290894 610.145020,714.149658 610.449829,714.104614 
	C611.062744,713.908020 611.225891,713.615356 611.389038,713.322632 
	C611.389038,713.322632 611.229187,713.223145 611.527588,713.201355 
	C612.002625,712.877258 612.179260,712.575012 612.355835,712.272766 
	C612.355896,712.272766 612.144226,712.187439 612.526611,712.121216 
	C614.351746,710.397339 615.794556,708.739746 617.237366,707.082092 
	C618.416443,705.922241 619.595520,704.762451 621.191895,703.172363 
	C625.161682,698.860596 628.714233,694.978943 632.266724,691.097351 
	C633.769409,689.612854 635.272095,688.128357 637.148071,686.237183 
	C637.850220,685.390625 638.179016,684.950867 638.507812,684.511169 
	C638.507812,684.511169 638.297424,684.347229 638.624512,684.293823 
	C639.208557,684.048462 639.373352,683.796265 639.446106,683.483826 
	C639.446106,683.483826 639.257568,683.219116 639.590820,683.228821 
	C640.195068,683.041138 640.365967,682.778564 640.436768,682.450745 
	C640.333130,682.299927 640.229553,682.149048 640.515015,682.117676 
	C641.184509,682.038818 641.360229,681.771667 641.431030,681.435608 
	C641.431030,681.435608 641.394165,681.214478 641.718994,681.151611 
	C643.762390,679.108521 645.480957,677.128296 647.199463,675.148010 
	C647.199463,675.148010 647.102173,675.112549 647.372681,675.065369 
	C647.834595,674.703735 648.025940,674.389282 648.217346,674.074829 
	C649.405518,672.921326 650.593689,671.767883 652.190552,670.172241 
	C656.458435,665.528381 660.317566,661.326782 664.176697,657.125122 
	C664.176697,657.125122 664.058960,657.056030 664.397339,656.967041 
	C669.879944,651.270203 675.024292,645.662231 680.168579,640.054321 
	C681.363464,638.893799 682.558289,637.733215 684.128357,636.181274 
	C684.834167,635.353882 685.164856,634.917786 685.495483,634.481750 
	C685.495483,634.481750 685.021179,634.355408 685.476807,634.294312 
	C686.202698,634.028564 686.371155,633.760071 686.437744,633.427734 
	C686.437744,633.427734 686.430176,633.180664 686.739380,633.135376 
	C689.757812,630.101379 692.466980,627.112732 695.176147,624.124084 
	C695.176147,624.124084 695.084045,624.092957 695.354492,624.047241 
	C695.822388,623.691101 696.019836,623.380676 696.217285,623.070190 
	C697.410767,621.937683 698.604248,620.805176 700.194946,619.274902 
	C701.084167,618.264221 701.576233,617.651306 702.068298,617.038391 
	C702.068298,617.038391 702.003418,617.006409 702.323853,616.892517 
	C706.156250,612.895142 709.668274,609.011658 713.180359,605.128235 
	C713.180359,605.128235 713.087646,605.096130 713.358521,605.051025 
	C713.820007,604.691711 714.010559,604.377441 714.201111,604.063110 
	C715.713928,602.563354 717.226746,601.063599 719.159790,599.122803 
	C722.778748,595.162659 725.977417,591.643616 729.176147,588.124573 
	C729.176147,588.124573 729.085632,588.094482 729.353271,588.045898 
	C729.806763,587.684326 729.992676,587.371338 730.178589,587.058411 
	C731.375549,585.912659 732.572510,584.766907 734.191528,583.189514 
	C738.138855,578.884155 741.664062,575.010376 745.189270,571.136597 
	C745.189270,571.136597 745.094055,571.102783 745.365601,571.057739 
	C745.826172,570.696533 746.015198,570.380371 746.204285,570.064148 
	C748.381409,567.921204 750.558594,565.778259 753.176392,563.198242 
	C756.790466,559.203857 759.963867,555.646606 763.137329,552.089417 
	C763.137329,552.089417 763.054260,552.060242 763.321899,552.013733 
	C763.780884,551.662048 763.972168,551.356873 764.163452,551.051697 
	C766.024963,549.244446 767.886536,547.437134 770.130310,545.226196 
	C770.843201,544.390686 771.173889,543.958923 771.504578,543.527222 
	C771.504578,543.527222 771.495483,543.425110 771.817261,543.270020 
	C775.499023,539.436646 778.858948,535.758362 782.218811,532.080078 
	C783.732300,530.590515 785.245850,529.100891 787.183228,527.164734 
	C790.033630,525.368164 790.380188,520.604492 794.715393,522.387024 
	C794.715393,522.387024 794.767517,522.244263 794.790588,522.524658 
	C795.110718,522.994507 795.407776,523.183899 795.704834,523.373291 
	C795.704834,523.373291 795.755310,523.240784 795.784302,523.522888 
	C796.110046,523.994324 796.406860,524.183716 796.703613,524.373047 
	C796.703613,524.373047 796.771667,524.122681 796.845947,524.535522 
	C800.931091,528.677612 804.941956,532.406982 808.952820,536.136292 
	C808.985596,536.483582 809.153748,536.743164 809.814331,537.234253 
	C810.667786,537.851440 811.164307,538.149292 811.660767,538.447205 
	C811.660767,538.447205 811.838989,538.062134 811.894287,538.500610 
	C812.804688,539.464722 813.659851,539.990234 814.515015,540.515808 
	C814.515015,540.515808 814.603821,540.446594 814.825806,540.739746 
	C830.919373,550.059753 846.708496,550.392456 862.401367,540.583435 
	C862.401367,540.583435 862.428772,540.488586 862.768433,540.381714 
	C864.441956,539.207397 865.775879,538.139954 867.109741,537.072510 
	C867.109741,537.072449 867.032227,537.034363 867.305786,537.004395 
	C867.782288,536.682251 867.985168,536.390137 868.188110,536.098022 
	C868.188110,536.098022 868.094299,536.085083 868.418579,536.026245 
	C869.906738,534.673340 871.070618,533.379150 872.234436,532.084961 
	C872.780334,531.584167 873.326172,531.083374 874.213867,530.155518 
	C875.081543,528.846069 875.607422,527.963684 876.133362,527.081299 
	C876.133362,527.081299 876.033081,527.040039 876.338501,526.927002 
	C877.125854,525.892334 877.607910,524.970581 878.089966,524.048828 
	C878.089905,524.048828 878.006409,524.024902 878.315063,523.857544 
	C880.497681,518.234314 882.976501,512.899963 884.102905,507.293915 
	C885.768188,499.006134 886.477234,490.525879 887.585266,482.126526 
	C892.343689,446.054504 897.209167,409.996002 901.782227,373.900482 
	C903.007202,364.231689 902.008789,354.677734 897.043579,345.928772 
	C897.043579,345.928772 896.998413,345.980011 897.027588,345.710846 
	C896.850403,345.168518 896.644043,344.895386 896.437744,344.622223 
	C896.437744,344.622223 896.440613,344.847290 896.396851,344.457214 
	C896.012146,343.610992 895.671082,343.154816 895.330017,342.698669 
	C895.330017,342.698669 895.233643,342.882385 895.237427,342.507172 
	C894.647949,341.294434 894.054626,340.456909 893.461304,339.619385 
	C893.311584,339.727692 893.161926,339.836029 893.128052,339.467468 
	C891.835754,337.303101 890.427612,335.615631 889.019470,333.928162 
	C887.911438,332.681305 886.803406,331.434448 885.245911,329.780243 
	C883.035034,328.078369 881.273621,326.783844 879.512207,325.489319 
	C879.512207,325.489288 879.419556,325.521912 879.196472,325.235901 
	C877.403748,324.166443 875.834167,323.382996 874.264526,322.599548 
	C874.264526,322.599548 874.098816,322.708557 873.964783,322.426270 
	C863.492859,317.395050 852.733093,316.261627 841.733582,319.014526 
	C798.441101,329.849792 755.155823,340.717041 711.940674,351.855011 
	C706.614258,353.227783 701.725891,356.300293 696.634521,358.585144 
	C696.634521,358.585144 696.920227,358.843903 696.515503,358.788086 
	C695.700989,359.128571 695.291199,359.524872 694.881409,359.921143 
	C694.881409,359.921173 694.968140,359.973785 694.621826,360.019012 
	C691.487976,363.026672 688.700500,365.989105 685.913025,368.951538 
	C685.913025,368.951538 685.994080,368.979187 685.695068,369.102783 
	C684.904541,370.136810 684.412903,371.047272 683.921326,371.957703 
	C683.921326,371.957703 683.998718,371.978729 683.692322,372.150146 
	C675.890564,386.187775 675.010254,400.147736 682.791748,414.230530 
	C682.791748,414.230530 682.830017,414.119324 682.827393,414.460571 
	C683.536621,415.889709 684.248352,416.977600 684.960083,418.065521 
	C684.960083,418.065521 685.004700,418.015076 685.034241,418.342316 
	C686.033020,419.807709 687.002258,420.945862 687.971558,422.083984 
	C689.753723,423.983643 691.535950,425.883301 693.770264,428.203857 
	C697.783691,431.830566 701.344910,435.036377 704.906128,438.242188 
	C705.360657,438.796356 705.815186,439.350494 706.621155,440.355347 
	C704.254761,444.494507 701.536926,448.182953 698.819031,451.871399 
	C698.819031,451.871399 698.911560,451.903046 698.641846,451.948273 
	C698.186768,452.308899 698.001282,452.624329 697.815796,452.939697 
	C695.961609,454.760559 694.107422,456.581421 691.873901,458.819122 
	C691.173584,459.684021 690.852600,460.132050 690.531555,460.580109 
	C690.531555,460.580109 690.575134,460.979736 690.261292,460.941162 
	C687.901062,463.221863 685.854614,465.541168 683.808228,467.860474 
	C683.808228,467.860474 683.903870,467.894897 683.632568,467.940002 
	C683.167847,468.299194 682.974426,468.613281 682.781006,468.927338 
	C681.913513,469.738159 681.046021,470.548981 679.819946,471.745117 
	C679.133362,472.569855 678.805420,473.009308 678.477478,473.448761 
	C678.477478,473.448761 678.519653,473.544586 678.275513,473.638550 
	C677.789551,473.907043 677.626953,474.137451 677.543396,474.423737 
	C677.543396,474.423737 677.521729,474.529053 677.271851,474.652710 
	C676.774536,474.975433 676.618469,475.230408 676.553772,475.541321 
	C676.679260,475.675751 676.804749,475.810150 676.508972,475.862793 
	C675.810852,475.994110 675.642334,476.272736 675.582092,476.616913 
	C675.582092,476.616913 675.916138,476.916443 675.524536,476.860901 
	C674.962646,477.102295 674.792358,477.399231 674.622070,477.696167 
	C674.622070,477.696167 674.753174,477.757629 674.471191,477.793457 
	C674.010925,478.133270 673.832642,478.437317 673.654297,478.741333 
	C673.654297,478.741333 673.786865,478.787231 673.506470,478.815063 
	C673.036926,479.143097 672.847839,479.443359 672.658752,479.743591 
	C672.658752,479.743591 672.840027,479.811951 672.469971,479.878845 
	C670.341125,481.921875 668.582397,483.898010 666.823669,485.874146 
	C666.823669,485.874176 666.913391,485.903076 666.647339,485.954895 
	C666.197876,486.319031 666.014526,486.631348 665.831177,486.943665 
	C664.630432,488.097382 663.429626,489.251038 661.861328,490.808533 
	C661.166321,491.653351 660.838867,492.094330 660.511475,492.535309 
	C660.511475,492.535309 660.993896,492.655762 660.532959,492.718323 
	C659.801208,492.994507 659.636902,493.271332 659.579041,493.611359 
	C659.579041,493.611359 659.927673,493.919617 659.528687,493.856567 
	C658.955078,494.084106 658.780457,494.374725 658.605774,494.665314 
	C658.605774,494.665314 658.958435,494.694092 658.493103,494.809174 
	C655.605591,497.586945 653.183472,500.249634 650.761353,502.912292 
	C649.253052,504.400513 647.744690,505.888702 645.858521,507.781311 
	C645.154480,508.630402 644.828247,509.075043 644.502075,509.519684 
	C644.658997,509.592377 644.815979,509.665100 644.518555,509.753998 
	C643.797668,509.973206 643.631287,510.238983 643.565002,510.567413 
	C643.701294,510.714630 643.837646,510.861847 643.538696,510.896606 
	C642.932495,511.066010 642.761597,511.347900 642.590637,511.629761 
	C642.590637,511.629761 642.662109,511.599609 642.328857,511.753906 
	C639.598267,514.557495 637.200989,517.206848 634.803650,519.856201 
	C634.803650,519.856201 634.901550,519.891907 634.627563,519.935181 
	C634.156250,520.293213 633.958984,520.608032 633.761719,520.922852 
	C633.435730,520.941895 633.196777,521.095947 632.732666,521.703003 
	C632.230713,522.332214 632.041077,522.643433 631.851440,522.954712 
	C630.971191,523.770142 630.090881,524.585510 628.842712,525.787659 
	C628.148254,526.617981 627.821655,527.061646 627.495056,527.505249 
	C627.495056,527.505249 627.873352,527.713440 627.465088,527.737915 
	C626.793457,527.958679 626.626892,528.217285 626.557129,528.538269 
	C626.557129,528.538269 626.560791,528.661011 626.242737,528.781860 
	C622.873352,532.241333 619.821960,535.579956 616.770630,538.918640 
	C615.258667,540.402527 613.746643,541.886353 611.853516,543.768494 
	C611.144653,544.608887 610.816956,545.050964 610.489319,545.493103 
	C610.489319,545.493103 610.813049,545.691589 610.433716,545.718994 
	C609.796875,545.934021 609.626892,546.181702 609.544495,546.489441 
	C609.544495,546.489441 609.622314,546.645142 609.343872,546.694946 
	C608.804199,546.932434 608.631348,547.181458 608.546936,547.491760 
	C608.546936,547.491760 608.616943,547.638306 608.338745,547.698669 
	C607.795654,547.956482 607.627808,548.216492 607.556824,548.539062 
	C607.556824,548.539062 607.565491,548.673889 607.246155,548.787231 
	C604.534058,551.569885 602.141296,554.239136 599.748535,556.908447 
	C598.248779,558.405762 596.748962,559.903076 594.870972,561.804199 
	C594.165100,562.650024 593.837463,563.092102 593.509766,563.534180 
	C593.670532,563.592896 593.831299,563.651611 593.536499,563.730591 
	C592.811523,563.941711 592.635437,564.197083 592.552734,564.516846 
	C592.552734,564.516846 592.535034,564.604126 592.223145,564.754211 
	C588.540955,568.553223 585.170654,572.202087 581.800354,575.850952 
	C581.800354,575.850952 581.896729,575.886597 581.626587,575.935547 
	C581.167419,576.300415 580.978333,576.616272 580.789307,576.932129 
	C578.613770,579.086304 576.438232,581.240540 573.875305,583.807983 
	C573.168823,584.679871 572.849854,585.138489 572.530823,585.597107 
	C572.530823,585.597107 572.753723,585.930420 572.430969,585.861572 
	C571.939148,586.084473 571.770142,586.376221 571.601074,586.668030 
	C571.601074,586.668030 571.932312,586.714905 571.496338,586.803833 
	C570.256775,587.813660 569.453125,588.734436 568.649475,589.655212 
	C568.649475,589.655212 568.813782,589.866455 568.517456,589.811707 
	C568.002197,589.999695 567.783203,590.242371 567.564270,590.485107 
	C567.564270,590.485107 567.524780,590.863037 567.204590,590.811890 
	C564.352600,590.692566 561.820740,590.624390 559.288879,590.556152 
	C559.288879,590.556213 559.244812,590.718506 559.209351,590.437500 
	C558.862976,589.991638 558.552124,589.826843 558.241211,589.661987 
	C558.241211,589.661987 558.190796,589.810913 558.113037,589.461670 
	C555.721497,586.991455 553.407837,584.870483 551.094116,582.749512 
	C547.595825,579.255615 544.097473,575.761719 540.183228,571.885498 
	C539.333191,571.171448 538.899048,570.839783 538.464966,570.508118 
	C538.464966,570.508118 538.136780,570.616394 538.139221,570.280518 
	C537.243652,569.160461 536.345642,568.376221 535.447632,567.591980 
	C535.447632,567.591980 535.481750,567.710754 535.354492,567.421387 
	C534.947021,566.949158 534.666870,566.766296 534.386658,566.583374 
	C534.386658,566.583374 534.103638,566.945007 534.156250,566.537354 
	C533.916809,565.955444 533.624695,565.781128 533.332581,565.606812 
	C533.332581,565.606812 533.297241,565.949158 533.194153,565.485107 
	C528.772888,560.951233 524.454773,556.881287 520.136597,552.811401 
	C520.136597,552.811401 520.103516,552.905518 520.057129,552.635498 
	C519.694763,552.179932 519.378662,551.994324 519.062622,551.808716 
	C516.594543,549.280884 514.126404,546.753113 511.193848,543.811279 
	C507.498810,541.241699 504.268280,539.086243 501.037750,536.930725 
	C501.037750,536.930725 501.021362,537.003540 500.828613,536.705566 
	C481.928864,527.368408 463.629120,527.284424 445.861359,538.898560 
	C445.861359,538.898560 445.954102,538.962830 445.615601,538.979980 
	C444.139557,539.965698 443.002014,540.934265 441.864441,541.902832 
	C441.864441,541.902832 441.961243,541.963867 441.619202,542.022461 
	C439.131805,544.351746 436.986450,546.622437 434.841095,548.893127 
	C434.841095,548.893127 434.927277,548.918457 434.662598,548.964722 
	C434.214783,549.317688 434.031647,549.624268 433.848480,549.930908 
	C433.848480,549.930908 433.943146,549.943237 433.675476,549.981873 
	C433.219269,550.322571 433.030701,550.624634 432.842163,550.926758 
	C432.842163,550.926758 432.939819,550.939819 432.673828,550.979980 
	C432.226929,551.327148 432.046021,551.634155 431.865112,551.941223 
	C431.865143,551.941223 431.952179,551.952332 431.685944,551.998047 
	C431.231781,552.348511 431.043854,552.653259 430.855927,552.958008 
	C429.648407,554.105347 428.440918,555.252625 426.860107,556.794922 
	C426.157227,557.624695 425.827667,558.059570 425.498108,558.494507 
	C425.498108,558.494507 425.520264,558.593384 425.203430,558.748169 
	C421.513123,562.574402 418.139648,566.245850 414.766174,569.917297 
	C413.256714,571.408203 411.747253,572.899109 409.869385,574.794556 
	C409.166565,575.623535 408.832092,576.047974 408.497620,576.472351 
	C408.497620,576.472351 408.569366,576.571045 408.303833,576.676575 
	C407.782257,576.989258 407.624603,577.254822 407.565338,577.578796 
	C407.709381,577.716736 407.853455,577.854675 407.552979,577.890564 
	C406.937042,578.074646 406.765686,578.360901 406.594360,578.647095 
	C406.594360,578.647095 406.827332,578.574707 406.423767,578.756409 
	C403.953064,581.248596 401.885895,583.559021 399.818726,585.869446 
	C399.818695,585.869446 399.910767,585.900452 399.642151,585.948975 
	C399.183167,586.309570 398.992798,586.621582 398.802429,586.933533 
	C397.608643,588.081604 396.414886,589.229675 394.849182,590.777100 
	C394.150055,591.617798 393.822876,592.059143 393.495728,592.500488 
	C393.495728,592.500488 393.770508,592.677124 393.408508,592.732178 
	C392.785919,593.001221 392.630310,593.274963 392.579742,593.608459 
	C392.579742,593.608459 392.529083,593.844788 392.255981,593.878052 
	C389.588562,596.557556 387.194275,599.203857 384.799988,601.850159 
	C384.799988,601.850159 384.894318,601.884155 384.625732,601.926025 
	C384.167572,602.273010 383.977997,602.578125 383.788452,602.883240 
	C383.788452,602.883240 383.905518,602.905212 383.634033,602.946350 
	C383.178589,603.303589 382.994659,603.619690 382.810730,603.935852 
	C381.618774,605.092285 380.426819,606.248718 378.858826,607.807251 
	C378.163544,608.665955 377.844208,609.122559 377.524872,609.579102 
	C377.524872,609.579102 377.560028,609.972351 377.254944,609.942627 
	C374.892151,612.248657 372.834473,614.584473 370.776794,616.920288 
	C370.449890,616.936157 370.205536,617.086304 369.727173,617.690369 
	C369.212891,618.321045 369.015167,618.632141 368.817444,618.943237 
	C367.619751,620.091736 366.422058,621.240234 364.855774,622.791992 
	C364.159576,623.638000 363.831940,624.080688 363.504303,624.523438 
	C363.662170,624.589600 363.820068,624.655762 363.520996,624.749146 
	C362.795502,624.983582 362.631744,625.254272 362.572754,625.588318 
	C362.572754,625.588318 362.582947,625.898682 362.274628,625.904663 
	C359.584106,628.563965 357.201874,631.217407 354.819641,633.870789 
	C354.819641,633.870789 354.912445,633.902405 354.640747,633.947754 
	C354.169128,634.302917 353.969238,634.612732 353.769348,634.922607 
	C352.579865,636.067810 351.390411,637.213013 349.843018,638.756592 
	C349.150391,639.574402 348.815735,639.993835 348.481079,640.413208 
	C348.481049,640.413208 348.488434,640.522217 348.244385,640.651855 
	C347.759888,640.979797 347.610535,641.231995 347.552277,641.538208 
	C347.678284,641.663330 347.804260,641.788391 347.507446,641.847778 
	C346.806091,641.995239 346.638947,642.274841 346.583160,642.621033 
	C346.583160,642.621033 346.554962,642.711548 346.276978,642.819214 
	C343.945038,645.247070 341.891083,647.567261 339.837158,649.887451 
	C339.837158,649.887451 339.923645,649.914856 339.655090,649.962036 
	C339.195709,650.319092 339.004913,650.629028 338.814087,650.938965 
	C337.290466,652.419983 335.766846,653.901001 333.860474,655.786194 
	C333.156067,656.644531 332.834381,657.098755 332.512695,657.552979 
	C332.512695,657.552979 332.648407,657.917908 332.287689,657.914734 
	C329.536713,660.577759 327.146454,663.243958 324.756165,665.910156 
	C324.207367,666.368103 323.658539,666.826050 322.763794,667.649292 
	C322.231140,668.328430 322.044403,668.642334 321.857635,668.956177 
	C320.973236,669.764832 320.088867,670.573486 318.834717,671.766724 
	C318.139771,672.598511 317.814545,673.045776 317.489319,673.493103 
	C317.489349,673.493103 317.513794,673.592651 317.199341,673.750122 
	C314.193848,676.893066 311.502777,679.878479 308.811737,682.863953 
	C308.811737,682.863953 308.904541,682.895020 308.638916,682.940857 
	C308.190216,683.295044 308.007172,683.603394 307.824097,683.911743 
	C307.824097,683.911743 307.928009,683.928162 307.659851,683.971863 
	C307.208374,684.326660 307.025024,684.637756 306.841675,684.948853 
	C305.310394,686.430603 303.779083,687.912415 301.827057,689.839905 
	C298.213531,693.817200 295.020752,697.348694 291.828003,700.880188 
	C291.827972,700.880188 291.918732,700.907349 291.653198,700.960083 
	C291.200562,701.324036 291.013428,701.635193 290.826324,701.946411 
	C289.298370,703.431824 287.770386,704.917236 285.826324,706.849487 
	C282.208313,710.815552 279.006409,714.334839 275.804504,717.854187 
	C275.804535,717.854187 275.900024,717.888550 275.627319,717.935120 
	C275.155670,718.293213 274.956726,718.604736 274.757751,718.916260 
	C273.243530,720.388123 271.729309,721.859985 269.840393,723.737305 
	C269.137573,724.582336 268.809479,725.021912 268.481384,725.461487 
	C268.481384,725.461487 268.530975,725.552063 268.280853,725.651245 
	C267.780701,725.935852 267.617615,726.179443 267.541412,726.481262 
	C267.541412,726.481262 267.628998,726.857849 267.320679,726.805298 
	C266.680878,727.173157 266.349396,727.593567 266.017944,728.013977 
	C265.661896,728.038025 265.378418,728.193970 264.790985,728.787598 
	C263.817810,729.587585 263.221191,730.081909 262.624573,730.576172 
	C262.624573,730.576172 262.903168,730.882996 262.423218,730.833679 
	C254.518250,734.679932 246.963623,734.619385 239.309662,731.525696 
	C239.309662,731.525696 239.023224,731.721130 239.000000,731.426147 
	C238.455566,730.912170 237.934357,730.693115 237.413177,730.473999 
	C237.274841,730.645264 237.136505,730.816528 237.024963,730.505371 
	C236.379623,729.660217 235.707474,729.297546 235.035339,728.934875 
	C235.035355,728.934875 235.008499,729.000061 234.921234,728.719604 
	C234.361649,728.130859 233.889328,727.822632 233.417007,727.514343 
	C233.417007,727.514343 233.053711,727.775391 233.148163,727.438782 
	C233.044861,726.818176 232.777328,726.637512 232.439987,726.560181 
	C232.439987,726.560181 232.307281,726.947144 232.280731,726.504944 
	C231.837799,725.697205 231.421402,725.331665 231.005005,724.966125 
	C231.006317,724.627869 230.882599,724.344116 230.342346,723.734558 
	C229.540924,722.763916 229.030991,722.173645 228.521057,721.583374 
	C228.521042,721.583374 228.152512,721.887634 228.211472,721.438293 
	C227.653625,720.204346 227.036819,719.419739 226.420044,718.635132 
	C226.420044,718.635132 226.127487,718.904968 226.203873,718.505859 
	C225.896545,717.681519 225.512817,717.256287 225.129089,716.830994 
	C225.129089,716.830994 225.061844,716.936951 225.038757,716.586548 
	C223.852951,714.688904 222.690216,713.141724 221.527466,711.594482 
	C221.527466,711.594482 221.159760,711.798462 221.226440,711.393188 
	C220.698425,710.194580 220.103729,709.401306 219.509064,708.607971 
	C219.509064,708.607971 219.100388,708.890076 219.188538,708.447998 
	C218.659882,707.214233 218.043060,706.422546 217.426254,705.630920 
	C217.426254,705.630920 217.075058,705.979065 217.169312,705.521851 
	C216.667099,704.249329 216.070618,703.433960 215.474152,702.618591 
	C215.318344,702.728455 215.162521,702.838318 215.138199,702.477966 
	C214.532394,700.975159 213.795105,699.942688 213.057800,698.910156 
	C213.057800,698.910156 213.005249,698.976562 212.996033,698.642212 
	C212.177429,697.071350 211.368027,695.834839 210.558640,694.598389 
	C210.558640,694.598389 210.192017,694.708130 210.278931,694.356934 
	C210.026245,693.567139 209.686661,693.128540 209.347076,692.690002 
	C209.347076,692.690002 209.215668,692.911621 209.234711,692.520630 
	C208.697647,691.288391 208.141541,690.447144 207.585419,689.605896 
	C207.585419,689.605896 207.445663,689.621826 207.407349,689.304321 
	C207.027100,688.554565 206.685150,688.122314 206.343201,687.690002 
	C206.343201,687.690002 206.208130,687.909241 206.217834,687.494446 
	C205.340714,685.588623 204.453918,684.097656 203.567123,682.606628 
	C203.567123,682.606628 203.282791,682.652161 203.337158,682.326599 
	C203.065140,681.555603 202.738754,681.110229 202.412354,680.664795 
	C202.412369,680.664795 202.293137,680.945251 202.311783,680.528320 
	C201.990707,679.643738 201.650986,679.176147 201.311279,678.708496 
	C201.311279,678.708496 201.225510,678.867554 201.214813,678.460449 
	C197.253647,670.268372 193.303177,662.483337 189.352722,654.698364 
	C189.352722,654.698364 189.297318,654.856812 189.295380,654.446411 
	C188.282913,651.938232 187.272385,649.840454 186.261841,647.742737 
	C186.261841,647.742737 186.205902,647.868591 186.226074,647.505005 
	C185.897079,646.540771 185.547897,645.940125 185.198715,645.339539 
	C185.198715,645.339539 185.249039,645.155823 185.156097,644.705872 
	C148.321899,554.724426 143.360519,463.624695 172.171494,371.069427 
	C177.241821,354.780975 184.119049,339.054962 190.161835,323.069214 
	C190.161819,323.069214 190.069077,323.064209 190.344055,322.907593 
	C190.922409,321.959534 191.225769,321.168121 191.529114,320.376709 
	C191.529114,320.376709 191.396317,320.425262 191.679672,320.141052 
	C192.775558,317.992035 193.588089,316.127258 194.400635,314.262512 
	C194.400635,314.262512 194.255386,314.101532 194.540619,314.018250 
	C195.012619,313.360016 195.199371,312.785065 195.386108,312.210114 
	C195.386108,312.210114 195.261917,312.163300 195.532181,312.044739 
	C195.991333,311.348907 196.180222,310.771606 196.369095,310.194305 
	C196.369095,310.194305 196.243423,310.151733 196.528748,310.015381 
	C197.350571,308.682007 197.887039,307.484985 198.423523,306.287964 
	C198.423508,306.287964 198.272293,306.050903 198.556503,306.000397 
	C199.042679,305.394958 199.244629,304.840027 199.446594,304.285065 
	C199.446579,304.285065 199.271515,304.086761 199.562454,304.027405 
	C200.066467,303.429474 200.279526,302.890900 200.492599,302.352295 
	C200.492599,302.352295 200.367676,302.152618 200.611099,302.109436 
	C200.936264,301.724548 201.017990,301.382812 201.099731,301.041107 
	C201.099716,301.041107 201.016022,301.029510 201.294174,300.887451 
	C201.911118,300.007812 202.249908,299.270203 202.588699,298.532593 
	C202.588699,298.532593 202.544510,298.437256 202.808807,298.189758 
	C204.080154,295.979004 205.087204,294.015747 206.094238,292.052460 
	C206.094238,292.052460 206.007782,292.028168 206.307465,291.864258 
	C207.562164,289.930664 208.517197,288.160919 209.472244,286.391205 
	C209.472244,286.391205 209.079025,286.301117 209.494125,286.161560 
	C210.131500,285.528320 210.353775,285.034637 210.576035,284.540924 
	C210.576035,284.540924 210.542404,284.440857 210.808273,284.198395 
	C211.894379,282.481750 212.714615,281.007599 213.534851,279.533417 
	C213.534851,279.533417 213.485199,279.458649 213.722519,279.278748 
	C214.060593,278.780334 214.161362,278.461853 214.262131,278.143372 
	C214.262131,278.143372 214.154236,278.124756 214.431610,278.029175 
	C214.964539,277.407257 215.220093,276.880981 215.475662,276.354675 
	C215.475662,276.354675 215.222336,276.007324 215.555923,276.030518 
	C216.122925,275.588776 216.356354,275.123901 216.589767,274.658997 
	C216.589767,274.658997 216.622513,274.519562 216.876984,274.278687 
	C217.451767,273.375092 217.772049,272.712372 218.092346,272.049683 
	C218.092346,272.049683 218.008942,272.023529 218.307404,271.891052 
	C219.245621,270.673065 219.885391,269.587555 220.525177,268.502045 
	C220.525177,268.502045 220.465698,268.405304 220.743973,268.231079 
	C221.378250,267.388153 221.734268,266.719452 222.090271,266.050720 
	C222.090271,266.050720 222.006851,266.022614 222.303497,265.896210 
	C223.105209,264.869293 223.610291,263.968781 224.115356,263.068268 
	C224.115356,263.068268 224.021164,263.033813 224.306976,262.927399 
	C224.861435,262.301331 225.130066,261.781677 225.398712,261.262054 
	C225.398712,261.262054 225.256439,261.205475 225.525269,261.153778 
	C225.926987,260.765991 226.059845,260.429901 226.192719,260.093811 
	C226.192734,260.093811 226.098419,260.086578 226.373840,259.994507 
	C226.927307,259.397797 227.205368,258.893127 227.483429,258.388489 
	C227.326996,258.312500 227.170547,258.236481 227.484833,258.109070 
	C228.327759,257.384338 228.699951,256.710938 229.072144,256.037506 
	C229.072144,256.037506 229.000626,256.014618 229.294083,255.887329 
	C230.108154,254.870819 230.628769,253.981598 231.149384,253.092377 
	C231.149368,253.092377 231.046402,253.047714 231.367310,252.929565 
	C233.537964,250.236115 235.387726,247.660812 237.237473,245.085510 
	C237.578842,245.042023 237.816040,244.861588 238.281540,244.150848 
	C240.826233,240.868011 243.038452,237.978546 245.250641,235.089081 
	C245.585876,235.055054 245.823349,234.884735 246.294708,234.191528 
	C248.139481,231.889603 249.652618,229.974304 251.165741,228.058990 
	C251.509247,228.021088 251.760361,227.848663 252.270325,227.159485 
	C254.495178,224.546249 256.368835,222.315231 258.242493,220.084198 
	C259.418549,218.919830 260.594635,217.755463 262.141846,216.190155 
	C262.836060,215.339981 263.159119,214.890717 263.482178,214.441467 
	C263.482208,214.441467 263.405243,214.054932 263.742584,214.083313 
	C269.201813,208.951630 274.323700,203.791550 279.445587,198.631470 
	C279.445587,198.631470 279.456573,198.522995 279.747192,198.388489 
	C280.374023,197.840393 280.710266,197.426804 281.046478,197.013199 
	C281.640381,196.564316 282.234283,196.115433 283.196899,195.317383 
	C283.765259,194.671066 283.964966,194.373932 284.164673,194.076797 
	C284.164673,194.076797 284.076508,194.067001 284.403168,193.998230 
	C286.817566,191.949417 288.905334,189.969360 290.993103,187.989319 
	C291.605774,187.555130 292.218475,187.120941 293.256653,186.317627 
	C295.129547,184.633209 296.576935,183.317947 298.024323,182.002686 
	C298.370850,181.997528 298.652527,181.859802 299.267944,181.275116 
	C300.775269,179.969940 301.884064,178.979141 302.992859,177.988327 
	C303.343597,177.990967 303.631897,177.858093 304.266022,177.264832 
	C306.159760,175.657196 307.645233,174.374435 309.130737,173.091675 
	C309.130737,173.091675 309.039276,173.034866 309.372803,173.002075 
	C310.837128,172.001022 311.967896,171.032761 313.098694,170.064499 
	C313.098694,170.064499 313.023132,170.011993 313.354065,169.978973 
	C314.833008,168.994217 315.980988,168.042465 317.128967,167.090698 
	C317.128967,167.090698 317.039154,167.032501 317.392822,166.998413 
	C320.260345,165.074097 322.774200,163.183868 325.288055,161.293640 
	C325.288055,161.293655 325.171570,161.236404 325.480438,161.223404 
	C326.212067,160.817551 326.634857,160.424713 327.057648,160.031876 
	C327.057648,160.031876 327.009644,159.995682 327.307465,159.969818 
	C328.201355,159.452835 328.797424,158.961700 329.393463,158.470551 
	C329.262726,158.314316 329.131989,158.158066 329.485229,158.135071 
	C330.773163,157.666870 331.577057,157.065445 332.380951,156.464020 
	C332.251923,156.315460 332.122894,156.166916 332.487305,156.137848 
	C334.001099,155.511856 335.021454,154.766418 336.041809,154.020996 
	C336.041809,154.020981 336.007233,153.993820 336.323059,153.967590 
	C337.461945,153.318436 338.284973,152.695496 339.108032,152.072571 
	C339.108032,152.072571 339.037262,152.031677 339.353027,152.018616 
	C339.972260,151.718323 340.275696,151.431076 340.579102,151.143814 
	C340.579102,151.143814 340.846924,151.177750 341.223633,151.020142 
	C342.410706,150.248291 343.221008,149.634018 344.031342,149.019760 
	C344.031342,149.019760 344.005646,148.995987 344.323578,148.967819 
	C345.476624,148.330429 346.311768,147.721207 347.146881,147.111984 
	C347.146881,147.111984 347.064636,147.065613 347.337219,147.080353 
	C347.868835,146.864319 348.127838,146.633545 348.386871,146.402786 
	C348.386871,146.402786 348.241394,146.357300 348.594543,146.329178 
	C349.456085,145.919006 349.964478,145.536957 350.472870,145.154907 
	C350.472870,145.154907 350.794434,145.166946 351.182556,145.012466 
	C352.177979,144.403015 352.785217,143.948029 353.392487,143.493057 
	C353.308746,143.323441 353.224976,143.153809 353.586060,143.133331 
	C355.484863,142.394562 356.938812,141.506607 358.392731,140.618637 
	C358.392731,140.618637 358.420685,140.521912 358.751892,140.455505 
	C359.741669,139.937119 360.400208,139.485123 361.058746,139.033127 
	C361.058746,139.033127 361.014618,138.993881 361.377197,138.974930 
	C373.597626,133.106232 385.455444,127.256470 397.313263,121.406708 
	C397.313263,121.406708 397.148346,121.436546 397.599304,121.391434 
	C403.790222,118.994118 409.530182,116.641914 415.270142,114.289703 
	C415.270142,114.289696 415.143463,114.253464 415.555298,114.265175 
	C443.138611,104.604301 470.942749,97.577988 499.564880,93.737785 
	C555.591370,86.220787 610.866516,89.636238 665.071167,105.782272 
	C683.330994,111.221367 701.004883,118.627838 718.946533,125.135155 
	C718.946533,125.135155 718.951111,125.046379 719.132935,125.339661 
	C726.798767,129.210236 734.282715,132.787521 741.766663,136.364838 
	C741.766663,136.364838 741.865234,136.219940 741.957825,136.509277 
	C742.605835,137.013351 743.161194,137.228104 743.716614,137.442841 
	C743.716614,137.442841 743.899841,137.260239 743.955261,137.553818 
	C744.528320,138.075684 745.045898,138.303970 745.563538,138.532257 
	C745.563538,138.532257 745.500061,138.378845 745.712646,138.649170 
	C746.259399,139.002197 746.593628,139.084900 746.927795,139.167587 
	C746.927795,139.167587 746.930542,139.076126 747.082581,139.373810 
	C749.025269,140.606705 750.815979,141.541916 752.606628,142.477112 
	C752.606628,142.477127 752.634521,142.148804 752.855652,142.556061 
	C754.612732,143.783539 756.148743,144.603745 757.684692,145.423950 
	C757.684692,145.423950 757.803833,145.296906 757.863892,145.554535 
	C758.266907,145.912674 758.609863,146.013199 758.952881,146.113724 
	C758.952881,146.113724 758.964111,146.027100 759.107605,146.325531 
	C760.409790,147.215851 761.568542,147.807739 762.727234,148.399628 
	C762.727234,148.399628 762.893127,148.207245 762.934326,148.516373 
	C763.472534,149.071625 763.969543,149.317764 764.466553,149.563904 
	C764.466553,149.563889 764.567139,149.533295 764.791382,149.795746 
	C765.891479,150.524338 766.767395,150.990479 767.643250,151.456619 
	C767.643250,151.456619 767.888062,151.343124 767.906128,151.593430 
	C768.265930,151.938278 768.607666,152.032822 768.949463,152.127365 
	C768.949463,152.127365 768.955872,152.040070 769.083191,152.331116 
	C770.135559,153.092712 771.060669,153.563263 771.985718,154.033783 
	C771.985718,154.033783 771.993042,153.993851 772.150513,154.276733 
	C773.403320,155.200577 774.498779,155.841568 775.594177,156.482559 
	C775.736755,156.344101 775.879333,156.205643 775.995850,156.519104 
	C776.827271,157.482620 777.684753,157.994186 778.542236,158.505768 
	C778.542236,158.505753 778.805603,158.199356 778.873474,158.595688 
	C779.615967,159.348648 780.290527,159.705276 780.965149,160.061920 
	C780.965149,160.061920 780.988037,159.996689 781.113403,160.293030 
	C782.121155,161.116776 783.003540,161.644150 783.885864,162.171539 
	C783.885864,162.171539 783.941467,162.056015 784.043213,162.367477 
	C785.053650,163.182968 785.962402,163.686981 786.871155,164.190994 
	C786.871155,164.190994 786.932800,164.074173 787.029724,164.394028 
	C788.385864,165.525650 789.645020,166.337402 790.904236,167.149170 
	C790.904236,167.149170 790.952576,167.042648 791.063599,167.355957 
	C792.431274,168.477921 793.687866,169.286575 794.944458,170.095245 
	C794.944458,170.095245 794.980103,170.011505 795.070801,170.301392 
	C795.670105,170.872269 796.178650,171.153244 796.687256,171.434219 
	C796.687256,171.434219 796.806763,171.215958 796.869690,171.561310 
	C797.603699,172.326904 798.274719,172.747177 798.945801,173.167435 
	C798.996704,173.518021 799.183350,173.766632 799.904541,174.232605 
	C801.513062,175.405426 802.722839,176.258926 803.932556,177.112411 
	C803.932556,177.112411 803.972900,177.021027 804.081665,177.339157 
	C805.752686,178.830521 807.314880,180.003738 808.877136,181.176971 
	C808.877136,181.176956 808.903442,181.087204 808.961365,181.346466 
	C809.335205,181.764847 809.651184,181.923950 809.967102,182.083054 
	C809.967102,182.083054 809.986572,182.009232 810.072266,182.287567 
	C810.628967,182.873764 811.099915,183.181625 811.570862,183.489502 
	C811.570862,183.489502 812.021912,183.291626 811.977417,183.656677 
	C812.929138,184.752396 813.925415,185.483047 814.921631,186.213684 
	C814.947693,186.551865 815.111572,186.798401 815.765259,187.262573 
	C816.603088,187.880966 817.089050,188.190063 817.574951,188.499176 
	C817.574951,188.499191 817.980530,188.454132 817.955444,188.753265 
	C819.929077,190.770355 821.927734,192.488281 823.926453,194.206207 
	C825.411560,195.722565 826.896667,197.238922 828.785522,199.139450 
	C829.644897,199.845032 830.100708,200.166458 830.556458,200.487885 
	C830.556458,200.487869 830.953430,200.407288 830.918518,200.746094 
	C834.116577,204.185425 837.349548,207.285965 840.582520,210.386505 
	C840.582520,210.386505 840.816223,210.405579 840.789062,210.623718 
	C841.027588,211.038086 841.293335,211.234299 841.559021,211.430511 
	C841.715637,211.353439 841.872314,211.276337 841.894104,211.548096 
	C841.955994,212.181046 842.223206,212.360474 842.560669,212.435257 
	C842.560669,212.435257 842.973755,212.163162 842.854370,212.524384 
	C842.914001,213.163742 843.161438,213.351822 843.477295,213.449814 
	C843.477295,213.449814 843.574280,213.439301 843.651245,213.688049 
	C843.904846,214.192780 844.142029,214.365692 844.439758,214.455536 
	C844.439758,214.455536 844.546326,214.460037 844.643494,214.743408 
	C845.159363,215.360214 845.578125,215.693634 845.996887,216.027054 
	C847.080444,217.290787 848.164062,218.554504 849.658936,220.247467 
	C851.533630,222.258011 852.997192,223.839310 854.460693,225.420593 
	C854.460693,225.420593 854.683716,225.056503 854.707947,225.511047 
	C855.144348,226.344498 855.556580,226.723373 855.968750,227.102264 
	C855.965515,227.437347 856.095398,227.708694 856.683594,228.307739 
	C858.338196,230.142365 859.667542,231.585556 860.996887,233.028748 
	C860.993591,233.377563 861.128906,233.660019 861.720337,234.263184 
	C862.863892,235.567520 863.689758,236.484787 864.515625,237.402039 
	C864.515625,237.402039 864.760681,237.187622 864.751404,237.556946 
	C865.153259,238.309250 865.564453,238.692245 865.975586,239.075256 
	C865.963623,239.412964 866.086365,239.691299 866.656860,240.307129 
	C867.964844,241.827759 868.959717,242.951508 869.954529,244.075256 
	C869.954529,244.075256 869.997864,244.012589 870.049072,244.343842 
	C871.357788,246.172089 872.615234,247.669067 873.872681,249.166046 
	C873.872681,249.166061 873.908203,249.078415 873.924561,249.354156 
	C874.214478,249.858856 874.488037,250.087814 874.761536,250.316772 
	C874.761536,250.316772 874.799988,250.179581 874.788452,250.452530 
	C875.013489,250.960419 875.250122,251.195358 875.486755,251.430298 
	C875.486755,251.430313 875.697571,251.454956 875.726074,251.765793 
	C876.817749,253.413971 877.880859,254.751312 878.944031,256.088654 
	C878.944031,256.088654 878.993896,256.019592 879.030029,256.365173 
	C880.678955,258.851654 882.291748,260.992523 883.904541,263.133423 
	C883.904541,263.133423 883.963013,263.042358 883.976562,263.371582 
	C884.631714,264.507965 885.273254,265.315125 885.914856,266.122253 
	C885.914856,266.122253 885.972046,266.037048 885.983276,266.365051 
	C886.628601,267.508636 887.262634,268.324219 887.896729,269.139801 
	C887.896729,269.139801 887.933899,269.061066 887.952148,269.372620 
	C888.261169,269.980774 888.551880,270.277405 888.842529,270.574036 
	C889.010315,271.008331 889.178040,271.442596 889.621216,272.268799 
	C890.258423,273.117798 890.620239,273.574860 890.981995,274.031952 
	C890.981995,274.031952 891.004456,274.005829 891.036316,274.321106 
	C891.689026,275.458801 892.309814,276.281281 892.930603,277.103760 
	C892.930603,277.103760 892.976807,277.033142 892.970825,277.310822 
	C893.215637,277.836670 893.466370,278.084869 893.717163,278.333069 
	C893.717163,278.333038 893.758301,278.183807 893.755127,278.503510 
	C894.123962,279.272034 894.495972,279.720856 894.867981,280.169708 
	C894.867981,280.169708 894.904602,280.083282 894.892822,280.350342 
	C895.103638,280.877869 895.326111,281.138306 895.548584,281.398743 
	C895.548584,281.398773 895.469604,281.259003 895.587463,281.640533 
	C896.437927,283.059204 897.170593,284.096344 897.903259,285.133453 
	C897.903259,285.133453 897.938049,285.054138 897.933289,285.350098 
	C898.281006,286.106903 898.633545,286.567780 898.986023,287.028625 
	C898.986023,287.028625 899.004700,287.005615 899.034424,287.341858 
	C900.008545,289.164062 900.953064,290.650085 901.897522,292.136078 
	C901.897522,292.136078 901.947510,292.055939 901.927124,292.328247 
	C902.130005,292.863007 902.353271,293.125427 902.576538,293.387878 
	C902.576538,293.387878 902.602722,293.178619 902.627930,293.552643 
	C902.983765,294.388000 903.314392,294.849304 903.645020,295.310638 
	C903.645020,295.310638 903.753113,295.068512 903.758545,295.524597 
	C905.631531,299.451569 907.499146,302.922424 909.366760,306.393280 
	C909.366760,306.393280 909.457336,306.443634 909.511353,306.744263 
	C909.846619,307.480072 910.127808,307.915222 910.409058,308.350372 
	C910.409058,308.350372 910.481567,308.416656 910.561646,308.786804 
	C911.750244,311.123138 912.858765,313.089264 913.967224,315.055420 
	C913.967224,315.055420 914.005737,315.013733 913.991699,315.315125 
	C914.305969,316.098694 914.634216,316.580841 914.962524,317.062988 
	C914.962524,317.062988 915.003906,317.016266 914.985535,317.321106 
	C915.291260,318.115051 915.615417,318.604126 915.939575,319.093201 
	C915.939575,319.093201 915.985962,319.028595 915.976074,319.402893 
	C918.246033,324.739349 920.525940,329.701477 922.805908,334.663605 
	C922.805908,334.663605 922.759155,334.840149 922.849243,335.288605 
	C923.111267,336.204346 923.268250,336.677765 923.457397,337.138000 
	C957.517334,420.018555 963.483398,504.895203 940.696716,591.534241 
	C935.932434,609.648682 928.871033,627.158875 922.868225,644.947571 
	C922.868225,644.947571 922.957092,644.951904 922.668091,645.142822 
	C921.088257,648.440186 919.797424,651.546692 918.506592,654.653137 
	C918.506592,654.653137 918.491028,654.752502 918.282837,654.949219 
	C914.376526,662.761963 910.678284,670.377991 906.980042,677.994019 
	C906.980042,677.994019 907.004517,677.995483 906.753723,678.175537 
	C906.156494,679.094543 905.809998,679.833435 905.463501,680.572327 
	C905.463501,680.572327 905.606689,680.501160 905.344543,680.716553 
	C905.001282,681.264893 904.920166,681.597778 904.839111,681.930725 
	C904.839111,681.930725 904.930420,681.933960 904.630249,682.088989 
	C903.040833,684.651917 901.751526,687.059753 900.462158,689.467529 
	C900.462158,689.467529 900.493103,689.563782 900.224121,689.802734 
	C899.130737,691.529480 898.306274,693.017212 897.481812,694.504944 
	C897.481812,694.504944 897.537720,694.593750 897.252869,694.799561 
	C896.256897,696.301575 895.545776,697.597778 894.834595,698.893921 
	C894.834595,698.893921 894.948608,698.941467 894.643860,699.070435 
	C893.722656,700.313660 893.106262,701.427917 892.489746,702.542114 
	C892.489746,702.542114 892.748291,702.752686 892.380981,702.858154 
	C891.675110,703.643250 891.336426,704.322754 890.997803,705.002258 
	C890.997742,705.002258 891.000000,705.000000 890.757690,705.166077 
	C890.279236,705.861816 890.043152,706.391541 889.807129,706.921265 
	C889.807129,706.921265 889.905640,706.922668 889.628662,707.024719 
	C889.094177,707.658997 888.836670,708.191284 888.579102,708.723511 
	C888.579102,708.723511 888.725708,708.792480 888.460327,708.846191 
	C888.062683,709.244873 887.930359,709.589905 887.798096,709.934937 
	C887.439636,710.007629 887.202881,710.217590 886.785767,710.998413 
	C885.166748,713.484436 883.849731,715.536804 882.532776,717.589233 
	C882.657104,717.737793 882.781494,717.886353 882.473877,717.982788 
	C881.656372,718.597900 881.270935,719.265259 880.885498,719.932617 
	C880.885498,719.932617 880.977112,719.970642 880.685852,720.063232 
	C880.126648,720.677734 879.858765,721.199646 879.590942,721.721558 
	C879.590942,721.721619 879.748047,721.789124 879.439453,721.868164 
	C878.741638,722.625183 878.352539,723.303162 877.963379,723.981079 
	C877.963379,723.981079 878.004700,723.994751 877.723083,724.134521 
	C876.898743,725.140564 876.355957,726.006775 875.813232,726.873047 
	C875.813232,726.873047 875.928589,726.932800 875.641357,726.997681 
	C875.059448,727.535461 874.764832,728.008362 874.470215,728.481201 
	C874.470215,728.481201 874.507324,728.578491 874.226929,728.754089 
	C873.551453,729.590820 873.156372,730.252014 872.761230,730.913208 
	C872.420593,730.969299 872.186401,731.157776 871.747070,731.870117 
	C870.872559,733.143921 870.309631,734.026245 869.746765,734.908569 
	C869.407837,734.960022 869.176453,735.145569 868.755493,735.834656 
	C868.172119,736.712708 867.885925,737.221313 867.599731,737.729980 
	C867.599792,737.729980 867.739563,737.774658 867.435242,737.853333 
	C866.711182,738.594849 866.291443,739.257690 865.871704,739.920532 
	C865.871704,739.920532 865.967651,739.966064 865.685547,740.030029 
	C865.092346,740.547852 864.781250,741.001709 864.470154,741.455566 
	C864.470154,741.455566 864.521057,741.542847 864.268921,741.674683 
	C863.766846,742.028992 863.622131,742.306396 863.582581,742.638672 
	C863.582581,742.638672 863.878357,742.595032 863.460938,742.762939 
	C862.317505,743.939148 861.591431,744.947449 860.865356,745.955688 
	C860.517700,746.007263 860.263855,746.189575 859.761658,746.892090 
	C858.221863,748.833374 857.024414,750.385071 855.826965,751.936829 
	C855.484375,751.976379 855.234985,752.149963 854.770752,752.806030 
	C854.140076,753.609558 853.817627,754.064453 853.495117,754.519348 
	C853.495117,754.519348 853.939453,754.741760 853.496216,754.763672 
	C852.788818,755.000977 852.631592,755.277222 852.581299,755.614319 
	C852.581299,755.614319 852.923340,755.939575 852.526001,755.871582 
	C851.960571,756.101135 851.792419,756.398743 851.624268,756.696411 
	C851.624329,756.696411 851.927734,756.809753 851.499329,756.877075 
	C849.652344,758.585449 848.233765,760.226440 846.815186,761.867432 
	C846.815186,761.867432 846.908997,761.897583 846.641541,761.949097 
	C846.187317,762.313232 846.000610,762.625854 845.813843,762.938477 
	C844.617249,764.088135 843.420715,765.237793 841.859253,766.783447 
	C841.159302,767.600464 840.824341,768.021606 840.489380,768.442688 
	C840.489380,768.442688 840.519531,768.541504 840.271362,768.653076 
	C839.776001,768.956787 839.617432,769.205383 839.547485,769.510559 
	C839.547485,769.510559 839.744324,769.784363 839.410278,769.767456 
	C838.807800,769.941223 838.633240,770.196106 838.552429,770.515198 
	C838.552429,770.515198 838.534729,770.602661 838.220825,770.748779 
	C835.258545,773.594971 832.610229,776.294983 829.961914,778.994995 
	C828.383301,780.426514 826.804688,781.858154 824.829956,783.669922 
	C824.226013,784.346252 824.018250,784.642395 823.810486,784.938599 
	C823.485107,784.942383 823.231201,785.079041 822.670349,785.681396 
	C820.520386,787.675964 818.749023,789.337708 816.977600,790.999451 
	C816.370117,791.427856 815.762634,791.856262 814.730103,792.653809 
	C812.861206,794.348999 811.417297,795.675049 809.973328,797.001099 
	C809.627441,797.011353 809.349854,797.154236 808.789124,797.731567 
	C808.223694,798.318420 808.009705,798.603577 807.795715,798.888733 
	C807.795715,798.888733 807.894714,798.904114 807.573425,798.948547 
	C806.160706,799.994873 805.069275,800.996765 803.977905,801.998657 
	C803.632385,801.995117 803.348022,802.125183 802.733459,802.695068 
	C801.568176,803.672607 800.794128,804.343994 800.020081,805.015381 
	C799.667175,805.005493 799.375549,805.134399 798.748047,805.707825 
	C797.424561,806.794434 796.498230,807.575195 795.571899,808.355957 
	C795.571899,808.355957 795.521729,808.461487 795.187134,808.609985 
	C793.549072,809.828064 792.245483,810.897583 790.941895,811.967102 
	C790.941895,811.967102 790.990601,812.003723 790.669189,812.053955 
	C789.200134,813.048828 788.052429,813.993469 786.904785,814.938110 
	C786.904785,814.938110 786.977844,814.989868 786.676270,815.008789 
	C785.782776,815.517395 785.190735,816.007019 784.598694,816.496582 
	C784.743713,816.638184 784.888733,816.779785 784.541260,816.813843 
	C783.645447,817.097290 783.242065,817.488281 782.838745,817.879272 
	C782.838745,817.879272 782.925171,817.914978 782.650146,817.926147 
	C782.138550,818.201172 781.902039,818.464966 781.665527,818.728760 
	C781.665588,818.728760 781.815857,818.769470 781.503357,818.772827 
	C780.764282,819.165466 780.337646,819.554810 779.911133,819.944092 
	C779.911133,819.944153 779.980103,819.993286 779.679443,820.006592 
	C778.781128,820.497314 778.183411,820.974731 777.585754,821.452148 
	C777.585754,821.452148 777.713013,821.709534 777.342896,821.710938 
	C776.184509,822.309570 775.396179,822.906860 774.607910,823.504211 
	C774.707642,823.642822 774.807434,823.781494 774.435303,823.840576 
	C772.175476,824.967163 770.387634,826.173340 768.599731,827.379456 
	C768.599731,827.379456 768.553711,827.475220 768.216064,827.588379 
	C766.870483,828.431580 765.862671,829.161682 764.854858,829.891724 
	C764.854797,829.891724 764.949524,829.955139 764.598755,829.963135 
	C762.809509,830.967651 761.371094,831.964172 759.932678,832.960754 
	C759.932678,832.960754 759.985535,833.003479 759.664429,833.020813 
	C758.509766,833.652100 757.676147,834.266052 756.842468,834.880005 
	C756.842468,834.879944 756.926331,834.918518 756.659790,834.906189 
	C756.131409,835.115295 755.869507,835.336670 755.607666,835.558105 
	C755.607727,835.558167 755.875427,835.569336 755.468140,835.617554 
	C754.609924,836.006531 754.159058,836.347290 753.708191,836.688049 
	C753.708191,836.688049 753.862000,836.772400 753.489807,836.771729 
	C752.025085,837.472107 750.932495,838.173218 749.839966,838.874329 
	C749.839966,838.874329 749.924500,838.916870 749.656982,838.899963 
	C749.127319,839.104370 748.865234,839.325623 748.603149,839.546875 
	C748.603149,839.546936 748.877869,839.537964 748.466309,839.599487 
	C747.601807,839.994385 747.148804,840.327820 746.695801,840.661255 
	C746.695801,840.661194 746.904358,840.778931 746.486938,840.776550 
	C744.337280,841.818787 742.604980,842.863403 740.872742,843.908020 
	C740.872742,843.908020 740.948975,843.948730 740.647827,843.934692 
	C739.870117,844.262756 739.393494,844.604858 738.916870,844.946960 
	C738.916870,844.946960 738.977173,844.994507 738.704163,844.978088 
	C738.165894,845.181763 737.900635,845.401917 737.635376,845.622070 
	C737.635376,845.622070 737.777832,845.652466 737.445190,845.662415 
	C736.639099,845.995667 736.165527,846.318909 735.691956,846.642151 
	C735.691956,846.642151 735.954102,846.748840 735.483826,846.753479 
	C730.576538,849.057190 726.139465,851.356323 721.702454,853.655396 
	C721.702454,853.655396 721.847717,853.694641 721.509094,853.680786 
	C720.670532,853.947998 720.170593,854.229004 719.670593,854.509949 
	C719.670593,854.509949 719.578003,854.662109 719.249817,854.665527 
	C716.176392,855.974609 713.431152,857.280212 710.685974,858.585815 
	C710.685974,858.585876 710.877930,858.550842 710.414795,858.621582 
	C703.536011,861.340515 697.120239,863.988708 690.704468,866.636841 
	C690.704468,866.636841 690.845215,866.638977 690.409180,866.655640 
	C689.334167,866.855774 688.681396,867.001404 688.058167,867.228210 
	C634.620300,886.677002 579.558472,893.860840 522.906616,889.204529 
	C518.969604,888.880920 514.984802,889.137817 511.022186,889.124756 
	C511.022186,889.124756 510.591095,888.982422 510.190369,888.654785 
	C507.528961,888.256104 505.268311,888.184998 503.007660,888.113892 
	C503.007660,888.113892 502.585876,887.976746 502.173889,887.655701 
	C488.005798,884.675720 473.970551,882.988525 460.557556,879.135254 
	C439.266754,873.018799 418.391632,865.455505 397.340637,858.504333 
	C397.340637,858.504333 397.227600,858.493713 397.035736,858.289795 
	C394.917450,857.338928 392.990997,856.591980 391.064545,855.844971 
	C391.064545,855.845032 391.062927,855.935913 390.918335,855.668335 
	C390.193207,855.235596 389.612701,855.070496 389.032227,854.905396 
	C389.032227,854.905396 389.028687,854.985352 388.860626,854.710205 
	C387.901276,854.127930 387.110016,853.820740 386.318756,853.513550 
	C386.318756,853.513550 386.053741,853.580872 385.958923,853.329468 
	C383.981445,852.267273 382.098785,851.456360 380.216125,850.645447 
	C380.216125,850.645447 380.142395,850.775818 380.032471,850.494263 
	C379.347290,850.021118 378.772003,849.829590 378.196686,849.638062 
	C378.196686,849.638062 378.158691,849.761536 378.044312,849.489502 
	C377.366730,849.010254 376.803528,848.803162 376.240326,848.596069 
	C376.240326,848.596069 376.152649,848.733154 376.024658,848.441895 
	C374.723419,847.607239 373.550201,847.063721 372.376984,846.520203 
	C372.376984,846.520203 372.431519,846.797485 372.207520,846.446655 
	C371.461945,845.886902 370.940338,845.677917 370.418762,845.468933 
	C370.418762,845.468933 370.429443,845.509949 370.242371,845.303345 
	C369.717682,845.026428 369.380035,844.956177 369.042419,844.885925 
	C369.042419,844.885925 369.038635,844.970825 368.893066,844.692261 
	C367.990021,844.085632 367.232574,843.757507 366.475128,843.429382 
	C366.475128,843.429382 366.385773,843.556335 366.155579,843.259521 
	C363.706451,841.843567 361.487549,840.724365 359.268646,839.605225 
	C359.268646,839.605225 359.086700,839.781372 359.031555,839.480408 
	C358.445526,838.950806 357.914612,838.722229 357.383698,838.493591 
	C357.245819,838.601501 357.107941,838.709412 356.967651,838.420654 
	C355.427979,837.199341 353.890717,836.374695 352.353455,835.550049 
	C352.353424,835.550110 352.114197,835.677551 352.097198,835.417297 
	C351.737518,835.061768 351.394836,834.966431 351.052155,834.871094 
	C351.052155,834.871155 351.046295,834.959290 350.893372,834.657104 
	C348.054962,832.719177 345.369446,831.083496 342.683929,829.447754 
	C342.683929,829.447754 342.539215,829.385620 342.289886,829.130859 
	C341.388336,828.538513 340.736145,828.200867 340.083954,827.863220 
	C340.083954,827.863220 340.044861,827.967102 339.920197,827.665039 
	C338.722534,826.726624 337.649506,826.090271 336.576508,825.453979 
	C336.576508,825.453979 336.470947,825.473022 336.290710,825.236755 
	C335.839447,824.798035 335.534790,824.695007 335.196503,824.691284 
	C335.196503,824.691284 335.141876,824.824097 335.067139,824.536255 
	C334.493561,823.985229 333.994720,823.721985 333.495911,823.458740 
	C333.495911,823.458740 333.415527,823.653198 333.267853,823.345886 
	C332.806885,822.927551 332.493561,822.816589 332.180267,822.705566 
	C332.180267,822.705566 332.142517,822.826111 332.065186,822.545959 
	C331.496765,821.995239 331.005676,821.724731 330.514587,821.454224 
	C330.514587,821.454224 330.439667,821.551941 330.283142,821.290771 
	C329.818695,820.914124 329.510712,820.798645 329.202728,820.683105 
	C329.202728,820.683167 329.165497,820.816284 329.110413,820.547729 
	C328.718414,820.150391 328.381561,820.021545 328.044708,819.892700 
	C328.044708,819.892700 328.030243,819.977295 327.921509,819.695068 
	C327.288696,819.147888 326.764618,818.882996 326.240570,818.618042 
	C326.240570,818.618042 326.186462,818.770264 326.140808,818.497437 
	C325.755127,818.076477 325.415100,817.928284 325.075073,817.780090 
	C325.017212,817.430847 324.822266,817.194885 324.107056,816.780273 
	C323.209656,816.219055 322.695496,815.949768 322.181305,815.680481 
	C322.181305,815.680481 322.148895,815.824829 322.098907,815.556763 
	C321.713715,815.156250 321.378540,815.023682 321.043365,814.891113 
	C321.043365,814.891113 321.030762,814.975220 320.908691,814.672058 
	C319.532684,813.562500 318.278748,812.756165 317.024841,811.949768 
	C317.024841,811.949768 317.007843,812.004395 316.864624,811.697876 
	C314.176392,809.549744 311.631409,807.708130 309.086395,805.866455 
	C309.086395,805.866455 309.036377,805.968628 308.925598,805.649536 
	C307.233337,804.182373 305.651855,803.034302 304.070374,801.886169 
	C304.070374,801.886169 304.028748,801.980469 303.913025,801.663208 
	C302.214905,800.182617 300.632538,799.019348 299.050140,797.856079 
	C297.918793,796.656616 296.787476,795.457214 295.324768,793.830261 
	C294.540131,792.797058 294.086823,792.191284 293.633514,791.585571 
	C293.633514,791.585571 293.532623,791.554810 293.434143,791.159790 
	C289.292267,782.741760 288.949432,774.583984 292.444427,766.286438 
	C292.444427,766.286438 292.312775,766.218018 292.560669,766.137573 
	C292.893585,765.712341 292.978638,765.367432 293.063690,765.022583 
	C293.063690,765.022583 292.997681,765.016663 293.269897,764.859253 
	C294.043121,763.807983 294.544098,762.914062 295.045105,762.020142 
	C295.045105,762.020142 294.996521,762.003662 295.267578,761.905945 
	C295.853668,761.343994 296.168701,760.879822 296.483704,760.415649 
	C296.483734,760.415649 296.532166,760.266113 296.795410,760.181396 
	C301.777435,755.090698 306.496246,750.084717 311.215088,745.078796 
	C312.409912,743.934387 313.604736,742.789978 315.166046,741.239502 
	C315.858032,740.382629 316.183533,739.931702 316.509033,739.480835 
	C316.509033,739.480835 316.047119,739.400208 316.494507,739.307983 
	C317.211090,739.001526 317.372192,738.724487 317.425171,738.384521 
	C317.425171,738.384521 317.463287,738.343811 317.741089,738.217896 
	C320.406891,735.437805 322.794861,732.783569 325.182831,730.129333 
	C325.182831,730.129333 325.088470,730.096619 325.359772,730.053345 
	C325.820312,729.694397 326.009552,729.378723 326.198792,729.062988 
	C327.070587,728.259277 327.942352,727.455566 329.229797,726.234863 
	C333.492371,721.589417 337.339264,717.360962 341.186157,713.132507 
	C341.186157,713.132507 341.091217,713.102051 341.359253,713.051270 
	C341.811310,712.684937 341.995270,712.369446 342.179260,712.053955 
	C342.511688,712.033630 342.762604,711.880127 343.299011,711.231812 
	C347.854401,706.274353 352.042725,701.678467 356.231049,697.082520 
	C357.737152,695.591370 359.243256,694.100281 361.132111,692.211060 
	C361.843719,691.375488 362.172577,690.937927 362.501465,690.500366 
	C362.501465,690.500366 362.468048,690.389282 362.790985,690.245667 
	C365.792908,687.101318 368.471924,684.100647 371.150909,681.099915 
	C371.150909,681.099915 371.066559,681.073181 371.333649,681.026123 
	C371.785095,680.667847 371.969452,680.356628 372.153748,680.045410 
	C373.033020,679.233093 373.912323,678.420715 375.207764,677.192139 
	C379.490417,672.543823 383.356903,668.311768 387.223389,664.079773 
	C387.767303,663.595764 388.311218,663.111816 389.245850,662.216492 
	C393.818481,657.246338 398.000427,652.687500 402.182343,648.128723 
	C402.182343,648.128723 402.088135,648.097961 402.355652,648.048218 
	C402.810577,647.684448 402.997986,647.370300 403.185394,647.056213 
	C404.061615,646.244690 404.937836,645.433228 406.216125,644.193848 
	C410.825714,639.207092 415.033234,634.648193 419.240753,630.089294 
	C420.755005,628.611938 422.269287,627.134644 424.155273,625.240356 
	C424.847961,624.368774 425.168915,623.914185 425.489868,623.459595 
	C425.489838,623.459595 425.371124,623.159729 425.735138,623.137085 
	C429.144745,619.769958 432.190338,616.425354 435.235901,613.080750 
	C436.744659,611.591248 438.253448,610.101746 440.136841,608.209595 
	C440.840729,607.367249 441.170013,606.927612 441.499329,606.487976 
	C441.499298,606.487976 441.063202,606.305298 441.501068,606.268433 
	C442.206482,606.027954 442.372864,605.761292 442.438049,605.431458 
	C442.438049,605.431458 442.421783,605.197449 442.736511,605.142761 
	C446.105164,601.751892 449.159088,598.415710 452.213013,595.079529 
	C453.406372,593.937439 454.599701,592.795288 456.207336,591.213318 
	C459.669403,587.514160 462.820129,584.343933 465.738373,580.972534 
	C469.285278,576.874756 473.467529,574.900757 478.906006,576.232239 
	C478.906006,576.232239 478.906097,576.121155 479.035583,576.405029 
	C480.084869,577.191345 481.004669,577.693848 481.924469,578.196411 
	C483.711914,580.063965 485.499359,581.931580 487.733276,584.217163 
	C489.928345,586.236633 491.676971,587.838074 493.425598,589.439514 
	C493.425598,589.439514 493.524628,589.433594 493.645081,589.690430 
	C493.964874,590.210022 494.226105,590.374268 494.549194,590.440063 
	C494.549194,590.440063 494.722595,590.416809 494.813354,590.741455 
	C500.221436,596.108887 505.538757,601.151672 510.856079,606.194519 
	C510.856079,606.194519 510.888947,606.101257 510.931732,606.369141 
	C511.279785,606.825745 511.585022,607.014404 511.890259,607.203125 
	C511.890259,607.203125 511.910889,607.087585 511.951782,607.359863 
	C512.304871,607.824097 512.617126,608.016052 512.929321,608.208069 
	C516.411255,611.716614 519.893127,615.225220 523.783508,619.126099 
	C524.639160,619.843689 525.086304,620.169006 525.533447,620.494324 
	C525.533447,620.494324 525.825378,620.358459 525.858704,620.720398 
	C527.555481,622.445496 529.218872,623.808716 530.882324,625.171875 
	C530.882324,625.171875 530.907837,625.082336 530.967102,625.341370 
	C531.345032,625.750183 531.663635,625.900024 531.982300,626.049805 
	C531.982300,626.049805 531.995239,625.996887 532.120483,626.288818 
	C533.131287,627.104797 534.016785,627.628784 534.902344,628.152771 
	C534.902344,628.152771 534.949280,628.045715 535.046570,628.340698 
	C535.683228,628.885498 536.222595,629.135437 536.761963,629.385315 
	C536.761963,629.385315 536.841553,629.242188 536.969788,629.558960 
	C553.547485,639.315063 570.204834,639.947998 587.086975,631.055786 
	C587.086975,631.055786 587.024048,631.002747 587.379456,630.997498 
	C589.959900,629.511963 592.184937,628.031677 594.410034,626.551453 
	C594.410034,626.551453 594.224609,626.309937 594.605225,626.291992 
	C595.373413,625.866028 595.760925,625.457886 596.148438,625.049805 
	C596.479736,625.052734 596.741943,624.919495 597.266663,624.333374 
	C597.795044,623.707581 597.991699,623.398499 598.188354,623.089478 
	C598.188416,623.089478 598.075378,623.075073 598.348022,623.042847 
	C598.807800,622.703674 598.994995,622.396667 599.182190,622.089661 
	C599.182190,622.089661 599.073486,622.074158 599.344604,622.039307 
	C599.801941,621.697388 599.988098,621.390381 600.174255,621.083374 
	C600.174255,621.083374 600.068787,621.068787 600.337769,621.031982 
	C600.786865,620.685242 600.966919,620.375244 601.146973,620.065247 
	C601.146973,620.065247 601.052429,620.052734 601.322266,620.011719 
	C601.786499,619.664856 601.981018,619.359070 602.175537,619.053284 
	C605.029785,616.245239 607.884033,613.437256 611.127930,610.217896 
	C611.843262,609.360168 612.168945,608.913696 612.494629,608.467224 
	C612.494629,608.467224 612.010742,608.355286 612.469727,608.287842 
	C613.199890,608.011475 613.364929,607.738464 613.423828,607.401306 
	C613.288086,607.282593 613.152344,607.163818 613.447754,607.126892 
	C614.051819,606.920349 614.224731,606.632019 614.397583,606.343628 
	C614.397583,606.343628 614.059814,606.361450 614.517334,606.216980 
	C617.045959,603.760254 619.116943,601.448059 621.187988,599.135803 
	C621.187988,599.135803 621.092834,599.102051 621.364258,599.057129 
	C621.830261,598.698608 622.024841,598.385071 622.219360,598.071472 
	C623.734314,596.585815 625.249268,595.100159 627.134399,593.213623 
	C627.839966,592.390320 628.175354,591.967957 628.510742,591.545532 
	C628.510681,591.545532 628.467712,591.453003 628.719971,591.340332 
	C629.225647,591.027832 629.383118,590.769531 629.444702,590.452637 
	C629.313599,590.312012 629.182495,590.171387 629.481445,590.125366 
	C630.079712,589.939209 630.247864,589.658386 630.416016,589.377625 
	C630.416016,589.377625 630.102417,589.097412 630.485229,589.145813 
	C631.037415,588.893921 631.206726,588.593567 631.376038,588.293213 
	C631.376038,588.293213 631.245361,588.241516 631.526245,588.203735 
	C631.985657,587.858887 632.164124,587.551941 632.342529,587.244934 
	C632.342529,587.244934 632.203979,587.200562 632.486206,587.171875 
	C632.948425,586.830139 633.128418,586.517090 633.308472,586.204041 
	C633.308411,586.204041 633.188782,586.185669 633.484314,586.145264 
	C634.232788,585.526917 634.685730,584.948914 635.421631,584.237793 
	C636.207275,583.457825 636.710022,582.811035 637.212708,582.164246 
	C637.212708,582.164246 637.111145,582.122803 637.387817,582.080627 
	C637.870300,581.723938 638.076172,581.409485 638.282104,581.095032 
	C638.598145,581.090088 638.835327,580.950745 639.304565,580.360107 
	C639.810120,579.727844 640.004700,579.412476 640.199341,579.097168 
	C640.199341,579.097168 640.083069,579.081909 640.354675,579.049194 
	C640.816284,578.712097 641.006348,578.407837 641.196411,578.103516 
	C641.196350,578.103516 641.082214,578.083130 641.357361,578.045715 
	C641.830688,577.697571 642.028870,577.386902 642.227051,577.076233 
	C643.417664,575.929260 644.608215,574.782288 646.162781,573.231384 
	C646.853333,572.382385 647.179810,571.937317 647.506348,571.492249 
	C647.506348,571.492249 647.091858,571.287292 647.517395,571.261719 
	C648.205261,571.036560 648.372375,570.775940 648.444275,570.454224 
	C648.327942,570.301392 648.211609,570.148499 648.501831,570.112610 
	C649.188782,570.024475 649.362488,569.751465 649.429565,569.410645 
	C649.285217,569.289856 649.140808,569.169006 649.441040,569.128174 
	C650.056763,568.918091 650.227966,568.628113 650.399170,568.338074 
	C650.399170,568.338074 650.047363,568.318604 650.511475,568.196533 
	C653.708679,565.090088 656.441772,562.105774 659.174866,559.121399 
	C659.174866,559.121399 659.081909,559.090332 659.353455,559.046753 
	C659.821838,558.690796 660.018677,558.378418 660.215454,558.066040 
	C661.405762,556.918823 662.596008,555.771545 664.154907,554.231934 
	C664.854492,553.403992 665.185547,552.968567 665.516602,552.533142 
	C665.516602,552.533142 665.501709,552.429688 665.823853,552.276855 
	C669.835876,548.137207 673.525757,544.150330 677.215637,540.163452 
	C677.215637,540.163452 677.112793,540.123718 677.386841,540.078308 
	C677.858765,539.716431 678.056519,539.399963 678.254272,539.083496 
	C679.110229,538.275696 679.966187,537.467957 681.235596,536.243774 
	C685.856873,531.251465 690.064758,526.675659 694.272705,522.099854 
M426.075958,513.733643 
	C420.841980,486.284760 423.694092,459.778259 435.043365,434.167267 
	C460.704315,376.260254 526.064758,344.740967 586.959656,361.062958 
	C600.066101,364.575928 612.295410,370.083252 623.876160,377.210205 
	C632.077942,382.257690 640.724548,382.312073 648.852234,376.895752 
	C656.565491,371.755646 659.998413,364.350220 659.024109,355.011383 
	C658.100037,346.153809 652.531311,340.701202 645.416809,336.418457 
	C620.729370,321.557434 594.014099,312.473389 565.247498,311.282227 
	C502.070129,308.666168 450.321350,332.007507 412.088379,382.681061 
	C381.367981,423.397522 371.855804,469.656036 380.238678,519.711609 
	C382.499786,533.212891 393.329529,542.098267 405.186127,540.757812 
	C418.365784,539.267761 427.940674,528.498352 426.075958,513.733643 
M350.431732,801.103271 
	C353.474091,803.137268 356.503784,805.190613 359.561096,807.201843 
	C370.834015,814.617920 383.969452,813.823914 393.269348,804.170349 
	C415.912567,780.665833 438.330597,756.940186 460.569519,733.052368 
	C469.444611,723.519287 468.853180,711.489685 459.714111,702.229980 
	C452.227661,694.644775 444.563690,687.234192 436.948792,679.776428 
	C426.280273,669.328064 412.824463,669.051941 402.524658,679.852783 
	C378.620514,704.919556 354.916138,730.180664 331.398163,755.610352 
	C320.968933,766.887268 323.010162,781.576538 335.594025,790.576965 
	C340.331238,793.965210 345.086639,797.328003 350.431732,801.103271 
M538.619751,817.124817 
	C534.041138,821.963318 529.509399,826.847290 524.871704,831.628479 
	C519.421570,837.247131 517.074951,843.689514 520.104065,851.203857 
	C523.217468,858.927307 529.546021,862.155701 537.562622,862.036499 
	C555.192566,861.774231 572.868958,862.013367 590.435974,860.770203 
	C615.071045,859.026794 639.080750,853.416687 662.586243,845.908386 
	C674.614685,842.066162 678.466736,827.814453 669.705688,818.982849 
	C651.645386,800.777039 633.311279,782.836182 614.814026,765.073608 
	C606.572876,757.159912 595.291748,757.704407 586.976135,765.613464 
	C585.770508,766.760254 584.626465,767.974121 583.488098,769.188965 
	C568.684021,784.985474 553.885986,800.787720 538.619751,817.124817 
M506.151306,745.343689 
	C494.619202,731.732971 479.526306,733.457764 469.066437,746.241577 
	C466.331299,749.584412 463.124939,752.540833 460.143951,755.683228 
	C443.518280,773.209534 426.811798,790.660217 410.303131,808.296021 
	C400.506989,818.760925 403.501312,831.016663 416.946747,835.823669 
	C430.717682,840.747009 444.572296,845.438477 458.418427,850.148743 
	C471.297028,854.529846 482.147644,851.466309 491.452850,841.511902 
	C503.966034,828.125732 516.758301,814.999756 529.480347,801.809937 
	C539.896729,791.010742 539.713684,777.927063 528.899231,767.417786 
	C521.491272,760.218872 514.073853,753.029663 506.151306,745.343689 
M701.643616,753.146851 
	C713.263733,740.758057 724.913574,728.396912 736.492432,715.969604 
	C743.128784,708.846985 743.907166,698.019592 737.646423,691.423889 
	C729.399231,682.735291 720.905151,674.227844 711.957947,666.271362 
	C702.689575,658.029358 689.478638,658.585388 680.816040,667.537292 
	C662.868958,686.083801 645.134216,704.841797 627.608276,723.786865 
	C618.984680,733.108643 619.618958,745.710754 628.616760,754.739441 
	C636.491638,762.641418 644.479614,770.435913 652.579468,778.106995 
	C661.130066,786.204956 670.797302,785.839661 678.898376,777.299805 
	C686.347290,769.447144 693.737183,761.538452 701.643616,753.146851 
M809.960510,638.462158 
	C813.064819,635.208435 816.309570,632.076050 819.245117,628.676575 
	C826.113403,620.723206 825.977783,610.386230 818.650024,602.971008 
	C811.159729,595.391357 803.481750,587.980469 795.606018,580.802795 
	C786.110779,572.149231 772.653198,572.179871 763.573853,581.243896 
	C749.902466,594.892090 736.454895,608.780212 723.318787,622.943420 
	C714.082764,632.901733 714.636108,644.890808 724.118042,654.604736 
	C731.214600,661.874817 738.472595,668.988159 745.697571,676.131958 
	C755.902344,686.222229 765.116272,686.153015 774.941406,675.782410 
	C786.511536,663.569946 797.972656,651.254211 809.960510,638.462158 
M745.910278,204.315567 
	C746.539001,203.141464 747.218018,201.991241 747.788635,200.789536 
	C753.257935,189.271729 748.967468,175.636368 738.018372,169.685394 
	C727.390198,163.908875 714.054993,167.313766 707.609558,178.242111 
	C687.312012,212.656693 667.154968,247.156906 647.288513,281.821625 
	C639.633850,295.178131 647.369202,311.617462 662.334900,315.282928 
	C673.680176,318.061676 682.652344,313.588776 689.747925,301.354584 
	C708.373962,269.239746 726.929138,237.083755 745.910278,204.315567 
M456.162689,274.330627 
	C437.846863,242.806473 419.600159,211.241837 401.181061,179.778137 
	C393.858276,167.269287 380.240204,163.473083 368.684204,170.326187 
	C357.754242,176.808090 354.146881,190.953156 360.923859,202.706009 
	C380.630066,236.881119 400.473083,270.977966 420.414856,305.016205 
	C425.941742,314.449951 436.140961,318.053497 446.794128,314.985199 
	C456.575836,312.167877 463.162140,302.893616 463.174042,292.440979 
	C463.181732,285.687714 459.756134,280.403442 456.162689,274.330627 
M262.735870,295.494720 
	C249.881897,291.230865 238.285904,295.759003 232.878769,307.153625 
	C227.747513,317.966827 231.460663,329.746033 242.982559,336.584229 
	C277.158264,356.867432 311.437683,376.978485 345.817017,396.914581 
	C357.261780,403.551270 371.241608,399.594330 377.499146,388.643829 
	C383.840942,377.545898 379.786316,363.394379 368.313263,356.646820 
	C359.424866,351.419464 350.545471,346.176178 341.622253,341.008759 
	C315.577515,325.926331 289.512817,310.878326 262.735870,295.494720 
M324.306244,511.735901 
	C327.119690,511.486572 329.987427,511.503113 332.737152,510.941742 
	C344.381012,508.564636 351.247253,498.380981 350.077515,485.489716 
	C349.115723,474.890167 339.830139,465.929840 328.981628,465.898285 
	C288.174774,465.779602 247.366852,465.783722 206.560333,465.964661 
	C195.066559,466.015625 186.298187,474.735870 185.134918,486.352356 
	C183.977493,497.910431 191.002197,508.289185 202.001816,510.776764 
	C205.371582,511.538818 208.941391,511.652618 212.420364,511.659332 
	C249.396973,511.730713 286.373749,511.720612 324.306244,511.735901 
M572.311340,130.303146 
	C565.065735,121.764648 555.886230,119.103127 545.958191,122.662285 
	C536.402039,126.088120 530.979797,133.987885 530.960327,145.093170 
	C530.891846,184.242081 530.870789,223.391266 530.942505,262.540131 
	C530.967346,276.102356 541.075745,286.092773 554.257446,285.952972 
	C567.152222,285.816223 576.969116,275.778900 576.985229,262.432159 
	C577.032532,223.283157 577.126892,184.132812 576.788452,144.986557 
	C576.747681,140.275497 574.160217,135.586472 572.311340,130.303146 
M686.564880,809.710327 
	C697.257629,824.254883 711.994629,827.559570 727.761169,818.922668 
	C731.117126,817.084290 734.434998,815.175964 737.757629,813.277466 
	C756.009094,802.848511 773.608154,791.463806 789.445129,777.552612 
	C801.044678,767.363525 801.467773,752.908997 790.624878,742.155457 
	C784.709045,736.288330 778.901184,730.309631 772.894470,724.537537 
	C766.057556,717.967590 756.566711,717.927307 749.495667,724.260925 
	C748.381165,725.259094 747.369080,726.375183 746.343262,727.468262 
	C727.302307,747.757996 708.253174,768.040100 689.237549,788.353455 
	C683.466003,794.518921 682.565063,801.484497 686.564880,809.710327 
M836.966736,730.473938 
	C850.736694,714.981079 862.812805,698.280579 872.698303,680.043274 
	C878.706238,668.959717 877.384949,659.215881 868.769592,650.357788 
	C864.704102,646.177734 860.516663,642.115906 856.372620,638.012573 
	C848.146179,629.866943 838.424866,629.807312 830.549561,638.177734 
	C815.022888,654.680542 799.576233,671.260010 784.239502,687.939270 
	C776.728760,696.107483 777.162842,705.929443 785.034485,713.731873 
	C791.187805,719.831177 797.381836,725.889526 803.576538,731.946838 
	C813.845581,741.987976 826.691589,741.614258 836.966736,730.473938 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M189.828491,323.184509 
	C184.119049,339.054962 177.241821,354.780975 172.171494,371.069427 
	C143.360519,463.624695 148.321899,554.724426 185.090424,644.636841 
	C182.790405,640.353210 179.819397,635.894348 178.250687,630.987244 
	C172.407318,612.708496 166.065201,594.504211 161.754547,575.845886 
	C157.903412,559.176636 155.905777,542.004333 154.169296,524.944092 
	C152.661606,510.131500 151.910339,495.149689 152.214981,480.271088 
	C152.511917,465.768219 153.719925,451.161957 156.062607,436.852386 
	C159.341156,416.826599 162.980927,396.736023 168.451996,377.230164 
	C173.305008,359.927765 180.849701,343.378510 187.274460,326.522766 
	C187.725906,325.338379 188.741760,324.369141 189.828491,323.184509 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M923.200745,644.819336 
	C928.871033,627.158875 935.932434,609.648682 940.696716,591.534241 
	C963.483398,504.895203 957.517334,420.018555 923.457397,337.138000 
	C923.268250,336.677765 923.111267,336.204346 922.912170,335.354797 
	C925.092224,339.333862 927.694336,343.543152 929.441284,348.081573 
	C939.643616,374.586914 947.361633,401.797058 950.950684,430.016785 
	C952.764038,444.274902 953.859436,458.633392 954.943420,472.971893 
	C955.618408,481.899658 956.486450,490.936218 955.823059,499.816010 
	C954.445007,518.262024 952.433960,536.678467 950.076477,555.029053 
	C947.216370,577.293030 941.177673,598.853149 933.781616,619.998230 
	C930.844055,628.396545 926.977112,636.469849 923.200745,644.819336 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M718.821899,124.804634 
	C701.004883,118.627838 683.330994,111.221367 665.071167,105.782272 
	C610.866516,89.636238 555.591370,86.220787 499.564880,93.737785 
	C470.942749,97.577988 443.138611,104.604301 415.580383,114.326096 
	C419.617096,112.358543 423.872803,109.755211 428.494995,108.433571 
	C443.127411,104.249641 457.743317,99.750603 472.654572,96.868446 
	C488.989227,93.711151 505.628082,92.074715 522.168945,90.059616 
	C530.365234,89.061089 538.642029,88.137589 546.877319,88.179794 
	C559.788147,88.245956 572.722900,88.801712 585.594543,89.819595 
	C597.103638,90.729729 608.618713,92.099220 619.989990,94.077393 
	C633.322754,96.396805 646.765625,98.722290 659.686340,102.618431 
	C677.909119,108.113373 695.708374,115.018822 713.651306,121.425987 
	C715.464844,122.073570 717.021423,123.440834 718.821899,124.804634 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M697.012329,358.687164 
	C701.725891,356.300293 706.614258,353.227783 711.940674,351.855011 
	C755.155823,340.717041 798.441101,329.849792 841.733582,319.014526 
	C852.733093,316.261627 863.492859,317.395050 874.061646,322.404968 
	C870.315491,321.777771 866.376953,320.611847 862.354126,320.053406 
	C850.316833,318.382355 838.748596,321.119690 827.201904,324.096252 
	C809.094177,328.764069 790.945068,333.271027 772.820862,337.875275 
	C751.509155,343.289276 730.184387,348.654510 708.916809,354.237396 
	C704.949646,355.278778 701.226074,357.248077 697.012329,358.687164 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M897.026001,346.353455 
	C902.008789,354.677734 903.007202,364.231689 901.782227,373.900482 
	C897.209167,409.996002 892.343689,446.054504 887.585266,482.126526 
	C886.477234,490.525879 885.768188,499.006134 884.102905,507.293915 
	C882.976501,512.899963 880.497681,518.234314 878.342285,523.891418 
	C879.765320,517.065247 881.878052,510.107056 883.081360,502.994934 
	C885.032349,491.462616 886.434265,479.835663 887.982300,468.237244 
	C890.315552,450.754028 892.578796,433.261444 894.864868,415.771942 
	C896.894958,400.240387 899.482300,384.750580 900.665039,369.154480 
	C901.147156,362.796692 898.567078,356.208252 897.396606,349.721802 
	C897.221008,348.748932 897.135559,347.759766 897.026001,346.353455 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M511.324402,889.389954 
	C514.984802,889.137817 518.969604,888.880920 522.906616,889.204529 
	C579.558472,893.860840 634.620300,886.677002 688.058167,867.228210 
	C688.681396,867.001404 689.334167,866.855774 690.354553,866.611206 
	C689.933289,867.289124 689.254883,868.386230 688.309631,868.714172 
	C667.294983,876.005554 645.948120,881.984680 624.046265,886.116150 
	C595.834961,891.437805 567.385986,892.548218 538.820618,891.907288 
	C529.743713,891.703674 520.690613,890.435974 511.324402,889.389954 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M839.354248,500.892487 
	C842.967102,471.072876 846.961548,441.189117 850.959473,411.305786 
	C852.600586,399.038971 854.317261,386.781586 855.842773,374.500397 
	C856.187317,371.726257 855.878296,368.870941 855.824707,365.605957 
	C859.918823,366.461426 858.104187,369.959656 857.814941,372.197571 
	C855.084961,393.316620 851.935913,414.381042 849.128174,435.490540 
	C846.602539,454.479065 844.402405,473.510742 841.929749,492.506592 
	C841.562500,495.327881 840.485657,498.056824 839.354248,500.892487 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M853.908630,363.477722 
	C847.190552,365.223297 840.324646,366.356201 833.593872,368.032166 
	C797.976562,376.901245 762.393188,385.906860 726.409668,394.921234 
	C727.587341,394.061188 729.046082,392.722626 730.735962,392.292969 
	C752.334656,386.801239 773.972595,381.464050 795.588013,376.037445 
	C813.355408,371.576874 831.095886,367.007965 848.882446,362.625916 
	C850.397217,362.252777 852.170105,362.927643 853.908630,363.477722 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M397.373108,858.868774 
	C418.391632,865.455505 439.266754,873.018799 460.557556,879.135254 
	C473.970551,882.988525 488.005798,884.675720 501.952515,887.642822 
	C491.716888,886.346436 481.237305,885.025940 470.875214,883.079651 
	C447.168823,878.627014 424.421173,870.945984 402.122925,861.875977 
	C400.466248,861.202148 398.974182,860.123657 397.373108,858.868774 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M446.248901,538.929321 
	C463.629120,527.284424 481.928864,527.368408 500.855469,536.679688 
	C497.019897,535.679321 493.043701,533.977783 488.894897,533.214661 
	C476.165833,530.873169 463.583405,530.773132 451.695801,537.094727 
	C450.123383,537.930908 448.328369,538.348572 446.248901,538.929321 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M862.022461,540.413452 
	C846.708496,550.392456 830.919373,550.059753 814.824219,540.796021 
	C815.986328,540.831726 817.492554,540.842834 818.739258,541.417114 
	C832.227783,547.630981 845.576599,547.879028 858.855896,540.799622 
	C859.656433,540.372864 860.708496,540.417847 862.022461,540.413452 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M586.680054,631.034546 
	C570.204834,639.947998 553.547485,639.315063 536.898926,629.599976 
	C541.220520,630.626465 545.905945,631.528564 550.229553,633.309326 
	C561.282593,637.861633 571.862305,635.894714 582.443115,631.835144 
	C583.647583,631.372986 584.993042,631.278381 586.680054,631.034546 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M579.922119,740.290894 
	C562.324585,749.093384 544.616638,747.708191 526.906799,738.623047 
	C528.564392,738.790649 530.516663,739.018555 532.296143,739.698669 
	C541.802368,743.331665 551.444092,746.148010 561.751465,744.180786 
	C567.713745,743.042847 573.601868,741.516296 579.922119,740.290894 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M682.854126,413.826233 
	C675.010254,400.147736 675.890564,386.187775 683.666504,372.119446 
	C682.653320,376.130005 681.123108,380.287079 680.115906,384.567230 
	C678.155151,392.899902 678.571228,401.135315 681.873352,409.148315 
	C682.425598,410.488556 682.578918,411.993256 682.854126,413.826233 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M396.920532,121.283249 
	C385.455444,127.256470 373.597626,133.106232 361.382050,139.004059 
	C361.683014,138.204788 362.161865,136.991745 363.027863,136.565796 
	C373.512543,131.408554 384.049744,126.357689 394.594574,121.323784 
	C395.140625,121.063110 395.878967,121.205200 396.920532,121.283249 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M752.357056,426.088196 
	C758.056030,439.061890 756.244019,451.709900 748.403198,463.964905 
	C749.433960,460.496613 750.705383,456.826538 752.091431,453.200287 
	C755.491821,444.304199 753.838135,435.405823 752.357056,426.088196 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M478.745667,575.896057 
	C473.467529,574.900757 469.285278,576.874756 465.738373,580.972534 
	C462.820129,584.343933 459.669403,587.514160 456.320709,590.922180 
	C456.109833,590.253845 455.883942,589.110229 456.338745,588.670227 
	C461.073792,584.089355 465.655487,579.272583 470.890076,575.331970 
	C472.490845,574.126953 475.967682,575.414062 478.745667,575.896057 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M679.811890,640.062256 
	C675.024292,645.662231 669.879944,651.270203 664.434082,657.024597 
	C664.337036,656.071411 664.154480,654.578674 664.808105,653.934814 
	C669.596375,649.217834 674.552185,644.670776 679.811890,640.062256 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M189.247452,655.089050 
	C193.303177,662.483337 197.253647,670.268372 201.287857,678.407288 
	C200.906693,678.608643 200.165054,678.589661 200.017288,678.283813 
	C196.354141,670.700867 192.753754,663.087585 189.247452,655.089050 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M279.101257,198.465759 
	C274.323700,203.791550 269.201813,208.951630 263.801453,214.271393 
	C263.422516,213.951675 263.070770,213.211487 263.258179,213.030899 
	C268.390869,208.085739 273.578461,203.197647 279.101257,198.465759 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M510.875061,605.836426 
	C505.538757,601.151672 500.221436,596.108887 494.740479,590.789856 
	C495.350983,590.540405 496.459381,590.242615 496.848358,590.643250 
	C501.591553,595.528687 506.229095,600.516846 510.875061,605.836426 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M907.327637,677.947266 
	C910.678284,670.377991 914.376526,662.761963 918.313843,654.909546 
	C918.447632,655.937439 918.715942,657.395935 918.176086,658.434326 
	C914.775696,664.974976 911.195862,671.422302 907.327637,677.947266 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M741.723511,136.005768 
	C734.282715,132.787521 726.798767,129.210236 719.094788,125.362442 
	C722.074402,126.134178 725.430969,126.849953 728.437012,128.294952 
	C732.979736,130.478638 737.278198,133.170670 741.723511,136.005768 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M292.077026,766.351074 
	C288.949432,774.583984 289.292267,782.741760 293.454346,791.111145 
	C288.104218,787.788025 288.779022,781.750610 288.548523,776.511658 
	C288.402771,773.199097 290.576355,769.784546 292.077026,766.351074 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M310.855957,745.079712 
	C306.496246,750.084717 301.777435,755.090698 296.783539,760.261658 
	C296.537170,759.649719 296.241302,758.538208 296.644409,758.147156 
	C301.200043,753.727905 305.862793,749.419067 310.855957,745.079712 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M447.689972,663.974609 
	C442.060272,657.170776 442.315582,649.420959 445.660583,641.152832 
	C445.623810,643.837830 444.807892,646.825317 445.117004,649.691345 
	C445.620941,654.364075 446.859222,658.957581 447.689972,663.974609 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M239.367126,731.903198 
	C246.963623,734.619385 254.518250,734.679932 262.301636,730.665894 
	C262.430817,731.132874 262.357513,732.071106 261.949371,732.251404 
	C254.461716,735.559082 246.935852,736.887634 239.367126,731.903198 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M355.870819,697.082153 
	C352.042725,701.678467 347.854401,706.274353 343.357513,711.011230 
	C344.178864,709.123352 344.967010,706.771057 346.513702,705.136597 
	C349.270935,702.222900 352.486603,699.742981 355.870819,697.082153 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M693.910034,522.093567 
	C690.064758,526.675659 685.856873,531.251465 681.341125,535.965454 
	C682.408936,533.850403 683.473633,531.308228 685.234863,529.413513 
	C687.737122,526.721802 690.751709,524.506348 693.910034,522.093567 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M401.824707,648.114258 
	C398.000427,652.687500 393.818481,657.246338 389.333679,661.952393 
	C390.567108,659.686707 391.817810,657.014282 393.712982,654.927063 
	C396.013550,652.393311 398.858002,650.353455 401.824707,648.114258 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M418.880066,630.086487 
	C415.033234,634.648193 410.825714,639.207092 406.313934,643.907959 
	C407.861115,637.317810 413.529236,634.004395 418.880066,630.086487 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M459.215149,629.801880 
	C465.955322,626.426392 472.605865,628.003784 479.158478,632.346741 
	C472.798309,631.717529 466.245514,630.808838 459.215149,629.801880 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M520.119690,553.169189 
	C524.454773,556.881287 528.772888,560.951233 533.232300,565.317322 
	C531.404419,564.395691 529.161987,563.462708 527.527954,561.895508 
	C524.845215,559.322510 522.557190,556.338013 520.119690,553.169189 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M528.115417,680.174377 
	C532.429321,683.919861 536.727783,688.022949 541.162659,692.429016 
	C536.899414,688.665283 532.499634,684.598694 528.115417,680.174377 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M727.881592,486.086548 
	C724.363953,490.306824 720.485596,494.524597 716.304810,498.886353 
	C717.610352,492.729462 722.807434,489.621887 727.881592,486.086548 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M710.838867,504.124268 
	C707.350952,508.378174 703.504700,512.612854 699.350342,516.986938 
	C700.479675,510.699402 705.819946,507.700836 710.838867,504.124268 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M663.819580,657.112427 
	C660.317566,661.326782 656.458435,665.528381 652.299072,669.878052 
	C653.642029,663.785706 658.794556,660.657654 663.819580,657.112427 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M386.863586,664.079590 
	C383.356903,668.311768 379.490417,672.543823 375.315704,676.909180 
	C376.587799,670.724609 381.817352,667.642883 386.863586,664.079590 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M340.828339,713.117126 
	C337.339264,717.360962 333.492371,721.589417 329.337830,725.955322 
	C330.515472,719.712219 335.816040,716.691467 340.828339,713.117126 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M691.103638,866.747681 
	C697.120239,863.988708 703.536011,861.340515 710.317932,858.610229 
	C704.290344,861.304871 697.896545,864.081665 691.103638,866.747681 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M676.856384,540.137695 
	C673.525757,544.150330 669.835876,548.137207 665.874878,552.288086 
	C666.154297,551.051697 666.347595,549.294922 667.322449,548.317810 
	C670.215576,545.417786 673.416504,542.824890 676.856384,540.137695 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M808.941040,535.781982 
	C804.941956,532.406982 800.931091,528.677612 796.782593,524.648682 
	C800.739746,528.041992 804.834534,531.734802 808.941040,535.781982 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M631.904297,691.091675 
	C628.714233,694.978943 625.161682,698.860596 621.304077,702.879639 
	C622.300354,697.084656 627.125732,694.266174 631.904297,691.091675 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M712.822876,605.113892 
	C709.668274,609.011658 706.156250,612.895142 702.342651,616.923401 
	C703.193481,611.055908 708.155640,608.361755 712.822876,605.113892 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M744.831299,571.119629 
	C741.664062,575.010376 738.138855,578.884155 734.309387,582.899170 
	C735.244019,577.087708 740.130615,574.333679 744.831299,571.119629 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M699.176758,451.885254 
	C701.536926,448.182953 704.254761,444.494507 706.878662,440.447327 
	C710.651367,440.685059 708.716370,443.159607 707.701904,444.288818 
	C705.224792,447.046021 702.286926,449.389252 699.176758,451.885254 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M631.171448,627.880981 
	C634.131775,624.209290 637.449768,620.553467 641.024780,616.723511 
	C640.575134,618.143677 640.218933,620.070740 639.088013,621.262573 
	C636.790039,623.684265 634.073303,625.708679 631.171448,627.880981 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M582.158691,575.871704 
	C585.170654,572.202087 588.540955,568.553223 592.182495,564.736084 
	C591.382446,570.308960 586.665833,572.851562 582.158691,575.871704 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M415.126709,569.918457 
	C418.139648,566.245850 421.513123,562.574402 425.155151,558.732788 
	C424.398499,564.349243 419.629364,566.860107 415.126709,569.918457 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M494.122375,647.165527 
	C497.775238,650.233704 501.409912,653.659973 505.187378,657.384277 
	C501.588196,654.296082 497.846191,650.909851 494.122375,647.165527 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M781.859436,532.080566 
	C778.858948,535.758362 775.499023,539.436646 771.867798,543.278748 
	C772.574768,537.630615 777.390320,535.163391 781.859436,532.080566 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M547.091614,698.198730 
	C552.148010,700.741211 557.371460,701.267151 563.140503,698.591614 
	C559.632935,703.218628 552.137268,703.275024 547.091614,698.198730 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M414.866119,114.202919 
	C409.530182,116.641914 403.790222,118.994118 397.680267,121.412987 
	C403.027557,119.025139 408.744843,116.570633 414.866119,114.202919 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M276.162567,717.872986 
	C279.006409,714.334839 282.208313,710.815552 285.710510,707.151001 
	C282.847412,710.634399 279.684021,714.263123 276.162567,717.872986 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M292.185028,700.891113 
	C295.020752,697.348694 298.213531,693.817200 301.706207,690.139038 
	C298.851410,693.628967 295.696716,697.265503 292.185028,700.891113 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M704.910034,437.881470 
	C701.344910,435.036377 697.783691,431.830566 694.074951,428.323059 
	C699.459961,429.024750 702.077820,433.398987 704.910034,437.881470 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M728.818909,588.111938 
	C725.977417,591.643616 722.778748,595.162659 719.278564,598.822388 
	C722.138550,595.341736 725.300110,591.720520 728.818909,588.111938 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M762.782349,552.088257 
	C759.963867,555.646606 756.790466,559.203857 753.310974,562.897949 
	C754.019653,557.555725 758.420532,554.990967 762.782349,552.088257 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M451.854004,595.080200 
	C449.159088,598.415710 446.105164,601.751892 442.775909,605.253235 
	C445.498718,601.972534 448.496857,598.526672 451.854004,595.080200 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M840.685425,210.026611 
	C837.349548,207.285965 834.116577,204.185425 830.725098,200.806107 
	C835.965820,201.345871 838.343445,205.543900 840.685425,210.026611 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M434.875000,613.080200 
	C432.190338,616.425354 429.144745,619.769958 425.821289,623.273438 
	C426.250885,618.003479 430.713135,615.828125 434.875000,613.080200 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M617.130859,538.918823 
	C619.821960,535.579956 622.873352,532.241333 626.199585,528.738159 
	C625.732544,533.978149 621.299561,536.177490 617.130859,538.918823 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M922.857178,334.234741 
	C920.525940,329.701477 918.246033,324.739349 915.936340,319.405304 
	C918.240540,323.957550 920.574524,328.881683 922.857178,334.234741 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M722.093079,853.758606 
	C726.139465,851.356323 730.576538,849.057190 735.365723,846.675598 
	C731.306458,849.015991 726.895081,851.438904 722.093079,853.758606 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M686.264526,368.938538 
	C688.700500,365.989105 691.487976,363.026672 694.601440,359.972534 
	C692.156921,362.895782 689.386414,365.910706 686.264526,368.938538 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M370.794861,681.094910 
	C368.471924,684.100647 365.792908,687.101318 362.843903,690.269409 
	C362.818146,685.320679 367.087250,683.591309 370.794861,681.094910 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M309.169739,682.880005 
	C311.502777,679.878479 314.193848,676.893066 317.150513,673.734741 
	C317.167389,678.685120 312.928101,680.436096 309.169739,682.880005 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M694.818726,624.111633 
	C692.466980,627.112732 689.757812,630.101379 686.772705,633.254333 
	C689.151672,630.312195 691.806519,627.205688 694.818726,624.111633 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M658.817505,559.109253 
	C656.441772,562.105774 653.708679,565.090088 650.685364,568.224976 
	C653.083496,565.282776 655.771790,562.189941 658.817505,559.109253 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M501.059357,537.287048 
	C504.268280,539.086243 507.498810,541.241699 510.882263,543.696167 
	C507.717102,541.877808 504.399017,539.760620 501.059357,537.287048 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M830.330566,778.996643 
	C832.610229,776.294983 835.258545,773.594971 838.180176,770.730408 
	C838.089661,775.419006 834.637939,777.432617 830.330566,778.996643 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M651.122559,502.914368 
	C653.183472,500.249634 655.605591,497.586945 658.319275,494.776093 
	C656.235107,497.390747 653.859436,500.153564 651.122559,502.914368 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M324.824493,730.114807 
	C322.794861,732.783569 320.406891,735.437805 317.735229,738.247375 
	C319.789734,735.635254 322.127930,732.867737 324.824493,730.114807 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M385.158875,601.870361 
	C387.194275,599.203857 389.588562,596.557556 392.267700,593.756592 
	C390.207642,596.364807 387.862701,599.127686 385.158875,601.870361 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M635.162598,519.875366 
	C637.200989,517.206848 639.598267,514.557495 642.284851,511.759064 
	C640.223267,514.371460 637.872437,517.132935 635.162598,519.875366 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M570.158325,692.922241 
	C572.182373,690.252747 574.565247,687.580688 577.224609,684.745239 
	C575.173096,687.361206 572.845093,690.140442 570.158325,692.922241 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M600.110718,556.912170 
	C602.141296,554.239136 604.534058,551.569885 607.201538,548.736450 
	C605.141846,551.353577 602.807373,554.134705 600.110718,556.912170 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M355.177673,633.885132 
	C357.201874,631.217407 359.584106,628.563965 362.247192,625.751831 
	C360.197327,628.361816 357.866516,631.130676 355.177673,633.885132 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M586.173950,675.883423 
	C588.172119,673.206299 590.528625,670.544006 593.158752,667.719788 
	C593.398499,672.212830 589.645264,673.790771 586.173950,675.883423 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M325.117828,665.913513 
	C327.146454,663.243958 329.536713,660.577759 332.197449,657.742249 
	C330.138428,660.354248 327.808960,663.135559 325.117828,665.913513 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M244.885300,235.087738 
	C243.038452,237.978546 240.826233,240.868011 238.320862,243.921539 
	C240.191772,241.085876 242.355850,238.086136 244.885300,235.087738 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M909.533691,306.036713 
	C907.499146,302.922424 905.631531,299.451569 903.678284,295.630127 
	C905.628662,298.746460 907.664673,302.213318 909.533691,306.036713 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M731.116943,401.173187 
	C733.666565,403.007416 736.200378,405.201691 738.873291,407.699249 
	C736.375244,405.846069 733.738220,403.689667 731.116943,401.173187 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M647.172119,610.880615 
	C648.873779,608.544983 650.934814,606.224487 653.283813,603.755371 
	C651.558411,606.036499 649.544922,608.466125 647.172119,610.880615 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M551.089966,583.112061 
	C553.407837,584.870483 555.721497,586.991455 558.173950,589.411987 
	C555.903748,587.632629 553.494812,585.553650 551.089966,583.112061 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M400.177673,585.884033 
	C401.885895,583.559021 403.953064,581.248596 406.302856,578.779541 
	C404.569214,581.046875 402.552948,583.472717 400.177673,585.884033 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M600.835876,724.125244 
	C599.042725,726.408569 596.890686,728.672791 594.422729,731.047485 
	C596.230225,728.807434 598.353638,726.456787 600.835876,724.125244 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M742.843140,470.130371 
	C741.130737,472.464996 739.058167,474.778839 736.693726,477.237244 
	C738.428894,474.957733 740.455872,472.533661 742.843140,470.130371 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M435.198120,548.900330 
	C436.986450,546.622437 439.131805,544.351746 441.593445,541.971313 
	C439.791534,544.210327 437.673340,546.558899 435.198120,548.900330 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M684.167969,467.877808 
	C685.854614,465.541168 687.901062,463.221863 690.225586,460.742798 
	C688.511719,463.020386 686.519775,465.457794 684.167969,467.877808 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M620.828491,599.119446 
	C619.116943,601.448059 617.045959,603.760254 614.686646,606.223633 
	C616.421936,603.950806 618.445496,601.526978 620.828491,599.119446 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M601.186218,659.889404 
	C602.855835,657.554321 604.884094,655.230286 607.182007,652.738159 
	C605.482727,655.013550 603.513794,657.457031 601.186218,659.889404 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M371.138306,616.919556 
	C372.834473,614.584473 374.892151,612.248657 377.223663,609.746948 
	C375.498260,612.027039 373.499023,614.472961 371.138306,616.919556 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M465.876923,681.834778 
	C463.551636,680.117004 461.243988,678.039429 458.783997,675.673767 
	C461.052582,677.415405 463.473572,679.445190 465.876923,681.834778 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M447.302795,638.954346 
	C449.078522,636.689026 451.202545,634.400208 453.657776,632.042480 
	C451.876343,634.292664 449.763702,636.611755 447.302795,638.954346 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M794.695984,522.038208 
	C790.380188,520.604492 790.033630,525.368164 787.300293,526.865173 
	C788.066711,521.725159 791.117310,519.611694 794.695984,522.038208 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M340.195160,649.895874 
	C341.891083,647.567261 343.945038,645.247070 346.280029,642.767273 
	C344.558441,645.039917 342.555786,647.472168 340.195160,649.895874 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M324.906250,161.206970 
	C322.774200,163.183868 320.260345,165.074097 317.413513,167.047760 
	C319.561829,165.127563 322.043121,163.123947 324.906250,161.206970 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M309.088654,806.226379 
	C311.631409,807.708130 314.176392,809.549744 316.887451,811.680664 
	C314.399292,810.175415 311.745087,808.380859 309.088654,806.226379 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M236.871002,245.086060 
	C235.387726,247.660812 233.537964,250.236115 231.396606,252.977417 
	C232.904846,250.457825 234.704681,247.772217 236.871002,245.086060 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M342.567810,829.796692 
	C345.369446,831.083496 348.054962,832.719177 350.931091,834.634094 
	C348.231689,833.324036 345.341705,831.734863 342.567810,829.796692 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M257.876770,220.083450 
	C256.368835,222.315231 254.495178,224.546249 252.323380,226.928986 
	C253.853851,224.748062 255.682480,222.415375 257.876770,220.083450 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M290.626343,187.992310 
	C288.905334,189.969360 286.817566,191.949417 284.415314,194.040894 
	C286.153717,192.099976 288.206635,190.047638 290.626343,187.992310 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M823.923035,193.843658 
	C821.927734,192.488281 819.929077,190.770355 817.753906,188.789337 
	C819.691467,190.177872 821.805542,191.829483 823.923035,193.843658 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M646.837402,675.129150 
	C645.480957,677.128296 643.762390,679.108521 641.769958,681.251465 
	C643.155823,679.312866 644.815613,677.211548 646.837402,675.129150 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M918.869629,654.623169 
	C919.797424,651.546692 921.088257,648.440186 922.644104,645.105347 
	C921.683594,648.115662 920.458130,651.354431 918.869629,654.623169 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M667.183655,485.886353 
	C668.582397,483.898010 670.341125,481.921875 672.399536,479.812256 
	C670.980652,481.752075 669.262146,483.825317 667.183655,485.886353 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M883.932983,262.753204 
	C882.291748,260.992523 880.678955,258.851654 878.989746,256.379333 
	C880.596130,258.156219 882.278809,260.264618 883.932983,262.753204 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M711.071533,858.710388 
	C713.431152,857.280212 716.176392,855.974609 719.270508,854.578979 
	C716.898682,855.937622 714.177917,857.386292 711.071533,858.710388 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M594.048706,626.409302 
	C592.184937,628.031677 589.959900,629.511963 587.389282,631.037476 
	C589.258301,629.477539 591.472778,627.872314 594.048706,626.409302 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M250.800980,228.069077 
	C249.652618,229.974304 248.139481,231.889603 246.334229,233.966949 
	C247.506821,232.112366 248.971512,230.095764 250.800980,228.069077 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M493.574768,589.080566 
	C491.676971,587.838074 489.928345,586.236633 488.036316,584.335205 
	C489.836578,585.597412 491.780273,587.159546 493.574768,589.080566 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M900.829712,689.532654 
	C901.751526,687.059753 903.040833,684.651917 904.609314,682.048462 
	C903.658081,684.434448 902.427673,687.016113 900.829712,689.532654 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M817.348999,790.999634 
	C818.749023,789.337708 820.520386,787.675964 822.605286,785.895264 
	C821.185974,787.517456 819.453186,789.258606 817.348999,790.999634 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M616.870483,707.082520 
	C615.794556,708.739746 614.351746,710.397339 612.614746,712.193726 
	C613.714905,710.582581 615.109253,708.832825 616.870483,707.082520 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M497.915131,712.862305 
	C496.264130,711.776184 494.611694,710.324890 492.829193,708.573364 
	C494.437317,709.681152 496.175507,711.089172 497.915131,712.862305 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M882.899170,717.615601 
	C883.849731,715.536804 885.166748,713.484436 886.755371,711.243591 
	C885.773132,713.250793 884.519287,715.446411 882.899170,717.615601 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M617.166382,642.871338 
	C618.218384,641.212585 619.635132,639.571228 621.338501,637.783386 
	C620.260437,639.387512 618.895813,641.138123 617.166382,642.871338 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M530.890869,624.807007 
	C529.218872,623.808716 527.555481,622.445496 525.728394,620.814941 
	C527.342957,621.845703 529.121155,623.143860 530.890869,624.807007 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M559.362854,590.932007 
	C561.820740,590.624390 564.352600,590.692566 567.206055,590.621826 
	C565.296936,595.329834 562.329651,592.953918 559.362854,590.932007 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M847.179077,761.881287 
	C848.233765,760.226440 849.652344,758.585449 851.358276,756.797546 
	C850.278137,758.398804 848.910583,760.146973 847.179077,761.881287 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M854.602173,225.064575 
	C852.997192,223.839310 851.533630,222.258011 849.949341,220.367569 
	C851.466858,221.608475 853.105225,223.158524 854.602173,225.064575 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M359.299316,839.969421 
	C361.487549,840.724365 363.706451,841.843567 366.158508,843.181946 
	C364.037781,842.378662 361.683868,841.356140 359.299316,839.969421 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M889.013123,334.297302 
	C890.427612,335.615631 891.835754,337.303101 893.353088,339.302155 
	C891.977173,337.964630 890.491943,336.315521 889.013123,334.297302 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M768.949280,827.543884 
	C770.387634,826.173340 772.175476,824.967163 774.272217,823.643066 
	C772.820312,824.919434 771.059570,826.313843 768.949280,827.543884 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M205.736542,292.082092 
	C205.087204,294.015747 204.080154,295.979004 202.858002,298.171356 
	C203.554886,296.304199 204.466858,294.207947 205.736542,292.082092 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M879.449036,325.854187 
	C881.273621,326.783844 883.035034,328.078369 884.949829,329.669739 
	C883.197510,328.717407 881.291687,327.468231 879.449036,325.854187 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M297.652100,182.002090 
	C296.576935,183.317947 295.129547,184.633209 293.370056,186.054993 
	C294.465302,184.774826 295.872589,183.388168 297.652100,182.002090 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M299.065033,798.223755 
	C300.632538,799.019348 302.214905,800.182617 303.955261,801.633667 
	C302.435486,800.811462 300.757721,799.701416 299.065033,798.223755 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M810.346924,797.000732 
	C811.417297,795.675049 812.861206,794.348999 814.617249,792.914124 
	C813.526428,794.203674 812.123474,795.601990 810.346924,797.000732 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M304.079590,802.252930 
	C305.651855,803.034302 307.233337,804.182373 308.972839,805.617859 
	C307.450165,804.810059 305.769501,803.714844 304.079590,802.252930 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M308.752686,173.063721 
	C307.645233,174.374435 306.159760,175.657196 304.357849,177.038177 
	C305.485840,175.769547 306.930237,174.402679 308.752686,173.063721 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M913.981323,314.662659 
	C912.858765,313.089264 911.750244,311.123138 910.547485,308.833862 
	C911.633972,310.430420 912.814697,312.350159 913.981323,314.662659 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M856.193970,751.927002 
	C857.024414,750.385071 858.221863,748.833374 859.708740,747.128296 
	C858.852417,748.622375 857.706726,750.269775 856.193970,751.927002 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M186.184357,648.129517 
	C187.272385,649.840454 188.282913,651.938232 189.358810,654.391418 
	C188.318405,652.670044 187.212646,650.593201 186.184357,648.129517 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M808.885742,180.806702 
	C807.314880,180.003738 805.752686,178.830521 804.039734,177.366241 
	C805.557434,178.195602 807.225830,179.316025 808.885742,180.806702 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M860.997681,232.654877 
	C859.667542,231.585556 858.338196,230.142365 856.902466,228.385590 
	C858.196899,229.475021 859.597717,230.878021 860.997681,232.654877 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M221.390717,711.960693 
	C222.690216,713.141724 223.852951,714.688904 225.095367,716.559448 
	C223.868011,715.364136 222.560974,713.845520 221.390717,711.960693 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M873.910767,248.788116 
	C872.615234,247.669067 871.357788,246.172089 870.013550,244.357544 
	C871.267456,245.496719 872.608154,246.953461 873.910767,248.788116 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M752.621399,142.102356 
	C750.815979,141.541916 749.025269,140.606705 747.041443,139.393860 
	C748.777588,139.986679 750.706848,140.857147 752.621399,142.102356 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M871.868774,532.084839 
	C871.070618,533.379150 869.906738,534.673340 868.432007,536.071655 
	C869.248474,534.812195 870.375793,533.448425 871.868774,532.084839 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M585.745728,737.060547 
	C584.418823,738.155823 582.713135,739.224731 580.677490,740.376953 
	C582.020691,739.318176 583.693787,738.176208 585.745728,737.060547 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M209.099152,286.377472 
	C208.517197,288.160919 207.562164,289.930664 206.336166,291.898804 
	C206.952164,290.186035 207.839127,288.274902 209.099152,286.377472 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M741.250549,843.935364 
	C742.604980,842.863403 744.337280,841.818787 746.403015,840.691162 
	C745.033752,841.726379 743.331055,842.844543 741.250549,843.935364 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M391.188538,856.186340 
	C392.990997,856.591980 394.917450,857.338928 397.082672,858.321716 
	C395.318512,857.880920 393.315521,857.204285 391.188538,856.186340 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M194.026108,314.298828 
	C193.588089,316.127258 192.775558,317.992035 191.732117,320.093628 
	C192.218002,318.332001 192.934799,316.333557 194.026108,314.298828 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M749.327759,420.026978 
	C750.440430,421.401276 751.414612,423.151306 752.468628,425.230286 
	C751.428650,423.840393 750.308960,422.121552 749.327759,420.026978 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M380.272705,851.013977 
	C382.098785,851.456360 383.981445,852.267273 386.095337,853.320740 
	C384.327515,852.836365 382.328430,852.109436 380.272705,851.013977 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M503.301331,888.378906 
	C505.268311,888.184998 507.528961,888.256104 509.964081,888.636597 
	C507.957367,888.845337 505.776215,888.744629 503.301331,888.378906 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M901.927490,291.759064 
	C900.953064,290.650085 900.008545,289.164062 899.020203,287.343750 
	C899.970093,288.466949 900.963806,289.924500 901.927490,291.759064 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M213.161530,279.466614 
	C212.714615,281.007599 211.894379,282.481750 210.856033,284.175903 
	C211.354675,282.730530 212.071442,281.065186 213.161530,279.466614 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M866.735474,537.050171 
	C865.775879,538.139954 864.441956,539.207397 862.814697,540.398743 
	C863.801331,539.357727 865.081238,538.192749 866.735474,537.050171 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M523.564697,736.135742 
	C522.072632,735.557373 520.634399,734.607178 519.041565,733.366943 
	C520.464172,733.972534 522.041382,734.868225 523.564697,736.135742 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M897.855591,694.555298 
	C898.306274,693.017212 899.130737,691.529480 900.177246,689.821594 
	C899.675964,691.269531 898.952698,692.937622 897.855591,694.555298 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M874.296875,322.969666 
	C875.834167,323.382996 877.403748,324.166443 879.187622,325.187592 
	C877.710999,324.730103 876.020142,324.034912 874.296875,322.969666 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M791.313354,811.977905 
	C792.245483,810.897583 793.549072,809.828064 795.129089,808.616699 
	C794.165344,809.646240 792.925049,810.817505 791.313354,811.977905 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M352.353607,835.921997 
	C353.890717,836.374695 355.427979,837.199341 357.175812,838.264832 
	C355.708862,837.768433 354.031311,837.031189 352.353607,835.921997 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M203.416992,682.960571 
	C204.453918,684.097656 205.340714,685.588623 206.310181,687.404724 
	C205.350845,686.258057 204.308868,684.786316 203.416992,682.960571 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M760.309692,832.972778 
	C761.371094,831.964172 762.809509,830.967651 764.577271,829.910278 
	C763.499939,830.894531 762.093323,831.939636 760.309692,832.972778 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M757.669434,145.046021 
	C756.148743,144.603745 754.612732,143.783539 752.864258,142.720581 
	C754.319275,143.207916 755.986694,143.937988 757.669434,145.046021 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M878.961914,255.716263 
	C877.880859,254.751312 876.817749,253.413971 875.622314,251.788071 
	C876.653320,252.780960 877.816528,254.062424 878.961914,255.716263 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M358.042694,140.453522 
	C356.938812,141.506607 355.484863,142.394562 353.720886,143.383698 
	C354.838104,142.419373 356.265381,141.353897 358.042694,140.453522 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M316.751526,167.062897 
	C315.980988,168.042465 314.833008,168.994217 313.370728,170.021881 
	C314.162323,169.076874 315.268188,168.055969 316.751526,167.062897 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M804.352356,801.998230 
	C805.069275,800.996765 806.160706,799.994873 807.558899,798.900635 
	C806.819397,799.871521 805.773132,800.934631 804.352356,801.998230 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M794.926514,169.724518 
	C793.687866,169.286575 792.431274,168.477921 791.014893,167.388336 
	C792.206299,167.856201 793.557373,168.605011 794.926514,169.724518 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M790.899902,166.773132 
	C789.645020,166.337402 788.385864,165.525650 786.973389,164.428436 
	C788.178589,164.894363 789.537109,165.645737 790.899902,166.773132 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M687.979187,421.711304 
	C687.002258,420.945862 686.033020,419.807709 685.001709,418.350952 
	C685.955322,419.134399 686.971069,420.236511 687.979187,421.711304 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M746.397827,415.936157 
	C747.447083,416.723755 748.354553,417.863983 749.362732,419.306763 
	C748.394287,418.502502 747.325134,417.395660 746.397827,415.936157 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M210.413681,694.955139 
	C211.368027,695.834839 212.177429,697.071350 213.036743,698.630615 
	C212.147354,697.739563 211.208038,696.525696 210.413681,694.955139 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M895.203979,698.880615 
	C895.545776,697.597778 896.256897,696.301575 897.200439,694.797852 
	C896.813049,696.016052 896.193176,697.441711 895.203979,698.880615 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M442.244171,541.931641 
	C443.002014,540.934265 444.139557,539.965698 445.594147,538.927795 
	C444.815430,539.892456 443.719635,540.926453 442.244171,541.931641 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M302.621765,177.991928 
	C301.884064,178.979141 300.775269,179.969940 299.356628,181.050415 
	C300.114777,180.091904 301.182739,179.043716 302.621765,177.991928 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M869.967712,243.695129 
	C868.959717,242.951508 867.964844,241.827759 866.875732,240.391846 
	C867.848022,241.158112 868.914429,242.236557 869.967712,243.695129 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M787.278076,814.957092 
	C788.052429,813.993469 789.200134,813.048828 790.660095,812.024902 
	C789.865356,812.955811 788.758362,813.965942 787.278076,814.957092 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M317.053070,812.315308 
	C318.278748,812.756165 319.532684,813.562500 320.944946,814.649902 
	C319.762634,814.180847 318.421967,813.430786 317.053070,812.315308 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M803.920776,176.746094 
	C802.722839,176.258926 801.513062,175.405426 800.142578,174.274796 
	C801.290833,174.791702 802.599915,175.585754 803.920776,176.746094 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M312.721680,170.045059 
	C311.967896,171.032761 310.837128,172.001022 309.394440,173.051361 
	C310.169922,172.097504 311.257294,171.061569 312.721680,170.045059 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M861.237305,745.935730 
	C861.591431,744.947449 862.317505,743.939148 863.310242,742.772705 
	C862.921082,743.714966 862.265259,744.815369 861.237305,745.935730 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M814.913574,185.833939 
	C813.925415,185.483047 812.929138,184.752396 811.758789,183.770294 
	C812.691650,184.163940 813.798584,184.809067 814.913574,185.833939 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M795.920471,808.523438 
	C796.498230,807.575195 797.424561,806.794434 798.650879,805.933594 
	C798.056885,806.799316 797.162964,807.745117 795.920471,808.523438 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M864.638245,237.039139 
	C863.689758,236.484787 862.863892,235.567520 861.946411,234.349289 
	C862.823425,234.924301 863.792175,235.800262 864.638245,237.039139 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M535.337646,567.975342 
	C536.345642,568.376221 537.243652,569.160461 538.292358,570.200562 
	C537.371277,569.757202 536.299500,569.057983 535.337646,567.975342 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M569.029907,589.732300 
	C569.453125,588.734436 570.256775,587.813660 571.335632,586.757568 
	C570.877380,587.684692 570.143860,588.747009 569.029907,589.732300 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M518.918640,732.745361 
	C517.928711,732.385376 516.926270,731.655762 515.780334,730.650085 
	C516.726624,731.041321 517.816406,731.708557 518.918640,732.745361 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M213.039398,699.284302 
	C213.795105,699.942688 214.532394,700.975159 215.372147,702.310303 
	C214.656738,701.628052 213.838867,700.643311 213.039398,699.284302 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M892.868286,702.575500 
	C893.106262,701.427917 893.722656,700.313660 894.607422,699.020508 
	C894.332764,700.097412 893.789734,701.353088 892.868286,702.575500 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M765.236267,829.925293 
	C765.862671,829.161682 766.870483,828.431580 768.163696,827.579346 
	C767.505249,828.291077 766.561462,829.124939 765.236267,829.925293 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M750.214844,838.913452 
	C750.932495,838.173218 752.025085,837.472107 753.440430,836.699219 
	C752.705383,837.402527 751.647522,838.177551 750.214844,838.913452 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M336.502075,825.826172 
	C337.649506,826.090271 338.722534,826.726624 339.964783,827.631958 
	C338.898590,827.333496 337.663147,826.765869 336.502075,825.826172 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M372.375305,846.906982 
	C373.550201,847.063721 374.723419,847.607239 376.097778,848.406250 
	C374.990479,848.205811 373.682068,847.749817 372.375305,846.906982 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M220.151291,268.450775 
	C219.885391,269.587555 219.245621,270.673065 218.333420,271.926178 
	C218.633133,270.862335 219.205276,269.630920 220.151291,268.450775 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M897.933105,284.755127 
	C897.170593,284.096344 896.437927,283.059204 895.603638,281.719177 
	C896.322266,282.403107 897.142639,283.389923 897.933105,284.755127 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M198.042328,306.319214 
	C197.887039,307.484985 197.350571,308.682007 196.551392,310.077759 
	C196.746170,308.967804 197.203659,307.659149 198.042328,306.319214 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M684.973816,417.700073 
	C684.248352,416.977600 683.536621,415.889709 682.770142,414.473694 
	C683.472778,415.208588 684.230164,416.271606 684.973816,417.700073 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M762.692810,148.030106 
	C761.568542,147.807739 760.409790,147.215851 759.071289,146.349731 
	C760.147095,146.603836 761.402710,147.132217 762.692810,148.030106 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M775.612671,156.110840 
	C774.498779,155.841568 773.403320,155.200577 772.134583,154.289597 
	C773.184570,154.592773 774.407837,155.165939 775.612671,156.110840 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M335.670990,154.013290 
	C335.021454,154.766418 334.001099,155.511856 332.680023,156.362595 
	C333.352936,155.647125 334.326569,154.826355 335.670990,154.013290 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M885.939026,265.750641 
	C885.273254,265.315125 884.631714,264.507965 883.926514,263.392059 
	C884.562988,263.848572 885.263123,264.613800 885.939026,265.750641 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M215.351364,702.976074 
	C216.070618,703.433960 216.667099,704.249329 217.354950,705.358521 
	C216.707092,704.879456 215.967850,704.106506 215.351364,702.976074 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M226.315338,718.998047 
	C227.036819,719.419739 227.653625,720.204346 228.381409,721.270325 
	C227.731812,720.821411 226.971222,720.091187 226.315338,718.998047 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M783.875244,161.807709 
	C783.003540,161.644150 782.121155,161.116776 781.087036,160.315369 
	C781.911682,160.508850 782.888184,160.976349 783.875244,161.807709 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M786.863464,163.819153 
	C785.962402,163.686981 785.053650,163.182968 783.990295,162.403702 
	C784.842407,162.568085 785.849060,163.007706 786.863464,163.819153 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M294.691040,762.063538 
	C294.544098,762.914062 294.043121,763.807983 293.291260,764.884644 
	C293.472626,764.080505 293.904816,763.093750 294.691040,762.063538 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M876.176392,726.867798 
	C876.355957,726.006775 876.898743,725.140564 877.709412,724.117432 
	C877.498108,724.927856 877.018860,725.895203 876.176392,726.867798 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M223.754211,263.095825 
	C223.610291,263.968781 223.105209,264.869293 222.330444,265.931030 
	C222.504852,265.102600 222.948959,264.112976 223.754211,263.095825 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M893.340820,339.975220 
	C894.054626,340.456909 894.647949,341.294434 895.314880,342.438141 
	C894.665771,341.939880 893.943115,341.135468 893.340820,339.975220 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M230.786224,253.110046 
	C230.628769,253.981598 230.108154,254.870819 229.316513,255.917419 
	C229.504669,255.092468 229.963867,254.110092 230.786224,253.110046 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M219.374878,708.966309 
	C220.103729,709.401306 220.698425,710.194580 221.396927,711.270142 
	C220.747406,710.809814 219.994064,710.067200 219.374878,708.966309 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M774.968140,823.632812 
	C775.396179,822.906860 776.184509,822.309570 777.250732,821.600830 
	C776.795166,822.246765 776.061768,823.004089 774.968140,823.632812 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M635.138733,584.370972 
	C634.685730,584.948914 634.232788,585.526917 633.515137,586.197388 
	C633.629517,585.297241 634.008606,584.304749 634.722168,583.499390 
	C635.084045,583.914734 635.111389,584.142883 635.138733,584.370972 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M767.640137,151.077240 
	C766.767395,150.990479 765.891479,150.524338 764.809448,149.845108 
	C765.614502,149.987289 766.625793,150.342590 767.640137,151.077240 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M343.677979,149.014160 
	C343.221008,149.634018 342.410706,150.248291 341.293335,150.904572 
	C341.765778,150.300583 342.545197,149.654572 343.677979,149.014160 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M338.742859,152.050507 
	C338.284973,152.695496 337.461945,153.318436 336.327118,153.989120 
	C336.802795,153.367401 337.590240,152.697937 338.742859,152.050507 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M481.898804,577.823059 
	C481.004669,577.693848 480.084869,577.191345 478.985229,576.428467 
	C479.827972,576.595276 480.850525,577.022461 481.898804,577.823059 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M771.937439,153.677856 
	C771.060669,153.563263 770.135559,153.092712 769.045349,152.353088 
	C769.883179,152.496628 770.886169,152.909256 771.937439,153.677856 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M346.780334,147.079407 
	C346.311768,147.721207 345.476624,148.330429 344.328674,148.983810 
	C344.815125,148.367584 345.614441,147.707199 346.780334,147.079407 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M757.212036,834.914978 
	C757.676147,834.266052 758.509766,833.652100 759.656128,832.987915 
	C759.173096,833.608398 758.377380,834.279175 757.212036,834.914978 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M217.317932,705.993408 
	C218.043060,706.422546 218.659882,707.214233 219.381622,708.291870 
	C218.727554,707.837158 217.968582,707.096558 217.317932,705.993408 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M800.383789,805.008789 
	C800.794128,804.343994 801.568176,803.672607 802.643066,802.918335 
	C802.211792,803.557678 801.479614,804.279907 800.383789,805.008789 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M332.021149,156.344437 
	C331.577057,157.065445 330.773163,157.666870 329.681519,158.369827 
	C330.149628,157.722519 330.905487,156.973679 332.021149,156.344437 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M778.578003,158.128082 
	C777.684753,157.994186 776.827271,157.482620 775.787231,156.732773 
	C776.607727,156.913132 777.610779,157.331757 778.578003,158.128082 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M526.687439,738.030151 
	C525.814880,737.942444 524.911499,737.481140 523.806152,736.793335 
	C524.621582,736.929993 525.639160,737.293274 526.687439,738.030151 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M814.561279,540.140442 
	C813.659851,539.990234 812.804688,539.464722 811.786499,538.683350 
	C812.618103,538.873413 813.612854,539.319275 814.561279,540.140442 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M207.430664,689.950806 
	C208.141541,690.447144 208.697647,691.288391 209.325592,692.429321 
	C208.690247,691.917908 207.983078,691.106812 207.430664,689.950806 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M534.886353,627.791382 
	C534.016785,627.628784 533.131287,627.104797 532.097900,626.304199 
	C532.923523,626.495117 533.896973,626.962524 534.886353,627.791382 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M870.116333,734.893860 
	C870.309631,734.026245 870.872559,733.143921 871.709167,732.101257 
	C871.483887,732.920349 870.984924,733.899719 870.116333,734.893860 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M887.925842,268.767761 
	C887.262634,268.324219 886.628601,267.508636 885.935242,266.382996 
	C886.568909,266.847229 887.261963,267.621490 887.925842,268.767761 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M684.279175,371.920624 
	C684.412903,371.047272 684.904541,370.136810 685.669434,369.068451 
	C685.507568,369.901550 685.072327,370.892548 684.279175,371.920624 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M892.950806,276.739716 
	C892.309814,276.281281 891.689026,275.458801 891.020142,274.325348 
	C891.638428,274.801453 892.304688,275.588562 892.950806,276.739716 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M875.774414,527.102051 
	C875.607422,527.963684 875.081543,528.846069 874.282227,529.880737 
	C874.477661,529.062927 874.946594,528.092834 875.774414,527.102051 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M877.728271,524.084167 
	C877.607910,524.970581 877.125854,525.892334 876.368652,526.972046 
	C876.517883,526.126526 876.942200,525.123047 877.728271,524.084167 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M217.727371,272.090149 
	C217.772049,272.712372 217.451767,273.375092 216.927246,274.227661 
	C216.936142,273.655273 217.149277,272.892944 217.727371,272.090149 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M228.714432,256.078491 
	C228.699951,256.710938 228.327759,257.384338 227.719696,258.228668 
	C227.774765,257.639557 228.065735,256.879547 228.714432,256.078491 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M221.728271,266.089294 
	C221.734268,266.719452 221.378250,267.388153 220.800232,268.238739 
	C220.840897,267.656342 221.103577,266.892090 221.728271,266.089294 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M235.078918,729.292969 
	C235.707474,729.297546 236.379623,729.660217 237.232208,730.247192 
	C236.649277,730.197998 235.885895,729.924561 235.078918,729.292969 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M784.944458,816.617554 
	C785.190735,816.007019 785.782776,815.517395 786.661133,814.966797 
	C786.395020,815.516663 785.842590,816.127625 784.944458,816.617554 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M798.915527,172.804077 
	C798.274719,172.747177 797.603699,172.326904 796.780762,171.648315 
	C797.381042,171.740234 798.133118,172.090485 798.915527,172.804077 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M866.229797,739.897522 
	C866.291443,739.257690 866.711182,738.594849 867.394287,737.792480 
	C867.301086,738.393433 866.944519,739.133972 866.229797,739.897522 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M591.008911,733.294067 
	C590.783752,733.903748 590.208008,734.433289 589.339355,735.024170 
	C589.583679,734.461609 590.121033,733.837769 591.008911,733.294067 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M878.312866,723.935181 
	C878.352539,723.303162 878.741638,722.625183 879.388550,721.799438 
	C879.318237,722.397583 878.990234,723.143433 878.312866,723.935181 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M228.398682,721.937378 
	C229.030991,722.173645 229.540924,722.763916 230.122986,723.642944 
	C229.555496,723.384888 228.915894,722.838196 228.398682,721.937378 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M262.971863,730.675537 
	C263.221191,730.081909 263.817810,729.587585 264.700562,729.019775 
	C264.430847,729.555786 263.875000,730.165344 262.971863,730.675537 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M873.136414,730.890198 
	C873.156372,730.252014 873.551453,729.590820 874.175049,728.750000 
	C874.106262,729.335938 873.808899,730.101562 873.136414,730.890198 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M293.475952,791.920044 
	C294.086823,792.191284 294.540131,792.797058 295.049500,793.685303 
	C294.509827,793.396790 293.914093,792.825684 293.475952,791.920044 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M881.247009,719.901917 
	C881.270935,719.265259 881.656372,718.597900 882.281189,717.764038 
	C882.216553,718.355408 881.912537,719.113281 881.247009,719.901917 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M780.921021,159.703674 
	C780.290527,159.705276 779.615967,159.348648 778.763062,158.764862 
	C779.348816,158.806961 780.112915,159.076202 780.921021,159.703674 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M329.048462,158.358459 
	C328.797424,158.961700 328.201355,159.452835 327.315735,159.998718 
	C327.585297,159.451096 328.144379,158.848724 329.048462,158.358459 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M353.060913,143.371490 
	C352.785217,143.948029 352.177979,144.403015 351.282440,144.886322 
	C351.572571,144.359741 352.150970,143.804825 353.060913,143.371490 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M891.349731,704.944153 
	C891.336426,704.322754 891.675110,703.643250 892.234497,702.778625 
	C892.204041,703.357727 891.952820,704.121887 891.349731,704.944153 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M563.927856,698.547119 
	C564.172607,697.917114 564.765808,697.432129 565.637756,696.863464 
	C565.369812,697.417236 564.823120,698.054688 563.927856,698.547119 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M747.784302,464.119354 
	C747.780273,464.758514 747.408020,465.419678 746.806641,466.254883 
	C746.857056,465.666382 747.136597,464.903870 747.784302,464.119354 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M340.112396,828.231506 
	C340.736145,828.200867 341.388336,828.538513 342.229492,829.080444 
	C341.659210,829.056396 340.900024,828.828125 340.112396,828.231506 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M777.927734,821.585693 
	C778.183411,820.974731 778.781128,820.497314 779.665588,819.966675 
	C779.391479,820.515320 778.830627,821.117310 777.927734,821.585693 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M635.421631,584.237793 
	C635.111389,584.142883 635.084045,583.914734 635.026611,583.343323 
	C635.521545,582.698792 636.046692,582.397583 636.892212,582.130310 
	C636.710022,582.811035 636.207275,583.457825 635.421631,584.237793 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M360.690247,139.023102 
	C360.400208,139.485123 359.741669,139.937119 358.793701,140.483551 
	C359.110107,140.056351 359.715912,139.534714 360.690247,139.023102 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M454.335693,631.988892 
	C454.619507,631.522583 455.269684,631.060181 456.211609,630.510742 
	C455.902893,630.946655 455.302460,631.469727 454.335693,631.988892 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M191.161987,320.408875 
	C191.225769,321.168121 190.922409,321.959534 190.366516,322.948242 
	C190.340942,322.244019 190.567902,321.342499 191.161987,320.408875 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M701.732666,617.066162 
	C701.576233,617.651306 701.084167,618.264221 700.312988,618.987061 
	C700.488220,618.429199 700.942627,617.761597 701.732666,617.066162 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M386.371307,853.872375 
	C387.110016,853.820740 387.901276,854.127930 388.892517,854.686035 
	C388.202911,854.701721 387.313385,854.466431 386.371307,853.872375 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M905.821411,680.566833 
	C905.809998,679.833435 906.156494,679.094543 906.746155,678.165283 
	C906.719360,678.837036 906.449341,679.699219 905.821411,680.566833 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M366.466553,843.795349 
	C367.232574,843.757507 367.990021,844.085632 368.928436,844.668701 
	C368.225586,844.669556 367.341797,844.415466 366.466553,843.795349 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M202.225388,298.503571 
	C202.249908,299.270203 201.911118,300.007812 201.319641,300.921173 
	C201.331985,300.222809 201.597031,299.348663 202.225388,298.503571 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M263.158844,214.418701 
	C263.159119,214.890717 262.836060,215.339981 262.254944,215.897888 
	C262.276459,215.469681 262.555969,214.932816 263.158844,214.418701 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M362.178375,690.457275 
	C362.172577,690.937927 361.843719,691.375488 361.257263,691.915466 
	C361.284882,691.483337 361.570099,690.948792 362.178375,690.457275 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M225.117401,717.169800 
	C225.512817,717.256287 225.896545,717.681519 226.365143,718.389282 
	C226.001938,718.284119 225.553818,717.896362 225.117401,717.169800 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M237.425812,730.830994 
	C237.934357,730.693115 238.455566,730.912170 239.155945,731.350403 
	C238.702896,731.442322 238.070679,731.315125 237.425812,730.830994 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M845.962524,215.699448 
	C845.578125,215.693634 845.159363,215.360214 844.610962,214.785675 
	C844.963623,214.820312 845.445862,215.096069 845.962524,215.699448 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M206.268005,688.039917 
	C206.685150,688.122314 207.027100,688.554565 207.457748,689.255249 
	C207.095245,689.145752 206.644043,688.767822 206.268005,688.039917 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M638.182007,684.467407 
	C638.179016,684.950867 637.850220,685.390625 637.266113,685.939514 
	C637.292603,685.506958 637.574402,684.965271 638.182007,684.467407 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M888.911987,708.672241 
	C888.836670,708.191284 889.094177,707.658997 889.610596,706.978882 
	C889.661255,707.427612 889.453064,708.024292 888.911987,708.672241 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M865.952026,238.744415 
	C865.564453,238.692245 865.153259,238.309250 864.633972,237.660202 
	C864.993347,237.733963 865.460938,238.073776 865.952026,238.744415 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M578.828003,683.561401 
	C578.829041,683.080994 579.154053,682.633606 579.740417,682.085693 
	C579.718445,682.521667 579.435181,683.058044 578.828003,683.561401 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M855.947205,226.767181 
	C855.556580,226.723373 855.144348,226.344498 854.616577,225.703979 
	C854.975830,225.772278 855.450745,226.102188 855.947205,226.767181 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M879.917236,721.673218 
	C879.858765,721.199646 880.126648,720.677734 880.659241,720.021362 
	C880.697144,720.466187 880.470398,721.045532 879.917236,721.673218 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M268.808563,725.512939 
	C268.809479,725.021912 269.137573,724.582336 269.720520,724.033875 
	C269.695496,724.471436 269.415649,725.017883 268.808563,725.512939 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M544.371216,695.875122 
	C544.835876,695.860229 545.309387,696.169128 545.903809,696.737793 
	C545.476562,696.731262 544.928284,696.465088 544.371216,695.875122 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M481.572510,697.165771 
	C481.097412,697.169617 480.644684,696.846436 480.074738,696.267334 
	C480.503296,696.287170 481.049072,696.562927 481.572510,697.165771 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M231.035767,725.293213 
	C231.421402,725.331665 231.837799,725.697205 232.369095,726.320435 
	C232.011505,726.258850 231.539017,725.939575 231.035767,725.293213 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M233.406921,727.844116 
	C233.889328,727.822632 234.361649,728.130859 234.950134,728.699402 
	C234.509811,728.697693 233.953323,728.435730 233.406921,727.844116 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M266.340088,727.974487 
	C266.349396,727.593567 266.680878,727.173157 267.252258,726.624512 
	C267.215576,726.975830 266.938934,727.455383 266.340088,727.974487 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M890.093079,706.800720 
	C890.043152,706.391541 890.279236,705.861816 890.758667,705.163452 
	C890.794373,705.556580 890.586731,706.118408 890.093079,706.800720 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M209.269806,693.039612 
	C209.686661,693.128540 210.026245,693.567139 210.452515,694.276428 
	C210.090317,694.161194 209.641434,693.775208 209.269806,693.039612 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M607.189941,717.495361 
	C607.183411,717.983093 606.853577,718.413818 606.270752,718.949463 
	C606.300720,718.515808 606.583618,717.977112 607.189941,717.495361 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M513.563843,728.168457 
	C513.086060,728.168457 512.638489,727.843384 512.082520,727.260376 
	C512.514038,727.282715 513.054138,727.563049 513.563843,728.168457 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M874.807922,728.517944 
	C874.764832,728.008362 875.059448,727.535461 875.607666,726.942139 
	C875.622742,727.399353 875.384155,727.977051 874.807922,728.517944 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M736.037354,846.725769 
	C736.165527,846.318909 736.639099,845.995667 737.400085,845.605347 
	C737.252625,845.961975 736.817688,846.385681 736.037354,846.725769 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M370.430542,845.827026 
	C370.940338,845.677917 371.461945,845.886902 372.162659,846.312805 
	C371.708649,846.414856 371.075500,846.299988 370.430542,845.827026 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M739.233032,844.944580 
	C739.393494,844.604858 739.870117,844.262756 740.648315,843.891479 
	C740.483093,844.222290 740.016174,844.582275 739.233032,844.944580 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M747.043945,840.737183 
	C747.148804,840.327820 747.601807,839.994385 748.330933,839.576172 
	C748.202026,839.931824 747.797058,840.372437 747.043945,840.737183 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M357.404907,838.846252 
	C357.914612,838.722229 358.445526,838.950806 359.141724,839.417969 
	C358.680054,839.503967 358.053101,839.351440 357.404907,838.846252 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M376.317505,848.933350 
	C376.803528,848.803162 377.366730,849.010254 378.103668,849.463989 
	C377.649841,849.563965 377.022247,849.417297 376.317505,848.933350 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M754.056274,836.756104 
	C754.159058,836.347290 754.609924,836.006531 755.338989,835.581726 
	C755.212891,835.939819 754.808594,836.382019 754.056274,836.756104 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M350.099304,145.135498 
	C349.964478,145.536957 349.456085,145.919006 348.635376,146.393524 
	C348.790619,146.029373 349.258209,145.572723 350.099304,145.135498 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M764.499756,149.211212 
	C763.969543,149.317764 763.472534,149.071625 762.829468,148.588013 
	C763.299927,148.519852 763.916443,148.689194 764.499756,149.211212 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M678.804077,473.505524 
	C678.805420,473.009308 679.133362,472.569855 679.718750,472.028015 
	C679.694397,472.471191 679.412537,473.016754 678.804077,473.505524 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M743.657227,137.098755 
	C743.161194,137.228104 742.605835,137.013351 741.881165,136.551727 
	C742.340576,136.454773 742.969177,136.604721 743.657227,137.098755 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M745.561401,138.176361 
	C745.045898,138.303970 744.528320,138.075684 743.843140,137.618347 
	C744.303528,137.533035 744.931335,137.676758 745.561401,138.176361 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M389.193115,855.179138 
	C389.612701,855.070496 390.193207,855.235596 390.958008,855.646179 
	C390.546204,855.745361 389.950073,855.599121 389.193115,855.179138 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M720.006592,854.638062 
	C720.170593,854.229004 720.670532,853.947998 721.461243,853.622803 
	C721.282227,853.974426 720.812378,854.370300 720.006592,854.638062 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M378.292084,849.968933 
	C378.772003,849.829590 379.347290,850.021118 380.099670,850.461182 
	C379.647003,850.573120 379.017242,850.436462 378.292084,849.968933 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M840.809692,768.504517 
	C840.824341,768.021606 841.159302,767.600464 841.745728,767.076294 
	C841.708130,767.504272 841.419067,768.035278 840.809692,768.504517 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M796.655457,171.105515 
	C796.178650,171.153244 795.670105,170.872269 795.032837,170.326538 
	C795.477356,170.300125 796.050537,170.538467 796.655457,171.105515 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M296.155121,760.403320 
	C296.168701,760.879822 295.853668,761.343994 295.281311,761.927673 
	C295.291504,761.495117 295.559021,760.943054 296.155121,760.403320 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M853.825439,754.548950 
	C853.817627,754.064453 854.140076,753.609558 854.717896,753.036011 
	C854.700806,753.471069 854.428223,754.024780 853.825439,754.548950 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M811.583801,183.158920 
	C811.099915,183.181625 810.628967,182.873764 810.039429,182.306976 
	C810.479431,182.308136 811.038086,182.568253 811.583801,183.158920 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M817.581360,188.161850 
	C817.089050,188.190063 816.603088,187.880966 815.990967,187.309372 
	C816.439148,187.306091 817.013428,187.565308 817.581360,188.161850 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M864.802124,741.508179 
	C864.781250,741.001709 865.092346,740.547852 865.658447,739.984314 
	C865.653687,740.436768 865.393860,740.998840 864.802124,741.508179 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M316.179810,739.445801 
	C316.183533,739.931702 315.858032,740.382629 315.274261,740.945679 
	C315.294189,740.508789 315.572388,739.959778 316.179810,739.445801 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M867.923584,737.681641 
	C867.885925,737.221313 868.172119,736.712708 868.718384,736.063293 
	C868.734802,736.492737 868.491150,737.063049 867.923584,737.681641 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M588.759583,735.063538 
	C588.656616,735.443359 588.225708,735.832642 587.503418,736.292114 
	C587.618591,735.932556 588.025085,735.502747 588.759583,735.063538 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M280.716736,197.043823 
	C280.710266,197.426804 280.374023,197.840393 279.801697,198.387527 
	C279.839386,198.038864 280.113190,197.556656 280.716736,197.043823 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M592.734863,732.054626 
	C592.659241,732.436462 592.257019,732.837036 591.577637,733.328491 
	C591.669678,732.970642 592.039001,732.522034 592.734863,732.054626 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M333.473724,823.806030 
	C333.994720,823.721985 334.493561,823.985229 335.127747,824.497803 
	C334.659271,824.549194 334.055420,824.351257 333.473724,823.806030 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M330.484467,821.800049 
	C331.005676,821.724731 331.496765,821.995239 332.120117,822.514893 
	C331.653076,822.557922 331.053711,822.351929 330.484467,821.800049 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M780.239197,819.934204 
	C780.337646,819.554810 780.764282,819.165466 781.477905,818.699219 
	C781.365784,819.056274 780.966553,819.490295 780.239197,819.934204 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M326.302734,818.940186 
	C326.764618,818.882996 327.288696,819.147888 327.957703,819.671997 
	C327.523407,819.708252 326.944153,819.485291 326.302734,818.940186 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M783.178833,817.886292 
	C783.242065,817.488281 783.645447,817.097290 784.320129,816.606689 
	C784.233948,816.969116 783.876465,817.431213 783.178833,817.886292 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M322.259369,815.988403 
	C322.695496,815.949768 323.209656,816.219055 323.870667,816.744629 
	C323.457489,816.766052 322.897461,816.531189 322.259369,815.988403 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M830.579346,200.162292 
	C830.100708,200.166458 829.644897,199.845032 829.082825,199.261734 
	C829.518372,199.278793 830.060303,199.557739 830.579346,200.162292 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M326.733368,160.048737 
	C326.634857,160.424713 326.212067,160.817551 325.502075,161.284592 
	C325.612915,160.927719 326.011017,160.496658 326.733368,160.048737 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M914.958984,316.753540 
	C914.634216,316.580841 914.305969,316.098694 913.963440,315.316559 
	C914.284546,315.492432 914.619995,315.968262 914.958984,316.753540 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M425.162140,623.436401 
	C425.168915,623.914185 424.847961,624.368774 424.271912,624.941895 
	C424.289307,624.511292 424.561859,623.962219 425.162140,623.436401 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M572.853638,585.608093 
	C572.849854,585.138489 573.168823,584.679871 573.749878,584.114014 
	C573.733398,584.544189 573.454895,585.081604 572.853638,585.608093 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M903.727539,294.962585 
	C903.314392,294.849304 902.983765,294.388000 902.577393,293.645142 
	C902.937744,293.780609 903.373901,294.197571 903.727539,294.962585 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M225.073303,261.316650 
	C225.130066,261.781677 224.861435,262.301331 224.336029,262.968262 
	C224.302155,262.534119 224.525024,261.952667 225.073303,261.316650 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M610.814453,545.537292 
	C610.816956,545.050964 611.144653,544.608887 611.731323,544.065308 
	C611.706848,544.503113 611.423279,545.042297 610.814453,545.537292 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M771.182129,543.475647 
	C771.173889,543.958923 770.843201,544.390686 770.257568,544.925354 
	C770.288269,544.493530 770.573975,543.958801 771.182129,543.475647 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M915.942688,318.780273 
	C915.615417,318.604126 915.291260,318.115051 914.954346,317.322144 
	C915.276306,317.501312 915.611023,317.984314 915.942688,318.780273 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M448.962952,665.715820 
	C448.577057,665.656311 448.163513,665.271606 447.656342,664.610596 
	C448.020203,664.686340 448.477753,665.038452 448.962952,665.715820 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M185.161499,645.729187 
	C185.547897,645.940125 185.897079,646.540771 186.294205,647.494995 
	C185.936188,647.272095 185.530228,646.695435 185.161499,645.729187 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M895.254761,343.048157 
	C895.671082,343.154816 896.012146,343.610992 896.429626,344.349548 
	C896.063965,344.220490 895.621765,343.809082 895.254761,343.048157 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M811.640259,538.118347 
	C811.164307,538.149292 810.667786,537.851440 810.047974,537.287598 
	C810.489685,537.277649 811.054688,537.533569 811.640259,538.118347 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M695.215820,359.916351 
	C695.291199,359.524872 695.700989,359.128571 696.390259,358.641571 
	C696.296631,359.004425 695.923462,359.458008 695.215820,359.916351 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M216.240326,274.585449 
	C216.356354,275.123901 216.122925,275.588776 215.676270,276.204224 
	C215.605637,275.740448 215.748260,275.126160 216.240326,274.585449 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M898.971252,286.717346 
	C898.633545,286.567780 898.281006,286.106903 897.889954,285.350067 
	C898.219788,285.504730 898.588135,285.955383 898.971252,286.717346 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M725.896973,396.127869 
	C726.350525,396.151245 726.631042,396.317963 726.991211,396.725037 
	C726.621948,396.733978 726.172974,396.502594 725.896973,396.127869 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M446.172607,640.814636 
	C446.097198,640.410950 446.291840,639.857727 446.728455,639.126282 
	C446.794495,639.520386 446.618591,640.092773 446.172607,640.814636 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M612.170532,608.436890 
	C612.168945,608.913696 611.843262,609.360168 611.258423,609.911987 
	C611.281677,609.480347 611.564087,608.943420 612.170532,608.436890 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M665.192261,552.478882 
	C665.185547,552.968567 664.854492,553.403992 664.265076,553.938782 
	C664.293701,553.500244 664.580750,552.962463 665.192261,552.478882 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M609.805298,650.488098 
	C609.821777,650.004700 610.157898,649.588135 610.743286,649.066711 
	C610.703369,649.492859 610.414185,650.023926 609.805298,650.488098 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M593.832764,563.566406 
	C593.837463,563.092102 594.165100,562.650024 594.750366,562.101990 
	C594.723877,562.530273 594.439758,563.064453 593.832764,563.566406 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M910.560791,308.015594 
	C910.127808,307.915222 909.846619,307.480072 909.492065,306.792358 
	C909.849976,306.920135 910.281250,307.300476 910.560791,308.015594 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M227.144684,258.398254 
	C227.205368,258.893127 226.927307,259.397797 226.392181,260.038086 
	C226.358734,259.585175 226.582321,258.996582 227.144684,258.398254 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M425.820251,558.538635 
	C425.827667,558.059570 426.157227,557.624695 426.743347,557.087646 
	C426.714081,557.517944 426.428284,558.050354 425.820251,558.538635 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M196.035156,310.289001 
	C196.180222,310.771606 195.991333,311.348907 195.555969,312.106689 
	C195.440048,311.652710 195.570633,311.018219 196.035156,310.289001 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M195.049347,312.300812 
	C195.199371,312.785065 195.012619,313.360016 194.583191,314.117950 
	C194.464554,313.664459 194.588562,313.027985 195.049347,312.300812 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M593.821411,667.549377 
	C593.826416,667.066833 594.154358,666.626099 594.742981,666.088135 
	C594.717285,666.524353 594.430847,667.057800 593.821411,667.549377 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M199.100037,304.346924 
	C199.244629,304.840027 199.042679,305.394958 198.606598,306.131775 
	C198.499481,305.678680 198.626495,305.043732 199.100037,304.346924 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M525.565613,620.170166 
	C525.086304,620.169006 524.639160,619.843689 524.089478,619.258057 
	C524.523865,619.280518 525.060791,619.563293 525.565613,620.170166 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M363.828674,624.556824 
	C363.831940,624.080688 364.159576,623.638000 364.743591,623.085693 
	C364.717712,623.514099 364.435394,624.052185 363.828674,624.556824 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M332.837891,657.576782 
	C332.834381,657.098755 333.156067,656.644531 333.738525,656.083862 
	C333.720581,656.518494 333.441864,657.059509 332.837891,657.576782 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M215.133148,276.381104 
	C215.220093,276.880981 214.964539,277.407257 214.453186,278.079468 
	C214.395142,277.619446 214.592896,277.013519 215.133148,276.381104 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M641.797241,616.422607 
	C641.815491,615.925964 642.147644,615.519775 642.727783,615.020630 
	C642.687622,615.456177 642.399353,615.984619 641.797241,616.422607 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M200.139801,302.387817 
	C200.279526,302.890900 200.066467,303.429474 199.622971,304.145020 
	C199.524033,303.689087 199.655518,303.056244 200.139801,302.387817 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M595.809326,625.065979 
	C595.760925,625.457886 595.373413,625.866028 594.721741,626.390015 
	C594.795166,626.031372 595.132751,625.556824 595.809326,625.065979 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M746.187683,466.459259 
	C746.208618,466.960632 745.892517,467.432770 745.313477,468.021301 
	C745.317200,467.568481 745.583923,466.999268 746.187683,466.459259 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M408.818268,576.525879 
	C408.832092,576.047974 409.166565,575.623535 409.753357,575.094421 
	C409.716736,575.519592 409.427826,576.049500 408.818268,576.525879 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M660.834106,492.566101 
	C660.838867,492.094330 661.166321,491.653351 661.749207,491.103058 
	C661.722046,491.528137 661.439392,492.062531 660.834106,492.566101 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M441.175629,606.447144 
	C441.170013,606.927612 440.840729,607.367249 440.252960,607.909668 
	C440.280304,607.477112 440.566132,606.941711 441.175629,606.447144 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M201.242126,679.055420 
	C201.650986,679.176147 201.990707,679.643738 202.396637,680.401733 
	C202.032898,680.262207 201.602951,679.832336 201.242126,679.055420 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M685.174072,634.440308 
	C685.164856,634.917786 684.834167,635.353882 684.244263,635.888000 
	C684.274231,635.456970 684.563477,634.927917 685.174072,634.440308 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M894.883057,279.833008 
	C894.495972,279.720856 894.123962,279.272034 893.682312,278.529724 
	C894.041138,278.656281 894.469666,279.076294 894.883057,279.833008 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M734.156006,479.408356 
	C734.157043,479.878052 733.834595,480.330444 733.253418,480.893555 
	C733.273987,480.466492 733.553223,479.928772 734.156006,479.408356 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M538.427734,570.829834 
	C538.899048,570.839783 539.333191,571.171448 539.874023,571.758606 
	C539.450684,571.726624 538.920593,571.439087 538.427734,570.829834 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M890.963867,273.715759 
	C890.620239,273.574860 890.258423,273.117798 889.839111,272.366089 
	C890.169556,272.514160 890.557617,272.956848 890.963867,273.715759 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M536.694580,629.059937 
	C536.222595,629.135437 535.683228,628.885498 534.997803,628.372925 
	C535.443604,628.318298 536.035400,628.526489 536.694580,629.059937 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M624.816772,634.526794 
	C624.825684,634.044617 625.157227,633.613281 625.743286,633.077637 
	C625.711670,633.508057 625.425598,634.042847 624.816772,634.526794 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M479.333832,632.906250 
	C479.796631,632.875305 480.294922,633.167236 480.920776,633.722412 
	C480.488647,633.733521 479.928986,633.481262 479.333832,632.906250 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M210.217850,284.507050 
	C210.353775,285.034637 210.131500,285.528320 209.694122,286.187500 
	C209.605911,285.726349 209.732788,285.099762 210.217850,284.507050 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M457.007751,630.558350 
	C457.189636,630.138062 457.694366,629.880615 458.487610,629.601685 
	C458.294281,629.960510 457.812439,630.340820 457.007751,630.558350 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M656.814697,600.525024 
	C656.830200,600.045410 657.165771,599.622986 657.754761,599.098511 
	C657.717041,599.525085 657.425964,600.053650 656.814697,600.525024 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M393.820740,592.540161 
	C393.822876,592.059143 394.150055,591.617798 394.733154,591.068420 
	C394.707977,591.500183 394.426910,592.039978 393.820740,592.540161 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M627.820129,527.544556 
	C627.821655,527.061646 628.148254,526.617981 628.733276,526.070312 
	C628.709534,526.505493 628.427368,527.044739 627.820129,527.544556 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M516.492249,668.808044 
	C516.974304,668.825928 517.393188,669.161560 517.906189,669.751770 
	C517.476562,669.712891 516.952820,669.419373 516.492249,668.808044 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M377.848541,609.593262 
	C377.844208,609.122559 378.163544,608.665955 378.742676,608.099365 
	C378.725739,608.528687 378.448975,609.068054 377.848541,609.593262 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M455.571594,672.163574 
	C455.096191,672.164551 454.646790,671.840515 454.086548,671.258972 
	C454.516327,671.280518 455.056976,671.559509 455.571594,672.163574 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M745.036438,414.294586 
	C745.425415,414.322052 745.846313,414.677246 746.382263,415.290710 
	C746.020935,415.240082 745.544678,414.931183 745.036438,414.294586 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M317.816223,673.535767 
	C317.814545,673.045776 318.139771,672.598511 318.725006,672.048828 
	C318.704407,672.490356 318.423767,673.034363 317.816223,673.535767 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M348.802185,640.482300 
	C348.815735,639.993835 349.150391,639.574402 349.734924,639.050110 
	C349.697662,639.480652 349.410492,640.015991 348.802185,640.482300 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M690.852356,460.594696 
	C690.852600,460.132050 691.173584,459.684021 691.749878,459.122742 
	C691.727783,459.542786 691.450439,460.076050 690.852356,460.594696 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M628.190430,591.486206 
	C628.175354,591.967957 627.839966,592.390320 627.251404,592.914001 
	C627.288818,592.485779 627.579407,591.956299 628.190430,591.486206 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M202.314148,681.013916 
	C202.738754,681.110229 203.065140,681.555603 203.470367,682.271973 
	C203.104797,682.149719 202.660370,681.756409 202.314148,681.013916 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M644.826782,509.554138 
	C644.828247,509.075043 645.154480,508.630402 645.738037,508.078827 
	C645.714050,508.510773 645.432800,509.049683 644.826782,509.554138 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M647.179688,571.454834 
	C647.179810,571.937317 646.853333,572.382385 646.270508,572.937500 
	C646.293762,572.504150 646.573425,571.960815 647.179688,571.454834 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M638.001160,581.179626 
	C638.076172,581.409485 637.870300,581.723938 637.392700,582.135254 
	C637.320679,581.909424 637.520447,581.586853 638.001160,581.179626 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M399.068054,586.838989 
	C398.992798,586.621582 399.183167,586.309570 399.636810,585.900757 
	C399.711273,586.117371 399.522461,586.430908 399.068054,586.838989 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M329.277649,820.970337 
	C329.510712,820.798645 329.818695,820.914124 330.275818,821.229614 
	C330.067505,821.372314 329.710052,821.314941 329.277649,820.970337 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M332.264160,822.989014 
	C332.493561,822.816589 332.806885,822.927551 333.270874,823.240723 
	C333.063721,823.386047 332.705902,823.329224 332.264160,822.989014 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M639.926636,579.192566 
	C640.004700,579.412476 639.810120,579.727844 639.352295,580.151123 
	C639.277344,579.935364 639.465637,579.611694 639.926636,579.192566 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M335.274658,824.974365 
	C335.534790,824.695007 335.839447,824.798035 336.261658,825.191650 
	C336.059509,825.341003 335.706177,825.299255 335.274658,824.974365 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M755.894897,835.602722 
	C755.869507,835.336670 756.131409,835.115295 756.657471,834.860107 
	C756.675232,835.099976 756.428711,835.373657 755.894897,835.602722 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M567.861023,590.537720 
	C567.783203,590.242371 568.002197,589.999695 568.462524,589.689697 
	C568.521851,589.945068 568.339844,590.267761 567.861023,590.537720 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M629.142334,590.430908 
	C629.383118,590.769531 629.225647,591.027832 628.770874,591.339111 
	C628.659729,591.103455 628.749817,590.756287 629.142334,590.430908 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M808.062988,798.817993 
	C808.009705,798.603577 808.223694,798.318420 808.702087,797.956055 
	C808.754395,798.168274 808.542297,798.457764 808.062988,798.817993 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M392.880981,593.606384 
	C392.630310,593.274963 392.785919,593.001221 393.256805,592.671692 
	C393.372101,592.905579 393.277161,593.254944 392.880981,593.606384 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M558.293335,589.956543 
	C558.552124,589.826843 558.862976,589.991638 559.285278,590.401367 
	C559.046265,590.514465 558.695801,590.382751 558.293335,589.956543 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M621.949463,598.163452 
	C622.024841,598.385071 621.830261,598.698608 621.368774,599.107361 
	C621.294434,598.886841 621.487061,598.571167 621.949463,598.163452 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M340.256104,151.185425 
	C340.275696,151.431076 339.972260,151.718323 339.351990,152.059479 
	C339.334473,151.817932 339.633759,151.522491 340.256104,151.185425 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M328.165771,820.144409 
	C328.381561,820.021545 328.718414,820.150391 329.176514,820.527649 
	C328.960754,820.649414 328.623810,820.522766 328.165771,820.144409 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M633.018066,586.261902 
	C633.128418,586.517090 632.948425,586.830139 632.508911,587.240967 
	C632.408813,586.999084 632.568237,586.659424 633.018066,586.261902 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M781.952515,818.712036 
	C781.902039,818.464966 782.138550,818.201172 782.645081,817.879700 
	C782.689880,818.113159 782.464661,818.404297 781.952515,818.712036 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M325.184631,818.051819 
	C325.415100,817.928284 325.755127,818.076477 326.219391,818.478760 
	C325.993805,818.596436 325.643982,818.459961 325.184631,818.051819 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M632.046631,587.290039 
	C632.164124,587.551941 631.985657,587.858887 631.554321,588.268066 
	C631.451233,588.025269 631.600952,587.680237 632.046631,587.290039 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M729.916321,587.155701 
	C729.992676,587.371338 729.806763,587.684326 729.358032,588.093323 
	C729.281494,587.877258 729.467773,587.565125 729.916321,587.155701 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M631.076294,588.325562 
	C631.206726,588.593567 631.037415,588.893921 630.626587,589.301514 
	C630.515564,589.058533 630.646057,588.708252 631.076294,588.325562 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M321.163910,815.142944 
	C321.378540,815.023682 321.713715,815.156250 322.170166,815.536987 
	C321.955750,815.655090 321.620117,815.524902 321.163910,815.142944 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M571.904419,586.648987 
	C571.770142,586.376221 571.939148,586.084473 572.341187,585.682251 
	C572.452026,585.924561 572.329834,586.277283 571.904419,586.648987 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M768.819336,151.872604 
	C768.607666,152.032822 768.265930,151.938278 767.773804,151.619934 
	C767.978760,151.470032 768.333984,151.543930 768.819336,151.872604 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M902.617432,293.102142 
	C902.353271,293.125427 902.130005,292.863007 901.880249,292.333801 
	C902.121887,292.316833 902.390076,292.566650 902.617432,293.102142 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M494.570679,590.137817 
	C494.226105,590.374268 493.964874,590.210022 493.658508,589.738220 
	C493.898407,589.631226 494.245300,589.733398 494.570679,590.137817 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M630.112793,589.381653 
	C630.247864,589.658386 630.079712,589.939209 629.686401,590.328369 
	C629.577332,590.086365 629.693420,589.736023 630.112793,589.381653 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M626.859253,528.563477 
	C626.626892,528.217285 626.793457,527.958679 627.265381,527.655884 
	C627.369751,527.895813 627.265503,528.242188 626.859253,528.563477 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M711.956787,503.166809 
	C712.033875,503.391144 711.839172,503.706909 711.375732,504.117310 
	C711.299683,503.894012 711.492371,503.576111 711.956787,503.166809 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M643.867676,510.581604 
	C643.631287,510.238983 643.797668,509.973206 644.276367,509.660889 
	C644.382507,509.899658 644.276428,510.247711 643.867676,510.581604 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M642.892395,511.622620 
	C642.761597,511.347900 642.932495,511.066010 643.331421,510.677216 
	C643.437683,510.918671 643.315918,511.267029 642.892395,511.622620 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M634.035156,520.832886 
	C633.958984,520.608032 634.156250,520.293213 634.622864,519.883240 
	C634.697571,520.106384 634.503052,520.424622 634.035156,520.832886 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M698.079285,452.842712 
	C698.001282,452.624329 698.186768,452.308899 698.637268,451.899597 
	C698.715820,452.119019 698.529236,452.432343 698.079285,452.842712 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M632.110474,522.850220 
	C632.041077,522.643433 632.230713,522.332214 632.681519,521.918579 
	C632.751648,522.126099 632.560547,522.435852 632.110474,522.850220 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M795.677246,523.073853 
	C795.407776,523.183899 795.110718,522.994507 794.719482,522.551392 
	C794.966736,522.456604 795.308167,522.615540 795.677246,523.073853 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M796.676636,524.073608 
	C796.406860,524.183716 796.110046,523.994324 795.719421,523.551392 
	C795.966919,523.456604 796.308289,523.615356 796.676636,524.073608 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M713.859497,501.141815 
	C713.932800,501.344635 713.752869,501.659851 713.315308,502.082275 
	C713.240601,501.877747 713.423401,501.565979 713.859497,501.141815 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M730.158508,400.077545 
	C730.377075,399.998871 730.692932,400.184570 731.104858,400.635132 
	C730.885864,400.713959 730.570862,400.527954 730.158508,400.077545 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M855.781433,364.952454 
	C855.559326,365.031219 855.250427,364.831604 854.826904,364.375000 
	C855.039734,364.303375 855.367126,364.488739 855.781433,364.952454 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M867.924438,536.171997 
	C867.985168,536.390137 867.782288,536.682251 867.314026,537.046753 
	C867.252747,536.828064 867.456787,536.537048 867.924438,536.171997 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M896.383057,344.900879 
	C896.644043,344.895386 896.850403,345.168518 897.061646,345.708649 
	C896.820557,345.710266 896.574463,345.444916 896.383057,344.900879 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M677.977661,539.173096 
	C678.056519,539.399963 677.858765,539.716431 677.393005,540.133118 
	C677.317017,539.909790 677.509033,539.586304 677.977661,539.173096 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M609.845520,546.532959 
	C609.626892,546.181702 609.796875,545.934021 610.258789,545.644958 
	C610.357727,545.887817 610.252136,546.232117 609.845520,546.532959 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M673.948853,478.698364 
	C673.832642,478.437317 674.010925,478.133270 674.439819,477.728180 
	C674.541443,477.969849 674.392395,478.312592 673.948853,478.698364 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M677.837341,474.489777 
	C677.626953,474.137451 677.789551,473.907043 678.223145,473.637695 
	C678.320435,473.880524 678.225830,474.218170 677.837341,474.489777 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M676.854980,475.564697 
	C676.618469,475.230408 676.774536,474.975433 677.219238,474.664001 
	C677.329773,474.897125 677.242981,475.242615 676.854980,475.564697 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M675.884949,476.613831 
	C675.642334,476.272736 675.810852,475.994110 676.310547,475.671204 
	C676.418152,475.911194 676.302979,476.260986 675.884949,476.613831 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M674.921143,477.666077 
	C674.792358,477.399231 674.962646,477.102295 675.371277,476.697052 
	C675.479858,476.937836 675.350098,477.286926 674.921143,477.666077 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M736.098755,477.357361 
	C736.223938,477.632446 736.046326,477.921631 735.630310,478.314209 
	C735.526611,478.068848 735.661255,477.720123 736.098755,477.357361 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M608.848145,547.534546 
	C608.631348,547.181458 608.804199,546.932434 609.272827,546.644592 
	C609.370056,546.888733 609.259705,547.233093 608.848145,547.534546 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M735.117188,478.385956 
	C735.248596,478.664246 735.075806,478.943420 734.676514,479.330078 
	C734.571106,479.087280 734.692078,478.737061 735.117188,478.385956 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M672.952087,479.703033 
	C672.847839,479.443359 673.036926,479.143097 673.482178,478.749207 
	C673.574036,478.991211 673.409729,479.326843 672.952087,479.703033 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M743.945923,469.167419 
	C744.025757,469.389984 743.836426,469.706909 743.381226,470.121124 
	C743.302551,469.899536 743.489685,469.580688 743.945923,469.167419 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M666.091614,486.844788 
	C666.014526,486.631348 666.197876,486.319031 666.641541,485.908142 
	C666.718567,486.121674 666.535278,486.433807 666.091614,486.844788 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M683.050781,468.835052 
	C682.974426,468.613281 683.167847,468.299194 683.627686,467.889404 
	C683.702881,468.110046 683.511719,468.426422 683.050781,468.835052 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M659.881958,493.609955 
	C659.636902,493.271332 659.801208,492.994507 660.290405,492.669189 
	C660.400818,492.907837 660.292847,493.258209 659.881958,493.609955 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M658.906860,494.646790 
	C658.780457,494.374725 658.955078,494.084106 659.367188,493.689026 
	C659.472412,493.932434 659.340149,494.280334 658.906860,494.646790 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M348.099182,146.371002 
	C348.127838,146.633545 347.868835,146.864319 347.341583,147.127350 
	C347.319427,146.886154 347.565460,146.612686 348.099182,146.371002 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M534.384155,566.887207 
	C534.666870,566.766296 534.947021,566.949158 535.323730,567.369263 
	C535.074036,567.468018 534.727905,567.329590 534.384155,566.887207 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M650.097107,568.355774 
	C650.227966,568.628113 650.056763,568.918091 649.651978,569.316284 
	C649.543884,569.074097 649.669495,568.723755 650.097107,568.355774 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M758.822998,145.861130 
	C758.609863,146.013199 758.266907,145.912674 757.780823,145.580780 
	C757.989563,145.435776 758.341370,145.522156 758.822998,145.861130 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M614.096741,606.359253 
	C614.224731,606.632019 614.051819,606.920349 613.643921,607.313293 
	C613.537903,607.070190 613.666870,606.722595 614.096741,606.359253 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M351.182190,835.125732 
	C351.394836,834.966431 351.737518,835.061768 352.228485,835.383667 
	C352.021912,835.533691 351.667053,835.457031 351.182190,835.125732 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M649.125854,569.402954 
	C649.362488,569.751465 649.188782,570.024475 648.685181,570.335205 
	C648.581970,570.092224 648.702026,569.743713 649.125854,569.402954 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M648.141357,570.431885 
	C648.372375,570.775940 648.205261,571.036560 647.733521,571.343933 
	C647.628845,571.104309 647.733643,570.756897 648.141357,570.431885 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M745.936890,570.159302 
	C746.015198,570.380371 745.826172,570.696533 745.370239,571.108093 
	C745.292114,570.887085 745.480774,570.570740 745.936890,570.159302 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M533.351074,565.908447 
	C533.624695,565.781128 533.916809,565.955444 534.312134,566.368774 
	C534.066711,566.475220 533.718201,566.342651 533.351074,565.908447 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M200.851074,301.178619 
	C201.017990,301.382812 200.936264,301.724548 200.639267,302.223785 
	C200.483475,302.026245 200.542938,301.671204 200.851074,301.178619 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M581.057678,576.836670 
	C580.978333,576.616272 581.167419,576.300415 581.620605,575.884521 
	C581.698425,576.103455 581.512207,576.422302 581.057678,576.836670 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M407.867767,577.588867 
	C407.624603,577.254822 407.782257,576.989258 408.243469,576.667847 
	C408.355804,576.902039 408.263000,577.250427 407.867767,577.588867 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M641.956665,577.166382 
	C642.028870,577.386902 641.830688,577.697571 641.365601,578.103088 
	C641.294495,577.884094 641.490356,577.570251 641.956665,577.166382 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M406.896942,578.635010 
	C406.765686,578.360901 406.937042,578.074646 407.339661,577.680664 
	C407.447144,577.922852 407.323334,578.272888 406.896942,578.635010 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M640.929504,578.185913 
	C641.006348,578.407837 640.816284,578.712097 640.365356,579.106812 
	C640.290405,578.887634 640.476501,578.577942 640.929504,578.185913 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M592.855164,564.551697 
	C592.635437,564.197083 592.811523,563.941711 593.294861,563.650879 
	C593.391663,563.896057 593.274658,564.241333 592.855164,564.551697 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M748.890015,839.594116 
	C748.865234,839.325623 749.127319,839.104370 749.653687,838.852783 
	C749.670959,839.095398 749.423950,839.368408 748.890015,839.594116 
z`}),s.jsx("path",{fill:"#2C556C",opacity:"1.000000",stroke:"none",d:`
M659.946350,558.157959 
	C660.018677,558.378418 659.821838,558.690796 659.356812,559.095581 
	C659.284851,558.875366 659.481018,558.562561 659.946350,558.157959 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M519.159363,552.073608 
	C519.378662,551.994324 519.694763,552.179932 520.106812,552.630371 
	C519.887207,552.709595 519.571655,552.524109 519.159363,552.073608 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M431.110779,552.860535 
	C431.043854,552.653259 431.231781,552.348511 431.680847,551.954468 
	C431.749878,552.164490 431.557770,552.463745 431.110779,552.860535 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M369.181030,845.135864 
	C369.380035,844.956177 369.717682,845.026428 370.221802,845.298523 
	C370.032074,845.462158 369.675842,845.423950 369.181030,845.135864 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M737.916504,845.652100 
	C737.900635,845.401917 738.165894,845.181763 738.699341,844.940002 
	C738.710815,845.172913 738.454224,845.427490 737.916504,845.652100 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M763.904907,551.146729 
	C763.972168,551.356873 763.780884,551.662048 763.327759,552.057373 
	C763.259399,551.845581 763.452881,551.543640 763.904907,551.146729 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M432.120361,551.846008 
	C432.046021,551.634155 432.226929,551.327148 432.666992,550.931152 
	C432.742645,551.145081 432.559143,551.447937 432.120361,551.846008 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M433.101410,550.838623 
	C433.030701,550.624634 433.219269,550.322571 433.669189,549.934570 
	C433.740570,550.149231 433.550629,550.449829 433.101410,550.838623 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M434.107330,549.838623 
	C434.031647,549.624268 434.214783,549.317688 434.657593,548.920105 
	C434.733582,549.134888 434.549866,549.440674 434.107330,549.838623 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M607.859619,548.564331 
	C607.627808,548.216492 607.795654,547.956482 608.271118,547.653687 
	C608.375244,547.895386 608.268799,548.242432 607.859619,548.564331 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M746.802368,138.906281 
	C746.593628,139.084900 746.259399,139.002197 745.763062,138.715118 
	C745.959534,138.555481 746.318237,138.600220 746.802368,138.906281 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M510.424286,662.867310 
	C510.777924,662.642334 511.042633,662.821106 511.337280,663.324646 
	C511.092102,663.421387 510.748138,663.295288 510.424286,662.867310 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M507.345032,659.913635 
	C507.615173,659.789978 507.907837,659.965942 508.303345,660.382446 
	C508.060028,660.486328 507.713806,660.349792 507.345032,659.913635 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M491.694702,707.054382 
	C491.433258,707.159119 491.134949,706.969727 490.743591,706.525146 
	C490.986328,706.433350 491.322083,706.596863 491.694702,707.054382 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M600.090942,660.846436 
	C600.014832,660.632812 600.199219,660.320374 600.644897,659.910889 
	C600.721252,660.125183 600.536316,660.436462 600.090942,660.846436 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M508.375977,660.893433 
	C508.653259,660.776001 508.934753,660.959839 509.312958,661.382446 
	C509.066467,661.479004 508.723297,661.336853 508.375977,660.893433 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M874.732666,250.031006 
	C874.488037,250.087814 874.214478,249.858856 873.877563,249.359772 
	C874.110779,249.308182 874.407288,249.526703 874.732666,250.031006 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M490.693024,706.055176 
	C490.430725,706.169128 490.128906,705.988220 489.728394,705.556030 
	C489.970978,705.456604 490.312225,705.608459 490.693024,706.055176 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M489.671967,705.073486 
	C489.404144,705.183105 489.109833,704.995178 488.721436,704.556030 
	C488.966766,704.461853 489.306122,704.618835 489.671967,705.073486 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M509.380005,661.890076 
	C509.654419,661.757690 509.935303,661.927063 510.324097,662.322388 
	C510.083496,662.429565 509.734985,662.310669 509.380005,661.890076 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M506.310608,658.940918 
	C506.573517,658.821960 506.875732,658.998779 507.279938,659.423706 
	C507.037933,659.526794 506.693909,659.381714 506.310608,658.940918 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M488.670959,704.074341 
	C488.403046,704.187195 488.107880,704.002136 487.716553,703.567505 
	C487.961517,703.470764 488.302643,703.623596 488.670959,704.074341 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M487.662842,703.080322 
	C487.392242,703.191040 487.099518,703.002869 486.713501,702.564331 
	C486.960358,702.469788 487.300507,702.625671 487.662842,703.080322 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M486.665558,702.078918 
	C486.394897,702.188904 486.101898,701.999695 485.715485,701.559448 
	C485.962463,701.465515 486.302856,701.622620 486.665558,702.078918 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M291.088226,701.848267 
	C291.013428,701.635193 291.200562,701.324036 291.647583,700.913086 
	C291.721680,701.125610 291.535889,701.437927 291.088226,701.848267 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M485.669922,701.076965 
	C485.399628,701.186646 485.105347,700.997070 484.717896,700.555237 
	C484.965118,700.461243 485.305542,700.619507 485.669922,701.076965 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M511.427582,663.861328 
	C511.764771,663.621582 512.024841,663.779602 512.336304,664.237854 
	C512.100830,664.348328 511.755066,664.255310 511.427582,663.861328 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M512.493774,664.843140 
	C512.844116,664.632019 513.080200,664.797974 513.355164,665.242798 
	C513.113464,665.339233 512.775269,665.238770 512.493774,664.843140 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M484.671448,700.076172 
	C484.402039,700.197327 484.103912,700.018677 483.704376,699.593628 
	C483.949585,699.490356 484.296173,699.633362 484.671448,700.076172 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M612.059937,712.311401 
	C612.179260,712.575012 612.002625,712.877258 611.577515,713.281128 
	C611.474060,713.038513 611.619080,712.694336 612.059937,712.311401 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M275.030945,718.827759 
	C274.956726,718.604736 275.155670,718.293213 275.621277,717.884766 
	C275.693329,718.104919 275.498749,718.422119 275.030945,718.827759 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M608.156738,716.472168 
	C608.379333,716.815125 608.219543,717.057373 607.779663,717.345947 
	C607.676025,717.108093 607.767639,716.767822 608.156738,716.472168 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M609.152222,715.471008 
	C609.367126,715.823059 609.195557,716.069092 608.730957,716.353027 
	C608.634521,716.109802 608.743774,715.767822 609.152222,715.471008 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M339.077209,650.844727 
	C339.004913,650.629028 339.195709,650.319092 339.651001,649.916870 
	C339.723785,650.133179 339.532074,650.441833 339.077209,650.844727 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M610.132935,714.418335 
	C610.371704,714.759033 610.208374,715.024353 609.734863,715.337830 
	C609.626648,715.099915 609.728638,714.752258 610.132935,714.418335 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M611.088989,713.347717 
	C611.225891,713.615356 611.062744,713.908020 610.669861,714.313599 
	C610.556396,714.075256 610.672607,713.724060 611.088989,713.347717 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M608.840088,651.517700 
	C608.618896,651.177551 608.774963,650.940613 609.202393,650.655457 
	C609.306396,650.891174 609.220947,651.229126 608.840088,651.517700 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M842.580078,212.132126 
	C842.223206,212.360474 841.955994,212.181046 841.661255,211.671539 
	C841.908691,211.573761 842.254089,211.701385 842.580078,212.132126 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M513.494385,665.842896 
	C513.845032,665.631104 514.081116,665.796692 514.355957,666.241211 
	C514.114014,666.338013 513.775635,666.238037 513.494385,665.842896 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M341.915710,712.152954 
	C341.995270,712.369446 341.811310,712.684937 341.365356,713.100708 
	C341.286316,712.884644 341.469238,712.568359 341.915710,712.152954 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M843.527649,213.150116 
	C843.161438,213.351822 842.914001,213.163742 842.647217,212.665466 
	C842.898987,212.580353 843.238525,212.715378 843.527649,213.150116 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M607.852417,652.544006 
	C607.628174,652.197693 607.794312,651.946899 608.255188,651.653015 
	C608.357056,651.893127 608.254639,652.236389 607.852417,652.544006 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M844.501221,214.158661 
	C844.142029,214.365692 843.904846,214.192780 843.635132,213.734100 
	C843.882263,213.641525 844.222473,213.751663 844.501221,214.158661 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M888.067139,709.818176 
	C887.930359,709.589905 888.062683,709.244873 888.442871,708.767090 
	C888.572632,708.989990 888.454468,709.345703 888.067139,709.818176 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M875.543579,251.134949 
	C875.250122,251.195358 875.013489,250.960419 874.720947,250.475311 
	C874.976746,250.429962 875.288574,250.634781 875.543579,251.134949 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M505.307190,657.943115 
	C505.569977,657.837097 505.868622,658.026001 506.260345,658.470215 
	C506.016663,658.563049 505.679840,658.400513 505.307190,657.943115 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M492.717072,708.032227 
	C492.461975,708.141602 492.155853,707.960754 491.751129,707.525513 
	C491.990387,707.428040 492.328217,707.584961 492.717072,708.032227 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M308.087799,683.822876 
	C308.007172,683.603394 308.190216,683.295044 308.632324,682.892334 
	C308.711395,683.110046 308.531433,683.422058 308.087799,683.822876 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M471.803162,687.941162 
	C471.577759,688.021179 471.273254,687.831604 470.877319,687.381470 
	C471.098663,687.304321 471.411377,687.487915 471.803162,687.941162 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M470.801605,686.943726 
	C470.575623,687.023132 470.271667,686.832458 469.876892,686.380859 
	C470.098572,686.304443 470.411102,686.489014 470.801605,686.943726 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M469.802124,685.943481 
	C469.576141,686.022705 469.272217,685.831665 468.877716,685.379395 
	C469.099518,685.303162 469.411835,685.488220 469.802124,685.943481 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M577.867432,684.580566 
	C577.630554,684.233459 577.798950,683.966980 578.284790,683.658691 
	C578.390259,683.900452 578.280396,684.248596 577.867432,684.580566 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M468.803528,684.942383 
	C468.577515,685.021423 468.273285,684.830322 467.878937,684.377625 
	C468.101013,684.301453 468.413177,684.486816 468.803528,684.942383 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M307.099731,684.849365 
	C307.025024,684.637756 307.208374,684.326660 307.652100,683.919800 
	C307.727631,684.132629 307.542725,684.441223 307.099731,684.849365 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M639.145874,683.450867 
	C639.373352,683.796265 639.208557,684.048462 638.747742,684.344849 
	C638.644409,684.105530 638.744995,683.761719 639.145874,683.450867 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M467.805542,683.941040 
	C467.578247,684.020264 467.272583,683.829346 466.879578,683.374939 
	C467.103882,683.297974 467.415527,683.484436 467.805542,683.941040 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M526.155518,678.063110 
	C526.374390,677.991089 526.685303,678.186096 527.088013,678.648438 
	C526.869019,678.720581 526.558289,678.525391 526.155518,678.063110 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M527.175110,679.085876 
	C527.394714,679.006409 527.701843,679.191711 528.103271,679.636597 
	C527.885864,679.714294 527.574280,679.532410 527.175110,679.085876 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M640.135010,682.429016 
	C640.365967,682.778564 640.195068,683.041138 639.708374,683.341003 
	C639.606262,683.098083 639.719788,682.752686 640.135010,682.429016 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M371.896240,680.144531 
	C371.969452,680.356628 371.785095,680.667847 371.337524,681.070190 
	C371.262482,680.855408 371.450623,680.549500 371.896240,680.144531 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M466.808136,682.938354 
	C466.583099,683.017212 466.278564,682.825928 465.881958,682.373535 
	C466.102814,682.297668 466.415710,682.482971 466.808136,682.938354 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M905.097900,681.802856 
	C904.920166,681.597778 905.001282,681.264893 905.282715,680.766724 
	C905.440979,680.959412 905.398804,681.317200 905.097900,681.802856 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M641.129150,681.418518 
	C641.360229,681.771667 641.184509,682.038818 640.680969,682.336426 
	C640.580994,682.091064 640.704102,681.746216 641.129150,681.418518 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M483.645020,699.096069 
	C483.368683,699.211548 483.080078,699.024841 482.695923,698.592407 
	C482.944550,698.495728 483.288635,698.644836 483.645020,699.096069 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M482.640930,698.101440 
	C482.371826,698.244385 482.084503,698.084656 481.679443,697.703674 
	C481.915344,697.587891 482.269012,697.693420 482.640930,698.101440 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M514.494995,666.842407 
	C514.845703,666.630371 515.081604,666.795715 515.356812,667.239197 
	C515.114807,667.336243 514.776184,667.237000 514.494995,666.842407 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M322.116150,668.848877 
	C322.044403,668.642334 322.231140,668.328430 322.677826,667.908936 
	C322.750061,668.116150 322.562347,668.428894 322.116150,668.848877 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M515.496765,667.840271 
	C515.846008,667.626465 516.080688,667.789185 516.356445,668.226868 
	C516.115356,668.325500 515.776978,668.230469 515.496765,667.840271 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M543.335815,694.920654 
	C543.603271,694.792358 543.899597,694.962952 544.302979,695.372253 
	C544.061584,695.480469 543.713196,695.350037 543.335815,694.920654 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M542.295776,693.953430 
	C542.555298,693.835205 542.861633,694.010498 543.270325,694.436401 
	C543.029297,694.540344 542.686035,694.393616 542.295776,693.953430 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M541.275879,692.969727 
	C541.529968,692.863831 541.835632,693.048523 542.239380,693.489563 
	C542.000793,693.583984 541.664124,693.422119 541.275879,692.969727 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M402.921021,647.153809 
	C402.997986,647.370300 402.810577,647.684448 402.360901,648.097534 
	C402.284668,647.881470 402.470673,647.566406 402.921021,647.153809 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M456.591980,673.127502 
	C456.243866,673.367432 455.973206,673.197632 455.662781,672.702393 
	C455.905243,672.596741 456.254059,672.710327 456.591980,673.127502 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M457.649597,674.093262 
	C457.378143,674.227600 457.085907,674.060364 456.684601,673.660034 
	C456.926605,673.548462 457.277679,673.670044 457.649597,674.093262 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M458.653564,675.089355 
	C458.379303,675.203674 458.088501,675.016968 457.702942,674.582520 
	C457.951080,674.485962 458.294067,674.637146 458.653564,675.089355 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M647.947998,674.168091 
	C648.025940,674.389282 647.834595,674.703735 647.378540,675.116821 
	C647.302185,674.897461 647.490417,674.579407 647.947998,674.168091 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M585.079346,676.842773 
	C585.002808,676.627380 585.190186,676.314758 585.637695,675.901611 
	C585.712952,676.115906 585.528076,676.430725 585.079346,676.842773 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M473.832275,689.944824 
	C473.612000,690.021790 473.298492,689.830688 472.887756,689.375549 
	C473.106689,689.299866 473.422882,689.488281 473.832275,689.944824 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M472.804932,688.939148 
	C472.580536,689.018372 472.276703,688.828491 471.880859,688.378479 
	C472.101044,688.302246 472.413300,688.486145 472.804932,688.939148 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M846.077942,762.841553 
	C846.000610,762.625854 846.187317,762.313232 846.635315,761.900269 
	C846.711670,762.114807 846.526855,762.429688 846.077942,762.841553 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M213.983551,278.239868 
	C214.161362,278.461853 214.060593,278.780334 213.760712,279.255188 
	C213.609390,279.053162 213.657196,278.694763 213.983551,278.239868 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M646.095093,611.826965 
	C646.014160,611.609802 646.195374,611.301086 646.633850,610.895386 
	C646.713074,611.110657 646.535156,611.423096 646.095093,611.826965 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M851.922607,756.665833 
	C851.792419,756.398743 851.960571,756.101135 852.367615,755.696655 
	C852.478027,755.938293 852.349487,756.286804 851.922607,756.665833 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M292.822021,765.164673 
	C292.978638,765.367432 292.893585,765.712341 292.584106,766.208008 
	C292.433258,766.008118 292.506805,765.657471 292.822021,765.164673 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M852.883057,755.610291 
	C852.631592,755.277222 852.788818,755.000977 853.265869,754.670349 
	C853.380920,754.905518 853.282898,755.255859 852.883057,755.610291 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M645.098877,612.849976 
	C645.026428,612.638550 645.211792,612.328979 645.658142,611.926331 
	C645.731689,612.139404 645.544250,612.445618 645.098877,612.849976 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M809.855835,181.837036 
	C809.651184,181.923950 809.335205,181.764847 808.915222,181.353928 
	C809.122253,181.265091 809.433411,181.428055 809.855835,181.837036 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M893.711670,278.050354 
	C893.466370,278.084869 893.215637,277.836670 892.928894,277.315308 
	C893.164001,277.283936 893.435120,277.525787 893.711670,278.050354 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M369.082947,618.842957 
	C369.015167,618.632141 369.212891,618.321045 369.674408,617.907104 
	C369.741608,618.117126 369.545044,618.429871 369.082947,618.842957 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M863.885559,742.626953 
	C863.622131,742.306396 863.766846,742.028992 864.218811,741.681152 
	C864.343445,741.908997 864.265991,742.262085 863.885559,742.626953 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M713.934448,604.157593 
	C714.010559,604.377441 713.820007,604.691711 713.362671,605.099976 
	C713.286499,604.879944 713.477112,604.565979 713.934448,604.157593 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M824.073364,784.849670 
	C824.018250,784.642395 824.226013,784.346252 824.697510,783.962158 
	C824.752930,784.169739 824.544556,784.465271 824.073364,784.849670 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M384.058533,602.804138 
	C383.977997,602.578125 384.167572,602.273010 384.618286,601.876465 
	C384.695831,602.098328 384.512207,602.411682 384.058533,602.804138 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M654.866150,602.580933 
	C654.626953,602.232605 654.794373,601.966919 655.276428,601.656860 
	C655.383362,601.898804 655.277222,602.249146 654.866150,602.580933 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M383.075195,603.837891 
	C382.994659,603.619690 383.178589,603.303589 383.624023,602.887634 
	C383.703583,603.105164 383.521637,603.422607 383.075195,603.837891 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M653.890991,603.627258 
	C653.756653,603.349548 653.926453,603.065491 654.325195,602.674072 
	C654.434448,602.918152 654.314819,603.269470 653.890991,603.627258 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M895.595947,281.110321 
	C895.326111,281.138306 895.103638,280.877869 894.846069,280.353485 
	C895.088440,280.333679 895.365845,280.577789 895.595947,281.110321 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M601.914429,619.146545 
	C601.981018,619.359070 601.786499,619.664856 601.327637,620.059082 
	C601.259949,619.844910 601.456665,619.542358 601.914429,619.146545 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M442.133362,605.415527 
	C442.372864,605.761292 442.206482,606.027954 441.726135,606.340820 
	C441.618439,606.099854 441.723541,605.749695 442.133362,605.415527 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M838.854492,770.550293 
	C838.633240,770.196106 838.807800,769.941223 839.288940,769.650391 
	C839.386658,769.895325 839.271667,770.240417 838.854492,770.550293 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M511.809082,606.934631 
	C511.585022,607.014404 511.279785,606.825745 510.882782,606.376099 
	C511.103333,606.298828 511.415649,606.482483 511.809082,606.934631 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M839.847656,769.545715 
	C839.617432,769.205383 839.776001,768.956787 840.219971,768.657471 
	C840.327026,768.893738 840.237366,769.237305 839.847656,769.545715 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M512.835571,607.940430 
	C512.617126,608.016052 512.304871,607.824097 511.893829,607.369141 
	C512.110596,607.295166 512.426208,607.484009 512.835571,607.940430 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M613.121216,607.398621 
	C613.364929,607.738464 613.199890,608.011475 612.712891,608.332397 
	C612.604309,608.094971 612.711487,607.745483 613.121216,607.398621 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M267.840698,726.528198 
	C267.617615,726.179443 267.780701,725.935852 268.229248,725.649170 
	C268.331848,725.890259 268.235901,726.232727 267.840698,726.528198 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M515.655273,730.087341 
	C515.384827,730.218140 515.090942,730.048279 514.689941,729.641785 
	C514.932495,729.532410 515.282104,729.659546 515.655273,730.087341 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M325.932404,729.158081 
	C326.009552,729.378723 325.820312,729.694397 325.363831,730.103149 
	C325.286438,729.881836 325.476227,729.567444 325.932404,729.158081 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M354.040741,634.833984 
	C353.969238,634.612732 354.169128,634.302917 354.636200,633.898926 
	C354.706268,634.118347 354.509216,634.431885 354.040741,634.833984 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M514.604736,729.121094 
	C514.263062,729.367920 513.988220,729.203369 513.666748,728.713501 
	C513.906067,728.603271 514.256592,728.710449 514.604736,729.121094 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M623.857361,635.565430 
	C623.624084,635.225159 623.786133,634.967468 624.245728,634.659424 
	C624.353027,634.896729 624.256165,635.243042 623.857361,635.565430 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M622.882080,636.607971 
	C622.639160,636.263245 622.808716,635.986633 623.310547,635.669067 
	C623.417297,635.910278 623.301270,636.259644 622.882080,636.607971 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M621.912598,637.655151 
	C621.783325,637.385010 621.954285,637.091431 622.362427,636.691406 
	C622.470764,636.933838 622.341858,637.282776 621.912598,637.655151 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M232.419586,726.865112 
	C232.777328,726.637512 233.044861,726.818176 233.342178,727.327515 
	C233.094238,727.425232 232.746719,727.297607 232.419586,726.865112 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M686.132263,633.412842 
	C686.371155,633.760071 686.202698,634.028564 685.717407,634.342102 
	C685.610413,634.100037 685.718628,633.748962 686.132263,633.412842 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M347.851807,641.562439 
	C347.610535,641.231995 347.759888,640.979797 348.192566,640.669067 
	C348.306976,640.900024 348.229156,641.243347 347.851807,641.562439 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M346.886017,642.616699 
	C346.638947,642.274841 346.806091,641.995239 347.307495,641.671997 
	C347.416534,641.911926 347.302704,642.262146 346.886017,642.616699 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M601.933716,723.163452 
	C602.013611,723.383545 601.827271,723.699463 601.376282,724.112549 
	C601.296875,723.892944 601.482178,723.576050 601.933716,723.163452 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M616.057617,643.833984 
	C615.980225,643.615173 616.171143,643.301941 616.624146,642.886963 
	C616.699402,643.103333 616.512695,643.421448 616.057617,643.833984 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M491.157959,644.093506 
	C491.368652,644.022278 491.683075,644.214233 492.101196,644.669556 
	C491.890503,644.740845 491.576111,644.548767 491.157959,644.093506 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M225.924225,260.199890 
	C226.059845,260.429901 225.926987,260.765991 225.547913,261.226929 
	C225.419708,261.003143 225.537704,260.654541 225.924225,260.199890 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M841.582031,211.128540 
	C841.293335,211.234299 841.027588,211.038086 840.676514,210.603668 
	C840.929138,210.519165 841.267090,210.672867 841.582031,211.128540 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M493.167297,646.038513 
	C493.391510,645.963135 493.705566,646.160339 494.114014,646.626282 
	C493.891327,646.700378 493.574249,646.505737 493.167297,646.038513 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M695.948181,623.161194 
	C696.019836,623.380676 695.822388,623.691101 695.358398,624.095703 
	C695.287598,623.877258 695.483337,623.564697 695.948181,623.161194 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M600.888550,620.159119 
	C600.966919,620.375244 600.786865,620.685242 600.345703,621.084656 
	C600.266479,620.867065 600.448364,620.560059 600.888550,620.159119 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M599.910522,621.170532 
	C599.988098,621.390381 599.801941,621.697388 599.353210,622.093506 
	C599.276062,621.874268 599.461426,621.565918 599.910522,621.170532 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M598.917175,622.175171 
	C598.994995,622.396667 598.807800,622.703674 598.357483,623.099060 
	C598.280273,622.878479 598.466187,622.569580 598.917175,622.175171 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M317.119751,738.385864 
	C317.372192,738.724487 317.211090,739.001526 316.727478,739.332336 
	C316.613525,739.095093 316.713928,738.741150 317.119751,738.385864 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M597.919128,623.180847 
	C597.991699,623.398499 597.795044,623.707581 597.333862,624.115662 
	C597.262939,623.900513 597.456421,623.586365 597.919128,623.180847 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M655.846680,601.541504 
	C655.623535,601.192688 655.790222,600.944336 656.246338,600.650513 
	C656.348450,600.891968 656.248657,601.237610 655.846680,601.541504 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M587.036499,736.269165 
	C587.080505,736.512085 586.840637,736.773926 586.328064,737.085327 
	C586.287720,736.852600 586.520203,736.570374 587.036499,736.269165 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M362.875214,625.594971 
	C362.631744,625.254272 362.795502,624.983582 363.278229,624.665649 
	C363.387512,624.903931 363.282593,625.252747 362.875214,625.594971 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M531.864563,625.810181 
	C531.663635,625.900024 531.345032,625.750183 530.921265,625.349548 
	C531.126465,625.255981 531.436646,625.413269 531.864563,625.810181 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M283.903229,194.162994 
	C283.964966,194.373932 283.765259,194.671066 283.303406,195.053711 
	C283.241394,194.842560 283.441589,194.545883 283.903229,194.162994 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M630.079712,628.841187 
	C630.000916,628.624207 630.185425,628.309326 630.632812,627.896729 
	C630.711426,628.113770 630.527161,628.428528 630.079712,628.841187 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M888.800537,270.250793 
	C888.551880,270.277405 888.261169,269.980774 887.908691,269.370544 
	C888.150757,269.347137 888.454651,269.637360 888.800537,270.250793 
z`}),s.jsx("path",{fill:"#2C566C",opacity:"1.000000",stroke:"none",d:`
M593.912964,731.160522 
	C593.963989,731.371521 593.757935,731.654846 593.288574,732.000244 
	C593.235535,731.785767 593.445740,731.509216 593.912964,731.160522 
z`}),s.jsx("path",{fill:"#3BC679",opacity:"1.000000",stroke:"none",d:`
M426.114136,514.197021 
	C427.940674,528.498352 418.365784,539.267761 405.186127,540.757812 
	C393.329529,542.098267 382.499786,533.212891 380.238678,519.711609 
	C371.855804,469.656036 381.367981,423.397522 412.088379,382.681061 
	C450.321350,332.007507 502.070129,308.666168 565.247498,311.282227 
	C594.014099,312.473389 620.729370,321.557434 645.416809,336.418457 
	C652.531311,340.701202 658.100037,346.153809 659.024109,355.011383 
	C659.998413,364.350220 656.565491,371.755646 648.852234,376.895752 
	C640.724548,382.312073 632.077942,382.257690 623.876160,377.210205 
	C612.295410,370.083252 600.066101,364.575928 586.959656,361.062958 
	C526.064758,344.740967 460.704315,376.260254 435.043365,434.167267 
	C423.694092,459.778259 420.841980,486.284760 426.114136,514.197021 
z`}),s.jsx("path",{fill:"#1C5679",opacity:"1.000000",stroke:"none",d:`
M350.132751,800.902832 
	C345.086639,797.328003 340.331238,793.965210 335.594025,790.576965 
	C323.010162,781.576538 320.968933,766.887268 331.398163,755.610352 
	C354.916138,730.180664 378.620514,704.919556 402.524658,679.852783 
	C412.824463,669.051941 426.280273,669.328064 436.948792,679.776428 
	C444.563690,687.234192 452.227661,694.644775 459.714111,702.229980 
	C468.853180,711.489685 469.444611,723.519287 460.569519,733.052368 
	C438.330597,756.940186 415.912567,780.665833 393.269348,804.170349 
	C383.969452,813.823914 370.834015,814.617920 359.561096,807.201843 
	C356.503784,805.190613 353.474091,803.137268 350.132751,800.902832 
z`}),s.jsx("path",{fill:"#1C5679",opacity:"1.000000",stroke:"none",d:`
M538.853088,816.856689 
	C553.885986,800.787720 568.684021,784.985474 583.488098,769.188965 
	C584.626465,767.974121 585.770508,766.760254 586.976135,765.613464 
	C595.291748,757.704407 606.572876,757.159912 614.814026,765.073608 
	C633.311279,782.836182 651.645386,800.777039 669.705688,818.982849 
	C678.466736,827.814453 674.614685,842.066162 662.586243,845.908386 
	C639.080750,853.416687 615.071045,859.026794 590.435974,860.770203 
	C572.868958,862.013367 555.192566,861.774231 537.562622,862.036499 
	C529.546021,862.155701 523.217468,858.927307 520.104065,851.203857 
	C517.074951,843.689514 519.421570,837.247131 524.871704,831.628479 
	C529.509399,826.847290 534.041138,821.963318 538.853088,816.856689 
z`}),s.jsx("path",{fill:"#1C5679",opacity:"1.000000",stroke:"none",d:`
M506.405975,745.589844 
	C514.073853,753.029663 521.491272,760.218872 528.899231,767.417786 
	C539.713684,777.927063 539.896729,791.010742 529.480347,801.809937 
	C516.758301,814.999756 503.966034,828.125732 491.452850,841.511902 
	C482.147644,851.466309 471.297028,854.529846 458.418427,850.148743 
	C444.572296,845.438477 430.717682,840.747009 416.946747,835.823669 
	C403.501312,831.016663 400.506989,818.760925 410.303131,808.296021 
	C426.811798,790.660217 443.518280,773.209534 460.143951,755.683228 
	C463.124939,752.540833 466.331299,749.584412 469.066437,746.241577 
	C479.526306,733.457764 494.619202,731.732971 506.405975,745.589844 
z`}),s.jsx("path",{fill:"#1C5679",opacity:"1.000000",stroke:"none",d:`
M701.398315,753.400635 
	C693.737183,761.538452 686.347290,769.447144 678.898376,777.299805 
	C670.797302,785.839661 661.130066,786.204956 652.579468,778.106995 
	C644.479614,770.435913 636.491638,762.641418 628.616760,754.739441 
	C619.618958,745.710754 618.984680,733.108643 627.608276,723.786865 
	C645.134216,704.841797 662.868958,686.083801 680.816040,667.537292 
	C689.478638,658.585388 702.689575,658.029358 711.957947,666.271362 
	C720.905151,674.227844 729.399231,682.735291 737.646423,691.423889 
	C743.907166,698.019592 743.128784,708.846985 736.492432,715.969604 
	C724.913574,728.396912 713.263733,740.758057 701.398315,753.400635 
z`}),s.jsx("path",{fill:"#1C5679",opacity:"1.000000",stroke:"none",d:`
M809.720825,638.722717 
	C797.972656,651.254211 786.511536,663.569946 774.941406,675.782410 
	C765.116272,686.153015 755.902344,686.222229 745.697571,676.131958 
	C738.472595,668.988159 731.214600,661.874817 724.118042,654.604736 
	C714.636108,644.890808 714.082764,632.901733 723.318787,622.943420 
	C736.454895,608.780212 749.902466,594.892090 763.573853,581.243896 
	C772.653198,572.179871 786.110779,572.149231 795.606018,580.802795 
	C803.481750,587.980469 811.159729,595.391357 818.650024,602.971008 
	C825.977783,610.386230 826.113403,620.723206 819.245117,628.676575 
	C816.309570,632.076050 813.064819,635.208435 809.720825,638.722717 
z`}),s.jsx("path",{fill:"#3CC579",opacity:"1.000000",stroke:"none",d:`
M745.711426,204.629868 
	C726.929138,237.083755 708.373962,269.239746 689.747925,301.354584 
	C682.652344,313.588776 673.680176,318.061676 662.334900,315.282928 
	C647.369202,311.617462 639.633850,295.178131 647.288513,281.821625 
	C667.154968,247.156906 687.312012,212.656693 707.609558,178.242111 
	C714.054993,167.313766 727.390198,163.908875 738.018372,169.685394 
	C748.967468,175.636368 753.257935,189.271729 747.788635,200.789536 
	C747.218018,201.991241 746.539001,203.141464 745.711426,204.629868 
z`}),s.jsx("path",{fill:"#3CC579",opacity:"1.000000",stroke:"none",d:`
M456.346893,274.648254 
	C459.756134,280.403442 463.181732,285.687714 463.174042,292.440979 
	C463.162140,302.893616 456.575836,312.167877 446.794128,314.985199 
	C436.140961,318.053497 425.941742,314.449951 420.414856,305.016205 
	C400.473083,270.977966 380.630066,236.881119 360.923859,202.706009 
	C354.146881,190.953156 357.754242,176.808090 368.684204,170.326187 
	C380.240204,163.473083 393.858276,167.269287 401.181061,179.778137 
	C419.600159,211.241837 437.846863,242.806473 456.346893,274.648254 
z`}),s.jsx("path",{fill:"#3CC679",opacity:"1.000000",stroke:"none",d:`
M263.095917,295.655762 
	C289.512817,310.878326 315.577515,325.926331 341.622253,341.008759 
	C350.545471,346.176178 359.424866,351.419464 368.313263,356.646820 
	C379.786316,363.394379 383.840942,377.545898 377.499146,388.643829 
	C371.241608,399.594330 357.261780,403.551270 345.817017,396.914581 
	C311.437683,376.978485 277.158264,356.867432 242.982559,336.584229 
	C231.460663,329.746033 227.747513,317.966827 232.878769,307.153625 
	C238.285904,295.759003 249.881897,291.230865 263.095917,295.655762 
z`}),s.jsx("path",{fill:"#3DC67A",opacity:"1.000000",stroke:"none",d:`
M323.828369,511.734406 
	C286.373749,511.720612 249.396973,511.730713 212.420364,511.659332 
	C208.941391,511.652618 205.371582,511.538818 202.001816,510.776764 
	C191.002197,508.289185 183.977493,497.910431 185.134918,486.352356 
	C186.298187,474.735870 195.066559,466.015625 206.560333,465.964661 
	C247.366852,465.783722 288.174774,465.779602 328.981628,465.898285 
	C339.830139,465.929840 349.115723,474.890167 350.077515,485.489716 
	C351.247253,498.380981 344.381012,508.564636 332.737152,510.941742 
	C329.987427,511.503113 327.119690,511.486572 323.828369,511.734406 
z`}),s.jsx("path",{fill:"#3CC679",opacity:"1.000000",stroke:"none",d:`
M572.532227,130.595184 
	C574.160217,135.586472 576.747681,140.275497 576.788452,144.986557 
	C577.126892,184.132812 577.032532,223.283157 576.985229,262.432159 
	C576.969116,275.778900 567.152222,285.816223 554.257446,285.952972 
	C541.075745,286.092773 530.967346,276.102356 530.942505,262.540131 
	C530.870789,223.391266 530.891846,184.242081 530.960327,145.093170 
	C530.979797,133.987885 536.402039,126.088120 545.958191,122.662285 
	C555.886230,119.103127 565.065735,121.764648 572.532227,130.595184 
z`}),s.jsx("path",{fill:"#1C5679",opacity:"1.000000",stroke:"none",d:`
M686.353455,809.396423 
	C682.565063,801.484497 683.466003,794.518921 689.237549,788.353455 
	C708.253174,768.040100 727.302307,747.757996 746.343262,727.468262 
	C747.369080,726.375183 748.381165,725.259094 749.495667,724.260925 
	C756.566711,717.927307 766.057556,717.967590 772.894470,724.537537 
	C778.901184,730.309631 784.709045,736.288330 790.624878,742.155457 
	C801.467773,752.908997 801.044678,767.363525 789.445129,777.552612 
	C773.608154,791.463806 756.009094,802.848511 737.757629,813.277466 
	C734.434998,815.175964 731.117126,817.084290 727.761169,818.922668 
	C711.994629,827.559570 697.257629,824.254883 686.353455,809.396423 
z`}),s.jsx("path",{fill:"#1C5679",opacity:"1.000000",stroke:"none",d:`
M836.733521,730.740845 
	C826.691589,741.614258 813.845581,741.987976 803.576538,731.946838 
	C797.381836,725.889526 791.187805,719.831177 785.034485,713.731873 
	C777.162842,705.929443 776.728760,696.107483 784.239502,687.939270 
	C799.576233,671.260010 815.022888,654.680542 830.549561,638.177734 
	C838.424866,629.807312 848.146179,629.866943 856.372620,638.012573 
	C860.516663,642.115906 864.704102,646.177734 868.769592,650.357788 
	C877.384949,659.215881 878.706238,668.959717 872.698303,680.043274 
	C862.812805,698.280579 850.736694,714.981079 836.733521,730.740845 
z`})]});function ag(){const[a,i]=k.useState(!1);return s.jsxs("nav",{className:"fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100",children:[s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"flex justify-between h-20 items-center",children:[s.jsxs(N0,{to:"/",className:"flex items-center space-x-2 group",children:[s.jsx(zu,{className:"w-12 h-12 group-hover:scale-105 transition-transform duration-300 rounded-xl"}),s.jsxs("span",{className:"text-xl font-display font-bold text-solar-blue",children:["Bandi ",s.jsx("span",{className:"text-solar-green",children:"Fotovoltaico"})]})]}),s.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[s.jsx(N0,{to:"/#servizi",className:"text-sm font-medium text-gray-600 hover:text-solar-blue transition-colors",children:"Servizi"}),s.jsx(N0,{to:"/#come-funziona",className:"text-sm font-medium text-gray-600 hover:text-solar-blue transition-colors",children:"Come Funziona"}),s.jsx(N0,{to:"/#prezzi",className:"text-sm font-medium text-gray-600 hover:text-solar-blue transition-colors",children:"Prezzi"}),s.jsx(N0,{to:"/contatti",className:"text-sm font-medium text-gray-600 hover:text-solar-blue transition-colors",children:"Contatti"}),s.jsx(N0,{to:"/#prezzi",className:"px-6 py-2.5 bg-solar-blue text-white rounded-full text-sm font-semibold hover:bg-solar-dark transition-all shadow-lg hover:shadow-solar-blue/20",children:"Inizia Ora"})]}),s.jsx("div",{className:"md:hidden",children:s.jsx("button",{onClick:()=>i(!a),className:"p-2 text-gray-600",children:a?s.jsx(tg,{className:"w-6 h-6"}):s.jsx(Kx,{className:"w-6 h-6"})})})]})}),a&&s.jsxs(g6.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"md:hidden bg-white border-b border-gray-100 px-4 py-6 space-y-4",children:[s.jsx(N0,{to:"/#servizi",onClick:()=>i(!1),className:"block text-lg font-medium text-gray-600",children:"Servizi"}),s.jsx(N0,{to:"/#come-funziona",onClick:()=>i(!1),className:"block text-lg font-medium text-gray-600",children:"Come Funziona"}),s.jsx(N0,{to:"/#prezzi",onClick:()=>i(!1),className:"block text-lg font-medium text-gray-600",children:"Prezzi"}),s.jsx(N0,{to:"/contatti",onClick:()=>i(!1),className:"block text-lg font-medium text-gray-600",children:"Contatti"}),s.jsx(N0,{to:"/#prezzi",onClick:()=>i(!1),className:"block w-full text-center py-3 bg-solar-blue text-white rounded-xl font-semibold",children:"Inizia Ora"})]})]})}function ig(){const a=new Date().getFullYear();return s.jsx("footer",{className:"bg-solar-dark text-white pt-20 pb-10",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 mb-16",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center space-x-2 mb-6",children:[s.jsx(zu,{className:"w-12 h-12 bg-white rounded-xl p-1"}),s.jsxs("span",{className:"text-2xl font-display font-bold",children:["Bandi ",s.jsx("span",{className:"text-solar-green",children:"Fotovoltaico"})]})]}),s.jsx("p",{className:"text-gray-400 max-w-md mb-8 leading-relaxed",children:"Analizziamo bandi e agevolazioni per permettere ai professionisti del fotovoltaico di offrire il massimo risparmio ai propri clienti. Focus alle regioni e appalti nazionali."})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-lg font-bold mb-6",children:"Link Rapidi"}),s.jsxs("ul",{className:"space-y-4 text-gray-400",children:[s.jsx("li",{children:s.jsx(N0,{to:"/",className:"hover:text-solar-yellow transition-colors",children:"Home"})}),s.jsx("li",{children:s.jsx(N0,{to:"/contatti",className:"hover:text-solar-yellow transition-colors",children:"Contatti"})}),s.jsx("li",{children:s.jsx(N0,{to:"/privacy-policy",className:"hover:text-solar-yellow transition-colors",children:"Privacy Policy"})}),s.jsx("li",{children:s.jsx(N0,{to:"/cookie-policy",className:"hover:text-solar-yellow transition-colors",children:"Cookie Policy"})}),s.jsx("li",{children:s.jsx(N0,{to:"/terms",className:"hover:text-solar-yellow transition-colors",children:"Termini e Condizioni"})})]})]})]}),s.jsx("div",{className:"pt-8 border-t border-white/10 text-center text-gray-500 text-sm",children:s.jsxs("p",{children:["© ",a," Bandi Fotovoltaico. Tutti i diritti riservati. P.IVA 01234567890"]})})]})})}const lg=[{icon:s.jsx(Jx,{className:"w-6 h-6"}),title:"Monitoraggio Bandi",description:"Analisi quotidiana di bandi regionali (PR FESR), nazionali e incentivi GSE per impianti fotovoltaici"},{icon:s.jsx(Xx,{className:"w-6 h-6"}),title:"Appalti & Gare pubblici",description:"Selezione mirata di gare d'appalto pubbliche per efficientamento energetico e comunità energetiche"},{icon:s.jsx(Ix,{className:"w-6 h-6"}),title:"Guida Agevolazioni",description:"Focus tecnico su Credito d'Imposta 5.0, Detrazioni e Meccanismi di Scambio sul Posto"},{icon:s.jsx(Wx,{className:"w-6 h-6"}),title:"Analisi di Vendita",description:"Trasformiamo dati burocratici in argomenti commerciali pronti per i tuoi preventivi solari"}],sg=[{number:"01",title:"Raccolta Dati",description:"Aggreghiamo dati da fonti ufficiali, PDF tecnici e portali istituzionali"},{number:"02",title:"Analisi Esperta",description:"Filtriamo le opportunità più concrete per il fotovoltaico"},{number:"03",title:"Newsletter Mensile",description:"Ricevi un report pulito, chiaro e ordinato pronto all'uso per i tuoi preventivi"}];function og(){return s.jsxs("div",{className:"pt-20",children:[s.jsxs("section",{className:"relative overflow-hidden py-24 lg:py-32",children:[s.jsxs("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10",children:[s.jsx("div",{className:"absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-solar-yellow/10 rounded-full blur-3xl animate-pulse"}),s.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-solar-green/10 rounded-full blur-3xl animate-pulse"})]}),s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:s.jsxs(g6.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[s.jsx("h1",{className:"text-5xl lg:text-7xl font-display font-black mb-8 leading-tight",children:s.jsxs("span",{className:"gradient-text",children:["L'Energia dei Bandi",s.jsx("br",{}),"Nelle Tue Mani"]})}),s.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed",children:"Analisi tecnica di bandi europei, nazionali e regionali. Detrazioni, incentivi GSE e appalti pubblici per il settore fotovoltaico. Trasforma la burocrazia in opportunità di vendita"}),s.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[s.jsxs("a",{href:"#prezzi",className:"w-full sm:w-auto px-8 py-4 bg-solar-blue text-white rounded-2xl font-bold text-lg hover:bg-solar-dark transition-all shadow-xl shadow-solar-blue/20 flex items-center justify-center group",children:["Abbonati alla Newsletter",s.jsx(Bx,{className:"ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"})]}),s.jsx("a",{href:"#servizi",className:"w-full sm:w-auto px-8 py-4 bg-white text-solar-blue border-2 border-solar-blue/10 rounded-2xl font-bold text-lg hover:bg-solar-light transition-all text-center",children:"Scopri il Servizio"})]})]})})]}),s.jsx("section",{id:"servizi",className:"py-24 lg:py-32",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[s.jsxs(g6.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-20",children:[s.jsx("h2",{className:"text-4xl lg:text-5xl font-display font-bold mb-6",children:"Cosa Offriamo"}),s.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto",children:"Un servizio completo per il tuo business, progettato per chi vive di fotovoltaico"})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:lg.map((a,i)=>s.jsxs(g6.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:i*.1},whileHover:{y:-10},className:"glass-card p-8 rounded-3xl",children:[s.jsx("div",{className:"w-12 h-12 bg-solar-green/10 text-solar-green rounded-xl flex items-center justify-center mb-6",children:a.icon}),s.jsx("h3",{className:"text-xl font-bold mb-4",children:a.title}),s.jsx("p",{className:"text-gray-600 leading-relaxed",children:a.description})]},i))})]})}),s.jsxs("section",{id:"come-funziona",className:"py-24 lg:py-32 bg-solar-dark text-white overflow-hidden relative",children:[s.jsx("div",{className:"absolute top-0 right-0 w-1/2 h-full bg-solar-blue/10 skew-x-12 translate-x-1/2"}),s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-20 items-center",children:[s.jsxs(g6.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},children:[s.jsx("h2",{className:"text-4xl lg:text-6xl font-display font-bold mb-8",children:"Il Nostro Metodo"}),s.jsx("p",{className:"text-xl text-gray-400 mb-12 leading-relaxed",children:"Non ci limitiamo a copiare i bandi. Li studiamo, li verifichiamo e li integriamo con ricerche web aggiornate per darti un vantaggio competitivo reale"}),s.jsx("div",{className:"space-y-8",children:sg.map((a,i)=>s.jsxs(g6.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:.3+i*.1},className:"flex items-start space-x-6",children:[s.jsx("div",{className:"text-4xl font-black text-solar-green/30",children:a.number}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-xl font-bold mb-2",children:a.title}),s.jsx("p",{className:"text-gray-400",children:a.description})]})]},i))})]}),s.jsx(g6.div,{initial:{opacity:0,scale:.9,x:30},whileInView:{opacity:1,scale:1,x:0},viewport:{once:!0},transition:{duration:.8},className:"relative",children:s.jsx("div",{className:"bg-solar-blue/20 p-8 rounded-[40px] border border-white/10 relative group",children:s.jsxs("div",{className:"bg-white rounded-3xl p-8 text-solar-dark shadow-2xl relative overflow-hidden",children:[s.jsxs("div",{className:"flex items-center justify-between mb-8",children:[s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx("div",{className:"w-3 h-3 bg-red-400 rounded-full"}),s.jsx("div",{className:"w-3 h-3 bg-yellow-400 rounded-full"}),s.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full"})]}),s.jsx("div",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest",children:"Anteprima Report Tecnico"})]}),s.jsxs("div",{className:"space-y-6",children:[s.jsx("div",{className:"h-4 bg-gray-100 rounded-full w-3/4"}),s.jsx("div",{className:"h-4 bg-gray-100 rounded-full w-full"}),s.jsx("div",{className:"h-4 bg-gray-100 rounded-full w-5/6"}),s.jsxs("div",{className:"pt-6 border-t border-gray-100",children:[s.jsxs("div",{className:"flex items-center space-x-4 mb-4",children:[s.jsx("div",{className:"w-10 h-10 bg-solar-yellow rounded-lg flex items-center justify-center",children:s.jsx(ho,{className:"w-5 h-5 text-solar-dark"})}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"Bando Regionale Puglia 2024"}),s.jsx("div",{className:"text-xs text-solar-green font-bold",children:"Dotazione: €15M"})]})]}),s.jsxs("div",{className:"h-24 bg-solar-light rounded-xl p-4",children:[s.jsx("div",{className:"w-full h-2 bg-gray-200 rounded-full mb-2"}),s.jsx("div",{className:"w-2/3 h-2 bg-gray-200 rounded-full"})]})]})]}),s.jsx("div",{className:"absolute inset-0 bg-solar-blue/5 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:s.jsxs("a",{href:"/sample-report.pdf",className:"bg-solar-blue text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-2xl",children:["Scarica Esempio Completo",s.jsx(Yx,{className:"w-5 h-5"})]})})]})})})]})})]}),s.jsx("section",{id:"prezzi",className:"py-24 lg:py-32",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[s.jsxs(g6.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-20",children:[s.jsx("h2",{className:"text-4xl lg:text-5xl font-display font-bold mb-6",children:"Piani di Abbonamento"}),s.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto",children:"Prezzi di lancio"})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto",children:[s.jsxs(g6.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col",children:[s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Base"}),s.jsxs("div",{className:"text-4xl font-black mb-6",children:["2,99 € ",s.jsx("span",{className:"text-lg text-gray-400 font-medium",children:"/mese"})]}),s.jsxs("div",{className:"text-gray-400 text-sm mb-6",children:["Potrebbe essere applicata l'IVA. ",s.jsx(N0,{to:"/terms",className:"focus-visible:outline-none focus-visible:shadow-focus underline-offset-2 hover:underline focus:underline active:underline transition-colors hover:text-solar-blue",children:"Condizioni dell'offerta"})]}),s.jsx(N0,{to:"/abbonati?plan=base",className:"w-full py-4 border-2 border-solar-blue text-solar-blue font-bold rounded-2xl hover:bg-solar-blue hover:text-white transition-all block text-center",children:"Abbonati Ora"}),s.jsxs("ul",{className:"space-y-4 mt-8 flex-grow",children:[s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx(F6,{className:"w-5 h-5 text-solar-green"}),s.jsx("span",{className:"text-gray-600 text-sm",children:"Report mensile"})]}),s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx(F6,{className:"w-5 h-5 text-solar-green"}),s.jsx("span",{className:"text-gray-600 text-sm",children:"Disdici quando vuoi"})]}),s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx(F6,{className:"w-5 h-5 text-solar-green"}),s.jsx("span",{className:"text-gray-600 text-sm",children:"Bandi nazionali"})]}),s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx(F6,{className:"w-5 h-5 text-solar-green"}),s.jsx("span",{className:"text-gray-600 text-sm",children:"Bandi regionali"})]})]})]}),s.jsxs(g6.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},className:"bg-solar-blue p-8 rounded-[40px] text-white shadow-2xl shadow-solar-blue/30 relative z-10 flex flex-col scale-105",children:[s.jsx("div",{className:"absolute top-0 right-10 -translate-y-1/2 bg-solar-yellow text-solar-dark px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest",children:"Consigliato"}),s.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Plus"}),s.jsxs("div",{className:"text-4xl font-black mb-6 text-white",children:["3,49 € ",s.jsx("span",{className:"text-lg text-white/60 font-medium",children:"/mese"})]}),s.jsxs("div",{className:"text-white/60 text-sm mb-6",children:["Potrebbe essere applicata l'IVA. ",s.jsx(N0,{to:"/terms",className:"focus-visible:outline-none focus-visible:shadow-focus underline-offset-2 hover:underline focus:underline active:underline transition-colors hover:text-solar-yellow",children:"Condizioni dell'offerta"})]}),s.jsx(N0,{to:"/abbonati?plan=plus",className:"w-full py-4 bg-white text-solar-blue font-bold rounded-2xl hover:bg-solar-yellow hover:text-solar-dark transition-all block text-center",children:"Abbonati Ora"}),s.jsxs("ul",{className:"space-y-4 mt-8 flex-grow",children:[s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx(F6,{className:"w-5 h-5 text-solar-yellow"}),s.jsx("span",{className:"text-sm",children:"Tutti i vantaggi Base"})]}),s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx(F6,{className:"w-5 h-5 text-solar-yellow"}),s.jsx("span",{className:"text-sm",children:"Bandi europei"})]}),s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx(F6,{className:"w-5 h-5 text-solar-yellow"}),s.jsx("span",{className:"text-sm",children:"Appalti pubblici"})]})]})]}),s.jsxs(g6.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},className:"bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col",children:[s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ultimate"}),s.jsxs("div",{className:"text-4xl font-black mb-6",children:["6,19 € ",s.jsx("span",{className:"text-lg text-gray-400 font-medium",children:"/mese"})]}),s.jsxs("div",{className:"text-gray-400 text-sm mb-6",children:["Potrebbe essere applicata l'IVA. ",s.jsx(N0,{to:"/terms",className:"focus-visible:outline-none focus-visible:shadow-focus underline-offset-2 hover:underline focus:underline active:underline transition-colors hover:text-solar-blue",children:"Condizioni dell'offerta"})]}),s.jsx(N0,{to:"/abbonati?plan=ultimate",className:"w-full py-4 border-2 border-solar-blue text-solar-blue font-bold rounded-2xl hover:bg-solar-blue hover:text-white transition-all block text-center",children:"Abbonati Ora"}),s.jsxs("ul",{className:"space-y-4 mt-8 flex-grow",children:[s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx(F6,{className:"w-5 h-5 text-solar-green"}),s.jsx("span",{className:"text-gray-600 text-sm",children:"Tutti i vantaggi Plus"})]}),s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx(F6,{className:"w-5 h-5 text-solar-green"}),s.jsx("span",{className:"text-gray-600 text-sm",children:"Agevolazioni fiscali e meccanismi strutturali"})]})]})]})]})]})}),s.jsx("section",{className:"py-24",children:s.jsx("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs(g6.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.8},className:"bg-solar-blue rounded-[50px] p-12 lg:p-20 text-center text-white relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"}),s.jsxs("div",{className:"relative z-10",children:[s.jsx(ho,{className:"w-16 h-16 mx-auto mb-8 text-solar-yellow opacity-80"}),s.jsx("h2",{className:"text-4xl lg:text-6xl font-display font-bold mb-8",children:"Pronto a Trasformare il Tuo Business?"}),s.jsx("p",{className:"text-xl text-white/80 mb-12 max-w-2xl mx-auto",children:"Unisciti ai professionisti che hanno già scelto la nostra analisi tecnica per vincere più appalti e offrire il massimo risparmio"}),s.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[s.jsx("a",{href:"#prezzi",className:"w-full sm:w-auto px-10 py-5 bg-solar-yellow text-solar-dark rounded-2xl font-black text-lg hover:bg-white transition-all shadow-xl shadow-solar-yellow/20",children:"Scegli il Tuo Piano"}),s.jsx(N0,{to:"/contatti",className:"w-full sm:w-auto px-10 py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all",children:"Parla con un Esperto"})]})]})]})})})]})}function rg(){return s.jsx("div",{className:"pt-32 pb-24",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[s.jsxs("div",{className:"text-center mb-16",children:[s.jsx("h1",{className:"text-4xl lg:text-6xl font-display font-bold mb-6",children:"Contattaci"}),s.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"Hai domande sui nostri servizi o hai bisogno di assistenza personalizzata? Siamo qui per aiutarti"})]}),s.jsx("div",{className:"max-w-3xl mx-auto",children:s.jsxs("div",{className:"glass-card p-8 md:p-12 rounded-[40px] shadow-2xl",children:[s.jsxs("div",{className:"mb-10 text-center",children:[s.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Inviaci un Messaggio"}),s.jsx("p",{className:"text-gray-600",children:"Compila il modulo sottostante e ti risponderemo il prima possibile."})]}),s.jsxs("form",{className:"space-y-6",action:"https://formspree.io/f/mwvaoggb",method:"POST",children:[s.jsxs("div",{className:"hidden",children:[s.jsx("label",{children:"Non compilare questo campo se sei umano:"}),s.jsx("input",{type:"text",name:"address",tabIndex:-1,autoComplete:"off"})]}),s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-bold mb-2",children:"Nome"}),s.jsx("input",{name:"name",type:"text",placeholder:"Il tuo nome",className:"w-full px-6 py-4 rounded-2xl bg-solar-light border-transparent focus:bg-white focus:ring-4 focus:ring-solar-blue/10 transition-all outline-none",required:!0})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-bold mb-2",children:"Cognome"}),s.jsx("input",{name:"surname",type:"text",placeholder:"Il tuo cognome",className:"w-full px-6 py-4 rounded-2xl bg-solar-light border-transparent focus:bg-white focus:ring-4 focus:ring-solar-blue/10 transition-all outline-none",required:!0})]})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-bold mb-2",children:"Email"}),s.jsx("input",{name:"email",type:"email",placeholder:"la_mia@email.it",className:"w-full px-6 py-4 rounded-2xl bg-solar-light border-transparent focus:bg-white focus:ring-4 focus:ring-solar-blue/10 transition-all outline-none",required:!0})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-bold mb-2",children:"Messaggio"}),s.jsx("textarea",{name:"message",rows:6,placeholder:"Come possiamo aiutarti?",className:"w-full px-6 py-4 rounded-2xl bg-solar-light border-transparent focus:bg-white focus:ring-4 focus:ring-solar-blue/10 transition-all outline-none resize-none",required:!0})]}),s.jsxs("button",{type:"submit",className:"w-full py-5 bg-solar-blue text-white rounded-2xl font-bold text-xl hover:bg-solar-dark transition-all shadow-xl shadow-solar-blue/20 flex items-center justify-center group",children:["Invia Messaggio",s.jsx(Mu,{className:"ml-2 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"})]})]})]})})]})})}function ug(){const[a]=Ad(),[i,r]=k.useState(a.get("plan")||"mensile");return s.jsx("div",{className:"pt-32 pb-24",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[s.jsx("div",{className:"text-center mb-16",children:s.jsxs(g6.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[s.jsx("h1",{className:"text-4xl lg:text-6xl font-display font-bold mb-6",children:"Abbonati Ora"}),s.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"Compila il modulo con i tuoi dati per attivare l'abbonamento. Se sei un'azienda, inserisci i dati per la fatturazione elettronica."})]})}),s.jsx("div",{className:"max-w-4xl mx-auto",children:s.jsx(g6.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.2},className:"glass-card p-8 md:p-12 rounded-[40px] shadow-2xl",children:s.jsxs("form",{className:"space-y-8",action:"https://formspree.io/f/xdayznew",method:"POST",children:[s.jsxs("div",{className:"hidden",children:[s.jsx("label",{children:"Non compilare questo campo se sei umano:"}),s.jsx("input",{type:"text",name:"session",tabIndex:-1,autoComplete:"off"})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[s.jsxs("label",{className:`relative flex items-center p-6 rounded-2xl border-2 cursor-pointer transition-all ${i==="mensile"?"border-solar-blue bg-solar-blue/5":"border-gray-100 hover:border-solar-blue/30"}`,children:[s.jsx("input",{type:"radio",name:"plan",value:"mensile",checked:i==="mensile",onChange:()=>r("mensile"),className:"sr-only"}),s.jsxs("div",{className:"flex-grow",children:[s.jsx("div",{className:"font-bold text-lg",children:"Piano Mensile"}),s.jsx("div",{className:"text-solar-blue font-black",children:"€4,99 / mese"})]}),i==="mensile"&&s.jsx(F6,{className:"w-6 h-6 text-solar-blue"})]}),s.jsxs("label",{className:`relative flex items-center p-6 rounded-2xl border-2 cursor-pointer transition-all ${i==="annuale"?"border-solar-blue bg-solar-blue/5":"border-gray-100 hover:border-solar-blue/30"}`,children:[s.jsx("input",{type:"radio",name:"plan",value:"annuale",checked:i==="annuale",onChange:()=>r("annuale"),className:"sr-only"}),s.jsxs("div",{className:"flex-grow",children:[s.jsx("div",{className:"font-bold text-lg",children:"Piano Annuale"}),s.jsx("div",{className:"text-solar-blue font-black",children:"€49,90 / anno"})]}),i==="annuale"&&s.jsx(F6,{className:"w-6 h-6 text-solar-blue"})]})]}),s.jsxs("div",{className:"space-y-6",children:[s.jsx("h3",{className:"text-xl font-bold border-b border-gray-100 pb-2",children:"Dati Aziendali (Opzionali)"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-bold mb-2",children:"Ragione Sociale"}),s.jsx("input",{type:"text",name:"company",placeholder:"Nome Azienda S.r.l. (se applicabile)",className:"w-full px-6 py-4 rounded-2xl bg-solar-light border-transparent focus:bg-white focus:ring-4 focus:ring-solar-blue/10 transition-all outline-none"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-bold mb-2",children:"Partita IVA"}),s.jsx("input",{type:"text",name:"tax_id",placeholder:"IT01234567890 (se applicabile)",className:"w-full px-6 py-4 rounded-2xl bg-solar-light border-transparent focus:bg-white focus:ring-4 focus:ring-solar-blue/10 transition-all outline-none"})]})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-bold mb-2",children:"Codice SDI o PEC"}),s.jsx("input",{type:"text",name:"sdi_pec",placeholder:"KRRH6B9 o pec@azienda.it",className:"w-full px-6 py-4 rounded-2xl bg-solar-light border-transparent focus:bg-white focus:ring-4 focus:ring-solar-blue/10 transition-all outline-none"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-bold mb-2",children:"Indirizzo di Fatturazione"}),s.jsx("input",{type:"text",name:"address",placeholder:"Via Roma 1, 00100 Roma (RM)",className:"w-full px-6 py-4 rounded-2xl bg-solar-light border-transparent focus:bg-white focus:ring-4 focus:ring-solar-blue/10 transition-all outline-none"})]})]})]}),s.jsxs("div",{className:"space-y-6",children:[s.jsx("h3",{className:"text-xl font-bold border-b border-gray-100 pb-2",children:"Referente"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-bold mb-2",children:"Nome"}),s.jsx("input",{type:"text",name:"name",placeholder:"Il tuo nome",className:"w-full px-6 py-4 rounded-2xl bg-solar-light border-transparent focus:bg-white focus:ring-4 focus:ring-solar-blue/10 transition-all outline-none",required:!0})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-bold mb-2",children:"Cognome"}),s.jsx("input",{type:"text",name:"surname",placeholder:"Il tuo cognome",className:"w-full px-6 py-4 rounded-2xl bg-solar-light border-transparent focus:bg-white focus:ring-4 focus:ring-solar-blue/10 transition-all outline-none",required:!0})]})]}),s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-bold mb-2",children:"Email"}),s.jsx("input",{type:"email",name:"email",placeholder:"la_mia@email.it",className:"w-full px-6 py-4 rounded-2xl bg-solar-light border-transparent focus:bg-white focus:ring-4 focus:ring-solar-blue/10 transition-all outline-none",required:!0})]})]}),s.jsxs("div",{className:"pt-4",children:[s.jsxs("button",{type:"submit",className:"w-full py-5 bg-solar-blue text-white rounded-2xl font-bold text-xl hover:bg-solar-dark transition-all shadow-xl shadow-solar-blue/20 flex items-center justify-center group",children:[s.jsx(Hx,{className:"mr-3 w-6 h-6"}),"Procedi all'Attivazione",s.jsx(Mu,{className:"ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"})]}),s.jsx("p",{className:"text-center text-gray-400 text-sm mt-6",children:"Dopo l'invio verrai ricontattato per completare il pagamento tramite bonifico o carta."})]})]})})})]})})}function cg(){return s.jsxs("div",{className:"pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[s.jsx("h1",{className:"text-4xl font-display font-bold mb-8",children:"Privacy Policy"}),s.jsxs("div",{className:"prose prose-lg max-w-none text-gray-600 space-y-6",children:[s.jsx("p",{children:"Ultimo aggiornamento: 4 Aprile 2026"}),s.jsx("p",{children:'La tua privacy è importante per noi. Questa Privacy Policy spiega come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali quando utilizzi il nostro sito web "Bandi Fotovoltaico".'}),s.jsx("h2",{className:"text-2xl font-bold text-solar-dark mt-8",children:"1. Dati Raccolti"}),s.jsx("p",{children:"Raccogliamo i dati necessari per la fornitura del servizio di newsletter, inclusi nome, cognome, indirizzo email professionale e dati di fatturazione per gli abbonamenti a pagamento."}),s.jsx("h2",{className:"text-2xl font-bold text-solar-dark mt-8",children:"2. Finalità del Trattamento"}),s.jsx("p",{children:"I dati vengono utilizzati esclusivamente per:"}),s.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[s.jsx("li",{children:"Inviare la newsletter periodica."}),s.jsx("li",{children:"Gestire l'abbonamento e i pagamenti."}),s.jsx("li",{children:"Fornire assistenza tecnica e commerciale."}),s.jsx("li",{children:"Adempiere agli obblighi di legge."})]}),s.jsx("h2",{className:"text-2xl font-bold text-solar-dark mt-8",children:"3. Sicurezza dei Dati"}),s.jsx("p",{children:"Adottiamo misure di sicurezza tecniche e organizzative per proteggere i tuoi dati da accessi non autorizzati o perdite accidentali."}),s.jsx("h2",{className:"text-20 font-bold text-solar-dark mt-8",children:"4. I tuoi Diritti"}),s.jsx("p",{children:"Hai il diritto di accedere ai tuoi dati, chiederne la rettifica, la cancellazione o la limitazione del trattamento in qualsiasi momento contattandoci tramite il form di contatto."})]})]})}function Cg(){return s.jsxs("div",{className:"pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[s.jsx("h1",{className:"text-4xl font-display font-bold mb-8",children:"Cookie Policy"}),s.jsxs("div",{className:"prose prose-lg max-w-none text-gray-600 space-y-6",children:[s.jsx("p",{children:"Ultimo aggiornamento: 4 Aprile 2026"}),s.jsx("p",{children:"Questo sito utilizza i cookie per migliorare l'esperienza dell'utente e analizzare il traffico."}),s.jsx("h2",{className:"text-2xl font-bold text-solar-dark mt-8",children:"1. Cosa sono i Cookie"}),s.jsx("p",{children:"I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web."}),s.jsx("h2",{className:"text-2xl font-bold text-solar-dark mt-8",children:"2. Tipologie di Cookie utilizzati"}),s.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Cookie Tecnici:"})," Necessari per il corretto funzionamento del sito."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Cookie Analitici:"})," Utilizzati per raccogliere informazioni in forma aggregata sul numero degli utenti e su come questi visitano il sito."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Cookie di Profilazione:"})," Utilizzati per inviare messaggi pubblicitari in linea con le preferenze manifestate dall'utente."]})]}),s.jsx("h2",{className:"text-2xl font-bold text-solar-dark mt-8",children:"3. Gestione dei Cookie"}),s.jsx("p",{children:"Puoi gestire le tue preferenze sui cookie attraverso le impostazioni del tuo browser. La disabilitazione dei cookie tecnici potrebbe compromettere alcune funzionalità del sito."})]})]})}function fg(){return s.jsxs("div",{className:"pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[s.jsx("h1",{className:"text-4xl font-display font-bold mb-8",children:"Termini e Condizioni"}),s.jsxs("div",{className:"prose prose-lg max-w-none text-gray-600 space-y-6",children:[s.jsx("p",{children:"Ultimo aggiornamento: 4 Aprile 2026"}),s.jsx("p",{children:`L'accesso e l'utilizzo del servizio "Bandi Fotovoltaico" sono regolati dai seguenti Termini e Condizioni.`}),s.jsx("h2",{className:"text-2xl font-bold text-solar-dark mt-8",children:"1. Oggetto del Servizio"}),s.jsx("p",{children:"Il servizio consiste nella fornitura di una newsletter periodica contenente analisi di bandi pubblici e agevolazioni fiscali nel settore fotovoltaico."}),s.jsx("h2",{className:"text-2xl font-bold text-solar-dark mt-8",children:"2. Abbonamento e Pagamenti"}),s.jsx("p",{children:"L'accesso ai contenuti completi richiede la sottoscrizione di un abbonamento a pagamento. I prezzi sono indicati sul sito e possono essere soggetti a variazioni."}),s.jsx("h2",{className:"text-2xl font-bold text-solar-dark mt-8",children:"3. Proprietà Intellettuale"}),s.jsx("p",{children:`Tutti i contenuti dell'analisi e della newsletter sono di proprietà esclusiva di "Bandi Fotovoltaico" e non possono essere riprodotti o ridistribuiti senza autorizzazione.`}),s.jsx("h2",{className:"text-2xl font-bold text-solar-dark mt-8",children:"4. Limitazione di Responsabilità"}),s.jsx("p",{children:"Sebbene ci impegniamo a fornire informazioni accurate e aggiornate, non garantiamo l'ottenimento di alcun bando o agevolazione. Le decisioni finali spettano agli enti erogatori."})]})]})}function dg(){const{pathname:a,hash:i}=I6();return k.useEffect(()=>{if(i){const r=document.getElementById(i.substring(1));r&&r.scrollIntoView({behavior:"smooth"})}else window.scrollTo(0,0)},[a,i]),null}function hg(){return s.jsx(bd,{basename:"/",children:s.jsxs("div",{className:"min-h-screen flex flex-col",children:[s.jsx(dg,{}),s.jsx(ag,{}),s.jsx("main",{className:"flex-grow",children:s.jsxs(If,{children:[s.jsx(k1,{path:"/",element:s.jsx(og,{})}),s.jsx(k1,{path:"/contatti",element:s.jsx(rg,{})}),s.jsx(k1,{path:"/abbonati",element:s.jsx(ug,{})}),s.jsx(k1,{path:"/privacy-policy",element:s.jsx(cg,{})}),s.jsx(k1,{path:"/cookie-policy",element:s.jsx(Cg,{})}),s.jsx(k1,{path:"/terms",element:s.jsx(fg,{})})]})}),s.jsx(ig,{})]})})}tf.createRoot(document.getElementById("root")).render(s.jsx(k.StrictMode,{children:s.jsx(hg,{})}));
