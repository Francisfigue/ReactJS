import React from 'react';
import { Header } from "./componentes/Header";
import 'boxicons';
import { BrowserRouter } from "react-router-dom";
import { Paginas } from "./componentes/Paginas";
import { DataProvider } from "./context/Dataprovider";



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <Paginas />
    </BrowserRouter>
    </div>
  );
}

export default App;
