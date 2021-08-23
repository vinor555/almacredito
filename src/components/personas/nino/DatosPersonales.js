import React from "react";
import IndividualDatosPersonales from "../../tiposPersona/IndividualDatosPersonales";

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

export default function DatosPersonales() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <IndividualDatosPersonales />
    </form>
  );
}
