import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: "",
  email: ""
}

 const UserSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    adduser: (state,action) => {
      state.name = action.payload.name
        state.email=action.payload.email
    }
   
   
  },
})
export const { adduser } = UserSlice.actions

export default UserSlice.reducer
