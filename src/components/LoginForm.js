import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';

import FormInput from './FormInput';
import FormMessage from './FormMessage';

const LoginForm = ({ setIsLoggedIn }) => {
  const reducer = (state, newState) => ({
    ...state,
    ...newState,
  });

  const [formValues, setFormState] = useReducer(reducer, { user: '', password: '' });
  const [fetchResponse, setFetchResponse] = useState('');
  const [fetchStatus, setFetchStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValues.user === '' || formValues.password === '') {
      setFetchStatus('fail');
      setFetchResponse('Please fill in all fields');
      return;
    }
    const formData = new FormData();
    formData.append('user', formValues.user);
    formData.append('password', formValues.password);

    fetch('https://phoenixjaymes.com/php/verb-scraping/login.php', {
      method: 'POST',
      body: formData,
    })
      .then((reponse) => reponse.json())
      .then((responseData) => {
        if (responseData.status === 'success') {
          sessionStorage.setItem('isLoggedIn', true);
          sessionStorage.setItem('jwt', responseData.data.jwt);
          setIsLoggedIn(true);
        } else if (responseData.status === 'fail') {
          setFetchStatus(responseData.status);
          setFetchResponse(responseData.data.message);
        } else {
          setFetchStatus(responseData.status);
          setFetchResponse(responseData.message);
        }
      })
      .catch((error) => {
        setFetchStatus('error');
        setFetchResponse(`Error fetching and parsing data. ${error}`);
      });
  };

  const loginWrap = {
    height: '100%',
    paddingTop: '20px',
  };

  const heading = {
    color: '#fff',
    marginBottom: '20px',
  };

  const form = {
    backgroundColor: '#0006BF',
    borderRadius: '4px',
    margin: '0 auto 20px',
    padding: '20px',
    width: '260px',
  };

  const button = {
    width: '100%',
  };

  return (
    <div style={loginWrap}>
      <h2 style={heading}>Please Login</h2>
      <form style={form} onSubmit={handleSubmit}>

        <FormInput
          label=""
          name="user"
          value={formValues.user}
          handleChange={setFormState}
        />

        <FormInput
          label=""
          name="password"
          value={formValues.password}
          handleChange={setFormState}
          type="password"
        />

        <button type="submit" style={button}>
          Login
        </button>
        <FormMessage response={fetchResponse} status={fetchStatus} />
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func,
};

export default LoginForm;
