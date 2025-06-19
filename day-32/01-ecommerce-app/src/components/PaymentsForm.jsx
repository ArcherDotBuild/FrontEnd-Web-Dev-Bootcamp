import React from 'react'
import { Typography, Box, Grid } from '@mui/material'

const PaymentsForm = () => {
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
        </Grid>
      </Box>
    </>
  )
}

// 111
export default PaymentsForm
