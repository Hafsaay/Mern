const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
// var caught = require('caught');

// var p = caught(Promise.reject(0));
//
 mongoose.Promise = global.Promise;


 mongoose.connect('mongodb://todos:Hafsacs76@ds121301.mlab.com:21301/internship').then(function() {
  console.log('Database connected');

});
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;
app.engine('mustache',mustacheExpressInstance);
app.set('view engine','mustache');
app.set('views', __dirname + '/views');

app.use('/', routes);

app.listen(3000,function(){
  console.log('listening on port 3000 ');
});
