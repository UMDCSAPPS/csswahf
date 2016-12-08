var credentials = require('./cred.json');

var accountSid = credentials.accountSid;
var authToken = credentials.authToken;

var port =3001;
var LOGGING_STATUS = 'development';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

var async = require('async');

//logging stuff
const winston = require('winston');
if(LOGGING_STATUS == 'production'){
	winston.remove(winston.transports.Console);
}
winston.add(winston.transports.File, { filename:'csswahf.log' });


var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);

app.get('/test', function (req,res){
  //

	res.send({'response':'CSSWAHF BACKEND SERVICE V.1.0.0'})
	res.end();
})

app.get('*', function (req,res){
	res.send({'response':'CSSWAHF BACKEND SERVICE V.1.0.0'})
	res.end();
})

//app error handling stuff, has to come last lol
app.use(function(err, req, res, next) {
  // Do logging and user-friendly error message display
  winston.error('STACKTRACE: ' + err.stack);
  res.end();
})

app.listen(port, function () {
	console.log('CSSWAHF Backend Service started. Port: ' + port);
	winston.info('BACKEND SERVICE STARTED. PORT:' + port);
});

//shutting down server stuff
process.on( 'SIGINT', function() {
  console.log( "\nBACKEND SERVICE STOPPED.");
  winston.info('BACKEND SERVICE STOPPED.')
  // some other closing procedures go heresi
  process.exit( );
})


client.messages.create({
    body: 'Please reply with your latest grades in each class',
    to: '+14438785019',  // Text this number
    from: credentials.sendNumber // From a valid Twilio number
}, function(err, message) {
    if(err){
      console.log(err)
    } else {
      console.log(message.sid);
    }
});
