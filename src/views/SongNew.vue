<template lang="pug">
  div
    h2 new Song
    hr
    form(@submit.prevent='saveSong')
      br
      label Title
      br
      input(type='text' v-model='title')

      input(type='submit' value='Save')
</template>

<script>
export default {
  name: 'SongNew',
  data () {
    return {
      title: null
    }
  },
  methods: {
    saveSong () {
      // this.$store.dispatch('saveSong', {
      //   title: this.title,
      //   body: this.body,
      //   published: this.published
      // })
    }
    // async addImage (evt) {
    //   let file = evt.attachment.file
    //   let form = new FormData()
    //   form.append('Content-Type', file.type)
    //   form.append('image', file)
    //   const resp = await this.$store.dispatch('imageUpload', form)
    //   evt.attachment.setUploadProgress(100)
    //   console.log(resp)
    //   evt.attachment.setAttributes({
    //     url: resp.data.url,
    //     href: resp.data.url
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>

</style>
