import { makeAutoObservable } from 'mobx'

import { MessagesAPIService } from 'features/messages/services/messages-api-service'

export class MessagesStore {
  allMessages: any = []

  constructor() {
    makeAutoObservable(this)
  }

  setAllMessages = async () => {
    const properties = await MessagesAPIService.getMessages
    this.allMessages(properties)
  }
}
