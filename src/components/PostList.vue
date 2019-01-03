<template lang="pug">
  div
    h2 posts
    .container(v-for='post in posts')
      article.entry
        h3.post-title
          router-link(:to='{name: "post", params: {slug: post.slug}}')
            | {{post.title}}
        p {{post.preview}}
        small {{post.date}}
</template>

<script>
export default {
  created () {
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
