//함수 밖에서 프로토 타입을 사용해 함수의 메서드를 정의함.
//프로퍼티는 함수 안에, 메서드는 프로토타입을 사용해 정의 함.

//생성자 함수
function newBook(title,page,done){
    this.title=title;
    this.page=page;
    this.done=done;
    
}
//프로토 타입으로 메서드 생성
newBook.prototype.finsh=function(){
    this.done==false?(str=='읽는중'):(str=='완독');
    return str;
}

const nBook1=new newBook("자바스크립트",650,false);
const nBook2=new newBook("자바",750,false);



