// 아이디가 title인 요소를 가지고 와서 title 변수에 저장.
const title=document.querySelector("#title");

// title을 누르면(클릭하면) 클래스 이름이 clicked인 것을 추가하라. add
// Style.css파일의 .clicked을 말함
// 1과 2의 실행 결과는 다름
// 여러번할떄  1.
title.onclick=()=>{
    title.classList.add("clicked");
}

// 단발성으로 쓸때  2.
// title.onclick=()=>{
//     title.style.backgroundColor="pink";
//     title.style.color="red";
// }









