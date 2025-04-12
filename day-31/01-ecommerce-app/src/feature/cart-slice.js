import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addToCart(state, action) {
      console.log('action: ', action)
      const { product, quantity = 1 } = action.payload;
            const existingItem = state.value.find(({ product: prod }) => prod.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.value.push(action.payload);
            }
        },
    },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
