import React, { useState, useEffect } from "react";
import tutorialService from "../../services/tutorial.service";

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
//import { Button } from "bootstrap";

import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

//import AccountCircle from "@material-ui/icons/AccountCircle";
import AccountCircle from "@material-ui/icons/ArrowRight";

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

export default function IndividualDatosPersonales(props) {
  const classes = useStyles();
  const [tipoID, setTipoID] = useState("");
  const [departamento, setDepartamento] = useState(1);
  const [municipio, setMunicipio] = useState(5);
  const [estadoCivil, setEstadoCivil] = useState("");
  const [sexo, setSexo] = useState("");
  const [nivelAcademico, setNivelAcademico] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [departamentoNacNac, setDepartamentoNacNac] = useState(1);
  const [municipioNacNac, setMunicipioNacNac] = useState(5);
  const [paisExt, setPaisExt] = useState("");
  const { codigoCliente } = props;
  const [personaActual, setPersonaActual] = useState({});

  useEffect(() => {
    tutorialService
      .getIndividualById(codigoCliente)
      .then((response) => {
        setPersonaActual(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const [noId, setNoId] = useState(null);
  const [nit, setNit] = useState(null);
  const [primerNombre, setPrimerNombre] = useState(null);
  const [segundoNombre, setSegundoNombre] = useState(null);
  const [primerApellido, setPrimerApellido] = useState(null);
  const [segundoApellido, setSegundoApellido] = useState(null);
  const handleChangeNoId = (event) => {
    setNoId(event.target.value);
  };
  const handleChangeNit = (event) => {
    setNit(event.target.value);
  };
  const handleChangePrimerNombre = (event) => {
    setPrimerNombre(event.target.value);
  };
  const handleChangeSegundoNombre = (event) => {
    setSegundoNombre(event.target.value);
  };
  const handleChangePrimerApellido = (event) => {
    setPrimerApellido(event.target.value);
  };
  const handleChangeSegundoApellido = (event) => {
    setSegundoApellido(event.target.value);
  };

  const [selectedDate, setSelectedDate] = useState(
    new Date("1985-06-15T21:11:54")
  );

  //consumir el servicio de departamentos
  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [paises, setPaises] = useState([]);

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
      `https://DesaAppVarias11.chncentral.chn.com.gt:9443/middleware/catalogos/municipios/findAllByCodigoDepartamento?codigoDepartamento=${departamento}`
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
  }, [departamento]);

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

  const handleChangeNacionalidad = (event) => {
    setNacionalidad(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChangeTipoID = (event) => {
    setTipoID(event.target.value);
  };

  const handleChangeDepartamento = (event) => {
    setDepartamento(event.target.value);
  };

  const handleChangeMunicipio = (event) => {
    setMunicipio(event.target.value);
  };

  const handleChangeSexo = (event) => {
    setSexo(event.target.value);
  };

  const handleChangeEstadoCivil = (event) => {
    setEstadoCivil(event.target.value);
  };

  const handleChangeNivelAcademico = (event) => {
    setNivelAcademico(event.target.value);
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

  const DividerWithText = ({ children }) => {
    return (
      <div className={classes.container}>
        <span className={classes.content}>{children}</span>
      </div>
    );
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <DividerWithText>
        Identificación {personaActual.numeroDocumentoIdentificacion}
      </DividerWithText>
      <div className={classes.section1}>
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
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Número Identificación
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            value={noId ? noId : personaActual.numeroDocumentoIdentificacion}
            onChange={handleChangeNoId}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
      </div>
      <DividerWithText>Lugar Emisión Identificación</DividerWithText>
      <div className={classes.section1}>
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
            value={municipio}
            onChange={handleChangeMunicipio}
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

      <div className={classes.section1}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="input-with-icon-adornment">Nit</InputLabel>
          <Input
            id="input-with-icon-adornment"
            value={nit ? nit : personaActual.nit}
            onChange={handleChangeNit}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
      </div>

      <div className={classes.section1}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Primer Nombre
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            value={primerNombre ? primerNombre : personaActual.primerNombre}
            onChange={handleChangePrimerNombre}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Segundo Nombre
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            value={segundoNombre ? segundoNombre : personaActual.segundoNombre}
            onChange={handleChangeSegundoNombre}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Tercer Nombre
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
      </div>

      <div className={classes.section1}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Primer Apellido
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            value={
              primerApellido ? primerApellido : personaActual.primerApellido
            }
            onChange={handleChangePrimerApellido}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Segundo Apellido
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            value={
              segundoApellido ? segundoApellido : personaActual.segundoApellido
            }
            onChange={handleChangeSegundoApellido}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Tercer Apellido
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
      </div>
      <DividerWithText>Datos Generales</DividerWithText>
      <div className={classes.section1}>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">Sexo</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={sexo}
            onChange={handleChangeSexo}
            label="Sexo"
          >
            <MenuItem value="M">Masculino</MenuItem>
            <MenuItem value="F">Femenino</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Estado Civil
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={estadoCivil}
            onChange={handleChangeEstadoCivil}
            label="Estado Civil"
          >
            <MenuItem value="S">Soltero/a</MenuItem>
            <MenuItem value="C">Casado/a</MenuItem>
          </Select>
        </FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            variant="outline"
            margin="normal"
            id="date-picker-dialog"
            label="Fecha de Nacimiento"
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
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Nacionalidad
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={nacionalidad}
            onChange={handleChangeNacionalidad}
            label="Nacionalidad"
          >
            {paises.map((pais) => (
              <MenuItem key={pais.codigoPais} value={pais.codigoPais}>
                {pais.descripcion}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            variant="outline"
            margin="normal"
            id="date-picker-dialog"
            label="Fecha de Nacimiento"
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
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Nivel Académico
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={nivelAcademico}
            onChange={handleChangeNivelAcademico}
            label="Nivel Académico"
          >
            <MenuItem value={1}>Primnaria</MenuItem>
            <MenuItem value={2}>Básicos</MenuItem>
            <MenuItem value={3}>Bachillerato</MenuItem>
            <MenuItem value={4}>Universidad</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          id="outlined-required"
          label="Profesión"
          defaultValue=""
          variant="outlined"
          size="small"
        />
        <TextField
          required
          id="outlined-required"
          label="Ocupación"
          defaultValue=""
          variant="outlined"
          size="small"
        />
      </div>
      <DividerWithText>Lugar Nacimiento Nacional</DividerWithText>
      <div className={classes.section1}>
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
      <DividerWithText>Lugar Nacimiento Extranjero</DividerWithText>
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
      </div>
    </form>
  );
}
