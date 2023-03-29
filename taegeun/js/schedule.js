const $calendar = document.querySelector('.CD_mainCalendar');
const $dateMonth = document.querySelector('.CD_currentMonth');
const $dateYear = document.querySelector('.CD_currentYear');
const $daysContainer = document.querySelector('.CD_days');
const $prev = document.querySelector('.prev');
const $next = document.querySelector('.next');
const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const MONTHNAMES = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
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

    //이전달 렌더링
    for (let x = day; x > 0; x--) {
        days += `<div class="CD_day prev-date">${prevDays-x+1}</div>`;
    }

    //이번달 렌더링
    for (let i = 1; i <= lastDate; i++) {
        if (i === new Date().getDate() &&
            year === new Date().getFullYear() &&
            month === new Date().getMonth()) {
            days += `<div class="CD_day today">${i}</div>`;
        } else {
            days += `<div class="CD_day">${i}</div>`;
        }
    }

    //다음달 렌더링
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="CD_day next-date">${j}</div>`;
    }
    $daysContainer.innerHTML = days;


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