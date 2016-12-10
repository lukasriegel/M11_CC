var http = require('http');

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('process id: ' + process.pid);
   
}).listen(process.env.PORT);