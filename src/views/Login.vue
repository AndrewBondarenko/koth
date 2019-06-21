<template>
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
            .login-form-title-authorization-active, .login-form-title-registration-active
                color: #42b983
                font-size: 24px
                font-weight: bold
                margin-bottom: 0
                transition-duration: 0.5s
            .titleAuthorizationPassive,  .titleRegistrationPassive
                color: #262626
                font-size: 14px
                margin-bottom: 0
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
