import PropTypes from 'prop-types';

// @mui
import { styled } from '@mui/material/styles';
import { Autocomplete, InputAdornment, Popper, TextField } from '@mui/material';
// components
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

const StyledPopper = styled((props) => <Popper placement='bottom-start' {...props} />)({
  width: '280px !important',
});

// ----------------------------------------------------------------------

export const BlogPostsSearch = (props) => {
  const { posts } = props;
  return (
    <Autocomplete
      sx={{ width: 280 }}
      autoHighlight
      popupIcon={null}
      PopperComponent={StyledPopper}
      options={posts}
      getOptionLabel={(post) => post.title}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder='Search post...'
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position='start'>
                <Iconify icon={'eva:search-fill'} sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

BlogPostsSearch.propTypes = {
  posts: PropTypes.array.isRequired,
};
