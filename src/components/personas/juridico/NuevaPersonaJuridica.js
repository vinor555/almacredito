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

export default function NuevaPersonaJuridica() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.section1}>
        <TextField
          required
          id="outlined-required"
          label="Primer Nombre"
          defaultValue=""
          variant="outlined"
          size="small"
        />

        <TextField
          id="outlined-required"
          label="Segundo Nombre"
          defaultValue=""
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-required"
          label="Tercer Nombre"
          defaultValue=""
          variant="outlined"
          size="small"
        />
      </div>
      <div className={classes.section1}>
        <TextField
          required
          id="outlined-required"
          label="Primer Apellido"
          defaultValue=""
          variant="outlined"
          size="small"
        />

        <TextField
          id="outlined-required"
          label="Segundo Apellido"
          defaultValue=""
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-required"
          label="Tercer Apellido"
          defaultValue=""
          variant="outlined"
          size="small"
        />
      </div>
      <div className={classes.section1}>
        <TextField
          required
          id="outlined-required"
          label="Puesto"
          defaultValue=""
          variant="outlined"
          size="small"
          style={{ width: "52ch" }}
        />
      </div>
    </form>
  );
}
