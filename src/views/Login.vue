<template lang="pug">
  div
    h2 Login
    form(@click.prevent='login')
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
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      submit: 'Login'
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {email: this.email, password: this.password})
    }
  }
}
</script>
