// [ + ] 버튼 누르면 리스트에 추가

const $tdInputBtn = document.querySelector('.td-inputbtn'); // + 버튼
const $tdInputtext = document.querySelector('.td-inputtext'); // 입력한 할일
const $tdUl = document.querySelector('.td-list'); // 할일 목록 ul
let $tdLi = [...document.querySelectorAll('.td-list-li')]; // 할일 목록 li 배열
let $tdGoalNum = document.querySelector('.goal-num');

function tdGoal() {
    if($tdLi.length === 0) {
        $tdGoalNum.textContent = '0';
    } else if($tdLi.length === 1) {
        $tdGoalNum.textContent = '1';
    }
}

// + 버튼 클릭 or 엔터키 입력시 할일 추가 함수 실행
$tdInputBtn.onclick = () => {
    addTodo();
}

$tdInputtext.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') addTodo();
});

// 할일 추가 함수
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
    let $tdAddLiAmendBtn = document.createElement('button');
    $tdAddLiAmendBtn.classList.add('td-list-amend-btn');
    $tdAddLiAmendBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'; // 펜 아이콘
    $tdAddLi.appendChild($tdAddLiAmendBtn);

    // 우측에 삭제 버튼 추가
    let $tdAddLiDelBtn = document.createElement('button');
    $tdAddLiDelBtn.classList.add('td-list-del-btn');
    $tdAddLiDelBtn.innerHTML = '<i class="fa-solid fa-x"></i>'; // X 아이콘
    $tdAddLi.appendChild($tdAddLiDelBtn);

    // 삭제 버튼 클릭 -> 특정 할일 삭제 이벤트 실행
    $tdAddLiDelBtn.addEventListener('click', deleteTodo);

    // 수정 버튼 클릭 -> 특정 할일 수정 이벤트 실행
    $tdAddLiAmendBtn.addEventListener('click', amendTodo);
    

    // 완성된 li 태그를 ul 끝에 추가
    $tdUl.appendChild($tdAddLi);

    // input에 적힌 내용 지우기
    $tdInputtext.value = '';

    tdGoal();
}

// 특정 할일 삭제 함수
function deleteTodo(e) {
    let $tdDeleteLi = e.target.closest('li');
    $tdDeleteLi.remove();

    tdGoal();
}

// 수정 또는 완료 전 할일
const BEFORE_LIST = 'td-list-li-text';

// 특정 할일 수정 함수
function amendTodo(e) {
    const AFTER_AMEND = 'td-list-li-text td-amend-input';
    // 수정 타겟 li
    const $tdTargetLi = e.target.closest('li');
    // 타겟 li의 첫번째 자식의 class이름
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
    tdGoal();
}

// 할일 클릭하면 취소선 그어지는 함수
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
    tdGoal();
}

// 모든 할일 삭제 함수
const $tdDelBtn = document.querySelector('.td-del-btn');

$tdDelBtn.onclick = () => {
    // 삭제 의사 한번 더 확인
    if (confirm("모든 일정을 삭제하시겠습니까?") === true) {
        $tdUl.innerHTML = '';
    } else {
        return;
    }
    tdGoal();
}