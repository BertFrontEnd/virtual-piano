const keysPiano = document.querySelectorAll('.key');
const sharpsPiano = document.querySelectorAll('.sharp');
const pianoCollection = [...keysPiano, ...sharpsPiano];

const startSound = (e) => {
  e.target.classList.add('piano-active');
};

const stopSound = (e) => {
  e.target.classList.remove('piano-active');
};

const startCorrespondOver = (e) => {
  if (
    e.target.classList.contains('key') ||
    e.target.classList.contains('sharp')
  ) {
    // remove
    console.log(e.target);
    e.target.classList.add('piano-active');
  }

  pianoCollection.forEach((elem) => {
    elem.addEventListener('mouseover', startSound);
    elem.addEventListener('mouseout', stopSound);
  });
};

const stopCorrespondOver = () => {
  pianoCollection.forEach((elem) => {
    elem.classList.remove('piano-active');
    elem.removeEventListener('mouseover', startSound);
    elem.removeEventListener('mouseout', stopSound);
  });
};

export { startCorrespondOver, stopCorrespondOver };
