//버튼 가져오기
const btn=document.querySelector("#bttn");
//메뉴 가져오기
let nav=document.querySelector("#nav");

//버튼을 클릭하면... 메뉴가 표시된다.
btn.addEventListener("click",()=>{
    //다시 버튼을 누르면 메뉴가 숨겨진다.
    btn.classList.toggle("active");
    nav.classList.toggle("active");
});