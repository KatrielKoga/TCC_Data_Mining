var mysql = require('mysql');
var config;
config = {
	mysql_pool: mysql.createPool({
		host: process.env.HOST_DATABASE,
		user: process.env.USER_DATABASE,
		password: process.env.PASSWORD_DATABASE,
		database: process.env.NAME_DATABASE,
	}),
};
module.exports = config;
