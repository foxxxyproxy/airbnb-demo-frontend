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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
