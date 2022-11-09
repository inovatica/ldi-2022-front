// @mui
import { Container, Typography } from '@mui/material';
// components
import { ProductList, ProductCartWidget } from '../components/Products';
// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

const ProductsPage = () => (
  <Container>
    <Typography variant='h4' sx={{ mb: 5 }}>
      Products
    </Typography>

    <ProductList products={PRODUCTS} />
    <ProductCartWidget />
  </Container>
);

export default ProductsPage;
