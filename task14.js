//Task №1
var Logger = require('events').EventEmitter;

var log = new Logger();

var myTime = new Date;

log.on('logIn', function(){
		console.log('Hello, '+'listener №'+ log.listenerCount('logIn') + ' ' + myTime.toLocaleString());
});

log.on('someAction', function(){
		console.log('Listener №'+ log.listenerCount('someAction') + ', someAction');
});

log.on('logOut', function(){
		console.log('Bye, '+'listener №'+ log.listenerCount('logOut') + ' ' + myTime.toLocaleString());
});

log.emit('logIn');
log.emit('someAction');
log.emit('logOut');

//Task №2
var http = require('http');
var app = http.createServer(function(req,res){
	res.write('Hello');

	if(req.url == '/about'){
		console.log(req.url);
		res.end();
};
	if(req.url == '/stop'){
		app.close();
		res.end();
	}
})

app.listen(3000, function(){
	console.log('Server on localhost:3000');
})

//Task №3
var request = require('request');

var URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';

request(URL, function (err, res, body) {
    if (err) throw err;
    console.log('privatbank: '+ body);
    //console.log(res.statusCode);
});

//Task №4
var fs = require('fs')
var request = require('request');

var URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';

request(URL).pipe(fs.createWriteStream('my.js'));