import axios from 'axios'

axios.interceptors.response.use(
  function (response) {
    console.log(`Successfully response! Endpoint: ${response.config.url}`)
    console.log(response)
    return response
  },
  function (error) {
    console.log(`${error.message}! Endpoint: ${error.url}`)
    return Promise.reject(error)
  },
)
