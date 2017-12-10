window.onload = function() {
  if(pending) {
    // call未完成時はコールを表示しない
    var callList = document.getElementsByClassName('call_color');
    for(var i = 0; i < callList.length; i++) {
      callList[i].style.display = 'none';
    }
    // show anotetion
    document.getElementsByClassName('comming_soon')[0].style.display = 'block';
  }
  

  
  // font size 変更周り　--------
  var preLyric;
  var defaultFontSize = 0.6;
  var maxFontSize = 1.5;
  var minFontSize = 0.4;
 
  // font size up
  function fontSizeUp() {
    var sizeNum = parseFloat(preLyric.style.fontSize.replace(/px|rem|em/,''));
    
    // 未設定の場合は初期化
    if(!sizeNum) {
      preLyric.style.fontSize = (defaultFontSize + 0.1) + 'rem';
      console.log(preLyric.style.fontSize);
    } else if (sizeNum < maxFontSize){
      // fontSizeup
      preLyric.style.fontSize = (sizeNum + 0.1) + 'rem';
      console.log(preLyric.style.fontSize);
    }
  }
 
  // font size down
  function fontSizeDown() {
    var sizeNum = parseFloat(preLyric.style.fontSize.replace(/px|rem|em/,''));
    
    // 未設定の場合は初期化
    if(!sizeNum) {
      preLyric.style.fontSize = (defaultFontSize - 0.1) + 'rem';
      console.log(preLyric.style.fontSize);
    } else if (minFontSize < sizeNum){
      // fontSizeup
      preLyric.style.fontSize = (sizeNum - 0.1) + 'rem';
      console.log(preLyric.style.fontSize);
    }
  }
  //lyricを表示するpre
  var p = document.getElementsByTagName("pre");
  preLyric = p[0];

  // functionをbind
  var fontSizeUpButton = document.getElementById('fontSizeUp');
  fontSizeUpButton.addEventListener('click', function() {
    fontSizeUp();
  });
  var fontSizeDownButton = document.getElementById('fontSizeDown');
  fontSizeDownButton.addEventListener('click', function() {
    fontSizeDown();
  });


}