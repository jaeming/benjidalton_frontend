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
          a.navbar-item(href='/' @click.prevent='navigateTo("/")' :class='isActiveNav("/")')
            | Home
          a.navbar-item(href='/photos' @click.prevent='navigateTo("/photos")' :class='isActiveNav("/photos")')
            | Photos
          a.navbar-item(href='/songs' @click.prevent='navigateTo("/songs")' :class='isActiveNav("/songs")')
            | Music
          a.navbar-item(href='/contact' @click.prevent='navigateTo("/contact")' :class='isActiveNav("/contact")')
            | Contact
          .navbar-item
            a.button.is-danger(href='/admin' v-if='isAdmin' @click.prevent='navigateTo("/admin")')
              | Admin
</template>

<script>
import { mapState, mapGetters } from 'vuex'
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
    },
    isActiveNav (path) {
      return {'is-active': path === this.$route.path}
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['userPresent']),
    mobileClass () {
      return {'is-active': this.mobileMenu}
    },
    isAdmin () {
      return this.user && this.user.roles.includes('admin')
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
