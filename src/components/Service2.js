// /src/components/Service2.js
import React from 'react';
import styled from 'styled-components';
import backgroundImg from './background.jpg';

const Html = styled.html`
  height: 100%;
`;

const Body = styled.body`
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
  margin: 0;
  position: relative;
  background-image: url(${backgroundImg});
  background-size: cover;
`;

const Header = styled.header`
  background-color: #8fbc8f;
  padding: 20px;
  color: #000000;
`;

const H1 = styled.h1`
  margin: 0;
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;

    li {
      display: inline-block;
      margin: 0 10px;
    }

    a {
      display: block;
      padding: 10px 20px;
      color: #000000;
      text-decoration: none;
    }

    a:hover {
      background-color: #8fbc8f;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }

    &:hover .dropdown-content {
      display: block;
    }
  }
`;

const Container = styled.div`
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Footer = styled.footer`
  background-color: #8fbc8f;
  padding: 20px;
  color: #000000;
  text-align: center;
  position: 'fixed'
`;

const H2 = styled.h2`
  color: #8fbc8f;
`;

const Service2 = () => {
  return (
    <Container>
      <div className="container">
        <H2>Service 2</H2>
        <p>
          Welcome to Service 2. This service provides academic institutions with an innovative and streamlined recruitment process for hiring under-represented minority (URM) candidates. Our platform connects academic institutions with talented URM candidates, ensuring a diverse and inclusive recruitment strategy.
        </p>
        <p>
          As an academic institution, you can post job openings on our platform, targeting URM candidates who match your research focus areas and faculty requirements. Our system enables you to track applications and identify top candidates for your academic positions easily. By utilizing Service 2, you can enhance your institution's commitment to diversity, equity, and inclusion in academia.
        </p>
        <p>
          Join us in building a vibrant and diverse academic community. Sign up for Service 2 and discover the talent pool of URM candidates waiting to contribute their skills and knowledge to your institution.
        </p>
      </div>
    </Container>
  );
};

export default Service2;
