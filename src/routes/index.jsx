import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SearchScreen from "screens/SearchScreen";
import PlayerDetailScreen from "screens/PlayerDetailScreen";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchScreen} />
        <Route exact path="/player" component={PlayerDetailScreen} />
      </Switch>
    </Router>
  );
};

export default Routes;
