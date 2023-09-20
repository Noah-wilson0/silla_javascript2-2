const factor=5 //변수 선언 및 생성

function calc(){
    return num*factor //num을 찾을 수 없음 블록 스코프
}

{
    const name=10
    let result=calc()  //함수 호출
    console.log(`result : ${result}`)
}