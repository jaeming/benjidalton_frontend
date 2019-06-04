<template lang="pug">
  nav.navbar.is-dark
    .container
      .navbar-brand
        router-link.navbar-item(to='/')
          h1.brand-text Benji Dalton
        span.navbar-burger.burger(@click='toggleMobileMenu' :class='mobileClass')
          span
          span
          span
      #navMenu.navbar-menu(:class='mobileClass')
        .navbar-end
          a.navbar-item.is-active(@click.prevent='navigateTo("/")') Home
          a.navbar-item(@click.prevent='navigateTo("/photos")') Photos
          a.navbar-item(@click.prevent='navigateTo("/songs")') Music
          a.navbar-item(@click.prevent='navigateTo("/contact")') Contact
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      mobileMenu: false
    }
  },
  methods: {
    navigateTo (path) {
      this.toggleMobileMenu()
      this.$router.push(path)
    },
    toggleMobileMenu () {
      this.mobileMenu = !this.mobileMenu
    }
  },
  computed: {
    mobileClass () {
      return {'is-active': this.mobileMenu}
    }
  }
}
</script>

<style lang="scss" scoped>
  .brand-text {
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 700;
  }
</style>
