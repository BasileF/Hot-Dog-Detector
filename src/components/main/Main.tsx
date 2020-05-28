import React from 'react';
import Upload from './Upload';
import Result from './Result';
import { Grid, makeStyles } from '@material-ui/core';
import { FileInfo } from '../../interfaces/common';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
  },
}));

export default function Main() {
  const [file, setFile] = React.useState<FileInfo | null>(null);
  const [result, setResult] = React.useState<boolean>(false);
  const [received, setReceived] = React.useState<boolean>(false);

  const classes = useStyles();

  const reset = () => {
    setFile(null);
    setResult(false);
    setReceived(false);
  }

  return (
    <Grid
      container
      justify='center'
      className={classes.root}
    >
      {
        file ?
          <Result
            fileInfo={file} 
            hasResult={received}
            result={result}
            reset={reset}
          />
          :
          <Upload
            setFileInfo={setFile}
            setReceived={setReceived}
            setResult={setResult}
          />
      }
    </Grid>
  );
}