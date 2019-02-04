<template lang="pug">
div
  audio(controls='')
    source(:src='url' type='audio/mpeg')
</template>

<script>
export default {
  name: 'SongPlayer',
  props: ['url']
}
</script>
