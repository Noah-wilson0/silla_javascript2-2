async function whatsYourFavorite() {
    let fav = "Javascript";
    return fav;
  }
  
  async function displaySubject(subject) {
     return `Hello, ${subject}`;  //이렇게해도 prmise를 반환함
  }
  
  whatsYourFavorite()
    .then(displaySubject)
    .then(console.log);
  