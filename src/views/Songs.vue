<template lang="pug">
  div
    .song(v-for='song in songs')
      h4 {{song.name}}
      p {{song.size}}
      a(:href='song.url') link
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Songs',
  mounted () {
    this.$store.dispatch('fetchSongs')
  },
  computed: mapState(['songs'])
}
</script>
