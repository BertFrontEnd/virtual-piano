import {
  activateFullscreen,
  deactivateFullscreen,
} from './assets/module/fullscreen.js';

import { toggleButton, toggleSymbol } from './assets/module/buttons.js';

import {
  playSoundKeyboard,
  addActiveState,
  removeActiveState,
} from './assets/module/keyboard.js';

import {
  playSoundMouse,
  startCorrespondOver,
  stopCorrespondOver,
} from './assets/module/mouse.js';

const toFullscreenButton = document.querySelector('.open-fullscreen');
const fromFullscreenButton = document.querySelector('.close-fullscreen');

const buttons = document.querySelectorAll('.btn');

const keys = document.querySelectorAll('.key');
const sharps = document.querySelectorAll('.sharp');

const pianoContainer = document.querySelector('.piano-container');

toFullscreenButton.addEventListener('click', () => {
  activateFullscreen();
  fromFullscreenButton.style.display = 'block';
  toFullscreenButton.style.display = 'none';
});

fromFullscreenButton.addEventListener('click', () => {
  deactivateFullscreen();
  toFullscreenButton.style.display = 'block';
  fromFullscreenButton.style.display = 'none';
});

window.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    toFullscreenButton.style.display = 'block';
    fromFullscreenButton.style.display = 'none';
  }
});

for (let button of buttons) {
  button.addEventListener('click', (e) => {
    toggleButton(buttons, e);

    for (let key of keys) {
      toggleSymbol(key);
    }

    for (let sharp of sharps) {
      toggleSymbol(sharp);
    }
  });
}

let down = false;

window.addEventListener('keydown', (e) => {
  if (down) {
    return;
  } else {
    down = true;
  }
  playSoundKeyboard(e);
  addActiveState(e);
});

window.addEventListener('keyup', (e) => {
  down = false;
  removeActiveState(e);
});

pianoContainer.addEventListener('mousedown', startCorrespondOver);
pianoContainer.addEventListener('mouseup', stopCorrespondOver);

pianoContainer.addEventListener('mousedown', playSoundMouse);
