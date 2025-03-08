// /src/components/AboutUs.js
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const H2 = styled.h2`
  color: #8FBC8F;
  font-size: 28px;
  margin-bottom: 20px;
`;

const H3 = styled.h3`
  color: #8FBC8F;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Ul = styled.ul`
  list-style: none;
  padding-left: 20px;
`;

const Li = styled.li`
  margin-bottom: 5px;
  color: #333;
`;

const AboutUs = () => {
  return (
    <Container>

      <H2>About Us</H2>
      <H3>URM Application</H3>
      <p>
        Welcome to URM Application, a cutting-edge platform that aims to bridge the gap between under-represented minority (URM) candidates and academic institutions while fostering diversity, equity, and inclusion (DEI) in academia. Our platform brings together URM candidates, academic institutions, recruiters, and DEI officers, empowering them to thrive in an inclusive and collaborative environment.
      </p>

      <H3>About Us</H3>
      <p>
        At URM Application, we believe that diversity is not just a buzzword; it is the foundation of excellence in academia. Our mission is to revolutionize the recruitment process by providing a seamless and inclusive platform that connects talented URM candidates with forward-thinking academic institutions and recruiters who are committed to building diverse and equitable communities.
      </p>

      <H3>Our Vision</H3>
      <p>
        We envision a future where the diversity of backgrounds, experiences, and perspectives enriches academic environments, propelling research, innovation, and education to new heights. By fostering an inclusive space, we strive to create opportunities for URM candidates and facilitate academic institutions and recruiters in recognizing and embracing the unique value of diversity in their teams.
      </p>

      <H3>Features and Functionalities</H3>
      <Ul>
        <Li>
          <strong>URM Candidate Dashboard:</strong>
          <Ul>
            <Li>Create and manage your profile to showcase your qualifications and interests.</Li>
            <Li>Upload your resume and academic records to highlight your achievements.</Li>
            <Li>Set preferences for positions and locations to find the perfect match for your aspirations.</Li>
            <Li>Track the status of your applications and new job postings matching your interests.</Li>
            <Li>Communicate with academic institutions and recruiters through chat.</Li>
          </Ul>
        </Li>
        <Li>
          <strong>Academic Institution Dashboard:</strong>
          <Ul>
            <Li>Create and manage your institution's profile, sharing research focus areas and faculty information.</Li>
            <Li>Post job openings to attract talented URM candidates.</Li>
            <Li>Track the number of applications received and view URM candidate interest in your postings.</Li>
            <Li>Foster meaningful connections with URM candidates and recruiters through chat.</Li>
          </Ul>
        </Li>
        <Li>
          <strong>Recruiter Dashboard:</strong>
          <Ul>
            <Li>Create and manage your recruiting agency's profile, showcasing your clients and positions.</Li>
            <Li>Indicate preferences for URM candidates and locations.</Li>
            <Li>Monitor the status of applications and discover new URM candidates matching your clients' needs.</Li>
            <Li>Engage in direct communication with URM candidates and academic institutions via chat.</Li>
          </Ul>
        </Li>
        <Li>
          <strong>Administrator Dashboard:</strong>
          <Ul>
            <Li>Oversee the platform's content, functionality, and user accounts.</Li>
            <Li>Manage user registrations and approve new profiles.</Li>
            <Li>Monitor user activity, respond to inquiries, and troubleshoot issues.</Li>
            <Li>Access various reports to gain insights into platform activities.</Li>
          </Ul>
        </Li>
        <Li>
          <strong>DEI Officer Dashboard:</strong>
          <Ul>
            <Li>Promote diversity, equity, and inclusion by setting DEI goals and initiatives.</Li>
            <Li>Review and approve job postings to ensure alignment with DEI criteria.</Li>
            <Li>Track URM candidates' interest in DEI-focused opportunities.</Li>
            <Li>Engage in meaningful discussions with URM candidates, academic institutions, and recruiters to champion diversity in academia.</Li>
          </Ul>
        </Li>
      </Ul>

      <p>
        At URM Application, we are committed to revolutionizing academic recruitment practices by fostering an environment where every individual's talents and unique perspectives are valued. Join us on this transformative journey towards a more diverse, equitable, and inclusive future in academia.
      </p>

      <p>
        Together, let's redefine excellence through diversity!
      </p>
    </Container>

  );
};

export default AboutUs;
