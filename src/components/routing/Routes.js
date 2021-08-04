import React from "react";
import { Route, Switch } from "react-router-dom";
import Formulario from "../dashboard/Formulario";
import Menu from "../menu/menu";
import Referencias from "../referencias/Referencias";

const Routes = (props) => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/formulario" component={Formulario} />
        <Route exact path="/referencias" component={Referencias} />
      </Switch>
    </section>
  );
};

export default Routes;
