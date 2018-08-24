const express = require('express');
const session = require('express-session');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./app/models/database');

const app = express();

app.use(session({
    secret: 'denemedeneme',
    resave: false,
    saveUninitialized: true
}));
  
// EJS Settings
app.engine('.ejs', ejs.__express);
app.set('views',__dirname+'/app/views/');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Assets
app.use('/assets/', express.static(path.join(__dirname, './app/assets/')));

app.get('/logout', function (request, response) {
    request.session.destroy();
    response.redirect('/');
});

require('./app/routes/routeManager')(app);


// Listen
app.listen(3000);