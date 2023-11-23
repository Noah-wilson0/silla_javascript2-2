// let number=document.querySelector("#user-number").value;  
//먼저 가져오면 입력했을때의 value를 가져오는게 아니고 
//입력전 value를 가져온다.
let number=document.querySelector("#user-number");
let btn=document.querySelector("button");



btn.addEventListener("click",()=>{
    let n=number.value;
    let result=document.querySelector("#result");
    try {
        if(isNaN(n)){
            throw new Error("숫자를 입력하세요.");
        }
        if(n>10){
            alert(`${n}보다 작은 수를 입력하세요.`);
        }
        result.innerHTML=`${n}`;

    } catch (error) {
        alert(error);
    }finally{
        number.value="";
    
    }


});