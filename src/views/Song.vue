<template lang="pug">
  div(v-if='song')
    h4 {{song.name}}
    p {{song.size}}
    a(:href='song.url') link
    SongPlayer(:url='song.url')
    hr
</template>

<script>
import SongPlayer from '../components/SongPlayer'
export default {
  name: 'Song',
  components: {
    SongPlayer
  },
  props: ['slug'],
  async mounted () {
    const song = await this.$store.dispatch('fetchSong', this.slug)
    this.song = song
  },
  data () {
    return {
      song: null
    }
  }
}
</script>
