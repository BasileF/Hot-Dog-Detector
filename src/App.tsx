import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Main from './components/main/Main';
import Footer from './components/Footer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
