<template>
    <div class="header_block">
        <div class="header_block-kingdom">
            <div class="header_block-kingdom-name">
                <h1>Hill: Dasialand</h1>
            </div>
            <div class="header_block-kingdom-flag">

                <div class="header_block-kingdom-flag-container">
                    <img src="../assets/images/flag_border_3.png" alt="">
                </div>
                <div class="header_block-kingdom-flag-body">
                    <img src="../assets/images/dasia_cat_1.png" alt="">
                </div>

            </div>
        </div>
        <div class="header_block-king">
            <div class="header_block-king-name">
                <h1>King: PONY500XL</h1>
            </div>
            <div class="header_block-king-message">
                <h2>King say: hello </h2>
            </div>
        </div>
        <div class="header_block-user">
            <div class="header_block-user-name">
                <h3>PONY500XL</h3>

            </div>
            <div class="header_block-user-icon">
                <img src="../assets/images/dasia_cat_1.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderBlock"
    }
</script>

<style scoped lang="sass">

.header_block
    display: flex
    flex-direction: row
    height: 100%
    margin: 0
    border: 1.5px solid #237b90

.header_block-kingdom
    width: 20%
    margin: 0 15px
    .header_block-kingdom-name
        text-align: left
    .header_block-kingdom-flag
        position: absolute
        .header_block-kingdom-flag-container
            position: absolute
            z-index: 90
            top: 0


        .header_block-kingdom-flag-body
            position: absolute
            z-index: 80
            left: 20px
            top: 15px
            img
                height: 80px
                width: 80px

.header_block-king
    width: 50%
    margin: 0 15px
    text-align: left


.header_block-user
    display: flex
    flex-direction: row
    margin: 0 0 0 auto
    height: max-content
    .header_block-user-name
        height: auto
        margin: auto
    .header_block-user-icon
        margin: 15px
        height: 100px
        width: 100px
        border-radius: 50%
        background-color: aliceblue
        display: flex
        img
            margin: auto
            height: 80px
            width: 80px



</style>
