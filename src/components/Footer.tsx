import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Divider, Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    textAlign: 'center',
  },
  divider: {
    marginLeft: '2px',
    marginRight: '2px',
  },
  icon: {

  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth='sm'>
        <Grid container justify='center'>
          <Grid item xs={12} sm={12}>
            <Typography variant='body1'>CEO of Hot Dogs</Typography>
          </Grid>
          <Grid item>
            <Link href='https://github.com/BasileF' target='_blank'>
              <GitHubIcon fontSize='small' />
            </Link>
          </Grid>
          <Grid item>
            <Divider orientation='vertical' className={classes.divider} />
          </Grid>
          <Grid item>
            <Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>
              <MonetizationOnIcon fontSize='small' />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}