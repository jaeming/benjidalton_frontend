import Vue from 'vue'
import Router from 'vue-router'
import { Auth } from '@/lib/auth.js'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Photos from './views/Photos.vue'
import Post from './views/Post.vue'
import PostEdit from './views/PostEdit.vue'
const PostNew = () => import('./views/PostNew.vue')
const SongNew = () => import('./views/SongNew.vue')

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
      path: '/photos',
      name: 'photos',
      component: Photos
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
    },
    {
      path: '/song/new',
      name: 'SongNew',
      component: SongNew,
      beforeEnter: (to, from, next) => {
        if (Auth.loggedIn()) { next() }
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  Auth.currentUser()
  next()
})

export default router
