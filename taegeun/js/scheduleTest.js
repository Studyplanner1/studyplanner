const date = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


/*
const renderCalender = () => {
    const viewMonth = date.getMonth()+1;
    const viewYear = date.toDateString();

    //현재 년,월 표기
    const $month = document.getElementById('CD_currentMonth');
    const $year = document.getElementById('CD_currentYear');
    $month.textContent = monthNames[viewMonth-1];
    $month.style.fontWeight = 'bold';
    $year.textContent = viewYear;

    //일 표기
    const $monthDays = document.querySelector('.CD_days');
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const nextDays = 7 - lastDayIndex - 1;

    let days = "";

    //이전 달
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="CD_prevDate">
        ${prevLastDay-x+1}</div>`;
    }

    //현재 달
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }
    //다음 달
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="CD_nextDate">${j}</div>`;
        $monthDays.innerHTML = days;
    }
}

const $prev = document.querySelector('.prev');
$prev.addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalender();
})
const $next = document.querySelector('.next');
$next.addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalender();
});

renderCalender();
*/