import { makeAutoObservable } from 'mobx'

import { ShowroomAPIService } from '../../showroom/services/showroom-api-service'

export class ShowroomStore {
  propertiesLatest: [] = []
  propertiesSmall: [] = []
  propertiesLarge: [] = []

  constructor() {
    makeAutoObservable(this)
  }

  loadProperties = async () => {
    const properties = await ShowroomAPIService.fetchProperties()
    this.setPropertiesLatest(properties)
  }

  setPropertiesLatest = (properties: []) => {
    this.propertiesLatest = properties
  }
}
