<template lang="pug">
.section
  .container
    h2.title New Song
    .columns
      .column.is-6
        form(enctype='multipart/form-data', novalidate='', v-if='isInitial || isSaving')
          .upload-content
            input.input-file(
              type='file',
              multiple='',
              :name='uploadFieldName',
              :disabled='isSaving',
              @change='filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length',
              accept='mp3/*'
            )
            div(v-if='isInitial')
              p Drag your mp3s here
              p or click to browse
            div(v-if='isSaving')
              p Uploading {{fileCount}} files...
        div(v-if='isSuccess')
          h2 Uploaded {{uploadedFiles.length}} file(s) successfully.
          p
            button(@click='reset()') Upload again
          ul.list-unstyled
            li(v-for='item in uploadedFiles')
              | {{item.name}}

        div(v-if='isFailed')
          h2.error Uploaded failed.
          button(@click='reset()') Try again
          br
          small {{uploadError}}
</template>

<script>

export default {
  name: 'SongNew',
  data () {
    return {
      uploadedFiles: [],
      currentStatus: null,
      uploadFieldName: 'songs'
    }
  },
  computed: {
    isInitial () {
      return this.currentStatus === 'initial'
    },
    isSaving () {
      return this.currentStatus === 'saving'
    },
    isSuccess () {
      return this.currentStatus === 'success'
    },
    isFailed () {
      return this.currentStatus === 'failed'
    }
  },
  methods: {
    reset () {
      this.currentStatus = 'initial'
      this.uploadedFiles = []
      this.uploadError = null
    },
    async save (formData) {
      this.currentStatus = 'saving'
      try {
        const resp = await this.$store.dispatch('uploadSong', formData)
        this.uploadedFiles = resp.data
        this.currentStatus = 'success'
      } catch (err) {
        this.uploadError = err.response || err
        this.currentStatus = 'failed'
      }
    },
    filesChange (fieldName, fileList) {
      const formData = new FormData()

      if (!fileList.length) return

      Array
        .from(Array(fileList.length).keys())
        .map(x => {
          formData.append(fieldName, fileList[x], fileList[x].name)
        })

      this.save(formData)
    }
  },
  mounted () {
    this.reset()
  }
}
</script>

<style lang="scss" scoped>
  .upload-content {
    outline: 2px dashed grey;
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px;
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0;
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue;
  }

  p {
    font-size: 1.1em;
    text-align: center;
    padding: 1rem 0;
  }

  .error {
    color: tomato;
    font-weight: bold;
  }
</style>
