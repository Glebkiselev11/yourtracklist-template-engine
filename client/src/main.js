import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueToasted from 'vue-toasted';
import VueMeta from 'vue-meta'
import axios from 'axios';

window.axios = axios;
Vue.use(VueMeta)

Vue.config.productionTip = false;

// Загружаем тостер
Vue.use(VueToasted, {
  inconPack: 'fontawesome'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
