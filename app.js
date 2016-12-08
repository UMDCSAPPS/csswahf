var credentails = require('./cred.json');

var accountSid = credentails.accountSid; // Your Account SID from www.twilio.com/console
var authToken = credentails.authToken;   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);

client.messages.create({
    body: 'Please reply with your latest grades in each class',
    to: '+14438785019',  // Text this number
    from: credentails.sendNumber // From a valid Twilio number
}, function(err, message) {
    if(err){
      console.log(err)
    } else {
      console.log(message.sid);
    }
});
