import React, { useState, useEffect } from "react";
import ListaDirecciones from "../dashboard/ListaDirecciones";
import ListaCorreos from "../dashboard/ListaCorreos";

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

export default function IndividualDatosPersonales() {
  const classes = useStyles();
  const [tipoID, setTipoID] = useState("");
  const [departamento, setDepartamento] = useState(1);
  const [municipio, setMunicipio] = useState(5);
  const [estadoCivil, setEstadoCivil] = useState("");
  const [sexo, setSexo] = useState("");
  const [nivelAcademico, setNivelAcademico] = useState("");

  const [selectedDate, setSelectedDate] = useState(
    new Date("1985-06-15T21:11:54")
  );

  //consumir el servicio de departamentos
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);

  useEffect(() => {
    fetch(
      "https://DesaAppVarias11.chncentral.chn.com.gt:9443/middleware/catalogos/departamentos/all"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data.departamentos);
          setIsLoaded(true);
          setDepartamentos(data.departamentos);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
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
          console.log(data.municipios);
          setIsLoaded(true);
          setMunicipios(data.municipios);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [departamento]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChangeTipoID = (event) => {
    setTipoID(event.target.value);
  };

  const handleChangeDepartamento = (event) => {
    setDepartamento(event.target.value);
    console.log(departamento);
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
      <DividerWithText>Lugar Emisi??n Identificaci??n</DividerWithText>
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
      <DividerWithText>Nit</DividerWithText>
      <div className={classes.section1}>
        <TextField
          required
          id="outlined-required"
          label="Nit"
          defaultValue=""
          variant="outlined"
          size="small"
        />
      </div>
      <DividerWithText>Nombres</DividerWithText>
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
          required
          id="outlined-required"
          label="Segundo Nombre"
          defaultValue=""
          variant="outlined"
          size="small"
        />
        <TextField
          required
          id="outlined-required"
          label="Tercer Nombre"
          defaultValue=""
          variant="outlined"
          size="small"
        />
      </div>
      <DividerWithText>Apellidos</DividerWithText>
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
          required
          id="outlined-required"
          label="Segundo Apellido"
          defaultValue=""
          variant="outlined"
          size="small"
        />
        <TextField
          required
          id="outlined-required"
          label="Apellido Nombre"
          defaultValue=""
          variant="outlined"
          size="small"
        />
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
            Nivel Acad??mico
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={nivelAcademico}
            onChange={handleChangeNivelAcademico}
            label="Nivel Acad??mico"
          >
            <MenuItem value={1}>Primnaria</MenuItem>
            <MenuItem value={2}>B??sicos</MenuItem>
            <MenuItem value={3}>Bachillerato</MenuItem>
            <MenuItem value={4}>Universidad</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          id="outlined-required"
          label="Profesi??n"
          defaultValue=""
          variant="outlined"
          size="small"
        />
        <TextField
          required
          id="outlined-required"
          label="Ocupaci??n"
          defaultValue=""
          variant="outlined"
          size="small"
        />
      </div>
      <ListaDirecciones />
      <ListaCorreos />
    </form>
  );
}
