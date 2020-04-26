const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: 'Password1',
    database: 'employee_db'
  });
  
  connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    //create tables
    // sqlQueries.Employee.createTable(connection)
    // sqlQueries.Role.createTable(connection)
    // sqlQueries.Department.createTable(connection)
  
    // sqlQueries.Employee.Add(connection, `test`, `test`, `1`, `1`);
    // sqlQueries.Role.Add(connection, `Manager`, `100`, `23`);
    // sqlQueries.Department.Add(connection, `HR`)
  });

  module.exports = connection;