<template>
    <div class="goods-good">
        <img src="@/assets/good/good-1.jpeg"/>
        <img src="@/assets/good/good-2.jpeg"/>
        <img src="@/assets/good/good-3.jpeg"/>
        <img src="@/assets/good/good-4.jpeg"/>
        <img src="@/assets/good/good-5.jpeg"/>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class GoodsGood extends Vue {

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
