import React, { useState } from "react";

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
    width: "50ch",
  },
  formControlSwitch: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "23ch",
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

export default function Sectores() {
  const classes = useStyles();
  const [ispf, setIspf] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const [actividadEconomica, setActividadEconomica] = useState("");
  const [sectorEconomico, setSectorEconomico] = useState("");
  const [sectorEconomicoIve, setSectorEconomicoIve] = useState("");
  const [claseCliente, setClaseCliente] = useState("");
  const [agrupacion, setAgrupacion] = useState("");

  const handleChangeISPF = (event) => {
    setIspf({ ...ispf, [event.target.name]: event.target.checked });
  };

  const handleChangeActividadEconomica = (event) => {
    setActividadEconomica(event.target.value);
  };

  const handleChangeSectorEconomico = (event) => {
    setSectorEconomico(event.target.value);
  };

  const handleChangeSectorEconomicoIve = (event) => {
    setSectorEconomicoIve(event.target.value);
  };

  const handleChangeClaseCliente = (event) => {
    setClaseCliente(event.target.value);
  };
  const handleChangeAgrupacion = (event) => {
    setAgrupacion(event.target.value);
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
      <DividerWithText>Datos Generales</DividerWithText>
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={ispf.checkedB}
              onChange={handleChangeISPF}
              name="checkedB"
              color="primary"
            />
          }
          label="Es Afecto a ISPF"
        />
        <TextField
          id="outlined-required"
          label="C??digo Empleado"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControl}
        />
      </div>
      <div className={classes.section1}>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Actividad Econ??mica
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={actividadEconomica}
            onChange={handleChangeActividadEconomica}
            label="Actividad Econ??mica"
          >
            <MenuItem value={755}>EMPLEADO REL DEPENDENCIA (PUBLICO)</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Sector Econ??mico
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={sectorEconomico}
            onChange={handleChangeSectorEconomico}
            label="Sector Econ??mico"
          >
            <MenuItem value={3}>Otras Entidades Financieras</MenuItem>
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
            Sector Econ??mico IVE
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={sectorEconomicoIve}
            onChange={handleChangeSectorEconomicoIve}
            label="Sector Econ??mico"
          >
            <MenuItem value={1}>SECTOR GOBIERNO</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Clase de Cliente
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={claseCliente}
            onChange={handleChangeClaseCliente}
            label="Clase de Cliente"
          >
            <MenuItem value={1}>PARTICULAR</MenuItem>
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
            Agrupaci??n
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={agrupacion}
            onChange={handleChangeAgrupacion}
            label="Agrupaci??n"
          >
            <MenuItem value={1}>PARTICULARES</MenuItem>
          </Select>
        </FormControl>
      </div>
    </form>
  );
}
