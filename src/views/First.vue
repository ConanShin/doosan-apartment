<template>
    <div class="first">
        <a href="/#/presentation" class="card">1차 리모델링 설명회</a>
        <a href="/#/plan" class="card">1차 리모델링 계획안</a>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Home extends Vue {

    }
</script>
<style scoped lang="scss">
    .home {
        text-align: left;
    }
    .card {
        display: flex;
        height: 50px;
        align-items: center;
        justify-content: center;
        background-color: beige;
        margin-bottom: 5px;
    }
</style>
