const $tdInputBtn = document.querySelector('.td-inputbtn'); // + 버튼
const $tdInputtext = document.querySelector('.td-inputtext'); // 입력한 할일
const $tdUl = document.querySelector('.td-list'); // 할일 목록 ul
const $contentBar = document.querySelector('.bar'); // 퍼센트 바
const $kirby = document.querySelector('.bar-inner'); // 커비
const $kirbyFood = document.querySelector('.food-inner'); // 별

document.documentElement.addEventListener('click', tdGoal);

// + 버튼 or 엔터키 입력시 할일 추가 함수 실행
$tdInputBtn.onclick = () => {
    addTodo();
}
$tdInputtext.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') addTodo(); tdGoal(); // 진행률 표시바 갱신도 같이
});

// 할일 추가
function addTodo() {
    // 할일 아무것도 입력 안했을 때 입력 요청 띄우기
    if ($tdInputtext.value === '') {
        alert('할일을 입력하세요!');
        $tdInputtext.focus();
        return;
    }
    // 할일 li 생성
    let $tdAddLi = document.createElement('li');
    $tdAddLi.setAttribute('class', 'td-list-li clearfix');

    // 할일 li에 텍스트, 클래스 추가
    let $tdAddLiText = document.createElement('span')
    $tdAddLiText.textContent = $tdInputtext.value;
    $tdAddLiText.classList.add('td-list-li-text');
    $tdAddLi.appendChild($tdAddLiText);

    // 할일 li 클릭하면 할일 완료 함수 실행
    $tdAddLi.addEventListener('click', finishTodo);

    // 우측에 수정 버튼 추가
    $tdAddLiAmendBtn = AddDelBtn($tdAddLi);

    // 우측에 삭제 버튼 추가
    $tdAddLiDelBtn = AddamendBtn($tdAddLi);

    // 완성된 li 태그를 ul 끝에 추가
    $tdUl.appendChild($tdAddLi);

    // input에 적힌 내용 지우기
    $tdInputtext.value = '';
}

// 삭제 버튼 추가 및 클릭
function AddamendBtn ($tdAddLi) {
    let $tdAddLiDelBtn = document.createElement('button');
    $tdAddLiDelBtn.classList.add('td-list-del-btn');
    $tdAddLiDelBtn.innerHTML = '<i class="fa-solid fa-x"></i>'; // X 아이콘
    $tdAddLi.appendChild($tdAddLiDelBtn);
    $tdAddLiDelBtn.addEventListener('click', deleteTodo);
}

// 수정 버튼 추가 및 클릭
function AddDelBtn ($tdAddLi) {
    let $tdAddLiAmendBtn = document.createElement('button');
    $tdAddLiAmendBtn.classList.add('td-list-amend-btn');
    $tdAddLiAmendBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'; // 펜 아이콘
    $tdAddLi.appendChild($tdAddLiAmendBtn);
    $tdAddLiAmendBtn.addEventListener('click', amendTodo);   
}

// 개별 할일 삭제
function deleteTodo(e) {
    let $tdDeleteLi = e.target.closest('li');
    $tdDeleteLi.remove();
}

// 개별 할일 수정
// 수정 또는 완료 전 할일
const BEFORE_LIST = 'td-list-li-text';
const AFTER_AMEND = 'td-list-li-text td-amend-input';

function amendTodo(e) {
    const $tdTargetLi = e.target.closest('li'); // 수정 타겟 li
    const $tdTargetLiChildClass = e.target.closest('li').firstElementChild.className;
    if ($tdTargetLiChildClass === BEFORE_LIST) {
        // 수정 전 펜 버튼 클릭시
        $tdAmendLi = $tdTargetLi.firstElementChild; // span 태그
        $tdAmendInput = document.createElement('input');
        $tdAmendInput.setAttribute('type', 'text');
        $tdAmendInput.setAttribute('class', AFTER_AMEND);
        $tdAmendInput.value = $tdAmendLi.textContent;
        $tdTargetLi.replaceChild($tdAmendInput, $tdAmendLi);
        $tdAmendInput.focus();
    } else if ($tdTargetLiChildClass === AFTER_AMEND) {
        // 수정 후 펜 버튼 클릭시
        $tdAmendLi.textContent = $tdAmendInput.value;
        $tdTargetLi.replaceChild($tdAmendLi, $tdAmendInput);
        $tdAmendInput.remove();
    }
}

// 할일 완료
const AFTER_FINISH = 'td-list-li-text finish-todo';
const LI_BEFORE_FINISH = 'td-list-li clearfix';
const LI_AFTER_FINISH = 'td-list-li clearfix li-finish-todo';

function finishTodo(e) {
    $tdFinishTarget = e.target;
    if ($tdFinishTarget.className === BEFORE_LIST) {
        // 취소선 그은 후에는 span 태그에 finish-todo 클래스 추가 + 맨 밑으로
        $tdFinishTarget.setAttribute('class', AFTER_FINISH);
        $tdFinishTarget.style.textDecoration = 'line-through';
        $tdFinishTarget.parentElement.setAttribute('class', LI_AFTER_FINISH);
    } else if ($tdFinishTarget.className === AFTER_FINISH) {
        // 취소선 그은 후 다시 클릭하면 finish-todo 클래스 삭제 + 맨 위로
        $tdFinishTarget.setAttribute('class', BEFORE_LIST);
        $tdFinishTarget.style.textDecoration = 'none'
        $tdFinishTarget.parentElement.setAttribute('class', LI_BEFORE_FINISH);
    }
}

// 진행률 표시 바
function tdGoal() {
    let $tdLi = [...document.querySelectorAll('.td-list-li')]; // 할일 목록 li 배열
    let $tdLiFinish = [...document.querySelectorAll('.li-finish-todo')]; // 완료된 할일 목록 li 배열
    let finishPercent = ($tdLiFinish.length/$tdLi.length)*100;
    if ($tdLi.length !== 0){
        $contentBar.style.width = finishPercent + '%';
        $kirby.attributes.src.nodeValue = '/final/source/Kirby.gif';
        $kirby.style.width = '55px';
    }
    if (finishPercent === 0 || $tdLi.length == 0) {
        $contentBar.style.width = '0%';
        $kirby.attributes.src.nodeValue = '/final/source/Kirby-zzz.gif';
        $kirby.style.width = '65px';
    }
    if (finishPercent === 100) {
        $kirby.attributes.src.nodeValue = '/final/source/Kirby-eat.gif';
        $kirby.style.width = '90px';
        $kirbyFood.classList.add('eated');
    } else {
        $kirbyFood.classList.remove('eated');
    }
}

// 모든 할일 삭제
const $tdDelBtn = document.querySelector('.td-del-btn'); // 모두 삭제 버튼 취득

$tdDelBtn.onclick = () => {
    // 삭제 의사 한번 더 확인
    if (confirm("모든 일정을 삭제하시겠습니까?") === true) {
        $tdUl.innerHTML = '';
    } else {
        return;
    }
}