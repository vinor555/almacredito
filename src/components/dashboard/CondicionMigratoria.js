import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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

export default function CondicionMigratoria() {
  const classes = useStyles();
  const [nacionalidad, setNacionalidad] = useState("");
  const [departamentoNacNac, setDepartamentoNacNac] = useState(1);
  const [municipioNacNac, setMunicipioNacNac] = useState("");
  const [paisExt, setPaisExt] = useState("");

  const handleChangeNacionalidad = (event) => {
    setNacionalidad(event.target.value);
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

  //consumir el servicio de departamentos
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [paises, setPaises] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);

  useEffect(() => {
    fetch(
      "https://DesaAppVarias11.chncentral.chn.com.gt:9443/middleware/catalogos/paises/all"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data.paises);
          setIsLoaded(true);
          setPaises(data.paises);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
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
      `https://DesaAppVarias11.chncentral.chn.com.gt:9443/middleware/catalogos/municipios/findAllByCodigoDepartamento?codigoDepartamento=${departamentoNacNac}`
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
  }, [departamentoNacNac]);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <DividerWithText>Datos Generales</DividerWithText>
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
          <InputLabel id="demo-simple-select-outlined-label">Pa??s</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={paisExt}
            onChange={handleChangePaisExt}
            label="Pa??s"
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
