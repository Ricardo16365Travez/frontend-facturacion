import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ListaFacturas from "./pages/ListaFacturas";
import RegistroFactura from "./pages/RegistroFactura";

function App() {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "#f5f5f5" }}>
            <h1>Sistema de Facturación</h1>

            {/* Navigation Menu */}
            <nav style={{ marginBottom: "20px" }}>
                <Link to="/" style={{ marginRight: "15px", textDecoration: "none", color: "blue" }}>📜 Lista de Facturas</Link>
                <Link to="/registro" style={{ textDecoration: "none", color: "green" }}>📝 Registrar Factura</Link>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<ListaFacturas />} />
                <Route path="/registro" element={<RegistroFactura />} />
            </Routes>
        </div>
    );
}

export default App;
