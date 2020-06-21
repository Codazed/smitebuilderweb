<template>
    <b-card
            bg-variant="dark"
            header-bg-variant="primary"
            text-variant="white"
            :title="build.build.god"
            body-class="text-center"
            no-body
    >
        <b-card-header header-tag="header" header-bg-variant="primary" role="tab">
            <div class="row">
                <div class="col-10"><span class="align-text-top">{{build.name}}</span></div>
                <div class="col-2 text-right">
                    <b-button variant="dark" size="sm" v-b-modal="'confirmDelete-' + index" v-b-tooltip.hover
                              title="Delete build">
                        <font-awesome-icon :icon="['fad', 'trash-alt']"/>
                    </b-button>
                    <b-modal :id="'confirmDelete-' + index"
                             size="sm"
                             body-bg-variant="dark"
                             header-bg-variant="dark"
                             header-text-variant="white"
                             footer-bg-variant="dark"
                             button-size="sm"
                             title="Confirm deletion"
                             v-on:ok="$emit('deleteBuild', index)"
                             centered>
                        Are you sure you want to delete this build?
                    </b-modal>
                </div>
            </div>
        </b-card-header>
        <b-card-body body-class="py-2 text-center">
            <h5>{{build.build.god}}</h5>
            <b-list-group>
                <b-list-group-item class="bg-dark px-5" v-for="item in build.build.build" :key="item.name">
                    {{item.name}}
                </b-list-group-item>
            </b-list-group>
        </b-card-body>
    </b-card>
</template>

<script>
    export default {
        name: "SavedBuild",
        props: ['name', 'build', 'index']
    }
</script>

<!--v-on:click="$emit('deleteBuild', index)"-->

<style scoped>

</style>