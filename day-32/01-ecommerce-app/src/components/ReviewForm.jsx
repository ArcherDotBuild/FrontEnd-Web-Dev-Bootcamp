import React from 'react'
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  useTheme,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { getSubtotal } from '../utils'
const ReviewForm = () => {
  const cart = useSelector((state) => state.cart.value)
  const address = useSelector((state) => state.checkout.address)
  const payment = useSelector((state) => state.checkout.payment)
  const theme = useTheme()

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart?.map(({ product, quantity }) => (
          <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: 500,
                },
                '& .MuiListItemText-secondary': {
                  fontSize: theme.spacing(2),
                },
              }}
              primary={product.title}
              secondary={`Qty: ${quantity}`}
            />
            <Typography variant='body2'>
              {getSubtotal([{ product, quantity }])?.toFixed(2)}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary='Total' />
          <Typography variant='subtitle1' sx={{ mt: 2 }}>
            {getSubtotal(cart)?.toFixed(2)}
          </Typography>
        </ListItem>
      </List>
    </>
  )
}
// 1.27
// 28
export default ReviewForm
