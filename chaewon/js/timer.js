
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

    clock.innerText = `${year}년${month}월${date}일 
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
    
    if(until === "0") {
        $restDay.innerText =`D-DAY`
    } else if(until <= "0") {
        $restDay.innerText =`D-DAY 가 지났습니다`
    }
    else {
         $restDay.innerText = `D - ${until} `
    }
   
    
}

const $settingIcon = document.getElementById('timsettingIcon');
console.log($settingIcon);
$settingIcon.onclick = function (){
    $dday.classList.toggle('displayBlock');
   $ddaybtn.classList.toggle('displayBlock');
}


//time-out
//25분

const tim5min = document.querySelector('.tim5min');
const tim25min = document.querySelector('.tim25min');
const tim1min = document.querySelector('.tim1min');
const $restTime = document.querySelector('.restTime');
const $timeUp = document.querySelector('timeUp');
let sec = 60;
let min = 0;
let tim;

//console.log(tim25min);

function timeout() {
    sec--;
    if(sec < 0) {
        min--;
        if(min < 0 ){
            min = 0;
            sec= 0;
           
           // 

            return;
        }
    } 
   
}

function sub() {
    timeout();
    $restTime.textContent = (min > 9 ? min : "0" + min) 
                            +" : "+ (sec> 9 ? sec : "0" + sec);
    time();

}

let Flag =  false; 
function time() {
   if(!Flag) tim = setInterval(sub, 1000);

   Flag=true;

    return;
}

tim25min.onclick = function() {
    sec = 60;
    min= 24;
    time();

}   

//5분
tim5min.onclick= function() {
    sec = 60;
    min = 4;
    time();
    

} 

//1분
tim1min.onclick = function() {
    sec = 10;
    min = 0;
    time();
   
    
}



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
    return;
}

function add(){
    
    second();
    runTime.textContent = (hours > 9 ? hours : "0" + hours) 
                        +":"+ (minutes > 9 ? minutes : "0" + minutes) 
                        +":"+ (seconds > 9 ? seconds : "0" + seconds);
     
    timer();
    return;

}
let startFlag =  false; 
function timer() {
    
    if(!startFlag) t = setInterval(add, 1000);
    
    startFlag = true;
    return;
}

btnStart.onclick = timer;
btnStop.onclick = function() {
    clearTimeout(t);
    timRecord.textContent = runTime.textContent;   
    // $saving.classList.toggle('savingToCD');
    startFlag= false;
}
btnReset.onclick = function() {
    clearTimeout(t);
    runTime.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0; 
    timRecord.textContent="";
    startFlag= false;
    // $saving.classList.toggle('savingToCD');
    
}







import * as tutorial from './tutorial.js';


// tutorial
let clickFlag = false; 

tutorial.$wrap.addEventListener('click', function(e) {
   
    tutorial.$wrap.setAttribute('class', 'invisible');
    
        clickFlag = !clickFlag;
 });

tutorial.$tutorial3.addEventListener('click', function(e) {
    
    tutorial.$tutorial3.setAttribute('class', 'invisible');
    tutorial.$tutorial2.classList.toggle('invisible');
         clickFlag = !clickFlag;
         e.stopPropagation();
  });


 
 tutorial.$tutorial2.addEventListener('click', function(e) {
    
    tutorial.$tutorial2.setAttribute('class', 'invisible');
    tutorial.$tutorial1.classList.toggle('invisible');
     
         clickFlag = !clickFlag;
         e.stopPropagation();
  });
 

 tutorial.$tutorial1.addEventListener('click', function(e) {
    
    tutorial.$tutorial1.setAttribute('class', 'invisible');
     
         clickFlag = !clickFlag;
        //  e.stopPropagation();
  });
 
 