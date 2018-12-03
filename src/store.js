import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Routes from '@/config/routes'
import router from '@/router'
import jwt from 'jsonwebtoken'

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
    }
  },

  mutations: {
    storePosts (state, payload) {
      state.posts = payload
    },
    setUser (state, token) {
      var decoded = jwt.decode(token)
      const user = {...decoded, token}
      console.log('decoded', user)
      localStorage.setItem('user', user)
      state.user = user
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
    }
  }
})
