import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PetRegister from "./pages/PetRegister";
import Pet from "./pages/Pet";

export default function routes(props) {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/home" component={Home} />
      <Route path="/petRegister" component={PetRegister} />
      <Route path="/pet/:id" component={Pet} />
    </Switch>
  );
}
