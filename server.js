
// const Database = require("better-sqlite3");
const express = require("express");
const cors = require ("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get ("/hello" , function(req, res){
    res.send("hello from the server")
});


app.get("/person", function(req , res){
        const person = {name: "Sam", age:30};
res.json(person);
console.log(person)
});

app.post("/greet", function(req, res){
    console.log(req.body);
const name = req.body.name;
res.json({message:"Hello " + name});
});
app.listen (3000, function(){
    console.log("server is running")
});

