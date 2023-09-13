/*  섭시 온도= (화씨온도 -32 ) / 1.8
    프롬프트로 화씨 온도 입력 받는다.
    섭씨 온도 계산하고, 출력한다
    출력은 alert() 또는 document.write() 중 하나 선택
    화씨 온도 00도는 섭씨 온도 00도 입니다.
    섭씨: cel 화씨:fah
*/

function convertMath(){
    let fah=parseFloat(prompt("화씨온도 입력:"));
    let cel=((fah-32)/1.8).toFixed(1);
    
    alert(`화씨 온도 ${fah}도는 섭씨 온도 ${cel}도 입니다.`)
    document.write(`화씨 온도 ${fah}도는 섭씨 온도 ${cel}도 입니다.`)

}
convertMath();

