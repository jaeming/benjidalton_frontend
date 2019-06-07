<template lang="pug">
div(v-if='user')
  .section
    .container
      .columns.is-centered
        .column.is-one-third
          .notification.is-primary(v-if='showRoles')
            button.delete(@click='showRoles = false')
            h3.small-title You're roles are:
            ul
              li(v-for='role in user.roles') {{role}}
  .section
    .container
      h2.small-title Posts
      router-link(:to='{name: "PostNew"}' v-if='user.roles.includes("admin")')
        button New Post
      h2.small-title songs
      router-link(:to='{name: "SongNew"}' v-if='user.roles.includes("admin")')
        button New Song

</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Admin',
  computed: {
    ...mapState(['user'])
  },
  data () {
    return {
      showRoles: true
    }
  }
}
</script>
