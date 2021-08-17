import React from "react";
import JuridicaDatosPersonales from "../../tiposPersona/JuridicaDatosPersonales";

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function DatosJuridico() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <JuridicaDatosPersonales />
    </form>
  );
}
