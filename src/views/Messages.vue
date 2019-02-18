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

<style lang="scss" scoped>
table{
  width:100%;
  table-layout: fixed;
  margin-top: 0px;
}
th{
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
}
td{
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  border-bottom: solid 1px rgba(255,255,255,0.1);
}
.entry:hover {
  background: #00000088;
  cursor: pointer;
}
.entry{
  td {
    font-weight: 600;
  }
}
.read {
  td {
    font-weight: 300;
    color: #ffffffb3
  }
}
</style>
