import axios from 'axios'

const getUserDetails = async () => {
  try {
    const { data } = await axios({
      method: 'get',
      baseURL: process.env.BASE_PATH,
      url: 'property',
      headers: {
        authorization: `Bearer`,
        accept: 'application/json',
      },
    })
    return data
  } catch (err) {
    return err
  }
}

const updateUserDetails = async (userDetails: object) => {
  try {
    const { data } = await axios({
      method: 'post',
      baseURL: process.env.BASE_PATH,
      url: 'property',
      headers: {
        authorization: `Bearer`,
        accept: 'application/json',
      },
      data: userDetails,
    })
    return data
  } catch (err) {
    return err
  }
}

export const ProfileAPIService = {
  getUserDetails,
  updateUserDetails,
}
