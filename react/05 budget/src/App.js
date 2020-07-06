import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [ gasto, setGasto] = useState(undefined);

  useEffect(() => {
    if (gasto) {
      setGastos((gastos) => [...gastos, gasto]);
      setRestante((restante) => restante - gasto.cantidad);
    }
  }, [gasto])
  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarPregunta={setMostrarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario crearGasto={setGasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto restante={restante} presupuesto={presupuesto} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
