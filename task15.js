//Task №1
var http = require('http');
var fs = require('fs');

var file = fs.createWriteStream('demo.txt');

for (var i =0; i <= 1000000; i++){
	file.write("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc")
}
file.end();

var http = http.createServer(function(req,res){
	res.write('Hello\n');

	if(req.url == '/stream'){
		var stream = fs.createReadStream('demo.txt');

		var path = 'demo.txt';
		var myFile = fs.statSync(path, function(err, stats) {
				console.log('File in stream, '+ myFile.size);
		})

			if(myFile.size>63000000){
				console.log('demo.txt' + ' is big, it is  ' + myFile.size);
				stream.on('data', function(chunk){			
					res.write('start chunk');
					res.write(chunk.toString());
					res.write('end chunk');

			});
				}else if(myFile.size<63000000){
					console.log('demo.txt' + ' is small, it is ' + myFile.size);
					stream.on('data', function(){
						res.write('data');
						res.end()
					});

			};
	};
		

	if(req.url == '/file'){
		fs.readFile('demo.txt', function(err,data){
		res.write(data);
		res.end();
	});
	};
});


http.listen(3000, function(){
	console.log('Server on localhost:3000');
})
