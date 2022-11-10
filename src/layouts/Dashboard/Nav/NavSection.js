import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, List, ListItemText, Divider, ListSubheader } from '@mui/material';
//
import { StyledNavItem, StyledNavItemIcon } from './styles';
import { SvgColor } from '../../../components/SvgColor';

// ----------------------------------------------------------------------
const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

export const NavSection = () => (
  <Box>
    <List disablePadding sx={{ p: 1 }}>
      <ListSubheader sx={{ bgcolor: 'inherit' }}>Tutaj pracujemy</ListSubheader>
      <NavItem
        key='products'
        item={{
          title: 'products',
          path: '/dashboard/products',
          icon: icon('ic_products'),
        }}
      />
      <NavItem
        key='cart'
        item={{
          title: 'cart',
          path: '/dashboard/cart',
          icon: icon('ic_cart'),
        }}
      />
      <Divider sx={{ my: 4 }} />

      <NavItem
        key='dashboard'
        item={{
          title: 'dashboard',
          path: '/dashboard/app',
          icon: icon('ic_analytics'),
        }}
      />
      <NavItem
        key='user'
        item={{
          title: 'user',
          path: '/dashboard/user',
          icon: icon('ic_user'),
        }}
      />
      <NavItem
        key='blog'
        item={{
          title: 'blog',
          path: '/dashboard/blog',
          icon: icon('ic_blog'),
        }}
      />
      <NavItem
        key='login'
        item={{
          title: 'login',
          path: '/login',
          icon: icon('ic_lock'),
        }}
      />
      <NavItem
        key='notFound'
        item={{
          title: 'not found',
          path: '/dashboard/404',
          icon: icon('ic_disabled'),
        }}
      />
    </List>
  </Box>
);

// ----------------------------------------------------------------------

const NavItem = (props) => {
  const { item } = props;
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
};
