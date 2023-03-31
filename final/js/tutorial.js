const $wrap = document.querySelector('.wrap');
const $tutorial = document.querySelector('.tutorial');
const $tutorial1 = document.querySelector('.tutorial1');

const $tutorial2 = document.querySelector('.tutorial2');
const $tutorial3 = document.querySelector('.tutorial3');

let clickFlag = false; 

$wrap.addEventListener('click', function(e) {
   
   $wrap.setAttribute('class', 'invisible');
   
       clickFlag = !clickFlag;
});

$tutorial.addEventListener('click', function(e) {
   
    $tutorial1.setAttribute('class', 'invisible');
    
        clickFlag = !clickFlag;
        e.stopPropagation();
 });


 // if(!clickFlag) {
    //     $tutorial1.setAttribute('class', 'invisible');
        
    // }else {
    //     $tutorial2.setAttribute('class', 'invisible');
    // } 
    // // else {
    // //     $wrap.classList.toggle('wrap');
    // // }

    export{$wrap,$tutorial,$tutorial1,$tutorial2,$tutorial3}