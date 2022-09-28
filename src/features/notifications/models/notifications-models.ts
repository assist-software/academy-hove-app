export type notificationStatus = { email: boolean; sms: boolean }

export type notificationTypes =
  | 'newsNotification'
  | 'discountNotifications'
  | 'messagesNotifications'
  | 'newListingsNotifications'
  | 'priceChangeNotifications'

export type INotificationSettings = {
  // I suppress next line with eslint-disable-next-line because key not currently used
  // eslint-disable-next-line no-unused-vars
  [key in notificationTypes]: notificationStatus
}
