<template>
    <div class="trade">
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Trade extends Vue {
        beforeMount() {
            this.$store.dispatch('tradeHistory')
        }
    }
</script>
<style scoped lang="scss">
</style>
