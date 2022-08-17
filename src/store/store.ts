import { createContext, useContext } from 'react'

const store = {}

export const useStore = () => {
  return useContext(createContext(store))
}
