import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <NavigationContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}
