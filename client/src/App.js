import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

import MainPage from "./pages/main";
import AdminPage from "./pages/admin";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/admin" component={AdminPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </Router>
  );
};

export default App;
