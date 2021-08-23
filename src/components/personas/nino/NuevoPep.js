import React, { useState } from "react";
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

export default function NuevoPep() {
  const classes = useStyles();
  const [tipoPep, setTipoPep] = useState("");
  const [condicionPep, setCondicionPep] = useState("");
  const [generoPep, setGeneroPep] = useState("");
  const [paisPep, setPaisPep] = useState("");
  const [parentesco, setParentesco] = useState("");

  const handleChangeTipoPep = (event) => {
    setTipoPep(event.target.value);
  };

  const handleChangeCondicionPep = (event) => {
    setCondicionPep(event.target.value);
  };

  const handleChangeGeneroPep = (event) => {
    setGeneroPep(event.target.value);
  };

  const handleChangePaisPep = (event) => {
    setPaisPep(event.target.value);
  };

  const handleChangeParentesco = (event) => {
    setParentesco(event.target.value);
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
            Fam/Asoc
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={tipoPep}
            onChange={handleChangeTipoPep}
            label="Fam/Asoc"
          >
            <MenuItem value="F">FAMILIAR</MenuItem>
            <MenuItem value="A">ASOCIADO</MenuItem>
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
            Parentesco
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={parentesco}
            onChange={handleChangeParentesco}
            label="Parentesco"
          >
            <MenuItem value="F">CONYUGE</MenuItem>
            <MenuItem value="A">HERMANO(A)</MenuItem>
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
            Condición
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={condicionPep}
            onChange={handleChangeCondicionPep}
            label="Condición"
          >
            <MenuItem value="N">NACIONAL</MenuItem>
            <MenuItem value="E">EXTRANJERO</MenuItem>
          </Select>
        </FormControl>
      </div>
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
          label="Apellido Casada"
          defaultValue=""
          variant="outlined"
          size="small"
        />
      </div>

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
      <div className={classes.section1}>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          required
          size="small"
        >
          <InputLabel id="demo-simple-select-outlined-label">Género</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={generoPep}
            onChange={handleChangeGeneroPep}
            label="Género"
          >
            <MenuItem value="F">FEMENINO</MenuItem>
            <MenuItem value="M">MASCULINO</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.section1}>
        <TextField
          required
          id="outlined-required"
          label="Institución"
          defaultValue=""
          variant="outlined"
          size="small"
          style={{ width: "54ch" }}
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
          style={{ width: "54ch" }}
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
            País Institución
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={paisPep}
            onChange={handleChangePaisPep}
            label="País Institución"
          >
            <MenuItem value="GTM">GUATEMALA</MenuItem>
            <MenuItem value="MEX">MEXICO</MenuItem>
          </Select>
        </FormControl>
      </div>
    </form>
  );
}
