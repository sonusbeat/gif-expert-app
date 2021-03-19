import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if ( inputValue.trim().length > 2) {
      // setCategories( [ ...categories, 'Saint Seiya' ] );
      setCategories( categories => [ inputValue, ...categories ] );
      setInputValue("");
    }
  };

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        className="mb-2"
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  );
};

export default AddCategory;

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};