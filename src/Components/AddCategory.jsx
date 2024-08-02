import { useState } from "react";
import PropTypes from 'prop-types';
export function AddCategory({ onNewCategory }) {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
  
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        value={inputValue}
        onChange={onInputChange}
        type="text"
        placeholder="Buscar gifs"
      ></input>
    </form>
  );
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}