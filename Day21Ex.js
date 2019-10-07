//Example of web server format after installing Node.js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//Run web server using node app.js visit http://localhost:3000 should see message 'Hello World'
//Making this local web server html webpage
"localhost:8080/about"

//Making my server for Exercise should look like
const http = require('http');

const hostname = 'about';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello World!')
  res.end('Hello World\n');
});

server.listen(8080, about, () => {
  console.log(`Server running at http://${about}:${8080}/`);
});

//Wonder if simpler way to write? after saving to demo_http_url.js but using H1 Header
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(<h1>'Hello World!'</h1>)>;
  res.end();
}).listen(8080);

