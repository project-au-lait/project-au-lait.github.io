import{l as S,t as C}from"../chunks/translations.CoLWpw5p.js";import{s as L,n as d,c as q,e as A,u as B,f as F,h as I}from"../chunks/scheduler.D94RwQFs.js";import{S as j,i as T,e as p,c as _,y as P,o as b,g as $,d as f,s as y,t as V,a as v,f as w,b as z,h as m,j as D,u as M,v as k,w as E,n as g,l as x,x as O}from"../chunks/index.Cng8Hszq.js";const G=async()=>(await S("en"),{}),tt=Object.freeze(Object.defineProperty({__proto__:null,load:G},Symbol.toStringTag,{value:"Module"}));function N(l){let e,a='<div class="flex justify-between"><a href="/"><div class="flex items-center"><img src="./logo.svg" alt="logo" class="h-10"/> <p class="ml-2 text-xl text-white">Project Au Lait</p></div></a> <div class="flex items-center"><a href="https://github.com/project-au-lait"><img src="./github-mark-white.svg" alt="GitHub" class="h-8"/></a></div></div>';return{c(){e=p("nav"),e.innerHTML=a,this.h()},l(s){e=_(s,"NAV",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-d4g8xf"&&(e.innerHTML=a),this.h()},h(){b(e,"class","bg-black sticky top-0 py-4 px-6")},m(s,o){$(s,e,o)},p:d,i:d,o:d,d(s){s&&f(e)}}}class R extends j{constructor(e){super(),T(this,e,null,N,L,{})}}function J(l){let e,a,s,o='© 2024 <a href="https://monocrea.co.jp/">Monocrea, Inc.</a>',i,c,n=l[0]("msg.operatedBy")+"",t;return{c(){e=p("footer"),a=p("div"),s=p("p"),s.innerHTML=o,i=y(),c=p("p"),t=V(n),this.h()},l(r){e=_(r,"FOOTER",{class:!0});var u=v(e);a=_(u,"DIV",{class:!0});var h=v(a);s=_(h,"P",{"data-svelte-h":!0}),P(s)!=="svelte-1neqyce"&&(s.innerHTML=o),i=w(h),c=_(h,"P",{});var H=v(c);t=z(H,n),H.forEach(f),h.forEach(f),u.forEach(f),this.h()},h(){b(a,"class","text-left text-sm text-white"),b(e,"class","bg-black mt-auto p-6")},m(r,u){$(r,e,u),m(e,a),m(a,s),m(a,i),m(a,c),m(c,t)},p(r,[u]){u&1&&n!==(n=r[0]("msg.operatedBy")+"")&&D(t,n)},i:d,o:d,d(r){r&&f(e)}}}function K(l,e,a){let s;return q(l,C,o=>a(0,s=o)),[s]}class Q extends j{constructor(e){super(),T(this,e,K,J,L,{})}}function U(l){let e,a,s,o,i;e=new R({});const c=l[1].default,n=A(c,l,l[0],null);return o=new Q({}),{c(){M(e.$$.fragment),a=y(),n&&n.c(),s=y(),M(o.$$.fragment)},l(t){k(e.$$.fragment,t),a=w(t),n&&n.l(t),s=w(t),k(o.$$.fragment,t)},m(t,r){E(e,t,r),$(t,a,r),n&&n.m(t,r),$(t,s,r),E(o,t,r),i=!0},p(t,[r]){n&&n.p&&(!i||r&1)&&B(n,c,t,t[0],i?I(c,t[0],r,null):F(t[0]),null)},i(t){i||(g(e.$$.fragment,t),g(n,t),g(o.$$.fragment,t),i=!0)},o(t){x(e.$$.fragment,t),x(n,t),x(o.$$.fragment,t),i=!1},d(t){t&&(f(a),f(s)),O(e,t),n&&n.d(t),O(o,t)}}}function W(l,e,a){let{$$slots:s={},$$scope:o}=e;return l.$$set=i=>{"$$scope"in i&&a(0,o=i.$$scope)},[o,s]}class et extends j{constructor(e){super(),T(this,e,W,U,L,{})}}export{et as component,tt as universal};