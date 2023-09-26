//버튼의 요소 가져오기
const btn=document.querySelector("button") //버튼 요소 가져오기(태그가 button인것)
/*
//display 함수 정의
function display(){
    alert("버튼을 클릭했습니다.");
}

//버튼을 클릭하면 display()함수 실행.
btn.addEventListener("click",display); //display뒤에 ()는 안 붙인다.
*/

// 함수에 직접 작성하여 콜백 함수 실행 addEventListener함수안에 또 하나의 함수를 호출
btn.addEventListener("click",()=>{
    alert("버튼 클릭!");
});



