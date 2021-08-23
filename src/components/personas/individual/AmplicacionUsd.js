import React, { useState } from "react";

//Material UI
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "25ch",
  },
  formControlSM: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "15ch",
  },
  formControlLG: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "52ch",
  },

  section1: {
    margin: theme.spacing(1, 1),
  },

  container: {
    display: "flex",
    alignItems: "center",
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 500,
    fontSize: 20,
    color: "black",
  },
}));

export default function AmpliacionUsd() {
  const classes = useStyles();
  const [origen, setOrigen] = useState("");

  const handleChangeOrigen = (event) => {
    setOrigen(event.target.value);
  };

  const DividerWithText = ({ children }) => {
    return (
      <div className={classes.container}>
        <span className={classes.content}>{children}</span>
      </div>
    );
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <DividerWithText>Cantidad en Dolares</DividerWithText>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Ingreses Mensuales"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControl}
        />
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Egresos Mensuales"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControl}
        />
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Monto a Manejar"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControl}
        />
      </div>
      <div className={classes.section1}>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Origen Fondos
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={origen}
            onChange={handleChangeOrigen}
            label="Sefr"
          >
            <MenuItem key={1} value={1}>
              Solicitante
            </MenuItem>
            <MenuItem key={2} value={2}>
              Entidad Solicitante
            </MenuItem>
            <MenuItem key={3} value={3}>
              Firmante
            </MenuItem>
            <MenuItem key={4} value={4}>
              Representante
            </MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Destino de Fondos"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlLG}
        />
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Límite Actual"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlLG}
        />
      </div>
    </form>
  );
}
