import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistroFactura from "./pages/RegistroFactura";
import ListaFacturas from "./pages/ListaFacturas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistroFactura />} />
        <Route path="/facturas" element={<ListaFacturas />} />
      </Routes>
    </Router>
  );
}

export default App;
