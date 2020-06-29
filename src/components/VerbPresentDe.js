import React from 'react';
import PropTypes from 'prop-types';

// Components
import FormInput from './FormInput';
import FormInputCheck from './FormInputCheck';
import FormInputRadio from './FormInputRadio';
import FormTextarea from './FormTextarea';

import styles from './verbForms.module.css';

const VerbPresentDe = ({ data, handleChange }) => {
  const handleTranslation = (obj) => {
    const temp = obj.translation.replace(/·/g, '')
      .replace(/\([\wÄÖÜäöü¨ß·-]*\)/i, '')
      .trim();
    handleChange(obj);
    handleChange({ infinitive: temp });
  };

  return (
    <form
      className={styles.form}
      autoComplete="off"
    >
      <h2 className={styles.header}>German Present</h2>
      <div className={styles.grouped}>
        <FormInputCheck
          label="Separable"
          name="separable"
          value={data.separable}
          checkValue="yes"
          handleChange={handleChange}
        />
        <FormInputCheck
          label="Reflexive"
          name="reflexive"
          value={data.reflexive}
          checkValue="yes"
          handleChange={handleChange}
        />
        <FormInputCheck
          label="Dative"
          name="dative"
          value={data.dative}
          checkValue="yes"
          handleChange={handleChange}
        />
      </div>

      <div className={styles.grouped}>
        <FormInputRadio
          id="upVerbTypeMixed"
          label="Mixed"
          name="type"
          value="mixed"
          checkValue={data.type}
          handleChange={handleChange}
        />
        <FormInputRadio
          id="upVerbTypeStrong"
          label="Strong"
          name="type"
          value="strong"
          checkValue={data.type}
          handleChange={handleChange}
        />

        <FormInputRadio
          id="upVerbTypeWeak"
          label="Weak"
          name="type"
          value="weak"
          checkValue={data.type}
          handleChange={handleChange}
        />
      </div>

      <FormInput
        label="English"
        name="english"
        value={data.english}
        handleChange={handleChange}
      />

      <FormInput
        label={`Translation - ${data.infinitive}`}
        name="translation"
        value={data.translation}
        handleChange={handleTranslation}
      />

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
};

VerbPresentDe.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
  handleChange: PropTypes.func,
};

export default VerbPresentDe;
