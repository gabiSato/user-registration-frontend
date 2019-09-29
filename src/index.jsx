import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "semantic-ui-css/semantic.min.css";
import AuthProvider from "./context/Auth";
import Login from "./pages/Login";
import Register from "./pages/Register";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider host="http://localhost:3000/">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route render={() => <Redirect to="/login" />} />
      </Switch>
    </AuthProvider>
    <ToastContainer />
  </BrowserRouter>,
  document.getElementById("root")
);
