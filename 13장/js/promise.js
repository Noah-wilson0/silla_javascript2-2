// Promise 객체 만들기 (제작 코드)
// let likePizza = true;
let likePizza = false;
const pizza = new Promise((resolve, reject) => {
    if(likePizza) {  //true일때 
        resolve('피자를 주문합니다.');
    }
    else {  //false일때
        reject('피자를 주문하지 않습니다.');
    }
});

// Promise 객체 사용하기 (소비코드)
pizza 
    .then(
        result => console.log(result) // Promise가 허용되어 resolve가 result객체에 담겨서 출력된다.
    )   // true일때 실행 결과 : '피자를 주문합니다.'
    .catch(
        err => console.log(err)  // Promise가 거부 되어 reject이 err객체에 담겨서 출력 된다.
    )  //false일때 실행 결과 : '피자를 주문하지 않습니다.'
    .finally(
        () => console.log('완료')  //finally는 Promise가 허용되든 안되든 무조건 실행
    );

