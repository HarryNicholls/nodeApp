/**
 * Created by 1405741 on 21/11/2016.

var http = require('http')
var port = process.env.PORT || 1337;

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World, this is my first server side code in JS. Woo!\n');
}).listen(port);
*/

var http = require('http')
var port = process.env.PORT || 1337;

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<!DOCTYPE 'html'>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Hello World Page</title>");
    response.write("</head>");
    response.write("<body>");
    response.write("<h1>");
    response.write("Hello World!");
    response.write("</h1>");
    response.write("</body>");
    response.write("</html>");
    response.end();
});
server.listen(port);
console.log("Server is listening");
