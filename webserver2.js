const http = require('http');//모듈중 http를 불른다.

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => { //http가 가지고있는 함수createServer를 실행
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
/*
위에 내용의 함축된 내용과 같은 말
 //서버를 만들고
var server = http.createServer(function(req, res){//사용자가 포트로들어왓을때 실행할 함수
  //어떤 내용을 출력할 것인가. 그리고 이 함수는 2개의 인자를 받는다.
  //1. request(요청) 2. res(응답) 정보를 담은 객체
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
 //포트를 바라보게 하고, 우리서버ip로 타고들어온 사용자를 수용할것인가. 그리고
 //실행 시간이 listen이 오래걸릴수 있기때문에 비동기화를 위해 콜백 함수를 적용하게 약속한 것이다.
server.listen(port, hostname, function(){
  //리슨이성공할때 호출할 console
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
