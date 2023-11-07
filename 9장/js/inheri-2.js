//클래스 생성
class BookC{
    //프로퍼티 생성.
    constructor(title,price){
        this.title=title;
        this.price=price;
    }
    //메서드
    buy(){
        console.log(`${this.title}을 ${this.price}원에 구매했습니다.`);
    }

}
//객체 생성
const book1=new BookC("자바 스크립트",25000);
book1.buy();

//기존 클래스를 확장하여(상속 받아) 새로운 클래스 선언
class TextbookC extends BookC{
    constructor(title,price,major){
        super(title,price); //상위 클래스의 재사용.
        this.major=major;

    }
    //새로운 메서드 정의
    buyTextbook(){
        console.log(`${this.major}을 ${this.price}원에 구매했습니다.`);
    }
}
//객체 생성
const book2=new TextbookC("자바스크립트",23000,"컴퓨터 공학");
book2.buyTextbook();
book2.buy();
