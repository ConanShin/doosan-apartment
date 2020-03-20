<template>
    <div class="goods">
        <a href="http://naver.me/xgUVOndk" class="card">투미에서 분석한 두산아파트 - <b>디디</b></a>
        <a href="https://www.youtube.com/embed/9M3GLB-jTU8" class="card">광상현마을 리모델링 설명회 - <b>도오전</b></a>
        <a href="https://m.cafe.naver.com/ca-fe/web/cafes/khbyeoksan/articles/346?useCafeId=false" class="card">벽산아파트 설계사 최종결과 - <b>도오전</b></a>
        <a href="http://www.sd.go.kr/mayor.do?mCode=2D001000000&op=list" class="card">금호역 1번출구 개선민원 - <b>제이</b></a>
        <a href="https://m.blog.naver.com/cotton5678/221853570848" class="card">진행시 문제 - <b>리모를찾아서</b></a>
        <a href="/#/good" class="card">좋은 입지 조건 5가지 - <b>도오전</b></a>
        <a href="/#/plan" class="card">1차 리모델링 계획안 - <b>두산토박이</b></a>
        <a href="/#/presentation" class="card">1차 리모델링 설명회 - <b>두산토박이</b></a>
        <a href="/#/old" class="card">1차 리모델링 평형 - <b>두산토박이</b></a>
        <a href="https://www.youtube.com/embed/vA1NR4AwRgQ" class="card">리모델링시 실제수익관련 영상</a>
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
