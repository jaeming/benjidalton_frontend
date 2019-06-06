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
      box-shadow: 0 13px 20px rgba(0,0,0,0.24), 0 12px 9px rgba(0,0,0,0.16);
      max-width: 100%;
      height: auto;
    }
    .attachment__caption.attachment__caption--edited {
      margin-top: 1.3rem;
    }
  }
  .section-title {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }
</style>
