import Vue from "vue";
import App from "./App.vue";
import VueConfetti from 'vue-confetti'

Vue.config.productionTip = false;
Vue.use(VueConfetti)

new Vue({
  render: h => h(App)
}).$mount("#app");
