<template lang="pug">
div
  header
    h2.section-title.has-text-centered Music
    p.has-text-centered songs that I've written
  .section
    .container
      .song(v-for='song in songs')
        p {{song.name}}
          | &nbsp;
          small.size {{size(song.size)}}
        SongPlayer(:url='song.url')
</template>

<script>
import SongPlayer from '../components/SongPlayer'
import { mapState } from 'vuex'
export default {
  name: 'Songs',
  components: {
    SongPlayer
  },
  mounted () {
    this.$store.dispatch('fetchSongs')
  },
  computed: mapState(['songs']),
  methods: {
    size (num) {
      return `${Math.round((num * 0.000001) * 10) / 10} mb`
    }
  }
}
</script>
<style lang="scss" scoped>
  .size {
    color: #848484;
    font-size: .7rem;
    margin-left: .4rem;
  }
</style>
