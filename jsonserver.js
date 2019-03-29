var http = require('http')
var map = require('through2-map')
var url = require('url')
var server = http.createServer(function(req,res){
path = url.parse(req.url,true).pathname;	
	if(path === '/api/parsetime'){
res.writeHead(200, { 'Content-Type': 'application/json' })
	}else if(path === '/api/unixtime'){
res.writeHead(200, { 'Content-Type': 'application/json' })
}

})
server.listen(process.argv[2])
