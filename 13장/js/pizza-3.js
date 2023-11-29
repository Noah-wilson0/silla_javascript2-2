// 제작 코드
const pizza = () => {
    return new Promise((resolve, reject) => {
      resolve("피자를 주문합니다.");
    });
  };
  
  // 소비 코드
  const step1 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("피자 도우 준비");
      }, 3000);
    });
  };
  
  const step2 = (message) => {
      console.log(message);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("토핑 완료");
        }, 3000);
      });
  };
  
    const step3 = (message) => {
      console.log(message);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("굽기 완료");
        }, 3000);
      });
  };
  //밑의 then이 연결되어 있으므로 세미콜론 x
  pizza()
      .then((result) => step1(result)) // pizza()가 성공하면 step1() 실행
      .then((result) => step2(result)) // step1()이 성공하면 step2() 실행
      .then((result) => step3(result)) // step2()이 성공하면 step3() 실행
      .then((result) => console.log(result)) // step3()이 성공하면 "굽기 완료" 표시
      .then(() => {console.log('피자가 준비되었습니다. 🍕🍕');
      });
  