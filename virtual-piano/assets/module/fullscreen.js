const activateFullscreen = () => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }
  // remove
  console.log('open');
};

const deactivateFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
  // remove
  console.log('close');
};

export { activateFullscreen, deactivateFullscreen };
