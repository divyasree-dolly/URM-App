import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import DataDisplayTable from './DataDisplayTable';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

const H1 = styled.h1`
  text-align: center;
  grid-column: 1 / span 2;
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

const JobPostingsSection = styled.div`
  margin-bottom: 20px;
  grid-column: 2;
  background-color: #f8f8f8;
  padding: 20px;
`;

const JobPostingsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 20px;
`;

const MessagesSection = styled.div`
  margin-bottom: 20px;
  grid-column: 1 / span 2;
  background-color: #f8f8f8;
  padding: 20px;
`;

const DODashboard = () => {
  const [messages, setMessages] = useState([]);
  const [numNewMessages, setNumNewMessages] = useState(0);


  const [showTable, setShowTable] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    organization: '',
    deiGoals: '',
    preferences: '',
  });
  const [numJobPostings, setNumJobPostings] = useState(0);
  const [jobPostings, setJobPostings] = useState([]);
  const [urmCandidates, setURMCandidates] = useState([]);
  const [deiInitiatives, setDEIInitiatives] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Make an HTTP POST request to save the profile data
    fetch('http://localhost/save_profile_dei.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    })
      .then((response) => response.json())
      .then((data) => {
        // Optionally, show a success message to the user.
        alert('Profile saved successfully!');
      })
      .catch((error) => {
        console.error(error);
        // Optionally, show an error message to the user.
        alert('Error occurred while saving profile.');
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

  const handleFetchJobPostings = () => {
    // Fetch job postings details from the database
    fetch('http://localhost/job_postings_details_do.php')
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched job postings data
        setJobPostings(data.jobPostings);
        setNumJobPostings(data.jobPostings.length);

        // Update the state with URM candidates interested in DEI-focused postings
        setURMCandidates(data.urmCandidates);

        // Update the state with DEI-focused initiatives or events
        setDEIInitiatives(data.deiInitiatives);
      })
      .catch((error) => {
        console.error(error);
        // Handle errors if necessary.
      });
  };

  useEffect(() => {
    handleFetchJobPostings();
  }, []);

  
  const navigate = useNavigate();
  const handleLogout = () => {
    // Add logic here to handle logout (e.g., clearing session, redirecting to login page)
    // For simplicity, we'll just navigate to the login/signup page.
    navigate('/loginsignup');
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleGenerateData = () => {
    // Replace this array with any random job postings data you want to fetch
    const randomJobPostings = [
      {
        id: 1,
        title: "Job Posting 1",
        description: "This is a random job posting for a DEI-focused position.",
      },
      {
        id: 2,
        title: "Job Posting 2",
        description: "Another random job posting with DEI emphasis.",
      },
    ];
  
    // Replace this array with any random URM candidates data you want to fetch
    const randomURMCandidates = [
      "John Doe",
      "Jane Smith",
      "Michael Johnson",
      "Emily Lee",
    ];
  
    // Replace this array with any random DEI initiatives data you want to fetch
    const randomDEIInitiatives = [
      "Diversity Training Workshop",
      "Inclusive Hiring Campaign",
      "Employee Resource Group Formation",
    ];
  
    // Set the random data as the job postings, URM candidates, and DEI initiatives
    setJobPostings(randomJobPostings);
    setURMCandidates(randomURMCandidates);
    setDEIInitiatives(randomDEIInitiatives);
  
    // Show the table after generating data
    setShowTable(true);
  
    //alert('Random job postings, URM candidates, and DEI initiatives generated successfully!');
  };
  

  return (
    <>
      <H1>DEI Officer Dashboard</H1>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      <Container>
        <ProfileSection>
          <h2>Create and Manage Profile</h2>
          <ProfileForm onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={profile.name}
              onChange={handleInputChange}
            />
            <label htmlFor="organization">Organization:</label>
            <textarea
              id="organization"
              name="organization"
              required
              value={profile.organization}
              onChange={handleInputChange}
            />
            <label htmlFor="dei-goals">DEI Goals and Initiatives:</label>
            <textarea
              id="dei-goals"
              name="deiGoals"
              required
              value={profile.deiGoals}
              onChange={handleInputChange}
            />
            <label htmlFor="preferences">Preferences (URM candidates/Locations):</label>
            <textarea
              id="preferences"
              name="preferences"
              required
              value={profile.preferences}
              onChange={handleInputChange}
            />
            <input type="submit" value="Save Profile" />
          </ProfileForm>
        </ProfileSection>

        <JobPostingsSection>
          <h2>Job Postings</h2>
          <p>Number of job postings meeting DEI criteria: 2</p>
          <p>URM candidates interested in DEI-focused postings:</p>
          <JobPostingsList id="urm-candidates">
            {urmCandidates.map((candidate, index) => (
              <li key={index}>{candidate}</li>
            ))}
          </JobPostingsList>
          <p>New DEI-focused initiatives or events:</p>
          <JobPostingsList id="dei-initiatives">
            {deiInitiatives.map((initiative, index) => (
              <li key={index}>{initiative}</li>
            ))}
          </JobPostingsList>
          <button onClick={handleGenerateData}>Fetch Data</button>
      {showTable && jobPostings.length > 0 && (
        <DataDisplayTable
          jobPostings={jobPostings}
          urmCandidates={urmCandidates}
          deiInitiatives={deiInitiatives}
        />
      )}
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
    </>
  );
};

export default DODashboard;
