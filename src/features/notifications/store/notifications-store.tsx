import { makeAutoObservable } from 'mobx'
import { INotificationSettings, notificationStatus, notificationTypes } from '../models/notifications-models'

export class NotificationsStore {
  notificationSettings: INotificationSettings = {
    newsNotification: { email: false, sms: false },
    discountNotifications: { email: false, sms: false },
    messagesNotifications: { email: false, sms: false },
    newListingsNotifications: { email: false, sms: false },
    priceChangeNotifications: { email: false, sms: false },
  }

  editModal: notificationTypes | null = null

  get editModalData() {
    if (this.editModal) return this.notificationSettings[this.editModal]
    return { email: false, sms: false }
  }

  constructor() {
    makeAutoObservable(this)
  }

  setSetting = ({ setting, value }: { setting: notificationTypes; value: notificationStatus }) => {
    this.notificationSettings = { ...this.notificationSettings, [setting]: value }
  }

  setEditModal = (state: notificationTypes | null) => {
    this.editModal = state
  }
}
