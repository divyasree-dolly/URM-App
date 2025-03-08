// /src/components/Blog.js
import React from 'react';
import styled from 'styled-components';
import image7 from './image7.jpg';
import image8 from './image8.jpg';
import image5 from './image5.jpg';
import image9 from './image9.jpg';
import image10 from './image10.jpg';
import backgroundImg from './background.jpg';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
`;

const H2 = styled.h2`
  color: #8fbc8f;
`;

const Link = styled.a`
  text-decoration: none;
  color: #000000;
  font-weight: bold;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Blog = () => {
  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <center>
        <Link href="http://localhost/wordpress/2023/07/29/urm-candidate/">
          Click here for the description of each role
        </Link>
      </center>
      <br />
      <br />
      <center>
        <h2>Advantages and Disadvantages</h2>
        <p>Click the images for advantages and disadvantages</p>
      </center>
      <br />
      <br />
      <br />
      <br />
      <center>
        <MainContent>
          <div>
            <Link href="http://localhost/wordpress/2023/07/29/urm-candidate-2/">
              <Image src={image5} alt="Image 1" />
            </Link>
            <p>URM CANDIDATE</p>
          </div>
          <div>
            <Link href="http://localhost/wordpress/2023/07/29/recruiter/">
              <Image src={image10} alt="Image 2" />
            </Link>
            <p>RECRUITER</p>
          </div>
          <div>
            <Link href="http://localhost/wordpress/2023/07/29/academic-institutions/">
              <Image src={image7} alt="Image 3" />
            </Link>
            <p>ACADEMIC INSTITUTION</p>
          </div>
          <div>
            <Link href="http://localhost/wordpress/2023/07/29/administrator/">
              <Image src={image8} alt="Image 8" />
            </Link>
            <p>ADMINISTRATOR</p>
          </div>
          <div>
            <Link href="http://localhost/wordpress/2023/07/29/dei-officer/">
              <Image src={image9} alt="Image 9" />
            </Link>
            <p>DEI OFFICER</p>
          </div>
        </MainContent>
      </center>
      <br />
      <br />
      <br />
    </Container>
  );
};

export default Blog;
