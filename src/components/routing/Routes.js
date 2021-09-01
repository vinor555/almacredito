import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "../menu/menu";
import Referencias from "../referencias/Referencias";
import NotFound from "../layout/NotFound";
import FormularioIndividual from "../personas/individual/Formulario";
import FormularioJuridico from "../personas/juridico/FormularioJuridico";
import FormularioNino from "../personas/nino/FormularioNino";
import ConsultaIndividual from "../personas/individual/Consulta";
import ReferenciasIndividual from "../../componentes/referencias/ReferenciasIndividual";
import tutorialsListComponent from "../../componentes/referencias/tutorials-list.component";
import AddTutorial from "../../componentes/referencias/add-tutorial.component";
import Tutorial from "../../componentes/referencias/tutorial.component";

//import Secured from "../menu/Secured";
//import Key from "../menu/Key";

const Routes = (props) => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/referencias" component={Referencias} />
        <Route exact path="/referenciasIndividual" component={tutorialsListComponent} />
        <Route exact path="/perfilEconomico" component={Referencias} />
        <Route
          exact
          path="/formularioIndividual"
          component={FormularioIndividual}
        />
        <Route
          exact
          path="/formularioJuridico"
          component={FormularioJuridico}
        />
        <Route exact path="/formularioNino" component={FormularioNino} />

        <Route exact path="/consulta" component={ConsultaIndividual} />

        <Route exact path={["/tutorials"]} component={tutorialsListComponent} />
        <Route path="/tutorials/:id" component={Tutorial} />
        <Route exact path={["/add"]} component={AddTutorial} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
