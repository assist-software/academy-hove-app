import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from 'features/auth/state/reducers/auth-slice'

import { exempleReducer } from './exempleSlice/exempleSlice'

export const store = configureStore({
  reducer: {
    exemple: exempleReducer,
    auth: authReducer,
  },
  // Disabled serializableCheck because it failed the image imported by user for profilePic.
  // A non-serializable value was detected in the state
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
