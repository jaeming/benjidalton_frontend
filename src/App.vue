<template lang='pug'>
  #benji-dalton
    NavBar
    main
      router-view
</template>

<script>
import NavBar from './components/NavBar'
export default {
  components: { NavBar }
}
</script>

<style lang="scss">
  .trix-content {
    img {
      max-width: 100%;
      height: auto;
    }
  }
  html,
  body {
    min-height: 100%;
  }
  body {
    height: 100vh;
    background: whitesmoke;
  }
</style>
