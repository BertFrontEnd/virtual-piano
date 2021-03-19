const playSoundKeyboard = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audio) {
    return;
  } else {
    audio.currentTime = 0;
    audio.play();
  }
};

const addActiveState = (e) => {
  const keys = document.querySelectorAll(`div[data-key="${e.keyCode}"]`);
  // remove
  console.log(keys);
  for (let key of keys) {
    key.classList.add('piano-active');
  }
};

const removeActiveState = (e) => {
  const keys = document.querySelectorAll(`div[data-key="${e.keyCode}"]`);
  // remove
  console.log(keys);
  for (let key of keys) {
    key.classList.remove('piano-active');
  }
};

export { playSoundKeyboard, addActiveState, removeActiveState };
