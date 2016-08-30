module.exports = {
    discord: function(req, res) {
        return res.view('messages/discordRedirect', {link: 'http://discord.gg/0Vr0BMdhh6uB4isw'});
    },
    
    discord2: function(req, res) {
        return res.view('messages/discordRedirect', {link: 'https://discord.gg/0Vr0BMdhh6u0UaUu'});
    }
}