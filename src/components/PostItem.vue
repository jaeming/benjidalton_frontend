<template lang="pug">
div
  .admin-actions(v-if='userPresent && user.roles.includes("admin")')
    button.button.is-danger(@click='deletePost(post.slug)') Delete
    router-link(:to='{name: "PostEdit", params: post.slug}')
      button.button.is-primary Update
  .box
    .content
      .section-title.has-text-centered {{post.title}}
      hr
      .trix-content
        div(v-html='post.body')
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
.admin-actions {
  margin-bottom: 1rem;
  button {
    margin: 0 .4rem;
  }
}
.title {
  color: #3e3e3e;
  font-size: 3rem;
  margin: 1.6rem 0 2rem 0 !important;
}
.trix-content {
  font-size: 1.1rem;
  line-height: 1.9;
}
.content {
  padding: 0 2.6rem;
}
</style>
