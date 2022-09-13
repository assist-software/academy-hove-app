import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IExempleSlice {
  exemple: string
}

const initialState = {
  exemple: 'Press HERE',
} as IExempleSlice

const exempleSlice = createSlice({
  name: 'exemple',
  initialState,
  reducers: {
    SET_EXEMPLE(state, action: PayloadAction<string>) {
      state.exemple = action.payload
    },
  },
})

export const { SET_EXEMPLE } = exempleSlice.actions
export const exempleReducer = exempleSlice.reducer
