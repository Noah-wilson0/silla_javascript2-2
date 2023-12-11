const origin=document.querySelector("#origin");
const result=document.querySelector("#result");
let numbers=[2, 4, 6, 8, 10];

function tail(numbers){
    if(numbers.length>1){
        let number=numbers.slice(1);
        return number;
    }
    else if(numbers.length==1){
        return numbers;
    }
}

origin.innerText=numbers;
result.innerText=tail(numbers);






