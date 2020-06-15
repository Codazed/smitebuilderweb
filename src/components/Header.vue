<template>
    <div class="header header-dark">
        <h1>Smite Builder</h1>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: ['theme']
    }
</script>

<style scoped>
    .header {
        padding: 15px;
        margin-bottom: 30px;
        text-align: center;
    }
    .header-dark {
        background-color: #222;
        color: #fff;
    }

    .header-light {
        background-color: #ddd;
        color: #222;
    }
</style>