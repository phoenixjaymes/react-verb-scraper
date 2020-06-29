import React from 'react';

const Footer = () => {
  const date = new Date().getFullYear();

  const mainFooter = {
    height: '40px',
    letterSpacing: '1px',
    textAlign: 'center',
  };

  const mainFooterWrap = {
    height: '40px',
    lineHeight: '40px',
  };

  return (
    <footer style={mainFooter}>
      <div style={mainFooterWrap}>
        <small>{`\u00A9 ${date} PhoenixJaymes`}</small>
      </div>
    </footer>
  );
};

Footer.propTypes = {

};

export default Footer;
