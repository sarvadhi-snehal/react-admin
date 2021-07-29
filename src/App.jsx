import React, { useState } from 'react'
import Header from './Components/Header/Header';
import ContainerHeader from './Components/ContainerHeader/ContainerHeader';
import Minimal from './pages/Minimal';
import './App.scss'

function App() {


  return (
    <div className="App">
      <Header/>
      <ContainerHeader/>
      <Minimal />
     </div>
  )
}

export default App
