const express = require ('express');
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");
const path = require('path');
const cors = require('cors')
const config = require('./config.js');
const app = express();

/*Enable CORS from all resources*/
// app.use( (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

/*Simple way using corss*/
app.use(cors());
/*Enable CORS from all resources*/

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use( bodyParser.json() );

app.post('/send', (req, res) => {
  const output = `
    <p>You have a new subscription request</p>
    <h3>Subscription details</h3>
    <ul>
      <li>Email: ${req.body.email}</li>
    </ul>
  `;

  // Create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    ...config.mailer
  });

  transporter.verify((error, success) => {
    error ? console.log( error ) : console.log( 'Server is ready to take message' )
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: `${req.body.email}`,
      to: 'jorge.crooks@ethereal.email',
      subject: 'A new subscription request frow the web page', // Subject line
      text: '', // Plain text body
      html: output // HTML body
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      res.json({
        msg: 'fail'
      })
      console.log(error);
      // res.redirect('error'); //Hardcoding
    } else {
      res.json({
        msg: 'success'
      })
      console.log('Message sent: %s', data.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(data));
      // res.redirect('success'); //Hardcoding
    }
  });
});

// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

app.listen( config.server.port, () => {
  console.log( `Server running on port ${ config.server.port }` );
} );
