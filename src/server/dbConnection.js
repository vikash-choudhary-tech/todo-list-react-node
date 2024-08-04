const mysql = require("mysql2");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vikash@12345",
  database: "PracticeDb",
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected MySql!");
  queryDatabase("select * from person").then((response) =>
    console.log("response", response)
  );
});

function queryDatabase(queryParams) {
  return new Promise((resolve, reject) => {
    con.query(queryParams, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

module.exports = { queryDatabase };
