import { makeAutoObservable } from 'mobx'

import { IPropertyLite } from 'features/showroom/models/showroom-models'
import { ShowroomAPIService } from 'features/showroom/services/showroom-api-service'

export class ShowroomStore {
  propertiesLatest: Array<IPropertyLite> = []
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
