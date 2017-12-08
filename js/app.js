// site title
var siteTitle = '\\ PRGTのコール /'

// api install
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var videoId = 'w9u2SkIVRZg'; 
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function createPlayer(videoId) {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: videoId,
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
  createPlayer(videoId);  
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
