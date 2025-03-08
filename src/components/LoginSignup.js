import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImg from './background.jpg'; // Update the path to your background image
import { Link, useNavigate } from 'react-router-dom';
import URMCandidateDashboard from './URMCandidateDashboard.js';
import RecruiterDashboard from './RecruiterDashboard.js';
import AcademicInstitutionsDashboard from './AcademicInstitutionsDashboard.js';
import AdministratorDashboard from './AdministratorDashboard.js';
import DEIOfficerDashboard from './DEIOfficerDashboard.js';

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

const Container = styled.div`
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
`;

const DropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Select = styled.select`
  width: 200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
`;

const roleToComponentMap = {
  '/ucd': <URMCandidateDashboard />,
  '/rd': <RecruiterDashboard />,
  '/aid': <AcademicInstitutionsDashboard />,
  '/ad': <AdministratorDashboard />,
  '/dod': <DEIOfficerDashboard />,
};

const LoginSignup = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  const handleRoleSelection = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption) {
      setSelectedRole(selectedOption);
      navigate(selectedOption);
    }
  };

  return (
    <Container>
      <div className="container2">
        <center>
          <h2>Choose your role</h2>
        </center>
        <DropdownContainer>
          <Select id="role-dropdown" onChange={handleRoleSelection} value={selectedRole}>
            <option value="">Choose</option>
            <option value="/ucd">URM Candidate</option>
            <option value="/rd">Recruiter</option>
            <option value="/aid">Academic Institution</option>
            <option value="/ad">Administrator</option>
            <option value="/dod">DEI Officer</option>
          </Select>
        </DropdownContainer>
      </div>
    </Container>
  );
};

export default LoginSignup;
