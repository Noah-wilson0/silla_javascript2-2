const seed=document.querySelector("#seed");
const total=document.querySelector("#total");
const raffle=document.querySelector("#raffle");
const clear=document.querySelector("#clear");
const result=document.querySelector("#result");




raffle.addEventListener("click",(e)=>{
    e.preventDefault();
    let people="";
    for (let i = 0; i< total.value; i++) {
        let number=Math.round(Math.random()*seed.value+1);
        if(i<total.value-1){
        people+=number+"번 ,";
        }
        else{
            people+=number+"번";
        }
    }
    console.log(people);
    result.innerHTML=people;
    result.classList.add("show"); // 결과를 보여주기 위해 클래스 추가
});
clear.addEventListener("click",()=>{
    seed.value="";
    total.value="";
    // result.innerHTML="";
       // result의 부모 노드(container)에서 result 제거
       result.parentNode.removeChild(result);
});
