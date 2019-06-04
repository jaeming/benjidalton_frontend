import Vue from 'vue'
import Router from 'vue-router'
import { Auth } from '@/lib/auth.js'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Photos from './views/Photos.vue'
import Contact from './views/Contact.vue'
import Songs from './views/Songs.vue'
import Song from './views/Song.vue'
import Post from './views/Post.vue'
import PostEdit from './views/PostEdit.vue'
import Messages from './views/Messages.vue'
import Message from './views/Message.vue'
import Admin from './views/Admin.vue'
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
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/photos',
      name: 'photos',
      component: Photos
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/posts/:slug',
      name: 'post',
      component: Post
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
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/:slug',
      name: 'song',
      component: Song,
      props: true
    },
    {
      path: '/messages',
      name: 'messages',
      component: Messages
    },
    {
      path: '/message/:id',
      name: 'message',
      component: Message,
      props: true
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})

router.beforeEach((to, from, next) => {
  Auth.currentUser()
  next()
})

export default router
