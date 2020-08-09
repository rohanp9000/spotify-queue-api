var mongoose = require('mongoose');
// Setup schema
var tokenSchema = mongoose.Schema({
    auth_token: {
        type: String,
        required: true
    },
    refresh_token: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export auth model
var Authorization = module.exports = mongoose.model('tokens', tokenSchema);
module.exports.get = function (callback, limit) {
    Authorization.find(callback).limit(limit);
}