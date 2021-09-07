import React, { useState, useEffect } from "react";
import IndividualDatosPersonales from "../../tiposPersona/IndividualDatosPersonales";
import servicio from "../../../services/services";

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function DatosPersonales(props) {
  console.log("props Datos personales");
  console.log(props);
  const { codigoCliente } = props;
  const classes = useStyles();
  const [personaIndividual, setPersonaIndividual] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    await servicio
      .getIndividualById(codigoCliente)
      .then((response) => {
        setPersonaIndividual(response.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log("response.error");

        console.log(e);
      });
  }, []);

  return !isLoading ? (
    <form className={classes.root} noValidate autoComplete="off">
      <IndividualDatosPersonales
        personaIndividual={personaIndividual}
        codigoCliente={codigoCliente}
      />
    </form>
  ) : null;
}
