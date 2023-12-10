// noti-box가져오기
let noti_box=document.querySelector("#noti-box");
// 버튼 가져오기
const btn=document.querySelector("#bttn");


btn.addEventListener("click",()=>{
    //div요소 만들기
    const div=document.createElement("div");

    //div 요소에 .noti 스타일 추가하기
    div.classList.add("noti")
    //innerText를 사용해서 추가할 내용 작성하기
    div.innerText="알림 내용이 표시됩니다."
    
    //새로만든 div요소를 noti_box와 연결하기
    noti_box.appendChild(div);
    //3초후 연결한 div메시지가 삭제된다.
    setTimeout(()=>{
        noti_box.removeChild(div);
    },3000);

});










