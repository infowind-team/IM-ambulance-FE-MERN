import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  userIngestDataList: any[]
}

const initialState: UserState = {
  userIngestDataList: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserIngestSliceData(state, action: PayloadAction<any[]>) {
      state.userIngestDataList = action.payload
    },
  },
})

export const { setUserIngestSliceData } = userSlice.actions
export default userSlice.reducer