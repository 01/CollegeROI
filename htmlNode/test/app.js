var express = require('express');
var app = express();


app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/style',  express.static(__dirname + '/style'));
app.use('/script',  express.static(__dirname + '/script'));
app.use('/img', express.static(__dirname +'/img'));
app.use('/fonts', express.static(__dirname +'/fonts'));
app.use('/js', express.static(__dirname +'/js'));

app.get('/',function(req,res){
	res.sendFile('index.html',{'root': __dirname + '/templates'});
})

app.get('/showSignInPage',function(req,res){
	res.sendFile('signin.html',{'root': __dirname + '/templates'});
})

app.get('/showSignUpPage',function(req,res){
  res.sendFile('signup.html',{'root':__dirname + '/templates'})
})

app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});
