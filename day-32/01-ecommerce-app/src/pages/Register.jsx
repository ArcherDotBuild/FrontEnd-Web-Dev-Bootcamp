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

const Register = () => {
  return <Container component={'main'} maxWidth='xs'>
    <CssBaseline />
    <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar sx={{
        m: 1,
        bgcolor: 'secondary.main',
      }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component={'h1'} variant='h5'></Typography>
    </Box>
  </Container>
}
// 7 min
export default Register
