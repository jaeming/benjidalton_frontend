<template lang='pug'>
div
  .container
    h2 photos
    p various photos that I have taken
  .container.photo-box
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
  },
  data () {
    return {
      photos: []
    }
  }
}
</script>
