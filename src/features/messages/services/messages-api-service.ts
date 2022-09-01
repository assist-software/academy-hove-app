import axios from 'axios'

const getMessages = async () => {
  try {
    const { data } = await axios({
      method: 'get',
      baseURL: process.env.BASE_PATH,
      url: 'messages',
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

const sendNewMessages = async (proprety: object) => {
  try {
    const { data } = await axios({
      method: 'messages',
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

export const MessagesAPIService = {
  sendNewMessages,
  getMessages,
}
