const year=document.querySelector("#year");
const month=document.querySelector("#month");
const date=document.querySelector("#date");

const bttn=document.querySelector("#bttn");

const result=document.querySelector("#result");

bttn.addEventListener("click",()=>{
    const birthday=new Date(year.value,month.value,date.value);
    console.log(birthday);
    const today=new Date();
    const pressTime=today.getTime()-birthday.getTime();
    result.innerHTML=`
    ${today.getFullYear()}년${today.getMonth()}월${today.getDate()}일
    ${today.getHours()}시${today.getMinutes()}분 현재 <br>
    날짜로는 ${Math.round(pressTime/(1000*60*60*24))}이 흐르고,<br>
    시간으로는 ${Math.round(pressTime/(1000*60*60))}시간이 흘렀습니다.
    
    `;

})







