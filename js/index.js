const letters = ['1', '2', '3', '4', '5'];

function createDiv() {
  const container = document.createElement('div');
  container.className = 'container';
  return container;
}

document.body.appendChild(createDiv());

function createLetter() {
  const container = document.createElement('div');
  container.className = 'letter';
  return container;
}

// eslint-disable-next-line no-plusplus
for (let i = 0; i < letters.length; i++) {
  const newLetter = document.body.querySelector('.container').appendChild(createLetter('letter'));
  newLetter.innerHTML = letters[i];
}
