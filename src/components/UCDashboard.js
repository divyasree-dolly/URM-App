
import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

import styled from 'styled-components';


const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
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
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    margin-bottom: 10px;
  }

  input[type='text'],
  input[type='file'],
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



const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

const GridItem = styled.div`
  /* Styles for each grid item */
  /* For equal-sized grid items, you don't need to add specific styles here */
`;
const customReplies = {
  "hello": "Hello there!",
  "hi": "Hello there!",
  "thank you": "you are welcome",
  "thanks": "you are welcome",
  "how are you?": "I'm doing well, thank you!",
  "what's your name?": "My name is ChatBot.",
  "Can i know about dashboards?": "Please go through the Blog tab, thank you!",
  "I need help?": "Please fill contact form , our associae will be in touch with you.",

};


const UCDashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Add logic here to handle logout (e.g., clearing session, redirecting to login page)
    // For simplicity, we'll just reload the page to simulate logout.
    navigate('/loginsignup');
  };
  const [profile, setProfile] = useState({
    name: '',
    resume: '',
    academicRecords: '',
    coverLetter: '',
    preferences: '',
  });

  const [applications, setApplications] = useState({
    numApplications: 0,
    status: 'None',
    jobPostings: ['No new job postings'],
  });
  // Function to handle sending messages
  const [chatMessages, setChatMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [numNewMessages, setNumNewMessages] = useState(0);
  const handleProfileSubmit = (event) => {
    event.preventDefault();
    // Here, you can handle the profile data submission to the backend if needed.
    // For this example, we'll just update the state.
    // Assuming you have form elements with appropriate IDs for inputs.

    const formData = new FormData(event.target);
    const newProfile = {
      name: formData.get('name'),
      resume: formData.get('resume'),
      academicRecords: formData.get('academic-records'),
      coverLetter: formData.get('cover-letter'),
      preferences: formData.get('preferences'),
    };
    fetch('http://localhost/save_profile_uc.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProfile),
    })
      .then((response) => response.json())
      .then((data) => {
        // If the backend responds with success, you can handle it here
        console.log('Profile data submitted successfully:', data);
        // Assuming the backend responds with some success message in the data object
        // You can display a success message to the user or handle other actions as needed.
      })
      .catch((error) => {
        console.error('Error submitting profile data:', error);
        // Handle errors if necessary.
      });

    setProfile(newProfile);
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

  const generateRandomNumbers = () => {
    const randomNumApplications = Math.floor(Math.random() * 100); // Generating a random number between 0 and 99
    const randomStatus = Math.random() < 0.5 ? 'Pending' : 'Approved'; // Randomly selecting status between 'Pending' and 'Approved'
    setApplications({
      numApplications: randomNumApplications,
      status: randomStatus,
      jobPostings: ['No new job postings'], // You may update this with actual job postings if you have them.
    });
  };
  
  const sendMessage = (event) => {
    event.preventDefault();
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();

    if (message === '') {
      return;
    }

    setChatMessages((prevMessages) => [...prevMessages, { text: message, isUser: true }]);

    // Clear the chat input field after sending the message
    chatInput.value = '';
// Check if the user's message matches any key in the customReplies dictionary
const customReply = customReplies[message.toLowerCase()];
if (customReply) {
  // If a custom reply exists, add it to the chat
  setChatMessages((prevMessages) => [
    ...prevMessages,
    { text: customReply, isUser: false },
  ]);
} else {
  // If no custom reply is found, add a default response
  setChatMessages((prevMessages) => [
    ...prevMessages,
    { text: "I'm sorry, I don't have a specific response for that, Please fill the contact form, our associate gets connected with you shortly", isUser: false },
  ]);
}
    
  };

  return (
    <>
      

      <div className="container1">
        <center>
          <h1>URM Candidate Dashboard</h1>
        </center>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        <div className="profile-section section-box">
          <h2>Create and Manage Profile</h2>
          {/* Profile form */}
          <form onSubmit={handleProfileSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="resume">Upload Resume:</label>
            <input type="file" id="resume" name="resume" />
            <label htmlFor="academic-records">Upload Academic Records:</label>
            <input type="file" id="academic-records" name="academic-records" />
            <label htmlFor="cover-letter">Upload Cover Letter:</label>
            <input type="file" id="cover-letter" name="cover-letter" />
            <label htmlFor="preferences">Preferences (Applied Positions/Locations):</label>
            <textarea id="preferences" name="preferences"></textarea>
            <input type="submit" value="Save Profile" />
          </form>
        </div>
        <div className="applications-section section-box">
        <h2>Applications</h2>
        <p>
          Number of applications submitted: <span id="num-applications">{applications.numApplications}</span>
        </p>
        <p>
          Status of applications: <span id="application-status">{applications.status}</span>
        </p>
        <p>New job postings:</p>
        <ul>
          {applications.jobPostings.map((posting, index) => (
            <li key={index}>{posting}</li>
          ))}
        </ul>
        <button onClick={generateRandomNumbers}>Show status </button>
      </div>
        <div className="messages-section section-box">
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
          
        </div>
        {/* URM Candidate Dashboard */}
        {/* Chat section */}
        <div className="chat-section section-box">
          <h3>Chat</h3>
          <div className="chat-messages" id="chat-messages">
            {/* Render the chat messages */}
            {chatMessages.map((message, index) => (
              <p key={index} className={message.isUser ? "user-message" : "bot-message"}>
                {message.text}
              </p>
            ))}
          </div>
          <input type="text" id="chat-input" placeholder="Type your message..." />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>

      
    </>
  );
};

export default UCDashboard;
