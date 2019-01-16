var  express=require('express');
var app=express();
var request=require('request');
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("search");
});

app.get("/result",function(req,res){
	var s=req.query.search;
	request("http://omdbapi.com/?apikey=c0562bb3&s=" + s ,function(error,response,body){
		if(!error && response.statusCode == 200){
			var data=JSON.parse(body);
			res.render("result",{data:data});
		}
	});
	
});

app.listen(3000,function(){
	console.log("Movie Server Started!!!");
});