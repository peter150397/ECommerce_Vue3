import{a as m,r as b,o as c,c as u,g as _,b as t,F as P,i as y,w as a,v as n,j as x,f as g,t as p}from"./index-527a84c7.js";import{M as h}from"./bootstrap.esm-5f0a523d.js";import{P as w,L as M}from"./Pagination-ab02d354.js";import{_ as k}from"./plugin-vueexport-helper-c27b6911.js";const F={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1,status:{uploadingFile:!1},modal:""}},components:{Pagination:w,Loading:M},methods:{getProduct(s=1){const e=`https://vue-course-api.hexschool.io/api/peterapi/admin/products?page=${s}`,d=this;d.isLoading=!0,m.get(e).then(r=>{d.isLoading=!1,d.products=r.data.products,d.pagination=r.data.pagination})},openModal(s,e){s?(this.tempProduct=Object.assign({},e),this.isNew=!0):(this.tempProduct=Object.assign({},e),this.isNew=!1),new h("#productsModal").show()},addProduct(){let s="https://vue-course-api.hexschool.io/api/peterapi/admin/product",e="post";const d=this;d.isNew||(s=`https://vue-course-api.hexschool.io/api/peterapi/admin/product/${d.tempProduct.id}`,e="put"),m[e](s,{data:d.tempProduct}).then(r=>{h.getOrCreateInstance("#productsModal").hide(),d.getProduct()})},deleteProduct(){const s=this;if(!s.isNew){const e=`https://vue-course-api.hexschool.io/api/peterapi/admin/product/${s.tempProduct.id}`;m.delete(e).then(d=>{s.getProduct()})}h.getOrCreateInstance("#delProductModal").hide(),h.getOrCreateInstance("#productsModal").hide()},uploadFile(){const s=this,e=this.$refs.files.files[0];s.status.uploadingFile=!0;const d=new FormData;d.append("file-to-upload",e);const r="https://vue-course-api.hexschool.io/api/peterapi/admin/upload";m.post(r,d,{headers:{"Content-Type":"multipart/form-data"}}).then(l=>{l.data.success?Object.assign(s.tempProduct,{imageUrl:l.data.imageUrl}):(console.log(l),this.$mittBus.emit("message:push",{message:l.data.message,status:"danger"})),s.status.uploadingFile=!1})},currencyFilter(s){return new Intl.NumberFormat("en-US",{style:"currency",currency:"NTD"}).format(s)}},created(){this.getProduct()}},U={class:"text-right mt-4"},C={class:"table mt-4 table-hover align-middle"},V=t("thead",null,[t("tr",null,[t("th",null,"分類"),t("th",null,"產品"),t("th",null,"原價"),t("th",null,"售價"),t("th",null,"是否啟用"),t("th",null,"編輯")])],-1),N={class:"text-right"},D={class:"text-right"},L={key:0},O={key:1},j=["onClick"],B={class:"modal fade",id:"productsModal",tabindex:"-1","aria-labelledby":"productsModal","aria-hidden":"true"},I={class:"modal-dialog modal-lg"},T={class:"modal-content border-0"},E=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title"},[t("span",null,"新增產品")]),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),G={class:"modal-body"},S={class:"row"},q={class:"col-sm-4 d-flex flex-column gap-3"},H=t("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),J=t("label",{for:"customFile",class:"form-label"},"或 上傳圖片 ",-1),Q=["src"],W={class:"col-sm-8 d-flex flex-column gap-3"},z=t("label",{for:"title",class:"form-label"},"標題",-1),A={class:"row"},K={class:"col-md-6"},R=t("label",{for:"category",class:"form-label"},"分類",-1),X={class:"col-md-6"},Y=t("label",{for:"price",class:"form-label"},"單位",-1),Z={class:"row"},$={class:"col-md-6"},tt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),et={class:"col-md-6"},ot=t("label",{for:"price",class:"form-label"},"售價",-1),lt=t("hr",null,null,-1),st=t("label",{for:"description",class:"form-label"},"產品描述",-1),dt=t("label",{for:"content",class:"form-label"},"說明內容",-1),it={class:"form-check"},at=t("label",{class:"form-check-label form-label",for:"is_enabled"}," 是否啟用 ",-1),nt={class:"modal-footer"},rt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),ct=t("button",{type:"button",class:"btn btn-danger","data-bs-toggle":"modal","data-bs-target":"#delProductModal"}," 刪除 ",-1),ut={class:"modal fade",id:"delProductModal",tabindex:"-1","aria-hidden":"true","aria-labelledby":"delProductModal"},pt={class:"modal-dialog"},mt={class:"modal-content border-0"},ht=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),bt={class:"modal-body"},_t={class:"text-danger"},gt={class:"modal-footer"},ft=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function vt(s,e,d,r,l,i){const f=b("loading"),v=b("Pagination");return c(),u("div",null,[_(f,{active:l.isLoading},null,8,["active"]),t("div",U,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=o=>i.openModal(!0))}," 建立新的產品 ")]),t("table",C,[V,t("tbody",null,[(c(!0),u(P,null,y(l.products,o=>(c(),u("tr",{key:o.id},[t("td",null,p(o.category),1),t("td",null,p(o.title),1),t("td",N,p(i.currencyFilter(o.origin_price)),1),t("td",D,p(i.currencyFilter(o.price)),1),t("td",null,[o.is_enabled==1?(c(),u("span",L,"啟用")):(c(),u("span",O,"未啟用"))]),t("td",null,[t("button",{class:"btn btn-outline-primary btn-sm",onClick:Pt=>i.openModal(!1,o)}," 編輯 ",8,j)])]))),128))])]),_(v,{pagination:l.pagination,onGetData:i.getProduct},null,8,["pagination","onGetData"]),t("div",B,[t("div",I,[t("div",T,[E,t("div",G,[t("div",S,[t("div",q,[t("div",null,[H,a(t("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[1]||(e[1]=o=>l.tempProduct.imageUrl=o)},null,512),[[n,l.tempProduct.imageUrl]])]),t("div",null,[J,t("input",{type:"file",id:"customFile",class:"form-control",ref:"files",onChange:e[2]||(e[2]=(...o)=>i.uploadFile&&i.uploadFile(...o))},null,544)]),t("img",{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",class:"img-fluid",src:l.tempProduct.imageUrl,alt:""},null,8,Q)]),t("div",W,[t("div",null,[z,a(t("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[3]||(e[3]=o=>l.tempProduct.title=o)},null,512),[[n,l.tempProduct.title]])]),t("div",A,[t("div",K,[R,a(t("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[4]||(e[4]=o=>l.tempProduct.category=o)},null,512),[[n,l.tempProduct.category]])]),t("div",X,[Y,a(t("input",{type:"unit",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[5]||(e[5]=o=>l.tempProduct.unit=o)},null,512),[[n,l.tempProduct.unit]])])]),t("div",Z,[t("div",$,[tt,a(t("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[6]||(e[6]=o=>l.tempProduct.origin_price=o)},null,512),[[n,l.tempProduct.origin_price]])]),t("div",et,[ot,a(t("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[7]||(e[7]=o=>l.tempProduct.price=o)},null,512),[[n,l.tempProduct.price]])])]),lt,t("div",null,[st,a(t("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[8]||(e[8]=o=>l.tempProduct.description=o)},null,512),[[n,l.tempProduct.description]])]),t("div",null,[dt,a(t("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[9]||(e[9]=o=>l.tempProduct.content=o)},null,512),[[n,l.tempProduct.content]])]),t("div",null,[t("div",it,[a(t("input",{class:"form-check-input",type:"checkbox",id:"is_enabled","onUpdate:modelValue":e[10]||(e[10]=o=>l.tempProduct.is_enabled=o),"true-value":1,"false-value":0},null,512),[[x,l.tempProduct.is_enabled]]),at])])])])]),t("div",nt,[rt,t("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=(...o)=>i.addProduct&&i.addProduct(...o))}," 確認 "),ct])])])]),t("div",ut,[t("div",pt,[t("div",mt,[ht,t("div",bt,[g(" 是否刪除 "),t("strong",_t,p(l.tempProduct.title),1),g(" 商品(刪除後將無法恢復)。 ")]),t("div",gt,[ft,t("button",{type:"button",class:"btn btn-danger",onClick:e[12]||(e[12]=(...o)=>i.deleteProduct&&i.deleteProduct(...o))}," 確認刪除 ")])])])])])}const kt=k(F,[["render",vt]]);export{kt as default};
