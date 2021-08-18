import React, { useState } from "react";

//Material UI
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
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
    width: "58ch",
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

export default function RepresentanteLegal() {
  const classes = useStyles();
  const [persona, setPersona] = useState("");
  const [mandatario, setMandatario] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const [actua, setActua] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChangeMandatario = (event) => {
    setMandatario({ ...mandatario, [event.target.name]: event.target.checked });
  };

  const handleChangeActua = (event) => {
    setActua({ ...actua, [event.target.name]: event.target.checked });
  };

  const [selectedDate, setSelectedDate] = useState(
    new Date("1985-06-15T21:11:54")
  );

  const [selectedDateFinal, setSelectedDateFinal] = useState(
    new Date("1985-06-15T21:11:54")
  );

  const handleChangePersona = (event) => {
    setPersona(event.target.value);
  };

  const DividerWithText = ({ children }) => {
    return (
      <div className={classes.container}>
        <span className={classes.content}>{children}</span>
      </div>
    );
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDateChangeFinal = (date) => {
    setSelectedDateFinal(date);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <DividerWithText>
        Registro de Representante Legal - Persona Jurídica
      </DividerWithText>
      <div className={classes.section1}>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Rep. Legal
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={persona}
            onChange={handleChangePersona}
            label="Nacionalidad"
          >
            <MenuItem key={1} value={1}>
              Aaron Francisco Ramirez Fernandez
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <DividerWithText>Acta Notarial del Nombramiento</DividerWithText>
      <div className={classes.section1}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            variant="outline"
            margin="normal"
            id="date-picker-dialog"
            label="Fecha Inicial"
            format="dd/MM/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            variant="outline"
            margin="normal"
            id="date-picker-dialog"
            label="Fecha Final Acta/Nomb."
            format="dd/MM/yyyy"
            value={selectedDate}
            onChange={handleDateChangeFinal}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Notario Autorizó"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlLG}
        />
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Cargo"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlLG}
        />
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="No. Inscripción"
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
              checked={mandatario.checkedB}
              onChange={handleChangeMandatario}
              name="checkedB"
              color="primary"
            />
          }
          label="¿Actúa como mandatario? - (Si la respuesta es afirmativa, ingrese lo siguiente)"
        />
      </div>
      <DividerWithText>Datos del Registro</DividerWithText>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="No. de Escritura"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlLG}
        />
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Nombre del Registro"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlLG}
        />
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="No. Registro"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControl}
        />
        <TextField
          id="outlined-required"
          label="Folio"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlSM}
        />
        <TextField
          id="outlined-required"
          label="Libro"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlSM}
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={actua.checkedB}
              onChange={handleChangeActua}
              name="checkedB"
              color="primary"
            />
          }
          label="¿Actúa únicamente en beneficio de esta entidad?"
        />
      </div>
    </form>
  );
}
