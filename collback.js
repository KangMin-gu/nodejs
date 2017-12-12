/*
cmd 창에 node 만 입력
cmd 창에서 javascript를 쓸수 있게 한다.
ex) console.log(1+1);

a=[3,2,1]; console.log(a);
한줄에 여러개의 명령어를 실행시킬수 있다.

a=[3,2,1]; a.sort() console.log(a);
배열이 내림차순으로 정렬되어 출력된다.

a=[3,2,1]; function b(V1,v2){return v2-v1} a.sort(a) console.log(a);
a.sort()이란 익명함수 안에 함수를 넣었다. 이걸 콜백이라함. function에 변수를 넣은거는
이함수를 여러번 사용하기위해 변수를 넣었다.

a=[3,2,1]; a.sort(function b(V1,v2){return v2-v1}); console.log(a);
이 Ex)는 sort안에 콜백함수를 직접 넣었다.
즉, function sort(callback){callbakc();}; sort란 함수안에 함수를 또 넣은것.

*/
