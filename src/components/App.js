import React, { useState, useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm';
import AddVerbDe from './AddVerbDe';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let currentComponent;

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('isLoggedIn');

    if (loggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const divStyle = {
    padding: '10px 10px 0',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  const mainStyle = {
    flex: 1,
  };

  if (isLoggedIn) {
    currentComponent = <AddVerbDe />;
  } else {
    currentComponent = <LoginForm setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div style={divStyle}>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <main style={mainStyle}>
        {currentComponent}
      </main>
      <Footer />
    </div>
  );
}

export default App;
