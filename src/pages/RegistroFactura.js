import React, { useState } from "react";
import axios from "axios";

function RegistroFactura() {
    const [factura, setFactura] = useState({
        id: "",
        cliente: "",
        monto: "",
    });

    const handleChange = (e) => {
        setFactura({ ...factura, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/facturas/", {
                id: Number(factura.id),
                cliente: factura.cliente,
                monto: Number(factura.monto),
                estado: "Pendiente",
            });
            alert(response.data.message);
        } catch (error) {
            console.error("Error creando factura:", error);
        }
    };

    return (
        <div>
            <h2>Registro de Factura</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" name="id" placeholder="ID de Factura" onChange={handleChange} />
                <input type="text" name="cliente" placeholder="Cliente" onChange={handleChange} />
                <input type="number" name="monto" placeholder="Monto" onChange={handleChange} />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
}

export default RegistroFactura;
