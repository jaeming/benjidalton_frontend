import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Routes from '@/config/routes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    storePosts (state, payload) {
      state.posts = payload
    }
  },
  actions: {
    async login (context, payload) {
      try {
        const resp = await axios.post(Routes.login, payload)
        console.log(resp)
      } catch (err) {
        alert("that didn't work out...")
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
