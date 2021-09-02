import React, { useState } from "react";
import { Link } from "react-router-dom";

//Material UI
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import ConsultaIndividual from "../../../componentes/consulta/ConsultaIndividual";
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
  button: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "15ch",
  },

  section1: {
    margin: theme.spacing(1, 1),
  },

  sectionButton: {
    margin: theme.spacing(2, 1),
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

export default function Consulta() {
  const classes = useStyles();
  const [tipoId, setTipoId] = useState("");

  const handleChangeTipoId = (event) => {
    setTipoId(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <ConsultaIndividual />
    </form>
  );
}
