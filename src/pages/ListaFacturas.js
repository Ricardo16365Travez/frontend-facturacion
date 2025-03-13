import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000"; // Asegúrate de que esta URL sea la correcta

function ListaFacturas() {
    const [facturas, setFacturas] = useState([]);

    // 🔥 Nueva versión de fetchFacturas con corrección de error
    const fetchFacturas = async () => {
        try {
            const response = await axios.get(`${API_URL}/facturas/`);

            // Verificamos si la respuesta es un array
            if (Array.isArray(response.data)) {
                setFacturas(response.data);
            } else {
                setFacturas([]); // Si no es un array, aseguramos que sea vacío
            }
        } catch (error) {
            console.error("Error obteniendo facturas:", error);
            setFacturas([]); // En caso de error, dejamos la lista vacía
        }
    };

    useEffect(() => {
        fetchFacturas();
    }, []);

    return (
        <div>
            <h2>📜 Facturas Registradas</h2>
            {facturas.length === 0 ? (
                <p>No hay facturas registradas.</p>
            ) : (
                <ul>
                    {facturas.map((factura) => (
                        <li key={factura.id}>
                            {factura.cliente} - ${factura.monto} - <strong>{factura.estado}</strong>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ListaFacturas;
