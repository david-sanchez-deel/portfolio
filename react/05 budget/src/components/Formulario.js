import React, { useState } from "react";
import Error from "./Error";
import shortid from 'shortid';

const Formulario = ({ crearGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const guardarGasto = (e) => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    }
    crearGasto(gasto);
    setCantidad(0);
    setNombre("");
  }
  return (
    <form onSubmit={guardarGasto}>
      { error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto " /> : null}
      <h2>Agrega tus gastos aquí</h2>
      <div className="campo">
        <label>Nombre gasto</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="u-full-width"
          placeholder="Ej. Transporte"
        />
      </div>
      <div className="campo">
        <label>Cantidad gasto</label>
        <input type="number"
        onChange={(e) => setCantidad(Number(e.target.value))}
        value={cantidad} className="u-full-width" placeholder="Ej. 300" />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
};

export default Formulario;
