<template>
    <div class="main">
        <div class="main-container">
            <div class="main-container-block">
                <UserBlock></UserBlock>
            </div>
        </div>
    </div>
</template>

<script>
import UserBlock from '../components/UserBlock.vue';

    export default {
        name: "Main",
        components: {
            UserBlock
        }
    }
</script>

<style scoped lang="sass">

.main-container
    display: flex
    flex-direction: row
    .main-container-block
        display: flex
        width: 100%
        height: 100%
        margin: 40px auto

</style>
