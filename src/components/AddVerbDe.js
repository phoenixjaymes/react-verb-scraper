import React, { useState, useReducer } from 'react';

import GetVerb from './GetVerb';
import VerbPresentDe from './VerbPresentDe';
import VerbPerfectDe from './VerbPerfectDe';
import VerbImperfectDe from './VerbImperfectDe';
import FormMessage from './FormMessage';
import ConfirmDialog from './ConfirmDialog';

import { initialPresentState, initialPerfectState, initialImperfectState } from '../initialState';

import styles from './addVerbDe.module.css';

const AddVerbDe = () => {
  const [isDialogShown, setIsDialogShown] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [fetchResponse, setFetchResponse] = useState('');
  const [fetchStatus, setFetchStatus] = useState('');
  const reducer = (state, newState) => ({
    ...state,
    ...newState,
  });
  const [verbPresentData, setVerbPresentData] = useReducer(reducer, initialPresentState);
  const [verbPerfectData, setVerbPerfectData] = useReducer(reducer, initialPerfectState);
  const [verbImperfectData, setVerbImperfectData] = useReducer(reducer, initialImperfectState);

  const handleGetVerb = (verbData) => {
    setVerbPresentData(verbData.present);
    setVerbPresentData({
      infinitive: verbData.present.sie,
      translation: verbData.present.sie,
    });
    setVerbPerfectData(verbData.perfect);
    setVerbImperfectData(verbData.imperfect);
  };

  const isValid = () => {
    let isFormValid = true;
    const errors = {};

    const emptyCheck = (arrValues, formName) => {
      arrValues.forEach((element) => {
        if (element === '') {
          errors[formName] = `${formName} is missing information`;
          isFormValid = false;
        }
      });
    };

    emptyCheck(Object.values(verbPresentData), 'Present');
    emptyCheck(Object.values(verbPerfectData), 'Perfect');
    emptyCheck(Object.values(verbImperfectData), 'Imperfect');

    setFormErrors(errors);

    return isFormValid;
  };

  const submitForm = () => {
    const fetchUrl = 'https://phoenixjaymes.com/php/verb-scraping/add-verb.php';

    const formData = new FormData();
    formData.append('pres_separable', verbPresentData.separable);
    formData.append('pres_reflexive', verbPresentData.reflexive);
    formData.append('pres_dative', verbPresentData.dative);
    formData.append('pres_type', verbPresentData.Type);
    formData.append('pres_english', verbPresentData.english.trim());
    formData.append('pres_translation', verbPresentData.translation.trim());
    formData.append('pres_infinitive', verbPresentData.infinitive.trim());
    formData.append('pres_example', verbPresentData.example.trim());
    formData.append('pres_ich', verbPresentData.ich.trim());
    formData.append('pres_du', verbPresentData.du.trim());
    formData.append('pres_er', verbPresentData.er.trim());
    formData.append('pres_wir', verbPresentData.wir.trim());
    formData.append('pres_ihr', verbPresentData.ihr.trim());
    formData.append('pres_sie', verbPresentData.sie.trim());

    formData.append('perf_auxiliary', verbPerfectData.auxiliary.trim());
    formData.append('perf_translation', verbPerfectData.perfect.trim());
    formData.append('perf_example', verbPerfectData.example.trim());

    formData.append('imperf_example', verbImperfectData.example.trim());
    formData.append('imperf_ich', verbImperfectData.ich.trim());
    formData.append('imperf_du', verbImperfectData.du.trim());
    formData.append('imperf_er', verbImperfectData.er.trim());
    formData.append('imperf_wir', verbImperfectData.wir.trim());
    formData.append('imperf_ihr', verbImperfectData.ihr.trim());
    formData.append('imperf_sie', verbImperfectData.sie.trim());

    fetch(fetchUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
      },
      body: formData,
    })
      .then((reponse) => reponse.json())
      .then((responseData) => {
        if (responseData.status === 'success') {
          // clearForm();
          setFetchResponse(`${responseData.status}: ${responseData.data.message}`);
        } else if (responseData.status === 'fail') {
          setFetchResponse(Object.values(responseData.data).join(', '));
        } else {
          setFetchResponse(`${responseData.status}: ${responseData.data.message}`);
        }
        setFetchStatus(responseData.status);
      })
      .catch((error) => {
        setFetchStatus('error');
        setFetchResponse(`Error fetching and parsing data, ${error}`);
      });
  };

  const handleSubmit = () => {
    if (!isValid()) {
      setFetchStatus('fail');
      setFetchResponse('Please fill in all feilds');
      return;
    }

    setIsDialogShown(true);
    setFetchResponse('');
  };

  const handleYesClick = () => {
    setIsDialogShown(false);
    submitForm();
  };

  const handleCancelClick = () => {
    setIsDialogShown(false);
  };

  return (
    <div>
      <h1 className={styles.heading}>Add Verb</h1>

      <GetVerb handleGetVerb={handleGetVerb} />

      <div className={styles.formWrap}>
        <VerbPresentDe data={verbPresentData} handleChange={setVerbPresentData} />
        <VerbPerfectDe data={verbPerfectData} handleChange={setVerbPerfectData} />
        <VerbImperfectDe data={verbImperfectData} handleChange={setVerbImperfectData} />
      </div>

      <button type="submit" className={styles.button} onClick={() => handleSubmit()}>Add Verb</button>

      <FormMessage response={fetchResponse} status={fetchStatus} />

      {isDialogShown === true && (
        <ConfirmDialog
          dialogMessage="Are you sure you want to add this verb"
          handleYesClick={handleYesClick}
          handleCancelClick={handleCancelClick}
        />
      )}
    </div>
  );
};

export default AddVerbDe;
