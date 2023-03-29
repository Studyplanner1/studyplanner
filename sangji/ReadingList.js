function add_tr(table_id) {//행 추가
  let table_body = document.getElementById(table_id);
  let first_tr   = table_body.firstElementChild;
  let tr_clone   = first_tr.cloneNode(true);//*1)복제된 node 반환

  table_body.append(tr_clone);
  clean_first_tr(table_body.firstElementChild);
}

function clean_first_tr(firstTr) {//값 초기화
  let children = firstTr.children;//*2) 자식 요소가 포함된 HTMLCollection을 반환
  
  children = Array.isArray(children) ? children : Object.values(children);//*3)
  children.forEach(x=>{
      if(x !== firstTr.lastElementChild){//마지막child가 아닐때
          x.firstElementChild.value = '';//td의 첫번째 child > input값 초기화
      }
  });
}

function remove_tr(This) {//행 삭제
  //*4)closet:현재 엘리멘트에서 가장 가까운 조상을 반환
  if(This.closest('tbody').childElementCount == 1)
  {
      alert("삭제할 수 없습니다.");
  }else{
      This.closest('tr').remove();//삭제
  }
}