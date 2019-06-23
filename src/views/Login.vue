<template>
<div>
    <div class="wrap">

        <ul class="cloud-list">
            <li class="cloud cloud-big cloud-light"></li>
            <li class="cloud cloud-small cloud-light"></li>
            <li class="cloud cloud-big cloud-light"></li>
            <li class="cloud cloud-small cloud-light"></li>
        </ul>

    </div>

    <div class="login-container">

        <div v-if="true" class="login-modal">

            <div class="login-form-title">
                <div class="login-form-title-authorization">
                    <div @click="switched = 'authorization'" class="login-form-title-authorization-active"
                         :class="{titleAuthorizationPassive : switched === 'registration'}">
                        LOGIN
                    </div>
                </div>
                <div class="login-form-title-registration">
                    <div @click="switched = 'registration'" class="login-form-title-registration-active"
                         :class="{titleRegistrationPassive : switched === 'authorization'}">
                        REGISTRATION
                    </div>
                </div>
            </div>

            <div v-if="switched === 'authorization'" class="authorization-form">
                <div class="login-input-group" v-bind:class="{ invalidValidation: validation }">
                    <input v-model="username" type="text" id="name" placeholder="username" />
                </div>
                <div class="login-input-group" v-bind:class="{ invalidValidation: validation }">
                    <input v-model="password" type="password" id="password" placeholder="password" />
                </div>
                <div @click="log(username, password)" class="login-form-button">LOGIN</div>
            </div>

            <div v-if="switched === 'registration'" class="registration-form">
                <div class="login-input-group" v-bind:class="{ invalidValidation: validation }">
                    <input v-model="username" type="text" id="name2" placeholder="nickname" />
                </div>
                <div class="login-input-group" v-bind:class="{ invalidValidation: validation }">
                    <input v-model="password" type="password" id="password2" placeholder="password" />
                </div>
                <div @click="log(username, password)" class="login-form-button">GO REGISTRATION</div>
            </div>

        </div>
    </div>
</div>
</template>


<script>
    export default {
        name: 'Login',
        props: {
        },
        data: function(){
            return {
                username: '',
                password: '',
                error: false,
                validation: false,
                switched: 'authorization'
            }
        },
        methods: {
            log: function(login, password) {
                for (var i = 0; i < this.$root.users.data.length; i++) {
                    console.log(password == this.$root.users.data[i].password)
                    // password == this.$root.users.data[i].password)
                    if (
                        login == this.$root.users.data[i].username &&
                        password == this.$root.users.data[i].password
                    ) {
                        this.$root.currentUser = this.$root.users.data[i].username;
                        var v = encodeURIComponent(document.lastModified);
                        document.cookie = "user=" + this.$root.currentUser;
                        break;
                    } else {
                        this.error = true;
                    }
                }
                if (this.$root.currentUser == "" && this.error == true) {
                    // alert("Неправильний логін або пароль");
                    this.validation = true;
                } else return true;
            },
        }
    }
</script>

<style scoped lang="sass">

.wrap
    width: 100%
    height: 100%
    margin: 0
    position: absolute
    overflow: hidden
    /*border: 10px solid #fff*/
    /*background: #96DCF5*/
    background: #96DCF5 url("../assets/images/mounts_bg_3.png") 0 -200% no-repeat


.cloud-bg
    position: absolute
    top: 40%
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
    -webkit-animation: move-cloud 20s linear infinite
    animation: move-cloud 20s linear infinite
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
            top: 47%
            left: 43%
            z-index: 1
        &:nth-child(3)
            top: 50%
            left: 70%
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

.login-container
    display: flex
    width: 100%
    height: auto
    *, *:before, *:after
        margin: 0
        padding: 0
        box-sizing: border-box
    .login-modal
        top: 0
        left: 0
        z-index: 3
        width: 340px
        height: 40%
        margin: 105px auto 0 auto
        padding: 20px
        display: flex
        align-items: center
        justify-content: center
        flex-direction: column
        background-color: inherit
        transform-origin: center center
    .login-form-title
        display: flex
        width: 100%
        height: 25px
        justify-content: space-between
        .login-form-title-authorization, .login-form-title-registration
            margin: auto 0 0 0
            cursor: pointer
            .login-form-title-authorization-active, .login-form-title-registration-active
                color: #42b983
                font-size: 24px
                font-weight: bold
                margin: auto 0 0 -9px
                transition-duration: 0.5s
            .titleAuthorizationPassive,  .titleRegistrationPassive
                color: #262626
                font-size: 14px
                margin: auto 0 0 -5px
                transition-duration: 0.5s

        /*.login-form-title-registration*/
            /*margin: auto 0 0 0*/
            /*.login-form-title-registration-active*/
                /*color: #42b983*/
                /*font-size: 24px*/
                /*font-weight: bold*/
            /*.titleRegistrationPassive*/
                /*color: #262626*/
                /*font-size: 14px*/

.login-form-button
    width: 100%
    padding: 10px
    color: #42b983
    margin-top: 30px
    max-width: 300px
    font-weight: bold
    text-align: center
    border: solid 1.5px #42b983
    background-color: #fff
    transition-duration: 0.5s
    &:hover
        color: #fff
        cursor: pointer
        background-color: #42b983
        transition-duration: 0.5s


.authorization-form
    width: 100%
    margin: 20px 0 0 0

.registration-form
    width: 100%
    margin: 20px 0 0 0


.login-input-group
    width: 100%
    font-size: 16px
    max-width: 300px
    padding-top: 20px
    position: relative
    margin-bottom: 15px
    input
        width: 100%
        color: #262626
        border: none
        outline: none
        padding: 5px 0
        line-height: 1
        font-size: 16px
        border-bottom: solid 1.5px #42b983
        background-color: transparent

.invalidValidation
    input
        border-bottom: solid 1.5px #e02340

.login-form-validation
    margin-bottom: 65px
    margin-top: -83px
    h4
        color: #e02340

.successfulLogin
    margin-top: 20px
    h1
        margin-bottom: 30px
        color: #42b983
    h3
        margin-bottom: 10px
        color: #42b983
        a
            color: #42b983
    img
        height: 90px
        width: 90px
        margin: 20px 0

</style>
