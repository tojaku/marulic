(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Xe=(e,t)=>e===t,oe=Symbol("solid-proxy"),Ge=typeof Proxy=="function",X={equals:Xe};let Ye=Te;const _=1,G=2,ve={owned:null,cleanups:null,context:null,owner:null};var g=null;let te=null,Je=null,w=null,x=null,N=null,Q=0;function Ae(e,t){const n=w,s=g,r=e.length===0,o=t===void 0?s:t,l=r?ve:{owned:null,cleanups:null,context:o?o.context:null,owner:o},i=r?e:()=>e(()=>L(()=>W(l)));g=l,w=null;try{return C(i,!0)}finally{w=n,g=s}}function D(e,t){t=t?Object.assign({},X,t):X;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.value)),Oe(n,r));return[Re.bind(n),s]}function q(e,t,n){const s=Le(e,t,!1,_);Z(s)}function P(e,t,n){n=n?Object.assign({},X,n):X;const s=Le(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,Z(s),Re.bind(s)}function Qe(e){return C(e,!1)}function L(e){if(w===null)return e();const t=w;w=null;try{return e()}finally{w=t}}function ae(e,t,n){const s=Array.isArray(e);let r,o=n&&n.defer;return l=>{let i;if(s){i=Array(e.length);for(let a=0;a<e.length;a++)i[a]=e[a]()}else i=e();if(o)return o=!1,l;const u=L(()=>t(i,r,l));return r=i,u}}function Se(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function Pe(){return g}function xe(e,t){const n=g,s=w;g=e,w=null;try{return C(t,!0)}catch(r){fe(r)}finally{g=n,w=s}}function Ze(e){const t=w,n=g;return Promise.resolve().then(()=>{w=t,g=n;let s;return C(e,!1),w=g=null,s?s.done:void 0})}function Ee(e,t){const n=Symbol("context");return{id:n,Provider:rt(n),defaultValue:e}}function ze(e){let t;return g&&g.context&&(t=g.context[e.id])!==void 0?t:e.defaultValue}function ce(e){const t=P(e),n=P(()=>ie(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function Re(){if(this.sources&&this.state)if(this.state===_)Z(this);else{const e=x;x=null,C(()=>Y(this),!1),x=e}if(w){const e=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(e)):(w.sources=[this],w.sourceSlots=[e]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function Oe(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&C(()=>{for(let r=0;r<e.observers.length;r+=1){const o=e.observers[r],l=te&&te.running;l&&te.disposed.has(o),(l?!o.tState:!o.state)&&(o.pure?x.push(o):N.push(o),o.observers&&$e(o)),l||(o.state=_)}if(x.length>1e6)throw x=[],new Error},!1)),t}function Z(e){if(!e.fn)return;W(e);const t=Q;et(e,e.value,t)}function et(e,t,n){let s;const r=g,o=w;w=g=e;try{s=e.fn(t)}catch(l){return e.pure&&(e.state=_,e.owned&&e.owned.forEach(W),e.owned=null),e.updatedAt=n+1,fe(l)}finally{w=o,g=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Oe(e,s):e.value=s,e.updatedAt=n)}function Le(e,t,n,s=_,r){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:g?g.context:null,pure:n};return g===null||g!==ve&&(g.owned?g.owned.push(o):g.owned=[o]),o}function Ce(e){if(e.state===0)return;if(e.state===G)return Y(e);if(e.suspense&&L(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Q);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===_)Z(e);else if(e.state===G){const s=x;x=null,C(()=>Y(e,t[0]),!1),x=s}}function C(e,t){if(x)return e();let n=!1;t||(x=[]),N?n=!0:N=[],Q++;try{const s=e();return tt(n),s}catch(s){n||(N=null),x=null,fe(s)}}function tt(e){if(x&&(Te(x),x=null),e)return;const t=N;N=null,t.length&&C(()=>Ye(t),!1)}function Te(e){for(let t=0;t<e.length;t++)Ce(e[t])}function Y(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const r=s.state;r===_?s!==t&&(!s.updatedAt||s.updatedAt<Q)&&Ce(s):r===G&&Y(s,t)}}}function $e(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=G,n.pure?x.push(n):N.push(n),n.observers&&$e(n))}}function W(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const o=r.pop(),l=n.observerSlots.pop();s<r.length&&(o.sourceSlots[l]=s,r[s]=o,n.observerSlots[s]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)W(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)W(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function nt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function fe(e,t=g){throw nt(e)}function ie(e){if(typeof e=="function"&&!e.length)return ie(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=ie(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function rt(e,t){return function(s){let r;return q(()=>r=L(()=>(g.context={...g.context,[e]:s.value},ce(()=>s.children))),void 0),r}}function E(e,t){return L(()=>e(t||{}))}function H(){return!0}const st={get(e,t,n){return t===oe?n:e.get(t)},has(e,t){return t===oe?!0:e.has(t)},set:H,deleteProperty:H,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:H,deleteProperty:H}},ownKeys(e){return e.keys()}};function ne(e){return(e=typeof e=="function"?e():e)?e:{}}function ot(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function it(...e){let t=!1;for(let l=0;l<e.length;l++){const i=e[l];t=t||!!i&&oe in i,e[l]=typeof i=="function"?(t=!0,P(i)):i}if(Ge&&t)return new Proxy({get(l){for(let i=e.length-1;i>=0;i--){const u=ne(e[i])[l];if(u!==void 0)return u}},has(l){for(let i=e.length-1;i>=0;i--)if(l in ne(e[i]))return!0;return!1},keys(){const l=[];for(let i=0;i<e.length;i++)l.push(...Object.keys(ne(e[i])));return[...new Set(l)]}},st);const n={},s=Object.create(null);for(let l=e.length-1;l>=0;l--){const i=e[l];if(!i)continue;const u=Object.getOwnPropertyNames(i);for(let a=u.length-1;a>=0;a--){const c=u[a];if(c==="__proto__"||c==="constructor")continue;const f=Object.getOwnPropertyDescriptor(i,c);if(!s[c])s[c]=f.get?{enumerable:!0,configurable:!0,get:ot.bind(n[c]=[f.get.bind(i)])}:f.value!==void 0?f:void 0;else{const d=n[c];d&&(f.get?d.push(f.get.bind(i)):f.value!==void 0&&d.push(()=>f.value))}}}const r={},o=Object.keys(s);for(let l=o.length-1;l>=0;l--){const i=o[l],u=s[i];u&&u.get?Object.defineProperty(r,i,u):r[i]=u?u.value:void 0}return r}const lt=e=>`Stale read from <${e}>.`;function Ue(e){const t=e.keyed,n=P(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return P(()=>{const s=n();if(s){const r=e.children;return typeof r=="function"&&r.length>0?L(()=>r(t?s:()=>{if(!L(n))throw lt("Show");return e.when})):r}return e.fallback},void 0,void 0)}function ut(e,t,n){let s=n.length,r=t.length,o=s,l=0,i=0,u=t[r-1].nextSibling,a=null;for(;l<r||i<o;){if(t[l]===n[i]){l++,i++;continue}for(;t[r-1]===n[o-1];)r--,o--;if(r===l){const c=o<s?i?n[i-1].nextSibling:n[o-i]:u;for(;i<o;)e.insertBefore(n[i++],c)}else if(o===i)for(;l<r;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[r-1]){const c=t[--r].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],c),t[r]=n[o]}else{if(!a){a=new Map;let f=i;for(;f<o;)a.set(n[f],f++)}const c=a.get(t[l]);if(c!=null)if(i<c&&c<o){let f=l,d=1,m;for(;++f<r&&f<o&&!((m=a.get(t[f]))==null||m!==c+d);)d++;if(d>c-i){const S=t[l];for(;i<c;)e.insertBefore(n[i++],S)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const me="_$DX_DELEGATE";function at(e,t,n,s={}){let r;return Ae(o=>{r=o,t===document?e():ft(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function Ne(e,t,n){let s;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},o=()=>(s||(s=r())).cloneNode(!0);return o.cloneNode=o,o}function ct(e,t=window.document){const n=t[me]||(t[me]=new Set);for(let s=0,r=e.length;s<r;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,ht))}}function ft(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return J(e,t,s,n);q(r=>J(e,t(),r,n),s)}function ht(e){let t=e.target;const n=`$$${e.type}`,s=e.target,r=e.currentTarget,o=u=>Object.defineProperty(e,"target",{configurable:!0,value:u}),l=()=>{const u=t[n];if(u&&!t.disabled){const a=t[`${n}Data`];if(a!==void 0?u.call(t,a,e):u.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},i=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const u=e.composedPath();o(u[0]);for(let a=0;a<u.length-2&&(t=u[a],!!l());a++){if(t._$host){t=t._$host,i();break}if(t.parentNode===r)break}}else i();o(s)}function J(e,t,n,s,r){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(o==="number"&&(t=t.toString(),t===n))return n;if(l){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=j(e,n,s,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean")n=j(e,n,s);else{if(o==="function")return q(()=>{let i=t();for(;typeof i=="function";)i=i();n=J(e,i,n,s)}),()=>n;if(Array.isArray(t)){const i=[],u=n&&Array.isArray(n);if(le(i,t,n,r))return q(()=>n=J(e,i,n,s,!0)),()=>n;if(i.length===0){if(n=j(e,n,s),l)return n}else u?n.length===0?ye(e,i,s):ut(e,n,i):(n&&j(e),ye(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=j(e,n,s,t);j(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function le(e,t,n,s){let r=!1;for(let o=0,l=t.length;o<l;o++){let i=t[o],u=n&&n[e.length],a;if(!(i==null||i===!0||i===!1))if((a=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))r=le(e,i,u)||r;else if(a==="function")if(s){for(;typeof i=="function";)i=i();r=le(e,Array.isArray(i)?i:[i],Array.isArray(u)?u:[u])||r}else e.push(i),r=!0;else{const c=String(i);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return r}function ye(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function j(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(r!==i){const u=i.parentNode===e;!o&&!l?u?e.replaceChild(r,i):e.insertBefore(r,n):u&&i.remove()}else o=!0}}else e.insertBefore(r,n);return[r]}const dt=!1;function _e(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,o){if(n)return!(n=!1);const l={to:r,options:o,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const i of e)i.listener({...l,from:i.location,retry:u=>{u&&(n=!0),i.navigate(r,{...o,resolve:!1})}});return!l.defaultPrevented}return{subscribe:t,confirm:s}}let ue;function he(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),ue=window.history.state._depth}he();function pt(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function gt(e,t){let n=!1;return()=>{const s=ue;he();const r=s==null?null:ue-s;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const mt=/^(?:[a-z0-9]+:)?\/\//i,yt=/^\/+|(\/)\/+$/g,Fe="http://sr";function k(e,t=!1){const n=e.replace(yt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function V(e,t,n){if(mt.test(t))return;const s=k(e),r=n&&k(n);let o="";return!r||t.startsWith("/")?o=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?o=s+r:o=r,(o||"/")+k(t,!o)}function wt(e,t){return k(e).replace(/\/*(\*.*)?$/g,"")+k(t)}function je(e){const t={};return e.searchParams.forEach((n,s)=>{s in t?Array.isArray(t[s])?t[s].push(n):t[s]=[t[s],n]:t[s]=n}),t}function bt(e,t,n){const[s,r]=e.split("/*",2),o=s.split("/").filter(Boolean),l=o.length;return i=>{const u=i.split("/").filter(Boolean),a=u.length-l;if(a<0||a>0&&r===void 0&&!t)return null;const c={path:l?"":"/",params:{}},f=d=>n===void 0?void 0:n[d];for(let d=0;d<l;d++){const m=o[d],S=m[0]===":",h=S?u[d]:u[d].toLowerCase(),p=S?m.slice(1):m.toLowerCase();if(S&&re(h,f(p)))c.params[p]=h;else if(S||!re(h,p))return null;c.path+=`/${h}`}if(r){const d=a?u.slice(-a).join("/"):"";if(re(d,f(r)))c.params[r]=d;else return null}return c}}function re(e,t){const n=s=>s===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function vt(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,o)=>r+(o.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function Be(e){const t=new Map,n=Pe();return new Proxy({},{get(s,r){return t.has(r)||xe(n,()=>t.set(r,P(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Ie(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return Ie(s).reduce((o,l)=>[...o,...r.map(i=>i+l)],[])}const At=100,St=Ee(),De=Ee();function Pt(e,t=""){const{component:n,preload:s,load:r,children:o,info:l}=e,i=!o||Array.isArray(o)&&!o.length,u={key:e,component:n,preload:s||r,info:l};return ke(e.path).reduce((a,c)=>{for(const f of Ie(c)){const d=wt(t,f);let m=i?d:d.split("/*",1)[0];m=m.split("/").map(S=>S.startsWith(":")||S.startsWith("*")?S:encodeURIComponent(S)).join("/"),a.push({...u,originalPath:c,pattern:m,matcher:bt(m,!i,e.matchFilters)})}return a},[])}function xt(e,t=0){return{routes:e,score:vt(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const o=e[r],l=o.matcher(n);if(!l)return null;s.unshift({...l,route:o})}return s}}}function ke(e){return Array.isArray(e)?e:[e]}function qe(e,t="",n=[],s=[]){const r=ke(e);for(let o=0,l=r.length;o<l;o++){const i=r[o];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const u=Pt(i,t);for(const a of u){n.push(a);const c=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!c)qe(i.children,a.pattern,n,s);else{const f=xt([...n],s.length);s.push(f)}n.pop()}}}return n.length?s:s.sort((o,l)=>l.score-o.score)}function se(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function Et(e,t,n){const s=new URL(Fe),r=P(c=>{const f=e();try{return new URL(f,s)}catch{return console.error(`Invalid path ${f}`),c}},s,{equals:(c,f)=>c.href===f.href}),o=P(()=>r().pathname),l=P(()=>r().search,!0),i=P(()=>r().hash),u=()=>"",a=ae(l,()=>je(r()));return{get pathname(){return o()},get search(){return l()},get hash(){return i()},get state(){return t()},get key(){return u()},query:n?n(a):Be(a)}}let U;function Rt(){return U}function Ot(e,t,n,s={}){const{signal:[r,o],utils:l={}}=e,i=l.parsePath||(y=>y),u=l.renderPath||(y=>y),a=l.beforeLeave||_e(),c=V("",s.base||"");if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!r().value&&o({value:c,replace:!0,scroll:!1});const[f,d]=D(!1);let m;const S=(y,b)=>{b.value===h()&&b.state===v()||(m===void 0&&d(!0),U=y,m=b,Ze(()=>{m===b&&(p(m.value),A(m.state),$[1]([]))}).finally(()=>{m===b&&Qe(()=>{U=void 0,y==="navigate"&&He(m),d(!1),m=void 0})}))},[h,p]=D(r().value),[v,A]=D(r().state),T=Et(h,v,l.queryWrapper),O=[],$=D([]),B=P(()=>typeof s.transformUrl=="function"?se(t(),s.transformUrl(T.pathname)):se(t(),T.pathname)),de=()=>{const y=B(),b={};for(let R=0;R<y.length;R++)Object.assign(b,y[R].params);return b},We=l.paramsWrapper?l.paramsWrapper(de,t):Be(de),pe={pattern:c,path:()=>c,outlet:()=>null,resolvePath(y){return V(c,y)}};return q(ae(r,y=>S("native",y),{defer:!0})),{base:pe,location:T,params:We,isRouting:f,renderPath:u,parsePath:i,navigatorFactory:Me,matches:B,beforeLeave:a,preloadRoute:Ve,singleFlight:s.singleFlight===void 0?!0:s.singleFlight,submissions:$};function Ke(y,b,R){L(()=>{if(typeof b=="number"){b&&(l.go?l.go(b):console.warn("Router integration does not support relative routing"));return}const K=!b||b[0]==="?",{replace:z,resolve:F,scroll:ee,state:I}={replace:!1,resolve:!K,scroll:!0,...R},M=F?y.resolvePath(b):V(K&&T.pathname||"",b);if(M===void 0)throw new Error(`Path '${b}' is not a routable path`);if(O.length>=At)throw new Error("Too many redirects");const ge=h();(M!==ge||I!==v())&&(dt||a.confirm(M,R)&&(O.push({value:ge,replace:z,scroll:ee,state:v()}),S("navigate",{value:M,state:I})))})}function Me(y){return y=y||ze(De)||pe,(b,R)=>Ke(y,b,R)}function He(y){const b=O[0];b&&(o({...y,replace:b.replace,scroll:b.scroll}),O.length=0)}function Ve(y,b){const R=se(t(),y.pathname),K=U;U="preload";for(let z in R){const{route:F,params:ee}=R[z];F.component&&F.component.preload&&F.component.preload();const{preload:I}=F;b&&I&&xe(n(),()=>I({params:ee,location:{pathname:y.pathname,search:y.search,hash:y.hash,query:je(y),state:null,key:""},intent:"preload"}))}U=K}}function Lt(e,t,n,s){const{base:r,location:o,params:l}=e,{pattern:i,component:u,preload:a}=s().route,c=P(()=>s().path);u&&u.preload&&u.preload();const f=a?a({params:l,location:o,intent:U||"initial"}):void 0;return{parent:t,pattern:i,path:c,outlet:()=>u?E(u,{params:l,location:o,data:f,get children(){return n()}}):n(),resolvePath(m){return V(r.path(),m,c())}}}const Ct=e=>t=>{const{base:n}=t,s=ce(()=>t.children),r=P(()=>qe(s(),t.base||""));let o;const l=Ot(e,r,()=>o,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(l),E(St.Provider,{value:l,get children(){return E(Tt,{routerState:l,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[P(()=>(o=Pe())&&null),E($t,{routerState:l,get branches(){return r()}})]}})}})};function Tt(e){const t=e.routerState.location,n=e.routerState.params,s=P(()=>e.preload&&L(()=>{e.preload({params:n,location:t,intent:Rt()||"initial"})}));return E(Ue,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:r=>E(r,{params:n,location:t,get data(){return s()},get children(){return e.children}})})}function $t(e){const t=[];let n;const s=P(ae(e.routerState.matches,(r,o,l)=>{let i=o&&r.length===o.length;const u=[];for(let a=0,c=r.length;a<c;a++){const f=o&&o[a],d=r[a];l&&f&&d.route.key===f.route.key?u[a]=l[a]:(i=!1,t[a]&&t[a](),Ae(m=>{t[a]=m,u[a]=Lt(e.routerState,u[a-1]||e.routerState.base,we(()=>s()[a+1]),()=>e.routerState.matches()[a])}))}return t.splice(r.length).forEach(a=>a()),l&&i?l:(n=u[0],u)}));return we(()=>s()&&n)()}const we=e=>()=>E(Ue,{get when(){return e()},keyed:!0,children:t=>E(De.Provider,{value:t,get children(){return t.outlet()}})}),be=e=>{const t=ce(()=>e.children);return it(e,{get children(){return t()}})};function Ut([e,t],n,s){return[e,s?r=>t(s(r)):t]}function Nt(e){let t=!1;const n=r=>typeof r=="string"?{value:r}:r,s=Ut(D(n(e.get()),{equals:(r,o)=>r.value===o.value&&r.state===o.state}),void 0,r=>(!t&&e.set(r),r));return e.init&&Se(e.init((r=e.get())=>{t=!0,s[1](n(r)),t=!1})),Ct({signal:s,create:e.create,utils:e.utils})}function _t(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Ft(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const jt=new Map;function Bt(e=!0,t=!1,n="/_server",s){return r=>{const o=r.base.path(),l=r.navigatorFactory(r.base);let i,u;function a(h){return h.namespaceURI==="http://www.w3.org/2000/svg"}function c(h){if(h.defaultPrevented||h.button!==0||h.metaKey||h.altKey||h.ctrlKey||h.shiftKey)return;const p=h.composedPath().find(B=>B instanceof Node&&B.nodeName.toUpperCase()==="A");if(!p||t&&!p.hasAttribute("link"))return;const v=a(p),A=v?p.href.baseVal:p.href;if((v?p.target.baseVal:p.target)||!A&&!p.hasAttribute("state"))return;const O=(p.getAttribute("rel")||"").split(/\s+/);if(p.hasAttribute("download")||O&&O.includes("external"))return;const $=v?new URL(A,document.baseURI):new URL(A);if(!($.origin!==window.location.origin||o&&$.pathname&&!$.pathname.toLowerCase().startsWith(o.toLowerCase())))return[p,$]}function f(h){const p=c(h);if(!p)return;const[v,A]=p,T=r.parsePath(A.pathname+A.search+A.hash),O=v.getAttribute("state");h.preventDefault(),l(T,{resolve:!1,replace:v.hasAttribute("replace"),scroll:!v.hasAttribute("noscroll"),state:O?JSON.parse(O):void 0})}function d(h){const p=c(h);if(!p)return;const[v,A]=p;r.preloadRoute(A,v.getAttribute("preload")!=="false")}function m(h){clearTimeout(i);const p=c(h);if(!p)return u=null;const[v,A]=p;u!==v&&(i=setTimeout(()=>{r.preloadRoute(A,v.getAttribute("preload")!=="false"),u=v},20))}function S(h){if(h.defaultPrevented)return;let p=h.submitter&&h.submitter.hasAttribute("formaction")?h.submitter.getAttribute("formaction"):h.target.getAttribute("action");if(!p)return;if(!p.startsWith("https://action/")){const A=new URL(p,Fe);if(p=r.parsePath(A.pathname+A.search),!p.startsWith(n))return}if(h.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const v=jt.get(p);if(v){h.preventDefault();const A=new FormData(h.target,h.submitter);v.call({r,f:h.target},h.target.enctype==="multipart/form-data"?A:new URLSearchParams(A))}}ct(["click","submit"]),document.addEventListener("click",f),e&&(document.addEventListener("mousemove",m,{passive:!0}),document.addEventListener("focusin",d,{passive:!0}),document.addEventListener("touchstart",d,{passive:!0})),document.addEventListener("submit",S),Se(()=>{document.removeEventListener("click",f),e&&(document.removeEventListener("mousemove",m),document.removeEventListener("focusin",d),document.removeEventListener("touchstart",d)),document.removeEventListener("submit",S)})}}function It(e){const t=e.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,n="/"]=window.location.hash.split("#",2);return`${n}#${t}`}return t}function Dt(e){const t=()=>window.location.hash.slice(1),n=_e();return Nt({get:t,set({value:s,replace:r,scroll:o,state:l}){r?window.history.replaceState(pt(l),"","#"+s):window.history.pushState(l,"","#"+s);const i=s.indexOf("#"),u=i>=0?s.slice(i+1):"";Ft(u,o),he()},init:s=>_t(window,"hashchange",gt(s,r=>!n.confirm(r&&r<0?r:t()))),create:Bt(e.preload,e.explicitLinks,e.actionBase),utils:{go:s=>window.history.go(s),renderPath:s=>`#${s}`,parsePath:It,beforeLeave:n}})(e)}var kt=Ne("<div class=text-5xl>Marko Marulić");function qt(e){return kt()}var Wt=Ne("<div>About");function Kt(e){return Wt()}function Mt(e){return E(Dt,{get children(){return[E(be,{path:"/",component:qt}),E(be,{path:"/about",component:Kt})]}})}const Ht=document.getElementById("root");at(()=>E(Mt,{}),Ht);
