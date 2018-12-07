<template lang="pug">
  div
    div(v-if='userPresent && user.roles.includes("admin")')
      button(@click='deletePost(post.slug)') Delete
      div(v-if='deleted') Your post has been deleted
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
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['userPresent'])
  }
}
</script>
