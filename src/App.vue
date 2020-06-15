<template>
    <div id="app">
        <page-header></page-header>
        <b-container fluid="xl">
            <div class="alert alert-warning" role="alert">
                Welcome to the Smite Builder alpha web app! Keep in mind this is an <strong>Alpha</strong>.
                Some things will work and other things will not. Please keep this in mind as you use this app
                and please don't yell at me when things are not working, because chances are I am aware of issues
                in this alpha. That being said, enjoy trying this alpha!
            </div>
            <div class="row">
                <div class="col-md-8">
                    <h1>{{ god }}</h1>
                    <ul>
                        <li v-for="item in items" :key="item.name">{{ item.name }}</li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <buttons v-on:regenerate="oof"></buttons>
                </div>
            </div>
        </b-container>
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
            }
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
        background-color: #000 !important;
        color: #fff !important;
    }
</style>
