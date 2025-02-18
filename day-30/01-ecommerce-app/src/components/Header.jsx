import React from 'react'
import AppBar from '@mui/material/AppBar'
import {
  alpha,
  Autocomplete,
  Badge,
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  styled,
  TextField,
  Toolbar,
} from '@mui/material'
import { Typography } from '@mui/material'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp'
import { useDispatch, useSelector } from 'react-redux'
import { getItemCount } from '../utils'
import { fetchAllCategories } from '../feature/categories-slice'

const Search = styled('section')(({ theme }) => ({
  position: 'relative',
  bordeRadius: theme.shape.borderRadius,
  display: 'flex',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
}))

function SearchBar() {
  const products = useSelector((state) => state.products?.value)
  const categories = useSelector((state) => state.categories?.value)
  const dispatch = useDispatch() // This is a hook from react-redux

  if (!categories.length) {
    dispatch(fetchAllCategories())
  }

  return (
    <Search>
      <Select
        size='small'
        sx={{
          m: 1,
          '&': {},
        }}
        variant='standard'
        labelId='selected-category'
        id='selected-category-id'
      >
        <MenuItem
          sx={{
            textTransform: 'capitalize',
          }}
          defaultValue=''
        >
          all
        </MenuItem>
        {categories?.map((category) => (
          <MenuItem
            sx={{
              textTransform: 'capitalize',
            }}
            key={category}
            defaultValue={category}
          >
            {category}
          </MenuItem>
        ))}
      </Select>
      <Autocomplete
        disablePortal
        id='combo-box-demo'
        options={Array.from(products, (prod) => ({
          id: prod.id,
          label: prod.title,
        }))}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} />}
      />
    </Search>
  )
}

const Header = () => {
  const cartItems = useSelector((state) => state.cart?.value)
  const count = getItemCount(cartItems)

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6' color='inherit'>
          Ecommerce
        </Typography>
        <SearchBar />
        <Box sx={{ display: { md: 'flex' } }}>
          <IconButton
            size='large'
            aria-label='shows cart items count'
            color='inherit'
          >
            <Badge badgeContent={count} color='error'>
              <ShoppingCartSharpIcon />
            </Badge>
          </IconButton>
        </Box>
        <Button color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
