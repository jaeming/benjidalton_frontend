<template lang="pug">
.section
  .container
    article(v-for='post in posts')
      router-link.summary(:to='{name: "post", params: {slug: post.slug}}')
        h3.title.headline {{post.title}}
        .trix-content
          p(v-html='post.summary')
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

<style lang="scss">
article {
  margin: 4rem 0;
  padding: 0 0.8rem;
  border-left: 0.4rem solid #eea9a9;
  &:hover {
    background: #fff;
    cursor: pointer;
    .title {
      transition: color ease-out 240ms;
      color: #327e7a !important;
    }
  }
}
.headline {
  color: #4a4a4a;
  display: block;
  margin-bottom: 0.7rem;
}
.summary {
  p {
    color: #363636;
  }
}
</style>
