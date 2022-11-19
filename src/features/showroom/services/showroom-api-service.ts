import axios from 'axios'

import instance from 'common/axios/config-defaults'
import { HTTP_METHODS } from 'common/constants/constants'

const getAllProperties = async (): Promise<any> => {
  try {
    const { data } = await instance({
      method: HTTP_METHODS.GET,
      url: 'houses.json',
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
  getAllProperties,
  deleteProprety,
  addToFavorite,
}
