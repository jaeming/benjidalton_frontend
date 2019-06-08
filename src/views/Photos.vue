<template lang='pug'>
div
  header
    h2.section-title.has-text-centered photos
    p.has-text-centered various photos that I have taken
  .section
    .container
      .columns.is-centered
        .column.is-8
          .box.photo(v-for='photo in photos')
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
  margin: 1rem 0 2rem 0 !important;
}
.photo-title {
  font-size: 1.4rem;
  font-weight: 100;
  color: rgb(148, 148, 148);
  margin: 1rem;
}
.photo-img {
  margin-bottom: 1.4rem;
}
.box {
  box-shadow: 0 13px 20px rgba(0,0,0,0.24), 0 12px 9px rgba(0,0,0,0.16) !important;
}
</style>
