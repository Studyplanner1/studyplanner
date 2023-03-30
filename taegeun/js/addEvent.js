const $addEventBtn = document.querySelector('.CD_add-event');
const $addEventContainer = document.querySelector('.CD_add-event-wrapper');
const $addEventCloseBtn = document.querySelector('.close');
const $boxLeft =document.querySelector('.CD_boxLeft');
const $addEventTitle =document.querySelector('.event-name');
const $addEventFrom =document.querySelector('.event-time-from');
const $addEventTo =document.querySelector('.event-time-to');




$addEventBtn.addEventListener("click",()=>{
    $boxLeft.classList.toggle('black');
    // black 수정해야됨 z-index
    $addEventContainer.classList.toggle('active');
});
$addEventCloseBtn.addEventListener("click",()=>{
    $addEventContainer.classList.remove('active');
});

document.addEventListener("click", (e)=>{
    if(e.target !== $addEventBtn && !$addEventContainer.contains(e.target)){
        $addEventContainer.classList.remove('active');
    }
})

//입력 양식
//시작 시간
$addEventFrom.addEventListener("input",(e)=>{
    $addEventFrom.value = $addEventFrom.value.replace(/[^0-9:]/g,"");
    if($addEventFrom.value.length ===2){
        $addEventFrom.value += ":";
    }
    if($addEventFrom.value.length > 5){
        $addEventFrom.value = $addEventFrom.value.slice(0,5);
    }
});

//끝 시간
$addEventTo.addEventListener("input",(e)=>{
    $addEventTo.value = $addEventTo.value.replace(/[^0-9:]/g,"");
    if($addEventTo.value.length ===2){
        $addEventTo.value += ":";
    }
    if($addEventTo.value.length > 5){
        $addEventTo.value = $addEventTo.value.slice(0,5);
    }
});