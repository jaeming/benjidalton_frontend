import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/config/axios'
import Routes from '@/config/routes'
import router from '@/router'
import {Auth} from '@/lib/auth.js'

Vue.use(Vuex)

const headers = {
  formdata: {headers: {'Content-Type': 'multipart/form-data'}}
}

export default new Vuex.Store({
  state: {
    posts: [],
    songs: [],
    messages: [],
    user: {
      token: null,
      name: String,
      email: String,
      id: Number
    }
  },

  getters: {
    userPresent (state) {
      return state.user.token
    },
    user (state) {
      return state.user
    }
  },

  mutations: {
    storePosts (state, payload) {
      state.posts = payload
    },
    addPost (state, post) {
      state.posts.push(post)
    },
    removePost (state, slug) {
      const index = state.posts.findIndex(post => post.slug === slug)
      state.posts.splice(index, 1)
    },
    setUser (state, user) {
      state.user = user
    },
    setSongs (state, songs) {
      state.songs = songs
    },
    addSong (state, song) {
      state.songs.push(song)
    },
    setMessages (state, messages) {
      state.messages = messages
    },
    updateMessage (state, message) {
      const index = state.messages.findIndex(m => m.id === message.id)
      state.messages.splice(index, 1, message)
    }
  },

  actions: {
    async login (context, payload) {
      try {
        const resp = await axios.post(Routes.login, payload)
        Auth.local.save(resp.data)
        router.push({name: 'home'})
      } catch (err) {
        if (err.response) {
          alert(err.response.data.error)
        } else {
          console.log(err)
          alert('something went wrong')
        }
      }
    },
    async register (context, payload) {
      const resp = await axios.post(Routes.register, payload)
      Auth.local.save(resp.data)
      router.push({name: 'home'})
    },
    fetchPosts (context) {
      axios.get(Routes.posts).then(resp => {
        context.commit('storePosts', resp.data)
      })
    },
    fetchPost (context, slug) {
      let url = Routes.post(slug)
      return axios.get(url)
    },
    async savePost (context, payload) {
      try {
        const post = await axios.post(Routes.posts, payload)
        context.commit('addPost', post)
        router.push({name: 'home'})
      } catch (error) {
        console.log(error)
        router.push({name: 'Login'})
      }
    },
    async deletePost (context, slug) {
      try {
        await axios.delete(Routes.post(slug))
        context.commit('removePost', slug)
        router.push({name: 'home'})
      } catch (error) {
        console.log(error)
        alert('Delete failed.')
      }
    },
    async updatePost (context, payload) {
      try {
        await axios.patch(Routes.post(payload.slug), payload)
        router.push({name: 'home'})
      } catch (error) {
        console.log(error)
        alert('Update failed.')
      }
    },
    imageUpload (context, payload) {
      return axios.post(
        Routes.images(),
        payload,
        headers.formdata
      )
    },
    fetchPhotos (context) {
      return axios.get(Routes.images('flickr'))
    },
    uploadSong (context, payload) {
      return axios.post(
        Routes.songs(),
        payload,
        headers.formdata
      )
    },
    async fetchSongs (context) {
      const resp = await axios.get(Routes.songs())
      context.commit('setSongs', resp.data)
    },
    async fetchSong (context, slug) {
      const resp = await axios.get(Routes.songs(slug))
      return resp.data
    },
    sendMessage (context, payload) {
      return axios.post(Routes.messages(), payload)
    },
    async fetchMessages (context) {
      const resp = await axios.get(Routes.messages())
      context.commit('setMessages', resp.data)
    },
    async fetchMessage (context, id) {
      const resp = await axios.get(Routes.messages(id))
      return resp.data
    },
    async updateMessage (context, payload) {
      const resp = await axios.put(Routes.messages(payload.id), payload)
      context.commit('updateMessage', resp.data)
    }
  }
})
