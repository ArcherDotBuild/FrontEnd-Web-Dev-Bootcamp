import React from 'react'
import { Typography, List, ListItem, ListItemText, Grid } from '@mui/material'
import { useSelector } from 'react-redux'

const ReviewForm = () => {
  const cart = useSelector(state => state.cart)
  const address = useSelector((state) => state.checkout.address)
  const payment = useSelector(state => state.checkout.payment)

  return (
    <div>ReviewForm</div>
  )
}

export default ReviewForm