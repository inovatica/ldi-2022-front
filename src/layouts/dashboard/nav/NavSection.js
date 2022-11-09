import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, List, ListItemText, Divider, ListSubheader } from '@mui/material';
//
import { StyledNavItem, StyledNavItemIcon } from './styles';
import SvgColor from '../../../components/SvgColor';

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        <ListSubheader sx={{ bgcolor: 'inherit' }}>Tutaj pracujemy</ListSubheader>
        <NavItem
          key='product'
          item={{
            title: 'product',
            path: '/dashboard/products',
            icon: <SvgColor src={`/assets/icons/navbar/ic_cart.svg`} sx={{ width: 1, height: 1 }} />,
          }}
        />
        <Divider sx={{ my: 4 }} />

        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
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
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}
