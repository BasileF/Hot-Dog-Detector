import React from 'react';
import { FileInfo } from '../../interfaces/common';
import { Grid, LinearProgress, Paper, makeStyles, Typography } from '@material-ui/core';

interface ResultProps {
  fileInfo: FileInfo | null;
  hasResult: boolean;
  result: boolean;
  reset: () => void;
}

interface AnswerProps {
  result: boolean;
}

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    maxWidth: '91.666667%',
  },
  main: {
    boxShadow: '2px 2px 17px -1px rgba(0,0,0,0.73)',
  },
  image: {
    maxWidth: '100%',
  },
  yes: {
    backgroundColor: 'green',
    color: 'white',
    marginTop: '-4px',
    padding: '2px',
  },
  no: {
    backgroundColor: 'red',
    color: 'white',
    marginTop: '-4px',
    padding: '2px',
  },
  progress: {
    height: '28px',
    marginTop: '-4px',
  },
  link: {
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
}));

export default function Result(props: ResultProps) {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <div className={classes.main}>
        <img
          src={props.fileInfo?.path}
          alt='Your upload'
          className={classes.image}
        />
        {
          props.hasResult ?
            <Answer result={props.result} />
            :
            <LinearProgress className={classes.progress} />
        }
      </div>
      <Typography
        variant='caption'
        style={props.hasResult ? {} : { visibility: 'hidden' }}
        className={classes.link}
        onClick={props.reset}
      >
        Test another image?
      </Typography>
    </Grid>
  );
}

function Answer(props: AnswerProps) {
  const classes = useStyles();

  const text = props.result ? 'It do be a hot dog tho' : 'That ain\'t no hot dog chief'

  return (
    <div className={props.result ? classes.yes : classes.no}>
      <Typography variant='body1'>{text}</Typography>
    </div>
  );
}