import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProfile } from '../models/IProfileSlice'

const initialState = {
  exemple: 'Press HERE',
} as IProfile

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    SET_EXEMPLE(state, action: PayloadAction<string>) {
      state.exemple = action.payload
    },
  },
})

export const { SET_EXEMPLE } = profileSlice.actions
export const exempleReducer = profileSlice.reducer
