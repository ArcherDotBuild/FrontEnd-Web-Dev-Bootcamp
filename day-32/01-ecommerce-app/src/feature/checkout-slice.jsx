import { createSlice } from '@reduxjs/toolkit'

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    address: {},
  },
  reducers: {
    updateAddress(state, action) {
      const { payload } = action
      state.address = { ...state.address, ...payload }
    },
  },
})
export const { updateAddress } = checkoutSlice.actions
export default checkoutSlice.reducer
