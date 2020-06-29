import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const headerStyle = {
    alignItems: 'center',
    backgroundColor: '#0006BF',
    borderRadius: '4px',
    color: '#fff',
    display: 'grid',
    gridTemplateColumns: 'auto 100px',
    height: '50px',
    margin: '0 auto 10px',
    maxWidth: '960px',
    padding: '0 10px',
    width: '100%',
  };

  const colOne = {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
  };

  const colTwo = {
    flex: '100px',
    textAlign: 'right',
  };

  const handleButton = () => {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('jwt');
    setIsLoggedIn(false);
  };

  return (
    <header style={headerStyle}>
      <p style={colOne}>Verb Scaper</p>
      <div style={colTwo}>
        {isLoggedIn && (
          <button type="button" onClick={() => handleButton()}>Logout</button>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  setIsLoggedIn: PropTypes.func,
};

export default Header;
