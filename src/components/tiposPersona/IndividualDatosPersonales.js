import React, { useState, useEffect } from "react";
import services from "../../services/services";

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
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingId, setIsLoadingId] = useState(true);
  const [isLoadingGen, setIsLoadingGen] = useState(true);
  const [isLoadingEst, setIsLoadingEst] = useState(true);
  const [isLoadingNiv, setIsLoadingNiv] = useState(true);
  const [isLoadingProf, setIsLoadingProf] = useState(true);
  const [isLoadingOcup, setIsLoadingOcup] = useState(true);
  const [personaIndividual, setPersonaIndividual] = useState(null);
  const [departamento, setDepartamento] = useState(null);
  const [municipio, setMunicipio] = useState(null);
  const [paisExt, setPaisExt] = useState("");
  const [tipoID, setTipoID] = useState("");
  const [noId, setNoId] = useState(null);
  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [paises, setPaises] = useState([]);
  const [estadoCivil, setEstadoCivil] = useState("");
  const [sexo, setSexo] = useState("");
  const [nivelAcademico, setNivelAcademico] = useState("");
  const [nivelesAcademicos, setNivelesAcademicos] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [departamentoNacNac, setDepartamentoNacNac] = useState("");
  const [municipioNacNac, setMunicipioNacNac] = useState("");
  const [nit, setNit] = useState(null);
  const [primerNombre, setPrimerNombre] = useState(null);
  const [segundoNombre, setSegundoNombre] = useState(null);
  const [otroNombre, setOtroNombre] = useState(null);
  const [primerApellido, setPrimerApellido] = useState(null);
  const [segundoApellido, setSegundoApellido] = useState(null);
  const [apellidoCasada, setApellidoCasada] = useState(null);
  const [tiposDocumento, setTiposDocumento] = useState(null);
  const [generos, setGeneros] = useState(null);
  const [estadosCiviles, setEstadosCiviles] = useState(null);
  const [profesion, setProfesion] = useState(null);
  const [profesiones, setProfesiones] = useState(null);
  const [ocupacion, setOcupacion] = useState(null);
  const [ocupaciones, setOcupaciones] = useState(null);

  useEffect(async () => {
    setIsLoading(true);
    await services
      .getIndividualById(props.codigoCliente)
      .then((response) => {
        setPersonaIndividual(response.data);
        setDepartamento(props.personaIndividual.departamentoEmisionDocumento);
        setMunicipio(props.personaIndividual.municipioEmisionDocumento);
        setPaisExt(props.personaIndividual.paisNacimientoExtranjero);
        setTipoID(props.personaIndividual.tipoDocumentoIdentificacion);
        setNoId(props.personaIndividual.numeroDocumentoIdentificacion);
        setPrimerNombre(props.personaIndividual.primerNombre);
        setSegundoNombre(props.personaIndividual.segundoNombre);
        setOtroNombre(props.personaIndividual.otrosNombres);
        setPrimerApellido(props.personaIndividual.primerApellido);
        setSegundoApellido(props.personaIndividual.segundoApellido);
        setApellidoCasada(props.personaIndividual.apellidoCasada);
        setNit(props.personaIndividual.nit);
        setSexo(props.personaIndividual.genero);
        setEstadoCivil(props.personaIndividual.estadoCivil);
        setNacionalidad(props.personaIndividual.nacionalidad);
        setDepartamentoNacNac(props.personaIndividual.departamentoNacimiento);
        setMunicipioNacNac(props.personaIndividual.municipioNacimiento);
        setPaisExt(props.personaIndividual.paisNacimientoExtranjero);
        setNivelAcademico(props.personaIndividual.paisNacimientoExtranjero);
        setProfesion(props.personaIndividual.codigoProfesion);
        setOcupacion(props.personaIndividual.codigoOcupacion);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(async () => {
    setIsLoadingId(true);
    await services
      .getTiposDocumentoAll()
      .then((response) => {
        setTiposDocumento(response.data.data);
        setIsLoadingId(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(async () => {
    setIsLoading(true);
    await services
      .getDepartamentosAll()
      .then((response) => {
        setDepartamentos(response.data.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(async () => {
    setIsLoading(true);
    await services
      .getMunicipiosByCodigoDepartamento(departamento)
      .then((response) => {
        setMunicipios(response.data.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [departamento]);

  useEffect(async () => {
    setIsLoading(true);
    await services
      .getPaisesAll()
      .then((response) => {
        setPaises(response.data.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(async () => {
    setIsLoadingGen(true);
    await services
      .getGenerosAll()
      .then((response) => {
        setGeneros(response.data.data);
        setIsLoadingGen(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(async () => {
    setIsLoadingEst(true);
    await services
      .getEstadosCivilesAll()
      .then((response) => {
        setEstadosCiviles(response.data.data);
        setIsLoadingEst(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(async () => {
    setIsLoadingNiv(true);
    await services
      .getNivelesAcademicosAll()
      .then((response) => {
        setNivelesAcademicos(response.data.data);
        setIsLoadingNiv(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(async () => {
    setIsLoadingOcup(true);
    await services
      .getOcupacionesAll()
      .then((response) => {
        setOcupaciones(response.data.data);
        setIsLoadingOcup(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(async () => {
    setIsLoadingProf(true);
    await services
      .getProfesionesAll()
      .then((response) => {
        setProfesiones(response.data.data);
        setIsLoadingProf(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
  const handleChangeOtroNombre = (event) => {
    setOtroNombre(event.target.value);
  };
  const handleChangePrimerApellido = (event) => {
    setPrimerApellido(event.target.value);
  };
  const handleChangeSegundoApellido = (event) => {
    setSegundoApellido(event.target.value);
  };
  const handleChangeApellidoCasada = (event) => {
    setApellidoCasada(event.target.value);
  };

  const [selectedDate, setSelectedDate] = useState(
    new Date(
      props.personaIndividual
        ? props.personaIndividual.fechaNacimiento
        : "1985-06-15T21:11:54"
    )
  );

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

  const handleChangeProfesion = (event) => {
    setProfesion(event.target.value);
  };

  const handleChangeOcupacion = (event) => {
    setOcupacion(event.target.value);
  };

  return !isLoading &&
    !isLoadingId &&
    !isLoadingGen &&
    !isLoadingEst &&
    !isLoadingNiv &&
    !isLoadingOcup &&
    !isLoadingProf ? (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.section1}>
        <FormControl
          variant="standard"
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
            {tiposDocumento.map((tipoDocumento) => (
              <MenuItem
                key={tipoDocumento.codigoTipoDocumento}
                value={tipoDocumento.codigoTipoDocumento}
              >
                {tipoDocumento.descripcion}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="input-with-icon-adornment">
            Número Identificación
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            value={noId}
            onChange={handleChangeNoId}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
      </div>

      <div className={classes.section1}>
        <FormControl
          variant="standard"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Departamento Emisión ID
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
          variant="standard"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Municipio Emisión ID
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
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="input-with-icon-adornment">Nit</InputLabel>
          <Input
            id="input-with-icon-adornment"
            value={nit}
            onChange={handleChangeNit}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
      </div>

      <div className={classes.section1}>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="input-with-icon-adornment">
            Primer Nombre
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            value={primerNombre}
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
            value={segundoNombre}
            onChange={handleChangeSegundoNombre}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Otros Nombres
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            value={otroNombre}
            onChange={handleChangeOtroNombre}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
      </div>

      <div className={classes.section1}>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="input-with-icon-adornment">
            Primer Apellido
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            value={primerApellido}
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
            value={segundoApellido}
            onChange={handleChangeSegundoApellido}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Apellido Casada
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            value={apellidoCasada}
            onChange={handleChangeApellidoCasada}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
      </div>

      <div className={classes.section1}>
        <FormControl
          variant="standard"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">Género</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={sexo}
            onChange={handleChangeSexo}
            label="Genero"
          >
            {generos.map((genero) => (
              <MenuItem key={genero.codigoGenero} value={genero.codigoGenero}>
                {genero.descripcion}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          variant="standard"
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
            {estadosCiviles.map((estadoCivil) => (
              <MenuItem
                key={estadoCivil.codigoEstadoCivil}
                value={estadoCivil.codigoEstadoCivil}
              >
                {estadoCivil.descripcion}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={classes.section1}>
        <FormControl
          variant="standard"
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
          variant="standard"
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
            {nivelesAcademicos.map((nivel) => (
              <MenuItem
                key={nivel.codigoNivelAcademico}
                value={nivel.codigoNivelAcademico}
              >
                {nivel.descripcion}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          variant="standard"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Profesión
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={profesion}
            onChange={handleChangeProfesion}
            label="Profesion"
          >
            {profesiones.map((profesion) => (
              <MenuItem
                key={profesion.codigoProfesion}
                value={profesion.codigoProfesion}
              >
                {profesion.descripcion}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          variant="standard"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Ocupación
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={ocupacion}
            onChange={handleChangeOcupacion}
            label="Ocupacion"
          >
            {ocupaciones.map((ocupacion) => (
              <MenuItem
                key={ocupacion.codigoOcupacion}
                value={ocupacion.codigoOcupacion}
              >
                {ocupacion.descripcion}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className={classes.section1}>
        <FormControl
          variant="standard"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Depto Nac Nacional
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
          variant="standard"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Municipio Nac Nacional
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

      {paisExt.trim().length > 0 ? (
        <div className={classes.section1}>
          <FormControl
            variant="standard"
            className={classes.formControl}
            required
            size="small"
          >
            <InputLabel id="demo-simple-select-outlined-label">
              País Nac Extranjero
            </InputLabel>
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
      ) : null}
    </form>
  ) : null;
}
