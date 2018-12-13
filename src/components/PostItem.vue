<template lang="pug">
  .entry
    div(v-if='userPresent && user.roles.includes("admin")')
      button(@click='deletePost(post.slug)') Delete
      | &nbsp; &nbsp;
      router-link(:to='{name: "PostEdit", params: post.slug}')
        button Update
    h2 {{post.title}}
    p {{post.body}}
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'post-item',
  created () {
    this.getPost()
  },
  data: () => ({
    post: {}
  }),
  methods: {
    async getPost () {
      const slug = this.$route.params.slug
      const resp = await this.$store.dispatch('fetchPost', slug)
      this.post = resp.data
    },
    deletePost (slug) {
      this.$store.dispatch('deletePost', slug)
    },
    updatePost (slug) {
      this.$store.dispatch('updatePost', slug)
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['userPresent'])
  }
}
</script>

<style lang="scss" scoped>
.entry {
  margin: 5rem auto;
  max-width: 800px;
  box-shadow: -2px -1px 33px 3px rgba(56,56,56,0.52);
}
</style>
