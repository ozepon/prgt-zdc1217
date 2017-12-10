window.onload = function() {
  if(pending) {
    // call未完成時はコールを表示しない
    var callList = document.getElementsByClassName('call_color');
    for(var i = 0; i < callList.length; i++) {
      callList[i].style.display = 'none';
    }

    // show anotetion
    document.getElementsByClassName('comming_soon')[0].style.display = 'block';

    // font size を変更する
    var p = document.getElementsByTagName("pre");
    window.app.preLyric = p[0];
    var defaultFontSize = 13;
    var maxFontSize = 20;
    var minFontSize = 8;
    console.log(window.app.preLyric.style.fontSize);

    // font size up
    window.app.fontSizeUp = function() {
      // 未設定の場合は初期化
      if(window.app.preLyric.style.fontSize) {
        window.app.preLyric.style.fontSize = defaultFontSize;
        console.log(window.app.preLyric.style.fontSize);
        return;
      } else if (window.app.preLyric.style.fontSize < maxFontSize){
        // fontSizeup
        window.app.preLyric.style.fontSize = window.app.preLyric.style.fontSize + 1;
        console.log(window.app.preLyric.style.fontSize);
      }
    }

    // font size down
    window.app.fontSizeDown = function() {
      console.log('down');
    }
  }
}