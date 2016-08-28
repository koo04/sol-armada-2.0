var passport = require('passport');

module.exports = {

    _config: {
        actions: false,
        shortcuts: false,
        rest: false
    },

    register: function(req, res) {
        var body = req.body;
        User.create(body).exec(function(err, user) {
            if(err) {
                sails.log.error(err);
                return res.json({error: err});
            }
            Email.register(user, function(err) {
                if(err) sails.log.error(err);
            });
            
            return res.json({created: true});
        });
    },

    confirm: function(req, res) {
        var code = req.query.code;
        User.findOne({confirmationCode: code}).exec(function(err, user) {
            if(err) {
                sails.log.error(err);
                return res.serverError(err);
            }
            if(user) {
                User.update(user, {confirmationCode: null}).exec(function(err, udpatedUser) {
                    if(err) {
                        sails.log.error(err);
                        return res.serverError(err);
                    }
                    return res.view('messages/confirmed', { redirect: '/' });
                });
                
            } else {
                return res.notFound("That confirmation code does not exist!");
            }
        });
    },

    resend: function(req, res) {
        var user = req.query.user;
        User.findOne({id: user}).exec(function(err, user) {
            if(err) {
                sails.log.error(err);
                return res.serverError(err);
            }
            if(user.confirmationCode) {
                Email.confirm(user, function(err) {
                    if(err) sails.log.error(err);
                });
                return res.view('messages/emailSend', {email: user.email});
            } else {
                return res.view('messages/confirmedAlready', {email: user.email});
            }
        });
    },

    login: function(req, res) {
        console.log(req.body);
        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                return res.send({
                    message: info.message,
                    user: user
                });
            }

            req.logIn(user, function(err) {
                if (err) res.send(err);
                delete user.password;
                return res.json({
                    success: true,
                    message: info.message,
                    user: user
                });
            });

        })(req, res);

    },

    logout: function(req, res) {
        req.logout();
        res.redirect('/');
    }
    
};