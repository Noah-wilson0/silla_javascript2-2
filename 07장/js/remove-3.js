//모든 span항목 가져오기
const spans=document.querySelectorAll("p > span");
// 항목 중에서 하나를 선택하여 클릭하면
for(let span of spans){
    //해당 요소가 있는 내용 삭제
    span.addEventListener("click",function(){
        //해당 요소가 있는 내용 삭제
        //x를 누르면 x와 내용이 모두 삭제되어야 함
        //span항목을 클릭하면 부모노드인 p삭제
        this.parentNode.remove(this);
    });

}