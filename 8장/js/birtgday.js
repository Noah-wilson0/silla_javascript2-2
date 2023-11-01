const result=document.querySelector("#result");
//기준 날짜(생일)
const brithday=new Date(2001,8,3);

//오늘 날짜
let today=new Date();

let presstime=today.getTime()-brithday.getTime();

let pressDay=Math.round(presstime/(1000*60*60*24));

result.innerText=pressDay;







