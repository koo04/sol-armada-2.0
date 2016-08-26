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
                '<body>' +
                '<img src="http//solarmada.com/images/logo/Grey.png" height="100" width="100" />' +  
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