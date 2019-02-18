<template lang="pug">
  div
    div(v-if='message')
      div {{message.subject}}
      div {{message.text}}
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Message',
  props: ['id'],
  async mounted () {
    this.message = this.messages.find(m => m.id === this.id)
    if (!this.message) {
      this.message = await this.$store.dispatch('fetchMessage', this.id)
    }
    this.$store.dispatch('updateMessage', {read: true, id: this.id})
  },
  computed: {
    ...mapState(['messages'])
  },
  data () {
    return {
      message: undefined
    }
  }
}
</script>
