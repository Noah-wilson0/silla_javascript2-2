//방법1
fetch("https://dummyjson.com/quotes")
.then(Response=>Response.json())
.then(console.log)
.catch(err=>console.log(err));
//방법2
// fetch("https://dummyjson.com/quotes")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // 성공적으로 데이터를 얻어와서 처리
//     console.log(data);
//   })
//   .catch(error => {
//     // 오류 발생 시 처리
//     console.error('Fetch error:', error);
//   });

