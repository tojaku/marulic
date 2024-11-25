(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Ye=(e,t)=>e===t,ue=Symbol("solid-proxy"),et=typeof Proxy=="function",X={equals:Ye};let tt=De;const D=1,Q=2,Pe={owned:null,cleanups:null,context:null,owner:null};var m=null;let oe=null,nt=null,j=null,P=null,L=null,te=0;function Ce(e,t){const n=j,i=m,r=e.length===0,o=t===void 0?i:t,s=r?Pe:{owned:null,cleanups:null,context:o?o.context:null,owner:o},a=r?e:()=>e(()=>O(()=>H(s)));m=s,j=null;try{return z(a,!0)}finally{j=n,m=i}}function K(e,t){t=t?Object.assign({},X,t):X;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=r=>(typeof r=="function"&&(r=r(n.value)),Me(n,r));return[Ee.bind(n),i]}function q(e,t,n){const i=Re(e,t,!1,D);ne(i)}function S(e,t,n){n=n?Object.assign({},X,n):X;const i=Re(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,ne(i),Ee.bind(i)}function it(e){return z(e,!1)}function O(e){if(j===null)return e();const t=j;j=null;try{return e()}finally{j=t}}function pe(e,t,n){const i=Array.isArray(e);let r,o=n&&n.defer;return s=>{let a;if(i){a=Array(e.length);for(let u=0;u<e.length;u++)a[u]=e[u]()}else a=e();if(o)return o=!1,s;const l=O(()=>t(a,r,s));return r=a,l}}function Ae(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}function _e(){return m}function Oe(e,t){const n=m,i=j;m=e,j=null;try{return z(t,!0)}catch(r){me(r)}finally{m=n,j=i}}function rt(e){const t=j,n=m;return Promise.resolve().then(()=>{j=t,m=n;let i;return z(e,!1),j=m=null,i?i.done:void 0})}function ze(e,t){const n=Symbol("context");return{id:n,Provider:ut(n),defaultValue:e}}function ot(e){let t;return m&&m.context&&(t=m.context[e.id])!==void 0?t:e.defaultValue}function he(e){const t=S(e),n=S(()=>ce(t()));return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}function Ee(){if(this.sources&&this.state)if(this.state===D)ne(this);else{const e=P;P=null,z(()=>Y(this),!1),P=e}if(j){const e=this.observers?this.observers.length:0;j.sources?(j.sources.push(this),j.sourceSlots.push(e)):(j.sources=[this],j.sourceSlots=[e]),this.observers?(this.observers.push(j),this.observerSlots.push(j.sources.length-1)):(this.observers=[j],this.observerSlots=[j.sources.length-1])}return this.value}function Me(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&z(()=>{for(let r=0;r<e.observers.length;r+=1){const o=e.observers[r],s=oe&&oe.running;s&&oe.disposed.has(o),(s?!o.tState:!o.state)&&(o.pure?P.push(o):L.push(o),o.observers&&Te(o)),s||(o.state=D)}if(P.length>1e6)throw P=[],new Error},!1)),t}function ne(e){if(!e.fn)return;H(e);const t=te;at(e,e.value,t)}function at(e,t,n){let i;const r=m,o=j;j=m=e;try{i=e.fn(t)}catch(s){return e.pure&&(e.state=D,e.owned&&e.owned.forEach(H),e.owned=null),e.updatedAt=n+1,me(s)}finally{j=o,m=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Me(e,i):e.value=i,e.updatedAt=n)}function Re(e,t,n,i=D,r){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:m?m.context:null,pure:n};return m===null||m!==Pe&&(m.owned?m.owned.push(o):m.owned=[o]),o}function Le(e){if(e.state===0)return;if(e.state===Q)return Y(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<te);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===D)ne(e);else if(e.state===Q){const i=P;P=null,z(()=>Y(e,t[0]),!1),P=i}}function z(e,t){if(P)return e();let n=!1;t||(P=[]),L?n=!0:L=[],te++;try{const i=e();return st(n),i}catch(i){n||(L=null),P=null,me(i)}}function st(e){if(P&&(De(P),P=null),e)return;const t=L;L=null,t.length&&z(()=>tt(t),!1)}function De(e){for(let t=0;t<e.length;t++)Le(e[t])}function Y(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const r=i.state;r===D?i!==t&&(!i.updatedAt||i.updatedAt<te)&&Le(i):r===Q&&Y(i,t)}}}function Te(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=Q,n.pure?P.push(n):L.push(n),n.observers&&Te(n))}}function H(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const o=r.pop(),s=n.observerSlots.pop();i<r.length&&(o.sourceSlots[s]=i,r[i]=o,n.observerSlots[i]=s)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)H(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)H(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function lt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function me(e,t=m){throw lt(e)}function ce(e){if(typeof e=="function"&&!e.length)return ce(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const i=ce(e[n]);Array.isArray(i)?t.push.apply(t,i):t.push(i)}return t}return e}function ut(e,t){return function(i){let r;return q(()=>r=O(()=>(m.context={...m.context,[e]:i.value},he(()=>i.children))),void 0),r}}function w(e,t){return O(()=>e(t||{}))}function Z(){return!0}const ct={get(e,t,n){return t===ue?n:e.get(t)},has(e,t){return t===ue?!0:e.has(t)},set:Z,deleteProperty:Z,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Z,deleteProperty:Z}},ownKeys(e){return e.keys()}};function ae(e){return(e=typeof e=="function"?e():e)?e:{}}function ft(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function dt(...e){let t=!1;for(let s=0;s<e.length;s++){const a=e[s];t=t||!!a&&ue in a,e[s]=typeof a=="function"?(t=!0,S(a)):a}if(et&&t)return new Proxy({get(s){for(let a=e.length-1;a>=0;a--){const l=ae(e[a])[s];if(l!==void 0)return l}},has(s){for(let a=e.length-1;a>=0;a--)if(s in ae(e[a]))return!0;return!1},keys(){const s=[];for(let a=0;a<e.length;a++)s.push(...Object.keys(ae(e[a])));return[...new Set(s)]}},ct);const n={},i=Object.create(null);for(let s=e.length-1;s>=0;s--){const a=e[s];if(!a)continue;const l=Object.getOwnPropertyNames(a);for(let u=l.length-1;u>=0;u--){const c=l[u];if(c==="__proto__"||c==="constructor")continue;const f=Object.getOwnPropertyDescriptor(a,c);if(!i[c])i[c]=f.get?{enumerable:!0,configurable:!0,get:ft.bind(n[c]=[f.get.bind(a)])}:f.value!==void 0?f:void 0;else{const p=n[c];p&&(f.get?p.push(f.get.bind(a)):f.value!==void 0&&p.push(()=>f.value))}}}const r={},o=Object.keys(i);for(let s=o.length-1;s>=0;s--){const a=o[s],l=i[a];l&&l.get?Object.defineProperty(r,a,l):r[a]=l?l.value:void 0}return r}const pt=e=>`Stale read from <${e}>.`;function Be(e){const t=e.keyed,n=S(()=>e.when,void 0,{equals:(i,r)=>t?i===r:!i==!r});return S(()=>{const i=n();if(i){const r=e.children;return typeof r=="function"&&r.length>0?O(()=>r(t?i:()=>{if(!O(n))throw pt("Show");return e.when})):r}return e.fallback},void 0,void 0)}function ht(e,t,n){let i=n.length,r=t.length,o=i,s=0,a=0,l=t[r-1].nextSibling,u=null;for(;s<r||a<o;){if(t[s]===n[a]){s++,a++;continue}for(;t[r-1]===n[o-1];)r--,o--;if(r===s){const c=o<i?a?n[a-1].nextSibling:n[o-a]:l;for(;a<o;)e.insertBefore(n[a++],c)}else if(o===a)for(;s<r;)(!u||!u.has(t[s]))&&t[s].remove(),s++;else if(t[s]===n[o-1]&&n[a]===t[r-1]){const c=t[--r].nextSibling;e.insertBefore(n[a++],t[s++].nextSibling),e.insertBefore(n[--o],c),t[r]=n[o]}else{if(!u){u=new Map;let f=a;for(;f<o;)u.set(n[f],f++)}const c=u.get(t[s]);if(c!=null)if(a<c&&c<o){let f=s,p=1,g;for(;++f<r&&f<o&&!((g=u.get(t[f]))==null||g!==c+p);)p++;if(p>c-a){const $=t[s];for(;a<c;)e.insertBefore(n[a++],$)}else e.replaceChild(n[a++],t[s++])}else s++;else t[s++].remove()}}}const be="_$DX_DELEGATE";function mt(e,t,n,i={}){let r;return Ce(o=>{r=o,t===document?e():N(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{r(),t.textContent=""}}function b(e,t,n){let i;const r=()=>{const s=document.createElement("template");return s.innerHTML=e,s.content.firstChild},o=()=>(i||(i=r())).cloneNode(!0);return o.cloneNode=o,o}function Ne(e,t=window.document){const n=t[be]||(t[be]=new Set);for(let i=0,r=e.length;i<r;i++){const o=e[i];n.has(o)||(n.add(o),t.addEventListener(o,vt))}}function V(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function gt(e,t,n){return O(()=>e(t,n))}function N(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return ee(e,t,i,n);q(r=>ee(e,t(),r,n),i)}function vt(e){let t=e.target;const n=`$$${e.type}`,i=e.target,r=e.currentTarget,o=l=>Object.defineProperty(e,"target",{configurable:!0,value:l}),s=()=>{const l=t[n];if(l&&!t.disabled){const u=t[`${n}Data`];if(u!==void 0?l.call(t,u,e):l.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},a=()=>{for(;s()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const l=e.composedPath();o(l[0]);for(let u=0;u<l.length-2&&(t=l[u],!!s());u++){if(t._$host){t=t._$host,a();break}if(t.parentNode===r)break}}else a();o(i)}function ee(e,t,n,i,r){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,s=i!==void 0;if(e=s&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(o==="number"&&(t=t.toString(),t===n))return n;if(s){let a=n[0];a&&a.nodeType===3?a.data!==t&&(a.data=t):a=document.createTextNode(t),n=B(e,n,i,a)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean")n=B(e,n,i);else{if(o==="function")return q(()=>{let a=t();for(;typeof a=="function";)a=a();n=ee(e,a,n,i)}),()=>n;if(Array.isArray(t)){const a=[],l=n&&Array.isArray(n);if(fe(a,t,n,r))return q(()=>n=ee(e,a,n,i,!0)),()=>n;if(a.length===0){if(n=B(e,n,i),s)return n}else l?n.length===0?we(e,a,i):ht(e,n,a):(n&&B(e),we(e,a));n=a}else if(t.nodeType){if(Array.isArray(n)){if(s)return n=B(e,n,i,t);B(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function fe(e,t,n,i){let r=!1;for(let o=0,s=t.length;o<s;o++){let a=t[o],l=n&&n[e.length],u;if(!(a==null||a===!0||a===!1))if((u=typeof a)=="object"&&a.nodeType)e.push(a);else if(Array.isArray(a))r=fe(e,a,l)||r;else if(u==="function")if(i){for(;typeof a=="function";)a=a();r=fe(e,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||r}else e.push(a),r=!0;else{const c=String(a);l&&l.nodeType===3&&l.data===c?e.push(l):e.push(document.createTextNode(c))}}return r}function we(e,t,n=null){for(let i=0,r=t.length;i<r;i++)e.insertBefore(t[i],n)}function B(e,t,n,i){if(n===void 0)return e.textContent="";const r=i||document.createTextNode("");if(t.length){let o=!1;for(let s=t.length-1;s>=0;s--){const a=t[s];if(r!==a){const l=a.parentNode===e;!o&&!s?l?e.replaceChild(r,a):e.insertBefore(r,n):l&&a.remove()}else o=!0}}else e.insertBefore(r,n);return[r]}const jt=!1;function Ue(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function i(r,o){if(n)return!(n=!1);const s={to:r,options:o,defaultPrevented:!1,preventDefault:()=>s.defaultPrevented=!0};for(const a of e)a.listener({...s,from:a.location,retry:l=>{l&&(n=!0),a.navigate(r,{...o,resolve:!1})}});return!s.defaultPrevented}return{subscribe:t,confirm:i}}let de;function ge(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),de=window.history.state._depth}ge();function kt(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function bt(e,t){let n=!1;return()=>{const i=de;ge();const r=i==null?null:de-i;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const wt=/^(?:[a-z0-9]+:)?\/\//i,yt=/^\/+|(\/)\/+$/g,Fe="http://sr";function I(e,t=!1){const n=e.replace(yt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function J(e,t,n){if(wt.test(t))return;const i=I(e),r=n&&I(n);let o="";return!r||t.startsWith("/")?o=i:r.toLowerCase().indexOf(i.toLowerCase())!==0?o=i+r:o=r,(o||"/")+I(t,!o)}function xt(e,t){return I(e).replace(/\/*(\*.*)?$/g,"")+I(t)}function Ke(e){const t={};return e.searchParams.forEach((n,i)=>{i in t?Array.isArray(t[i])?t[i].push(n):t[i]=[t[i],n]:t[i]=n}),t}function $t(e,t,n){const[i,r]=e.split("/*",2),o=i.split("/").filter(Boolean),s=o.length;return a=>{const l=a.split("/").filter(Boolean),u=l.length-s;if(u<0||u>0&&r===void 0&&!t)return null;const c={path:s?"":"/",params:{}},f=p=>n===void 0?void 0:n[p];for(let p=0;p<s;p++){const g=o[p],$=g[0]===":",d=$?l[p]:l[p].toLowerCase(),h=$?g.slice(1):g.toLowerCase();if($&&se(d,f(h)))c.params[h]=d;else if($||!se(d,h))return null;c.path+=`/${d}`}if(r){const p=u?l.slice(-u).join("/"):"";if(se(p,f(r)))c.params[r]=p;else return null}return c}}function se(e,t){const n=i=>i===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function St(e){const[t,n]=e.pattern.split("/*",2),i=t.split("/").filter(Boolean);return i.reduce((r,o)=>r+(o.startsWith(":")?2:3),i.length-(n===void 0?0:1))}function Ie(e){const t=new Map,n=_e();return new Proxy({},{get(i,r){return t.has(r)||Oe(n,()=>t.set(r,S(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function qe(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),i=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(i);)r.push(n+=t[1]),i=i.slice(t[0].length);return qe(i).reduce((o,s)=>[...o,...r.map(a=>a+s)],[])}const Pt=100,Ct=ze(),He=ze();function At(e,t=""){const{component:n,preload:i,load:r,children:o,info:s}=e,a=!o||Array.isArray(o)&&!o.length,l={key:e,component:n,preload:i||r,info:s};return Ve(e.path).reduce((u,c)=>{for(const f of qe(c)){const p=xt(t,f);let g=a?p:p.split("/*",1)[0];g=g.split("/").map($=>$.startsWith(":")||$.startsWith("*")?$:encodeURIComponent($)).join("/"),u.push({...l,originalPath:c,pattern:g,matcher:$t(g,!a,e.matchFilters)})}return u},[])}function _t(e,t=0){return{routes:e,score:St(e[e.length-1])*1e4-t,matcher(n){const i=[];for(let r=e.length-1;r>=0;r--){const o=e[r],s=o.matcher(n);if(!s)return null;i.unshift({...s,route:o})}return i}}}function Ve(e){return Array.isArray(e)?e:[e]}function We(e,t="",n=[],i=[]){const r=Ve(e);for(let o=0,s=r.length;o<s;o++){const a=r[o];if(a&&typeof a=="object"){a.hasOwnProperty("path")||(a.path="");const l=At(a,t);for(const u of l){n.push(u);const c=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!c)We(a.children,u.pattern,n,i);else{const f=_t([...n],i.length);i.push(f)}n.pop()}}}return n.length?i:i.sort((o,s)=>s.score-o.score)}function le(e,t){for(let n=0,i=e.length;n<i;n++){const r=e[n].matcher(t);if(r)return r}return[]}function Ot(e,t,n){const i=new URL(Fe),r=S(c=>{const f=e();try{return new URL(f,i)}catch{return console.error(`Invalid path ${f}`),c}},i,{equals:(c,f)=>c.href===f.href}),o=S(()=>r().pathname),s=S(()=>r().search,!0),a=S(()=>r().hash),l=()=>"",u=pe(s,()=>Ke(r()));return{get pathname(){return o()},get search(){return s()},get hash(){return a()},get state(){return t()},get key(){return l()},query:n?n(u):Ie(u)}}let R;function zt(){return R}function Et(e,t,n,i={}){const{signal:[r,o],utils:s={}}=e,a=s.parsePath||(v=>v),l=s.renderPath||(v=>v),u=s.beforeLeave||Ue(),c=J("",i.base||"");if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!r().value&&o({value:c,replace:!0,scroll:!1});const[f,p]=K(!1);let g;const $=(v,k)=>{k.value===d()&&k.state===y()||(g===void 0&&p(!0),R=v,g=k,rt(()=>{g===k&&(h(g.value),x(g.state),M[1]([]))}).finally(()=>{g===k&&it(()=>{R=void 0,v==="navigate"&&Xe(g),p(!1),g=void 0})}))},[d,h]=K(r().value),[y,x]=K(r().state),E=Ot(d,y,s.queryWrapper),A=[],M=K([]),U=S(()=>typeof i.transformUrl=="function"?le(t(),i.transformUrl(E.pathname)):le(t(),E.pathname)),ve=()=>{const v=U(),k={};for(let C=0;C<v.length;C++)Object.assign(k,v[C].params);return k},Ge=s.paramsWrapper?s.paramsWrapper(ve,t):Ie(ve),je={pattern:c,path:()=>c,outlet:()=>null,resolvePath(v){return J(c,v)}};return q(pe(r,v=>$("native",v),{defer:!0})),{base:je,location:E,params:Ge,isRouting:f,renderPath:l,parsePath:a,navigatorFactory:Je,matches:U,beforeLeave:u,preloadRoute:Qe,singleFlight:i.singleFlight===void 0?!0:i.singleFlight,submissions:M};function Ze(v,k,C){O(()=>{if(typeof k=="number"){k&&(s.go?s.go(k):console.warn("Router integration does not support relative routing"));return}const W=!k||k[0]==="?",{replace:ie,resolve:T,scroll:re,state:F}={replace:!1,resolve:!W,scroll:!0,...C},G=T?v.resolvePath(k):J(W&&E.pathname||"",k);if(G===void 0)throw new Error(`Path '${k}' is not a routable path`);if(A.length>=Pt)throw new Error("Too many redirects");const ke=d();(G!==ke||F!==y())&&(jt||u.confirm(G,C)&&(A.push({value:ke,replace:ie,scroll:re,state:y()}),$("navigate",{value:G,state:F})))})}function Je(v){return v=v||ot(He)||je,(k,C)=>Ze(v,k,C)}function Xe(v){const k=A[0];k&&(o({...v,replace:k.replace,scroll:k.scroll}),A.length=0)}function Qe(v,k){const C=le(t(),v.pathname),W=R;R="preload";for(let ie in C){const{route:T,params:re}=C[ie];T.component&&T.component.preload&&T.component.preload();const{preload:F}=T;k&&F&&Oe(n(),()=>F({params:re,location:{pathname:v.pathname,search:v.search,hash:v.hash,query:Ke(v),state:null,key:""},intent:"preload"}))}R=W}}function Mt(e,t,n,i){const{base:r,location:o,params:s}=e,{pattern:a,component:l,preload:u}=i().route,c=S(()=>i().path);l&&l.preload&&l.preload();const f=u?u({params:s,location:o,intent:R||"initial"}):void 0;return{parent:t,pattern:a,path:c,outlet:()=>l?w(l,{params:s,location:o,data:f,get children(){return n()}}):n(),resolvePath(g){return J(r.path(),g,c())}}}const Rt=e=>t=>{const{base:n}=t,i=he(()=>t.children),r=S(()=>We(i(),t.base||""));let o;const s=Et(e,r,()=>o,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(s),w(Ct.Provider,{value:s,get children(){return w(Lt,{routerState:s,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[S(()=>(o=_e())&&null),w(Dt,{routerState:s,get branches(){return r()}})]}})}})};function Lt(e){const t=e.routerState.location,n=e.routerState.params,i=S(()=>e.preload&&O(()=>{e.preload({params:n,location:t,intent:zt()||"initial"})}));return w(Be,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:r=>w(r,{params:n,location:t,get data(){return i()},get children(){return e.children}})})}function Dt(e){const t=[];let n;const i=S(pe(e.routerState.matches,(r,o,s)=>{let a=o&&r.length===o.length;const l=[];for(let u=0,c=r.length;u<c;u++){const f=o&&o[u],p=r[u];s&&f&&p.route.key===f.route.key?l[u]=s[u]:(a=!1,t[u]&&t[u](),Ce(g=>{t[u]=g,l[u]=Mt(e.routerState,l[u-1]||e.routerState.base,ye(()=>i()[u+1]),()=>e.routerState.matches()[u])}))}return t.splice(r.length).forEach(u=>u()),s&&a?s:(n=l[0],l)}));return ye(()=>i()&&n)()}const ye=e=>()=>w(Be,{get when(){return e()},keyed:!0,children:t=>w(He.Provider,{value:t,get children(){return t.outlet()}})}),_=e=>{const t=he(()=>e.children);return dt(e,{get children(){return t()}})};function Tt([e,t],n,i){return[e,i?r=>t(i(r)):t]}function Bt(e){let t=!1;const n=r=>typeof r=="string"?{value:r}:r,i=Tt(K(n(e.get()),{equals:(r,o)=>r.value===o.value&&r.state===o.state}),void 0,r=>(!t&&e.set(r),r));return e.init&&Ae(e.init((r=e.get())=>{t=!0,i[1](n(r)),t=!1})),Rt({signal:i,create:e.create,utils:e.utils})}function Nt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Ut(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const Ft=new Map;function Kt(e=!0,t=!1,n="/_server",i){return r=>{const o=r.base.path(),s=r.navigatorFactory(r.base);let a,l;function u(d){return d.namespaceURI==="http://www.w3.org/2000/svg"}function c(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const h=d.composedPath().find(U=>U instanceof Node&&U.nodeName.toUpperCase()==="A");if(!h||t&&!h.hasAttribute("link"))return;const y=u(h),x=y?h.href.baseVal:h.href;if((y?h.target.baseVal:h.target)||!x&&!h.hasAttribute("state"))return;const A=(h.getAttribute("rel")||"").split(/\s+/);if(h.hasAttribute("download")||A&&A.includes("external"))return;const M=y?new URL(x,document.baseURI):new URL(x);if(!(M.origin!==window.location.origin||o&&M.pathname&&!M.pathname.toLowerCase().startsWith(o.toLowerCase())))return[h,M]}function f(d){const h=c(d);if(!h)return;const[y,x]=h,E=r.parsePath(x.pathname+x.search+x.hash),A=y.getAttribute("state");d.preventDefault(),s(E,{resolve:!1,replace:y.hasAttribute("replace"),scroll:!y.hasAttribute("noscroll"),state:A?JSON.parse(A):void 0})}function p(d){const h=c(d);if(!h)return;const[y,x]=h;r.preloadRoute(x,y.getAttribute("preload")!=="false")}function g(d){clearTimeout(a);const h=c(d);if(!h)return l=null;const[y,x]=h;l!==y&&(a=setTimeout(()=>{r.preloadRoute(x,y.getAttribute("preload")!=="false"),l=y},20))}function $(d){if(d.defaultPrevented)return;let h=d.submitter&&d.submitter.hasAttribute("formaction")?d.submitter.getAttribute("formaction"):d.target.getAttribute("action");if(!h)return;if(!h.startsWith("https://action/")){const x=new URL(h,Fe);if(h=r.parsePath(x.pathname+x.search),!h.startsWith(n))return}if(d.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const y=Ft.get(h);if(y){d.preventDefault();const x=new FormData(d.target,d.submitter);y.call({r,f:d.target},d.target.enctype==="multipart/form-data"?x:new URLSearchParams(x))}}Ne(["click","submit"]),document.addEventListener("click",f),e&&(document.addEventListener("mousemove",g,{passive:!0}),document.addEventListener("focusin",p,{passive:!0}),document.addEventListener("touchstart",p,{passive:!0})),document.addEventListener("submit",$),Ae(()=>{document.removeEventListener("click",f),e&&(document.removeEventListener("mousemove",g),document.removeEventListener("focusin",p),document.removeEventListener("touchstart",p)),document.removeEventListener("submit",$)})}}function It(e){const t=e.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,n="/"]=window.location.hash.split("#",2);return`${n}#${t}`}return t}function qt(e){const t=()=>window.location.hash.slice(1),n=Ue();return Bt({get:t,set({value:i,replace:r,scroll:o,state:s}){r?window.history.replaceState(kt(s),"","#"+i):window.history.pushState(s,"","#"+i);const a=i.indexOf("#"),l=a>=0?i.slice(a+1):"";Ut(l,o),ge()},init:i=>Nt(window,"hashchange",bt(i,r=>!n.confirm(r&&r<0?r:t()))),create:Kt(e.preload,e.explicitLinks,e.actionBase),utils:{go:i=>window.history.go(i),renderPath:i=>`#${i}`,parsePath:It,beforeLeave:n}})(e)}const Ht="/marulic/assets/marulic_bista-CS4ersWx.png";var Vt=b('<div class="text-center mb-10"><h1 class="text-4xl font-extrabold mt-4">Život Marka Marulića</h1><h2 class="text-2xl mt-2">Povodom godine Marka Marulića - 500 godina od njegove smrti'),Wt=b('<div class="flex flex-col lg:flex-row items-center lg:items-start mt-6 max-w-6xl mx-auto gap-8"><div class="lg:w-1/2 flex justify-center"><img alt="Skulptura Marka Marulića"class="max-h-[50vh] rounded shadow-lg"></div><div class="lg:w-1/2 text-lg"><p>Obilježavajući 500. obljetnicu smrti Marka Marulića, Vlada Republike Hrvatske proglasila je 2024. godinu Godinom Marka Marulića. Ako čitate ovo, znači da ste skenirali jedan od QR kodova s plakata i stigli na ovu stranicu. Ova stranica pruža pregled Marulićeva života u povodu godine posvećene ovom velikanu.</p><p class="mt-4 font-semibold">Uživajte!');function Gt(e){return[Vt(),(()=>{var t=Wt(),n=t.firstChild,i=n.firstChild;return V(i,"src",Ht),t})()]}var Zt=b('<div class="text-3xl font-bold mb-3">O nama');function Jt(e){return Zt()}const xe="/marulic/assets/kuharica-62whq0Gf.pdf";var Xt=b('<div class="text-3xl font-bold">Kuharica'),Qt=b("<div class=mb-3>"),Yt=b('<object type=application/pdf class="w-full min-h-[75vh]">Vaš preglednik ne podržava prikaz PDF zapisa. Datoteku možete preuzeti <a>ovdje</a>.');function en(e){return[Xt(),Qt(),(()=>{var t=Yt(),n=t.firstChild,i=n.nextSibling;return V(t,"data",xe),V(i,"href",xe),t})()]}var tn=b('<div><iframe class="w-full min-h-[75vh]"src="https://www.youtube.com/embed/m0_BrpKjGFM?autoplay=1"frameborder=0 allow="autoplay; encrypted-media"allowfullscreen></iframe><p class=mt-2>Ova predstava je rad studenata UMAS-a iz Splita.');function nn(){return tn()}var rn=b('<div class="text-3xl font-bold">Naši radovi');function on(e){return rn()}const $e="/marulic/assets/eknjiga-Biql-wa6.pdf";var an=b('<div class="text-3xl font-bold mb-3">Priče o Maruliću'),sn=b('<div class=mb-3>Pred vama je zbirka kratkih priča inspiriranih životom i djelom Marka Marulića. Većina priča nastala je u sinergiji čovjeka i najnovije tehnologije (AI).<br>Uspješnost korištenja novoga alata, kako u oblikovanju likovnoga stvaralaštva, tako i u oblikovanju literarnoga, ovisi o umijeću i kreativnosti osobe koja ga koristi, ali i o poznavanju konkretnih činjenica vezanih uz temu koja se obrađuje.<br>Svima koji će "prelistavati" ovu digitalnu knjigu posvećenu ocu hrvatske književnosti, želimo istinski užitak u čitanju.'),ln=b('<object type=application/pdf class="w-full min-h-[75vh]">Vaš preglednik ne podržava prikaz PDF zapisa. Datoteku možete preuzeti <a>ovdje</a>.');function un(e){return[an(),sn(),(()=>{var t=ln(),n=t.firstChild,i=n.nextSibling;return V(t,"data",$e),V(i,"href",$e),t})()]}var cn=b('<div class="prose lg:prose-xl"><h1 class="text-3xl font-bold">Biografija</h1><p>Marko Marulić (lat. <i>Marcus Marulus Spalatensis</i>), rođen 18. kolovoza 1450. u Splitu, preminuo 5. siječnja 1524. u istome gradu, bio je hrvatski književnik, kršćanski humanist i otac hrvatske književnosti. Često se spominje s etnikom "Splićanin". Njegov bogati i raznovrsni književni opus ističe se iznimnom stilizacijom, znanjem i prilagodljivošću raznovrsnim čitateljskim publikama.</p><h2>Djela i jezici</h2><p>Marulić je napisao više od 40 djela na hrvatskom, latinskom i talijanskom jeziku, koja su tiskana više od 530 puta kroz povijest. Njegova djela prevedena su na brojne jezike, uključujući engleski, francuski, njemački, japanski i španjolski. Premda je većinu djela napisao na latinskom jeziku, ostavio je važan doprinos i na hrvatskom jeziku, čime je značajno utjecao na razvoj hrvatske književnosti.</p><h2>Književni utjecaji</h2><p>Inspiraciju za svoja djela nalazio je u Bibliji, antičkoj književnosti i patrističkim tekstovima. U latinskim djelima potpisivao se kao Marcus Marulus Spalatensis ili Marcus Marulus Delmata, dok je na hrvatskome koristio ime Marko Pečenić. Zanimljivo, prva zabilježena uporaba riječi "psihologija" pripisuje se upravo njemu, u djelu <i>Psichiologia de ratione animae humanae</i>.</p><h2>Utjecaj na suvremenike</h2><p>Veliki domet Marulićeva stvaralaštva potvrđuju i anegdote iz njegova doba. Tako je Thomas More čitao njegov <i>Evanđelistar</i> iz 1516. dok je bio zatočen prije pogubljenja, a sv. Franjo Saleški uvijek je sa sobom nosio <i>Institucije</i> (1506).</p><h2>Svetost i počast</h2><p>U splitskoj crkvenoj zajednici spominjan je kao "sluga Božji" jer je umro na glasu svetosti, iako službeni proces beatifikacije nije pokrenut. Godine 1996. Hrvatski sabor proglasio je 22. travnja Danom hrvatske knjige u spomen na dovršetak <i>Judite</i> 1501. godine. Pored toga, 2021. i 2024. obilježene su kao Godine Marka Marulića.</p><h2>Obitelj i obrazovanje</h2><p>Marulić je rođen u plemićkoj obitelji Marulić, koja se od 1436. nazivala i Pečenić. Roditelji, Nikola i Dobrica Obirtić (Alberti), pripadali su uglednim plemićkim obiteljima. Marulić je bio najstariji od osmero djece. Obrazovanje je stekao u Splitu i, prema pretpostavkama, studirao u Padovi. Profesionalno se bavio pravom, obnašajući razne gradske dužnosti, poput suca i odvjetnika.</p><h2>Književna karijera</h2><p>Prvo poznato Marulićevo djelo, <i>Evanđelistar</i> (1480.), rasprava o pobožnom životu, tiskano je u Mlecima i tijekom dva desetljeća doživjelo je 60 izdanja. Njegovo najpoznatije djelo na hrvatskom jeziku, spjev <i>Judita</i>, dovršeno je 1501. godine. Osim toga, na latinskom jeziku napisao je niz teoloških i moralističkih djela. Umro je u Splitu i pokopan je u crkvi sv. Frane. Njegov značaj kao oca hrvatske književnosti očituje se u bogatom književnom opusu, nacionalnom ponosu i humanističkim vrijednostima koje su nadilazile granice Hrvatske.');function fn(e){return cn()}var dn=b('<div class="prose lg:prose-xl"><h1 class="text-3xl font-bold">Stvaralaštvo</h1><p>Marko Marulić bio je kršćanski humanist i renesansni književnik koji je svoj opus temeljio na harmoniji klasične antičke mudrosti, kršćanske etike i srednjovjekovne pobožnosti. Njegova djela svjedoče o visokom obrazovanju i nadahnuću iz Biblije, hagiografije, patristike, antičke književnosti te suvremenih povijesnih zbivanja. Pisao je na latinskom, hrvatskom i talijanskom jeziku, pri čemu 80% opusa čini latinska književnost. Njegov književni stil kombinira čakavštinu, staroslavizme, štokavske elemente te utjecaje splitske renesansne kulture. Prepoznat je kao zagovornik kršćanskog morala i etike, čije su misli ostavile značajan utjecaj na europsku književnost.</p><h2>Djela i poznati citati</h2><h3>Hrvatska djela</h3><h4>1. Judita (1501., prvo izdanje 1521.)</h4><ul><li><strong>Opis:</strong> Prvi umjetnički ep hrvatske književnosti napisan na čakavštini. Temeljen je na biblijskoj priči o udovici Juditi koja spašava izraelski narod. Inspiriran je borbom protiv Osmanlija te odražava kršćanski moral i patriotske poruke.</li><li><strong>Citat:</strong> „Ter ča mogu začut Turci svi prosti, / da te plaća triba / vrhušac i dosti?“</li><li><strong>Značaj:</strong> Djelo je snažan simbol otpora i nacionalnog identiteta.</li></ul><h4>2. Suzana</h4><ul><li><strong>Opis:</strong> Biblijska poema u 780 stihova o babilonskoj Židovki lažno optuženoj za preljub. U ovom djelu Marulić spominje „hrvatske knjige“, čime ukazuje na svoju književnu baštinu.</li><li><strong>Citat:</strong> „Bog vidit prosti, / on spravit zlosti!“</li></ul><h4>3. Molitva suprotiva Turkom</h4><ul><li><strong>Opis:</strong> Pjesma od 172 dvostruko rimovana dvanaesterca, s akrostihom koji glasi: Solus Deus potes nos liberare de tribulatione inimicorum Turcorum sua potentia infinita.</li><li><strong>Citat:</strong> „Pomiluj nas, gospodine, priko svela / od pogibla i od zla vrimega!“</li></ul><h4>4. Tuženje grada Hjerosolima</h4><ul><li><strong>Opis:</strong> Lamentacija protuturske tematike o osmanlijskim napadima.</li><li><strong>Citat:</strong> „Gospodi moja, narode, gdi ste? / Jer ne branite vrimega zlosta?“</li></ul><h4>5. Dobri nauci</h4><ul><li><strong>Opis:</strong> Pjesme nabožne tematike koje ističu važnost pobožnosti i kršćanskih vrjednota.</li><li><strong>Citat:</strong> „Ne ufaj se u blaga ovoga svita, / već u dušu tvoju pravu gospita.“</li></ul><h4>6. Čten’je života i muke blaženoga i sfetoga Dujma</h4><ul><li><strong>Opis:</strong> Životopis splitskog zaštitnika sv. Dujma, prožet dubokom kršćanskom duhovnošću.</li></ul><h3>Latinska djela</h3><h4>1. Davidias (oko 1517.)</h4><ul><li><strong>Opis:</strong> Ep u 14 knjiga i 6765 heksametara o kralju Davidu, pisan po uzoru na Vergilija. Djelo je alegorijsko – David predstavlja Krista, a Šaul Židove.</li><li><strong>Citat:</strong> „Domine, dirige me ut non labar adversum minas inimicorum meorum.“</li><li><strong>Značaj:</strong> Smatra se vrhuncem europskog humanizma.</li></ul><h4>2. De institutione bene vivendi per exempla sanctorum</h4><ul><li><strong>Opis:</strong> Zbirka poučnih priča iz Biblije i života svetaca, jedno od najprevođenijih Marulićevih djela.</li><li><strong>Citat:</strong> „Veritas nos semper ad lucem ducet.“</li><li><strong>Značaj:</strong> Prevedeno na desetke jezika, uključujući japanski.</li></ul><h4>3. Evangelistarium</h4><ul><li><strong>Opis:</strong> Moralistička rasprava u sedam knjiga o praktičnoj kršćanskoj etici.</li><li><strong>Citat:</strong> „Amor Dei principium omnis virtutis est.“</li></ul><h4>4. De humilitate et gloria Christi</h4><ul><li><strong>Opis:</strong> Kristološka rasprava o poniznosti i slavi Krista, usmjerena na dokazivanje Kristova mesijanstva.</li><li><strong>Citat:</strong> „Christus humilitatem docuit, ut gloriam nobis aperiret.“</li></ul><h4>5. Dialogus de Hercule a Christocolis superato</h4><ul><li><strong>Opis:</strong> Filozofska rasprava o odnosu mitologije i kršćanstva.</li><li><strong>Citat:</strong> „Non victoriae humanae sed Christi triumphus superavit omnia.“</li></ul><h4>6. De ultimo Christi iudicio</h4><ul><li><strong>Opis:</strong> Retorički najsavršeniji tekst o Posljednjem sudu Kristovu.</li><li><strong>Citat:</strong> „Justitia eius lucem adducet die novissima.“</li></ul><h4>7. Vita divi Hieronimi</h4><ul><li><strong>Opis:</strong> Biografija sv. Jeronima, s polemičkom raspravom protiv onih koji su tvrdili da je bio Talijan.</li><li><strong>Citat:</strong> „Hieronimus, lux Ecclesiae et patronus linguae sanctae.“</li></ul><h4>8. Epigrammata</h4><ul><li><strong>Opis:</strong> Ciklus od 141 epigrama, inspiriran Katulom i Ovidijem.</li><li><strong>Citat:</strong> „Non omnis est amor purus; tamen in puritate spes nostra manet.“</li></ul><h4>9. Quinquaginta parabolae</h4><ul><li><strong>Opis:</strong> Zbirka pedeset prispodoba, posvećena Tomi Nigeru, s tematikom inspiriranom Biblijom.</li><li><strong>Citat:</strong> „Parabola semper in lucem ducit Veritatem.“</li></ul><h4>10. Regum Dalmatiae et Croatiae gesta</h4><ul><li><strong>Opis:</strong> Slobodan prijevod dijela Ljetopisa Popa Dukljanina, poznat i kao Hrvatska kronika.</li><li><strong>Citat:</strong> „Historia servanda est memoriae gentis nostrae.“</li></ul><h2>Zaključak</h2><p>Marulićeva djela odražavaju njegovu intelektualnu širinu i duboko ukorijenjenu duhovnost. Bilo da piše o biblijskim junacima, kršćanskoj etici ili aktualnim političkim temama, njegovi tekstovi nose poruke univerzalne vrijednosti i važnosti moralne dosljednosti. Značajna ostavština, kako na nacionalnoj, tako i na europskoj razini, čini ga nezaobilaznim autorom renesansne književnosti.');function pn(e){return dn()}var hn=b('<div class="text-3xl font-bold">O projektu');function mn(e){return hn()}var gn=b('<div class="text-3xl font-bold">Pomoć');function vn(e){return gn()}var jn=b("<li><a href=/biografija>Biografija"),kn=b("<li><a href=/stvaralastvo>Stvaralaštvo"),bn=b("<li><details><summary>Zanimljivosti</summary><ul class=p-2><li><a href=/price>Priče</a></li><li><a href=/kuharica>Kuharica</a></li><li><a href=/radovi>Naši radovi</a></li><li><a href=/predstava>Predstava"),wn=b('<a href=/pomoc class="link link-hover">Pomoć'),yn=b('<a href=/oprojektu class="link link-hover">O projektu'),xn=b('<a href=/onama class="link link-hover">O nama'),$n=b('<a href=https://ss-obrtnicka-koprivnica.skole.hr target=_blank class="link link-hover">Obrtnička škola Koprivnica'),Sn=b('<div class="navbar bg-base-100"><div class=navbar-start><div class=dropdown><div tabindex=0 role=button class="btn btn-ghost lg:hidden"><svg xmlns=http://www.w3.org/2000/svg class="h-5 w-5"fill=none viewBox="0 0 24 24"stroke=currentColor><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M4 6h16M4 12h8m-8 6h16"></path></svg></div><ul tabindex=0 class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"></ul></div><a href=/ class="btn btn-ghost"><div class="flex flex-col items-start"><span class=text-xl>Marko Marulić</span><span class=text-xs>u Obrtničkoj školi Koprivnica</span></div></a></div><div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1 gap-1"></ul></div><div class=navbar-end><a href=/onama class=btn>O nama'),Pn=b('<div class="container mx-auto px-4 py-8 min-h-[70vh]">'),Cn=b('<footer class="footer footer-center bg-base-200 text-base-content rounded p-10"><nav class="grid grid-flow-col gap-4"></nav><aside><p>Vlasnička prava © <!> Obrtnička škola Koprivnica i učenici');function An(e){return w(qt,{root:On,get children(){return[w(_,{path:"/",component:Gt}),w(_,{path:"/onama",component:Jt}),w(_,{path:"/kuharica",component:en}),w(_,{path:"/predstava",component:nn}),w(_,{path:"/radovi",component:on}),w(_,{path:"/price",component:un}),w(_,{path:"/biografija",component:fn}),w(_,{path:"/stvaralastvo",component:pn}),w(_,{path:"/oprojektu",component:mn}),w(_,{path:"/pomoc",component:vn})]}})}function Se(e){let t;function n(){t.removeAttribute("open")}return[(()=>{var i=jn(),r=i.firstChild;return r.$$click=n,i})(),(()=>{var i=kn(),r=i.firstChild;return r.$$click=n,i})(),(()=>{var i=bn(),r=i.firstChild,o=r.firstChild,s=o.nextSibling,a=t;return typeof a=="function"?gt(a,r):t=r,s.$$click=n,i})()]}function _n(e){return[wn(),yn(),xn(),$n()]}function On(e){return[(()=>{var t=Sn(),n=t.firstChild,i=n.firstChild,r=i.firstChild,o=r.nextSibling,s=n.nextSibling,a=s.firstChild;return N(o,w(Se,{})),N(a,w(Se,{})),t})(),(()=>{var t=Pn();return N(t,()=>e.children),t})(),(()=>{var t=Cn(),n=t.firstChild,i=n.nextSibling,r=i.firstChild,o=r.firstChild,s=o.nextSibling;return s.nextSibling,N(n,w(_n,{})),N(r,()=>new Date().getFullYear(),s),t})()]}Ne(["click"]);const zn=document.getElementById("root");mt(()=>w(An,{}),zn);
