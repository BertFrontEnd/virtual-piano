const toggleButton = (node, e) => {
  if (!e.target.classList.contains('btn-active')) {
    node.forEach((el) => {
      el.classList.remove('btn-active');
      /* e.target.setAttribute('disabled', ''); */
      el.removeAttribute('disabled');
    });
    e.target.classList.add('btn-active');
    e.target.setAttribute('disabled', 'disabled');
  }
};

const toggleSymbol = (node) => {
  /* getComputedStyle(document.querySelector('.node'), ':after').display */
  node.classList.toggle('pseudo-before');
  node.classList.toggle('pseudo-after');
};

export { toggleButton, toggleSymbol };
