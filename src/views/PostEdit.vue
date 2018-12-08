<template lang="pug">
  div
    h2 new post
    hr
    form(@submit.prevent='updatePost')
      br
      label Title
      br
      input(type='text' v-model='title')
      br
      br
      label Body
      br
      textarea(v-model='body')
      br
      br
      input(type='checkbox' v-model='published')
      label &nbsp; Publish?
      br
      br
      input(type='submit' value='Save')

</template>

<script>
export default {
  name: 'PostEdit',
  async mounted () {
    const slug = this.$route.params.slug
    const resp = await this.$store.dispatch('fetchPost', slug)
    const {title, body, published} = resp.data
    this.title = title
    this.body = body
    this.published = published
  },
  data () {
    return {
      title: '',
      body: '',
      published: false
    }
  },
  methods: {
    updatePost () {
      this.$store.dispatch('updatePost', {
        title: this.title,
        body: this.body,
        published: this.published,
        slug: this.$route.params.slug
      })
    }
  }
}
</script>
