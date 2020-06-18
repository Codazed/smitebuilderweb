<template>
    <div class="text-center">
        <h4>Team Size</h4>
        <b-button-group style="width: 100%">
            <b-button :pressed.sync="sizeBtns[0]" v-on:click="changeTeamSize(1)">1</b-button>
            <b-button :pressed.sync="sizeBtns[1]" v-on:click="changeTeamSize(2)">2</b-button>
            <b-button :pressed.sync="sizeBtns[2]" v-on:click="changeTeamSize(3)">3</b-button>
            <b-button :pressed.sync="sizeBtns[3]" v-on:click="changeTeamSize(4)">4</b-button>
            <b-button :pressed.sync="sizeBtns[4]" v-on:click="changeTeamSize(5)">5</b-button>
        </b-button-group>
        <hr class="bg-light">
        <h4>Build Type</h4>
        <b-form-select v-model="options.buildType" :options="buildTypes"></b-form-select>
        <p class="text-md-left">{{ buildTypes[options.buildType].description }}</p>
        <hr class="bg-light">
        <b-form-checkbox class="text-left mb-2" v-model="options.warriorsOffensive" name="warriors-offensive" switch>
            <strong>Are warriors offensive? <span v-if="options.warriorsOffensive">Yes</span><span v-else>No</span>.</strong><br><span v-if="options.warriorsOffensive">Warriors marked as offensive gods.</span><span v-else>Warriors marked as defensive gods.</span>
        </b-form-checkbox>
        <b-form-checkbox class="text-left mb-2" v-model="options.forceBalanced" name="balanced-team" switch>
            <strong>Force balanced team? <span v-if="options.forceBalanced">Yes</span><span v-else>No</span>.</strong><br><span v-if="options.forceBalanced">Positions won't be recycled.</span><span v-else>Positions may be recycled.</span>
        </b-form-checkbox>
        <b-form-checkbox class="text-left mb-2" v-model="options.forceBoots" name="balanced-team" switch>
            <strong>Force building boots? <span v-if="options.forceBoots">Yes</span><span v-else>No</span>.</strong><br><span v-if="options.forceBoots">Boots will always be picked.</span><span v-else>Boots won't always be picked.</span>
        </b-form-checkbox>
        <hr class="bg-light">
        <b-button block variant="dark" v-on:click="$emit('generate', options)">
            <font-awesome-icon :icon="['fad', 'sync']"/>
            Generate
        </b-button>
    </div>
</template>

<script>
    export default {
        name: "Controls",
        data: function () {
            return {
                options: {
                    size: 1,
                    buildType: 0,
                    warriorsOffensive: false,
                    forceBalanced: false,
                    forceBoots: false
                },
                sizeBtns: [true, false, false, false, false],
                buildTypes: [
                    {
                        value: 0,
                        text: 'Default Random',
                        description: 'Completely random build.'
                    },
                    {value: 1, text: 'Full Offensive', description: 'All builds will only have offensive items.'},
                    {value: 2, text: 'Full Defensive', description: 'All builds will only have defensive items.'},
                    {
                        value: 3,
                        text: 'Half-and-Half',
                        description: 'All builds will be half offensive / half defensive items.'
                    },
                    {
                        value: 4,
                        text: 'Offensive vs Defensive',
                        description: 'Offensive gods will have only offensive items, defensive gods will only have defensive items.'
                    }
                ]
            }
        },
        methods: {
            changeTeamSize(size) {
                this.options.size = size;
                this.sizeBtns.forEach((button, index) => {
                    this.sizeBtns[index] = index === size-1;
                });
            }
        }
    }
</script>

<style scoped>

</style>