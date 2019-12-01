import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import SearchScreen from 'screens/SearchScreen';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={SearchScreen} />
            </Switch>
        </Router>
    )
}

export default Routes;