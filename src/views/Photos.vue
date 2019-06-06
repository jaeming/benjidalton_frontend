<template lang='pug'>
.section
  .container
    h2.section-title.has-text-centered photos
    p.has-text-centered various photos that I have taken
    .border
    .photo(v-for='photo in photos')
      a(:href='photo.webUrl' target='_blank')
        p.photo-title {{photo.title}}
        img.photo-img(:src='photo.imageUrl')
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

<style lang="scss" scoped>
.photo {
  text-align: center;
  margin: 3rem 0;
}
.photo-title {
  font-size: 2.2rem;
  font-weight: 100;
  color: rgb(148, 148, 148);
  margin: 1rem;
}
.photo-img {
  margin-bottom: 1rem;
  box-shadow: 0 13px 20px rgba(0,0,0,0.24), 0 12px 9px rgba(0,0,0,0.16);
}
.border {
  margin-top: 3rem;
  border-bottom: .2rem solid #ececec;
}
</style>
