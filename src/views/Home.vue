<template lang='pug'>
  .home
    div(v-if='userPresent')
      p you are logged in as {{user.name}}
      p You're roles are:
        ul
          li(v-for='role in user.roles') {{role}}
        router-link(:to='{name: "PostNew"}' v-if='user.roles.includes("admin")')
          button New Post
    PostList
</template>

<script>
import PostList from '@/components/PostList.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'home',
  components: {
    PostList
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['userPresent'])
  }
}
</script>
