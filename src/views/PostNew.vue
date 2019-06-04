<template lang="pug">
  div
    h2 new post
    hr
    PostForm(action='create')
</template>

<script>
import PostForm from '@/components/PostForm'
export default {
  name: 'PostNew',
  components: { PostForm }
}
</script>
