import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
// components
import { ProductCard } from '../Products/ProductCard';

// ----------------------------------------------------------------------

export const CartItemList = (props) => {
  const { items, ...other } = props;

  return (
    <Grid container spacing={3} {...other}>
      {items.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

CartItemList.propTypes = {
  items: PropTypes.array.isRequired,
};
