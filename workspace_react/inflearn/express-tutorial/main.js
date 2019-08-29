var express = require('express');
var app = express();
var user = require('./routers/user');
var morgan = require('morgan');
var bodyParser = require('body-parser');


// var myLogger = function(req, res, next){
//     console.log(req.url);
//     next();
// };

// app.use(myLogger);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', express.static('public'));

//제거) express.static('public')을 지정하여 public 폴더의 index.html을 보게 되어서 필요 없어졌다.
// app.get('/', function(req, res){
//     res.send('Hello World');
// });

app.use('/user', user);

app.listen(3000, function(){
    console.log('Example App is listening on port 3000');
})
