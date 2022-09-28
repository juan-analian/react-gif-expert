import React, { useState } from 'react'
import PropTypes from "prop-types";


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        //console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //console.log(inputValue);
        if (inputValue.trim().length <= 1) return;

        // setCategories(categories => [inputValue, ...categories]);

        //Emite el evento para que el componente padre tome el valor
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit} name="formulario">
        <input
            type="text"
            placeholder='buscar gif...'
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}