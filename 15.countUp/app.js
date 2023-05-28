const counters = document.querySelectorAll('.counter');

counters.forEach((counter) =>{
    counter.innerHTML = 0;

    const updateCounter = () =>{
        const target = +counter.dataset.target;
        const count = +counter.innerHTML;
        const increment = target / 200;
        if(count < target){
            counter.innerHTML = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 10);
        }else{
            counter.innerHTML = target;
        }
    }
    updateCounter()
})