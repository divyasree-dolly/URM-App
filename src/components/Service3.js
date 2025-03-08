// /src/components/Service3.js
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

const Service3 = () => {
  return (
    <Container>
      <div className="container">
        <H2>Service 3</H2>
        <p>
          Welcome to Service 3. This service provides recruiters with access to a diverse pool of under-represented minority (URM) candidates, helping them find the perfect match for their clients' positions. Our platform connects recruiters with highly talented and motivated URM candidates who are seeking new career opportunities.
        </p>
        <p>
          As a recruiter, you can create and manage your agency's profile on our platform, showcasing your clients and positions. Set preferences for URM candidates and specific locations to discover the best matches quickly. Through our direct communication features, you can engage with URM candidates and academic institutions to streamline the hiring process.
        </p>
        <p>
          By using Service 3, recruiters can play a vital role in promoting diversity, equity, and inclusion in various industries. Join us in shaping a more inclusive and representative workforce by connecting URM candidates with exceptional career opportunities.
        </p>
      </div>
    </Container>
  );
};

export default Service3;
