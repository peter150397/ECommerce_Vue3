import{a,o as d,c as n,b as t,d as u,F as h,i as _,t as e,k as p}from"./index-e1ea0a7e.js";import{_ as m}from"./plugin-vueexport-helper-c27b6911.js";const g={data(){return{orderId:"",order:{user:{}}}},methods:{getOrder(){const r=this,l=`https://vue-course-api.hexschool.io/api/peterapi/order/${r.orderId}`;a.get(l).then(i=>{console.log(i),r.order=i.data.order})},payOrder(){const r=this,l=`https://vue-course-api.hexschool.io/api/peterapi/pay/${r.orderId}`;a.post(l).then(i=>{console.log(i.data),r.getOrder()})}},created(){this.orderId=this.$route.params.orderId,this.getOrder()}},y={class:"my-5 row justify-content-center"},b={class:"table align-middle mb-4"},f=t("thead",null,[t("th",null,"品名"),t("th",null,"數量"),t("th",null,"單價")],-1),x={class:"align-middle text-right"},k=t("td",{colspan:"2",class:"text-right"},"總計",-1),v={class:"text-right"},O={class:"table align-middle mb-4"},I=t("th",{width:"100"},"Email",-1),w=t("th",null,"姓名",-1),B=t("th",null,"收件人電話",-1),C=t("th",null,"收件人地址",-1),E=t("th",null,"付款狀態",-1),F={key:0},N={key:1,class:"text-success"},S={key:0,class:"text-right"},V=t("button",{class:"btn btn-primary"},"確認付款去",-1),j=[V];function q(r,l,i,D,s,c){return d(),n("div",null,[t("div",y,[t("form",{class:"col-md-6",onSubmit:l[0]||(l[0]=u((...o)=>c.payOrder&&c.payOrder(...o),["prevent"]))},[t("table",b,[f,t("tbody",null,[(d(!0),n(h,null,_(s.order.products,o=>(d(),n("tr",{key:o.id},[t("td",null,e(o.product.title),1),t("td",null,e(o.qty)+"/"+e(o.product.unit),1),t("td",x,e(o.final_total),1)]))),128))]),t("tfoot",null,[t("tr",null,[k,t("td",v,e(s.order.total),1)])])]),t("table",O,[t("tbody",null,[t("tr",null,[I,t("td",null,e(s.order.user.email),1)]),t("tr",null,[w,t("td",null,e(s.order.user.name),1)]),t("tr",null,[B,t("td",null,e(s.order.user.tel),1)]),t("tr",null,[C,t("td",null,e(s.order.user.address),1)]),t("tr",null,[E,t("td",null,[s.order.is_paid?(d(),n("span",N,"付款完成")):(d(),n("span",F,"尚未付款"))])])])]),s.order.is_paid===!1?(d(),n("div",S,j)):p("",!0)],32)])])}const $=m(g,[["render",q]]);export{$ as default};
