import"./jquery-0488b3e6.js";import{a as m,r as A,o as u,c as p,g as r,b as t,F as f,i as x,t as i,k as b,w as C,v as w,h as I,l as M,f as h,n as v,p as S,e as E}from"./index-527a84c7.js";import{M as P}from"./bootstrap.esm-5f0a523d.js";import{P as j,L as D}from"./Pagination-ab02d354.js";import{_ as F}from"./plugin-vueexport-helper-c27b6911.js";const U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAQAAABQ8GUWAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cIGAcPGPPzJzcAAAQcSURBVHja7Vu/TxRBGH3fIiISf2AiRi2IQYy2WqMmxMLSykhiQWtsDP8DBgsSSy1ILIyJjeYgVEjhP6FwaAxG9uCMRoTjjnDzLC5yuyC73xy7DnvwKmbn29n33sw3MzdhgJRB09dH5nLk/DzV+PqVzOVo+vrS5peueI6M6EXvhMePXetoTLx5+HD34v/iwYO0eEoq4tnRAXz+DHR11Z/6PvjhA2BM9NueB7lyBTh7tv5scRHo6RFZXU3LiIQNGBgIdaCZmqI5fFj9vmlrI6enw6NgYMC1LgsD3r4Nk+/vt27D3LoVbuPNG9e6lMSPHSNLpXrvF4s0hw7Zm9jSQi4u1g1YW6M5fjxpvpHEaLq7If39wOnT+iZ7e4H29s2iFArA0BDZCL2lpfo8cuQIZHSUzOf17xeL4NSUePPzVp8l29tpnj8nq9XkZnJX2Nggnz0jA50S3eutrdsnoCaAefeOprVV0ftDQ665podHj7bqle0GzM7W8rgZMTcnEtYWMoDs7AR+/HBNM1Xw5Enxfv36W/TCtSdOuOaXOqSzM1j0Gm2nWXBggGsC/x0Mb8m2GFAsAuWya47p4edPwPeDT0JbYZHVVfLOHeD+fTD4U7YJICsr4OioeOvrrqkc4AB7CLFHYjTXrwP605y9hfV18d6/350BzOeBixddS2kM+bzIpUtREYp9wNKSaxmNI567woBi0bWMxhHPPd4A2hjg+8DTp8DERHxsuQyOjYFjY7rN1+RkrW2LEcnv3xszLtiGGR7WHTZUq2RPz+Z7fPEiOn5wsB47OBgd+/JlPfbyZdIYFSUzPBynL34EiHYELCyIfPpUL0fPvuH6uNjp6U068vEj8O2bipKCe4IpsLERLler0fHBepvYf31rJyQyCWZ4FWASBqhTYA/i/6bAXkQSBmR5H6BYBmMNEK9SAZaXXWuxx/JyjfsuDQCQ0TTQTd7KM8EsGqDjrDMgkytBkgZkMgUSHQFZ3AwlacC+nwOymAKKbbDegH0/CWYxBZSd1sQpsN9XAdEdh6kMECmXgZUV15r0+P1bZG0tMQNqyFAaWKRscxpgwdXCgAzNAxbL9sEIaE4D9KNVb0Cm9gJpjIAsbYfdrAJb7wS0tETHB+ttYv/1rS1QboLsDIh19dw5muD/Edy4ER0frL95Uxtb+8b587vjGvBKrd90d0O+fImOKhSA16/B3l7I7dvRsZUK8OpV7e9794C2tuj4yUlgbg64exc4cyY69sIFieVqawCPHgUycmsLHR0ipZImUp0CIqUSmAUDSiWteCsDarC5r+MInJmxCbczQMbHXeuL55jLpdY2eeoU6fuuL77sjIWF2qWPFEFeu0YWCq6lbofvk1evpip+0wTT1UXz5Ak5O0tWKu5EVyrkzAw5MkJjc7exjj/r7HKrYnK0kwAAAABJRU5ErkJggg==";const H={data(){return{products:[],singleProduct:{},carts:[],couponCode:"",pagination:{},isLoading:!1}},components:{Pagination:j,Loading:D},methods:{getProduct(n=1){const o=`https://vue-course-api.hexschool.io/api/peterapi/products?page=${n}`,a=this;a.isLoading=!0,a.products=[],m.get(o).then(l=>{l.data.products.forEach(e=>{e.is_enabled&&a.products.push(e)}),a.pagination=l.data.pagination,a.isLoading=!1})},getSingleProduct(n){const o=`https://vue-course-api.hexschool.io/api/peterapi/product/${n}`,a=this;a.isLoading=!0,m.get(o).then(l=>{a.singleProduct=l.data.product,a.singleProduct.num=1,a.isLoading=!1,new P("#productModal").show()})},getCart(){const n="https://vue-course-api.hexschool.io/api/peterapi/cart",o=this;o.isLoading=!0,m.get(n).then(a=>{o.carts=a.data.data,o.isLoading=!1})},addToCart(n,o=1){const a="https://vue-course-api.hexschool.io/api/peterapi/cart",l=this;l.isLoading=!0;let e={product_id:n,qty:o};m.post(a,{data:e}).then(c=>{console.log(c.data),l.isLoading=!1,P.getOrCreateInstance("#productModal").hide(),this.getCart()})},deleteCart(n){const o=`https://vue-course-api.hexschool.io/api/peterapi/cart/${n}`,a=this;a.isLoading=!0,m.delete(o).then(l=>{console.log(l.data),a.getCart(),a.isLoading=!1})},addCoupon(){const n="https://vue-course-api.hexschool.io/api/peterapi/coupon",o=this;let a={code:o.couponCode};o.isLoading=!0,m.post(n,{data:a}).then(l=>{console.log(l.data),l.data.success?(this.$mittBus.emit("message:push",{message:l.data.message,status:"success"}),o.getCart()):this.$mittBus.emit("message:push",{message:l.data.message,status:"danger"}),o.isLoading=!1})},createOrder(n){let o={user:{name:n.name,email:n.email,tel:n.tel,address:n.address},message:n.message};const a="https://vue-course-api.hexschool.io/api/peterapi/order",l=this;l.isLoading=!0,l.carts.carts[0]?m.post(a,{data:o}).then(e=>{e.data.success?(this.$mittBus.emit("message:push",{message:e.data.message,status:"success"}),l.$router.push(`/admin/customerCheckout/${e.data.orderId}`)):this.$mittBus.emit("message:push",{message:e.data.message,status:"danger"}),l.isLoading=!1,l.getCart()}):(this.$mittBus.emit("message:push",{message:"購物車內無商品，請先去購買",status:"danger"}),l.isLoading=!1)},currencyFilter(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"NTD"}).format(n)}},created(){this.getProduct(),this.getCart()}},d=n=>(S("data-v-5bed0458"),n=n(),E(),n),V={class:"row mt-4"},q={class:"card"},Y=["src"],N={class:"card-body"},O={class:"badge text-bg-secondary mb-2"},T={class:"card-title"},z={class:"card-text"},R={class:"d-flex justify-content-between align-items-center"},G={class:"h6"},W={class:"h5"},Z={class:"card-footer d-flex gap-3"},Q=["onClick"],X=["onClick"],J=d(()=>t("hr",null,null,-1)),K={style:{width:"60%"},class:"mx-auto"},$={class:"table text-center align-middle"},tt=d(()=>t("thead",{class:"table-dark"},[t("tr",null,[t("th",null,"刪除"),t("th",null,"品名"),t("th",null,"數量"),t("th",null,"單價")])],-1)),et=["onClick"],st=d(()=>t("img",{src:U,alt:"",class:"trashCanIcon"},null,-1)),ot=[st],nt={key:0,class:"text-success"},at=d(()=>t("td",null,null,-1)),lt=d(()=>t("td",null,null,-1)),it=d(()=>t("td",{class:"py-4"},"總計",-1)),ct={key:0},dt=d(()=>t("td",null,null,-1)),rt=d(()=>t("td",null,null,-1)),ut=d(()=>t("td",{class:"text-primary py-4"},"折扣價",-1)),pt={class:"text-primary"},gt={class:"input-group mb-3 input-group-sm"},mt={class:"input-group-append"},ht=d(()=>t("hr",null,null,-1)),_t={class:"my-5 row justify-content-center"},At={class:"col-md-6"},bt=d(()=>t("label",{for:"useremail"},[t("span",{class:"text-danger"},"*"),h(" Email")],-1)),vt=d(()=>t("label",{for:"username"},[t("span",{class:"text-danger"},"*"),h(" 收件人姓名")],-1)),yt=d(()=>t("label",{for:"usertel"},[t("span",{class:"text-danger"},"*"),h(" 收件人電話")],-1)),ft=d(()=>t("label",{for:"useraddress"},[t("span",{class:"text-danger"},"*"),h(" 收件人地址")],-1)),xt=d(()=>t("label",{for:"comment"},"留言",-1)),Ct={class:"text-right"},Pt=d(()=>t("button",{class:"btn btn-danger me-3",type:"reset"},"重設",-1)),Lt={class:"modal fade",id:"productModal",tabindex:"-1","aria-labelledby":"productModal","aria-hidden":"true"},kt={class:"modal-dialog"},Bt={class:"modal-content"},wt={class:"modal-header bg-dark text-white"},It={class:"modal-title",id:"exampleModalLabel"},Mt=d(()=>t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)),St={class:"modal-body"},Et=["src"],jt={class:"blockquote mt-3"},Dt={class:"mt-0"},Ft={class:"blockquote-footer text-right"},Ut={class:"d-flex justify-content-between aline-items-baseline"},Ht={key:0,class:"h4"},Vt={key:1,class:"h6"},qt={key:2,class:"h4"},Yt=["value"],Nt={class:"modal-footer"},Ot={class:"text-muted text-nowrap mr-3"};function Tt(n,o,a,l,e,c){const L=A("loading"),k=A("Pagination"),_=A("VField"),y=A("VErrorMessage"),B=A("VForm");return u(),p("div",null,[r(L,{active:e.isLoading},null,8,["active"]),t("div",V,[(u(!0),p(f,null,x(e.products,s=>(u(),p("div",{class:"col-md-4 mb-4",key:s.id},[t("div",q,[t("img",{src:s.imageUrl,class:"card-img-top cardImage",alt:""},null,8,Y),t("div",N,[t("span",O,i(s.category),1),t("h5",T,i(s.title),1),t("p",z,i(s.description),1),t("div",R,[t("del",G,"原價 "+i(c.currencyFilter(s.origin_price)),1),t("div",W,"現在只要 "+i(c.currencyFilter(s.price)),1)])]),t("div",Z,[t("button",{type:"button",class:"btn btn-outline-secondary btn-sm",onClick:g=>c.getSingleProduct(s.id)}," 查看更多 ",8,Q),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:g=>c.addToCart(s.id)}," 加到購物車 ",8,X)])])]))),128))]),r(k,{pagination:e.pagination,onGetData:c.getProduct},null,8,["pagination","onGetData"]),J,t("div",K,[t("table",$,[tt,t("tbody",null,[(u(!0),p(f,null,x(e.carts.carts,s=>(u(),p("tr",{key:s.id},[t("td",null,[t("button",{class:"btn btn-danger",onClick:g=>c.deleteCart(s.id)},ot,8,et)]),t("td",null,[h(i(s.product.title)+" ",1),s.coupon?(u(),p("div",nt,"已套用優惠券")):b("",!0)]),t("td",null,i(s.qty)+" / "+i(s.product.unit),1),t("td",null,i(c.currencyFilter(s.product.price*s.qty)),1)]))),128)),t("tr",null,[at,lt,it,t("td",null,i(c.currencyFilter(e.carts.total)),1)]),e.carts.final_total!==e.carts.total?(u(),p("tr",ct,[dt,rt,ut,t("td",pt,i(c.currencyFilter(e.carts.final_total)),1)])):b("",!0)])]),t("div",gt,[C(t("input",{type:"text",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=s=>e.couponCode=s),placeholder:"請輸入優惠碼"},null,512),[[w,e.couponCode]]),t("div",mt,[t("button",{class:"btn btn-outline-primary",onClick:o[1]||(o[1]=(...s)=>c.addCoupon&&c.addCoupon(...s)),type:"button"}," 套用優惠碼 ")])])]),ht,t("div",_t,[t("div",At,[r(B,{onSubmit:c.createOrder,class:"d-flex flex-column gap-3"},{default:I(({meta:s,errors:g})=>[t("div",null,[bt,r(_,{type:"email",rules:"required|email",class:v(["form-control",{"is-invalid":g.email}]),name:"email",id:"useremail",placeholder:"請輸入 Email"},null,8,["class"]),r(y,{name:"email",class:"text-danger"})]),t("div",null,[vt,r(_,{type:"text",rules:"required",class:v(["form-control",{"is-invalid":g.name}]),name:"name",id:"username",placeholder:"輸入姓名"},null,8,["class"]),r(y,{name:"name",class:"text-danger"})]),t("div",null,[yt,r(_,{type:"tel",rules:"required|numeric",class:v(["form-control",{"is-invalid":g.tel}]),name:"tel",id:"usertel",placeholder:"請輸入電話"},null,8,["class"]),r(y,{name:"tel",class:"text-danger"})]),t("div",null,[ft,r(_,{type:"text",rules:"required",class:v(["form-control",{"is-invalid":g.address}]),name:"address",id:"useraddress",placeholder:"請輸入地址"},null,8,["class"]),r(y,{name:"address",class:"text-danger"})]),t("div",null,[xt,r(_,{as:"textarea",name:"message",id:"comment",class:"form-control",cols:"30",rows:"10"})]),t("div",Ct,[Pt,t("button",{class:v(["btn btn-primary",{disabled:!s.valid}]),id:"createOrderButton",type:"submit"},"送出訂單",2)])]),_:1},8,["onSubmit"])])]),t("div",Lt,[t("div",kt,[t("div",Bt,[t("div",wt,[t("h5",It,[t("span",null,i(e.singleProduct.title),1)]),Mt]),t("div",St,[t("img",{src:e.singleProduct.imageUrl,alt:"",class:"img-fluid modalImage"},null,8,Et),t("blockquote",jt,[t("p",Dt,i(e.singleProduct.content),1),t("footer",Ft,i(e.singleProduct.description),1)]),t("div",Ut,[e.singleProduct.price?b("",!0):(u(),p("div",Ht,i(e.singleProduct.origin_price),1)),e.singleProduct.price?(u(),p("del",Vt,i(c.currencyFilter(e.singleProduct.origin_price)),1)):b("",!0),e.singleProduct.price?(u(),p("div",qt,i(c.currencyFilter(e.singleProduct.price)),1)):b("",!0)]),C(t("select",{class:"form-control mt-3","onUpdate:modelValue":o[2]||(o[2]=s=>e.singleProduct.num=s)},[(u(),p(f,null,x(10,s=>t("option",{value:s,key:s},i(s)+" "+i(e.singleProduct.unit),9,Yt)),64))],512),[[M,e.singleProduct.num]])]),t("div",Nt,[t("div",Ot,[h(" 小記 "),t("strong",null,i(e.singleProduct.num*e.singleProduct.price),1),h(" 元 ")]),t("button",{class:"btn btn-primary",onClick:o[3]||(o[3]=s=>c.addToCart(e.singleProduct.id,e.singleProduct.num))}," 加到購物車 ")])])])])])}const Qt=F(H,[["render",Tt],["__scopeId","data-v-5bed0458"]]);export{Qt as default};
