export type notificationStatus = { email: boolean; sms: boolean }

export type notificationTypes =
  | 'newsNotification'
  | 'discountNotifications'
  | 'messagesNotifications'
  | 'newListingsNotifications'
  | 'priceChangeNotifications'

export type INotificationSettings = {
  [key in notificationTypes]: notificationStatus
}
