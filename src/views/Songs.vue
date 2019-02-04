<template lang="pug">
  div
    .song(v-for='song in songs')
      router-link(:to='{name: "song", params: {slug: song.slug}}')
        h4 {{song.name}}
      p {{song.size}}
      br
      br
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
