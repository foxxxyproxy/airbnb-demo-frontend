import React from "react";

import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import { Helmet } from "react-helmet";

import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/Home" />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/become_a_host" component={Home} />
        <Route exact path="/trips" component={Home} />
        <Route exact path="/messages" component={Home} />
        <Route exact path="/profile" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
