// /src/components/ContactUs.js
import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImg from './background.jpg';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
`;

const H2 = styled.h2`
  color: #8fbc8f;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextAreaField = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.input`
  background-color: #3498db;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 4px;

  &:hover {
    background-color: #2186c9;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;

  /* Add some spacing between the form fields */
  & > * {
    margin-bottom: 10px;
  }
`;

const Label = styled.label`
  /* Center the label text */
  text-align: center;
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim() === '' || !email.match(emailPattern) || message.trim() === '') {
      alert('Please fill in all required fields with valid data.');
      return;
    }

    // Prepare form data to be sent to the server
    const formdata = new URLSearchParams();
    formdata.append('name', name);
    formdata.append('email', email);
    formdata.append('message', message);

    try {
      // Make a POST request to the PHP script
      const response = await fetch('http://localhost/contact_form.php', {
        method: 'POST',
        body: formdata,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          alert(data.message);
          // Clear form fields on successful submission
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        } else {
          alert('Failed to submit the form. Please try again later.');
        }
      } else {
        alert('Failed to submit the form. Please try again later.');
      }
    } catch (error) {
      alert('Successfully submitted the form.');
    }
  };

  return (
    <Container>
      <center>
        <div className="container2">
          <H2>Contact Us</H2>
          <p>If you have any questions or inquiries, please fill out the form below:</p>

          <Form onSubmit={handleSubmit}>
            <Label htmlFor="name">Name:</Label>
            <InputField type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <Label htmlFor="email">Email:</Label>
            <InputField type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

            <Label htmlFor="message">Message:</Label>
            <TextAreaField id="message" name="message" value={formData.message} onChange={handleChange} required />

            <SubmitButton type="submit" value="Submit" />
          </Form>
        </div>
      </center>
    </Container>
  );
};

export default ContactUs;
