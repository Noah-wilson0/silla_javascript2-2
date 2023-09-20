/*
1~전달 받은 수까지 합계를 계싼하는 
*/
//함수 선언.
function calcSum(num){
    let sum=0;
    for(let i=1;i<=num; i++){
        sum+=i; //sum=sum+i도 가능
    }
    return sum;
    
   
}

//사용자로부터 정수 입력 받기
let  number=parseInt(prompt("정수입력(몇까지 더할까요?)"))


// 함수 호출.

document.write(`<h1>1~${number}까지 합은 ${calcSum(number)}입니다.</h1>`)