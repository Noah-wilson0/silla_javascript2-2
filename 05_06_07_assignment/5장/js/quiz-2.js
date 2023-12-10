//버튼, 결과영역 가져오기
const calc=document.querySelector("#calc");
const result=document.querySelector("#result");
//유클리드 알고리즘을 사용하여 최대 공약수 구하는 방법
let getGCD = (num1, num2) => {
  
    while(num2 > 0){
        let r = num1 % num2;
        num1 = num2;
        num2 = r;
    } 

    return num1;
}
//버튼을 클릭하면... 결과영역에 최대 공약수 표시됨.
calc.onclick=()=>{
    // 첫번쨰 숫자, 두번쨰 숫자가져오기
    let number1=parseInt(document.querySelector("#number1").value); //문자열로 가져오기떄문에 정수형으로 변환
    let number2=parseInt(document.querySelector("#number2").value);
    let GCD=getGCD(number1,number2);
    //result영역에 최대공약수 출력하기
    result.innerText=GCD;
}

