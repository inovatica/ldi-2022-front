import { useContext } from 'react';
import { CartStateContext } from './CartProvider';

export const useCartState = () => {
  const stateCtx = useContext(CartStateContext);

  if (!stateCtx) {
    throw new Error('Component is beyond CartProvider.');
  }

  return stateCtx;
};
