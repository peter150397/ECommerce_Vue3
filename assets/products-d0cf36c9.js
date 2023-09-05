import{_,a as m,r as f,o as r,c as u,b as t,F as v,k as P,i as y,w as n,v as c,q as x,f as b,t as p}from"./index-d1494c28.js";import{M as h}from"./bootstrap.esm-5f0a523d.js";import{P as w}from"./Pagination-cd232060.js";const M={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1}},components:{Pagination:w},methods:{getProduct(l=1){const e=`https://vue-course-api.hexschool.io/api/peterapi/admin/products?page=${l}`,a=this;this.$switchLoadingStatus.switchLoadingStatus(!0),m.get(e).then(i=>{this.$switchLoadingStatus.switchLoadingStatus(!1),a.products=i.data.products,a.pagination=i.data.pagination})},openModal(l,e){l?(this.tempProduct=Object.assign({},e),this.isNew=!0):(this.tempProduct=Object.assign({},e),this.isNew=!1),new h("#productsModal").show()},addProduct(){let l="https://vue-course-api.hexschool.io/api/peterapi/admin/product",e="post";const a=this;a.isNew||(l=`https://vue-course-api.hexschool.io/api/peterapi/admin/product/${a.tempProduct.id}`,e="put"),m[e](l,{data:a.tempProduct}).then(i=>{i.data.success?(this.$mittBus.emit("message:push",{message:i.data.message,status:"success"}),h.getOrCreateInstance("#productsModal").hide()):this.$mittBus.emit("message:push",{message:i.data.message,status:"danger"}),a.getProduct()})},deleteProduct(){const l=this;if(!l.isNew){const e=`https://vue-course-api.hexschool.io/api/peterapi/admin/product/${l.tempProduct.id}`;m.delete(e).then(a=>{a.data.success?(this.$mittBus.emit("message:push",{message:a.data.message,status:"success"}),h.getOrCreateInstance("#delProductModal").hide(),h.getOrCreateInstance("#productsModal").hide()):this.$mittBus.emit("message:push",{message:a.data.message,status:"danger"}),l.getProduct()})}},uploadFile(){const l=this,e=this.$refs.files.files[0],a=new FormData;a.append("file-to-upload",e);const i="https://vue-course-api.hexschool.io/api/peterapi/admin/upload";m.post(i,a,{headers:{"Content-Type":"multipart/form-data"}}).then(o=>{o.data.success?Object.assign(l.tempProduct,{imageUrl:o.data.imageUrl}):this.$mittBus.emit("message:push",{message:o.data.message,status:"danger"})})},currencyFilter(l){return new Intl.NumberFormat("en-US",{style:"currency",currency:"NTD"}).format(l)}},created(){this.getProduct()}},k={class:"text-right mt-4"},U={class:"table mt-4 table-hover align-middle"},C=t("thead",null,[t("tr",null,[t("th",null,"分類"),t("th",null,"產品"),t("th",null,"原價"),t("th",null,"售價"),t("th",null,"是否啟用"),t("th",null,"編輯")])],-1),F={class:"text-right"},V={class:"text-right"},N={key:0},B={key:1},D=["onClick"],O={class:"modal fade",id:"productsModal",tabindex:"-1","aria-labelledby":"productsModal","aria-hidden":"true"},S={class:"modal-dialog modal-lg"},L={class:"modal-content border-0"},j=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title"},[t("span",null,"新增產品")]),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),I={class:"modal-body"},T={class:"row"},q={class:"col-sm-4 d-flex flex-column gap-3"},E=t("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),G=t("label",{for:"customFile",class:"form-label"},"或 上傳圖片 ",-1),H=["src"],J={class:"col-sm-8 d-flex flex-column gap-3"},Q=t("label",{for:"title",class:"form-label"},"標題",-1),W={class:"row"},z={class:"col-md-6"},A=t("label",{for:"category",class:"form-label"},"分類",-1),K={class:"col-md-6"},R=t("label",{for:"price",class:"form-label"},"單位",-1),X={class:"row"},Y={class:"col-md-6"},Z=t("label",{for:"origin_price",class:"form-label"},"原價",-1),$={class:"col-md-6"},tt=t("label",{for:"price",class:"form-label"},"售價",-1),et=t("hr",null,null,-1),st=t("label",{for:"description",class:"form-label"},"產品描述",-1),ot=t("label",{for:"content",class:"form-label"},"說明內容",-1),lt={class:"form-check"},at=t("label",{class:"form-check-label form-label",for:"is_enabled"}," 是否啟用 ",-1),dt={class:"modal-footer"},it=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),nt=t("button",{type:"button",class:"btn btn-danger","data-bs-toggle":"modal","data-bs-target":"#delProductModal"}," 刪除 ",-1),ct={class:"modal fade",id:"delProductModal",tabindex:"-1","aria-hidden":"true","aria-labelledby":"delProductModal"},rt={class:"modal-dialog"},ut={class:"modal-content border-0"},pt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),mt={class:"modal-body"},ht={class:"text-danger"},bt={class:"modal-footer"},gt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function _t(l,e,a,i,o,d){const g=f("Pagination");return r(),u("div",null,[t("div",k,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=s=>d.openModal(!0))}," 建立新的產品 ")]),t("table",U,[C,t("tbody",null,[(r(!0),u(v,null,P(o.products,s=>(r(),u("tr",{key:s.id},[t("td",null,p(s.category),1),t("td",null,p(s.title),1),t("td",F,p(d.currencyFilter(s.origin_price)),1),t("td",V,p(d.currencyFilter(s.price)),1),t("td",null,[s.is_enabled==1?(r(),u("span",N,"啟用")):(r(),u("span",B,"未啟用"))]),t("td",null,[t("button",{class:"btn btn-outline-primary btn-sm",onClick:ft=>d.openModal(!1,s)}," 編輯 ",8,D)])]))),128))])]),y(g,{pagination:o.pagination,onGetData:d.getProduct},null,8,["pagination","onGetData"]),t("div",O,[t("div",S,[t("div",L,[j,t("div",I,[t("div",T,[t("div",q,[t("div",null,[E,n(t("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[1]||(e[1]=s=>o.tempProduct.imageUrl=s)},null,512),[[c,o.tempProduct.imageUrl]])]),t("div",null,[G,t("input",{type:"file",id:"customFile",class:"form-control",ref:"files",onChange:e[2]||(e[2]=(...s)=>d.uploadFile&&d.uploadFile(...s))},null,544)]),t("img",{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",class:"img-fluid",src:o.tempProduct.imageUrl,alt:""},null,8,H)]),t("div",J,[t("div",null,[Q,n(t("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[3]||(e[3]=s=>o.tempProduct.title=s)},null,512),[[c,o.tempProduct.title]])]),t("div",W,[t("div",z,[A,n(t("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[4]||(e[4]=s=>o.tempProduct.category=s)},null,512),[[c,o.tempProduct.category]])]),t("div",K,[R,n(t("input",{type:"unit",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[5]||(e[5]=s=>o.tempProduct.unit=s)},null,512),[[c,o.tempProduct.unit]])])]),t("div",X,[t("div",Y,[Z,n(t("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[6]||(e[6]=s=>o.tempProduct.origin_price=s)},null,512),[[c,o.tempProduct.origin_price]])]),t("div",$,[tt,n(t("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[7]||(e[7]=s=>o.tempProduct.price=s)},null,512),[[c,o.tempProduct.price]])])]),et,t("div",null,[st,n(t("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[8]||(e[8]=s=>o.tempProduct.description=s)},null,512),[[c,o.tempProduct.description]])]),t("div",null,[ot,n(t("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[9]||(e[9]=s=>o.tempProduct.content=s)},null,512),[[c,o.tempProduct.content]])]),t("div",null,[t("div",lt,[n(t("input",{class:"form-check-input",type:"checkbox",id:"is_enabled","onUpdate:modelValue":e[10]||(e[10]=s=>o.tempProduct.is_enabled=s),"true-value":1,"false-value":0},null,512),[[x,o.tempProduct.is_enabled]]),at])])])])]),t("div",dt,[it,t("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=(...s)=>d.addProduct&&d.addProduct(...s))}," 確認 "),nt])])])]),t("div",ct,[t("div",rt,[t("div",ut,[pt,t("div",mt,[b(" 是否刪除 "),t("strong",ht,p(o.tempProduct.title),1),b(" 商品(刪除後將無法恢復)。 ")]),t("div",bt,[gt,t("button",{type:"button",class:"btn btn-danger",onClick:e[12]||(e[12]=(...s)=>d.deleteProduct&&d.deleteProduct(...s))}," 確認刪除 ")])])])])])}const xt=_(M,[["render",_t]]);export{xt as default};