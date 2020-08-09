// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'working',
        message: 'message',
    });
});
// Import contact controller
var contactController = require('./authController');
// Contact routes
router.route('/tokens')
    .get(contactController.index)
    .post(contactController.new);
router.route('/tokens/:token_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete)
    .purge(contactController.deleteAll);
// Export API routes
module.exports = router;