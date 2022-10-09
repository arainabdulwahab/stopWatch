let start = document.getElementById('start');
let stop = document.getElementById('stop');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

start.addEventListener("click",starts);
stop.addEventListener("click",stops);

let startTime;
function starts (){
    start.disabled = true;
    let sec =0;
    let min =0;
    let hr = 0;
    startTime = setInterval(() => {
        sec++;
        let secMod = sec < 10 ? '0' + sec : sec;
        second.innerHTML = secMod;
        if(sec === 60){
            sec =0;
            min ++;
            let minMod = min < 10 ? '0' + min : min;
            minute.innerHTML = minMod;
            if(min === 60 ){
                min =0;
                hr ++;
                let hrMod = hr < 10  ? '0' + hr : hr;
                hour.innerHTML = hrMod;
            }
        }
    }, 1000);
}
function stops(){
    clearInterval(startTime);
    start.disabled = false;
    start.innerText = "restart";
}