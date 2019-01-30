<template lang='pug'>
div
  div(v-for='photo in photos')
    a(:href='photo.webUrl' target='_blank')
      p {{photo.title}}
      img(:src='photo.imageUrl')
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
