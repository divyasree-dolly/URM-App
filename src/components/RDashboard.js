import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './style.css';
import {useNavigate} from 'react-router-dom';


const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    margin-bottom: 10px;
  }

  input[type='text'],
  textarea {
    width: 80%; /* Set the width to 100% to fit the grid */
    padding: 8px; /* Reduce the padding for a more compact form */
    margin-bottom: 5px; /* Reduce the margin for a more compact form */
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input[type='submit'] {
    padding: 8px 16px; /* Reduce the padding for a more compact button */
    background-color: #8fbc8f;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;


const H1 = styled.h1`
  text-align: center;
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


const GridLayout = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'profile add-job-posting'
    'job-postings job-postings'
    'messages messages';
  grid-gap: 20px;

  @media (max-width: 768px) {
    /* For smaller screens, change the grid layout to a single column */
    grid-template-columns: 1fr;
    grid-template-areas:
      'profile'
      'add-job-posting'
      'job-postings'
      'messages';
  }
`;

const Section = styled.div`
background-color: #f8f8f8;
padding: 20px;
border-radius: 4px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
grid-area: ${(props) => props.area};

h2 {
  margin-top: 0;
}
`;

const RDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [numNewMessages, setNumNewMessages] = useState(0);
  const [name, setName] = useState('');
  const [recruitingAgency, setRecruitingAgency] = useState('');
  const [clients, setClients] = useState('');
  const [preferences, setPreferences] = useState('');
  const [numJobPostings, setNumJobPostings] = useState(0);
  const [applicationStatus, setApplicationStatus] = useState('');
  const [urmCandidates, setUrmCandidates] = useState([]);
  //const [numNewMessages, setNumNewMessages] = useState(0);
  const [jobPostings, setJobPostings] = useState([]);

  const navigate = useNavigate();


  const [newJob, setNewJob] = useState({
    id:'',
    title: '',
    description: '',
    status: '',
    location: '',
    salary: '',
  });
  
  const handleJobInputChange = (event) => {
    const { name, value } = event.target;
    setNewJob((prevJob) => ({ ...prevJob, [name]: value }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Prepare the form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('recruiting_agency', recruitingAgency);
    formData.append('clients', clients);
    formData.append('preferences', preferences);

    // Make an HTTP POST request to save the profile data
    fetch('http://localhost/save_profile.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        console.log(response);
        // Optionally, show a success message to the user.
        alert('Saved successfully!!');
      })
      .catch((error) => {
        console.error(error);
        // Optionally, show an error message to the user.
        alert('Saved successfully!!');
      });
  };

  const handleLogout = () => {
    // Add logic here to handle logout (e.g., clearing session, redirecting to login page)
    // For simplicity, we'll just navigate to the login/signup page.
    navigate('/loginsignup');
  };
  const handleFetchJobPostings = () => {
    // Fetch job postings details from the database
    fetch('http://localhost/job_postings_details.php')
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched job postings data
        setJobPostings(data);
        // Update the number of job postings in the state
        setNumJobPostings(data.length);
      })
      .catch((error) => {
        console.error(error);
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
  
  
  const handleAddJobPosting = (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('id', newJob.id);
    formData.append('title', newJob.title);
    formData.append('description', newJob.description);
    formData.append('status', newJob.status);
    formData.append('location', newJob.location);
    formData.append('salary', newJob.salary);
  
    // Make an HTTP POST request to save the new job posting data
    fetch('http://localhost/add_job_posting.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Optionally, show a success message to the user.
        alert('Job posting added successfully!!');
        // Clear the form fields after successful submission
        setNewJob({
          id: '',
          title: '',
          description: '',
          status: '',
          location: '',
          salary: '',
        });
      })
      .catch((error) => {
        console.error(error);
        // Optionally, show an error message to the user.
        alert('Failed to add job posting. Please try again.');
      });
  };
  

  return (
    <>
      <H1>Recruiter Dashboard</H1>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      <GridLayout>
      <Section area="profile" className="profile-section section-box">
          <h2>Create and Manage Profile</h2>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="recruiting-agency">Recruiting Agency:</label>
            <textarea id="recruiting-agency" name="recruiting-agency" required value={recruitingAgency} onChange={(e) => setRecruitingAgency(e.target.value)} />
            <label htmlFor="clients">Clients:</label>
            <textarea id="clients" name="clients" required value={clients} onChange={(e) => setClients(e.target.value)} />
            <label htmlFor="preferences">Preferences (URM candidates/Locations):</label>
            <textarea id="preferences" name="preferences" required value={preferences} onChange={(e) => setPreferences(e.target.value)} />
            <input type="submit" value="Save Profile" />
          </Form>
        </Section>
        <Section area="add-job-posting" className="add-job-posting-section section-box">
          
  <h2>Add Job Posting</h2>
  <Form onSubmit={handleAddJobPosting}>
  <label htmlFor="id">Id:</label>
    <input type="text" id="id" name="id" required value={newJob.id} onChange={handleJobInputChange} />
    <label htmlFor="title">Title:</label>
    <input type="text" id="title" name="title" required value={newJob.title} onChange={handleJobInputChange} />
    <label htmlFor="description">Description:</label>
    <textarea id="description" name="description" required value={newJob.description} onChange={handleJobInputChange} />
    <label htmlFor="status">Status:</label>
    <input type="text" id="status" name="status" required value={newJob.status} onChange={handleJobInputChange} />
    <label htmlFor="location">Location:</label>
    <input type="text" id="location" name="location" required value={newJob.location} onChange={handleJobInputChange} />
    <label htmlFor="salary">Salary:</label>
    <input type="text" id="salary" name="salary" required value={newJob.salary} onChange={handleJobInputChange} />
    <input type="submit" value="Add Job Posting" />
  </Form>
</Section>
<Section area="job-postings" className="job-postings-section section-box">
        <h2>Job Postings</h2>
        <p>Number of job postings: <span id="num-job-postings">{numJobPostings}</span></p>
        
        <p>New URM candidates matching client preferences: 4</p>
        <ul id="urm-candidates">
          {urmCandidates.map((candidate, index) => (
            <li key={index}>{candidate}</li>
          ))}
        </ul>
        <button onClick={handleFetchJobPostings}>Fetch Job Postings Details</button>
{/* Display the fetched job postings data in a table */}
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Description</th>
      <th>Status</th>
      <th>Location</th>
      <th>Salary</th>
    </tr>
  </thead>
  <tbody>
    {jobPostings.map((job, index) => (
      <tr key={index}>
        <td>{job.id}</td>
        <td>{job.title}</td>
        <td>{job.description}</td>
        <td>{job.status}</td>
        <td>{job.location}</td>
        <td>{job.salary}</td>
      </tr>
    ))}
  </tbody>
</table>

      </Section>
      <Section area="messages" className="messages-section section-box">
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
          
        </Section>
      </GridLayout>
    </>
  );
};

export default RDashboard;
