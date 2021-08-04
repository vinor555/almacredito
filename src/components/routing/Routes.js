import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Formulario from '../dashboard/Formulario';
import Menu from '../menu/menu';

const Routes = props => {
    return (
      <section className="container">
        <Switch>
          <Route exact path="/formulario" component={Formulario} />
          <Route exact path="/" component={Menu} />
        </Switch>
      </section>
    );
  };
  
  export default Routes;

