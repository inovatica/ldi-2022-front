import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
// components
import { ProductCard } from './ProductCard';

// ----------------------------------------------------------------------

export const ProductList = (props) => {
  const { products, ...other } = props;

  return (
    <Grid container spacing={3} {...other}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};
