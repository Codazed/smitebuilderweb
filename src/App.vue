<template>
    <div id="app">
        <b-container fluid="xl">
            <h1>{{ god }}</h1>
            <ul>
                <li v-for="item in items" :key="item.name">{{ item.name }}</li>
            </ul>
        </b-container>
        <buttons></buttons>
    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core';
    import {faSync} from '@fortawesome/pro-duotone-svg-icons';

    library.add(faSync);
    import SmiteTeamGenerator from 'smite-builder';

    let stg = new SmiteTeamGenerator();
    export default {
        name: 'App',
        data: function () {
            return {
                god: '',
                items: []
            }
        },
        methods: {
            oof: function () {
                let player = stg.generateTeam({size: 1}).getPlayer(0);
                this.god = player.god.name;
                this.items = player.build.items;
            },
        },
        mounted() {
            stg.getLists(() => {
                this.oof();
            });
        }
    }
</script>

<style>
    body {
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap');
        font-family: 'Fira Sans', sans-serif !important;
    }
</style>
