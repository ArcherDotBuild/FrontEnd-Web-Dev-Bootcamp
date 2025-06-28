import React from 'react'
import { Typography, List, ListItem, ListItemText, Grid } from '@mui/material'
import { useSelector } from 'react-redux'

const ReviewForm = () => {
  const cart = useSelector((state) => state.cart.value)
  const address = useSelector((state) => state.checkout.address)
  const payment = useSelector((state) => state.checkout.payment)

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      <LIST>
        {cart?.map(({ product, quantity }) => (
          <ListItem key={product.title} sx={{py: 1, px: 0}}></ListItem>
        ))}
      </LIST>
    </>
  )
}

export default ReviewForm
