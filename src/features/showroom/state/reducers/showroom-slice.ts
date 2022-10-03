import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  latest: [],
  bigHouses: [],
  smallHouses: [],
}

const showroomSlice = createSlice({
  name: 'showroom',
  initialState,
  reducers: {
    HANDLE_SET_SHOWROOM_LATEST(state, action) {
      state.latest = action.payload
    },
    HANDLE_SET_SHOWROOM_BIG_HOUSES(state, action) {
      state.latest = action.payload
    },
    HANDLE_SET_SHOWROOM_SMALL_HOUSES(state, action) {
      state.latest = action.payload
    },
  },
})

export const { HANDLE_SET_SHOWROOM_LATEST, HANDLE_SET_SHOWROOM_BIG_HOUSES, HANDLE_SET_SHOWROOM_SMALL_HOUSES } =
  showroomSlice.actions
export const showroomReducer = showroomSlice.reducer
