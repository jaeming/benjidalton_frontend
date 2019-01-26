<template lang='pug'>
div
  div(v-for='photo in photos')
    p {{photo.title}}
    img(:src='photo.url')
</template>

<script>
export default {
  name: 'Photos',
  async mounted () {
    const resp = await this.$store.dispatch('fetchPhotos')
    this.photos = resp.data
    console.log(this.photos)
  },
  data () {
    return {
      photos: []
    }
  }
}
</script>
