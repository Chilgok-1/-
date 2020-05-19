function game(){
    var result_display = document.getElementById('369');
    var number = 0;
    while(number != 100){
        number += 1;
        var temp1 = number%10;
        var temp2 = (number-temp1)*0.1;
        if ((temp1 == 3) || (temp1 == 6) || (temp1 == 9)){
            result_display.innerHTML += '짝';
            if((temp2 ==3) || (temp2 == 6) || (temp2 ==9)){
                result_display.innerHTML += '짝<br>'
            }
            else{
                result_display.innerHTML += '<br>'    
            }
        }

        else if((temp2 ==3) || (temp2 == 6) || (temp2 ==9)){
            result_display.innerHTML += '짝' + '<br>';
        }

        else{
            result_display.innerHTML += number + '<br>'
        }
    }
}