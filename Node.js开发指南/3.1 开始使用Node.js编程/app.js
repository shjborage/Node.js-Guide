/**
 * Created by shihaijie on 2/24/16.
 */

var http = require("http");
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Node.js</h1>');
  res.write('<h2>test</h2>');
  res.end('<p>Hello World</p>');
}).listen(3000);
console.log("Http server is listening at port 3000");

/*
Node.js开发起来容易，但是调试相对麻烦，需要重新启动服务。
有supervisor可以解决此问题。
`npm install -g supervisor`, `supervisor app.js`
 */