import { createContext, useContext } from 'react'

import { ShowroomStore } from 'features/showroom/store/showroom-store'

const store = {
  showroomStore: new ShowroomStore(),
}

export const useStore = () => {
  return useContext(createContext(store))
}
