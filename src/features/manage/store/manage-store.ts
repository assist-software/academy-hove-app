import { makeAutoObservable } from 'mobx'
import { ManageAPIService } from 'features/manage/services/manage-api-service'

export class ManageStore {
  publishProprety: any = {}

  constructor() {
    makeAutoObservable(this)
  }

  loadPublishProprety = async () => {
    const properties = await ManageAPIService.getPublishProprety
    this.publishProprety(properties)
  }
}
