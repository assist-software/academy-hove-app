import axios from 'axios'

const fetchProperties = async () => {
  try {
    const { data } = await axios.get('/path-to-properties')
    return data
  } catch (error) {
    console.log('error:', error)
  }
}

export const ShowroomAPIService = {
  fetchProperties,
}
