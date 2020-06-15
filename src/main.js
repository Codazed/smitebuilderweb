import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('buttons', Buttons);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Buttons from "./components/Buttons";

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app');