function stop() {
    var txt;
    var password = prompt("비밀번호를 입력하세요 :", "1234");
    if (password == '1234') {
      txt = "정답입니다";
    } else {
      txt = "다시 입력해주세요";
         alert(txt);
        window.stop()
       }
  }