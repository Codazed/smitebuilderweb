<template>
    <button class="btn btn-dark btn-lg btn-block" v-on:click="$emit('regenerate')">
        <font-awesome-icon :icon="['fad', 'sync']"/>
        Regenerate
    </button>
</template>

<script>
    export default {
        name: "Buttons"
    }
</script>

<style scoped>

</style>