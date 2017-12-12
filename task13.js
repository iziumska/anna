var fs = require('fs');

fs.appendFile('mytext.txt', 'Hello!\n', function (err) {
  if (err) throw err;
  console.log('Saved1!');
});

fs.appendFile('mytext.txt', 'Have a nice day!\n', function (err) {
  if (err) throw err;
  console.log('Saved2!');
});

fs.appendFile('mytext.txt', 'Bye!\n', function (err) {
  if (err) throw err;
  console.log('Saved3!');
});

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anna.iziumskaya@gmail.com',
    pass: '********'
  }
});

var mailOptions = {
  from: 'anna.iziumskaya@gmail.com',
  to: 'tinanna02@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});