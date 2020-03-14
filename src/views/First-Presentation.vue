<template>
    <div class="first-presentation">
        <img src="@/assets/presentation/presentation-1.jpeg"/>
        <img src="@/assets/presentation/presentation-2.jpeg"/>
        <img src="@/assets/presentation/presentation-3.jpeg"/>
        <img src="@/assets/presentation/presentation-4.jpeg"/>
        <img src="@/assets/presentation/presentation-5.jpeg"/>
        <img src="@/assets/presentation/presentation-6.jpeg"/>
        <img src="@/assets/presentation/presentation-7.jpeg"/>
        <img src="@/assets/presentation/presentation-8.jpeg"/>
        <img src="@/assets/presentation/presentation-9.jpeg"/>
        <img src="@/assets/presentation/presentation-10.jpeg"/>
        <img src="@/assets/presentation/presentation-11.jpeg"/>
        <img src="@/assets/presentation/presentation-12.jpeg"/>
        <img src="@/assets/presentation/presentation-13.jpeg"/>
        <img src="@/assets/presentation/presentation-14.jpeg"/>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class FirstPresentation extends Vue {

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
