<template>
    <div id="app">
        <page-header :version="this.builderVersion"></page-header>
        <b-container fluid="xl">
            <div class="alert alert-warning" role="alert">
                Welcome to the Smite Builder alpha web app! Keep in mind this is an <strong>Alpha</strong>.
                Some things will work and other things will not. Please keep this in mind as you use this app
                and please don't yell at me when things are not working, because chances are I am aware of issues
                in this alpha. That being said, enjoy trying this alpha!
            </div>
            <div class="row">
                <div class="col-md-4 order-md-last">
                    <controls v-on:generate="generate"></controls>
                </div>
                <div class="col-md-8 order-md-first text-md-left text-center">
                    <player class="player" v-for="(player, index) in team" :key="player.god.name" :god="player.god.name" :items="player.build.items" :num="index"></player>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core';
    import {faSync, faCoffee, faHeart} from '@fortawesome/pro-duotone-svg-icons';

    library.add(faSync, faCoffee, faHeart);
    import SmiteBuilder from 'smite-builder';

    let builder = new SmiteBuilder();
    export default {
        name: 'App',
        data: function () {
            return {
                defaultOpts: {
                    forceBalanced: false,
                    forceBoots: false,
                    warriorsOffensive: false,
                    buildType: 0,
                    size: 1
                },
                team: [],
                builderVersion: ''
            }
        },
        methods: {
            generate: function (options) {
                builder.warriorsOffensive = options.warriorsOffensive;
                this.team = builder.generateTeam(options);
            }
        },
        async mounted() {
            this.builderVersion = builder.version;
            await builder.getLists();
            this.generate(this.defaultOpts);
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

    .player {
        margin-bottom: 15px;
    }
</style>
