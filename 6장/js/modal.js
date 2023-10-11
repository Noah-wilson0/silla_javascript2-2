const open=document.querySelector("#open")
const modalbox=document.querySelector("#modal-box")
const close=document.querySelector("#close");

// open.onclick=()=>{
//     modalbox.classList.toggle("active");
// }


open.addEventListener("click",()=>{
    modalbox.classList.toggle("active");
});

//이 방법 사용시 1회성임
close.addEventListener("click",()=>{
    modalbox.classList.toggle("close"); 
});

close.addEventListener("click",()=>{
    modalbox.classList.remove("active"); 
});