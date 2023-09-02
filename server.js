var express = require('express');
var path = require("path");
const cors = require("cors");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");

var app = express()
app.use(cors({origin:"http://localhost:3000"
}))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use('/',express.static(path.join(__dirname,'pubilc')));
app.get('/', function(req,resp)
{
    resp.status(200).json({
        Message:"welcome to global"
    })
})
app.listen(3500, ()=> {
    console.log("server running at port 3500")
})
module.exports = app