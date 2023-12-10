//이름 가져오기
let username=document.querySelector("#username");
//전공 가져오기
let major=document.querySelector("#major");

//등록하기 버튼 가져오기
const btn=document.querySelector("form > button");

//tbody가져오기
let tbody=document.querySelector("tbody");


//버튼을 클릭하면...
btn.addEventListener("click",(e)=>{
    e.preventDefault(); //버튼을 누르면 서버로 보내지 않는다.
    //tr 요소 만들기
    const tr=document.createElement("tr")
    //tr안에서 쓸 이름td,전공td 요소 만들기
    const td_username=document.createElement("td");
    const td_major=document.createElement("td");
    
    //td요소에 내용 넣기
    td_username.innerHTML=`${username.value}`;
    td_major.innerHTML=`${major.value}`;
    //tr요소를 tbody요소에 연결하기
    tbody.appendChild(tr);
    //2개의 td요소를 tr요소에 연결하기
    tr.appendChild(td_username);
    tr.appendChild(td_major);

    //연결 후 (이름/전공) 입력 값 초기화하기 
    username.value="";
    major.value="";

});



