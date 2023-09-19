const numbers=[1,3,4,6,8,11,12,23,34]

//반복문 for로 배열에서 10보다 큰 값 출력하기
document.write("for<br>")
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>10){
        document.write(`${numbers[i]},`)
    }
}
document.write(`<br>`)
//반복문 forEach로 배열에서 10보다 큰 값 출력하기
document.write("forEach<br>")
numbers.forEach(function(num){
        if(num>10){
        document.write(`${num},`)
    }
})


document.write(`<br>`)
//반복문 for .. of로 배열에서 10보다 큰 값 출력하기
document.write("for..of<br>")
for(num of numbers){
    if(num>10){
        document.write(` ${num}, `)
    }
}

