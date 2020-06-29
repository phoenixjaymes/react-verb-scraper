import React from 'react';
import PropTypes from 'prop-types';

// Components
import FormInput from './FormInput';
import FormInputRadio from './FormInputRadio';
import FormTextarea from './FormTextarea';

import styles from './verbForms.module.css';

const VerbPerfect = ({ data, handleChange }) => (
  <form
    className={styles.form}
    autoComplete="off"
  >
    <h2 className={styles.header}>German Perfect</h2>

    <div className={styles.grouped}>
      <p><span>Auxiliary</span></p>
      <FormInputRadio
        id="auxiliaryHaben"
        label="Haben"
        name="auxiliary"
        value="haben"
        checkValue={data.auxiliary}
        handleChange={handleChange}
      />
      <FormInputRadio
        id="auxiliarySein"
        label="Sein"
        name="auxiliary"
        value="sein"
        checkValue={data.auxiliary}
        handleChange={handleChange}
      />
    </div>

    <FormInput
      label="Perfect"
      name="perfect"
      value={data.perfect}
      handleChange={handleChange}
    />

    <FormTextarea
      label="Example"
      name="example"
      value={data.example}
      handleChange={handleChange}
    />
  </form>
);

VerbPerfect.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
  handleChange: PropTypes.func,
};

export default VerbPerfect;
