<template lang="pug">
.section
  .container
    article(v-for='post in posts')
      router-link.summary(:to='{name: "post", params: {slug: post.slug}}')
        h3.title.headline {{post.title}}
        p {{post.summary}}
        small.author By {{post.author}} on {{ post.date | moment("MMMM Do YYYY") }}

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
  margin: 2rem 0 4rem 0;
  padding: 0 0.8rem;
  border-left: 0.8rem solid #e6e6e6;
  &:hover {
    background: #fff;
    cursor: pointer;
    .title {
      transition: color ease-out 240ms;
      color: #327e7a !important;
    }
  }
}
.headline.title {
  font-size: 2.8rem;
  color: #3e3e3e;
  display: block;
  margin-bottom: 0.9rem !important;
}
.summary {
  p {
    font-size: 1.2rem;
    color: #363636;
  }
}
.author {
  display: inline-block;
  margin-top: .8rem;
  color: #848484;
}
</style>
