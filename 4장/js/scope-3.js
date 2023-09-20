// var hi="hello"; //전역변수

// function change(){
//     //함수 안에서 전역 변수 값 수정 가능 
// hi="bye"
// }


// console.log(hi) //hello

// change();  //hi 재선언됨
// console.log(hi)  //bye



var hi="hello"; //전역변수

function change(){
    //지역변수. 이 함수에서만 사용 가능
    var hi="bye"    //var이 생김
}


console.log(hi) //hello

change();  //hi 재선언됨
console.log(hi)  //hello
