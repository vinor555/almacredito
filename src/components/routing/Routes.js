import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "../menu/menu";
import Referencias from "../referencias/Referencias";
import NotFound from "../layout/NotFound";
import FormularioIndividual from "../personas/individual/Formulario";
import FormularioJuridico from "../personas/juridico/FormularioJuridico";

const Routes = (props) => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/referencias" component={Referencias} />
        <Route exact path="/perfilEconomico" component={Referencias} />
        <Route exact path="/formularioIndividual" component={FormularioIndividual} />
        <Route exact path="/formularioJuridico" component={FormularioJuridico} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
