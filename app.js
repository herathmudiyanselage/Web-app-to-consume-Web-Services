var express=require("express")
var moment=require("moment")

var app=express()

var log=function(message)
{
    var time = moment().format()
    console.log('[server] @' + time + message)
}

var add=function(num1,num2)
{
    var result = num1+num2;
    return result
}

app.get('addar',function(req,res){
    log('Adder Request Made')
    var num1= parseInt(req.query.num1);
    var num2 = parseInt(req.query.num2);
    var result=adder(num1,num2)
    res.send(''+result+'')
}


app.use(express.static(__dirname + '/public'));

var port=3000;
app.listen(port)
log('server listening on:0' + port)


