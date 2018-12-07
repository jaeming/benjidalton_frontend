import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/config/axios'
import Routes from '@/config/routes'
import router from '@/router'
import jwt from 'jsonwebtoken'

Vue.use(Vuex)

const userInterface = {
  token: null,
  name: String,
  email: String,
  id: Number
}

export default new Vuex.Store({
  state: {
    posts: [],
    user: userInterface
  },

  getters: {
    userPresent (state) {
      return state.user.token
    }
  },

  mutations: {
    storePosts (state, payload) {
      state.posts = payload
    },
    setUser (state, token) {
      if (token) {
        const decoded = jwt.decode(token)
        const user = {...decoded, token}
        localStorage.setItem('user', JSON.stringify(user))
        state.user = user
      } else {
        localStorage.removeItem('user')
        state.user = userInterface
      }
    },
    addPost (state, post) {
      state.posts.push(post)
    },
    removePost (state, slug) {
      const index = state.posts.findIndex(post => post.slug === slug)
      state.posts.splice(index, 1)
    }
  },

  actions: {
    async login (context, payload) {
      try {
        const resp = await axios.post(Routes.login, payload)
        context.commit('setUser', resp.data)
        router.push({name: 'home'})
      } catch (err) {
        console.log(err)
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
    }
  }
})
