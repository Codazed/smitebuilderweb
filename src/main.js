import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue';
import { ToggleButton } from 'vue-js-toggle-button';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('ToggleButton', ToggleButton);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('controls', Controls);
Vue.component('player', Player);
Vue.component('page-header', Header);
Vue.component('saved-build', SavedBuild);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Controls from "./components/Controls";
import Header from "./components/Header";
import Player from "./components/Player";
import SavedBuild from "./components/SavedBuild";

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app');