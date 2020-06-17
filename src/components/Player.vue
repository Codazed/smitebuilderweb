<template>
    <div>
        <h1>{{ god }}</h1>
        <ul>
            <li v-for="item in items" :key="item.name">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Player",
        props: ['god', 'items']
    }
</script>

<style scoped>

</style>