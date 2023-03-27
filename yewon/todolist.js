// [ + ] 버튼 누르면 리스트에 추가

const $tdInputBtn = document.querySelector('.td-inputbtn'); // + 버튼
let $tdInputtext = document.querySelector('.td-inputtext'); // 입력한 할일
// let $tdAddLi = document.querySelector('.td-result'); // 추가된 할일
const $tdlist = document.querySelector('.td-list'); // 할일 목록 ul 태그

$tdInputBtn.onclick = () => {
    console.log($tdInputtext);
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
    // 입력한 할일로 li 태그 생성
    let $tdAddLi = document.createElement('li');
    $tdAddLi.setAttribute('class', 'td-list-li');

    // li 태그 안에 p 태그 생성 - 할일 텍스트
    let $tdAddLiText = document.createElement('span')
    $tdAddLiText.textContent = $tdInputtext.value;
    $tdAddLiText.setAttribute('class', 'td-list-li-text');
    $tdAddLi.appendChild($tdAddLiText);
    // $tdAddLi.textContent = $tdInputtext.value;

    // li 태그 안에 삭제[ X ] 버튼 생성
    let $tdAddLiDelBtn = document.createElement('button');
    $tdAddLiDelBtn.setAttribute('class', 'td-list-del-btn');
    $tdAddLiDelBtn.innerHTML = '<i class="fa-solid fa-x"></i>';
    $tdAddLi.appendChild($tdAddLiDelBtn);

    // X 버튼 누르면 리스트 지우기 이벤트 실행
    $tdAddLiDelBtn.addEventListener('click', deleteTodo);

    // 완성된 li 태그를 ul 끝에 추가
    $tdlist.appendChild($tdAddLi);
}

// 할일 삭제하는 함수
// X 버튼 눌렀을 때 동작하는 핸들러
function deleteTodo(e) {
    // console.log(e);
    // li 태그 지우기
    if (e.target.className === 'fa-solid fa-x') {
        // i 태그 눌렀을 때 li 삭제
        let $deleteLi = e.target.parentElement.parentElement;
        $deleteLi.remove();
    } else {
        // button 태그 눌렀을 때 li 삭제
        let $deleteLi = e.target.parentElement;
        $deleteLi.remove();
    }
}

// [모두 삭제] 버튼 누르면 모든 리스트 삭제
const $tdDelBtn = document.querySelector('.td-del-btn');

$tdDelBtn.onclick = () => {
    alert("모든 일정을 삭제하시겠습니까?");
}