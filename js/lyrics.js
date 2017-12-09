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
}