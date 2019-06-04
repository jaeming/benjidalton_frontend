<template lang="pug">
div
  p You're roles are:
  ul
    li(v-for='role in user.roles') {{role}}
  router-link(:to='{name: "PostNew"}' v-if='user.roles.includes("admin")')
    button New Post
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Admin',
  computed: {
    ...mapState(['user'])
  }
}
</script>
