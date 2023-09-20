// 두수를 입력받아 곱한 결과를 리턴하여 화면에 출력하는 함수

function cal(x,y){

return x*y;
}


let x=parseInt(prompt("곱할숫자 입력(첫 번쨰 숫자)")) // 입력 받을 첫 번쨰 숫자
let y=parseInt(prompt("곱할숫자 입력(두 번쨰 숫자)")) //입력 받을 두 번쨰 숫자

document.write(`<h1>${x}와${y}의 곱은 ${cal(x,y)}이다</h1>`)  //곱 출력
