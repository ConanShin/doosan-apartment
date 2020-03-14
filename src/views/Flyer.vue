<template>
    <div class="flyer">
        <img src="@/assets/flyer/yellow-horizontal-flyer.png"></img>
        <img src="@/assets/flyer/green-vertical-flyer.jpeg"></img>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Flyer extends Vue {

    }
</script>
<style lang="scss">
    img {
        width: 100%;
    }
</style>
