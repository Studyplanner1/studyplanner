
const clock = document.getElementById("clock");

function getClock() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth()+1;
    const date = now.getDate();
    const hour= String(now.getHours()).padStart(2,"0");
    const minutes = String(now.getMinutes()).padStart(2,"0");
    const seconds = String(now.getSeconds()).padStart(2,"0");
    //console.log(year);

    clock.innerText = `TODAY: ${year}년${month}월${date}일 
                                ${hour}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);



