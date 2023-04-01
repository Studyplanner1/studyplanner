import {
    eventsArr
} from './scheduleData.js';

const $dateMonth = document.querySelector('.CD_currentMonth');
const $dateYear = document.querySelector('.CD_currentYear');
const $daysContainer = document.querySelector('.CD_days');
const $prev = document.querySelector('.prev');
const $next = document.querySelector('.next');
const MONTHNAMES = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const $evnetDay = document.querySelector('.event-day');
const $evnetsContainer = document.querySelector('.events');
const $addEventSubmit = document.querySelector('.CD_add-event-btn');
const $addEventBtn = document.querySelector('.CD_add-event');
const $addEventContainer = document.querySelector('.CD_add-event-wrapper');
const $addEventCloseBtn = document.querySelector('.close');
const $addEventTitle = document.querySelector('.event-name');
const $addEventFrom = document.querySelector('.event-time-from');
const $addEventTo = document.querySelector('.event-time-to');
const $dateInput = document.querySelector('.date-input');
const $goBtn = document.querySelector('.goto-btn');
const $clickBtn = document.querySelector('.today-btn');

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();



// 날짜 추가 함수
function initCalendar() {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    // 일 표기
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;

    //현재 월
    $dateMonth.textContent = MONTHNAMES[month];
    $dateYear.textContent = `${year}`;

    //일 렌더링    
    let days = "";

    //지난달 렌더링
    for (let x = day; x > 0; x--) {
        days += `<div class="CD_day prev-date">${prevDays-x+1}</div>`;
    }

    //이번달 렌더링
    for (let i = 1; i <= lastDate; i++) {


        let event = false;
        eventsArr.forEach(($Obj) => {
            if (
                $Obj.day === i &&
                $Obj.month === month + 1 &&
                $Obj.year === year
            ) {
                event = true;
            }
        })

        if (i === new Date().getDate() &&
            year === new Date().getFullYear() &&
            month === new Date().getMonth()) {
            // days += `<div class="CD_day today">${i}</div>`;
            activeDay = i;
            getActiveDay(i);
            updateEvents(i);

            if (event) {
                days += `<div class="CD_day today event active">${i}</div>`;
            } else {
                days += `<div class="CD_day today active">${i}</div>`;
            }
        } else {
            if (event) {
                days += `<div class="CD_day event">${i}</div>`;
            } else {
                days += `<div class="CD_day">${i}</div>`;
            }
        }
    }

    //다음달 렌더링
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="CD_day next-date">${j}</div>`;
    }
    $daysContainer.innerHTML = days;
    // addListner 초기화
    addListner();
}
initCalendar();

//이전달 클릭 이벤트 함수
function prevMonth() {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    initCalendar();
}
//다음달 클릭 이벤트 함수
function nextMonth() {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    initCalendar();
}
//이벤트 추가
$prev.addEventListener("click", prevMonth);
$next.addEventListener("click", nextMonth);
// ****end calendar****


// ****이벤트 추가****

$addEventBtn.addEventListener("click", (e) => {
    $addEventContainer.classList.toggle('active2');
    $addEventBtn.classList.toggle('btnActive');
    // $boxLeft.classList.toggle('black');
    // black 수정해야됨 z-index
});
$addEventCloseBtn.addEventListener("click", () => {
    $addEventContainer.classList.remove('active2');
});

document.addEventListener("click", (e) => {
    if (e.target !== $addEventBtn && !$addEventContainer.contains(e.target)) {
        $addEventContainer.classList.remove('active2');
        $addEventBtn.classList.remove('btnActive');
    }
})

// today 버튼 클릭 시 오늘로 돌아오기

$clickBtn.addEventListener("click", () => {
    today = new Date();
    month = today.getMonth();
    year = today.getFullYear();
    initCalendar();
    console.log(month);
});

//입력 양식
//시작 시간

$addEventFrom.addEventListener("input", (e) => {
    $addEventFrom.value = $addEventFrom.value.replace(/[^0-9:]/g, "");

    if ($addEventFrom.value.length === 2) {
        $addEventFrom.value += ":";
    }
    if ($addEventFrom.value.length > 5) {
        $addEventFrom.value = $addEventFrom.value.slice(0, 5);
    }
    //:(콜론) 지워지게 설정
    if($addEventFrom.value.length===3){
        if(e.data ===null){
            const firstInputData = $addEventFrom.value.slice(0,1);
            // const secondInputData = $addEventFrom.value.slice(1,2);
            $addEventFrom.value = `${firstInputData}`;
        }
    }
    
    
});






// 이벤트 추가 함수
function addListner() {
    const $days = document.querySelectorAll('.CD_day');
    $days.forEach((day) => {
        day.addEventListener("click", (e) => {
            // active날 가져오기
            getActiveDay(e.target.innerHTML);
            updateEvents(Number(e.target.innerHTML));
            activeDay = Number(e.target.innerHTML);

            // active 지우기
            $days.forEach((day) => {
                day.classList.remove("active");
            });
            if (e.target.classList.contains("prev-date")) {
                prevMonth();
                setTimeout(() => {
                    const $days = document.querySelectorAll(".CD_day");

                    // 이전달에 active된 것들
                    $days.forEach((day) => {
                        if (
                            !day.classList.contains("prev-date") &&
                            day.innerHTML === e.target.innerHTML
                        ) {
                            day.classList.add("active");
                        }
                    });
                }, 100);

                //다음 달에 active찾기
            } else if (e.target.classList.contains("next-date")) {
                nextMonth();
                setTimeout(() => {
                    const $days = document.querySelectorAll(".CD_day");
                    $days.forEach((day) => {
                        if (
                            !day.classList.contains("next-date") &&
                            day.innerHTML === e.target.innerHTML
                        ) {
                            day.classList.add("active");
                        }
                    });
                }, 100);
            } else {
                e.target.classList.add("active");
            }
        });
    });
}


// active day를 이벤트 추가일에 보여주는 함수
function getActiveDay(date) {
    const day = new Date(year, month, date);
    const dayName = date + " " + MONTHNAMES[month] + " " + year;
    $evnetDay.innerHTML = dayName;
}

//이벤트 업데이트 함수
function updateEvents(date) {
    let events = "";
    eventsArr.forEach((event) => {
        if (
            date === event.day &&
            month + 1 === event.month &&
            year === event.year
        ) {
            // 이벤트 추가시 박스 상세정보
            event.events.forEach((event) => {
                events += `
                <div class="event">
                <span class="addCircle"></span>
                <div class="addSchedule">
                    ${event.title}
                </div>
                <div class="event-date">
                    ${event.time}
                </div>
                <div class="event-place">
                    ${event.place}
                </div>
                </div>`;
            });
        }
    });
    if (events === "") {
        events = `<div class="no-event">
                <h3>No Events</h3>
                </div>`;
    }
    console.log(events);
    $evnetsContainer.innerHTML = events;
}


// 일정 추가 함수
// 일정 추가하기 누를 시
$addEventSubmit.addEventListener("click", () => {
    const eventTitle = $addEventTitle.value;
    const eventTimeFrom = $addEventFrom.value;
    const eventTimeTo = $addEventTo.value;
    if (eventTitle === "" || eventTimeFrom === "" || eventTimeTo === "") {
        alert("입력칸을 전부 채워주세요!");
    }
    // console.log(eventTimeFrom.length);
    // if(eventTimeFrom.indexOf(2)!==':'){
    //     eventTimeFrom.push(2)=':'
    // }
    
    const timeFromArr = eventTimeFrom.split(":");
    // const timeToArr = eventTimeTo.split(":");
    if (
        timeFromArr.length !== 2 ||
        timeFromArr[0] > 23 ||
        timeFromArr[1] > 59
        // timeToArr[0] > 23 ||
        // timeToArr[1] > 59
    ) {
        //잘못입력 시 칸 비우기
        $addEventFrom.value = '';
        alert("올바른 시간을 입력해주세요");
        return;
    }
    const timeFrom = convertTime(eventTimeFrom);
    // const timeTo = convertTime(eventTimeTo);

    const newEvent = {
        title: eventTitle,
        time: timeFrom,
        place: eventTimeTo,
    };

    let eventAdded = false;
    if (eventsArr.length > 0) {
        eventsArr.forEach((item) => {
            if (
                item.day === activeDay &&
                item.month === month + 1 &&
                item.year === year
            ) {
                item.events.push(newEvent);
                eventAdded = true;
            }
        });
    }

    if (!eventAdded) {
        eventsArr.push({
            day: activeDay,
            month: month + 1,
            year: year,
            events: [newEvent],
        });
    }

    console.log(eventsArr);
    $addEventContainer.classList.remove("active");
    $addEventTitle.value = "";
    $addEventFrom.value = "";
    $addEventTo.value = "";
    updateEvents(activeDay);
    //일정 추가하면 핑크
    const activeDayEl = document.querySelector(".CD_day.active");
    if (!activeDayEl.classList.contains("event")) {
        activeDayEl.classList.add("event");
    }
    //완료되면 창닫기
    alert('일정이 추가되었습니다.')
    $addEventContainer.classList.remove('active2');
});

function convertTime(time) {
    let timeArr = time.split(":");
    let timeHour = timeArr[0];
    let timeMin = timeArr[1];
    let timeFormat = timeHour >= 12 ? "PM" : "AM";
    timeHour = timeHour % 12 || 12;
    time = timeHour + ":" + timeMin + " " + timeFormat;
    return time;
}










//SmallCalendar
const $SMcalendar = document.querySelector('.CD_SMCalendar');
const $SMdateMonth = document.querySelector('.CD_SMcurrentMonth');
const $SMdaysContainer = document.querySelector('.CD_SMDays');
const $SMprev = document.querySelector('.SMprev');
const $SMnext = document.querySelector('.SMnext');
// let SMtoday = new Date();
// let SMactiveDay;
// let SMmonth = today.getMonth();
// let SMyear = today.getFullYear();
function SMinitCalendar() {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    // 일 표기
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;

    //현재 월
    $SMdateMonth.textContent = MONTHNAMES[month];

    //일 렌더링    
    let days = "";

    //이전달 렌더링
    for (let x = day; x > 0; x--) {
        days += `<div class="CD_SMDay SMprev-date">${prevDays-x+1}</div>`;
    }

    //이번달 렌더링
    for (let i = 1; i <= lastDate; i++) {
        if (i === new Date().getDate() &&
            year === new Date().getFullYear() &&
            month === new Date().getMonth()) {
            days += `<div class="CD_SMDay CD_SMtoday">${i}</div>`;
        } else {
            days += `<div class="CD_SMDay">${i}</div>`;
        }
    }

    //다음달 렌더링
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="CD_SMDay SMnext-date">${j}</div>`;
    }
    $SMdaysContainer.innerHTML = days;
}
SMinitCalendar();
//이전달 클릭 이벤트 함수
function SMprevMonth() {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    SMinitCalendar();
}
//다음달 클릭 이벤트 함수
function SMnextMonth() {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    SMinitCalendar();
}

//이벤트 추가
$SMprev.addEventListener("click", SMprevMonth);
$SMnext.addEventListener("click", SMnextMonth);
// export default;
