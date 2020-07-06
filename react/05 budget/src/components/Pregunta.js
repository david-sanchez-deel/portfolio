import React, { useState } from 'react';
import Error from './Error';

const Pregunta = ({ setPresupuesto, setRestante, setMostrarPregunta }) => {
    const [error, setError] = useState(false);
    const [cantidad, setCantidad] = useState(0);

    const definirPresupuesto = (e) => setCantidad(Number(e.target.value));

    const agregarPresupuesto = (e) => {
        e.preventDefault();

        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarPregunta(false);
    }
    return (<>
    <h2>Coloca tu presupuesto</h2>
    { error ? <Error mensaje="El presupuesto es incorrecto" />: null }
    <form onSubmit={agregarPresupuesto}>
        <input
        type="number"
        className="u-full-width"
        placeholder="Coloca tu presupuesto"
        value={cantidad} onChange={definirPresupuesto}
        />
        <input  type="submit" className="button-primary u-full-width" />
    </form>
    </>);
}
 
export default Pregunta;