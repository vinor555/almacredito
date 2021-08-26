import React, { useState } from "react";

//Material UI
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

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

export default function DatosComplementarios() {
  const classes = useStyles();
  const [moneda, setMoneda] = useState("");
  const [fondosIniciales, setFondosIniciales] = useState("");
  const [fondosManejar, setFondosManejar] = useState("");
  const [cpe, setCpe] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const [profesionales, setProfesionales] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const [otras, setOtras] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChangeCpe = (event) => {
    setCpe({ ...cpe, [event.target.name]: event.target.checked });
  };

  const handleChangeProfesionales = (event) => {
    setProfesionales({
      ...profesionales,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeOtras = (event) => {
    setOtras({ ...otras, [event.target.name]: event.target.checked });
  };

  const handleChangeMoneda = (event) => {
    setMoneda(event.target.value);
  };

  const handleChangeFondosIniciales = (event) => {
    setFondosIniciales(event.target.value);
  };

  const handleChangeFondosManejar = (event) => {
    setFondosManejar(event.target.value);
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
      <DividerWithText>Datos Complementarios de la IVE</DividerWithText>
      <div className={classes.section1}>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">Moneda</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={moneda}
            onChange={handleChangeMoneda}
            label="Moneda"
          >
            <MenuItem key={1} value={1}>
              GTQ
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Ingresos Mensuales"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControl}
        />
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
          label="Ingresos Adicionales"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlLG}
        />
      </div>
      <div className={classes.section1}>
        <FormControl
          variant="outlined"
          className={classes.formControlLG}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Procedencia Fondos Iniciales
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={fondosIniciales}
            onChange={handleChangeFondosIniciales}
            label="Procedencia Fondos Iniciales"
          >
            <MenuItem key={1} value={1}>
              Exportaciones
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.section1}>
        <FormControl
          variant="outlined"
          className={classes.formControlLG}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Procedencia Fondos a Manejar
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={fondosManejar}
            onChange={handleChangeFondosManejar}
            label="Procedencia Fondos a Manejar"
          >
            <MenuItem key={1} value={1}>
              Comercio
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="No Subsidiarias, Agen, Ofic"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControl}
        />
        <TextField
          id="outlined-required"
          label="Cantidad Empleados"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControl}
        />
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Observaciones"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlLG}
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={cpe.checkedB}
              onChange={handleChangeCpe}
              name="checkedB"
              color="primary"
            />
          }
          label="CPE del Estado"
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={profesionales.checkedB}
              onChange={handleChangeProfesionales}
              name="checkedB"
              color="primary"
            />
          }
          label="Serv. Profesionales"
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={otras.checkedB}
              onChange={handleChangeOtras}
              name="checkedB"
              color="primary"
            />
          }
          label="Otra Fuente Ingresos"
        />
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Motivo Incremento rango ingre. mensu"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlLG}
        />
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Ingresos adionales Monto y Frecuencia"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlLG}
        />
      </div>
    </form>
  );
}
