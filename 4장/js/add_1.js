/*
1~10까지 합계를 계싼하는 
*/
//함수 선언.
function calcSum(){
    let sum=0;
    for(let i=1;i<=10; i++){
        sum+=i; //sum=sum+i도 가능
    }

    document.write(`<h1>1~10까지 합은 ${sum}입니다.</h1>`)

}


// 함수 호출.

calcSum();