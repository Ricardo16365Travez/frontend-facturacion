import React, { useEffect, useState } from "react";
import axios from "axios";

 const API_URL = "https://backend-facturacion-dqvn.onrender.com"; 
//const API_URL = "http://127.0.0.1:8000";  // Para backend local


function ListaFacturas() {
    const [facturas, setFacturas] = useState([]);

    const fetchFacturas = () => {
        axios.get(`${API_URL}/facturas/`)
            .then((response) => setFacturas(response.data))
            .catch((error) => console.error("Error obteniendo facturas:", error));
    };

    useEffect(() => {
        fetchFacturas();
    }, []);

    const pagarFactura = async (id) => {
        try {
            await axios.post(`${API_URL}/pagar/${id}`);
            alert("Factura pagada correctamente");
            fetchFacturas();
        } catch (error) {
            console.error("Error pagando factura:", error);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>📜 Facturas Registradas</h2>
            <ul>
                {facturas.length === 0 ? (
                    <p>No hay facturas registradas.</p>
                ) : (
                    facturas.map((factura) => (
                        <li key={factura.id}>
                            {factura.cliente} - ${factura.monto} - <strong>{factura.estado}</strong>
                            {factura.estado === "pendiente" && (
                                <button onClick={() => pagarFactura(factura.id)}>Pagar</button>
                            )}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default ListaFacturas;
