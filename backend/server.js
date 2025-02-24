const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "shirley@352000",
  database: "TourManagement"
})

app.post("/signup", (req, res)=>
{
  const sql = "INSERT INTO login('name', 'email', 'password') VALUES (?)";
  const values = [
    req.body.name,
    req.boday.email,
    req.body.password
  ]
  db. query(sql, [values], (err, data)=>
  {
    if(err)
    {
      return res.json(data);
    }
  })
})

app.listen(8081,()=>
{
  console.log("Listening");
})