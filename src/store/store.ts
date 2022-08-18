import { createContext, useContext } from 'react'
import { AuthStore } from '../features/auth'

const store = {
  authStore: new AuthStore(),
}

export const useStore = () => {
  return useContext(createContext(store))
}
