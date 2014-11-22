var http = require('http'); 
var path = require('path');
var fs = require('fs');
var server = http.createServer(function(request, response){  
    var filePath = '.' + request.url;
    if(filePath == './'){
    	filePath = './index.html';
    }

    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch(extname){
    	case '.js':
    		contentType = 'application/javascript';
    		break;
    	case '.css':
    		contentType = 'text/css';
    		break;
    	case '.svg':
    		contentType = 'image/svg+xml';
    		break;
    } 
    fs.exists(filePath, function(exists){
    	var content = fs.readFileSync(filePath);
    	response.writeHead(200, {'Content-Type': contentType});
    	response.end(content, 'utf-8');
    }); 
}).listen(8080);  
console.log("Server Running on 8080");    