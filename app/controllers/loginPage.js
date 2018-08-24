module.exports.index = function(request, response){
    if( request.session.isLogin == "true" ){
        response.redirect('./');
    }else{
        response.render('./loginPage.ejs', {
            siteTitle: 'My site',
            pageTitle: 'Login Page',
            titleB: '||',
            isLogin: 'false'
        });
    }
}
module.exports.login = function(request, response){

    const User = require('../models/user');
    User.findOne({ username: request.body.username, password: request.body.password }, {index: false}, function(err, user){
        if(err)
            console.log("Hata oluştu: " + err);

        else if(!user){
            console.log("Kullanıcı bulunamadı");
            response.render('./loginPage.ejs', {
                siteTitle: 'My site',
                pageTitle: 'Login Page',
                titleB: '||',
                status: 'false',
            });
        }
        else{
            console.log("Başarılı");
            request.session.isLogin = "true";
            request.session.uid = user._id;
            response.render('./loginPage.ejs', {
                siteTitle: 'My site',
                pageTitle: 'Login Page',
                titleB: '||',
                status: 'true',
            });
        }
    });

}