function showData(name, age){
    alert(`안녕하세요? ${name}님, 나이가${age}살 이군요.`)
}

function getData(callback){
    let userName=prompt("이름을 입력하세요.")
    let userAge=prompt("나이를 입력하세요.")
    callback(userName,userAge);
}



getData(showData)

/*
getData 함수에서 userName와 userAge를 받아오고 
callback함수를 이용해서 인수를 넘기고
그 값으로 showData를 실행한다.
*/

