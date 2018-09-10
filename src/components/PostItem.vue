<template lang="pug">
  div
    h2 {{post.title}}
    p {{post.body}}
</template>

<script>
export default {
  props: ['post'],
  name: 'post-item',
  created () {
    this.getPost()
  },
  data: () => ({
    post: {}
  }),
  methods: {
    getPost () {
      this.$store.dispatch('fetchPost', this.$route.params.slug)
        .then(resp => {
          this.post = resp.data
        })
    }
  }
}
</script>
