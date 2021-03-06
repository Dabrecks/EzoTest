import Vue from 'vue'
import App from './App.vue'
// ###################BOOTSTRAP###################
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// ###################VueCarousel###################
// import VueCarousel from 'vue-carousel';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Make VueCarousel available throughout your project
// Vue.use(VueCarousel);

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
