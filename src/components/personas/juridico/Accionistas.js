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

export default function Accionistas() {
  const classes = useStyles();
  
  const [acciones, setAcciones] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const [extranjeros, setExtranjeros] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  

  const handleChangeAcciones = (event) => {
    setAcciones({ ...acciones, [event.target.name]: event.target.checked });
  };

  const handleChangeExtranjeros = (event) => {
    setExtranjeros({ ...extranjeros, [event.target.name]: event.target.checked });
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
      <DividerWithText>Porcentaje Accionistas</DividerWithText>
      
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={acciones.checkedB}
              onChange={handleChangeAcciones}
              name="checkedB"
              color="primary"
            />
          }
          label="Cuenta con accionistas o socios con mas de 10% de acciones"
        />
      </div>
      <div className={classes.section1}>
        <FormControlLabel
          className={classes.formControlSwitch}
          control={
            <Switch
              checked={extranjeros.checkedB}
              onChange={handleChangeExtranjeros}
              name="checkedB"
              color="primary"
            />
          }
          label="Cuenta con accionistas o socios con mas de 10% extranjeros"
        />
      </div>
      
    </form>
  );
}
