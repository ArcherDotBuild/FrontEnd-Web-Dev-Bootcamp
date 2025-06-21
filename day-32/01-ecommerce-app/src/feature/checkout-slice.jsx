import { createSlice } from '@reduxjs/toolkit'

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    address: {},
    payment: {},
  },
  reducers: {
    updateAddress(state, action) {
      const { payload } = action
      state.address = { ...state.address, ...payload }
    },
    updatePayment(state, action) {
      const { payload } = action
      state.payment = { ...state.payment , ...payload}
    }
  },
})
export const { updateAddress, updatePayment } = checkoutSlice.actions
export default checkoutSlice.reducer
