const string=prompt("영문 소문자로 된 문자열을 입력하세요.");

//string 메서드 사용
// const firstCh=string[0].toUpperCase(); //첫번쨰 글자만 대문자로 저장
// const remainStr=string.slice(1); //두번쨰 글자부터 끝까지 추출
// const result=firstCh+remainStr;
// document.write(result);

//한번에 사용
const result=[string.toUpperCase(),...string.slice(1)].join("");
document.write(result);