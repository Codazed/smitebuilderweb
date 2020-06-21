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
        <b-form-select class="custom-select bg-dark text-light" v-model="options.buildType" :options="buildTypes"></b-form-select>
        <p class="text-md-left">{{ buildTypes[options.buildType].description }}</p>
        <hr class="bg-light">
        <b-form-checkbox class="text-left mb-2" v-model="options.warriorsOffensive" name="warriors-offensive" switch>
            <strong>Are warriors offensive? <span v-if="options.warriorsOffensive">Yes</span><span v-else>No</span>.</strong><br>Warriors marked as <span v-if="options.warriorsOffensive">offensive</span><span v-else>defensive</span> gods.
        </b-form-checkbox>
        <b-form-checkbox class="text-left mb-2" v-model="options.forceBalanced" name="balanced-team" switch>
            <strong>Force balanced team? <span v-if="options.forceBalanced">Yes</span><span v-else>No</span>.</strong><br>Positions <span v-if="options.forceBalanced">won't</span><span v-else>may</span> be recycled.
        </b-form-checkbox>
        <b-form-checkbox class="text-left mb-2" v-model="options.forceBoots" name="balanced-team" switch>
            <strong>Force building boots? <span v-if="options.forceBoots">Yes</span><span v-else>No</span>.</strong><br>Boots <span v-if="options.forceBoots">will</span><span v-else>won't</span> always be picked.
        </b-form-checkbox>
        <hr class="bg-light">
        <b-button block variant="dark" v-on:click="$emit('generate', options)">
            <font-awesome-icon :icon="['fad', 'sync']"/>
            Generate
        </b-button>
        <b-button block variant="dark" v-b-tooltip.hover.right :title="'You have ' + (savedBuildsNum > 0 ? savedBuildsNum : 'no') + ' saved builds.'" v-on:click="$emit('showSavedBuilds')" :disabled="savedBuildsNum <= 0">
            <font-awesome-icon :icon="['fad', 'save']" />
            Saved builds
        </b-button>
    </div>
</template>

<script>
    export default {
        name: "Controls",
        props: ['savedBuildsNum'],
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