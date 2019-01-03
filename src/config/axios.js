import axios from 'axios'

let instance = axios.create()

const user = localStorage.getItem('user')
if (user) {
  const token = JSON.parse(user).token
  instance.defaults.headers.common.Authorization = token
}

export default instance
