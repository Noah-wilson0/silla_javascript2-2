function displayA() {
  console.log("A");
}
function displayB(callback) {
  setTimeout(() => {
    console.log("B");
    callback();  //콜백 함수를 사용해서  실행 시간이 제일 빠른 A가 가장 먼저 실행되고 B > C 순서로 실행된다.
  }, 2000);
}
function displayC() {
  console.log("C");
}    
displayA();
displayB(displayC);