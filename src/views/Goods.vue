<template>
    <div class="goods">
        <a href="https://www.youtube.com/embed/vA1NR4AwRgQ" class="card">리모델링시 실제수익관련 영상</a>
        <a href="/#/presentation" class="card">1차 리모델링 설명회 - <b>두산토박이</b></a>
        <a href="/#/plan" class="card">1차 리모델링 계획안 - <b>두산토박이</b></a>
        <a href="/#/good" class="card">좋은 입지 조건 5가지 - <b>도오전</b></a>
        <a href="https://m.blog.naver.com/cotton5678/221853570848" class="card">진행시 문제 - <b>리모를찾아서</b></a>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Goods extends Vue {

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
        text-decoration: none;
    }
</style>
