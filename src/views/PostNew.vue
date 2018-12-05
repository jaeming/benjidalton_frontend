<template lang="pug">
  div
    h2 new post
    hr
    form(@submit.prevent='savePost')
      br
      label Title
      br
      input(type='text' v-model='title')
      br
      br
      label Body
      br
      textarea(v-model='body')
      br
      br
      input(type='checkbox' v-model='published')
      label &nbsp; Publish?
      br
      br
      input(type='submit' value='Save')

</template>

<script>
export default {
  name: 'PostNew',
  data () {
    return {
      title: '',
      body: '',
      published: false
    }
  },
  methods: {
    savePost () {
      this.$store.dispatch('savePost', {
        title: this.title,
        body: this.body,
        published: this.published
      })
    }
  }
}
</script>
