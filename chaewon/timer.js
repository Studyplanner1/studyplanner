
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
let dDay = new Date("2023-12-30");
const untilDday = new Date(dDay - today);
const untilDay = String(Math.floor(untilDday/(1000 * 60* 60 * 24)));

//console.log(untilDay);

const $restDay = document.getElementById('d-day');
$restDay.innerText = `D - ${untilDay} `




//time-up구현...모르겠다..
//25분

const $btn25Min = document.querySelector('.tim25min');
console.log($btn25Min);
// $btn25Min.onclick = function restTime() {
//     const setTime= 1500;
//     let min = "";
//     let sec = "";
//     min = parseInt(setTime/60);
//     sec = setTime % 60 ; 
//     document.getElementById('restMin').innerText = `${min}분 ${sec}초`; 
//     time--; 
// }
$btn25Min.addEventListener('click',function restTime() {
        const setTime= 1500;
        let min = "";
        let sec = "";
        
       
        min = parseInt(setTime/60);
        sec = (setTime%60); 
        document.getElementById('restMin').innerText =`${min}M ${sec}S`
        setTime;
    
        if(setTime<0) {
            clearInterval(restTime);
            document.querySelector('.timRestTime').innerText = "time up!"
            
        }
    } );

//setInterval(restTime(), 1000);

// const restTime = setInterval(function() {
//     const setTime= 1500;
//     let min = "";
//     let sec = "";
    
    
//     min = parseInt(time/60);
//     sec = time % 60 ; 
//     document.getElementById('restMin').innerHTML = min+"분" +sec +"초"; 
//     time--;

//     if(time<0) {
//         clearInterval(restTime);
//         document.querySelector('.timRestTime').innerText = "time up!"
        
//     }
// }, 1000);








//5분






//1분






//LearningTime

const btnStart = document.querySelector('.LearningTimebtnStart');
const btnStop = document.querySelector('.LearningTimebtnStop');
const btnReset = document.querySelector('.LearningTimebtnReset');
const runTime = document.querySelector('.timRunning');
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
    return;
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

timer();

btnStart.onclick = timer;
btnStop.onclick = function() {
    clearTimeout(t);
}
btnReset.onclick = function() {
    runTime.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0; 

    return;
}
