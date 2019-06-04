<template lang="pug">
  div
    h2 edit post
    PostForm(action='edit')
</template>

<script>
import PostForm from '@/components/PostForm'
export default {
  name: 'PostEdit',
  components: { PostForm }
}
</script>
