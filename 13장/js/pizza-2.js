
const pizza = () => {
    return new Promise((resolve, reject) => {
      resolve("피자를 주문합니다.");
    });
  };
  

  const step1 = (message) => {  //message에는 "피자를 주문합니다."가 담겨있다.
    console.log(message);

  };
  
  
  pizza().then((result) => step1(result)); // pizza()가 성공하면 step1() 실행

  