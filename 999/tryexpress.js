var mysql      = require('mysql');
var http = require("http");
var bodyParser = require('body-parser');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'trysql'
});

//connection.connect();

/*
var name='Tom';
connection.query('insert into trysql values(2,?) ',name, function(err, rows, fields) {
  if (err) throw err;
 // console.log('The solution is: ', rows);
});


connection.query('select * from trysql ', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows);
});
*/



var express = require('express');
var app = express();
//app.use(express.bodyParser());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.post('/signup', function (req, res) {
   res.send('Hello World');
   console.log(req.body);
   
})
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
var user_name='c';
var password=1;
var sql = 'select * from users where user_name='+connection.escape(user_name) +' and password='+connection.escape(password);

   

   connection.query(sql, function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows);
  
});
   
})
	/*
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
*/
http.createServer(app).listen(8000);


