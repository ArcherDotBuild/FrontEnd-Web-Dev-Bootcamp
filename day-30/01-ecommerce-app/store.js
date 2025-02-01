import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './src/feature/cart-slice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})