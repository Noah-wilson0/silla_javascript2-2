const quote=document.querySelector(".quote");
const author=document.querySelector(".author");

fetch("https://dummyjson.com/quotes")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // 성공적으로 데이터를 얻어와서 처리
    // console.log(data.quotes.legth);
    let ranNum=Math.floor(Math.random()*data.quotes.length);
    // let ranNum=Math.floor(Math.random() * 45) + 1;
    console.log(data.quotes[1].quote);
    console.log(ranNum);
    quote.innerText=`${data.quotes[ranNum].quote}`
    author.innerText=`${data.quotes[ranNum].author}`
  })
  .catch(error => {
    // 오류 발생 시 처리
    console.error('Fetch error:', error);
  });
