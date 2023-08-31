import { createApp } from 'vue'
import { createPinia } from 'pinia'

import axios from 'axios'
import VueAxios from 'vue-axios'
import 'vue-loading-overlay/dist/css/index.css';
import mitt from "mitt";
import { switchLoadingStatus } from "./stores/switchLoadingStatus.js";
// 引入 VeeValidate 元件跟功能
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
// 引入 VeeValidate 的驗證規則
import AllRules from '@vee-validate/rules';
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n';
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from './App.vue'
import router from './router'

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
});
// 將當前 VeeValidate 的語系設定為繁體中文
configure({
    generateMessage: localize({ zh_TW: zhTW }),
    validateOnInput: true,
});
setLocale('zh_TW');

const app = createApp(App)

app.use(VueAxios, axios)

app.component('VField', Field);
app.component('VForm', Form);
app.component('VErrorMessage', ErrorMessage);

app.config.globalProperties.$mittBus = mitt();


app.use(createPinia())
app.config.globalProperties.$switchLoadingStatus = switchLoadingStatus();
app.use(router)

app.mount('#app')
