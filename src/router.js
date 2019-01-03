import Vue from 'vue'
import Router from 'vue-router'
import { Auth } from '@/lib/auth.js'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import About from './views/About.vue'
import Post from './views/Post.vue'
import PostNew from './views/PostNew.vue'
import PostEdit from './views/PostEdit.vue'

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
      component: PostNew,
      beforeEnter: (to, from, next) => {
        if (Auth.loggedIn()) { next() }
      }
    },
    {
      path: '/post/edit/:slug',
      name: 'PostEdit',
      component: PostEdit
    }
  ]
})

router.beforeEach((to, from, next) => {
  Auth.currentUser()
  next()
})

export default router
