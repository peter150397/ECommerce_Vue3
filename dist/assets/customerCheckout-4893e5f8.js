import{_ as c,a as u,o as n,c as d,b as t,d as h,F as _,k as p,t as e,l as m}from"./index-11adf39a.js";const y={data(){return{orderId:"",order:{user:{}}}},methods:{getOrder(){const o=this,l=`https://vue-course-api.hexschool.io/api/peterapi/order/${o.orderId}`;this.$switchLoadingStatus.switchLoadingStatus(!0),u.get(l).then(i=>{this.$switchLoadingStatus.switchLoadingStatus(!1),o.order=i.data.order})},payOrder(){const o=this,l=`https://vue-course-api.hexschool.io/api/peterapi/pay/${o.orderId}`;u.post(l).then(i=>{console.log(i.data),o.getOrder()})}},created(){this.orderId=this.$route.params.orderId,this.getOrder()}},b={class:"my-5 row justify-content-center"},g={class:"table align-middle mb-4"},f=t("thead",null,[t("tr",null,[t("th",null,"品名"),t("th",null,"數量"),t("th",null,"單價")])],-1),k=t("td",{colspan:"2"},"總計",-1),v={class:"table align-middle mb-4"},x=t("th",{width:"100"},"Email",-1),w=t("th",null,"姓名",-1),O=t("th",null,"收件人電話",-1),S=t("th",null,"收件人地址",-1),I=t("th",null,"付款狀態",-1),L={key:0},B={key:1,class:"text-success"},$={key:0,class:"text-right"},C=t("button",{type:"submit",class:"btn btn-primary"},"確認付款去",-1),E=[C];function F(o,l,i,N,s,a){return n(),d("div",null,[t("div",b,[t("form",{class:"col-md-6",onSubmit:l[0]||(l[0]=h((...r)=>a.payOrder&&a.payOrder(...r),["prevent"]))},[t("table",g,[f,t("tbody",null,[(n(!0),d(_,null,p(s.order.products,r=>(n(),d("tr",{key:r.id},[t("td",null,e(r.product.title),1),t("td",null,e(r.qty)+"/"+e(r.product.unit),1),t("td",null,e(r.final_total),1)]))),128))]),t("tfoot",null,[t("tr",null,[k,t("td",null,e(s.order.total),1)])])]),t("table",v,[t("tbody",null,[t("tr",null,[x,t("td",null,e(s.order.user.email),1)]),t("tr",null,[w,t("td",null,e(s.order.user.name),1)]),t("tr",null,[O,t("td",null,e(s.order.user.tel),1)]),t("tr",null,[S,t("td",null,e(s.order.user.address),1)]),t("tr",null,[I,t("td",null,[s.order.is_paid?(n(),d("span",B,"付款完成")):(n(),d("span",L,"尚未付款"))])])])]),s.order.is_paid===!1?(n(),d("div",$,E)):m("",!0)],32)])])}const j=c(y,[["render",F]]);export{j as default};
