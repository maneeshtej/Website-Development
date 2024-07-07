import mysql from "mysql";

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Tej@1016",
  database: "employeems",
});

con.connect((err) => {
  if (err) {
    console.error("Connection error:", err);
  } else {
    console.log("Connected to the database");
  }
});

export default con;
