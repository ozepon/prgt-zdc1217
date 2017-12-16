// site title
var siteTitle = '\\ PRGTのコール /'

// songs
var songs = {
  setuna_sora: {
    songName: 'セツナソラ'
    ,path: 'setuna_sora.html'
    ,videoKey: 'w9u2SkIVRZg'
  }
  ,zero_ichi: {
    songName: '01-ゼロイチ'
    ,path: 'zero_ichi.html'
    ,videoKey:'S1AP-AX8Mds'
  }
  ,dod: {
    songName: 'Dream on, Dreamers'
    ,path: 'dod.html'
    ,videoKey:'PNF3fKdEErA'
  }
  ,dangan: {
    songName: '弾丸ハイジャンプ'
    ,path: 'dangan.html'
    ,videoKey:'8DQPK25dQQc'
  }
  ,mousou_chu: {
    songName: '妄想Chu⤴︎'
    ,path: 'mousou_chu.html'
    ,videoKey: 'VpSE3h_M7yU'
  }
}

// api install
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function createPlayer(videoIdKey) {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: videoIdKey,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: {
      // controls: 0, // UIを非表示にする
      disablekb: 0, // キーボードによる操作を不可にする
      fs: 0, // フルスクリーンボタンを消す
      iv_load_policy: 3, // アノテーションを非表示にする
      modestbranding: 1, // ロゴを非表示にする
      playsinline: 1,
      rel: 0, // 関連動画を非表示にする
      showinfo: 0 // インフォメーションを非表示にする
    }
  });
}

function onYouTubeIframeAPIReady() {
  var key = getUrlVars()['song'];
  var videoIdKey = songs[key]['videoKey'];

  // var videoIdKey = document.getElementsByTagName('body')[0].getAttribute('data-page-name');
  createPlayer(videoIdKey);
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  // ios safariは動かないよー
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    // setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

/**
 * lyricsのheightを演算して返却(px)
 * @returns {string} lyricsHeightPx
 */
function getLyricsHeight() {
  var lyricsHeightPx = '100';
  var header = document.getElementsByTagName('header')[0];
  var youtubeWrap = document.getElementsByClassName('youtube_wrap')[0];

  var windowHeight = window.innerHeight;

  return (windowHeight - header.offsetHeight - youtubeWrap.offsetHeight) + 'px';
}
/**
 * URL解析して、クエリ文字列を返す
 * @returns {Array} クエリ文字列
 */
function getUrlVars() {
    var vars = [], max = 0, hash = "", array = "";
    var url = window.location.search;

        //?を取り除くため、1から始める。複数のクエリ文字列に対応するため、&で区切る
    hash  = url.slice(1).split('&');    
    max = hash.length;
    for (var i = 0; i < max; i++) {
        array = hash[i].split('=');    //keyと値に分割。
        vars.push(array[0]);    //末尾にクエリ文字列のkeyを挿入。
        vars[array[0]] = array[1];    //先ほど確保したkeyに、値を代入。
    }

    return vars;
}