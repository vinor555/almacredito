import React from 'react';
import ReferenciasPersonales from './ReferenciasPersonales';
import ReferenciasBancarias from './ReferenciasBancarias';
import ReferenciasComerciales from './ReferenciasComerciales';
import ReferenciasLaborales from './ReferenciasLaborales';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Referencias() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        
        
      <ReferenciasLaborales />
      <ReferenciasComerciales />
      <ReferenciasBancarias />
      <ReferenciasPersonales />
    </div>
  );
}