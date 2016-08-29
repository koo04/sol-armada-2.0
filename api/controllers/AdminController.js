module.exports = {
    index: function(req, res) {
        User.find().exec(function(err, users) {
            if(err) {
                sails.log.error(err);
                return res.serverError(err);
            }
            return res.view('admin/index', {layout: 'layouts/admin', users: users});
        });
        
    }
}