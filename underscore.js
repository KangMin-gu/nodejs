var _ = require('underscore'); //npm underscore 모듈 실행.
var arr = [3,6,9,1,12];
//arr배열의 첫번째 값 알아오기
console.log(arr[0]);
console.log(_.first(arr));
//arr배열의 마지막 값 알아오기
console.log(arr[arr.length-1]);
console.log(_.last(arr));
