import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    if(inputValue.trim().length > 2) {
      setCategories(categories => [ inputValue, ...categories ]);
      setInputValue('');
    }

  };

  return (
    <form onSubmit={ handleSubmit }>
      <input
        className="form-control"
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  )
}

export default AddCategory;

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}