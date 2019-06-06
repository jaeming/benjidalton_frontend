<template lang='pug'>
#home
  .columns.is-centered
    .column.is-half
      PostList
</template>

<script>
import PostList from '@/components/PostList.vue'
export default {
  name: 'home',
  components: {
    PostList
  }
}
</script>
