<template>
    <div class="text-center">
        <h4>Team Size</h4>
        <b-button-group style="width: 100%">
            <b-button :pressed.sync="sizeBtns[0]" v-on:click="changeTeamSize(0)">1</b-button>
            <b-button :pressed.sync="sizeBtns[1]" v-on:click="changeTeamSize(1)">2</b-button>
            <b-button :pressed.sync="sizeBtns[2]" v-on:click="changeTeamSize(2)">3</b-button>
            <b-button :pressed.sync="sizeBtns[3]" v-on:click="changeTeamSize(3)">4</b-button>
            <b-button :pressed.sync="sizeBtns[4]" v-on:click="changeTeamSize(4)">5</b-button>
        </b-button-group>
        <hr class="bg-light">
        <b-button block variant="dark" v-on:click="$emit('regenerate')">
            <font-awesome-icon :icon="['fad', 'sync']"/>
            Regenerate
        </b-button>
    </div>
</template>

<script>
    export default {
        name: "Controls",
        data: function() {
            return {
                sizeBtns: [true, false, false, false, false]
            }
        },
        methods: {
            changeTeamSize(size) {
                this.$emit('teamSizeChange', size);
                this.sizeBtns.forEach((button, index) => {
                    this.sizeBtns[index] = index === size;
                });
            }
        }
    }
</script>

<style scoped>

</style>