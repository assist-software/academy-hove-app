import { createContext, useContext } from 'react'

import { AuthStore } from '../features/auth'
import { NotificationsStore } from 'features/notifications'
import { ShowroomStore } from 'features/showroom/store/showroom-store'

const store = {
  authStore: new AuthStore(),
  showroomStore: new ShowroomStore(),
  notificationsStore: new NotificationsStore(),
}

export const useStore = () => {
  return useContext(createContext(store))
}
