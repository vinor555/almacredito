import React, { useState, useEffect } from "react";
//Material UI

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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

export default function TrabajoActual() {
  const classes = useStyles();
  const [tipoEmpresa, setTipoEmpresa] = useState("");
  const [tipoActividad, setTipoActividad] = useState();
  const [departamentoNacNac, setDepartamentoNacNac] = useState(1);
  const [municipioNacNac, setMunicipioNacNac] = useState("");
  const [paisExt, setPaisExt] = useState("");

  const [relacion, setRelacion] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const [selectedDate, setSelectedDate] = useState(
    new Date("1985-06-15T21:11:54")
  );

  //consumir el servicio de departamentos
  const [paises, setPaises] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);

  const handleChangeTipoEmpresa = (event) => {
    setTipoEmpresa(event.target.value);
  };

  const handleChangeTipoActividad = (event) => {
    setTipoActividad(event.target.value);
  };

  const handleChangeRelacion = (event) => {
    setRelacion({ ...relacion, [event.target.name]: event.target.checked });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChangeDepartamentoNacNac = (event) => {
    setDepartamentoNacNac(event.target.value);
  };

  const handleChangeMunicipioNacNac = (event) => {
    setMunicipioNacNac(event.target.value);
  };

  const handleChangePaisExt = (event) => {
    setPaisExt(event.target.value);
  };

  useEffect(() => {
    fetch(
      "https://DesaAppVarias11.chncentral.chn.com.gt:9443/middleware/catalogos/paises/all"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setPaises(data.paises);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  useEffect(() => {
    fetch(
      "https://DesaAppVarias11.chncentral.chn.com.gt:9443/middleware/catalogos/departamentos/all"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setDepartamentos(data.departamentos);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  useEffect(() => {
    fetch(
      `https://DesaAppVarias11.chncentral.chn.com.gt:9443/middleware/catalogos/municipios/findAllByCodigoDepartamento?codigoDepartamento=${departamentoNacNac}`
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setMunicipios(data.municipios);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [departamentoNacNac]);

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
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={relacion.checkedB}
              onChange={handleChangeRelacion}
              name="checkedB"
              color="primary"
            />
          }
          label="¿Trabaja en relación de dependencia?"
        />
      </div>
      <DividerWithText>
        Si trabaja en relacion de dependencia complete los siguientes datos
      </DividerWithText>
      <div className={classes.section1}>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Tipo de Empresa
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={tipoEmpresa}
            onChange={handleChangeTipoEmpresa}
            label="Tipo de Empresa"
          >
            <MenuItem value="PR">Privada</MenuItem>
            <MenuItem value="PU">Pública</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Act Eco Empresa
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={tipoEmpresa}
            onChange={handleChangeTipoEmpresa}
            label="Tipo de Empresa"
          >
            <MenuItem value="PR">Agricultura</MenuItem>
            <MenuItem value="PU">Ganadería</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={classes.section1}>
        <TextField
          required
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
          required
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
          required
          id="outlined-required"
          label="Direccion"
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
          label="Zona"
          defaultValue=""
          variant="outlined"
          size="small"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            variant="outline"
            margin="normal"
            id="date-picker-dialog"
            label="Fecha Ingreso"
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
          label="Ing. Mensual"
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
          <InputLabel id="demo-simple-select-outlined-label">Moneda</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={tipoActividad}
            onChange={handleChangeTipoActividad}
            label="Actividad Económica"
          >
            <MenuItem value={1}>GTQ</MenuItem>
            <MenuItem value={2}>USD</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.section1}>
        <TextField
          required
          id="outlined-required"
          label="Teléfono 1"
          defaultValue=""
          variant="outlined"
          size="small"
        />
        <TextField
          required
          id="outlined-required"
          label="Teléfono 2"
          defaultValue=""
          variant="outlined"
          size="small"
        />
        <TextField
          required
          id="outlined-required"
          label="Fax"
          defaultValue=""
          variant="outlined"
          size="small"
        />
      </div>
      <DividerWithText>Ubicación</DividerWithText>

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
            value={paisExt}
            onChange={handleChangePaisExt}
            label="País"
          >
            {paises.map((pais) => (
              <MenuItem key={pais.codigoPais} value={pais.codigoPais}>
                {pais.descripcion}
              </MenuItem>
            ))}
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
            value={departamentoNacNac}
            onChange={handleChangeDepartamentoNacNac}
            label="Departamento"
          >
            {departamentos.map((departamento) => (
              <MenuItem
                key={departamento.codigoDepartamento}
                value={departamento.codigoDepartamento}
              >
                {departamento.descripcion}
              </MenuItem>
            ))}
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
            value={municipioNacNac}
            onChange={handleChangeMunicipioNacNac}
            label="Municipio"
          >
            {municipios.map((municipio) => (
              <MenuItem
                key={municipio.codigoMunicipio}
                value={municipio.descripcion}
              >
                {municipio.descripcion}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </form>
  );
}
