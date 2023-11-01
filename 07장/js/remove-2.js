//리스트를 클릭하면 리스트 내용 삭제하기
//리스트의 모든 항목을 가져온다.
const items=document.querySelectorAll("li");

for(let item of items){
    item.addEventListener("click",function(){
        //해당항목을 클릭했을떄.. 그 항목이 삭제됨.
        //remove사용
        //this.remove(this);
        //this는 이벤트가 발생한 노드를 가리킴
        //화살표 함수가 아닌 익명 함수를 사용해야 한다.(정해진 것임)
        //이유 화살표 함수에서 this는 window객체를 가리킨다.
        //부모노드에서 삭제 하는법
        this.parentNode.removeChild(this);
    });
}









