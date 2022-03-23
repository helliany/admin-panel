import React from 'react';
import { Grid } from '@mui/material';
import ThemeModeSwitcher from '../common/ThemeModeSwitcher/ThemeModeSwitcher';

const Header = () => {
  return (
    <header>
      <Grid container alignItems="center">
        <ThemeModeSwitcher />
      </Grid>
    </header>
  );
};

export default Header;
