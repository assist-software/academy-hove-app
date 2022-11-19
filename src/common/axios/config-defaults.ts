import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_PATH,
  headers: {
    accept: 'application/json',
  },
})

//instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`

export default instance
