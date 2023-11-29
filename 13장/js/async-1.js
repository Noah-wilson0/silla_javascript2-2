function displayA() {
  console.log("A");
}
function displayB() {
  setTimeout(() => console.log("B"), 2000);  //setTimeout 을 써서 시간을 강제로 늦춤
}
function displayC() {
  console.log("C");
}    
displayA();
displayB();  //A,C에 비해 상대적으로 느린 B는 별도로 나중에 처리된다.
displayC();

/*
  함수의 실행 시간에 따라 오래 걸리는 것은 별도로 처리하고 실행이 끝났을 때 결과를 반환
*/