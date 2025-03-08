import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import backgroundImg from './background.jpg'; // Update the path to your background image
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import AboutUs from './AboutUs';
import Blog from './Blog';
import Contact from './Contact';
import LoginSignup from './LoginSignup';
import Service1 from './Service1';
import Service2 from './Service2';
import Service3 from './Service3';
import URMCandidateDashboard from './URMCandidateDashboard.js';
import RecruiterDashboard from './RecruiterDashboard.js';
import AcademicInstitutionsDashboard from './AcademicInstitutionsDashboard.js';
import AdministratorDashboard from './AdministratorDashboard.js';
import DEIOfficerDashboard from './DEIOfficerDashboard.js';
import AdDashboard from './AdDashboard.js';
import RDashboard from './RDashboard.js';
import AIDashboard from './AIDashboard.js';
import DODashboard from './DODashboard.js';
import UCDashboard from './UCDashboard.js';
import ForgotPassword from './ForgotPassword.js';

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

const HeaderContainer = styled.header`
  background-color: #8fbc8f;
  padding: 20px;
  color: #000000;
`;

const H1 = styled.h1`
  margin: 0;
`;

const Nav = styled.nav`
  /* styles for the nav ... */

  .nav-list {
    /* styles for the ul */
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;

    li {
      display: inline-block;
      margin: 0 10px;

      a {
        display: block;
        padding: 10px 20px;
        color: #000000;
        text-decoration: none;

        &:hover {
          background-color: #f9f9f9;
        }
      }
    }

    .dropdown-content {
      /* styles for the dropdown-content */
      display: none;
      position: absolute;
      background-color: #8fbc8f;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }

    li:hover .dropdown-content {
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

const MainContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  transition: opacity 0.3s ease;
`;

const H2 = styled.h2`
  color: #8fbc8f;
`;

const MyView = () => {
  return (
    <Router>
      <Html>
        <Body>
          <HeaderContainer>
            <div className="container">
              <center>
                <H1>URM APPLICATION</H1>
              </center>
              <center>
                <Nav>
                  <ul className="nav-list">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li className="dropdown">
                      <Link to="/services">Services</Link>
                      <div className="dropdown-content">
                        <Link to="/service1">Service 1</Link>
                        <Link to="/service2">Service 2</Link>
                        <Link to="/service3">Service 3</Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/loginsignup">Login/SignUp</Link>
                    </li>
                  </ul>
                </Nav>
              </center>
            </div>
          </HeaderContainer>

          {/* Main content */}
          <MainContent>
            <Routes>
              {/* Add the routes for all your pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/loginsignup" element={<LoginSignup />} />
              <Route path="/service1" element={<Service1 />} />
              <Route path="/service2" element={<Service2 />} />
              <Route path="/service3" element={<Service3 />} />

              {/* Add the dashboard routes */}
              <Route path="/ucd" element={<URMCandidateDashboard />} />
              <Route path="/rd" element={<RecruiterDashboard />} />
              <Route path="/aid" element={<AcademicInstitutionsDashboard />} />
              <Route path="/ad" element={<AdministratorDashboard />} />
              <Route path="/dod" element={<DEIOfficerDashboard />} />
			 <Route path="/AdDashboard" component={AdDashboard} />
        <Route path="/RDashboard" element={<RDashboard/>} />
        <Route path="/AIDashboard" element={<AIDashboard/>} />
        <Route path="/DODashboard" element={<DODashboard/>} />
        <Route path="/UCDashboard" element={<UCDashboard/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />

            </Routes>
          </MainContent>

          {/* Footer */}
          <Footer />
        </Body>
      </Html>
    </Router>
  );
};

export default MyView;
