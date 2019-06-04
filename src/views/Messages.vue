<template lang="pug">
div
  .container(v-if='messages.length')
    v-table(:data="messages" cellpadding="0" cellspacing="0" border="0")
      thead(slot="head")
      tbody(slot="body" slot-scope="{displayData}")
          tr.entry(v-for="row in displayData" :key="row.id" @click='routeTo(row.id)' :class='{read: row.read}')
            td {{row.from}}
            td {{ row.subject }}
            td {{ row.date }}
  div(v-else) No Messages
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Messages',
  mounted () {
    this.$store.dispatch('fetchMessages')
  },
  computed: {
    ...mapState(['messages'])
  },
  methods: {
    routeTo (id) {
      this.$router.push({name: 'message', params: {id}})
    }
  }
}
</script>
