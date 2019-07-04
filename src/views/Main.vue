<template>
    <div class="main">

        <div class="wrap">
            <ul class="cloud-list">
                <li class="cloud cloud-big cloud-light"></li>
                <li class="cloud cloud-small cloud-light"></li>
                <li class="cloud cloud-big cloud-light"></li>
                <li class="cloud cloud-small cloud-light"></li>
            </ul>
        </div>

        <div class="main-container">

            <div class="main-container-header">

                <div class="main-container-header-block">
                    <HeaderBlock></HeaderBlock>
                </div>

            </div>

            <div class="main-container-content">

                <div class="main-container-content-block">
                    <TopBlock></TopBlock>
                </div>
                <div class="main-container-content-block">
                    <div class="cat">
                        <img src="../assets/images/dasia_cat_1.png"  alt="">
                    </div>
                    <UserBlock></UserBlock>
                </div>
                <div class="main-container-content-block">
                    <UserBlock></UserBlock>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import UserBlock from '../components/UserBlock.vue';
import TopBlock from '../components/TopBlock';
import HeaderBlock from '../components/HeaderBlock'

    export default {
        name: "Main",
        components: {
            UserBlock,
            TopBlock,
            HeaderBlock
        }
    }
</script>

<style scoped lang="sass">

.cat
    position: absolute
    top: 722px
    left: 764px
    img
        height: 80px
        width: 80px
        z-index: 1000

.main-container
    display: flex
    width: 95%
    margin: 0 auto
    flex-direction: column


.main-container-header
    display: flex
    min-height: 240px
    width: 100%
    margin: 15px auto
    z-index: 50

.main-container-header-block
    width: 100%

.main-container-content
    display: flex
    flex-direction: row
    justify-content: space-between
    margin: 0


.main-container-content-block
    display: flex
    z-index: 20
    width: 30%
    height: 100%
    margin: 0

.wrap
    width: 100%
    height: 100%
    margin: 0
    z-index: 2
    position: absolute
    overflow: hidden
    /*border: 10px solid #fff*/
    /*background: #96DCF5*/
    background: #96DCF5 url("../assets/images/mount_1.png") -33% 100% no-repeat


.cloud-bg
    position: absolute
    top: 50%
    bottom: 0
    left: 0
    right: 0
    background-color: #E4EFF3
    &::before
        content: ''
        position: absolute
        height: 4em
        width: 4em
        background-color: #E4EFF3
        bottom: 110%
        left: 250px
        border-radius: 50%
        box-shadow: -100px 50px 0 4em #E4EFF3, -250px 100px 0 2em #E4EFF3, 75px 100px 0 5em #E4EFF3, 250px 25px 0 4em #E4EFF3, 370px 25px 0 0 #E4EFF3, 400px 125px 0 5em #E4EFF3, 500px 50px 0 2em #E4EFF3, 590px 75px 0 0 #E4EFF3, 690px 75px 0 3em #E4EFF3


.cloud
    -webkit-animation: move-cloud 25s linear infinite
    animation: move-cloud 25s linear infinite
    font-size: 1.25em
    position: absolute
    height: 1em
    border-radius: 1em

.cloud-list
    margin: 0
    padding: 0
    list-style: none
    li
        &:nth-child(1)
            top: 55%
            left: 25%
            z-index: 1
        &:nth-child(2)
            top: 46%
            left: 30%
            z-index: 1
        &:nth-child(3)
            top: 57%
            left: 75%
            font-size: 0.75em
        &:nth-child(4)
            top: 40%
            left: 55%
            font-size: 0.75em

.cloud-big
    width: 12.25em
    &::before
        content: ''
        position: absolute
        bottom: 40%
        right: 20%
        height: 1.25em
        width: 1.25em
        border-radius: 50%
        background-color: inherit

.cloud-small
    width: 5em
    &::before
        content: ''
        position: absolute
        bottom: 0
        left: 15%
        height: 2.25em
        width: 2.25em
        border-radius: 50%
        background-color: inherit

.cloud-dark
    background-color: #BFD5E0
    &.cloud-big
        color: #BFD5E0
        &::before
            box-shadow: -1.5em -0.2em 0 0.5em currentColor, -6em -0.5em 0 0.75em currentColor, -8.75em -1.15em 0 1.5em currentColor

.cloud-light
    background-color: #E4EFF3
    &.cloud-big
        color: #E4EFF3
        &::before
            box-shadow: -1.5em -0.2em 0 0.5em currentColor, -6em -0.5em 0 0.75em currentColor, -8.75em -1.15em 0 1.5em currentColor


@-webkit-keyframes move-cloud
    0%
        -webkit-transform: translateX(0)
        transform: translateX(0)

    100%
        -webkit-transform: translateX(-200%)
        transform: translateX(-200%)


@keyframes move-cloud
    0%
        -webkit-transform: translateX(0)
        transform: translateX(0)

    100%
        -webkit-transform: translateX(-200%)
        transform: translateX(-200%)

</style>
