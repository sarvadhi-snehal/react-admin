import React, { useState } from "react";
import "bootstrap";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//dashboard component
import Dashboard1 from "./Pages/Dashboard1";
import "./App.scss";
import Login from "./components/Login/Login";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/dashboard" component={Dashboard1} />
        </Switch>
        <Login />
      </Layout>
      ;
    </BrowserRouter>
  );
}

export default App;
