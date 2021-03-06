import React, { useState } from "react";
import ListaRepresentantes from "./ListaRepresentantes";
//Material UI

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "date-fns";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

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
    width: "25ch",
  },
  formControlLarge: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "52ch",
  },
  formControlDir: {
    width: "100ch",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  rootCard: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  section1: {
    margin: theme.spacing(1, 1),
  },

  container: {
    display: "flex",
    alignItems: "center",
  },
  border: {
    borderBottom: "1px solid lightgray",
    width: "100%",
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

export default function JuridicaDatosPersonales() {
  const classes = useStyles();
  const [tipoID, setTipoID] = useState("");
  const [tipoSociedad, setTipoSociedad] = useState();
  const [tipoActividad, setTipoActividad] = useState();
  const [formacion, setFormacion] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const [selectedDate, setSelectedDate] = useState(
    new Date("1985-06-15T21:11:54")
  );

  //consumir el servicio de departamentos

  const handleChangeTipoID = (event) => {
    setTipoID(event.target.value);
  };

  const handleChangeTipoSociedad = (event) => {
    setTipoSociedad(event.target.value);
  };

  const handleChangeTipoActividad = (event) => {
    setTipoActividad(event.target.value);
  };

  const handleChangeFormacion = (event) => {
    setFormacion({ ...formacion, [event.target.name]: event.target.checked });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
      <DividerWithText>Identificaci??n</DividerWithText>
      <div className={classes.section1}>
        <TextField
          required
          id="outlined-required"
          label="No. ID"
          defaultValue=""
          variant="outlined"
          size="small"
        />
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Tipo de ID
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={tipoID}
            onChange={handleChangeTipoID}
            label="Tipo de ID"
          >
            <MenuItem value="DPI">DPI</MenuItem>
            <MenuItem value="PASS">Pasaporte</MenuItem>
          </Select>
        </FormControl>
      </div>
      <DividerWithText>
        Datos Generales
      </DividerWithText>
      <div className={classes.section1}>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Tipo Sociedad
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={tipoSociedad}
            onChange={handleChangeTipoSociedad}
            label="Departamento"
          >
            <MenuItem key={4} value={4}>
              Sociedad Anonima
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={formacion.checkedB}
              onChange={handleChangeFormacion}
              name="checkedB"
              color="primary"
            />
          }
          label="??En Formaci??n?"
        />
      </div>
      <div className={classes.section1}>
        <TextField
          required
          id="outlined-required"
          label="Nombre, raz??n social o denominaci??n completa"
          defaultValue=""
          variant="outlined"
          size="small"
          style={{ width: "52ch" }}
        />
      </div>
      <div className={classes.section1}>
        <TextField
          required
          id="outlined-required"
          label="Nombre Comercial"
          defaultValue=""
          variant="outlined"
          size="small"
          style={{ width: "52ch" }}
        />
      </div>
      <div className={classes.section1}>
        <FormControl
          variant="outlined"
          className={classes.formControlLarge}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Actividad Econ??mica
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={tipoActividad}
            onChange={handleChangeTipoActividad}
            label="Actividad Econ??mica"
          >
            <MenuItem value={502}>Establecimientos Privados</MenuItem>
          </Select>
        </FormControl>
      </div>
      <DividerWithText>
        Datos de la Escritura P??blica de Constituci??n de Sociedad o Entidad
      </DividerWithText>
      <div className={classes.section1}>
        <TextField
          required
          id="outlined-required"
          label="N??mero"
          defaultValue=""
          variant="outlined"
          size="small"
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            variant="outline"
            margin="normal"
            id="date-picker-dialog"
            label="Fecha"
            format="dd/MM/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
      <div className={classes.section1}>
        <TextField
          required
          id="outlined-required"
          label="Notario Autoriz??"
          defaultValue=""
          variant="outlined"
          size="small"
          style={{ width: "52ch" }}
        />
      </div>
      <ListaRepresentantes />
    </form>
  );
}
