<template lang="pug">
div
  div(v-if='userPresent')
    p you are logged in as {{user.name}}
    p You're roles are:
      ul
        li(v-for='role in user.roles') {{role}}
    button(@click='signOut') Log Out
  div(v-else)
    h2 Login
    form(@submit.prevent='login')
      br
      input(type='email' v-model='email')
      br
      br
      input(type='password' v-model='password')
      br
      br
      input(type='submit' v-model='submit')
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      submit: 'Login'
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['userPresent'])
  },
  methods: {
    login () {
      this.$store.dispatch('login', {email: this.email, password: this.password})
    },
    signOut () {
      this.$store.commit('setUser', undefined)
    }
  }
}
</script>
