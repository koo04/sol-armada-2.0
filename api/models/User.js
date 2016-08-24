var bcrypt = require('bcryptjs');

module.exports = {

    attributes: {
        username: {
            type: 'string'
        },
        email: {
            type: 'email',
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            minLength: 6,
            required: true
        },
        rsiHandle: {
            type: 'string',
            required: true
        },
        discordHandle: {
            type: 'string'
        },
        discordNumber: {
            type: 'string'
        },
        subdivision: {
            model: 'Subdivision',
            via: 'id'
        },
        image: {
            type: 'string'
        },
        confirmationCode: {
            
        },
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },

    beforeCreate: function(user, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    sails.log.error(err);
                    cb(err);
                } else {
                    user.password = hash;
                    cb();
                }
            });
        });
    }

};
