import React from 'react';
import PropTypes from 'prop-types';

import styles from './formInput.module.css';

const FormInput = ({
  label, name, value, handleChange, pos, type,
}) => {
  const labelClass = pos === 'verb' ? styles.labelVerb : styles.label;
  const inputClass = pos === 'verb' ? styles.inputVerb : styles.input;

  const handleOnChange = (e) => {
    handleChange({ [e.target.name]: e.target.value });
  };

  return (
    <label className={labelClass} htmlFor={name}>
      {label}
      <input
        id={name}
        name={name}
        className={inputClass}
        type={type}
        value={value}
        onChange={handleOnChange}
        placeholder={`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
      />
    </label>
  );
};

FormInput.defaultProps = {
  type: 'text',
};

FormInput.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  pos: PropTypes.string,
  type: PropTypes.string,
};

export default FormInput;
