import { createContext, useContext } from 'react'

import { AuthStore } from '../features/auth'
import { ShowroomStore } from 'features/showroom/store/showroom-store'

const store = {
  authStore: new AuthStore(),
  showroomStore: new ShowroomStore(),
}

export const useStore = () => {
  return useContext(createContext(store))
}
