import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FormMessage from './FormMessage';
import FormInput from './FormInput';

const GetVerb = ({ handleGetVerb }) => {
  const [infinitive, setInfinitive] = useState('');
  const [fetchResponse, setFetchResponse] = useState('');
  const [fetchStatus, setFetchStatus] = useState('');

  const handleChange = (obj) => {
    setInfinitive(obj.infinitive);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (infinitive === '') {
      setFetchStatus('fail');
      setFetchResponse('Please enter an infinitive');
      return;
    }

    const fetchUrl = 'https://phoenixjaymes.com/php/verb-scraping/get-verb.php';

    const formData = new FormData();
    formData.append('infinitive', infinitive);

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
          handleGetVerb(responseData.data);
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

  const wrap = {
    margin: '0 auto 10px',
    width: '300px',
  };

  const form = {
    display: 'grid',
    gap: '10px',
    gridTemplateColumns: '190px 90px',
    alignItems: 'center',
    padding: '0 5px',
    width: '300px',
  };

  const colTwo = {
    paddingBottom: '10px',
    textAlign: 'right',
  };

  return (
    <div style={wrap}>
      <form style={form} onSubmit={(e) => handleSubmit(e)}>
        <div>
          <FormInput
            label=""
            name="infinitive"
            value={infinitive}
            handleChange={handleChange}
          />
        </div>
        <div style={colTwo}>
          <button type="submit">Get Verb</button>
        </div>
      </form>
      <FormMessage response={fetchResponse} status={fetchStatus} />
    </div>
  );
};

GetVerb.propTypes = {
  handleGetVerb: PropTypes.func,
};

export default GetVerb;
