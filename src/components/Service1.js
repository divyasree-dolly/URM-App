// /src/components/Service1.js
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
`;

const H2 = styled.h2`
  color: #8fbc8f;
`;

const Service1 = () => {
  return (
    <Container>
      <div className="container">
        <H2>Service 1</H2>
        <p>
          Welcome to Service 1. This service provides URM candidates with personalized career coaching and mentorship to enhance their professional development. Our team of experienced mentors will guide you through your career journey, helping you identify and leverage your strengths, and providing valuable insights into career paths and opportunities.
        </p>
        <p>
          Whether you are a recent graduate or an experienced professional seeking new challenges, our career coaching service will assist you in achieving your career goals and making informed decisions. We understand the unique challenges URM candidates may face and are dedicated to supporting you every step of the way.
        </p>
        <p>
          Take advantage of Service 1 and unlock your full potential in the academic and professional world. Sign up today to embark on a rewarding and fulfilling career journey!
        </p>
      </div>
    </Container>
  );
};

export default Service1;
