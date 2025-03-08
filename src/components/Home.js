import React from 'react';
import styled from 'styled-components';
import model from '/Users/pranavisrungavarapu/final/src/models/model.js';
import Header from './Header';
import Footer from './Footer';
import backgroundImg from './background.jpg';

const Html = styled.html`
  height: 100%;
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
}

`;


const H2 = styled.h2`
  color: #8fbc8f;
`;

const Home = () => {
  return (
    <Html>
      <Body>
       

       <Container>
          <H2>{model.title}</H2>
          <p>{model.description}</p>
        </Container>

        <MainContent>
          {model.images.map((image, index) => (
            <div key={index}>
              <Image src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}        </MainContent>

 

      </Body>

    </Html>
  );
};
export default Home;


