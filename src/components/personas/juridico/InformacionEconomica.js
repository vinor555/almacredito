import React from "react";
import PersonaJuridica from "./PersonaJuridica";
import UbicacionProveedor from "./UbicacionProveedor";

//Material UI
import { makeStyles } from "@material-ui/core/styles";


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
  formControlActEconomica: {
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

export default function InformacionEconomica() {
  const classes = useStyles();


  const DividerWithText = ({ children }) => {
    return (
      <div className={classes.container}>
        <span className={classes.content}>{children}</span>
      </div>
    );
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <DividerWithText>
        Información Económico-Financiera de la Entidad
      </DividerWithText>
      <PersonaJuridica />
      <UbicacionProveedor />
    </form>
  );
}
