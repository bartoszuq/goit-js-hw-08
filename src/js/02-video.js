import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});
player.on('pause', function () {
  console.log('paused the video!');
});

function storageTime(data) {
  const { seconds } = data;
  console.log(`${seconds}s`);
  localStorage.setItem('videoplayer-current-time', seconds);
  return seconds;
}
function loadTime() {
  const lastSavedTime = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  );
  player.setCurrentTime(lastSavedTime);
}

player.on('timeupdate', throttle(storageTime, 1000));
window.addEventListener('load', loadTime);
