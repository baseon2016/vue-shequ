import Vue from "vue";
import App from "./App.vue";
import "./assets/global.css";
import "./assets/iconfont/iconfont.css";
import "./assets/plugins/element-ui";
import router from "./router";
import PUBLICURL from "./publicvalue";
Vue.prototype.$publicUrl = PUBLICURL;
Vue.config.productionTip = false;

//将App组件内的虚拟的dom结构，渲染为真实的dom结构，并挂载到#app这个元素上
//框架写的是虚拟dom
//获取后台数据 通过原生或者jq操作真实dom去生成页面并写上交互效果,直接操作dom节点可能会引起浏览器的重绘(重渲)

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
