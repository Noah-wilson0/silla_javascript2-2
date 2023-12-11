const h1=document.querySelector("#container>h1");
const origin=document.querySelector("#origin");
const result=document.querySelector("#result");
// console.log(h1.innerText.match(/\[([^\]]+)\]/)); // 주어진 배열 : [2, 4, 6, 8, 10]
console.log(h1.innerText.match(/[\d]+/));
console.log("실험:");
let inputString=h1.innerText;
const matchArray = inputString.match(/\[(.*)\]/);
console.log(matchArray);
console.log(matchArray[1]);
console.log("실험:");
// const arrayString = h1.innerText.match(/\[([^\]]+)\]/)[1];
// const numberArray = arrayString.split(', ');
// console.log(numberArray);


//문자열로 추출하는 방법
console.log(h1.innerText.indexOf("]")) //7,24
console.log(h1.innerText.slice(10,24));//2, 4, 6, 8, 10
let string=h1.innerText.slice(10,24);//2, 4, 6, 8, 10
console.log(string.split(", ")); //(5) ['2', '4', '6', '8', '10']
let array=string.split(", "); //(5) ['2', '4', '6', '8', '10']
// 배열에서 테이블 생성

// HTML에서 <table>, <td>, 그리고 <tr>은 표를 만들 때 사용되는 요소들입니다.
// <table>: 표의 전체를 감싸는 요소로, 표의 시작과 끝을 나타냅니다.
// <tr>: 표의 행을 나타내는 요소로, <table> 안에 포함되어 각각의 행을 정의합니다.
// <td>: 표의 데이터(셀)를 나타내는 요소로, <tr> 안에 포함되어 각 행의 셀을 정의합니다.
let tableHTML1 = '<table>';
for (let i = 0; i < array.length; i++) {
  tableHTML1 += `<td>${array[i]}</td>`;
}
tableHTML1 += '</table>';

// HTML에 테이블 추가
origin.innerHTML = tableHTML1;
// origin.innerHTML = `<table>${array.map(value => `<td>${value}</td>`).join('')}</table>`;

//합 구하기
let total=0;;
for(let i=0;i<array.length;i++){
    total+=parseInt(array[i]);
}
array.push(total);
console.log(total); //30
let tableHTML2 = '<table>';
for (let i = 0; i < array.length; i++) {
  tableHTML2 += `<td>${array[i]}</td>`;
}
tableHTML2 += '</table>';

// HTML에 테이블 추가
result.innerHTML = tableHTML2;
