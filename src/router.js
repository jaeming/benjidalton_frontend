import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import About from './views/About.vue'
import Post from './views/Post.vue'
import PostNew from './views/PostNew.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/posts/:slug',
      name: 'post',
      component: Post
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/post/new',
      name: 'PostNew',
      component: PostNew
    }
  ]
})

const getUser = () => {
  if (!store.getters.userPresent) {
    const user = localStorage.getItem('user')
    if (user) {
      const token = JSON.parse(user).token
      store.commit('setUser', token)
    }
  }
}

router.beforeEach((to, from, next) => {
  getUser()
  next()
})

export default router
