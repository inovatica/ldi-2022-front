import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const Backdrop = (theme) => ({
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[800], 0.8),
        },
        invisible: {
          background: 'transparent',
        },
      },
    },
  })
