import numeral from 'numeral';

// ----------------------------------------------------------------------

export const fNumber = (number) => numeral(number).format();

export const fCurrency = (number) => {
  const format = number ? numeral(number).format('$0,0.00') : '';

  return result(format, '.00');
};

export const fPercent = (number) => {
  const format = number ? numeral(Number(number) / 100).format('0.0%') : '';

  return result(format, '.0');
};

export const fShortenNumber = (number) => {
  const format = number ? numeral(number).format('0.00a') : '';

  return result(format, '.00');
};

export const fData = (number) => {
  const format = number ? numeral(number).format('0.0 b') : '';

  return result(format, '.0');
};

const result = (format, key = '.00') => {
  const isInteger = format.includes(key);

  return isInteger ? format.replace(key, '') : format;
};
