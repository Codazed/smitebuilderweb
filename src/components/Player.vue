<template>
    <div>
        <b-card no-body class="mt-4 mb-1 bg-dark">
            <b-card-header header-tag="header" class="bg-primary" role="tab">
                <div class="row">
                    <div class="col-9 text-left" v-b-toggle="'accordion-' + num"><span class="align-text-top">{{god}}</span></div>
                    <div class="col-3 text-right">
                        <b-button v-b-modal="'saveBuildModal-' + num" class="mx-1" variant="dark" size="sm" v-b-tooltip.hover title="Save build"><font-awesome-icon :icon="['fad', 'save']"/></b-button>
                        <b-button disabled variant="dark" size="sm" v-b-tooltip.hover title="Reroll" v-on:click="$emit('rerollPlayer', num)"><font-awesome-icon :icon="['fad', 'redo-alt']"/></b-button>
                    </div>
                </div>
            </b-card-header>
            <b-collapse :id="'accordion-' + num" visible accordion="build" role="tabpanel">
                <b-list-group>
                    <b-list-group-item class="bg-dark" v-for="item in items" :key="item.name">{{ item.name }}</b-list-group-item>
                </b-list-group>
            </b-collapse>
            <b-modal header-bg-variant="dark" header-text-variant="light" body-bg-variant="dark" footer-bg-variant="dark" centered :id="'saveBuildModal-' + num" title="Save build" v-on:ok="saveBuild(savedBuildName)" v-on:cancel="savedBuildName = ''">
                <p>Please enter a name for this {{god}} build.</p>
                <b-form-input placeholder="Enter a build name" v-model="savedBuildName"></b-form-input>
            </b-modal>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "Player",
        props: ['god', 'items', 'num'],
        data: function () {
            return {
                savedBuildName: ''
            }
        },
        methods: {
            saveBuild: function(name) {
                let build = {
                    god: this.god,
                    build: this.items
                }
                this.$emit('saveBuild', name, build);
                this.savedBuildName = '';
            }
        }
    }
</script>

<style scoped>
    .god {
        text-transform: uppercase;
    }
</style>