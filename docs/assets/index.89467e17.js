import{w as Le,S as ee,i as te,s as ne,a as ae,b,c as L,l as E,d as B,r as he,n as me,e as le,f as Be,g as q,m as G,t as w,h as C,j as H,k as d,o as ie,p as h,q as re,u as z,v as I,x as J,y as _e,z as Ee,A as ge,B as Fe}from"./vendor.05bf501f.js";const Ne=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function l(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=l(i);fetch(i.href,r)}};Ne();const D=Le({combined:!0,r:!0,g:!0,b:!0,info:!0});function pe(n,e,l){const t=n.slice();return t[8]=e[l].x,t[9]=e[l].y,t[10]=e[l].color,t[11]=e[l].data,t}function de(n){let e,l,t,i,r,u;function c(){return n[6](n[11])}return{c(){e=ae("rect"),b(e,"x",l=n[8]*n[0]),b(e,"y",t=n[9]*n[0]),b(e,"width",n[0]),b(e,"height",n[0]),b(e,"fill",i=n[4](n[1](n[10])))},m(s,a){L(s,e,a),r||(u=[E(e,"focus",n[5]),E(e,"mouseover",c)],r=!0)},p(s,a){n=s,a&5&&l!==(l=n[8]*n[0])&&b(e,"x",l),a&5&&t!==(t=n[9]*n[0])&&b(e,"y",t),a&1&&b(e,"width",n[0]),a&1&&b(e,"height",n[0]),a&6&&i!==(i=n[4](n[1](n[10])))&&b(e,"fill",i)},d(s){s&&B(e),r=!1,he(u)}}}function Pe(n){let e,l,t=n[2],i=[];for(let r=0;r<t.length;r+=1)i[r]=de(pe(n,t,r));return{c(){e=ae("svg");for(let r=0;r<i.length;r+=1)i[r].c();b(e,"viewBox",l="0 0 "+7*n[0]+" "+24*n[0]),b(e,"xmlns","http://www.w3.org/2000/svg")},m(r,u){L(r,e,u);for(let c=0;c<i.length;c+=1)i[c].m(e,null)},p(r,[u]){if(u&31){t=r[2];let c;for(c=0;c<t.length;c+=1){const s=pe(r,t,c);i[c]?i[c].p(s,u):(i[c]=de(s),i[c].c(),i[c].m(e,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=t.length}u&1&&l!==(l="0 0 "+7*r[0]+" "+24*r[0])&&b(e,"viewBox",l)},i:me,o:me,d(r){r&&B(e),le(i,r)}}}function De(n,e,l){const t=([f,p,o])=>[f,p,o];let{size:i=10}=e,{swizzle:r=t}=e,{entries:u}=e,{onMouseOver:c}=e;const s=([f,p,o],g=!1)=>g?`hsl(${f*360}, ${p*100}%, ${o*100}%)`:`rgb(${f*255}, ${p*255}, ${o*255})`;function a(f){Be.call(this,n,f)}const _=f=>c&&c(f);return n.$$set=f=>{"size"in f&&l(0,i=f.size),"swizzle"in f&&l(1,r=f.swizzle),"entries"in f&&l(2,u=f.entries),"onMouseOver"in f&&l(3,c=f.onMouseOver)},[i,r,u,c,s,a,_]}class Q extends ee{constructor(e){super();te(this,e,De,Pe,ne,{size:0,swizzle:1,entries:2,onMouseOver:3})}}function be(n){let e,l;return e=new Q({props:{entries:n[0],onMouseOver:n[4],swizzle:n[3].rgb}}),{c(){q(e.$$.fragment)},m(t,i){G(e,t,i),l=!0},p(t,i){const r={};i&1&&(r.entries=t[0]),e.$set(r)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function ve(n){let e,l;return e=new Q({props:{entries:n[0],onMouseOver:n[4],swizzle:n[3].rrr}}),{c(){q(e.$$.fragment)},m(t,i){G(e,t,i),l=!0},p(t,i){const r={};i&1&&(r.entries=t[0]),e.$set(r)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function ke(n){let e,l;return e=new Q({props:{entries:n[0],onMouseOver:n[4],swizzle:n[3].ggg}}),{c(){q(e.$$.fragment)},m(t,i){G(e,t,i),l=!0},p(t,i){const r={};i&1&&(r.entries=t[0]),e.$set(r)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function we(n){let e,l;return e=new Q({props:{entries:n[0],onMouseOver:n[4],swizzle:n[3].bbb}}),{c(){q(e.$$.fragment)},m(t,i){G(e,t,i),l=!0},p(t,i){const r={};i&1&&(r.entries=t[0]),e.$set(r)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function ye(n){let e,l,t=JSON.stringify(n[1],null,2)+"",i;return{c(){e=d("div"),l=d("pre"),i=ie(t)},m(r,u){L(r,e,u),h(e,l),h(l,i)},p(r,u){u&2&&t!==(t=JSON.stringify(r[1],null,2)+"")&&re(i,t)},d(r){r&&B(e)}}}function Ve(n){let e,l,t,i,r,u,c,s=n[2].combined&&be(n),a=n[2].r&&ve(n),_=n[2].g&&ke(n),f=n[2].b&&we(n),p=n[2].info&&ye(n);return{c(){e=d("div"),l=d("div"),s&&s.c(),t=z(),a&&a.c(),i=z(),_&&_.c(),r=z(),f&&f.c(),u=z(),p&&p.c(),b(l,"class","flex charts svelte-144vncu"),b(e,"class","flex gap-4 svelte-144vncu")},m(o,g){L(o,e,g),h(e,l),s&&s.m(l,null),h(l,t),a&&a.m(l,null),h(l,i),_&&_.m(l,null),h(l,r),f&&f.m(l,null),h(e,u),p&&p.m(e,null),c=!0},p(o,[g]){o[2].combined?s?(s.p(o,g),g&4&&w(s,1)):(s=be(o),s.c(),w(s,1),s.m(l,t)):s&&(I(),C(s,1,1,()=>{s=null}),J()),o[2].r?a?(a.p(o,g),g&4&&w(a,1)):(a=ve(o),a.c(),w(a,1),a.m(l,i)):a&&(I(),C(a,1,1,()=>{a=null}),J()),o[2].g?_?(_.p(o,g),g&4&&w(_,1)):(_=ke(o),_.c(),w(_,1),_.m(l,r)):_&&(I(),C(_,1,1,()=>{_=null}),J()),o[2].b?f?(f.p(o,g),g&4&&w(f,1)):(f=we(o),f.c(),w(f,1),f.m(l,null)):f&&(I(),C(f,1,1,()=>{f=null}),J()),o[2].info?p?p.p(o,g):(p=ye(o),p.c(),p.m(e,null)):p&&(p.d(1),p=null)},i(o){c||(w(s),w(a),w(_),w(f),c=!0)},o(o){C(s),C(a),C(_),C(f),c=!1},d(o){o&&B(e),s&&s.d(),a&&a.d(),_&&_.d(),f&&f.d(),p&&p.d()}}}function $e(n,e,l){let t,i,r;_e(n,D,o=>l(2,r=o));let{data:u}=e;const c={rgb:([o,g,O])=>[o,g,O],rrr:([o,g,O])=>[o,o,o],ggg:([o,g,O])=>[g,g,g],bbb:([o,g,O])=>[O,O,O]},s=o=>o.Hour,a=o=>o["Day of Week Num"]-1,_=o=>o/100,f=o=>({x:a(o),y:s(o),color:[_(o["% in Sedentary"]),_(o["% in Light"]),_(o["% in MVPA"])],data:o}),p=o=>l(1,i=o);return n.$$set=o=>{"data"in o&&l(5,u=o.data)},n.$$.update=()=>{n.$$.dirty&32&&l(0,t=u.map(f)),n.$$.dirty&1&&l(1,i=t[0].data)},[t,i,r,c,p,u]}class Te extends ee{constructor(e){super();te(this,e,$e,Ve,ne,{data:5})}}function ze(n,e,l){const t=n.slice();return t[14]=e[l],t}function Oe(n,e,l){const t=n.slice();return t[17]=e[l][0],t[18]=e[l][1],t}function Ce(n){let e,l;return{c(){e=d("h3"),l=ie(n[1])},m(t,i){L(t,e,i),h(e,l)},p(t,i){i&2&&re(l,t[1])},d(t){t&&B(e)}}}function Me(n){let e,l,t,i=Object.entries(n[0]),r=[];for(let u=0;u<i.length;u+=1)r[u]=Ae(Oe(n,i,u));return{c(){e=d("select");for(let u=0;u<r.length;u+=1)r[u].c();e.multiple=!0,b(e,"class","svelte-1u4tucs"),n[2]===void 0&&Ee(()=>n[10].call(e))},m(u,c){L(u,e,c);for(let s=0;s<r.length;s+=1)r[s].m(e,null);ge(e,n[2]),l||(t=E(e,"change",n[10]),l=!0)},p(u,c){if(c&1){i=Object.entries(u[0]);let s;for(s=0;s<i.length;s+=1){const a=Oe(u,i,s);r[s]?r[s].p(a,c):(r[s]=Ae(a),r[s].c(),r[s].m(e,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=i.length}c&5&&ge(e,u[2])},d(u){u&&B(e),le(r,u),l=!1,t()}}}function Ae(n){let e,l=n[17]+"",t,i;return{c(){e=d("option"),t=ie(l),e.__value=i=n[17],e.value=e.__value},m(r,u){L(r,e,u),h(e,t)},p(r,u){u&1&&l!==(l=r[17]+"")&&re(t,l),u&1&&i!==(i=r[17])&&(e.__value=i,e.value=e.__value)},d(r){r&&B(e)}}}function Se(n){let e,l;return e=new Te({props:{data:n[0][n[14]]}}),{c(){q(e.$$.fragment)},m(t,i){G(e,t,i),l=!0},p(t,i){const r={};i&5&&(r.data=t[0][t[14]]),e.$set(r)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){H(e,t)}}}function We(n){let e,l,t,i,r,u,c,s,a,_,f,p,o,g,O,R,F,T,N,j,K,S,se,W,V,oe,X,ue,Y,Z,$,U,x,ce,M=n[1]&&Ce(n),A=n[0]&&Me(n),P=n[2],v=[];for(let m=0;m<P.length;m+=1)v[m]=Se(ze(n,P,m));const je=m=>C(v[m],1,1,()=>{v[m]=null});return{c(){e=d("div"),l=d("input"),t=z(),i=d("label"),r=d("input"),u=z(),c=d("span"),c.textContent="Combined",s=z(),a=d("label"),_=d("input"),f=z(),p=d("span"),p.textContent="R",o=z(),g=d("label"),O=d("input"),R=z(),F=d("span"),F.textContent="G",T=z(),N=d("label"),j=d("input"),K=z(),S=d("span"),S.textContent="B",se=z(),W=d("label"),V=d("input"),oe=z(),X=d("span"),X.textContent="Info",ue=z(),M&&M.c(),Y=z(),A&&A.c(),Z=z(),$=d("main");for(let m=0;m<v.length;m+=1)v[m].c();b(l,"type","file"),b(r,"type","checkbox"),b(_,"type","checkbox"),b(O,"type","checkbox"),b(j,"type","checkbox"),b(V,"type","checkbox"),b(e,"class","sidebar svelte-1u4tucs"),b($,"class","svelte-1u4tucs")},m(m,k){L(m,e,k),h(e,l),h(e,t),h(e,i),h(i,r),r.checked=n[3].combined,h(i,u),h(i,c),h(e,s),h(e,a),h(a,_),_.checked=n[3].r,h(a,f),h(a,p),h(e,o),h(e,g),h(g,O),O.checked=n[3].g,h(g,R),h(g,F),h(e,T),h(e,N),h(N,j),j.checked=n[3].b,h(N,K),h(N,S),h(e,se),h(e,W),h(W,V),V.checked=n[3].info,h(W,oe),h(W,X),h(e,ue),M&&M.m(e,null),h(e,Y),A&&A.m(e,null),L(m,Z,k),L(m,$,k);for(let y=0;y<v.length;y+=1)v[y].m($,null);U=!0,x||(ce=[E(l,"change",n[4]),E(r,"change",n[5]),E(_,"change",n[6]),E(O,"change",n[7]),E(j,"change",n[8]),E(V,"change",n[9])],x=!0)},p(m,[k]){if(k&8&&(r.checked=m[3].combined),k&8&&(_.checked=m[3].r),k&8&&(O.checked=m[3].g),k&8&&(j.checked=m[3].b),k&8&&(V.checked=m[3].info),m[1]?M?M.p(m,k):(M=Ce(m),M.c(),M.m(e,Y)):M&&(M.d(1),M=null),m[0]?A?A.p(m,k):(A=Me(m),A.c(),A.m(e,null)):A&&(A.d(1),A=null),k&5){P=m[2];let y;for(y=0;y<P.length;y+=1){const fe=ze(m,P,y);v[y]?(v[y].p(fe,k),w(v[y],1)):(v[y]=Se(fe),v[y].c(),w(v[y],1),v[y].m($,null))}for(I(),y=P.length;y<v.length;y+=1)je(y);J()}},i(m){if(!U){for(let k=0;k<P.length;k+=1)w(v[k]);U=!0}},o(m){v=v.filter(Boolean);for(let k=0;k<v.length;k+=1)C(v[k]);U=!1},d(m){m&&B(e),M&&M.d(),A&&A.d(),m&&B(Z),m&&B($),le(v,m),x=!1,he(ce)}}}function qe(n,e){return Object.fromEntries(Object.keys(e).map(l=>[l,e[l](n[l])]))}function Ge(n,e){const l=Object.fromEntries(n.map(t=>[t[e],[]]));for(let t=0;t<n.length;t++){const i=n[t];l[i[e]].push(i)}return l}function He(n,e){const l=Math.min(n.length,e.length),t=[];for(let i=0;i<l;i++)t.push([n[i],e[i]]);return t}function Ie(n){return new Promise((e,l)=>{const t=new FileReader;t.onload=()=>e(t.result),t.onerror=i=>l(i),t.readAsText(n)})}function Je(n,e,l){let t;_e(n,D,F=>l(3,t=F));let i,r,u="",c=[];const s={number:parseFloat,string:F=>`${F}`},a={Subject:s.string,Filename:s.string,Epoch:s.number,"Weight (lbs)":s.number,Age:s.number,Gender:s.string,Date:s.string,Hour:s.number,"Day of Week":s.string,"Day of Week Num":s.number,Sedentary:s.number,Light:s.number,Moderate:s.number,Vigorous:s.number,"% in Sedentary":s.number,"% in Light":s.number,"% in Moderate":s.number,"% in Vigorous":s.number,"Total MVPA":s.number,"% in MVPA":s.number,"Axis 1 Counts":s.number,"Axis 2 Counts":s.number,"Axis 3 Counts":s.number,"Vector Magnitude Counts":s.number,"Steps Counts":s.number,Time:s.number,"Time Unfiltered":s.number,"Calendar Days":s.number};async function _(F){const T=this.files[0];if(T){l(1,u="loading");const N=await Ie(T);l(1,u="processing");const j=N.split(`
`).filter(S=>!!S).map(S=>S.split(",")),K=j[0].slice(0,j[0].indexOf(""));i=j.slice(1).map(S=>Object.fromEntries(He(K,S))).map(S=>qe(S,a)),l(0,r=Ge(i,"Filename")),l(1,u="finished loading")}}function f(){t.combined=this.checked,D.set(t)}function p(){t.r=this.checked,D.set(t)}function o(){t.g=this.checked,D.set(t)}function g(){t.b=this.checked,D.set(t)}function O(){t.info=this.checked,D.set(t)}function R(){c=Fe(this),l(2,c),l(0,r)}return[r,u,c,t,_,f,p,o,g,O,R]}class Re extends ee{constructor(e){super();te(this,e,Je,We,ne,{})}}new Re({target:document.getElementById("app")});
