function add_tr(table_id) { //행 추가
  let table_body = document.getElementById(table_id);
  let last_tr = table_body.lastElementChild;
  let tr_clone = last_tr.cloneNode(true); //*1)복제된 node 반환

  let rlNum = +tr_clone.firstElementChild.textContent;
  console.log(rlNum);
  tr_clone.firstElementChild.textContent = rlNum + 1;

  table_body.append(tr_clone);
  clean_first_tr(table_body.firstElementChild);
}

function clean_first_tr(firstTr) { //값 초기화
  let children = firstTr.children; //*2) 자식 요소가 포함된 HTMLCollection을 반환

  children = Array.isArray(children) ? children : Object.values(children); //*3)
  children.forEach(x => {
    if (x !== firstTr.lastElementChild) { //마지막child가 아닐때
      x.firstElementChild.value = ''; //td의 첫번째 child > input값 초기화
    }
  });
}

function remove_tr(This) { //행 삭제
  //*4)closet:현재 엘리멘트에서 가장 가까운 조상을 반환
  if (This.closest('tbody').childElementCount == 1) {
    alert("삭제할 수 없습니다.");
  } else {
    This.closest('tr').remove(); //삭제
  }

}

let table = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// 삭제할 행의 인덱스
let rowIndex = 1;

// 행 삭제
table.splice(rowIndex, 1);

// 결과 출력
console.log(table);




  

//순번 증가, 감소
// var count = 0;

// function increase() {
//   count = count + 1;
//   document.querySelector(".add").innerText = count;
// }

// function decrease(){
//   count = count+1;
//   document.querySelector(".delete").innerText=count;
// }

// function count(type)  {
//   // 결과를 표시할 element
//   const resultElement = document.getElementById('rl_number');
  
//   // 현재 화면에 표시된 값
//   let number = resultElement.innerText;
  
//   // 더하기/빼기
//   if(type === 'add') {
//     number = parseInt(number) + 1;
//   }else if(type === 'delete')  {
//     number = parseInt(number) - 1;
//   }
  
//   // 결과 출력
//   resultElement.innerText = number;
// }