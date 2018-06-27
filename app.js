var express = require ('express');
var path = require ('path');
var fs = ('fs');
var bodyParser = require ('body-parser');
const app = express();
app.use(bodyParser());
// var data=[];
app.get('/', function(req, resp){
    resp.sendFile(__dirname +"/index.html");
});

app.post('/', function(req, resp){
  resp.end(JSON.stringify(req.body));

});
// app.get('/sec', function(req, resp){
//     resp.sendFile(__dirname +"/sec.html");
// });
// app.post('/sec', function(req, resp){
//   var obj = JSON.parse('req.body');
//   document.getElementById("container").innerHTML = obj.name ;
//
//     });
// app.get('/', function(req, resp){
//     resp.sendFile(__dirname +"/ty.html");
// });

// app.post('/', function(req, resp){


app.listen(3000,function(err) {
    if(err) throw err; //Tell me what is the error
    console.log(`Server running on port 3000`);
   });
