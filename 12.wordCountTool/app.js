const textArea = document.querySelector('#text-area');
const character = document.querySelector('.character');
const word = document.querySelector('.words');
const wordLeft = document.querySelector('.wordLeft');
const readTime = document.querySelector('.readTime');
const word_limit = 10;

//countCharacter
const countCharacter = () =>{
    character.innerHTML = textArea.value.length;
}
textArea.addEventListener('keyup', countCharacter)

//countWord
const countWords = () =>{
  let words = textArea.value.match(/[\w\d\’\'-]+/gi);
  if(words){
      word.innerHTML = words.length;
      wordLeft.innerHTML = word_limit - words.length;
  }else{
      word.innerHTML = 0;
  }

  if(words){
      let sec = Math.floor((words.length * 60) / 225);
      if(sec > 59){
          let min = Math.floor(sec / 60);
          sec = sec - min * 60;
          readTime.innerHTML = `${min} Minute ${sec} Seconds`
      }else{
          readTime.innerHTML = sec + " Seconds"
      }
  }else{
      readTime.innerHTML = "0 Second"
  }
}
textArea.addEventListener('keyup',countWords);