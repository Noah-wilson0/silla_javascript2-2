function whatsYourFavorite() {
    let fav = "Javascript";
    
    // resolve 일때 Javascript를 반환
    return new Promise((resolve, reject) => resolve(fav));
  }
  
  function displaySubject(subject) {
      // resolve 일때 whatsYourFavorite()함수의 결과를 받아서 Hello와 함께 프로미스 반환
                                             // ↓ Javascript
    return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));  //Promise는 `Hello, Javascript`로 바뀜
  }
  
  whatsYourFavorite()
    .then(response => displaySubject(response))  //뒤에 then이 연결되어 있으므로 세미콜론 x
    .then(result => console.log(result));
  