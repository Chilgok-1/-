const s_clock = document.getElementById('sclock');
const s_stop = document.getElementById('sstopwatch');
const s_timer = document.getElementById('stimer');
const clock = document.querySelector('.clock');
const stopwatch = document.querySelector('.stopwatch');
const timer = document.querySelector('.timer');

function display(self){
    clock.style.display = 'none';
    stopwatch.style.display = 'none';
    timer.style.display = 'none';
    self.style.display = 'block';
}
s_clock.onclick = function(){
    display(clock)
}
s_stop.onclick = function(){
    display(stopwatch);
}
s_timer.onclick = function(){
    display(timer);
}