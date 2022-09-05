import { createContext, useContext } from 'react'

import { AuthStore } from '../features/auth'
import { ShowroomStore } from 'features/showroom/store/showroom-store'
import { NotificationsStore } from 'features/notifications'

const store = {
  authStore: new AuthStore(),
  showroomStore: new ShowroomStore(),
  notificationsStore: new NotificationsStore(),
}

export const useStore = () => {
  return useContext(createContext(store))
}
