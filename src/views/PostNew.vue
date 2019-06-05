<template lang="pug">
  .section
    .container
      h2.title new post
      PostForm(action='create')
</template>

<script>
import PostForm from '@/components/PostForm'
export default {
  name: 'PostNew',
  components: { PostForm }
}
</script>
