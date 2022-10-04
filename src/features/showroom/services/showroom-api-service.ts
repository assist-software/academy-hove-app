import axios from 'axios'

import { HTTP_METHODS } from 'common/constants/constants'

const fetchProperties = async () => {
  try {
    const { data } = await axios({
      method: HTTP_METHODS.GET,
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

const addToFavorite = async (idProprety: string) => {
  try {
    const { data } = await axios({
      method: HTTP_METHODS.POST,
      baseURL: process.env.BASE_PATH,
      url: 'property',
      headers: {
        authorization: `Bearer`,
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: idProprety,
    })
    return data
  } catch (err) {
    return err
  }
}

const deleteProprety = async (idProprety: string): Promise<any> => {
  try {
    const { data } = await axios({
      method: HTTP_METHODS.DELETE,
      baseURL: process.env.REACT_APP_TASK_MANAGER_BASE_PATH,
      url: `proprety/delete/?id=${idProprety}`,
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

export const ShowroomAPIService = {
  fetchProperties,
  deleteProprety,
  addToFavorite,
}
