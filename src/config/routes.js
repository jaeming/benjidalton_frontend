const host = 'http://localhost:3030/'
const prefix = 'api/'

export default class Routes {
  static get posts () {
    return `${host}${prefix}posts`
  }
  static post (slug) {
    return `${host}${prefix}posts/${slug}`
  }
  static get login () {
    return `${host}${prefix}sessions`
  }
}
