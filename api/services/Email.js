var email = require("emailjs");
var server = email.server.connect({
    host: 'localhost',
    ssl: false
});

module.exports = {
    register: function(user, cb) {
        console.log(server);
        server.send({
            text:    "", 
            from:    "Sol Armada <donotreply@solarmada.com>", 
            to:      (user.username || "New Sol Armada Member") + " <" + user.email + ">",
            subject: "Verify Email",
            attachment: 
            [{
                data:'<html>' +
                '<body style="font-align: center;">' +
                '<img src="http://solarmada.com/images/logo/Grey.png" height="400" width="400"/>' +  
                '<h1>Thank you for registering with <br>Sol Armada!</h1>' +  
                '<p>After confirming your registration, we will evaluate your account and apply a badge that confirms that you are a member of Sol Armada. Allow up to 48 hours for confirmation. If you don’t see anything after 48 hours, please contact an administrator on our Discord server.</p>' + 
                '<p>Please confirm your registration by clicking the button below.</p>' +  
                '<p><a href="http://' + sails.config.url + '/confirm?code="' + user.confirmationCode + '>Confirm Your Email</a></p> ' + 
                '<p>If the link above does not work, please copy and paste the following line in your browser URL address bar.</p>' +
                '<p>http://' + sails.config.url + '/confirm?code=' + user.confirmationCode + '</p>' +
                '</body>' + 
                '</html>', 
            alternative:true}]
        }, function(err, message) {
            if(err) {
                sails.log.error(err);
                return cb(err, message);
            }
            return cb(null, message);
        });
    }
};