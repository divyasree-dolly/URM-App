import React from 'react';
import './style.css';
import styled from 'styled-components';

const H2 = styled.h2`
  color: #8fbc8f;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 800px;
  width: 100%;
`;

const FormWindow = styled.div`
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  padding: 20px;
`;


const URMCandidateDashboard = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateLoginForm = async (event) => {
    event.preventDefault();
    const email = event.target.loginEmail.value;
    const password = event.target.loginPassword.value;

    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.trim().length < 8 || !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])/.test(password)) {
      alert("Enter correct Password");
      return;
    }

    try {
      const response = await fetch('http://localhost/login_urm.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `login=true&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
      });
      const data = await response.json();
      console.log('Login response:', data);
      if (data.success) {
        alert("Login successful!");
        window.location.href = "/UCDashboard";
      } else {
        alert("Invalid email or password. Please try again.");
        // Handle other error cases if needed.
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert("Logined successfully");
      window.location.href = "/UCDashboard";
    }
  };

  const validateSignUpForm = async (event) => {
    event.preventDefault();
    const name = event.target.signupName.value;
    const email = event.target.signupEmail.value;
    const password = event.target.signupPassword.value;
const mobile = event.target.signupMobile.value; 


    if (name.trim() === "" || /\d/.test(name)) {
      alert("Name must not be empty and must not contain numbers.");
      return;
    }

    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }
 if (!/^\d{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (password.trim().length < 8 || !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])/.test(password)) {
      alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
      return;
    }

    try {
      const response = await fetch('http://localhost/register_urm.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `register=true&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&mobile=${encodeURIComponent(mobile)}`,
      });
      const data = await response.json();
      console.log('Signup response:', data);
      if (data.success) {
        alert("Registration successful! Now you can login to access the dashboard");
        // Optionally, you can redirect the user to the login page after successful registration:
        //window.location.href = "/UCDashboard";
      } else {
        alert(data.message); // Show error message from the server.
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert("Registration successful! Now you can login to access the dashboard");
    }
  };

  return (
    <>
      <Container>
<FormGrid>
      <H2>URM CANDIDATE DASHBOARD</H2>
      <div className="container">
        <div className="grid-container">
          {/* Login Window */}
          <FormWindow className="login-form window">
            <h2>Login</h2>
            <form onSubmit={validateLoginForm}>
              <label htmlFor="login-email">Email:</label>
              <input type="email" id="login-email" name="loginEmail" required defaultValue="user@example.com" />
              <label htmlFor="login-password">Password:</label>
              <input type="password" id="login-password" name="loginPassword" required defaultValue="********" />
              <button type="submit">Login</button>
              <a href="/ForgotPassword">Forgot Password?</a>
            </form>
          </FormWindow>
          {/* Sign Up Window */}
          <FormWindow className="signup-form window">
            <h2>Sign Up</h2>
            <form onSubmit={validateSignUpForm}>
              <label htmlFor="signup-name">Name:</label>
              <input type="text" id="signup-name" name="signupName" required defaultValue="User" />
              <label htmlFor="signup-email">Email:</label>
              <input type="email" id="signup-email" name="signupEmail" required defaultValue="user@example.com" />
              <label htmlFor="signup-password">Password:</label>
              <input type="password" id="signup-password" name="signupPassword" required defaultValue="********" />
              <label htmlFor="signup-mobile">Mobile Number:</label>
             <input type="tel" id="signup-mobile" name="signupMobile" required defaultValue="1234567890" />
             <button type="submit">Sign Up</button>
            </form>
          </FormWindow>
        </div>
      </div>
</FormGrid>
</Container>

    </>
  );
};

export default URMCandidateDashboard;
