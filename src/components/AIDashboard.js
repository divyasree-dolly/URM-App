import React,{useState,useEffect } from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
const Section = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  width: 400px;
`;

const H1 = styled.h1`
  text-align: center;
  grid-column: span 2;
`;

const ProfileSection = styled(Section)`
  margin-bottom: 20px;
`;

const ProfileForm = styled.form`
  /* Your profile form styles */
`;

const JobPostingsSection = styled(Section)`
  margin-bottom: 20px;
`;

const JobPostingsList = styled.ul`
  padding-left: 20px;
`;

const MessagesSection = styled(Section)``;


const AIDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logic here to handle logout (e.g., clearing session, redirecting to login page)
    // For simplicity, we'll just navigate to the login/signup page.
    navigate('/loginsignup');
  };
  // State variables to manage profile data
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [faculty, setFaculty] = useState('');
  const [messages, setMessages] = useState([]);
  const [numNewMessages, setNumNewMessages] = useState(0);
  // State variable for job postings count
  const [numJobPostings, setNumJobPostings] = useState(0);



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
  
  useEffect(() => {
    // Simulate fetching data with a delay of 1.5 seconds
    const fetchData = () => {
      setTimeout(() => {
        // Update the state with the fetched data
        setNumJobPostings(20);
      }, 1500);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h1>ACADEMIC INSTITUTIONS DASHBOARD</h1>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      <div className="profile-section section-box">
        <h2>Create and Manage Profile</h2>
        {/* Profile form */}
        <ProfileForm onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="about">About our Institution:</label>
          <textarea id="about" name="about" value={about} onChange={(e) => setAbout(e.target.value)} />
          <label htmlFor="faculty">Faculty:</label>
          <textarea id="faculty" name="faculty" value={faculty} onChange={(e) => setFaculty(e.target.value)} />
          <input type="submit" value="Save Profile" />
        </ProfileForm>
      </div>
      <JobPostingsSection className="job-postings-section section-box">
        <h2>Job Postings</h2>
        <p>Number of job postings: <span id="num-job-postings">{numJobPostings}</span></p>
        <p>Status of applications received: <span id="application-status">None</span></p>
        <p>URM candidates interested in our postings:</p>
        <ul id="urm-candidates">
          <li>No interested candidates</li>
        </ul>
      </JobPostingsSection>
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

export default AIDashboard;