<template lang="pug">
  div
    h2 Contact
    div(v-if='userPresent')
      form(v-if='!sent' @submit.prevent='sendMessage')
        input(v-model='subject' type='text' placeholder='Subject')
        br
        textarea(v-model='text' placeholder='Your message here...')
        br
        input(type='submit' value='Send')
      div(v-else) Thanks. Message sent.
    div(v-else)
      router-link(to='/register') Register
      |  or
      router-link(to='/login')  Login
      |  first.
</template>
<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'Contact',
  data () {
    return {
      subject: undefined,
      text: undefined,
      sent: false
    }
  },
  methods: {
    async sendMessage () {
      await this.$store.dispatch('sendMessage', {
        subject: this.subject,
        text: this.text,
        from: this.user.id
      })
      this.sent = true
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['userPresent'])
  }
}
</script>
