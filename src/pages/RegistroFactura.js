import React, { useState } from "react";
import axios from "axios";

const API_URL = "https://backend-facturacion-dqvn.onrender.com"; 
//const API_URL = "http://127.0.0.1:8000";  // Para backend local

function RegistroFactura() {
    const [factura, setFactura] = useState({ cliente: "", monto: "" });

    const handleChange = (e) => {
        setFactura({ ...factura, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_URL}/facturas/`, {
                cliente: factura.cliente,
                monto: Number(factura.monto),
            });
            alert("Factura creada correctamente");
            setFactura({ cliente: "", monto: "" });
        } catch (error) {
            console.error("Error creando factura:", error);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>📝 Registro de Factura</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="cliente" placeholder="Cliente" value={factura.cliente} onChange={handleChange} required />
                <input type="number" name="monto" placeholder="Monto" value={factura.monto} onChange={handleChange} required />
                <button type="submit">Registrar Factura</button>
            </form>
        </div>
    );
}

export default RegistroFactura;
