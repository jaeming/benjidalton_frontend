<template lang="pug">
  div
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
