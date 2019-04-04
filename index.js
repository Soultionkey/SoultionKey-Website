const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/api/form', (req, res) => {
  response = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    service: req.body.service,
    hearAboutUS: req.body.hearAboutUS,
    message: req.body.message
  }

  var mailOptions = {
    from: req.body.email,
    to: 'soultionkey@gmail.com',
    subject: 'My site contact from: ' + req.body.name,
    html: 'Message from: ' + req.body.name + '<br></br> Email: ' + req.body.email
    +'<br></br> Phone: '+ req.body.phone+ '<br></br> Service: '+req.body.service
    +'<br></br> How did you hear aboutus: '+ req.body.hearAboutUS+ '<br></br> Message: '+
    req.body.message,
  };
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'soultionkey@gmail.com',
      pass: 'Soultionkey123**'
    }
  });
  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      return console.log(err);
    } else {
      console.log(JSON.stringify(res));
    }
  });
})
//*************************************************
app.post('/api/callForm', (req, res) => {
  response = {
    name: req.body.name,
    time: req.body.time,
    phone: req.body.phone,
    startDate: req.body.startDate
  }
var user= req.body.email
  var mailOptions = {
    // from: req.body.email,
    to: 'soultionkey@gmail.com',
    subject: 'My site contact from: ' + req.body.name,
    html: 'Message from: ' + req.body.name 
    + '<br></br> Email: ' + req.body.email
    +'<br></br> Phone: '+ req.body.phone+ '<br></br> startDate: '+req.body.startDate
    +'<br></br> Time: '+ req.body.time
    
  };
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'soultionkey@gmail.com',
      pass: 'Soultionkey123**'
    }
  });
  
  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      return console.log(err);
    } else {
      console.log(JSON.stringify(res));
    }
  });
})
app.post('/api/callReplay', (req, res) => {
  response = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
    }
    console.log('done')

  var OwnerMail = {
    from: 'soultionkey@gmail.com',
    to: req.body.email,
    subject: 'A Confirmation Message ' ,
    html: 'Message from: ' + 'soultionkey@gmail.com' 
    + '<br></br> Dear: '+req.body.name
    + '<br></br> Message: '+req.body.message
  };
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'soultionkey@gmail.com',
      pass: 'Soultionkey123**'
    }
  });
  
  transporter.sendMail(OwnerMail, (err, res) => {
    if (err) {
      return console.log(err);
    } else {
      console.log(JSON.stringify(res));
    }
  });

})


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`)
})