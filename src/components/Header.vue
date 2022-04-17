<template>
    <div class="header header-dark">
        <h1>
            Smite Builder
            <b-badge variant="primary">BETA</b-badge>
        </h1>
        <p class="text-muted">
            <a href="https://gitlab.com/Codazed/smite-builder">smite-builder</a> package version {{ version }}<br>
            Made with
            <font-awesome-icon :icon="['fas', 'coffee']"/>
            and
            <font-awesome-icon :icon="['fas', 'heart']"/>
            by
            <a href="https://codazed.dev">Codazed</a>
        </p>
    </div>
</template>

<script>

    export default {
        name: "Header",
        props: ['theme', 'version']
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