require('dotenv').config()
const express = require('express')
const bodyParser=require('body-parser');
const nodemailer = require('nodemailer');

const app = express()

// Destructuring .env file
const { SERVER_PORT , EMAIL, EMAIL_PASSWORD} = process.env

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: EMAIL_PASSWORD
  }
});

// Top Level middleware
app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json())

app.post('/api/email', (req, res)=>{
  const {name, email, message} = req.body
  console.log('iran', name, email, message,EMAIL, EMAIL_PASSWORD)

  const mailOptions = {
    from: EMAIL,
    to: EMAIL,
    subject: 'Message From Site',
    text: `
      Name:${name}
      Email: ${email}
      Message: ${message}
    `
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
  const testResponse = 'Message sent'
  res.status(200).send(testResponse)
});

// Launch Server
app.listen(SERVER_PORT, () => (console.log(`boiling on port: ${SERVER_PORT}`)))

