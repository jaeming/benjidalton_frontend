<template lang="pug">
form(@submit.prevent='savePost')
  br
  label Title
  br
  input(type='text' v-model='title')
  br
  br
  label Body
  br
  .editor(v-if='!edit || body.length')
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
  name: 'PostForm',
  props: ['action'],
  components: { VueTrix },
  data () {
    return {
      title: '',
      body: '',
      published: false
    }
  },
  computed: {
    edit () { return this.action === 'edit' }
  },
  async mounted () {
    if (this.edit) {
      const slug = this.$route.params.slug
      const resp = await this.$store.dispatch('fetchPost', slug)
      const {title, body, published} = resp.data
      console.log(body)
      this.title = title
      this.body = body
      this.published = published
    }
  },
  methods: {
    savePost () {
      let dispatcher = 'savePost'
      const params = {
        title: this.title,
        body: this.body,
        published: this.published
      }
      if (this.edit) {
        dispatcher = 'updatePost'
        params.slug = this.$route.params.slug
      }
      this.$store.dispatch(dispatcher, params)
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
  // .editor {
  //   background: #fff;
  //   padding: .5rem;
  //   border-radius: .2rem;
  //   color: #383838;
  // }
</style>
