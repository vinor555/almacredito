import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import StyleIcon from "@material-ui/icons/Style";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { Link } from "react-router-dom";

//import dialog
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  externo: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: theme.spacing(20, 0),
  },
  main: {
    margin: theme.spacing(20, 0),
  },
  icon: {
    fontSize: 100,
  },
  boton: {
    flexDirection: "column",
  },
  oot: {
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

export default function Menu() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [tiposPersona, setTiposPersona] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tipoPersona, setTipoPersona] = useState("");
  const [link, setLink] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeTipoPersona = (event) => {
    
    setTipoPersona(event.target.value);
    console.log(tipoPersona)
  };

  useEffect(() => {
    fetch(
      "https://DesaAppVarias11.chncentral.chn.com.gt:9443/middleware/catalogos/tiposPersona/all"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setTiposPersona(data.list);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function TipoPersona(props) {
    const tipoPersona = props.tipoPersonaProps;
    if (tipoPersona === 1) {
       setLink('formularioIndividual');
    } else if (tipoPersona === 2) {
      setLink('juridica');
    }
    return "";
  }

  return (
    <div className={classes.main}>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Seleccione tipo de persona que desea crear"}
        </DialogTitle>
        <DialogContent>
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
          <TipoPersona tipoPersonaProps={tipoPersona} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Link to={`/${link}`}> 
            <Button onClick={handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </Link>
        </DialogActions>
      </Dialog>

      <div className={classes.externo}>
        <Link to="/formulario">
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PersonIcon className={classes.icon} />
              <div>Nuevo</div>
            </IconButton>
          </label>
        </Link>

        <Link to="/productos">
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <StyleIcon className={classes.icon} />
              <div>Productos</div>
            </IconButton>
          </label>
        </Link>
        <label htmlFor="icon-button-file" onClick={handleClickOpen}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <DescriptionIcon className={classes.icon} />
            <div>Perfil Econ. Trans.</div>
          </IconButton>
        </label>
      </div>
      <div className={classes.externo}>
        <Link to="/referencias">
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <GroupAddIcon className={classes.icon} />
              <div>Referencias</div>
            </IconButton>
          </label>
        </Link>
      </div>
    </div>
  );
}
