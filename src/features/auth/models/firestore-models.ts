type notificationObj = { email: boolean; sms: boolean }

export interface NotificationStoreData {
  discountNotifications: notificationObj
  messagesNotifications: notificationObj
  newListingsNotifications: notificationObj
  newsNotification: notificationObj
  priceChangeNotifications: notificationObj
}

export interface UserIDDoc extends NotificationStoreData {
  imageURL: string
}
