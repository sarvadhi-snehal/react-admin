import React, { useState } from "react";
import "bootstrap";
import { makeStyles, useTheme } from "@material-ui/core/styles";


//dashboard component
import Dashboard1 from './Pages/Dashboard1'
import "./App.scss";

import Layout from "./components/Layout";

function App() {
  return <Layout>
    <Dashboard1 />
  </Layout>;
}

export default App;
