import {
  activateFullscreen,
  deactivateFullscreen,
} from './assets/module/fullscreen.js';

import { toggleButton, toggleSymbol } from './assets/module/buttons.js';

const toFullscreenButton = document.querySelector('.open-fullscreen');
const fromFullscreenButton = document.querySelector('.close-fullscreen');

const buttonsContainer = document.querySelector('.btn-container');
const buttons = document.querySelectorAll('.btn');

const keys = document.querySelectorAll('.key');
const sharps = document.querySelectorAll('.sharp');

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

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    toFullscreenButton.style.display = 'block';
    fromFullscreenButton.style.display = 'none';
  }
  // remove
  console.log('Esc');
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

    // remove
    console.log('toggle');
  });
}

/* console.log(
  (getComputedStyle(document.querySelector('.key'), 'after').display = 'block'),
);
 */
