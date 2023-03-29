//버튼의 요소 노드 취득
// 햄버거 버튼
const menuBtn = document.querySelector('.gnb-btn'); 
// 사이드바 < 버튼
const closeBtn = document.querySelector('#gnb .gnb-close');
// nav 태그
const gnb = document.querySelector('#gnb');

//클릭 이벤트 생성
menuBtn.addEventListener('click', () => {
    gnb.classList.add('on', 'active');
});

closeBtn.addEventListener('click', () => {
    gnb.classList.remove('on', 'active');
});