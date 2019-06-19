<template>
    <div class="user_block_click">

        <div class="user_block_click-score">
            <div class="user_block_click-score-item">
                <h3>Score: </h3>
                <h3> {{ totalScore }} </h3>
            </div>
            <div class="user_block_click-score-item">
                <h3>Clicks: </h3>
                <h3> {{ clickCount }} </h3>
            </div>
        </div>
        <div class="user_block_click-chart">
            <UserBlockClickChart
                    v-bind:heightChart=this.totalScore
            ></UserBlockClickChart>
        </div>
        <div class="user_block_click-button">
            <button v-on:click="increaseOne">+1</button>
            <button v-on:click="increaseTen">+10</button>
        </div>

    </div>
</template>


<script>
    import UserBlockClickChart from '../components/UserBlockClickChart'

    export default {
        name: "UserBlockClick",
        components: {
            UserBlockClickChart
        },
        data() {
            return {
                clickCount: 0,
                totalScore: 0,
            }
        },

        methods: {

            increaseOne: function(){
                this.clickCount++;
                this.totalScore++;
            },

            increaseTen: function() {
                this.clickCount++;
                this.totalScore = this.totalScore + 10;
            },

        }
    }
</script>

<style scoped lang="sass">

.user_block_click
    display: flex
    flex-direction: column
    width: 100%
    height: 100%
    margin: 40px auto
    border: 1px solid #bbb
    .user_block_click-score
        display: flex
        flex-direction: column
        margin: 10px auto 10px 10px
        .user_block_click-score-item
            display: flex
            flex-direction: row
            h3
                padding: 0 5px
                margin: 3px
    .user_block_click-button
        margin: auto
        button
            width: 180px
            height: 40px
            background: none
            border: 2px solid #bbb
            margin: 5px
            font-size: 18px
            &:focus
                outline: none
            &:active
                width: 182px
                height: 42px
                margin: 4px

</style>
