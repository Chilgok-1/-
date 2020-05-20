function change(){
    var Result =  document.getElementById('firstWord');
    var Put = document.getElementById('input');
    var Life = document.getElementById('lifecnt');

    var Last = Result.textContent[Result.textContent.length-1];
    var First = Put.value[0];
    if(Life.textContent.length == 0){
        Result.innerHTML = "생명이 없어요ㅜ"
    }
    else{
        if(Last != '!'){
            if(Last == First) {
                Result.innerHTML += '->' + Put.value
            }
            else{
                Result.innerHTML +=  '<br>' + '틀렸어!!'
                Life.innerHTML = Life.textContent.replace('💖','');
            }
        }
        else{
            Last = Result.textContent[Result.textContent.length-6];
            if(Last == First) {
                Result.innerHTML += '<br>'+'->' + Put.value
            }
            else{
                Result.innerHTML +=  '<br>' + '틀렸어!!'
                Life.innerHTML = Life.textContent.replace('💖','');

            }
        }
    }
    Put.focus();
    Put.value = '';
      
}