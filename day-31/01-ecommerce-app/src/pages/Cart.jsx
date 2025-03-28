import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import { useSelector } from 'react-redux'
import { CardMedia } from '@mui/material'

const Cart = () => {
  const cart = useSelector((state) => state.cart?.value)
  return (
    <Container sx={{ py: 8 }}>
      <Grid container>
        <Grid item container>
          {/* <pre>{JSON.stringify(cartItems, null, 2)}</pre> */}
          {cart.map(({ product, quantity }) => {
            const { title, id, price, description, rating, image } = product
            return (
              <Grid item key={id}>
                <Card>
                  <CardMedia component='img'></CardMedia>
                </Card>
              </Grid>
            )
          })}
        </Grid>
        <Grid item>
          <Typography variant='h4'>Subtotal</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cart
