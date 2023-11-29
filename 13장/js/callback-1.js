function order(coffee,callback){
    console.log(`${coffee} 주문 접수`);
    setTimeout(()=>{
        callback(coffee);
    },3000);
}

function display(result){
    console.log(`${result} 준비 완료`);
}

order("아메리카노",display); //display()함수를 매개변수로 넘겨서 콜백함수로 사용
                            //여기서 display뒤에 () 안쓰는 이유: 당장 실행할게 아니라서