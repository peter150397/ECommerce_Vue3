import{_ as r,o as _,c as u,b as s,d as b,r as d,i as n,j as c,f as i,n as l,p as x,e as g}from"./index-11adf39a.js";const k={methods:{signOut(){const e="https://vue-course-api.hexschool.io/logout";this.$http.post(e).then(o=>{o.data.success?(console.log(o.data),this.$router.push("/login")):this.$mittBus.emit("message:push",{message:res.data.message,status:"danger"})})}}},w={class:"navbar navbar-dark bg-dark flex-md-nowrap py-3"},A=s("p",{class:"navbar-brand col-md-3 col-lg-2 m-0 px-3"},"Peter's Ecommerce",-1),S={class:"navbar-nav"},y={class:"nav-item text-nowrap"};function N(e,o,p,m,h,a){return _(),u("div",null,[s("header",w,[A,s("div",S,[s("div",y,[s("a",{class:"nav-link px-3",href:"#",onClick:o[0]||(o[0]=b((...t)=>a.signOut&&a.signOut(...t),["prevent"]))},"Sign out")])])])])}const C=r(k,[["render",N]]);const V={data(){return{}},computed:{isActive(){return this.$route.name}}},v=e=>(x("data-v-6e21ee83"),e=e(),g(),e),B={id:"sidebarMenu",class:"col-md-3 col-lg-2 d-md-block bg-light"},I={class:"pt-3 fw-bold"},R=v(()=>s("h5",{class:"px-3 my-4 text-muted fw-bold"},"管理員",-1)),O={class:"nav flex-column"},z=v(()=>s("h5",{class:"px-3 my-4 text-muted fw-bold"},"模擬功能",-1)),E={class:"nav flex-column"};function L(e,o,p,m,h,a){const t=d("RouterLink");return _(),u("nav",B,[s("div",I,[R,s("ul",O,[s("li",null,[n(t,{class:l(["nav-link",{Active:a.isActive=="products"}]),to:"/admin/products"},{default:c(()=>[i("產品列表")]),_:1},8,["class"])]),s("li",null,[n(t,{class:l(["nav-link",{Active:a.isActive=="orders"}]),to:"/admin/orders"},{default:c(()=>[i("訂單列表")]),_:1},8,["class"])]),s("li",null,[n(t,{class:l(["nav-link",{Active:a.isActive=="coupons"}]),to:"/admin/coupons"},{default:c(()=>[i("優惠券")]),_:1},8,["class"])])]),z,s("ul",E,[s("li",null,[n(t,{class:"nav-link",to:"/"},{default:c(()=>[i("使用者畫面")]),_:1})])])])])}const M=r(V,[["render",L],["__scopeId","data-v-6e21ee83"]]),T={components:{Navbar:C,Sidebar:M},created(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e}},j={class:"container-fluid"},D={class:"row"},P={class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"};function q(e,o,p,m,h,a){const t=d("Navbar"),f=d("Sidebar"),$=d("RouterView");return _(),u("div",null,[n(t),s("div",j,[s("div",D,[n(f),s("main",P,[n($)])])])])}const G=r(T,[["render",q]]);export{G as default};
