let generateToastmsg = null;

window.onload = () =>{
    main();
}
//main function start



function main(){
   const root = document.querySelector('#root');
   const changeBtn = document.querySelector('#change-btn');
   const output = document.querySelector('#output');
   const copyBtn = document.querySelector('#copy-btn');



   changeBtn.addEventListener('click', function(){
       const bgColor = HexCodeColor();
       root.style.backgroundColor = bgColor;
        output.value = bgColor;
      
   })
   copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(output.value);

        if(generateToastmsg != null){
            generateToastmsg.remove()
            generateToastmsg = null;
        }

        generateToastMessage(`${output.value} copied`);
        
       
   })
   
}
// main function end

//toast message function start 
function generateToastMessage(msg){
    generateToastmsg = document.createElement('div');
    generateToastmsg.innerText = msg;
    generateToastmsg.className = 'toast-msg toast-message-slide-in';

    generateToastmsg.addEventListener('click', function(){
        generateToastmsg.classList.remove('toast-message-slide-in');
        generateToastmsg.classList.add('toast-message-slide-out');

        generateToastmsg.addEventListener('animationend', function(){
            generateToastmsg.remove()
            generateToastmsg = null;
        }) 
    })
   

    document.body.appendChild(generateToastmsg)
}



// Hex color function start
function HexCodeColor(){
    //rgb(0,0,0), rgb(255,255,255)

    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return(
        `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    ) 
}
HexCodeColor();

