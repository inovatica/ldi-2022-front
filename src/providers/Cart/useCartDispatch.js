import { useContext } from 'react';
import { CartDispatchContext } from './CartProvider';

export const useCartDispatch = () => {
  const dispatchCtx = useContext(CartDispatchContext);

  if (!dispatchCtx) {
    throw new Error('Component is beyond CartProvider.');
  }

  return dispatchCtx;
};
