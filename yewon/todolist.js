// [ + ] 버튼 누르면 리스트에 추가

const $tdInputBtn = document.querySelector('.td-inputbtn'); // + 버튼
let $tdInputtext = document.querySelector('.td-inputtext'); // 입력한 할일
let $tdResult = document.querySelector('.td-result'); // 추가된 할일
const $tdlist = document.querySelector('.td-list'); // 할일 목록 ul 태그

$tdInputBtn.onclick = () => {
    console.log($tdInputtext);
    addTodo();
}

// 할일 추가 함수
function addTodo() {
    // 할일 아무것도 입력 안했을 때 입력 요청 띄우기
    if($tdInputtext.value === '') {
        alert('할일을 입력하세요!');
        $tdInputtext.focus();
        return;
    }
    // 입력한 할일로 li 태그 생성
    let $tdresult = document.createElement('li');
    console.log($tdresult);
    $tdresult.textContent = $tdInputtext.value;
    // li 태그를 ul 끝에 추가
    $tdlist.appendChild($tdresult);
    // li 태그 생성시 삭제[ X ] 버튼도 오른쪽에 추가
    
}

// [모두 삭제] 버튼 누르면 모든 리스트 삭제
const $tdDelBtn = document.querySelector('.td-del-btn');

$tdDelBtn.onclick = () => {
    alert("모든 일정을 삭제하시겠습니까?");
}