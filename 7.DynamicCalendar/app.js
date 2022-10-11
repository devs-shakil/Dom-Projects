const currentDate = document.querySelector('.current-date'),
daysTag = document.querySelector('.days'),
nextPrevIcon = document.querySelectorAll('.icons span');

//getting newDate, current Year, Current Month.
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January","February", "March", "April", "May",  "June","July","August", "September","October","November", "December"];

const renderCalendar = () =>{
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(),//getting first Day of month;
    lastDayOfMonth = new Date(currYear,currMonth,0).getDay(),//getting lastDay of month;
    lastDateOfMonth = new Date(currYear,currMonth + 1, 0).getDate(),//getting lastDate of month;
    lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();//getting last Date of last Month;

    let liTag = "";
    for(let i = firstDayOfMonth; i > 0; i--){
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }
  
    for(let i = 1; i<=lastDateOfMonth; i++){
        let isToday = i ===date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active": "";//adding acitve class to li if the current Day, Month, and year is matiched
       liTag += `<li class="${isToday}">${i}</li>`;
    }
    for(let i= lastDayOfMonth; i<6; i++){
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`//getMonth() return the month (0-11 ) of a date array
   daysTag.innerHTML = liTag;
}
renderCalendar()

nextPrevIcon.forEach(icon =>{
    icon.addEventListener('click', () =>{
        //if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth-1 : currMonth +1;

        if(currMonth < 0 || currMonth > 11){//if current month is less then 0 or greater then 11 then creating  a new date of current year and  month pass it as date value
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();// updating current year with new date year
            currMonth = date.getMonth();// updating current month with new date month 
        }else{// else pass new date as date value;
            date = new Date();
        }

        renderCalendar()
    })
})

// console.log(date,currMonth,currYear)

// console.log(currentDate.innerHTML(currMonth));