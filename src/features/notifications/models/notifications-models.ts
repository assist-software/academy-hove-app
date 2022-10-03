export type notificationStatus = { email: boolean; sms: boolean }

export type notificationTypes =
  | 'NEWS_NOTIFICATIONS'
  | 'DISCOUNT_NOTIFICATIONS'
  | 'MESSAGES_NOTIFICATIONS'
  | 'NEW_LISTINGS_NOTIFICATIONS'
  | 'PRICE_CHANGE_NOTIFICATIONS'

export type INotificationSettings = {
  // I suppress next line with eslint-disable-next-line because key not currently used
  // eslint-disable-next-line no-unused-vars
  [key in notificationTypes]: notificationStatus
}
