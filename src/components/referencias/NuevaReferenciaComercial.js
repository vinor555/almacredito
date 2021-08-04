import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "52ch",
  },
  section1: {
    margin: theme.spacing(1, 1),
  },
}));

export default function NuevaReferenciaComercial() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.section1}>
        <TextField
          required
          id="outlined-required"
          label="Nombre"
          defaultValue=""
          variant="outlined"
          size="small"
          style={{ width: "52ch" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Dirección"
          defaultValue=""
          variant="outlined"
          size="small"
          style={{ width: "52ch" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Teléfono 1"
          defaultValue=""
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-required"
          label="Teléfono 2"
          defaultValue=""
          variant="outlined"
          size="small"
        />
      </div>
    </form>
  );
}
