// Routes
const HPC = require('./homePage');
const LPC = require('./loginPage');
const EPC = require('./editProfile');

module.exports = function(app){
    // Pages
    app.use('/', HPC);
    app.use('/login', LPC);
    app.use('/editProfile', EPC);
    app.get('*', function(req, res){
        res.send('404 Page Not Found', 404);
    });
}