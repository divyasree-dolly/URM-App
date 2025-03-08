import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './style.css';
import {useNavigate} from 'react-router-dom';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;
const LogoutButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #ffffff;
  color: #8fbc8f;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const H1 = styled.h1`
  text-align: center;
  grid-column: 1 / span 2;
`;

const ProfileSection = styled.div`
  margin-bottom: 20px;
  grid-column: 1;
  background-color: #f8f8f8;
  padding: 20px;
`;

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    margin-bottom: 10px;
  }

  input[type='text'],
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input[type='submit'] {
    padding: 10px 20px;
    background-color: #8fbc8f;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const ReportsSection = styled.div`
  margin-bottom: 20px;
  grid-column: 2;
  background-color: #f8f8f8;
  padding: 20px;
`;

const ReportsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f8f8f8;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const MessagesSection = styled.div`
  margin-bottom: 20px;
  grid-column: 1 / span 2;
  background-color: #f8f8f8;
  padding: 20px;
`;

const AdDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logic here to handle logout (e.g., clearing session, redirecting to login page)
    // For simplicity, we'll just navigate to the login/signup page.
    navigate('/loginsignup');
  };

  // Profile state variables
  const [messages, setMessages] = useState([]);
  const [numNewMessages, setNumNewMessages] = useState(0);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [profileInfo, setProfileInfo] = useState('');

  // Reports state variables
  const [numUsers, setNumUsers] = useState(0);
  const [numJobPostings, setNumJobPostings] = useState(0);

  useEffect(() => {
    // Simulate fetching data with a delay of 1.5 seconds
    const fetchData = () => {
      setTimeout(() => {
        // Update the state with the fetched data
        setNumUsers(50);
        setNumJobPostings(20);
      }, 1500);
    };

    fetchData();
  }, []);

  // Handle form submission to save profile information
  const handleProfileFormSubmit = (e) => {
    e.preventDefault();
    // Save the profile information to state
    // You may want to add further validation here before saving
    setName(e.target.name.value);
    setRole(e.target.role.value);
    setProfileInfo(e.target['profile-info'].value);

    // Create an object with the profile data to send to the server
    const profileData = {
      name: e.target.name.value,
      role: e.target.role.value,
      profileInfo: e.target['profile-info'].value,
    };

    // Send the profile data to the server using POST request
    fetch('http://localhost/save_profile_ad.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server if needed
        console.log('Profile saved successfully:', data);
      })
      .catch((error) => {
        console.error('Error saving profile:', error);
        // Handle errors if necessary.
      });
    };
  const handleFetchMessages = () => {
    // Fetch messages details from the database
    fetch('http://localhost/messages_details.php')
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched messages data
        setMessages(data.messages);
        setNumNewMessages(data.messages.length); // Assuming the API response contains the number of new messages
      })
      .catch((error) => {
        console.error(error);
        // Handle errors if necessary.
      });
  };


  return (
    <Container>
      <H1>Administrator Dashboard</H1>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      <ProfileSection>
        <h2>Create and Manage Profile</h2>
        <ProfileForm id="profile-form" onSubmit={handleProfileFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="role">Role:</label>
          <input type="text" id="role" name="role" required />
          <label htmlFor="profile-info">Profile Information:</label>
          <textarea id="profile-info" name="profile-info" required />
          <input type="submit" value="Save Profile" />
        </ProfileForm>
      </ProfileSection>

      <ReportsSection>
        <h2>Reports</h2>
        <ReportsTable>
          <thead>
            <tr>
              <th>Report Type</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Number of registered users</td>
              <td><span id="num-users">{numUsers}</span></td>
            </tr>
            <tr>
              <td>Number of job postings</td>
              <td><span id="num-job-postings">{numJobPostings}</span></td>
            </tr>
            <tr>
              <td>Status of reported issues or errors</td>
              <td><span id="issue-status">None</span></td>
            </tr>
          </tbody>
        </ReportsTable>
      </ReportsSection>

      <MessagesSection>
          <h2>Messages</h2>
          <p>You have {numNewMessages} new messages</p>
          <button onClick={handleFetchMessages}>Fetch Message Details</button>
          <ul>
            {messages.map((message) => (
              <li key={message.id}>
                <p>ID: {message.id}</p>
                <p>Content: {message.content}</p>
                <p>Sender: {message.sender}</p>
                <p>Timestamp: {message.timestamp}</p>
              </li>
            ))}
          </ul>
        </MessagesSection>
    </Container>
  );
};

export default AdDashboard;