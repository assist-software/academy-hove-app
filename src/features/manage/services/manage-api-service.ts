import axios from 'axios'

const getPublishProprety = async () => {
  try {
    const { data } = await axios({
      method: 'get',
      baseURL: process.env.BASE_PATH,
      url: 'post',
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

const updatePublishProprety = async (proprety: object) => {
  try {
    const { data } = await axios({
      method: 'post',
      baseURL: process.env.BASE_PATH,
      url: 'property',
      headers: {
        authorization: `Bearer`,
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: proprety,
    })
    return data
  } catch (err) {
    return err
  }
}

export const ManageAPIService = {
  getPublishProprety,
  updatePublishProprety,
}
