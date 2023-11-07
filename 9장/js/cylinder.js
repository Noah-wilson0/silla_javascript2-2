// //생성자 함수 만들기
// function Cylinder(CylinderDiameter,cylinderHeight){
//     this.diameter=CylinderDiameter;
//     this.height=cylinderHeight;
//     //부피 계산 메서드
//     this.volume=function(){
//         //부피 계산 = 반지름*반지름*PI*높이
//         let radius=this.diameter/2;
//         return (Math.PI*radius*radius*this.height).toFixed(2);
//     }
// }
const btn=document.querySelector("button");
const result=document.querySelector("#result");
//버튼을 누르면 입력한 지금과 높이를 가지고 생성자 호출
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    //지름값 가져오기
    const diameter=document.querySelector("#cyl-diameter").value;
    //높이 값 가져오기
    const height=document.querySelector("#cyl-height").value;
    //빈칸인지 아닌지 체크
    if(diameter===""|| height===""){
        result.innerText=`지름값과 높잇값을 입력하세요`;
    }
    
    else{
        //객체 생성
        let cylinder=new Cylinder(parseInt(diameter),parseInt(height));
        //계산 결과 result에 표시
        result.innerText=`원기둥의 부피는 ${cylinder.volume()}입니다.`;
    }
});

//클래스 만들기
class Cylinder{
    constructor(CylinderDiameter,cylinderHeight){
        this.diameter=CylinderDiameter;
        this.height=cylinderHeight;
    }
        //부피 계산 메서드
    volume=function(){
        //부피 계산 = 반지름*반지름*PI*높이
        let radius=this.diameter/2;
        return (Math.PI*radius*radius*this.height).toFixed(2);
    };
}