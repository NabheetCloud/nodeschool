var net = require('net')
var strftime = require('strftime')
var server = net.createServer(function(socket){
	var data = strftime('%F %H:%M', new Date() )
//console.log(data)
	socket.end(data+'\n')
})
server.listen(process.argv[2]);
