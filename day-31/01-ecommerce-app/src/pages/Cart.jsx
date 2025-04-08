import React from 'react'
import { useTheme } from '@emotion/react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import { useSelector } from 'react-redux'
import { Box, CardContent, CardMedia, Rating, TextField } from '@mui/material'
import { getSubtotal } from '../utils'

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
                  <CardContent
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                    >
                      <Typography variant='h6'>{title}</Typography>
                      <Rating readOnly precision={0.5} value={rating.rate} />
                      <form>
                        <TextField
                          sx={{
                            width: theme.spacing(8),
                          }}
                          inputProps={{
                            min: 0,
                            max: 10,
                          }}
                          id={`${id}-product-id`}
                          type='number'
                          variant='standard'
                          label='Quantity'
                          value={quantity}
                        ></TextField>
                      </form>
                    </Box>
                    <Box>
                      <Typography variant='h5' paragraph>
                        {getSubtotal([{ product, quantity }])}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
        <Grid ite md={4}>
          <Typography variant='h4'>Subtotal</Typography>
          <Typography variant='h4'>{getSubtotal(cart)}</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cart