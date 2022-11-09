// ----------------------------------------------------------------------

export const Autocomplete = (theme) => ({
  MuiAutocomplete: {
    styleOverrides: {
      paper: {
        boxShadow: theme.customShadows.z20,
      },
    },
  },
});
