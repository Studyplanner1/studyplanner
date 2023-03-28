
//  현재시간
const clock = document.getElementById("clock");

function getClock() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth()+1;
    const date = now.getDate();
    const hour= String(now.getHours()).padStart(2,"0");
    const minutes = String(now.getMinutes()).padStart(2,"0");
    const seconds = String(now.getSeconds()).padStart(2,"0");
    //console.log(year);

    clock.innerText = `TODAY: ${year}년${month}월${date}일 
                                ${hour}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

//dday 설정
const today = new Date();
const $dday = document.getElementById('endday');
const $ddaybtn = document.getElementById('ddaybtn');

$ddaybtn.onclick = () => {
    let dDay = new Date($dday.value);
    //console.log(dDay);
    const untilDday = new Date(dDay - today);
    const until = String(Math.floor(untilDday/(1000 * 60* 60 * 24))+1);
    const $restDay = document.getElementById('d-day');
    $restDay.innerText = `D - ${until} `
}


//time-out구현...모르겠다..
//25분
let sec = 59;
let min = "";
let time;

const $tim25min = document.querySelector('.tim25min');
const $restTime = document.querySelector('.restTime');
// $tim25min.onclick = 

function sec() {
    min= 25;
    sec--;
    if(sec < 1) {
        sec = 0;
        min--;        
    }
}

function sub() {
    sec();
    $restTime =  (min > 9 ? min : "0" + min) 
                 +":"+ (sec > 9 ? sec : "0" + sec);
    time();

}
function time() {
    time = setTimeout(sub, 1000);
}

$tim25min.onclick = time;


//5분






//1분






//LearningTime

const btnStart = document.querySelector('.LearningTimebtnStart');
const btnStop = document.querySelector('.LearningTimebtnStop');
const btnReset = document.querySelector('.LearningTimebtnReset');
const runTime = document.querySelector('.timRunning');
const timRecord = document.querySelector('#timRecord');
let seconds = 0;
let minutes = 0;
let hours = 0;
let t;


function second() {
    seconds++;
    if(seconds >=60 ) {
        seconds = 0 ;
        minutes++;
        if(minutes >= 60) {
            minutes = 0 ;
            hours++;

        }
    }
    
}

function add(){
    second();
    runTime.textContent = (hours > 9 ? hours : "0" + hours) 
                        +":"+ (minutes > 9 ? minutes : "0" + minutes) 
                        +":"+ (seconds > 9 ? seconds : "0" + seconds);
    
    
    timer();

}
function timer() {
    t = setTimeout(add, 1000);
}

btnStart.onclick = timer;
btnStop.onclick = function() {
    clearTimeout(t);
    timRecord.textContent = runTime.textContent;
}
btnReset.onclick = function() {
    runTime.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0; 

    return;
}
