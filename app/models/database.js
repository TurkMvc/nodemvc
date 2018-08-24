const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const mongoDB = 'mongodb://localhost:27017/mynode';

mongoose.connect(mongoDB, { useNewUrlParser: true });

mongoose.connection.on('connected',function(){
    console.log('Mongodb Connected');
});
mongoose.connection.on('error',function(err){
    console.log('Mongodb connection error : '+err );
})
mongoose.connection.on('disconnected',function(){
    console.log('Mongodb Disconnected');
});
