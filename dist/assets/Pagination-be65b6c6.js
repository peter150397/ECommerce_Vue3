import{o as s,c as o,b as a,aq as r,d as l,F as _,aO as d,b2 as g}from"./index-d4bc659e.js";import{_ as p}from"./plugin-vueexport-helper-c27b6911.js";const h={props:["pagination"],methods:{getData(c){this.$emit("getData",c)}}},m={"aria-label":"Page navigation example"},u={class:"pagination"},v=a("a",{class:"page-link",href:"#","aria-label":"Previous"},[a("span",{"aria-hidden":"true"},"«")],-1),f=[v],k=["onClick"],b={class:"page-link",href:"#"},x=a("a",{class:"page-link",href:"#","aria-label":"Next"},[a("span",{"aria-hidden":"true"},"»")],-1),D=[x];function C(c,n,e,P,B,i){return s(),o("div",null,[a("nav",m,[a("ul",u,[a("li",{class:r(["page-item",{disabled:!e.pagination.has_pre}]),onClick:n[0]||(n[0]=l(t=>i.getData(e.pagination.current_page-1),["prevent"]))},f,2),(s(!0),o(_,null,d(e.pagination.total_pages,t=>(s(),o("li",{class:r(["page-item",{active:e.pagination.current_page===t}]),key:t,onClick:l(y=>i.getData(t),["prevent"])},[a("a",b,g(t),1)],10,k))),128)),a("li",{class:r(["page-item",{disabled:!e.pagination.has_next}]),onClick:n[1]||(n[1]=l(t=>i.getData(e.pagination.current_page+1),["prevent"]))},D,2)])])])}const q=p(h,[["render",C]]);export{q as P};