import jwtDecode from 'jwt-decode'
import store from '../store'

const UserInterface = {
  token: null,
  name: String,
  email: String,
  id: Number
}

const Auth = {

  currentUser () {
    return Auth.loggedIn() ? store.getters.user : Auth.local.find()
  },

  loggedIn () {
    const user = store.getters.user
    return user && user.token
  },

  local: {
    find () {
      const user = localStorage.getItem('user')
      if (user) {
        const token = JSON.parse(user).token
        Auth.local.save(token)
      }
      return store.getters.user
    },

    remove () {
      localStorage.removeItem('user')
      store.commit('setUser', UserInterface)
    },

    save (token) {
      const decoded = jwtDecode(token)
      const user = {...decoded, token}
      localStorage.setItem('user', JSON.stringify(user))
      store.commit('setUser', user)
    }
  }
}

export {Auth, UserInterface}
