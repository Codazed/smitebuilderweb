<template>
    <b-button v-on:click="$emit('regenerate')">
        <font-awesome-icon :icon="['fad', 'sync']"/>
        Regenerate
    </b-button>
</template>

<script>
    export default {
        name: "Buttons"
    }
</script>

<style scoped>

</style>