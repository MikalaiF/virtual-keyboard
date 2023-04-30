const letters = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete'],
['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', String.fromCharCode(92)],
['caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', String.fromCharCode(39), 'return'],
['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', String.fromCharCode(9650), 'shift'],
['fn', String.fromCharCode(8743), '⌥', '⌘', String.fromCharCode(160), '⌘', String.fromCharCode(9664), String.fromCharCode(9660), String.fromCharCode(9654), '⌥']];
//let letters = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 32];

function createWrapper() {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  return wrapper;
}
document.body.append(createWrapper());
const wrapper = document.querySelector('.wrapper');

// ----------------------Wrapper------------^
function createContainer1() {
  const container1 = document.createElement('div');
  container1.className = 'container1';
  return container1;
}

wrapper.appendChild(createContainer1());
const container1 = document.querySelector('.container1');
// ----------------------Container1------------^

function createTexArea() {
  const containerTextArea = document.createElement('textarea');
  containerTextArea.className = 'containerTextArea';
  return containerTextArea;
}

container1.appendChild(createTexArea());
const containerTextArea = document.querySelector('.containerTextArea');
// ----------------------containerTextArea------------^

function createDiv() {
  const containerKeyBoard = document.createElement('div');
  containerKeyBoard.className = 'containerKeyBoard';
  return containerKeyBoard;
}

container1.appendChild(createDiv());
const containerKeyBoard = document.querySelector('.containerKeyBoard');
// ----------------------containerKeyBoard------------^

function createLetter() {
  const span = document.createElement('span');
  span.className = 'letter';
  return span;
}
// ----------------------Letter------------^

function createLine() {
  const line = document.createElement('div');
  line.className = 'line';
  return line;
}
// ----------------------Line------------^

(function createKeyboard() {
  let out = '';
  for (let i = 0; i < letters.length; i++) {
    containerKeyBoard.appendChild(createLine());
    for (let j = 0; j < letters[i].length; j++) {
      const letter = containerKeyBoard.childNodes[i].appendChild(createLetter());
      letter.innerHTML = letters[i][j];
      if (letters[i][j] === 'delete') {
        letter.classList.add('delete');
      }
      if (letters[i][j] === 'tab') {
        letter.classList.add('tab');
      }
      if (letters[i][j] === 'caps lock') {
        letter.classList.add('caps_lock');
      }
      if (letters[i][j] === 'shift') {
        letter.classList.add('shift');
      }
      if (letters[i][j] === String.fromCharCode(160)) {
        letter.classList.add('space');
      }
      if (letters[i][j] === 'return') {
        letter.classList.add('return');
      }
      if (letters[i][j] === '⌘') {
        letter.classList.add('command');
      }
      if (letters[i][j] === String.fromCharCode(8743)) {
        letter.classList.add('control');
      }
      if (letters[i][j] === '⌥') {
        letter.classList.add('option');
      }
      if (letters[i][j] === 'fn') {
        letter.classList.add('fn');
      }
    }
  }
}());

// ----------------------Create------------^

//function init() {
//  let out = '';
//  for (let i = 0; i < letters.length; i++){
//    out += `<div class="letter"> ${String.fromCharCode(letters[i])}</div>`;
//  }
//  containerKeyBoard.innerHTML = out;
//}
//init()