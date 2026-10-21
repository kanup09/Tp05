import React, { useState } from 'react';





export default function App() {
  const [contenido, setContenido] = useState(
    "Hola, este es el texto inicial del archivo."
  );

  // 1. Crear Blob
  const handleCrearBlob = () => {
    const blob = new Blob([contenido], { type: "text/plain;charset=utf-8" });
    console.log("Blob creado:", blob);
    alert("¡Blob creado con éxito!");
  };

  // 2. Descargar
  const handleDescargar = () => {
    const blob = new Blob([contenido], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "archivo.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  // 3. Usar Slice
  const handleSlice = () => {
    const textoRecortado = contenido.slice(0, 15);
    setContenido(textoRecortado);
    alert(`Se aplicó slice. Nuevo contenido: "${textoRecortado}"`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px", fontFamily: "sans-serif" }}>
      <h1>Ejemplo de Blob</h1>
      <div style={{ marginTop: "25px", display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={handleCrearBlob} style={estiloBoton}>
          Crear Blob
        </button>
        <button onClick={handleDescargar} style={estiloBoton}>
          Descargar Fichero
        </button>
        <button onClick={handleSlice} style={estiloBoton}>
          Usar Slice
        </button>
      </div>
      <p style={{ marginTop: "20px", color: "#555" }}>
        <strong>Texto actual:</strong> {contenido}
      </p>
    </div>
  );
}

// Estilo de botones
const estiloBoton = {
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  padding: "10px 18px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "15px"
};   
