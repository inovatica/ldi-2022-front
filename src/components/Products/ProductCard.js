import PropTypes from 'prop-types';

import { Card, Link, Typography, Stack, CardActions, CardMedia, CardContent } from '@mui/material';

import { useCartDispatch, addToCart } from '../../providers/Cart';
import { fCurrency } from '../../utils/formatNumber';

import { Label } from '../Label';
import { ColorPreview } from '../ColorUtils';
import { ProductActions } from './ProductActions';
// ----------------------------------------------------------------------

export const ProductCard = (props) => {
  const { product } = props;
  const { id, name, cover, price, colors, status, priceSale } = product;

  const cartDispatch = useCartDispatch();

  const handleOnAdd = (quantity) =>
    addToCart(cartDispatch, { id, name, cover, price, colors, status, priceSale, quantity });

  return (
    <Card>
      {status && (
        <Label
          variant='filled'
          color={status === 'sale' ? 'error' : 'info'}
          sx={{
            zIndex: 9,
            top: 16,
            right: 16,
            position: 'absolute',
            textTransform: 'uppercase',
          }}
        >
          {status}
        </Label>
      )}
      <CardMedia component='img' alt={name} image={cover} />

      <CardContent>
        <Link color='inherit' underline='hover'>
          <Typography variant='subtitle2' noWrap>
            {name}
          </Typography>
        </Link>

        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <ColorPreview colors={colors} />
          <Typography variant='subtitle1'>
            <Typography
              component='span'
              variant='body1'
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {priceSale && fCurrency(priceSale)}
            </Typography>
            &nbsp;
            {fCurrency(price)}
          </Typography>
        </Stack>
      </CardContent>

      <CardActions sx={{ flexDirection: 'column', gap: 1 }}>
        <ProductActions onAdd={(quantity) => handleOnAdd(quantity)} />
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};
