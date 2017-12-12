var fs = require('fs'); //filesync 모듈 불러오기

//sync(동기화) 방식 -> 1이 실행되고 10분짜리 작업인 리드파일싱크가 10분동안 작업을 다하면 출력한다.
console.log(1);
var data = fs.readFileSync('data.txt', {enconding:'utf8'}); //(파일이름, 옵션)
console.log(data); //리드파일싱크가 동기화적으로 data파일을 읽는다.
//동기화 -> 순서대로 절차 실행


//Async
console.log(2);
fs.readFile('data.txt', {encoding:'utf8'}, function(err, data){//에러, 데이타
  console.log(3);
  console.log(data); //에러가없으면 data에 txt파일을 넣어 화면에 출력
})
console.log(4); //2번 실행 4번실행 3번실행 된다.
//3번은 빽그라운드에 던져서  다른데서 실행시키고 4번실행시킨다음. 작업이끝나면 3을 실행
//node.js 싱글스레드지만 비동기화로 반응속도가빠르다
//이런 맥락으로 콜백이 활용됨. !! 중요!!
