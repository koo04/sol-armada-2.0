module.exports = {
    discord: function(req, res) {
        return res.view('messages/discordRedirect', {link: 'https://discord.gg/zpSGgV3'});
    },
    
    discord2: function(req, res) {
        return res.view('messages/discordRedirect', {link: 'https://discord.gg/0Vr0BMdhh6u0UaUu'});
    },

    flywithus: function(req, res) {
        return res.view('flywithus');
    }
}