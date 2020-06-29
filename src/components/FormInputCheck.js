import React from 'react';
import PropTypes from 'prop-types';

import styles from './formInputRadio.module.css';

const FormInputCheck = ({
  label, name, value, checkValue, handleChange,
}) => {
  const handleOnChange = (e) => {
    const newValue = e.target.value === 'yes' ? 'no' : 'yes';
    handleChange({ [e.target.name]: newValue });
  };

  return (
    <label className={styles.label} htmlFor={name}>
      <input
        id={name}
        name={name}
        className={styles.input}
        type="checkbox"
        value={value}
        checked={value === checkValue}
        onChange={handleOnChange}
      />
      {label}
    </label>
  );
};

FormInputCheck.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  name: PropTypes.string,
  value: PropTypes.string,
  checkValue: PropTypes.string,
  handleChange: PropTypes.func,
};

export default FormInputCheck;
