import React from 'react'
import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Typography,
  Grid,
  Container,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { useAuth } from '../firebase/Auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const { signUp } = useAuth()
  const navigate = useNavigate()

  async function registerUser(event) {
    event.preventDefault()
    // const { name, email, password } = event.target
    // console.log(name.value, email.value, password.value)

    const data = new FormData(event.currentTarget)
    // const name = data.get('name')
    // const email = data.get('email')
    // const password = data.get('password')
await signUp(data.get('email'), data.get('password'), data.get('name'))
navigate('/login')
  }

  return (
    <Container component={'main'} maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{
            m: 1,
            bgcolor: 'secondary.main',
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component={'h1'} variant='h5'>
          Sign Up
        </Typography>
        <Box component={'form'} sx={{ mt: 3 }} onSubmit={registerUser}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete='given-name'
                fullWidth
                required
                name='name'
                id='name'
                autoFocus
                label='Name'
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete='email'
                fullWidth
                required
                name='email'
                id='email'
                label='Email'
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete='new-password'
                fullWidth
                type='password'
                required
                name='password'
                id='password'
                label='Password'
              ></TextField>
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid container justifyContent={'flex-end'}>
            <Grid item>
              <Link variant='body2' href='/login'>
                Already have an account? Sign In
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
// 14 mins

export default Register
