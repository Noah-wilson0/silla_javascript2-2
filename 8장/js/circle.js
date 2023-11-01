//반지름을 입력 받아 원의 넓이와 둘레를 출력한다.
//반지름은 프롬프트로 입력 받는다.
//원의 넓이와 둘레를 구하는 함수를 각각 작성합니다.
//넓이와 둘레는 소수 3자리 까지 출력합니다.

//1. 함수 생성
let circle_Avg=function(r){
    return Math.PI*r*r;
}
let circle_C=function(r){
    return Math.PI*r*2;
}
//2. 가져오기
let result=document.querySelector("#result");
//3. 입력 받기
let r=parseInt(prompt("반지름 입력"));
//4. 결과 출력
result.innerText=`
    반지름:${r}
    넓이:${circle_Avg(r).toFixed(3)}
    둘레:${circle_C(r).toFixed(3)}`;


