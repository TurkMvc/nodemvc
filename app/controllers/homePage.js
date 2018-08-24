module.exports.index = function(request, response){
    if( request.session.isLogin == "true" ){
        const User = require('../models/user');
        User.findOne({ _id: request.session.uid }, {index: false}, function(err, user){
            response.render('./homePage.ejs', {
                siteTitle: 'My site',
                pageTitle: 'Home Page',
                titleB: '||',
                user: user
            });
        });
    }else{
        response.redirect('./login');
    }
}
