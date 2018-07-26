db.createUser({
    user: 'dsall',
    pwd: 'sallibou1994',
    roles: [{ role: 'readWrite', db:'gmaps_database'}]
})


// FRIENDLY NAME
// Gmaps_test

// SID
// SK0d46975c62ba9d9d9d580b77d4bb8a77

// KEY TYPE
// Standard

// SECRET
// QCcassnTPAfEmMbLectbmfgxZhULps3H


var accountSid = 'SK0d46975c62ba9d9d9d580b77d4bb8a77';
var authToken = 'QCcassnTPAfEmMbLectbmfgxZhULps3H';

var inspect = require('util').inspect

var client = require('twilio')(accountSid, authToken);
//[JF] The Returned object is a Rest Client and explicit call for Restclient fails...Also new is not accepted

console.log(inspect(client))

client.sendMessage({
//[JF] Original code in website had 'client.messages.create'...That does not work...
    body: 'Hello from JF Node',
    to: '+19372650725',  // Text this number
    from: '+1<removed>' // From a valid Twilio number
}, function (err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); 
        console.log(responseData.body); // outputs "word to your mother."

    }
})

