import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import AuthProvider from "./context/Auth";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider host="http://localhost:3000/">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signin" component={Signin} />
        <Route render={() => <Redirect to="/login" />} />
      </Switch>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
