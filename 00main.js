var http = require("http");
http.createServer(function(request,response){
  response.writeHead(200, {'Content-Type':'text/plain'});

  response.end("Hello World!");
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081");

/*
cmd 실행
main.js 저장폴더 위치
node main.js 실행
*/ 
