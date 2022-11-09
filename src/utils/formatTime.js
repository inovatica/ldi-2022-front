import { format, getTime, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------

export const fDate = (date, newFormat) => {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
};

export const fDateTime = (date, newFormat) => {
  const fm = newFormat || 'dd MMM yyyy p';

  return date ? format(new Date(date), fm) : '';
};

export const fTimestamp = (date) => (date ? getTime(new Date(date)) : '');

export const fToNow = (date) =>
  date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
