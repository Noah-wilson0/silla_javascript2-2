//버튼 요소 가져오기
const btn=document.querySelector("button")
//버튼을 클릭하면
btn.addEventListener("click",()=>{
    //p요소 만들기
    let newP=document.createElement("p")
    //텍스트 노드 만들기
    let textNode=document.createTextNode("안녕하세요")
    //p의 자식으로 텍스트 노드 추가하기(연결하기)
    newP.appendChild(textNode)
    //Javascript를 기준으로
    const basicNode=document.querySelectorAll("body > p")[2]
    //앞에 추가하기
    document.body.insertBefore(newP,basicNode)
},{once:true}); //clik이벤트가 여러번 발생해도 이벤트 리스너는 한번만 실행

