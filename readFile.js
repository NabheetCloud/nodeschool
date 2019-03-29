var fs = require('fs')
var path = require('path')
//console.log('file filter',process.argv[3])
fs.readdir(process.argv[2],function(err,data){
var files = data.map( (file) =>{
//	console.log('intial file'+file)
//	console.log('path '+path.extname(file))
	if (path.extname(file) == ('.'+ process.argv[3])){
	console.log(file)
	}
	})
})
