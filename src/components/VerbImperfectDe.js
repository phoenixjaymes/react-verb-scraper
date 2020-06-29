import React from 'react';
import PropTypes from 'prop-types';

// Components
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';

import styles from './verbForms.module.css';

const VerbImperfectDe = ({ data, handleChange }) => (
  <form
    className={styles.form}
    autoComplete="off"
  >
    <h2 className={styles.header}>German Imperfect</h2>

    <FormTextarea
      label="Example"
      name="example"
      value={data.example}
      handleChange={handleChange}
    />

    <FormInput
      label="ich"
      name="ich"
      value={data.ich}
      handleChange={handleChange}
      pos="verb"
    />

    <FormInput
      label="du"
      name="du"
      value={data.du}
      handleChange={handleChange}
      pos="verb"
    />

    <FormInput
      label="er"
      name="er"
      value={data.er}
      handleChange={handleChange}
      pos="verb"
    />

    <FormInput
      label="wir"
      name="wir"
      value={data.wir}
      handleChange={handleChange}
      pos="verb"
    />

    <FormInput
      label="ihr"
      name="ihr"
      value={data.ihr}
      handleChange={handleChange}
      pos="verb"
    />

    <FormInput
      label="sie"
      name="sie"
      value={data.sie}
      handleChange={handleChange}
      pos="verb"
    />

  </form>
);

VerbImperfectDe.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
  handleChange: PropTypes.func,
};

export default VerbImperfectDe;
