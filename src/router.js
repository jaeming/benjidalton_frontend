import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import About from './views/About.vue'
import Post from './views/Post.vue'
import PostNew from './views/PostNew.vue'

Vue.use(Router)

export default new Router({
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
