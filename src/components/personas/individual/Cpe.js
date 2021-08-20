import React, { useState } from "react";

//Material UI
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
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

export default function Cpe() {
  const classes = useStyles();
  const [sefr, setSefr] = useState("");
  const [nacext, setNacext] = useState("");
  const [cpe, setCpe] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const [finanzas, setFinanzas] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const [otros, setOtros] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const [guatecompras, setGuatecompras] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChangeCpe = (event) => {
    setCpe({ ...cpe, [event.target.name]: event.target.checked });
  };

  const handleChangeFinanzas = (event) => {
    setFinanzas({ ...finanzas, [event.target.name]: event.target.checked });
  };

  const handleChangeOtros = (event) => {
    setOtros({ ...otros, [event.target.name]: event.target.checked });
  };

  const handleChangeGuatecompras = (event) => {
    setGuatecompras({
      ...guatecompras,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeSefr = (event) => {
    setSefr(event.target.value);
  };

  const handleChangeNacext = (event) => {
    setNacext(event.target.value);
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
      <DividerWithText>Contratistas o Proveedores del Estado</DividerWithText>
      <div className={classes.section1}>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">SEFR</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={sefr}
            onChange={handleChangeSefr}
            label="Sefr"
          >
            <MenuItem key={1} value={1}>
              Solicitante
            </MenuItem>
            <MenuItem key={2} value={2}>
              Entidad Solicitante
            </MenuItem>
            <MenuItem key={3} value={3}>
              Firmante
            </MenuItem>
            <MenuItem key={4} value={4}>
              Representante
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={cpe.checkedB}
              onChange={handleChangeCpe}
              name="checkedB"
              color="primary"
            />
          }
          label="Es Contratista o Proveedor del Estado (CPE)"
        />
      </div>
      <div className={classes.section1}>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">Nac o Ext</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={nacext}
            onChange={handleChangeNacext}
            label="Sefr"
          >
            <MenuItem key={1} value={1}>
              Nacional
            </MenuItem>
            <MenuItem key={2} value={2}>
              Extranjero
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={finanzas.checkedB}
              onChange={handleChangeFinanzas}
              name="checkedB"
              color="primary"
            />
          }
          label="El producto o servicio esta asociado a la cuenta declarada en la Tesorería del Ministerio de Finanzas"
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={otros.checkedB}
              onChange={handleChangeOtros}
              name="checkedB"
              color="primary"
            />
          }
          label="Cuenta con otros productos y servicios con la persona obligada"
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={guatecompras.checkedB}
              onChange={handleChangeGuatecompras}
              name="checkedB"
              color="primary"
            />
          }
          label="Su estatus actual en GUATECOMPRAS es inhabilitado"
        />
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Nombre de la institución del Estado"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlLG}
        />
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Nombre de la institución del Estado con quien ha obtenido adquisiciones públicas"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlLG}
        />
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Tipo de bien, suministro, otra, servicio o arrendamiento que provee o vende"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlLG}
        />
      </div>
      <div className={classes.section1}>
        <TextField
          id="outlined-required"
          label="Categoria a la que pertenece el bien o servicio"
          defaultValue=""
          variant="outlined"
          size="small"
          className={classes.formControlLG}
        />
      </div>
    </form>
  );
}
