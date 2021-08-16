import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/HomePage";
import Medicamentos from "./pages/Medicamentos";

export default function routes(props) {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/home" component={Home} />
      <Route path="/gerenciar-medicamentos" component={Medicamentos} />
    </Switch>
  );
}
