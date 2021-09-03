import React from "react";
/* import ReferenciasBancarias from "./ReferenciasBancarias";
import ReferenciasComerciales from "./ReferenciasComerciales";
import ReferenciasLaborales from "./ReferenciasLaborales";
import ReferenciasPersonales from "./ReferenciasPersonales"; */
import { makeStyles } from "@material-ui/core/styles";
import TutorialsList from "../../componentes/referencias/tutorials-list.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddTutorial from "../../componentes/referencias/add-tutorial.component";
import Tutorial from "../../componentes/referencias/tutorial.component";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ReferenciasIndividual() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/formularioIndividual", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route exact path="/tutorials/:id" component={Tutorial} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
