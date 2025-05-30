import React, { useEffect } from 'react'
import { useTheme } from '@emotion/react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Button,
  Rating,
  Typography,
} from '@mui/material'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../feature/cart-slice'
import { fetchAllProducts } from '../feature/products-slice'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')
  const searchTerm = searchParams.get('searchterm')
  const theme = useTheme()
  const state = useSelector((state) => state.products)
  const { value: products, loading } = state ?? {}
  const dispatch = useDispatch() // This is a hook from react-redux

  useEffect(() => {
    if (!products?.length) {
      dispatch(fetchAllProducts())
    }
  }, [products, dispatch]) // Only run when products change


  function addProductToCart(product) {
    // Dispatch an action to add the product to the cart
    dispatch(addToCart({ product, quantity: 1 }))
  }

  let filteredProducts =
    category && category !== 'all'
      ? products.filter((prod) => prod.category === category)
      : products

  filteredProducts = searchTerm
    ? filteredProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredProducts

  return (
    // <pre>{JSON.stringify(products, null, 2)}</pre>
    <Container sx={{ py: 8 }} maxWidth='lg'>
      <Grid container spacing={4}>
        {filteredProducts?.map(
          ({ title, id, price, description, rating, image }) => (
            <Grid item key={id} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: theme.spacing(2,0),
                }}
              >
                <CardMedia
                  component='img'
                  sx={{
                    alignSelf: 'center',
                    width: theme.spacing(30),
                    height: theme.spacing(30),
                    objectFit: 'contain',
                    pt: theme.spacing(2),
                  }}
                  image={image}
                  alt={title}
                />
                <CardContent>
                  <Typography
                    variant='h5'
                    component='h2'
                    gutterBottom
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    color='text.secondary'
                    paragraph
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {description}
                  </Typography>
                  <Typography fontSize='large'>{price}</Typography>
                  <Rating readOnly precision={0.5} value={rating.rate} />
                </CardContent>
                <CardActions
                  sx={{
                    alignSelf: 'center',
                  }}
                >
                  <Button
                    variant='contained'
                    onClick={() =>
                      addProductToCart({
                        title,
                        id,
                        price,
                        description,
                        rating,
                        image,
                      })
                    }
                  >
                    <ShoppingCartSharpIcon />
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        )}
      </Grid>
    </Container>
  )
}

export default Home

/*
{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}
*/
