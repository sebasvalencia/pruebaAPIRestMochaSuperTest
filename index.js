var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
var router = express.Router();

router.get('/',function(req,res){
  res.json({"error" : false, "message" : "Hello !"});
});

router.post('/add',function(req,res){
  res.json({"error" : false, "message" : "success", "data" : req.body.num1 + req.body.num2});
});

var personas=[
{
    nombre:"Juan",
    apellido:"G"
},
{
    nombre:"Andres",
    apellido:"H"
}
];

app.get('/personas', (req,res)=>{
    console.log("personas", personas);
    res.send(personas);
});

app.use('/',router);

app.listen(3000,function(){
  console.log("I am listening at PORT 3000");
})