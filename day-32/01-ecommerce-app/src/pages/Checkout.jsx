import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Paper from '@mui/material/Paper'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import AddressForm from '../components/AddressForm'
import PaymentsForm from '../components/PaymentsForm'
import ReviewForm from '../components/ReviewForm'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../feature/cart-slice'
import { clearCheckoutInformation } from '../feature/checkout-slice'
import { Link } from 'react-router-dom'

const steps = ['Shipping Address', 'Payment Details', 'Review Your Order']

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <Container component='section' maxWidth='lg' sx={{ mb: 4 }}>
      <Paper
        variant='outlined'
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typogragy component='h1' variant='h4' align='center'></Typogragy>
        <Stepper activeStep={0} sx={{ pt: 3, pb: 5 }}></Stepper>
          <Step>
            <StepLabel activeStep={activeStep}
            sx={{
              pt: 3,
              pb: 5,
            }}
            >Shipping Address</StepLabel>
          </Step>
          <Step>
            <StepLabel>Payment Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Review Your Order</StepLabel>
          </Step>
      </Paper>
    </Container>
  )
}

export default Checkout
