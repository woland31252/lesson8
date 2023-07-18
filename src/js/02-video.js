import Vimeo from '@vimeo/player';
import LodashTrotle from 'lodash.throttle';
import {save, load} from "./02-videostorage.js"
const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);


// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
let timeupdate = {
    duration: 61.857,
    percent: 0.049,
    seconds: 3.034,
  }
const onPlay = function (data) {
  save(STORAGE_KEY, value);

  // data is an object containing properties specific to that event
};

player.on('play', onPlay);

// If later on you decide that you don’t need to listen for play anymore.
player.off('play', onPlay);

// Alternatively, `off` can be called with just the event name to remove all
// listeners.
player.off('play');