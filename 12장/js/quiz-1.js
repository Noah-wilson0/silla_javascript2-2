let xhr=new XMLHttpRequest();
// let url="reqres.in/api/products/10";
xhr.open("GET","http://reqres.in/api/products/10");  //http://뒤에 붙여야함
// xhr.open("GET",url);
xhr.send();
// xhr.onreadystatechange= function(){
//     if(xhr.readyState==4 && xhr.status==200){
//         let productInfo=JSON.parse(xhr.responseText);
//         // console.log(xhr.responseText);
//         document.querySelector("#result").innerText=`
//         상품명:${productInfo.data.name}생산년도:${productInfo.data.year}
//         `;

//     }
xhr.onreadystatechange= function(){
    if(xhr.readyState==4 && xhr.status==200){
        let productInfo=JSON.parse(xhr.responseText);
        // console.log(xhr.responseText);
        document.querySelector("#result").innerHTML=`
        <p>상품명:${productInfo.data.name}</p>
        <p>생산년도:${productInfo.data.year}</p>
        `;

    }

}







