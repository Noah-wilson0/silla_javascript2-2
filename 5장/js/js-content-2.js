const title=document.querySelector("#title") //제목 가져오기

//이름 가져오기
const username=document.querySelector("#desc p") //(#desc .user)[0]도 가능
// const username=document.querySelector(".user")[0]

//프로필 이미지 가져오기
const  pfImg=document.querySelector("#profile img");

//제목 영역을 클릭하면  내용을 바꾼다.
title.onclick=()=> title.innerText="프로필"; 


//이름 영역 클릭하면 이름만 찐하게 만들어라.
username.onclick=()=>username.innerHTML="이름: <b>최원진</b>";

//이미지 영역을 클릭하면 이미지를 바꾼다.(이미지의 파일)
pfImg.onclick=()=> pfImg.src="images/pf2.png";





