function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

var m = new mandrill.Mandrill('KsnxCiHbpEqZVP3-leqIxQ');


function sendTheMail() {
// Send the email!
var mailaddress = document.getElementById("maila").value,
recipient = [{"email": String(mailaddress)}];
var params = {
    "message": {
        "from_email":"test-tpltest@mandrill.com",
        "to": recipient,
        "subject": "Sending a text email from the Mandrill API",
        "text": "I'm learning the Mandrill API at Codecademy.",
        "autotext": true
    }
};
    m.messages.send(params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
}
