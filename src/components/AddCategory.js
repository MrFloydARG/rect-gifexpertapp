import React, { useState } from 'react'
import PropTypes from 'prop-types';

// export const AddCategory = ( props) => { o desestructurar y recibir la funcion
export const AddCategory = ({ setCategories }) => {

  // inputValue es el valor del input y setinputValue es la funcion que actualiza el valor del input
  // si no se lo pone con '' dará error despues al tratar de ingresar el dato
  const [inputValue, setinputValue] = useState('');

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  }
  // Con esto se previene el comportamiento por default del formulario al pulsar ENTER
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories(cats => [inputValue, ...cats]);
      setinputValue('');
    }
  }


  return (
    // Si hay un elemento agrupador (en este caso form) no es necesario el <> </>
    <form onSubmit={handleSubmit}>
      <input type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>

  )

}

// Valores obligatorios del componente
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,

}