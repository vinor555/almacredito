import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
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
    width: "52ch",
  },
  section1: {
    margin: theme.spacing(1, 1),
  },
}));

export default function NuevaReferenciaBancaria() {
  const classes = useStyles();
  const [banco, setBanco] = useState("");

  const handleChangeBanco = (event) => {
    setBanco(event.target.value);
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
            Banco
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={banco}
            onChange={handleChangeBanco}
            label="Nivel Académico"
          >
            <MenuItem value={1}>BANCO DE GUATEMALA</MenuItem>
            <MenuItem value={2}>CREDITO HIPOTECARIO NACIONAL</MenuItem>
            <MenuItem value={3}>BANCO DE LOS TRABAJADORES</MenuItem>
            <MenuItem value={4}>BANCO INMOBILIARIO</MenuItem>
            <MenuItem value={4}>BANRURAL</MenuItem>

          </Select>
        </FormControl>
      </div>
      <div className={classes.section1}>
        <TextField
          required
          id="outlined-required"
          label="Nombre"
          defaultValue=""
          variant="outlined"
          size="small"
          style={{ width: "52ch" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Dirección"
          defaultValue=""
          variant="outlined"
          size="small"
          style={{ width: "52ch" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Teléfono 1"
          defaultValue=""
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-required"
          label="Teléfono 2"
          defaultValue=""
          variant="outlined"
          size="small"
        />
        <TextField
          required
          id="outlined-required"
          label="Tipo Producto"
          defaultValue=""
          variant="outlined"
          size="small"
          style={{ width: "52ch" }}
        />
      </div>
    </form>
  );
}
