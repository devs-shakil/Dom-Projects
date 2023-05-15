const time = document.querySelector('.time');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
let [milisec , sec, min, hour] =[0, 0, 0, 0];
let t = null;

start.addEventListener('click', startTimer =>{
    if(t !== null){
        clearInterval(t)
    }else{
        t = setInterval(displayTime, 10)
    }
});

const displayTime = () =>{
    milisec += 10;
    if(milisec == 1000){
        milisec = 0;
        sec++
        if(sec == 60){
            sec = 0;
            min++
            if(min == 60){
                min = 0;
                hour ++
            }
        }
    }
    let h = hour < 10 ? "0" + hour : hour;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let ms = milisec < 10 ? "00" + milisec : milisec < 100 ? "0" + milisec : milisec;
    time.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}
function pauseTimer () {
    clearInterval(t)
};
pause.addEventListener('click', pauseTimer)
function resetTimer () {
    clearInterval(t);
    [milisec , sec, min, hour] =[0, 0, 0, 0];
    time.innerHTML = "00 : 00 : 00: 000"

}
reset.addEventListener('click', resetTimer)