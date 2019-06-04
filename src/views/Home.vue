<template lang='pug'>
.home
  div(v-if='userPresent')
    p you are logged in as {{user.name}}
    router-link(:to='{name: "admin"}' v-if='user.roles.includes("admin")')
      button Admin
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
