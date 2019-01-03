import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/config/axios'
import Routes from '@/config/routes'
import router from '@/router'
import {Auth} from '@/lib/auth.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
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
          alert(err.response.data.msg)
        } else {
          console.log(err)
          alert('something went wrong')
        }
      }
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
    }
  }
})
