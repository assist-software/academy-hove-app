export const PAGES_PATHS = {
  LOG_IN: '/login',
  SIGN_UP: '/signup',
  HOME: '/',
  RESET_PASS: '/reset-password',
  SETTINGS: '/settings/',
  PROFILE: 'profile',
  SECURITY: 'security',
  NOTIFICATIONS: 'notifications',
  MESSAGES: 'messages',
}

export const ButtonLables = {
  approve: 'Approve',
  delete: 'Delete',
  edit: 'Edit',
}

export const HttpMethods = {
  POST: 'post',
  GET: 'get',
  PUT: 'put',
  DELETE: 'delete',
}

export const AUTH_PAGES = [PAGES_PATHS.LOG_IN, PAGES_PATHS.SIGN_UP, PAGES_PATHS.RESET_PASS]

//Used to initialise the user doc
export const PLACEHOLDER_USER_DATA = {
  imageURL: '',
  newsNotification: { email: false, sms: false },
  discountNotifications: { email: false, sms: false },
  messagesNotifications: { email: false, sms: false },
  newListingsNotifications: { email: false, sms: false },
  priceChangeNotifications: { email: false, sms: false },
}
