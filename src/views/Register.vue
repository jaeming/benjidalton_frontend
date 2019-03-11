<template lang="pug">
div
  div(v-if='userPresent')
    p you are logged in as {{user.name}}
    p You're roles are:
      ul
        li(v-for='role in user.roles') {{role}}
    button(@click='signOut') Log Out
  div(v-else)
    h2 Register
    form(@submit.prevent='register')
      input(type='text' v-model='name')
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
import { Auth } from '@/lib/auth.js'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      submit: 'Register'
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['userPresent'])
  },
  methods: {
    register () {
      this.$store.dispatch('register', {
        name: this.name,
        email: this.email,
        password: this.password
      })
    },
    signOut () {
      Auth.local.remove()
    }
  }
}
</script>
