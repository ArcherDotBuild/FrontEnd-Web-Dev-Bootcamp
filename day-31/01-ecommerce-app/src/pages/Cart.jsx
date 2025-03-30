import React from 'react'
import { useTheme } from '@emotion/react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import { useSelector } from 'react-redux'
import { Box, CardContent, CardMedia, Rating, TextField } from '@mui/material'

const Cart = () => {
  const cart = useSelector((state) => state.cart?.value)
  const theme = useTheme()
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={2}>
        <Grid item container spacing={2} md={8}>
          {/* <pre>{JSON.stringify(cartItems, null, 2)}</pre> */}
          {cart.map(({ product, quantity }) => {
            const { title, id, price, description, rating, image } = product
            return (
              <Grid item key={id} xs={12}>
                <Card
                  sx={{
                    display: 'flex',
                    py: 2,
                    px: 2,
                  }}
                >
                  <CardMedia
                    component='img'
                    image={image}
                    sx={{
                      height: theme.spacing(30),
                      width: theme.spacing(30),
                      objectFit: 'contain',
                      pt: theme.spacing(),
                    }}
                    alt={title}
                  />
                  {/* 20 */}
                  <CardContent>
                    <Box
                      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                    >
                      <Typography variant='h6'>{title}</Typography>
                      <Rating readOnly precision={0.5} value={rating.rate} />
                      <form>
                        <TextField
                          label='Quantity'
                          value={quantity}
                        ></TextField>
                      </form>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
        <Grid ite md={4}>
          <Typography variant='h4'>Subtotal</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cart
