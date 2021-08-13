import React from "react";
import { Route, Switch } from "react-router-dom";
import Formulario from "../dashboard/Formulario";
import Menu from "../menu/menu";
import Referencias from "../referencias/Referencias";
import NotFound from "../layout/NotFound";

const Routes = (props) => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/formulario" component={Formulario} />
        <Route exact path="/referencias" component={Referencias} />
        <Route exact path="/perfilEconomico" component={Referencias} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
