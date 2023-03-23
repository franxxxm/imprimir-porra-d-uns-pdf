const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const bd = require("./bd")
const bodyParser = require("body-parser")

app.use(express.static(path.join(__dirname,"public")));

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));


app.get("/", (req, res)=>{ 
    res.sendFile(__dirname + '/index.html');
    })

app.post("/livros", async (req, res)=>{
    const limit = req.body.limit;
    const offset = req.body.offset;

    const sql = await `SELECT * FROM livros WHERE iduniversidade = 26 LIMIT ${limit} OFFSET ${offset}` ;
    const [dados] = await bd.query(sql);
    res.send(dados)
})



app.listen(4000, ()=>[
    console.log('foi')
])