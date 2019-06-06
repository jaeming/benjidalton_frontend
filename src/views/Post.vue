<template lang='pug'>
  .section
    .container
      .columns.is-centered
        .column
          PostItem
</template>
<script>
import PostItem from '@/components/PostItem.vue'
export default {
  name: 'post',
  components: {
    PostItem
  }
}
</script>
