import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './routes'
import store from './store/store'
import vuelidate from 'vuelidate'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import AddToCart from './components/cart/AddToCart.vue'

/* Global components */ 
Vue.component("button-add-to-cart", AddToCart)

/* BootstrapVue */
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

/* VueResource */
Vue.use(VueResource)
Vue.http.options.root = 'https://furniture-store-de902.firebaseio.com/';

/* Vuelidate */
Vue.use(vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
