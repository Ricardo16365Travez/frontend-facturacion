import React, { useEffect, useState } from "react";
import axios from "axios";

function ListaFacturas() {
    const [facturas, setFacturas] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/facturas/")
            .then((response) => {
                setFacturas(response.data);
            })
            .catch((error) => console.error("Error obteniendo facturas:", error));
    }, []);

    return (
        <div>
            <h2>Facturas Registradas</h2>
            <ul>
                {facturas.map((factura) => (
                    <li key={factura.id}>
                        {factura.cliente} - ${factura.monto} ({factura.estado})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaFacturas;
