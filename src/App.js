import React, { Fragment, useEffect } from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Formulario from "./components/dashboard/Formulario";
import Menu from "./components/menu/menu";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./components/routing/Routes";

function App() {
  return (
    <div>
      <Router>
        <Dashboard />

        <Fragment>
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
