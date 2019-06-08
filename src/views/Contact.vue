<template lang="pug">
  .section
    .container
      .columns.is-centered
        .column.is-half
          .box
            h2.section-title.has-text-centered Contact
            hr
            div(v-if='!userPresent')
              router-link(to='/register') Register
              |  or
              router-link(to='/login')  Login
              |  first.
            div(v-else)
              div.has-text-centered(v-if='sent') Thanks. Message sent.
              form(v-else @submit.prevent='sendMessage')
                b-field(label='Subject')
                  b-input(v-model='subject' type='text' required)
                b-field(label='Message')
                  b-input(type='textarea' v-model='text' required)
                input.button.is-primary(type='submit' value='Send')
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
