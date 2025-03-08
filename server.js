const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors'); 

const app = express();
const PORT = 3003; // You can use any available port

app.use(express.json());

app.use(cors()); 

const SENDGRID_API_KEY = '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'; // Replace this with your SendGrid API key
sgMail.setApiKey(SENDGRID_API_KEY);

app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  const msg = {
    to: to,
    from: 'bdivyasree7@gmail.com', // Replace this with your sender email address
    subject: subject,
    text: text,
  };

  sgMail.send(msg)
    .then(() => {
      console.log('Email sent successfully');
      res.json({ message: 'Email sent successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    });
});

// Root route
app.get('/', (req, res) => {
  res.send('Hello, this is the homepage!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
