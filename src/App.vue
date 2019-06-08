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
  html, body { background: whitesmoke; }
  html { height: 100%; }
  body { min-height: 100%; }
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
  .small-title {
    font-size: 1.6rem;
  }
  header {
    background: #fff;
    padding: 1rem 0 2rem 0;
    border-bottom: .1rem solid #dadada;
    box-shadow: 0 2px 22px rgba(0, 0, 0, 0.14), 0 1px 5px rgba(0, 0, 0, 0.16);
  }
  .lh-24 {
    line-height: 2.4;
  }
  .box {
    box-shadow: 0 2px 11px rgba(10, 10, 10, 0.15), 0 0 0 1px rgba(10, 10, 10, 0.15) !important;
  }
</style>
