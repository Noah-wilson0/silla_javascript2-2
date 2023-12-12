const result=document.querySelector("#result");
const button=document.querySelector("button");
let set=new Set();


button.addEventListener("click",()=>{
    while(set.size<6){
        let ranNum=Math.floor(Math.random() * 45) + 1;
        set.add(ranNum);
        // console.log(ranNum)
    }
    console.log([...set])
    // Set을 배열로 변환
    // const resultArray = Array.from(set);
    // 결과를 출력
    // result.innerText = resultArray.join(', ');
    result.innerHTML=`
        ${
            [...set]
            .map(s=>s).join(", ")
        }
    `;
});


