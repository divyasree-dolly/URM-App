import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const H2 = styled.h2`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    margin-bottom: 10px;
  }

  input[type='email'] {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button[type='submit'] {
    padding: 10px 20px;
    background-color: #8fbc8f;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;




const ForgotPassword = () => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const [email, setEmail] = useState('');

  const validateForm = async (event) => {
    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: email,
          subject: 'Password Reset',
          text: 'Click the link to reset your password.',
        }),
      });

      if (response.ok) {
        setShowMessage(true);
      } else {
        alert('Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };


    

  return (
    <center><Container>
      <H2>Forgot Password</H2>
      {showMessage ? (
        <>
          <p>Password reset link has been sent to your email.</p>
          <button onClick={() => navigate('/')}>Go back to Home</button>
        </>
      ) : (
        <>
          <p>Please enter your registered email address to reset your password.</p>
            <Form onSubmit={validateForm}>
              <label htmlFor="forgot-email">Email:</label>
              <input
                type="email"
                id="forgot-email"
                name="forgot-email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Reset Password</button>
            </Form>
          </>
        )}
      </Container>
    </center>
  );
};
export default ForgotPassword;

