// ----------------------------------------------------------------------

export const Table = (theme) => ({
  MuiTableCell: {
    styleOverrides: {
      head: {
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.background.neutral,
      },
    },
  },
});
