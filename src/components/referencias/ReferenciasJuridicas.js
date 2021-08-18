import React from 'react';
import ReferenciasBancarias from './ReferenciasBancarias';
import ReferenciasComerciales from './ReferenciasComerciales';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ReferenciasJuridicas() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        
        
      <ReferenciasComerciales />
      <ReferenciasBancarias />
    </div>
  );
}