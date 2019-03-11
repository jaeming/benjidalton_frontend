const isProd = process.env.NODE_ENV === 'production'
const host = isProd ? 'https://api.benjidalton.com/' : 'http://localhost:3000/'

export default class Routes {
  static get posts () {
    return `${host}posts`
  }
  static post (slug) {
    return `${host}posts/${slug}`
  }
  static get login () {
    return `${host}sessions`
  }
  static get register () {
    return `${host}users`
  }
  static images (opts = '') {
    return `${host}images/${opts}`
  }
  static songs (slug = '') {
    return `${host}songs/${slug}`
  }
  static messages (id = '') {
    return `${host}messages/${id}`
  }
}
