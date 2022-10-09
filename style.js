let start = document.getElementById('start');
let stop = document.getElementById('stop');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

start.addEventListener("click",starts);

function starts (){
    let counter =0;
    setInterval(() => {
        counter++;
        second.innerHTML = counter;
        if(counter === 60){
           
            counter =0;
        }
    }, 1000);
}