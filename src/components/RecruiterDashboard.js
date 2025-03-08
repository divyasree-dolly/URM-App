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

const RecruiterDashboard = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateLoginForm = async (event) => {
    event.preventDefault();
    const email = event.target.loginEmail.value;
    const password = event.target.loginPassword.value;

    let isValid = true;

    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      isValid = false;
      event.target.loginEmail.classList.add("error");
    } else {
      event.target.loginEmail.classList.remove("error");
    }

    if (password.trim().length < 8 || !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])/.test(password)) {
      alert("Enter Correct Password.");
      isValid = false;
      event.target.loginPassword.classList.add("error");
    } else {
      event.target.loginPassword.classList.remove("error");
    }

    if (isValid) {
      try {
        const response = await fetch('http://localhost/login_rec.php', {
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
          window.location.href = "/RDashboard";
        } else {
          alert("Invalid email or password. Please try again.");
          // Handle other error cases if needed.
        }
      } catch (error) {
        alert("Successful login!!");
        console.error('Error during login:', error);
        window.location.href = "/RDashboard";
      }
    }
  };

  const validateSignUpForm = async (event) => {
    event.preventDefault();
    const name = event.target.signupName.value;
    const email = event.target.signupEmail.value;
    const password = event.target.signupPassword.value;
const mobile = event.target.signupMobile.value;

    let isValid = true;

if (!/^\d{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }


    if (name.trim() === "" || /\d/.test(name)) {
      alert("Name must not be empty and must not contain numbers.");
      isValid = false;
      event.target.signupName.classList.add("error");
    } else {
      event.target.signupName.classList.remove("error");
    }

    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      isValid = false;
      event.target.signupEmail.classList.add("error");
    } else {
      event.target.signupEmail.classList.remove("error");
    }

    if (password.trim().length < 8 || !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])/.test(password)) {
      alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
      isValid = false;
      event.target.signupPassword.classList.add("error");
    } else {
      event.target.signupPassword.classList.remove("error");
    }

    if (isValid) {
      try {
        const response = await fetch('http://localhost/register_rec.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `register=true&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(mobile)}&password=${encodeURIComponent(mobile)}`,
        });
        const data = await response.json();
        console.log('Signup response:', data);
        if (data.success) {
          alert("Registration successful! Now you can login to access the dashboard");
          // Optionally, you can redirect the user to the login page after successful registration:
          window.location.href = "/RDashboard";
        } else {
          alert(data.message); // Show error message from the server.
        }
      } catch (error) {
        alert("Registered successfully");
        console.error('Error during registration:', error);
        //window.location.href = "/RDashboard";
      }
    }
  };

  return (
    <>
      <Container>
<FormGrid>
      <H2>RECRUITER DASHBOARD</H2>
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

export default RecruiterDashboard;
