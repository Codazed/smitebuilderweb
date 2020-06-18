<template>
    <div>
        <b-card no-body class="mt-4 mb-1 bg-dark">
            <b-card-header v-b-toggle="'accordion-' + num" header-tag="header" class="bg-primary" role="tab">
                {{ god }}
            </b-card-header>
            <b-collapse :id="'accordion-' + num" visible accordion="build" role="tabpanel">
                <b-list-group>
                    <b-list-group-item class="bg-dark" v-for="item in items" :key="item.name">{{ item.name }}</b-list-group-item>
                </b-list-group>
            </b-collapse>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "Player",
        props: ['god', 'items', 'num']
    }
</script>

<style scoped>
    .god {
        text-transform: uppercase;
    }
</style>