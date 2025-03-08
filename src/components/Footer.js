import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #8fbc8f;
  padding: 20px;
  color: #000000;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Your Website. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
