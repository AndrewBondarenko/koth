<template>
    <div class="user_block">
        <div class="user_block-click">
            <UserBlockClick></UserBlockClick>
        </div>
    </div>
</template>

<script>
import UserBlockClick from '../components/UserBlockClick';

    export default {
        name: "UserBlock",
        components: {
            UserBlockClick
        }
    }
</script>

<style scoped lang="sass">

.user_block
    display: flex
    width: 40%
    margin: 40px auto
    .user_block-click
        width: 100%

</style>
