var http  = require('http');
function onRequest(request,response){
		response.writeHead(200,{'content-Type': "text-plain"});
		response.write("hello world how are you doing today");
		response.end();
}
http.createServer(onRequest).listen(8000);
console.log("server is now is now running");