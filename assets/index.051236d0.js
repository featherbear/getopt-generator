(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}})();function F(){}function ke(e){return e()}function me(){return Object.create(null)}function x(e){e.forEach(ke)}function Ne(e){return typeof e=="function"}function Z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function xe(e){return Object.keys(e).length===0}function a(e,t){e.appendChild(t)}function L(e,t,l){e.insertBefore(t,l||null)}function k(e){e.parentNode.removeChild(e)}function Le(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function d(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function w(){return C(" ")}function Q(e,t,l,n){return e.addEventListener(t,l,n),()=>e.removeEventListener(t,l,n)}function h(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function je(e){return Array.from(e.childNodes)}function Oe(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function O(e,t){e.value=t==null?"":t}function ve(e,t){for(let l=0;l<e.options.length;l+=1){const n=e.options[l];if(n.__value===t){n.selected=!0;return}}e.selectedIndex=-1}function De(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}let se;function H(e){se=e}const U=[],J=[],V=[],oe=[],Te=Promise.resolve();let ue=!1;function Ce(){ue||(ue=!0,Te.then(Ae))}function W(e){V.push(e)}function Fe(e){oe.push(e)}const ie=new Set;let K=0;function Ae(){const e=se;do{for(;K<U.length;){const t=U[K];K++,H(t),Qe(t.$$)}for(H(null),U.length=0,K=0;J.length;)J.pop()();for(let t=0;t<V.length;t+=1){const l=V[t];ie.has(l)||(ie.add(l),l())}V.length=0}while(U.length);for(;oe.length;)oe.pop()();ue=!1,ie.clear(),H(e)}function Qe(e){if(e.fragment!==null){e.update(),x(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(W)}}const G=new Set;let P;function Ue(){P={r:0,c:[],p:P}}function He(){P.r||x(P.c),P=P.p}function S(e,t){e&&e.i&&(G.delete(e),e.i(t))}function M(e,t,l,n){if(e&&e.o){if(G.has(e))return;G.add(e),P.c.push(()=>{G.delete(e),n&&(l&&e.d(1),n())}),e.o(t)}else n&&n()}function Re(e,t,l){const n=e.$$.props[t];n!==void 0&&(e.$$.bound[n]=l,l(e.$$.ctx[n]))}function ae(e){e&&e.c()}function X(e,t,l,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,l),n||W(()=>{const i=e.$$.on_mount.map(ke).filter(Ne);e.$$.on_destroy?e.$$.on_destroy.push(...i):x(i),e.$$.on_mount=[]}),o.forEach(W)}function Y(e,t){const l=e.$$;l.fragment!==null&&(x(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function Me(e,t){e.$$.dirty[0]===-1&&(U.push(e),Ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ee(e,t,l,n,r,o,i,p=[-1]){const u=se;H(e);const f=e.$$={fragment:null,ctx:[],props:o,update:F,not_equal:r,bound:me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:me(),dirty:p,skip_bound:!1,root:t.target||u.$$.root};i&&i(f.root);let c=!1;if(f.ctx=l?l(e,t.props||{},(s,g,...m)=>{const v=m.length?m[0]:g;return f.ctx&&r(f.ctx[s],f.ctx[s]=v)&&(!f.skip_bound&&f.bound[s]&&f.bound[s](v),c&&Me(e,s)),g}):[],f.update(),c=!0,x(f.before_update),f.fragment=n?n(f.ctx):!1,t.target){if(t.hydrate){const s=je(t.target);f.fragment&&f.fragment.l(s),s.forEach(k)}else f.fragment&&f.fragment.c();t.intro&&S(e.$$.fragment),X(e,t.target,t.anchor,t.customElement),Ae()}H(u)}class te{$destroy(){Y(this,1),this.$destroy=F}$on(t,l){if(!Ne(l))return F;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(l),()=>{const r=n.indexOf(l);r!==-1&&n.splice(r,1)}}$set(t){this.$$set&&!xe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var E=(e=>(e[e.NONE=0]="NONE",e[e.REQUIRED=1]="REQUIRED",e[e.OPTIONAL=2]="OPTIONAL",e))(E||{});function Ie(e){return Object.hasOwn(e,"shortFlag")&&!!e.shortFlag}function Pe(e){return Object.hasOwn(e,"longFlag")&&!!e.longFlag}const qe=e=>e.filter(Ie).reduce((t,l)=>{let n="";switch(l.argument){case E.OPTIONAL:n=":";break;case E.REQUIRED:n="::";break}return t+l.shortFlag+n},""),Be=e=>["{",e.filter(Pe).map(l=>{let n="no_argument";switch(l.argument){case E.OPTIONAL:n="optional_argument";break;case E.REQUIRED:n="required_argument";break}return`{"${l.longFlag}", ${n}, 0, ${l.shortFlag?`'${l.shortFlag}'`:0}}`}).concat("{ 0, 0, 0, 0 }").map(l=>"	"+l).join(`,
`),"}"].join(`
`);function ze(e,t){var n;let l=e.flatMap(r=>{let o=r.description?typeof r.description=="string"?[r.description]:r.description:[],i=[],p=[];Ie(r)&&p.push("-"+r.shortFlag),Pe(r)&&p.push("--"+r.longFlag);let u=p.map(f=>{let c="";switch(r.argument){case E.OPTIONAL:c=` [${r.argumentPlaceholder||"..."}]`;break;case E.REQUIRED:c=` ${r.argumentPlaceholder||"..."}`;break}return f+c}).join(", ");if(i.push(u),o.length>0){i[0]+=" - ";let f=i[0].length;i[0]+=o[0],o.slice(1).forEach(c=>i.push(Array(f+1).join(" ")+c))}return i.map(f=>{var c;return((c=t==null?void 0:t.linePrefix)!=null?c:"")+f})});return t!=null&&t.outputAsArray?l:l.join((n=t==null?void 0:t.lineSeparator)!=null?n:`
`)}function I(e){return{generateShort:()=>qe(e),generateLong:()=>Be(e),generateHelpText:t=>ze(e,t),get data(){return e}}}function be(e,t,l){const n=e.slice();return n[2]=t[l],n}function ye(e){let t,l,n,r,o;return{c(){t=d("pre"),l=d("code"),n=C(e[0]),r=w(),o=d("pre"),h(t,"data-prefix","$")},m(i,p){L(i,t,p),a(t,l),a(l,n),L(i,r,p),L(i,o,p)},p(i,p){p&1&&Oe(n,i[0])},d(i){i&&k(t),i&&k(r),i&&k(o)}}}function we(e){let t,l,n=e[2]+"",r;return{c(){t=d("pre"),l=d("code"),r=C(n),h(t,"data-prefix","")},m(o,i){L(o,t,i),a(t,l),a(l,r)},p(o,i){i&2&&n!==(n=o[2]+"")&&Oe(r,n)},d(o){o&&k(t)}}}function Ke(e){let t,l,n=e[0]&&ye(e),r=e[1],o=[];for(let i=0;i<r.length;i+=1)o[i]=we(be(e,r,i));return{c(){t=d("div"),n&&n.c(),l=w();for(let i=0;i<o.length;i+=1)o[i].c();h(t,"class","mockup-code svelte-1mgu3vn")},m(i,p){L(i,t,p),n&&n.m(t,null),a(t,l);for(let u=0;u<o.length;u+=1)o[u].m(t,null)},p(i,[p]){if(i[0]?n?n.p(i,p):(n=ye(i),n.c(),n.m(t,l)):n&&(n.d(1),n=null),p&2){r=i[1];let u;for(u=0;u<r.length;u+=1){const f=be(i,r,u);o[u]?o[u].p(f,p):(o[u]=we(f),o[u].c(),o[u].m(t,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=r.length}},i:F,o:F,d(i){i&&k(t),n&&n.d(),Le(o,i)}}}function Ve(e,t,l){let{command:n=null}=t,{lines:r}=t;return e.$$set=o=>{"command"in o&&l(0,n=o.command),"lines"in o&&l(1,r=o.lines)},[n,r]}class Ge extends te{constructor(t){super(),ee(this,t,Ve,Ke,Z,{command:0,lines:1})}}function Je(e){let t,l,n;return{c(){t=d("input"),h(t,"type","checkbox"),h(t,"class","toggle")},m(r,o){L(r,t,o),l||(n=Q(t,"click",e[3]),l=!0)},p:F,d(r){r&&k(t),l=!1,n()}}}function We(e){let t,l,n,r,o,i,p,u,f,c,s,g,m;return{c(){t=d("div"),l=d("div"),n=d("select"),r=d("option"),o=C("No argument"),i=d("option"),p=C("Optional"),u=d("option"),f=C("Required"),c=w(),s=d("input"),r.__value=E.NONE,r.value=r.__value,i.__value=E.OPTIONAL,i.value=i.__value,u.__value=E.REQUIRED,u.value=u.__value,h(n,"class","select select-bordered"),e[0][e[1]].argument===void 0&&W(()=>e[6].call(n)),h(s,"type","text"),h(s,"placeholder","Argument name"),h(s,"class","input input-bordered"),h(l,"class","input-group"),h(t,"class","form-control")},m(v,$){L(v,t,$),a(t,l),a(l,n),a(n,r),a(r,o),a(n,i),a(i,p),a(n,u),a(u,f),ve(n,e[0][e[1]].argument),a(l,c),a(l,s),O(s,e[0][e[1]].argumentPlaceholder),g||(m=[Q(n,"change",e[6]),Q(s,"input",e[7])],g=!0)},p(v,$){$&3&&ve(n,v[0][v[1]].argument),$&3&&s.value!==v[0][v[1]].argumentPlaceholder&&O(s,v[0][v[1]].argumentPlaceholder)},d(v){v&&k(t),g=!1,x(m)}}}function Xe(e){let t,l,n,r,o,i,p,u,f,c,s,g,m;function v(_,N){return!!_[0][_[1]].argument&&_[0][_[1]].argument!=E.NONE?We:Je}let $=v(e),b=$(e);return{c(){t=d("tr"),l=d("td"),n=d("input"),r=w(),o=d("td"),i=d("input"),p=w(),u=d("td"),b.c(),f=w(),c=d("td"),s=d("textarea"),h(n,"type","text"),h(n,"placeholder","Short Name"),h(n,"class","input input-ghost w-full max-w-xs"),h(n,"maxlength",1),h(n,"minlength",1),h(i,"type","text"),h(i,"placeholder","Long Name"),h(i,"class","input input-ghost w-full max-w-xs"),h(s,"class","textarea textarea-ghost"),h(s,"placeholder","Description")},m(_,N){L(_,t,N),a(t,l),a(l,n),O(n,e[0][e[1]].shortFlag),a(t,r),a(t,o),a(o,i),O(i,e[0][e[1]].longFlag),a(t,p),a(t,u),b.m(u,null),a(t,f),a(t,c),a(c,s),O(s,e[2]),g||(m=[Q(n,"input",e[4]),Q(i,"input",e[5]),Q(s,"input",e[8])],g=!0)},p(_,[N]){N&3&&n.value!==_[0][_[1]].shortFlag&&O(n,_[0][_[1]].shortFlag),N&3&&i.value!==_[0][_[1]].longFlag&&O(i,_[0][_[1]].longFlag),$===($=v(_))&&b?b.p(_,N):(b.d(1),b=$(_),b&&(b.c(),b.m(u,null))),N&4&&O(s,_[2])},i:F,o:F,d(_){_&&k(t),b.d(),g=!1,x(m)}}}function Ye(e,t,l){let{data:n}=t,{index:r}=t,o=Array.isArray(n[r].description)?n[r].description.join(`
`):n[r].description,i;function p(m){if(i){m.preventDefault();return}i=setTimeout(()=>{i=null,l(0,n[r].argument=E.REQUIRED,n)},200)}function u(){n[r].shortFlag=this.value,l(0,n),l(1,r),l(2,o)}function f(){n[r].longFlag=this.value,l(0,n),l(1,r),l(2,o)}function c(){n[r].argument=De(this),l(0,n),l(1,r),l(2,o)}function s(){n[r].argumentPlaceholder=this.value,l(0,n),l(1,r),l(2,o)}function g(){o=this.value,l(2,o)}return e.$$set=m=>{"data"in m&&l(0,n=m.data),"index"in m&&l(1,r=m.index)},e.$$.update=()=>{e.$$.dirty&6&&l(0,n[r].description=o.split(`
`),n)},[n,r,o,p,u,f,c,s,g]}class Ze extends te{constructor(t){super(),ee(this,t,Ye,Xe,Z,{data:0,index:1})}}function Ee(e,t,l){const n=e.slice();return n[2]=t[l],n[4]=l,n}function $e(e){let t,l,n;function r(i){e[1](i)}let o={index:e[4]};return e[0]!==void 0&&(o.data=e[0]),t=new Ze({props:o}),J.push(()=>Re(t,"data",r)),{c(){ae(t.$$.fragment)},m(i,p){X(t,i,p),n=!0},p(i,p){const u={};!l&&p&1&&(l=!0,u.data=i[0],Fe(()=>l=!1)),t.$set(u)},i(i){n||(S(t.$$.fragment,i),n=!0)},o(i){M(t.$$.fragment,i),n=!1},d(i){Y(t,i)}}}function et(e){let t,l,n,r,o,i,p=e[0],u=[];for(let c=0;c<p.length;c+=1)u[c]=$e(Ee(e,p,c));const f=c=>M(u[c],1,1,()=>{u[c]=null});return{c(){t=d("div"),l=d("table"),n=d("thead"),n.innerHTML=`<tr><th>Short Name</th> 
                <th>Long Name</th> 
                <th>Argument</th> 
                <th>Description</th></tr>`,r=w(),o=d("tbody");for(let c=0;c<u.length;c+=1)u[c].c();h(l,"class","table w-full"),h(t,"class","overflow-x-auto")},m(c,s){L(c,t,s),a(t,l),a(l,n),a(l,r),a(l,o);for(let g=0;g<u.length;g+=1)u[g].m(o,null);i=!0},p(c,[s]){if(s&1){p=c[0];let g;for(g=0;g<p.length;g+=1){const m=Ee(c,p,g);u[g]?(u[g].p(m,s),S(u[g],1)):(u[g]=$e(m),u[g].c(),S(u[g],1),u[g].m(o,null))}for(Ue(),g=p.length;g<u.length;g+=1)f(g);He()}},i(c){if(!i){for(let s=0;s<p.length;s+=1)S(u[s]);i=!0}},o(c){u=u.filter(Boolean);for(let s=0;s<u.length;s+=1)M(u[s]);i=!1},d(c){c&&k(t),Le(u,c)}}}function tt(e,t,l){let{data:n}=t;function r(o){n=o,l(0,n)}return e.$$set=o=>{"data"in o&&l(0,n=o.data)},[n,r]}class nt extends te{constructor(t){super(),ee(this,t,tt,et,Z,{data:0})}}function lt(e){let t,l,n,r,o,i,p,u,f,c,s,g,m,v,$,b,_,N,ne,ce,q,j,le,fe,A,B,de,re,pe,z,R,D;function Se(y){e[1](y)}let he={};return e[0]!==void 0&&(he.data=e[0]),r=new nt({props:he}),J.push(()=>Re(r,"data",Se)),R=new Ge({props:{command:"cat helptext",lines:I(e[0]).generateHelpText({outputAsArray:!0})}}),{c(){t=d("main"),l=d("h1"),l.textContent="getopt generator",n=w(),ae(r.$$.fragment),i=w(),p=d("div"),u=w(),f=d("div"),c=d("div"),s=d("div"),g=d("div"),m=d("label"),v=d("span"),v.innerHTML="<pre>const char *optstring</pre>",$=w(),b=d("input"),N=w(),ne=d("div"),ce=w(),q=d("div"),j=d("label"),le=d("span"),le.innerHTML="<pre>struct option[]</pre>",fe=w(),A=d("textarea"),de=w(),re=d("div"),pe=w(),z=d("div"),ae(R.$$.fragment),h(p,"class","divider"),h(b,"type","text"),h(b,"placeholder","Add options to see optstring"),h(b,"class","input input-bordered"),b.value=_=I(e[0]).generateShort(),b.readOnly=!0,h(m,"class","input-group input-group-vertical"),h(g,"class","form-control"),h(ne,"class","divider"),h(A,"placeholder","Add options to see optstring"),h(A,"class","input input-bordered"),A.value=B=I(e[0]).generateLong(),A.readOnly=!0,h(j,"class","input-group input-group-vertical"),h(q,"class","form-control"),h(s,"class","flex flex-col w-full border-opacity-50"),h(c,"class","h-20 flex-grow place-items-center"),h(re,"class","divider divider-horizontal"),h(z,"class","flex-grow place-items-center"),h(f,"class","flex w-full")},m(y,T){L(y,t,T),a(t,l),a(t,n),X(r,t,null),a(t,i),a(t,p),a(t,u),a(t,f),a(f,c),a(c,s),a(s,g),a(g,m),a(m,v),a(m,$),a(m,b),a(s,N),a(s,ne),a(s,ce),a(s,q),a(q,j),a(j,le),a(j,fe),a(j,A),a(f,de),a(f,re),a(f,pe),a(f,z),X(R,z,null),D=!0},p(y,[T]){const ge={};!o&&T&1&&(o=!0,ge.data=y[0],Fe(()=>o=!1)),r.$set(ge),(!D||T&1&&_!==(_=I(y[0]).generateShort())&&b.value!==_)&&(b.value=_),(!D||T&1&&B!==(B=I(y[0]).generateLong()))&&(A.value=B);const _e={};T&1&&(_e.lines=I(y[0]).generateHelpText({outputAsArray:!0})),R.$set(_e)},i(y){D||(S(r.$$.fragment,y),S(R.$$.fragment,y),D=!0)},o(y){M(r.$$.fragment,y),M(R.$$.fragment,y),D=!1},d(y){y&&k(t),Y(r),Y(R)}}}function rt(e,t,l){let n=[{longFlag:"reee",description:"Description",argument:E.REQUIRED,argumentPlaceholder:"data"},{shortFlag:"b",description:["beeeee","movie?"]}];function r(o){n=o,l(0,n)}return e.$$.update=()=>{e.$$.dirty&1&&console.log(I(n).generateLong())},[n,r]}class it extends te{constructor(t){super(),ee(this,t,rt,lt,Z,{})}}new it({target:document.getElementById("app")});
