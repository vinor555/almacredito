import React, { useState, useEffect } from "react";
import IndividualDatosPersonales from "../tiposPersona/IndividualDatosPersonales";
import JuridicaDatosPersonales from "../tiposPersona/JuridicaDatosPersonales";

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "date-fns";

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
  formControlDir: {
    width: "100ch",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  rootCard: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  section1: {
    margin: theme.spacing(1, 1),
  },

  container: {
    display: "flex",
    alignItems: "center",
  },
  border: {
    borderBottom: "1px solid lightgray",
    width: "100%",
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

export default function DatosPersonales() {
  const classes = useStyles();
  const [tipoPersona, setTipoPersona] = useState("");

  //consumir el servicio
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tiposPersona, setTiposPersona] = useState([]);

  useEffect(() => {
    fetch(
      "https://DesaAppVarias11.chncentral.chn.com.gt:9443/middleware/catalogos/tiposPersona/all"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          console.log("TESTEANDO");
          console.log(data.list);
          setIsLoaded(true);
          setTiposPersona(data.list);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const handleChangeTipoPersona = (event) => {
    setTipoPersona(event.target.value);
  };

  function TipoPersona(props){
    const tipoPersona = props.tipoPersonaProps;
    if ( tipoPersona === 1 ) {
        return <IndividualDatosPersonales />;
    } else if (tipoPersona === 2) {
      return <JuridicaDatosPersonales />;
    }
    return '';
}

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
            Tipo de Persona
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={tipoPersona}
            onChange={handleChangeTipoPersona}
            label="Tipo de Persona"
          >
            {tiposPersona.map((tipoPersona) => (
              <MenuItem
                key={tipoPersona.codigoTipoPersona}
                value={tipoPersona.codigoTipoPersona}
              >
                {tipoPersona.descripcion}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <TipoPersona tipoPersonaProps={tipoPersona} />
      
    </form>
  );
}
