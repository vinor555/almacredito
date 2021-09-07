import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

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

export default function NuevaDireccion() {
  const classes = useStyles();
  const [tipoDireccion, setTipoDireccion] = useState("");
  const [departamento, setDepartamento] = useState(1);
  const [municipio, setMunicipio] = useState(5);

  //consumir el servicio de departamentos
  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);

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

  const handleChangeDepartamento = (event) => {
    setDepartamento(event.target.value);
    console.log(departamento);
  };

  const handleChangeMunicipio = (event) => {
    setMunicipio(event.target.value);
  };

  const handleChangeTipoDireccion = (event) => {
    setTipoDireccion(event.target.value);
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
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Tipo Dirección
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={tipoDireccion}
            onChange={handleChangeTipoDireccion}
            label="Tipo Dirección"
          >
            <MenuItem value={1}>DOMICILIO</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          id="outlined-required"
          label="Dirección"
          defaultValue=""
          variant="outlined"
          className={classes.formControlLG}
          size="small"
        />
        <TextField
          required
          id="outlined-required"
          label="Zona"
          defaultValue=""
          variant="outlined"
          size="small"
        />
      </div>
      <DividerWithText>Ubicación Geográfica</DividerWithText>
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
                value={municipio.codigoMunicipio}
              >
                {municipio.descripcion}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={classes.section1}>
        <TextField
          required
          id="outlined-required"
          label="Apartado Postal"
          defaultValue=""
          variant="outlined"
          size="small"
        />
        <TextField
          required
          id="outlined-required"
          label="Código Postal"
          defaultValue=""
          variant="outlined"
          size="small"
        />
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
      </div>
      <div className={classes.section1}>
        <TextField
          required
          id="outlined-required"
          label="Fax"
          defaultValue=""
          variant="outlined"
          size="small"
        />
      </div>
    </form>
  );
}
