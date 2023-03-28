// [ + ] 버튼 누르면 리스트에 추가

const $tdInputBtn = document.querySelector('.td-inputbtn'); // + 버튼
let $tdInputtext = document.querySelector('.td-inputtext'); // 입력한 할일
// let $tdAddLi = document.querySelector('.td-result'); // 추가된 할일
const $tdList = document.querySelector('.td-list'); // 할일 목록 ul 태그

$tdInputBtn.onclick = () => {
    // console.log($tdInputtext);
    addTodo();
}

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
    $tdAddLiText.setAttribute('class', 'td-list-li-text');
    $tdAddLi.appendChild($tdAddLiText);
    // $tdAddLi.textContent = $tdInputtext.value;

    $tdAddLi.addEventListener('click', finishTodo);

    // 우측에 수정 버튼 추가 (추가예정)
    let $tdAddLiAmendBtn = document.createElement('button');
    $tdAddLiAmendBtn.setAttribute('class', 'td-list-amend-btn');
    $tdAddLiAmendBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'; // 펜 아이콘
    $tdAddLi.appendChild($tdAddLiAmendBtn);

    // 우측에 삭제 버튼 추가
    let $tdAddLiDelBtn = document.createElement('button');
    $tdAddLiDelBtn.setAttribute('class', 'td-list-del-btn');
    $tdAddLiDelBtn.innerHTML = '<i class="fa-solid fa-x"></i>'; // X 아이콘
    $tdAddLi.appendChild($tdAddLiDelBtn);

    // 삭제 버튼 클릭 -> 특정 할일 삭제 이벤트 실행
    $tdAddLiDelBtn.addEventListener('click', deleteTodo);

    // 수정 버튼 클릭 -> 특정 할일 수정 이벤트 실행
    $tdAddLiAmendBtn.addEventListener('click', amendTodo);
    // 완성된 li 태그를 ul 끝에 추가
    $tdList.appendChild($tdAddLi);
}

// 특정 할일 삭제 함수
function deleteTodo(e) {
    let $tdDeleteLi = e.target.closest('li');
    $tdDeleteLi.remove();
}

// 특정 할일 수정 함수
function amendTodo(e) {
    const BEFORE_AMEND = 'td-list-li-text';
    const AFTER_AMEND = 'td-list-li-text td-amend-input';
    // 수정 타겟 li
    let $tdTargetLi = e.target.closest('li');
    // 타겟 li의 첫번째 자식의 class이름
    let $tdTargetLiChildClass = e.target.closest('li').firstElementChild.className;
    if ($tdTargetLiChildClass === BEFORE_AMEND) {
        // 수정 전 펜 버튼 클릭
        $tdAmendLi = $tdTargetLi.firstElementChild; // span 태그
        $tdAmendInput = document.createElement('input');
        $tdAmendInput.setAttribute('type', 'text');
        $tdAmendInput.setAttribute('class', AFTER_AMEND);
        $tdAmendInput.value = $tdAmendLi.textContent;
        $tdTargetLi.replaceChild($tdAmendInput, $tdAmendLi);
        $tdAmendInput.focus();
    } else if ($tdTargetLiChildClass === AFTER_AMEND) {
        // 수정 후 펜 버튼 클릭
        $tdAmendLi.textContent = $tdAmendInput.value;
        $tdTargetLi.replaceChild($tdAmendLi, $tdAmendInput);
        $tdAmendInput.remove();
    }
}

// 할일 클릭하면 취소선 그어지는 함수
function finishTodo(e) {
    $tdFinishTarget = e.target;
    const BEFORE_FINISH = 'td-list-li-text';
    const AFTER_FINISH = 'td-list-li-text finish-todo';
    if ($tdFinishTarget.className === BEFORE_FINISH) {
        // 취소선 그은 후에는 span 태그에 finish-todo 클래스 추가됨
        $tdFinishTarget.setAttribute('class', AFTER_FINISH);
        $tdFinishTarget.style.textDecoration = 'line-through';
    } else if ($tdFinishTarget.className === AFTER_FINISH) {
        // 취소선 그은 후 다시 클릭하면 finish-todo 클래스 삭제 + 원상태로 롤백
        $tdFinishTarget.setAttribute('class', BEFORE_FINISH);
        $tdFinishTarget.style.textDecoration = 'none'
    }
}

// 모든 할일 삭제 함수
const $tdDelBtn = document.querySelector('.td-del-btn');

$tdDelBtn.onclick = () => {
    // 삭제 의사 한번 더 확인
    if (confirm("모든 일정을 삭제하시겠습니까?") === true) {
        $tdList.innerHTML = '';
    } else {
        return;
    }
}