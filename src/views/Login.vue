<template lang="pug">
.section
  .container
    .columns.is-centered
      .column.is-4
        .box
          div(v-if='userPresent')
            button.button.is-info(@click='signOut') Log Out

          div(v-else)
            h2.title Login
            form(@submit.prevent='login')
              b-field(label='email')
                b-input(type='email' v-model='email')
              b-field(label='password')
                b-input(type='password' v-model='password')
              input.button.is-primary(type='submit' v-model='submit')
              router-link.is-pulled-right.lh-24(to='/register') Register instead
</template>
<script>
import { Auth } from '@/lib/auth.js'
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
      Auth.local.remove()
    }
  }
}
</script>
