<template>
    <div class="trade">
        <div class="description">최근 2달간의 거래내역을 보여줍니다.</div>

        <table>
            <th>날짜</th>
            <th>전용면적(m2)</th>
            <th>층</th>
            <th>거래금액(만원)</th>
            <tr v-for="item in list">
                <td>{{item["년"]}}년 {{item["월"]}}월 {{item["일"]}}일</td>
                <td>{{item["전용면적"]}}</td>
                <td>{{item["층"]}}</td>
                <td>{{item["거래금액"]}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Trade extends Vue {
        list = []

        async beforeMount() {
            this.list = await this.$store.dispatch('tradeHistory')
            console.log(this.list)
        }
    }
</script>
<style scoped lang="scss">
    .description {
        margin-bottom: 10px;
    }

    table {
        margin: auto;

        td:nth-of-type(3) {
            width: 30px;
        }

        tr {
            height: 30px;
        }
    }
</style>
