import{B as le,g as ce,C as de,E as ue,F as R,K as pe,R as me,S as fe,h as _e,T as he,i as ge,j as ve,k as be,V as ye,l as we,m as Se,n as $e,q as Ce,r as ke,s as xe,t as Me,u as Ne,x as Pe,y as Ee,z as Te,c as b,b as o,A as Be,D as Re,G as Ae,H as Le,I as je,J as Oe,f as w,L as _,M as Ve,N as De,O as Fe,P as ze,Q as He,U as Ie,W as Ue,X as Xe,Y as We,Z as qe,_ as Ke,$ as Ge,a0 as Je,a1 as Qe,a2 as Ye,a3 as Ze,a4 as et,a5 as tt,a6 as at,a7 as st,a8 as nt,a9 as ot,aa as it,ab as rt,ac as lt,ad as ct,ae as dt,af as ut,ag as pt,ah as mt,ai as ft,aj as _t,ak as ht,al as gt,am as vt,an as bt,ao as yt,ap as wt,aq as S,ar as St,as as $t,at as Ct,au as kt,av as xt,aw as Mt,ax as Nt,ay as Pt,az as Et,aA as Tt,aB as Bt,aC as Rt,aD as At,aE as Lt,aF as jt,o as y,e as A,aG as Ot,aH as Vt,p as L,aI as Dt,aJ as Ft,aK as zt,aL as Ht,aM as It,aN as Ut,aO as j,aP as Xt,aQ as v,aR as Wt,aS as qt,aT as Kt,aU as Gt,aV as Jt,aW as Qt,aX as Yt,aY as Zt,aZ as ea,a_ as ta,a$ as aa,b0 as sa,b1 as na,b2 as O,b3 as oa,b4 as ia,b5 as ra,b6 as la,b7 as ca,b8 as da,b9 as ua,ba as pa,bb as ma,bc as fa,bd as _a,be as ha,bf as ga,bg as va,bh as ba,bi as ya,bj as wa,bk as Sa,bl as $a,bm as Ca,v as ka,bn as xa,bo as Ma,bp as Na,bq as Pa,br as Ea,bs as Ta,bt as Ba,bu as Ra,bv as C,bw as Aa,w as La,bx as ja,by as Oa,d as V,bz as Va}from"./index-d4bc659e.js";import{_ as M}from"./plugin-vueexport-helper-c27b6911.js";const Da=()=>{},Fa=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:le,BaseTransitionPropsValidators:ce,Comment:de,EffectScope:ue,Fragment:R,KeepAlive:pe,ReactiveEffect:me,Static:fe,Suspense:_e,Teleport:he,Text:ge,Transition:ve,TransitionGroup:be,VueElement:ye,assertNumber:we,callWithAsyncErrorHandling:Se,callWithErrorHandling:$e,camelize:Ce,capitalize:ke,cloneVNode:xe,compatUtils:Me,compile:Da,computed:Ne,createApp:Pe,createBlock:Ee,createCommentVNode:Te,createElementBlock:b,createElementVNode:o,createHydrationRenderer:Be,createPropsRestProxy:Re,createRenderer:Ae,createSSRApp:Le,createSlots:je,createStaticVNode:Oe,createTextVNode:w,createVNode:_,customRef:Ve,defineAsyncComponent:De,defineComponent:Fe,defineCustomElement:ze,defineEmits:He,defineExpose:Ie,defineModel:Ue,defineOptions:Xe,defineProps:We,defineSSRCustomElement:qe,defineSlots:Ke,get devtools(){return Ge},effect:Je,effectScope:Qe,getCurrentInstance:Ye,getCurrentScope:Ze,getTransitionRawChildren:et,guardReactiveProps:tt,h:at,handleError:st,hasInjectionContext:nt,hydrate:ot,initCustomFormatter:it,initDirectivesForSSR:rt,inject:lt,isMemoSame:ct,isProxy:dt,isReactive:ut,isReadonly:pt,isRef:mt,isRuntimeOnly:ft,isShallow:_t,isVNode:ht,markRaw:gt,mergeDefaults:vt,mergeModels:bt,mergeProps:yt,nextTick:wt,normalizeClass:S,normalizeProps:St,normalizeStyle:$t,onActivated:Ct,onBeforeMount:kt,onBeforeUnmount:xt,onBeforeUpdate:Mt,onDeactivated:Nt,onErrorCaptured:Pt,onMounted:Et,onRenderTracked:Tt,onRenderTriggered:Bt,onScopeDispose:Rt,onServerPrefetch:At,onUnmounted:Lt,onUpdated:jt,openBlock:y,popScopeId:A,provide:Ot,proxyRefs:Vt,pushScopeId:L,queuePostFlushCb:Dt,reactive:Ft,readonly:zt,ref:Ht,registerRuntimeCompiler:It,render:Ut,renderList:j,renderSlot:Xt,resolveComponent:v,resolveDirective:Wt,resolveDynamicComponent:qt,resolveFilter:Kt,resolveTransitionHooks:Gt,setBlockTracking:Jt,setDevtoolsHook:Qt,setTransitionHooks:Yt,shallowReactive:Zt,shallowReadonly:ea,shallowRef:ta,ssrContextKey:aa,ssrUtils:sa,stop:na,toDisplayString:O,toHandlerKey:oa,toHandlers:ia,toRaw:ra,toRef:la,toRefs:ca,toValue:da,transformVNodeArgs:ua,triggerRef:pa,unref:ma,useAttrs:fa,useCssModule:_a,useCssVars:ha,useModel:ga,useSSRContext:va,useSlots:ba,useTransitionState:ya,vModelCheckbox:wa,vModelDynamic:Sa,vModelRadio:$a,vModelSelect:Ca,vModelText:ka,vShow:xa,version:Ma,warn:Na,watch:Pa,watchEffect:Ea,watchPostEffect:Ta,watchSyncEffect:Ba,withAsyncContext:Ra,withCtx:C,withDefaults:Aa,withDirectives:La,withKeys:ja,withMemo:Oa,withModifiers:V,withScopeId:Va},Symbol.toStringTag,{value:"Module"})),za={methods:{signOut(){const a="https://vue-course-api.hexschool.io/logout";this.$http.post(a).then(s=>{s.data.success?(console.log(s.data),this.$router.push("/login")):this.$mittBus.emit("message:push",{message:res.data.message,status:"danger"})})}}},Ha={class:"navbar navbar-dark bg-dark flex-md-nowrap py-3"},Ia=o("p",{class:"navbar-brand col-md-3 col-lg-2 m-0 px-3"},"Peter's Ecommerce",-1),Ua={class:"navbar-nav"},Xa={class:"nav-item text-nowrap"};function Wa(a,s,r,u,p,n){return y(),b("div",null,[o("header",Ha,[Ia,o("div",Ua,[o("div",Xa,[o("a",{class:"nav-link px-3",href:"#",onClick:s[0]||(s[0]=V((...l)=>n.signOut&&n.signOut(...l),["prevent"]))},"Sign out")])])])])}const qa=M(za,[["render",Wa]]);const Ka={data(){return{}},computed:{isActive(){return this.$route.name}}},D=a=>(L("data-v-f50ae006"),a=a(),A(),a),Ga={id:"sidebarMenu",class:"col-md-3 col-lg-2 d-md-block bg-light"},Ja={class:"pt-3 fw-bold"},Qa=D(()=>o("h5",{class:"px-3 my-4 text-muted fw-bold"},"管理員",-1)),Ya={class:"nav flex-column"},Za=D(()=>o("h5",{class:"px-3 my-4 text-muted fw-bold"},"模擬功能",-1)),es={class:"nav flex-column"};function ts(a,s,r,u,p,n){const l=v("RouterLink");return y(),b("nav",Ga,[o("div",Ja,[Qa,o("ul",Ya,[o("li",null,[_(l,{class:S(["nav-link",{Active:n.isActive=="products"}]),to:"/admin/products"},{default:C(()=>[w("產品列表")]),_:1},8,["class"])]),o("li",null,[_(l,{class:S(["nav-link",{Active:n.isActive=="orders"}]),to:"/admin/orders"},{default:C(()=>[w("訂單列表")]),_:1},8,["class"])]),o("li",null,[_(l,{class:S(["nav-link",{Active:n.isActive=="coupons"}]),to:"/admin/coupons"},{default:C(()=>[w("優惠券")]),_:1},8,["class"])])]),Za,o("ul",es,[o("li",null,[_(l,{class:S(["nav-link",{Active:n.isActive=="customer"}]),to:"/admin/customer"},{default:C(()=>[w("模擬使用者畫面")]),_:1},8,["class"])])])])])}const as=M(Ka,[["render",ts],["__scopeId","data-v-f50ae006"]]);const ss={name:"Navbar",data(){return{messages:[]}},methods:{updateMessage(a,s){const r=Math.floor(new Date/1e3);this.messages.push({message:a,status:s,timestamp:r}),this.removeMessageWithTiming(r)},removeMessageWithTiming(a){const s=this;setTimeout(()=>{s.messages.forEach((r,u)=>{r.timestamp===a&&s.messages.splice(u,1)})},5e3)}},created(){const a=this;a.$mittBus.on("message:push",s=>{a.updateMessage(s.message,s.status)})}},ns={class:"message-alert"},os=o("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1);function is(a,s,r,u,p,n){return y(),b("div",ns,[(y(!0),b(R,null,j(p.messages,(l,e)=>(y(),b("div",{class:S(["alert alert-dismissible","alert-"+l.status]),key:e},[w(O(l.message)+" ",1),os],2))),128))])}const rs=M(ss,[["render",is]]);var ls=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cs(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function ds(a){if(a.__esModule)return a;var s=a.default;if(typeof s=="function"){var r=function u(){return this instanceof u?Reflect.construct(s,arguments,this.constructor):s.apply(this,arguments)};r.prototype=s.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(a).forEach(function(u){var p=Object.getOwnPropertyDescriptor(a,u);Object.defineProperty(r,u,p.get?p:{enumerable:!0,get:function(){return a[u]}})}),r}var F={exports:{}};const us=ds(Fa);(function(a,s){(function(u,p){a.exports=p(us)})(ls,r=>(()=>{var u={657:(e,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.default=(d,$)=>{const k=d.__vccOpts||d;for(const[N,P]of $)k[N]=P;return k}},976:e=>{e.exports=r}},p={};function n(e){var c=p[e];if(c!==void 0)return c.exports;var d=p[e]={exports:{}};return u[e](d,d.exports,n),d.exports}n.d=(e,c)=>{for(var d in c)n.o(c,d)&&!n.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:c[d]})},n.o=(e,c)=>Object.prototype.hasOwnProperty.call(e,c),n.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{n.r(l),n.d(l,{Component:()=>E,LoadingPlugin:()=>oe,default:()=>ie,useLoading:()=>T});var e=n(976);function c(t){var i;typeof t.remove<"u"?t.remove():(i=t.parentNode)==null||i.removeChild(t)}function d(t,i,h){let f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const g=(0,e.h)(t,i,f),m=document.createElement("div");return m.classList.add("vld-container"),h.appendChild(m),(0,e.render)(g,m),g.component}function $(){return typeof window<"u"}const k=$()?window.HTMLElement:Object,N=["aria-busy"],P={class:"vl-icon"};function z(t,i,h,f,g,m){return(0,e.openBlock)(),(0,e.createBlock)(e.Transition,{name:t.transition},{default:(0,e.withCtx)(()=>[(0,e.withDirectives)((0,e.createElementVNode)("div",{tabindex:"0",class:(0,e.normalizeClass)(["vl-overlay vl-active",{"vl-full-page":t.isFullPage}]),"aria-busy":t.isActive,"aria-label":"Loading",style:(0,e.normalizeStyle)({zIndex:t.zIndex})},[(0,e.createElementVNode)("div",{class:"vl-background",onClick:i[0]||(i[0]=(0,e.withModifiers)(function(){return t.cancel&&t.cancel(...arguments)},["prevent"])),style:(0,e.normalizeStyle)(t.bgStyle)},null,4),(0,e.createElementVNode)("div",P,[(0,e.renderSlot)(t.$slots,"before"),(0,e.renderSlot)(t.$slots,"default",{},()=>[((0,e.openBlock)(),(0,e.createBlock)((0,e.resolveDynamicComponent)(t.loader),{color:t.color,width:t.width,height:t.height},null,8,["color","width","height"]))]),(0,e.renderSlot)(t.$slots,"after")])],14,N),[[e.vShow,t.isActive]])]),_:3},8,["name"])}const H={mounted(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn(t){if(!this.isActive||t.target===this.$el||this.$el.contains(t.target))return;let i=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||i&&i.contains(t.target))&&(t.preventDefault(),this.$el.focus())}},beforeUnmount(){document.removeEventListener("focusin",this.focusIn)}},I=["width","height","stroke"],U=[(0,e.createStaticVNode)('<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g>',1)];function X(t,i,h,f,g,m){return(0,e.openBlock)(),(0,e.createElementBlock)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,stroke:t.color},U,8,I)}const W=(0,e.defineComponent)({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}});var x=n(657);const q=(0,x.default)(W,[["render",X]]),K=["fill","width","height"],G=[(0,e.createStaticVNode)('<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',3)];function J(t,i,h,f,g,m){return(0,e.openBlock)(),(0,e.createElementBlock)("svg",{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:t.color,width:t.width,height:t.height},G,8,K)}const Q=(0,e.defineComponent)({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}}),Y=(0,x.default)(Q,[["render",J]]),Z=["height","width","fill"],ee=[(0,e.createStaticVNode)('<rect x="0" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>',3)];function te(t,i,h,f,g,m){return(0,e.openBlock)(),(0,e.createElementBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:t.height,width:t.width,fill:t.color},ee,8,Z)}const ae=(0,e.defineComponent)({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}}),se={Spinner:q,Dots:Y,Bars:(0,x.default)(ae,[["render",te]])},ne=(0,e.defineComponent)({name:"VueLoading",mixins:[H],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,k],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:Boolean,transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:()=>{}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},components:se,emits:["hide","update:active"],data(){return{isActive:this.active}},mounted(){document.addEventListener("keyup",this.keyPress)},methods:{cancel(){!this.canCancel||!this.isActive||(this.hide(),this.onCancel.apply(null,arguments))},hide(){this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout(()=>{const t=this.$el.parentElement;(0,e.render)(null,t),c(t)},150))},disableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vl-shown")},enableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vl-shown")},keyPress(t){t.keyCode===27&&this.cancel()}},watch:{active(t){this.isActive=t},isActive(t){t?this.disableScroll():this.enableScroll()}},computed:{bgStyle(){return{background:this.backgroundColor,opacity:this.opacity}}},beforeUnmount(){document.removeEventListener("keyup",this.keyPress)}}),E=(0,x.default)(ne,[["render",z]]);function T(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return{show(){let h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:t,f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:i;const m={...t,...h,...{programmatic:!0,lockScroll:!0,isFullPage:!1,active:!0}};let B=m.container;m.container||(B=document.body,m.isFullPage=!0);const re={...i,...f};return{hide:d(E,m,B,re).ctx.hide}}}}const oe=function(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const f=T(i,h);t.config.globalProperties.$loading=f,t.provide("$loading",f)},ie=E})(),l})())})(F);var ps=F.exports;const ms=cs(ps),fs={components:{Navbar:qa,Sidebar:as,AlertMessage:rs,Loading:ms},created(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a}},_s={class:"container-fluid"},hs={class:"row"},gs={class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"};function vs(a,s,r,u,p,n){const l=v("Loading"),e=v("Navbar"),c=v("AlertMessage"),d=v("Sidebar"),$=v("RouterView");return y(),b("div",null,[_(l,{active:a.$switchLoadingStatus.$state.isLoading},null,8,["active"]),_(e),_(c),o("div",_s,[o("div",hs,[_(d),o("main",gs,[_($)])])])])}const Es=M(fs,[["render",vs]]);export{Es as default};
