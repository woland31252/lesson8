import Vimeo from '@vimeo/player';
import LodashTrotle from 'lodash.throttle';
import {save, load} from "./storage"
const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', LodashTrotle(onPlay, 1000));
function onPlay({seconds}) {
  console.log(seconds);
  save(STORAGE_KEY, seconds);
};
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
const currentTime = load(STORAGE_KEY);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

