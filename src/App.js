import React from 'react';
import Routes from './Routes';
import './App.css';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes />
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App;
