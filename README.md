# silla_javascript2-2
#신라대학교 JavaScript 수업 내용


### [1.스코프](https://github.com/noah-wilson0/silla_javascript2-2/blob/main/4%EC%9E%A5/js/scope-4.js)

```javascript
const factor=5 //변수 선언 및 생성
const num=10
function calc(num){
    return num*factor //num을 찾을 수 없음 블록 스코프
}

{
    const num=10
    let result=calc(num)  
    console.log(`result : ${result}`)
}
```

``` javascript
const factor=5 
const num=10
function calc(){
    return num*factor 
}

{
    const num=10
    let result=calc()  
    console.log(`result : ${result}`)
}
```















