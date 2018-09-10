<template lang="pug">
  div
    h2 posts
    div(v-for='post in posts')
      article
        hr
        h3
          router-link(:to='{name: "post", params: {slug: post.slug}}')
            | {{post.title}}
        p {{post.preview}}
        small {{post.date}}
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('fetchPosts')
  },
  name: 'post-list',
  computed: {
    posts () {
      return this.$store.state.posts
    }
  }
}
</script>
