import { useNavigate } from 'react-router-dom';
import { useCartState } from '../../providers/Cart';
// @mui
import { styled } from '@mui/material/styles';
import { Badge } from '@mui/material';
// component
import { Iconify } from '../Iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  zIndex: 999,
  right: 0,
  display: 'flex',
  cursor: 'pointer',
  position: 'fixed',
  alignItems: 'center',
  top: theme.spacing(16),
  height: theme.spacing(5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1.25),
  boxShadow: theme.customShadows.z20,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  borderTopLeftRadius: Number(theme.shape.borderRadius) * 2,
  borderBottomLeftRadius: Number(theme.shape.borderRadius) * 2,
  transition: theme.transitions.create('opacity'),
  '&:hover': { opacity: 0.72 },
}));

// ----------------------------------------------------------------------

export const ProductCartWidget = () => {
  const cartState = useCartState();
  const navigate = useNavigate();

  return (
    <StyledRoot onClick={() => navigate('../cart')}>
      <Badge showZero badgeContent={cartState.totalQuantity} color='error' max={99}>
        <Iconify icon='eva:shopping-cart-fill' width={24} height={24} />
      </Badge>
    </StyledRoot>
  );
};
