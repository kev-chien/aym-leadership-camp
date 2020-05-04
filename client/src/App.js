import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

import MainPage from "./pages/main";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
};

export default App;
