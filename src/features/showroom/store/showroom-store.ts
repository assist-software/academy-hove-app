import { makeAutoObservable } from 'mobx'

import { IAllProperty } from 'features/showroom/models/showroom-models'
import { ShowroomAPIService } from 'features/showroom/services/showroom-api-service'

export class ShowroomStore {
  properties: IAllProperty = {
    latest: [],
    big: [],
    small: [],
  }
  status: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  setProperties = async () => {
    try {
      this.status = 'loading'
      const properties = await ShowroomAPIService.getAllProperties()
      this.properties = properties
      this.status = 'succeeded'
    } catch (error) {
      console.log(error)
    }
  }
}
