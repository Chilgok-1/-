
const btn_start = document.querySelector('#start');
const btn_reset = document.querySelector('#reset');
const shownow = document.querySelector('.timer h1');
const timer_m = document.querySelector('#m_timer')
const timer_s = document.querySelector('#s_timer')
var tictok = 0;


let b;

btn_start.onclick = function(){
    if (btn_start.textContent == "start"){
        tictok= Number(timer_m.value)*60+Number(timer_s.value);
        btn_start.textContent = 'stop';
        b = setInterval(timerfunc, 1000);
    }
    else{
        tictok = 0;
        clearInterval(b);
        btn_start.textContent = 'start';
    }

}

btn_reset.onclick = function(){
    shownow.textContent = '00:00';
}


let timerfunc = function(){
    tictok = tictok -1;
    var minutes = Math.floor(tictok/60);
    var seconds = tictok%60;
    if(minutes == '0' & seconds == '0') alert('시간 끝남 알림!!!');


    if (minutes<10) minutes = '0'+ minutes;
    if (seconds<10) seconds = '0'+ seconds;

    shownow.textContent = minutes + ':' + seconds;
}