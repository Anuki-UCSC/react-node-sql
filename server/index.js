const express =require("express");
const app =express();
const mysql =require("mysql");
const bodyParser=require("body-parser");
const cors =require("cors");


const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"cruddatabase",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/api/insert", (req,res)=>{
    const 	movie_name=req.body.movie_name;
    const 	movie_review=req.body.movie_review;
    const sqlInsert="insert into movie_reviews (movie_name,movie_review) values(?,?)";
    db.query(sqlInsert,[movie_name,	movie_review], (err,result)=>{
        console.log(err);
        // console.log("err");

    });
});

app.get("/api/get",(req,res)=>{
    const sqlget="select * from movie_reviews";
    db.query(sqlget,(err,result)=>{
        res.send(result);
    })
})

app.listen(3001,()=>{
    console.log("running on port 3001");
});

