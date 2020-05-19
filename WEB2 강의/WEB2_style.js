   // 매소드 이용을 위한 객체 설정
   var night = {
    back : 'black',
    color : 'white',
    ol : 'powderblue',
    ch : 'day'
}
var day = {
    back : 'white',
    color : 'black',
    ol : 'blue',
    ch : 'night'
}
// Day, night 통합 함수 사용
function Total(a,setting){
    var target = document.querySelector('body')
    var o_list = document.querySelector('ol')
    target.style.backgroundColor = setting.back;
    target.style.color =setting.color;
    o_list.style.color =setting.ol;
    a.value = setting.ch;
}