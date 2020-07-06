import React from 'react';
import Gasto from './Gasto';

const Listado = ({ gastos }) => {
    return (<div className="gastos-realizados">
        <h2>Listado</h2>
        {gastos.map(g => <Gasto key={g.id} gasto ={g} />)}
    </div>);
}
 
export default Listado;