<template lang="pug">
  .section
    .container
      .columns.is-centered
        .column.is-half
          .box
            div.has-text-centered(v-if='sent') Thanks. Message sent.
            form(v-else @submit.prevent='sendMessage')
              b-field(label='From')
                b-input(v-model='from' type='text' required)
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
      from: null,
      subject: null,
      text: null,
      sent: false
    }
  },
  methods: {
    async sendMessage () {
      await this.$store.dispatch('sendMessage', {
        subject: this.subject,
        text: this.text,
        from: this.from
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
