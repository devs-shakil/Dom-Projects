const lengthSlider = document.querySelector(".pass-length input"),
options = document.querySelectorAll(".option input"),
passwordInput = document.querySelector('.input-box input'),
passIndicator = document.querySelector('.pass-indicator'),
contentCopy = document.querySelector('.input-box span')
generateBtn = document.querySelector('.generator-btn');
 


const characters ={
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    symbols:"!@#$%^&*?><+_-[]{}()",
    numbers: "0123456789"
}
const generatePassword = () =>{
    let staticPaaword ="",
    randomPassword ="",
    excludeDuplicate = false,
    passLength = lengthSlider.value;

    options.forEach(option => { //looping through each option
        if(option.checked){ //if checkbox is check
            if(option.id !== "exc-duplicate" && option.id !== "spaces"){
                //if checkbox id isn't exc-duplicate && spaces
                staticPaaword += characters[option.id]
            }else if(option.id === "spaces"){ //if checkbox is spaces
                staticPaaword += ` ${staticPaaword} `; //adding space at start and ending staticpassword

            }else{//else pass true to excludeDuplicate
                excludeDuplicate = true;
            }           
        }
    });
    for(let i = 0; i < passLength; i++){
        //getting ramdom password from the static password
       let randomChar =  staticPaaword[Math.floor(Math.random() * staticPaaword.length)]
        if(excludeDuplicate){//if excludeDuplicate is true
            //if randomPassword doesn't includes the current random or randomChar is equal to
            //to  spaces "" then add random charecter to randomPassword else decrement i by -1;

            !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
        }else{ // else add random character to randompassword
            randomPassword += randomChar;
        }
       
    }
    passwordInput.value = randomPassword;// adding display by random password
};

const updatePassIndicator = () =>{
    //if lengthSlider.value is <= 8 then pass id  is "weak" , then .....
    passIndicator.id = lengthSlider.value <= 8 ? "weak" : lengthSlider.value <= 16 ? "medium" : "strong";


}


const updateSlider = () =>{
    //passing slider value as counter text
    document.querySelector(".pass-length span").innerText = lengthSlider.value;
    generatePassword();
    updatePassIndicator();
};

updateSlider();

const copyPassword = () =>{
    navigator.clipboard.writeText(passwordInput.value);//copying random password
    contentCopy.innerText ="check" // changing copy icon to click
    setTimeout(() =>{// after 1500ms changing icon back to copy
        contentCopy.innerText = "content_copy"
    },1500);
}

contentCopy.addEventListener('click', copyPassword);
lengthSlider.addEventListener('input', updateSlider);
generateBtn.addEventListener('click', generatePassword);

// console.log(generateBtn);
// console.log(options)
// console.log(passIndicator)
console.log(contentCopy)

