import React from 'react'
import {
  Grid,
  Typography,
  Box,
  TextField,
  FormControlLabel,
} from '@mui/material'

function handleChange(event) {
  console.log(event.target)
}

const AddressForm = () => {
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Shipping Address
      </Typography>
      <Box component='form' onChange={handleChange}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='firstName'
              name='firstName'
              label='First Name'
              fullWidth
              autoComplete='given-name'
              variant='standard'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='lastName'
              name='lastName'
              label='Last Name'
              fullWidth
              autoComplete='family-name'
              variant='standard'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='address1'
              name='address1'
              label='Address Line 1'
              fullWidth
              variant='standard'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='address2'
              name='address2'
              label='Address Line 2'
              fullWidth
              variant='standard'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='city'
              name='city'
              label='City'
              fullWidth
              variant='standard'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='zipCode'
              name='zipCode'
              label='Zip Code/Postal Code'
              fullWidth
              variant='standard'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='country'
              name='country'
              label='Country'
              fullWidth
              variant='standard'
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
// 54
export default AddressForm
