function updown(){
    var result_display = document.getElementById('result');
    var inputTag = Number(document.getElementById('input').value);
    
    if(life!=0){
        life -=1;
        if (inputTag < answer){
            result_display.innerHTML += '<br>'+'♥' + life + '<br>' + inputTag + '  보다  UP';
        }
        else if(inputTag == answer){
            result_display.innerHTML += '<br>' +inputTag + '  정답입니다!!';
        }
        else{
            result_display.innerHTML += '<br>'+'♥' + life + '<br>' + inputTag +'  보다  DOWN';

        }
    }
    else {
        result_display.innerHTML += "<br> 다음기회에ㅜㅜ"
    }
}