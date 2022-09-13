import axios from 'axios'
import { HttpMethods } from 'common/constants/constants'

const getData = async (): Promise<any> => {
  try {
    const { data } = await axios({
      method: HttpMethods.GET,
      baseURL: '',
      url: ``,
      headers: {
        authorization: `Bearer `,
        accept: 'application/json',
      },
    })
    return data
  } catch (err) {
    return err
  }
}

export const TaskManagerAPI = {
  getData,
}
