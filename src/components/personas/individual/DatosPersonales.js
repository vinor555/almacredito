import React, { useState, useEffect } from "react";
import IndividualDatosPersonales from "../../tiposPersona/IndividualDatosPersonales";
import JuridicaDatosPersonales from "../../tiposPersona/JuridicaDatosPersonales";

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "date-fns";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function DatosPersonales() {
  const classes = useStyles();

  //consumir el servicio de departamentos

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <IndividualDatosPersonales />
    </form>
  );
}
