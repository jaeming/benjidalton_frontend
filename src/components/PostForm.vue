<template lang="pug">
form(@submit.prevent='savePost')
  b-field(label='Title')
    b-input(v-model='title' required)
  b-field(label='Summary')
    b-input(type='textarea' v-model='summary' required)
  b-field(label='Body')
    .editor(v-if='!edit || body.length')
      VueTrix(v-model='body' @trix-attachment-add='addImage' placeholder="Enter content" class="trix-content")
  b-field(label='Published')
    b-checkbox(v-model='published')
  input.button.is-primary(type='submit' value='Save')
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
      summary: '',
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
      const post = resp.data
      this.title = post.title
      this.summary = post.summary
      this.body = post.body
      this.published = post.published
    }
  },
  methods: {
    savePost () {
      let dispatcher = 'savePost'
      const params = {
        title: this.title,
        summary: this.summary,
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
  .editor {
    background: #fff;
    padding: .5rem;
    border: 1px solid #ccc;
    border-radius: .2rem;
    color: #383838;
  }
  form {
    border: 1px solid #ccc;
    padding: 2rem;
    background: #f1f1f1;
    border-radius: .2rem;
  }
</style>
