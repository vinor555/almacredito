import React from "react";

//Material UI

import { makeStyles } from "@material-ui/core/styles";

import ConsultaIndividual from "../../../componentes/consulta/ConsultaIndividual";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Consulta() {
  const classes = useStyles();
  

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <ConsultaIndividual />
    </form>
  );
}
