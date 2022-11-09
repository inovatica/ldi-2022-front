import PropTypes from 'prop-types';

import { useState } from 'react';

import { Stack, Button, IconButton, Typography } from '@mui/material';
import { Iconify } from '../Iconify';

export const ProductActions = (props) => {
  const { onAdd } = props;

  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Stack direction='row' alignItems='center' justifyContent='center' spacing={2}>
        <IconButton size='small' onClick={() => setQuantity((prev) => (prev < 10 ? prev + 1 : prev))}>
          <Iconify icon='ic:baseline-plus' />
        </IconButton>
        <Typography variant='body' sx={{ minWidth: 18, textAlign: 'center' }}>
          {quantity}
        </Typography>
        <IconButton size='small' onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))}>
          <Iconify icon='ic:baseline-minus' />
        </IconButton>
      </Stack>
      <Button color='primary' onClick={() => onAdd(quantity)}>
        Add To Cart
      </Button>
    </>
  );
};

ProductActions.propTypes = {
  onAdd: PropTypes.func,
};
