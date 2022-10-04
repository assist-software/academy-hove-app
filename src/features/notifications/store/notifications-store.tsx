import { makeAutoObservable } from 'mobx'

import { UPDATE_TIME_OUT } from 'features/notifications/constants/notifications-constants'
import {
  INotificationSettings,
  notificationStatus,
  notificationTypes,
} from 'features/notifications/models/notifications-models'
import { notificationsUpdateService } from 'features/notifications/services/notifications-update-service'

export class NotificationsStore {
  notificationSettings: INotificationSettings = {
    NEWS_NOTIFICATIONS: { email: false, sms: false },
    DISCOUNT_NOTIFICATIONS: { email: false, sms: false },
    MESSAGES_NOTIFICATIONS: { email: false, sms: false },
    NEW_LISTINGS_NOTIFICATIONS: { email: false, sms: false },
    PRICE_CHANGE_NOTIFICATIONS: { email: false, sms: false },
  }

  editModal: notificationTypes | null = null

  notificationsUpdateTimer: NodeJS.Timer | undefined

  get editModalData() {
    if (this.editModal) return this.notificationSettings[this.editModal]
    return { email: false, sms: false }
  }

  constructor() {
    makeAutoObservable(this)
  }

  setSetting = ({ setting, value }: { setting: notificationTypes; value: notificationStatus }) => {
    this.notificationSettings = { ...this.notificationSettings, [setting]: value }

    if (this.notificationsUpdateTimer) clearTimeout(this.notificationsUpdateTimer)
    this.notificationsUpdateTimer = setTimeout(() => {
      notificationsUpdateService(this.notificationSettings)
    }, UPDATE_TIME_OUT)
  }

  setEditModal = (state: notificationTypes | null) => {
    this.editModal = state
  }
}
