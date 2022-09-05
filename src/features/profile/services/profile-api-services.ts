import axios from 'axios'
import 'common/axios/config-defaults'

const getUserDetails = async () => {
  try {
    const { data } = await axios({
      method: 'get',
      url: 'property',
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
      url: 'property',
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
