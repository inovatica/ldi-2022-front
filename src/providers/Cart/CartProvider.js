import PropTypes from 'prop-types';
import { createContext, useReducer } from 'react';

export const CartStateContext = createContext();
export const CartDispatchContext = createContext();

const initialState = {
  items: [],
  totalQuantity: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { id, quantity = 1 } = action.cartItem;
      const isItemExistsInCart = state.items.find((item) => item.id === id);
      let cartItems = null;

      if (isItemExistsInCart) {
        const items = state.items.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + quantity,
            };
          }
          return item;
        });
        cartItems = items;
      } else {
        cartItems = [...state.items, { ...action.cartItem, id, quantity }];
      }

      return {
        ...state,
        items: cartItems,
        totalQuantity: state.totalQuantity + quantity,
      };
    }

    case 'REMOVE_FROM_CART': {
      const cartItem = state.items.find((item) => item.id === action.cartItemId);
      const quanityToSubstract = action.quantity > cartItem.quantity ? cartItem.quantity : action.quantity;
      if (cartItem) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.cartItemId),
          totalQuantity: state.totalQuantity - quanityToSubstract,
        };
      }

      return state;
    }

    case 'CLEAR_CART':
      return {
        ...state,
        ...initialState,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const addToCart = (dispatch, cartItem) =>
  dispatch({
    type: 'ADD_TO_CART',
    cartItem,
  });

export const removeFromCart = (dispatch, cartItemId, quantity) =>
  dispatch({
    type: 'REMOVE_FROM_CART',
    cartItemId,
  });

export const clearCart = (dispatch) =>
  dispatch({
    type: 'CLEAR_CART',
  });

export const CartProvider = (props) => {
  const { children } = props;

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>{children}</CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

CartProvider.popTypes = {
  children: PropTypes.node.isRequired,
};
