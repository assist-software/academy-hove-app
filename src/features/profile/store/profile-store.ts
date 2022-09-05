import { makeAutoObservable } from 'mobx'

export class ProfileStore {
  propertiesUser: {} = {}

  constructor() {
    makeAutoObservable(this)
  }

  setPropertiesUser = (properties: []) => {
    this.propertiesUser = properties
  }
}
