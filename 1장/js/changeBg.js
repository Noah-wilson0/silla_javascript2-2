function random(numebr){
    return Math.floor(Math.random()*numebr);
}

function bgChange(){ 
    const rndCol= 'rgb('+random(255)+','+random(255)+','+random(255)+')';
    document.body.style.backgroundColor=rndCol;

}
bgChange(); //함수 호출