// const mysql = require('mysql');
// const connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'password',
// 	database: 'uso_diario',
// });
// connection.connect(err => {
// 	if (err) throw err;
// 	console.log('Connected!');
// });

// module.exports = { connection };

var mysql = require('mysql');
var config;
config = {
	mysql_pool: mysql.createPool({
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'uso_diario',
	}),
};
module.exports = config;
