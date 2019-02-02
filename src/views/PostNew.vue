<template lang="pug">
  div
    h2 new post
    hr
    form(@submit.prevent='savePost')
      br
      label Title
      br
      input(type='text' v-model='title')
      br
      br
      label Body
      br
      .editor
        VueTrix(v-model='body' @trix-attachment-add='addImage' placeholder="Enter content" class="trix-content")
      br
      br
      input(type='checkbox' v-model='published')
      label &nbsp; Publish?
      br
      br
      input(type='submit' value='Save')

</template>

<script>
import VueTrix from 'vue-trix'
export default {
  name: 'PostNew',
  components: { VueTrix },
  data () {
    return {
      title: '',
      body: '',
      published: false
    }
  },
  methods: {
    savePost () {
      this.$store.dispatch('savePost', {
        title: this.title,
        body: this.body,
        published: this.published
      })
    },
    async addImage (evt) {
      let file = evt.attachment.file
      let form = new FormData()
      form.append('Content-Type', file.type)
      form.append('image', file)
      const resp = await this.$store.dispatch('imageUpload', form)
      evt.attachment.setUploadProgress(100)
      console.log(resp)
      evt.attachment.setAttributes({
        url: resp.data.url,
        href: resp.data.url
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .editor {
    background: #fff;
    padding: .5rem;
    border-radius: .2rem;
    color: #383838;
  }
</style>
