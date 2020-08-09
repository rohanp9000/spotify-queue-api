// Import token model
Auth = require('./authModel');
// Handle index actions
exports.index = function (req, res) {
    Auth.get(function (err, tokens) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Tokens retrieved successfully",
            data: tokens
        });
    });
};
// Handle create token actions
exports.new = function (req, res) {
    var token = new Auth();
    token.auth_token = req.body.auth_token;
    token.refresh_token = req.body.refresh_token;
// save the token and check for errors
    token.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New token set created!',
            data: token
        });
    });
};
// Handle view token info
exports.view = function (req, res) {
    Auth.findById(req.params.token_id, function (err, token) {
        if (err)
            res.send(err);
        res.json({
            message: 'Auth details loading..',
            data: token
        });
    });
};
// Handle update token info
exports.update = function (req, res) {
Auth.findById(req.params.token_id, function (err, token) {
        if (err)
            res.send(err);
token.auth_token = req.body.auth_token ;
        token.refresh_token = req.body.refresh_token;

// save the token and check for errors
        token.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Auth Info updated',
                data: token
            });
        });
    });
};
// Handle delete token
exports.delete = function (req, res) {
    Auth.remove({
        _id: req.params.token_id
    }, function (err, token) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Auth deleted'
        });
    });
};

exports.deleteAll = function(req, res) {
    Auth.deleteMany(function(err, token){
        if(err){
            res.send(err)
        }
        res.json({
            status: "success",
            message: 'ALL ELEMENTS DELETED'
        }); 
    });
};
