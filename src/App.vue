<template>
  <div id="app">

      <div id="nav">
        <router-link to="/">Game</router-link> |
        <router-link to="/login">Login</router-link>
      </div>

    <router-view/>

    <!--<Main></Main>-->

  </div>
</template>

<script>
import Main from './views/Main.vue'

  export default {
    name: "App",
    components: {
      Main
    }
  }
</script>

<style lang="sass">

body
  margin: 0

@font-face
    font-family: 'half_bold_pixel-7regular'
    src: url('assets/font/half_bold_pixel-7-webfont.woff2') format('woff2'),
    url('assets/font/half_bold_pixel-7-webfont.woff') format('woff')
    font-weight: normal
    font-style: normal


#app
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif*/
  font-family: 'half_bold_pixel-7regular', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin: 0

#nav
  padding: 30px
  position: absolute
  z-index: 100
  right: 40px
  top: 200px

  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983



</style>
