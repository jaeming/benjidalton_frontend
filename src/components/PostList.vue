<template lang="pug">
  div
    h2 posts
    div(v-for='post in posts')
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

<style lang="scss" scoped>
.entry {
  padding: 1rem;
  margin: 1.2rem auto;
  background: rgba(37, 37, 37, 0.418);
  color: whitesmoke;
}
.post-title {
  margin-bottom: 1rem;
  a {
    font-size: 1.5rem;
    font-family: Montserrat;
    color: #fff;
  }
}
</style>
