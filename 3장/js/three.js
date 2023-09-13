/*
    1.정수를 입력 받는다.


    2.만약 정수가 3의 배수이면
        1)3의 배수입니다. 출력

    3.아니면
        3의 배수가 아닙니다. 출력

*/



function calculator(){
    // let num=parseInt(prompt("숫자를 입력하세요"))

    let num=prompt("숫자를 입력하세요")

    if(num!=null){
        num=parseInt(num)
        if(num%3==0){
            alert("3의 배수입니다.")
        }
        else{
            alert("3의 배수가 아닙니다.")
        }
    }
    else{
        alert("다시 입력하시오")
        
    }
}
calculator()