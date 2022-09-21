import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  user: { access_token: '', display_name: '', email: '', photoUrl: '', isLoggedIn: false },
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth(state, action: PayloadAction<string>) {
      state.user.email = action.payload
    },
    HANDLE_SET_USER(state, action) {
      state.user = action.payload
    },
  },
})

export const { auth, HANDLE_SET_USER } = authSlice.actions
export const authReducer = authSlice.reducer
