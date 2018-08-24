module.exports.index = function(request, response){
    if( request.session.isLogin == "true" ){
        const User = require('../models/user');
        User.findOne({ _id: request.session.uid }, {index: false}, function(err, user){
            response.render('./editProfile.ejs', {
                siteTitle: 'My site',
                pageTitle: 'Edit Profile',
                titleB: '||',
                user: user
            });
        });
    }else{
        response.redirect('./login');
    }
}

module.exports.editProfile = function(request, response){
    if( request.session.isLogin == "true" ){
        console.log('posted');
        const User = require('../models/user');
        var myquery = { _id: request.session.uid };
        var newvalues = { $set: { 
            username: request.body.username,
            password: request.body.password,
            name: request.body.name,
            surname: request.body.surname
        } };
        User.updateOne(myquery, newvalues, function(err, user){
            if(err)
                console.log('Hata:' + err);
            else{
                User.findOne({ _id: request.session.uid }, {index: false}, function(err, user){
                    response.render('./editProfile.ejs', {
                        siteTitle: 'My site',
                        pageTitle: 'Edit Profile',
                        titleB: '||',
                        user: user,
                        status: "true"
                    });
                });
            }
        });
    }else{
        response.redirect('./login');
    }
}