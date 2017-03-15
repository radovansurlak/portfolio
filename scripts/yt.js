var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    playerVars: {
     'autoplay': 0,
     'controls': 1,
     'autohide': 1,
     'modestbranding': 2,
     'showinfo': 0,
     'rel' : 0
   },
    width: '640',
    videoId: 'Go-UiFejZ0I',
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  var video = event.target;
  video.playVideo();
  video.mute();
  video.setLoop = true;

}
