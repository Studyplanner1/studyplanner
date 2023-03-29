//버튼의 요소 노드 취득
const menuBtn = document.querySelector('.gnb-btn');
const closeBtn = document.querySelector('#gnb .gnb-close');

const gnb = document.querySelector('#gnb');

//클릭 이벤트 생성
menuBtn.addEventListener('click', () => {
    alert('버튼클리익');
    gnb.classList.add('on');
});

closeBtn.addEventListener('click', () => {
    gnb.classList.remove('on');
});