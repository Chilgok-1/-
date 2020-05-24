function startclock(){
        
    var date = new Date();
    var hours = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var Clock = document.querySelector('.clock h1');

    if(hours<10) hours = '0'+hours;
    if(minute<10) minute = '0'+minute;
    if(second<10) second = '0'+second;

    Clock.textContent = hours + ':'+minute +':'+ second;
}
setInterval(startclock , 1000);