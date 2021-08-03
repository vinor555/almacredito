import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import StyleIcon from "@material-ui/icons/Style";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Formulario from "../dashboard/Formulario";

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
}));

export default function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.externo}>
        <Router>
          <Link to="/nuevo">
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
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <DescriptionIcon className={classes.icon} />
              <div>Perfil Econ. Trans.</div>
            </IconButton>
          </label>
          <Switch>
            <Route exact path="/nuevo" component={Formulario} />
          </Switch>
        </Router>
      </div>
      <div className={classes.externo}>
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
      </div>
    </div>
  );
}