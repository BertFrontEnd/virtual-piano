function activateFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }
  // remove
  console.log('open');
}

function deactivateFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
  // remove
  console.log('close');
}

export { activateFullscreen, deactivateFullscreen };
