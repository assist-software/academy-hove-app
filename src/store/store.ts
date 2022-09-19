import { createContext, useContext } from 'react'

import { NotificationsStore } from 'features/notifications'
import { ShowroomStore } from 'features/showroom/store/showroom-store'
import { AuthStore } from 'features/auth/store/auth-store'

const store = {
  authStore: new AuthStore(),
  showroomStore: new ShowroomStore(),
  notificationsStore: new NotificationsStore(),
}

export const useStore = () => {
  return useContext(createContext(store))
}
