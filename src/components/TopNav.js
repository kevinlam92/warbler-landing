import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';

// import ThemeModeToggler from 'components/ThemeModeToggler';

const TopNav = () => {
  return (
    <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
      <Box>{/* <ThemeModeToggler /> */}</Box>
    </Box>
  );
};

TopNav.propTypes = {
  colorInvert: PropTypes.bool,
};

export default TopNav;
