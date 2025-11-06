import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DashboardState {
  userCount: number
  practitionerCount: number
}

const initialState: DashboardState = {
  userCount: 0,
  practitionerCount: 0,
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setUserCount(state, action: PayloadAction<number>) {
      state.userCount = action.payload
    },
    setPractitionerCount(state, action: PayloadAction<number>) {
      state.practitionerCount = action.payload
    },
  },
})

export const { setUserCount, setPractitionerCount } = dashboardSlice.actions
export default dashboardSlice.reducer 