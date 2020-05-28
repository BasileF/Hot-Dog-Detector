import React, { SetStateAction, Dispatch } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDropzone } from 'react-dropzone';
import { Grid, Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { FileInfo } from '../../interfaces/common';

const useStyles = makeStyles(theme => ({
  dropzone: {
    borderWidth: '2px',
    borderColor: 'lightgrey',
    borderStyle: 'dashed',
    padding: '20px',
    color: '#bdbdbd',
    backgroundColor: '#fafafa',
    alignItems: 'center',
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    height: '300px',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4caf50',
    color: 'white',
    '&:hover': {
      backgroundColor: 'green'
    },
  },
  text: {
    marginTop: '0px'
  },
}));

interface UploadProps {
  setFileInfo: Dispatch<SetStateAction<FileInfo | null>>;
  setReceived: Dispatch<SetStateAction<boolean>>;
  setResult: Dispatch<SetStateAction<boolean>>;
}

export default function Upload(props: UploadProps) {
  const classes = useStyles();

  const dropZone = (acceptedFiles: File[]) => {
    console.log(acceptedFiles[0]);

    if (acceptedFiles.length !== 0) {
      const newFileInfo = {
        file: acceptedFiles[0],
        path: URL.createObjectURL(acceptedFiles[0]),
      } as FileInfo;

      props.setFileInfo(newFileInfo);
      setTimeout(() => { props.setReceived(true); props.setResult(true); }, 1000);
    }
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    multiple: false,
    accept: 'image/jpeg, image/png, image/jpg',
    onDrop: dropZone,
  });

  return (
    <Grid item xs={11} sm={6}>
      <div {...getRootProps({ className: classes.dropzone })}>
        <input {...getInputProps()} />
        <p className={classes.text}>Drag or select an image</p>
        <p className={classes.text}>(*.png, *.jpeg and *.jpg only)</p>
        <Button
          variant='contained'
          className={classes.button}
          startIcon={<CloudUploadIcon />}
          onClick={open}
        >
          Select Image
        </Button>
      </div>
    </Grid>
  );
}