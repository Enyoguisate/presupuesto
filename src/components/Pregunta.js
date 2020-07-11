import React, { Fragment, useState } from "react";
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);
  const mensaje = 'El presupuesto es incorrecto'

  // Funcion que lee el presupuesto
  const definirPresupuesto = (event) => {
    const valor = parseInt(event.target.value, 10);
    guardarCantidad(valor);
  }
  
  const submitPresupuesto = (event) => {
    event.preventDefault();
    if(cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  }

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      { error ? <Error mensaje={mensaje}/> : null}
      <form onSubmit={submitPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input 
            type="submit" 
            className="button-primary u-full-width" 
            value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired,
}

export default Pregunta;
