import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes ,Link} from 'react-router-dom';


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
          background-color:  #f9f9f9;
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




const Header = () => {
  return (
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
                      <Link to="/login">Login/SignUp</Link>
                    </li>
                  </ul>
                </Nav>
              </center>
            </div>
          </HeaderContainer>
  );
};

export default Header;
