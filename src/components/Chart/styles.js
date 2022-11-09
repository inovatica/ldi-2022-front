// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';
// utils
import { bgBlur } from '../../utils/cssStyles';

// ----------------------------------------------------------------------

export default function ChartStyles() {
  const theme = useTheme();

  // It is a good practice to hoist the <GlobalStyles /> to a static constant, to avoid rerendering.
  // This will ensure that the <style> tag generated would not recalculate on each render.
  const inputGlobalStyles = (
    <GlobalStyles
      styles={{
        '.apexcharts-canvas': {
          // Tooltip
          '.apexcharts-xaxistooltip': {
            ...bgBlur({ color: theme.palette.background.default }),
            border: 0,
            color: theme.palette.text.primary,
            boxShadow: theme.customShadows.dropdown,
            borderRadius: Number(theme.shape.borderRadius) * 1.5,
            '&:before': { borderBottomColor: 'transparent' },
            '&:after': { borderBottomColor: alpha(theme.palette.background.default, 0.8) },
          },
          '.apexcharts-tooltip.apexcharts-theme-light': {
            ...bgBlur({ color: theme.palette.background.default }),
            border: 0,
            boxShadow: theme.customShadows.dropdown,
            borderRadius: Number(theme.shape.borderRadius) * 1.5,
            '.apexcharts-tooltip-title': {
              border: 0,
              textAlign: 'center',
              fontWeight: theme.typography.fontWeightBold,
              backgroundColor: alpha(theme.palette.grey[500], 0.16),
              color: theme.palette.text[theme.palette.mode === 'light' ? 'secondary' : 'primary'],
            },
          },

          // Legend
          '.apexcharts-legend': {
            padding: 0,
          },
          '.apexcharts-legend-series': {
            display: 'flex !important',
            alignItems: 'center',
          },
          '.apexcharts-legend-marker': {
            marginRight: 8,
          },
          '.apexcharts-legend-text': {
            lineHeight: '18px',
            textTransform: 'capitalize',
          },
        },
      }}
    />
  );

  return inputGlobalStyles;
}
