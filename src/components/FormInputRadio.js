import React from 'react';
import PropTypes from 'prop-types';

import styles from './formInputRadio.module.css';

const FormInputRadio = ({
  id, label, name, value, checkValue, handleChange,
}) => {
  const handleOnChange = (e) => {
    handleChange({ [e.target.name]: e.target.value });
  };

  return (
    <label className={styles.label} htmlFor={id}>
      <input
        id={id}
        name={name}
        className={styles.input}
        type="radio"
        value={value}
        checked={value === checkValue}
        onChange={handleOnChange}
      />
      {label}
    </label>
  );
};

FormInputRadio.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checkValue: PropTypes.string,
  handleChange: PropTypes.func,
};

export default FormInputRadio;
