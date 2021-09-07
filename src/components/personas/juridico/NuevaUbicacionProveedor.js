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
}));

export default function NuevaUbicacionProveedor() {
  const classes = useStyles();
  const [departamentoNacNac, setDepartamentoNacNac] = useState(1);
  const [municipioNacNac, setMunicipioNacNac] = useState("");
  const [paisExt, setPaisExt] = useState("");

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

  //consumir el servicio de departamentos
  const [paises, setPaises] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);

  return (
    <form className={classes.root} noValidate autoComplete="off">
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
                value={municipio.codigoMunicipio}
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
