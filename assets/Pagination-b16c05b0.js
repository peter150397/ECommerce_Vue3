import{_,o as s,c as o,b as a,n as r,d as l,F as d,k as g,t as p}from"./index-11adf39a.js";const h={props:["pagination"],methods:{getData(c){this.$emit("getData",c)}}},u={class:"d-flex justify-content-center"},m={class:"pagination m-0"},f=a("a",{class:"page-link",href:"#","aria-label":"Previous"},[a("span",{"aria-hidden":"true"},"«")],-1),k=[f],v=["onClick"],x={class:"page-link",href:"#"},D=a("a",{class:"page-link",href:"#","aria-label":"Next"},[a("span",{"aria-hidden":"true"},"»")],-1),b=[D];function C(c,n,e,y,B,i){return s(),o("div",null,[a("nav",u,[a("ul",m,[a("li",{class:r(["page-item",{disabled:!e.pagination.has_pre}]),onClick:n[0]||(n[0]=l(t=>i.getData(e.pagination.current_page-1),["prevent"]))},k,2),(s(!0),o(d,null,g(e.pagination.total_pages,t=>(s(),o("li",{class:r(["page-item",{active:e.pagination.current_page===t}]),key:t,onClick:l(P=>i.getData(t),["prevent"])},[a("a",x,p(t),1)],10,v))),128)),a("li",{class:r(["page-item",{disabled:!e.pagination.has_next}]),onClick:n[1]||(n[1]=l(t=>i.getData(e.pagination.current_page+1),["prevent"]))},b,2)])])])}const N=_(h,[["render",C]]);export{N as P};
