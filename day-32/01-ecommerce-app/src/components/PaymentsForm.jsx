import React from 'react'
import { Typography, Box, Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

const PaymentsForm = () => {
  const payment = useSelector((state) => state.checkout.payment)
  const dispatch = useDispatch()
  function handleChange(event) {
    const { name, value } = event.target ?? {}
    console.log(name, value)
    dispatch(updateAddress({ [name]: value }))
  }

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Payment method
      </Typography>
      <Box component='form' onChange={handleChange}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              name='name'
              id='name'
              variant='standard'
              required
              label='Name on Card'
              fullWith
              autoComplete='cc-name'
              defaultValue={payment?.name ?? ''}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name='cardNumber'
              id='cardNumber'
              variant='standard'
              required
              label='Card Number'
              fullWith
              autoComplete='cc-number'
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name='expDate'
              id='expDate'
              variant='standard'
              required
              label='Expiry Date'
              fullWith
              autoComplete='cc-exp'
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name='cvv'
              id='cvv'
              variant='standard'
              required
              label='CVV'
              type='password'
              fullWith
              autoComplete='cc-csc'
            ></TextField>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

// 110
export default PaymentsForm
