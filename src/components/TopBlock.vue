<template>
    <div class="top_block">

        <div class="top_block-title">
            <span>TOP 5 USERS</span>
        </div>

        <div class="top_block-charts">
            <TopBlockChart></TopBlockChart>
        </div>

    </div>
</template>

<script>
import TopBlockChart from './TopBlockChart'

    export default {
        name: "TopBlock",
        components: {
            TopBlockChart
        }
    }
</script>

<style scoped lang="sass">

.top_block
    display: flex
    flex-direction: column
    width: 100%
    margin: auto
    border: 1.5px solid #237b90
    .top_block-title
        display: flex
        span
            font-size: 24px
            /*margin: 25px 0 0 0*/
            margin: 25px auto 0 auto
            font-weight: bold
            color: #237b90
            /*position: relative*/
            /*animation: moving 10s infinite*/
    .top_block-charts
        width: 100%
        min-height: 569px


/*@keyframes moving*/
    /*0%*/
        /*left: 5%*/
    /*50%*/
        /*left: 70%*/
    /*100%*/
        /*left: 5%*/


</style>
