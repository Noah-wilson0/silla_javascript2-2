// 소수 판단 스크립트
// 정수를 입력 받는다. 프롬프트
// 소수는 1을 제외한 자기 자신으로 나누어 떨어지는수
// 나누어 떨어진다 = 나누어 떨어진다

let inputnumber=parseInt(prompt("정수를 입력하시오:")) //정수를 입력받음

let count=0; //소수판별 변수를 먼저 초기화
 
for(let i=2;i<=inputnumber;i++){//1을 제외한 2부터 i로 나눈다.
    if(inputnumber%i==0){  //i로 나누어 떨어질떄마다  count추가
        count+=1
        if(count==2){ //큰수일 경우 쓸데 없이 너무 많이 프로그램이 돌아감을 방지 
            break;  // 어차피 count가 2이상이면 소수임을 배제 가능.
        }
    }

}
if(count==1){
    document.write(`${inputnumber}은 소수입니다.`) //1을 제외한 자기자신만이 나눠질경우는 count=1일떄이다.
}
else{
    document.write(`${inputnumber}은소수가 아닙니다.`) // 그외는 소수가 아니다.
}







