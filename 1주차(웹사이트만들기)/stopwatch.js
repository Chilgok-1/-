var tictok = 0;

const startBtn = document.querySelector('#start_watch');
const resetBtn = document.querySelector('#reset_watch');
const shown = document.querySelector('.stopwatch h1');

let a;

startBtn.onclick = function(){
    if (startBtn.textContent == "start"){
        startBtn.textContent = 'stop';
        a = setInterval(stopwatchfunc, 1000);
    }
    else{
        clearInterval(a);
        startBtn.textContent = 'start';
    }

}

resetBtn.onclick = function(){
    shown.textContent = '00:00'
}


let stopwatchfunc = function(){
    tictok = tictok + 1;
    var minutes = Math.floor(tictok/60);
    var seconds = tictok%60;

    if (minutes<10) minutes = '0'+ minutes;
    if (seconds<10) seconds = '0'+ seconds;

    shown.textContent = minutes + ':' + seconds;
}