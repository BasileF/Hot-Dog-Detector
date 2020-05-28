import React from 'react';
import { AppBar, Toolbar, Typography, } from '@material-ui/core';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <img style={{height: '28px', paddingRight: '8px'}} src='https://publicdomainvectors.org/photos/1530309750.png' />
        <Typography variant="h6" color="inherit">
          CEO of Hot Dogs
        </Typography>
      </Toolbar>
    </AppBar>
  );
}