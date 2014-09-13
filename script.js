document.getElementById('gofullscreen').onclick = function () {
    launchFullscreen(document.body);
}

var video = document.querySelector('video');
var ad = document.getElementById('ad');
var adBtn = ad.querySelector('button');

// show ad on pause in fullscreen mode, hide otherwise
video.addEventListener('pause', changeAdState, false);
video.addEventListener('play', changeAdState, false);

document.addEventListener('webkitfullscreenchange', changeAdState, false);
document.addEventListener('mozfullscreenchange', changeAdState, false);
document.addEventListener('msfullscreenchange', changeAdState, false);

function isFullScreen() {
    return ['webkit', 'moz', 'ms'].some(function (prefix) {
        var prop = document[prefix + 'FullscreenElement'];
        return Boolean(prop);
    });
}

function launchFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function changeAdState() {
    if (!isFullScreen() || !video.paused) {
        ad.classList.add('hidden');
    } else {
        ad.classList.remove('hidden');
    }
}

adBtn.addEventListener('click', function () {
    video.play();
}, false);