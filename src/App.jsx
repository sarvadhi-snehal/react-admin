import React, { useState } from 'react'
import "bootstrap";
import './App.scss';
//componetns
import Header from './Components/Header/Header'
import Subheader from './Components/Subheader/Subheader';


//pages
import Minimal from './pages/Minimal'
function App() {


  return (
    <div className="App ">
      <Header/>
      <Subheader/>
      <Minimal />
     </div>
  )
}

export default App
