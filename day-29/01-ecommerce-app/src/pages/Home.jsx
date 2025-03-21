import React, { useEffect, useState } from 'react'
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
  useTheme,
} from '@mui/material'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp'

const Home = () => {
  const theme = useTheme()
  const [products, setProducts] = useState([])

  async function fetchAllProducts() {
    const response = await fetch('https://fakestoreapi.com/products')
    const result = await response.json()
    console.log('result: ', result)
    setProducts(result)
  }

  useEffect(() => {
    fetchAllProducts()
  }, [])

  return (
    // <pre>{JSON.stringify(products, null, 2)}</pre>
    <Container sx={{ py: 8 }} maxWidth='lg'>
      <Grid container spacing={4}>
        {products.map(({ title, id, price, description, rating, image }) => (
          <Grid item key={id} xs={12} sm={6} md={3}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
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
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {description}
                </Typography>
                <Typography fontSize='large'>{price}</Typography>
                <Rating readOnly precision={0.5} value={rating.rate} />
              </CardContent>
              <CardActions sx={{
                alignSelf: 'center',
              }}>
                <Button variant='contained'>
                  <ShoppingCartSharpIcon />
                  Add to Cart
                  </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
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
