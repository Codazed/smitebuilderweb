import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false

let app = new Vue({
    data: {
        god: '',
        items: []
    },
    render: h => h(App)
}).$mount('#app');

import SmiteTeamGenerator from 'smite-builder';
let stg = new SmiteTeamGenerator();
stg.getLists(() => {
    console.log(stg.lists);
    let player = stg.generateTeam({size: 1}).getPlayer(0);
    app.god = player.god.name;
    app.items = player.build.items;
});