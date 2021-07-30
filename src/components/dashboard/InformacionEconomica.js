import React, { useState } from "react";

//Material UI
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

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
  formControlActEconomica: {
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

export default function InformacionEconomica() {
  const classes = useStyles();
  const [relacionDependencia, setRelacionDependencia] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const [tipoEmpresa, setTipoEmpresa] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    new Date("2010-06-15T21:11:54")
  );
  const [moneda, setMoneda] = useState("");
  const [pais, setPais] = useState("");
  const [area, setArea] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [actividadEconomica, setActividadEconomica] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChangeRelacionDependencia = (event) => {
    setRelacionDependencia({
      ...relacionDependencia,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeTipoEmpresa = (event) => {
    setTipoEmpresa(event.target.value);
  };

  const handleChangeMoneda = (event) => {
    setMoneda(event.target.value);
  };

  const handleChangePais = (event) => {
    setPais(event.target.value);
  };

  const handleChangeArea = (event) => {
    setArea(event.target.value);
  };

  const handleChangeDepartamento = (event) => {
    setDepartamento(event.target.value);
  };

  const handleChangeMunicipio = (event) => {
    setMunicipio(event.target.value);
  };

  const handleChangeActividadEconomica = (event) => {
    setActividadEconomica(event.target.value);
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
      <div className={classes.section1}>
        <FormControlLabel
          control={
            <Switch
              checked={relacionDependencia.checkedB}
              onChange={handleChangeRelacionDependencia}
              name="checkedB"
              color="primary"
            />
          }
          label="Trabaja en Relación de Dependencia"
        />
      </div>
      <DividerWithText>
        Si trabaja en relación de dependencia complete los siguientes datos
      </DividerWithText>
      <div className={classes.section1}>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Tipo Empresa
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={tipoEmpresa}
            onChange={handleChangeTipoEmpresa}
            label="Tipo Empresa"
          >
            <MenuItem value="PR">Privada</MenuItem>
            <MenuItem value="PU">Pública</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Empresa"
          defaultValue=""
          variant="outlined"
          size="small"
          style={{ width: "52ch" }}
        />
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Puesto"
          defaultValue=""
          variant="outlined"
          size="small"
          style={{ width: "52ch" }}
        />
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Dirección"
          defaultValue=""
          variant="outlined"
          size="small"
          style={{ width: "52ch" }}
        />
        <TextField
          id="outlined-required"
          label="Zona"
          defaultValue=""
          variant="outlined"
          size="small"
        />
      </div>

      <DividerWithText>Ubicación del lugar donde trabaja</DividerWithText>
      <div className={classes.section1}>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">País</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={pais}
            onChange={handleChangePais}
            label="Pais"
          >
            <MenuItem value="1">GUATEMALA</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">Area</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={area}
            onChange={handleChangeArea}
            label="Area"
          >
            <MenuItem value="C">CENTRAL</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Departamento
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={departamento}
            onChange={handleChangeDepartamento}
            label="Departamento"
          >
            <MenuItem value="GT">GUATEMALA</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Municipio
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={municipio}
            onChange={handleChangeMunicipio}
            label="Municipio"
          >
            <MenuItem value="GT-GT">GUATEMALA</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.section1}>
        <TextField
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
        <TextField
          id="outlined-required"
          label="Fax"
          defaultValue=""
          variant="outlined"
          size="small"
        />
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Ingreso Mensual"
          defaultValue=""
          variant="outlined"
          size="small"
        />
        <FormControl
          variant="outlined"
          className={classes.formControl}
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">Moneda</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={moneda}
            onChange={handleChangeMoneda}
            label="Tipo Empresa"
          >
            <MenuItem value="GTQ">GTQ</MenuItem>
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="HNL">HNL</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.section1}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            variant="outline"
            margin="normal"
            id="date-picker-dialog"
            label="Fecha de Ingreso"
            format="dd/MM/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
      <DividerWithText>Actividad Económica de la Empresa</DividerWithText>
      <div className={classes.section1}>
      <FormControl
          variant="outlined"
          className={classes.formControlActEconomica}
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">Act. Economica</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={actividadEconomica}
            onChange={handleChangeActividadEconomica}
            label="Tipo Empresa"
          >
            <MenuItem value={3}>SILVICULTURA</MenuItem>
          </Select>
        </FormControl>
      </div>
    </form>
  );
}
