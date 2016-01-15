function log(obj) {
    var emailEmp = document.getElementById("emailEmp");
    var messageEmp = document.getElementById("messageEmp");
    var namEmpl = document.getElementById("nameEmpl").value;
    var nameToClear = document.getElementById("nameEmpl");
	
    emailEmp.value = "";
    messageEmp.value = "";
	
    $('#formGroup').hide();
    $("#response").text("Thank You " + namEmpl + " I will get back to you shortly.").show().delay(5000).queue(function(n) {
        nameToClear.value = "";
        $(this).hide();
        n();
        $('#formGroup').show();
    });
}

var m = new mandrill.Mandrill('KsnxCiHbpEqZVP3-leqIxQ');

function sendTheMail() {
   
    var namEmpl = document.getElementById("nameEmpl").value;
    var emailEmp = document.getElementById("emailEmp").value;
    var messageEmp = document.getElementById("messageEmp").value;

    var params = {
        "message": {
            "from_email": "ana.arribasplata@aarribas.com",
            "to": [{
                "email": "ana.arribasplata@aarribas.com"
            }],
            "subject": emailEmp,
            "text": namEmpl + " " + messageEmp,
            "autotext": true
        }
    };
    m.messages.send(params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
}
