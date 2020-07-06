export const revisarPresupuesto = (presupuesto, restante) => {
    if (presupuesto / 4 > restante) {
        return 'alert alert-danger' 
    }
    if (presupuesto / 2 > restante) {
        return 'alert alert-warning' 
    }
    return 'alert alert-success' 
}