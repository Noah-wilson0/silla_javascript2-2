function displayLetter() {
  console.log("A");  //A 출력후 1초뒤...
  setTimeout( () => {  
    console.log("B");  //B출력 후 1초뒤...
    setTimeout( () => { 
      console.log("C");  //C출력 후 1초뒤...
      setTimeout( () => {
        console.log("D");  //D출력 후 1초뒤...
        setTimeout( () => {
          console.log("stop!");   //마지막으로 stop 출력
        }, 1000);
      }, 1000);
    },1000);
  }, 1000);
}   

displayLetter();