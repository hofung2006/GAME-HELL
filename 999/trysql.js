var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'trysql'
});

connection.connect();
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
	/*
   var uname='c';
   var psw=1;
   var uemail='req.body.uemail';
   var ubirthday='1995-01-01';
   var utel=12345678;
   var uengname='uengname';
   */
	   var post={
user_name:'f',
password:1,
eng_name:'f',
email:'f',
tel_no:123,
birthday:'1995-01-01'};
	
	connection.query('insert into users set ? ',post, function(err, rows, fields) {
	if (err) throw err;
	});

	/*
var post={user_id:3,
user_name:'f',
password:1,
eng_name:'f',
email:'f',
tel_no:123,
birthday:1/1/1995};

	connection.query('insert into users set ?',post, function(err, rows, fields) {
  if (err) throw err;

	});
	*/
connection.end();