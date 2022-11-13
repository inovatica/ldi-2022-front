// @mui
import { Container, Typography } from '@mui/material';

import { useCartState } from '../providers/Cart';
// components
import { CartItemList } from '../components/Cart';

// ----------------------------------------------------------------------

const CartPage = () => {
  const { items } = useCartState();

  return (
    <Container>
      <Typography variant='h4' sx={{ mb: 5 }}>
        Cart
      </Typography>

      <CartItemList items={items} />
    </Container>
  );
};

export default CartPage;
