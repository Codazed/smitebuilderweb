<template>
    <div id="app">
        <page-header :version="this.builderVersion"></page-header>
        <b-container fluid="xl">
            <b-alert variant="warning" dismissible show>
                Welcome to the Smite Builder alpha web app! Keep in mind this is an <strong>Alpha</strong>.
                Some things will work and other things will not. Please keep this in mind as you use this app
                and please don't yell at me when things are not working, because chances are I am aware of issues
                in this alpha. That being said, enjoy trying this alpha!
            </b-alert>
            <transition name="slide" mode="out-in">
                <div v-if="showSavedBuilds && savedBuilds.length > 0" key="saved">
                    <div class="row">
                        <div class="col-3 text-left">
                            <b-button variant="dark" v-on:click="showSavedBuilds = false">
                                <font-awesome-icon :icon="['fas', 'arrow-alt-square-left']" />
                                Back
                            </b-button>
                        </div>
                        <div class="col-6 text-center">
                            <h3>Saved Builds</h3>
                        </div>
                    </div>
                    <b-card-group deck>
                        <saved-build v-for="(build, index) in savedBuilds" :key="build.name" :name="build.name" :build="build" :index="index" v-on:deleteBuild="deleteBuild(index)"></saved-build>
                    </b-card-group>
                </div>
                <div v-else class="row" key="generator">
                    <div class="col-md-4 order-md-last">
                        <controls v-on:generate="generate" v-on:showSavedBuilds="showSavedBuilds = true" :savedBuildsNum="savedBuilds.length"></controls>
                    </div>
                    <div class="col-md-8 order-md-first text-md-left text-center">
                        <player class="player" v-for="(player, index) in team" v-on:rerollPlayer="reroll" v-on:saveBuild="saveBuild" :key="player.god.name" :god="player.god.name" :items="player.build.items" :num="index"></player>
                    </div>
                </div>
            </transition>
        </b-container>
    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core';
    import {faSync, faCoffee, faHeart, faSave, faRedoAlt, faTrashAlt, faArrowLeft} from '@fortawesome/free-solid-svg-icons';

    library.add(faSync, faCoffee, faHeart, faSave, faRedoAlt, faTrashAlt, faArrowLeft);
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
                builderVersion: '',
                savedBuilds: [],
                showSavedBuilds: false
            }
        },
        methods: {
            generate: function (options) {
                builder.warriorsOffensive = options.warriorsOffensive;
                this.team = builder.generateTeam(options);
            },
            reroll: function (index) {
                this.team.rerollPlayer(index);
            },
            saveBuild: function (name, build) {
                this.savedBuilds.push({'name': name, 'build': build});
                localStorage.savedBuilds = JSON.stringify(this.savedBuilds);
            },
            deleteBuild: function (index) {
                this.savedBuilds.splice(index, 1);
                if (!this.savedBuilds.length > 0) {
                    this.showSavedBuilds = false;
                }
                localStorage.savedBuilds = JSON.stringify(this.savedBuilds);
            }
        },
        async mounted() {
            this.builderVersion = builder.version;
            await builder.getLists();
            this.generate(this.defaultOpts);
            if (localStorage.savedBuilds) {
                this.savedBuilds = JSON.parse(localStorage.savedBuilds);
            }
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

    .slide-enter-active, .slide-leave-active {
        transition: all .5s;
    }
    .slide-enter {
        transform: translateX(500px);
        opacity: 0;
    }
    .slide-leave-to {
        transform: translateX(-500px);
        opacity: 0;
    }
</style>
