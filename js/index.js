const letters = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete'],
  ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', String.fromCharCode(92)],
  ['capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', String.fromCharCode(39), 'return'],
  ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', String.fromCharCode(9650), 'shiftR'],
  ['fn', String.fromCharCode(8743), '⌥', '⌘', ' ', '⌘', String.fromCharCode(9664), String.fromCharCode(9660), String.fromCharCode(9654), '⌥']];

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
// eslint-disable-next-line no-unused-vars
const containerTextArea = document.querySelector('.containerTextArea');

// ----------------------containerTextArea------------^

function createDiv() {
  const containerKeyBoard = document.createElement('div');
  containerKeyBoard.className = 'containerKeyBoard';
  return containerKeyBoard;
}

container1.appendChild(createDiv());
// eslint-disable-next-line no-unused-vars
const containerKeyBoard = document.querySelector('.containerKeyBoard');
// ----------------------containerKeyBoard------------^

// eslint-disable-next-line no-unused-vars
function createLetter() {
  const span = document.createElement('span');
  return span;
}
// ----------------------Letter------------^

// eslint-disable-next-line no-unused-vars
function createLine(l) {
  const line = document.createElement('div');
  line.className = `line${l}`;
  return line;
}
// ----------------------Line------------^

(function createKeyboard() {
  let out = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < letters.length; i++) {
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < letters[i].length; j++) {
      if (letters[i][j] === 'tab' || letters[i][j] === 'capslock' || letters[i][j] === 'shift' || letters[i][j] === 'fn') {
        out += '<div class = "clearfix"></div>';
      }
      out += `<div class = " letter" data-id = "${letters[i][j]}">${letters[i][j]}</div>`;
      const line = document.querySelector('.containerKeyBoard');
      
      line.innerHTML = out;
      console.log(document.querySelector('[data-id]'));
    }
  }
}());

// ----------------------Create------------^

//document.onkeydown = function (event) {
//  document.querySelectorAll('.containerKeyBoard .letter').forEach((el) => {
//    el.classList.remove('active');
//  });
//  document.querySelector(`.containerKeyBoard .letter[data="${event.key}"]`).classList.add('active');
//};

//document.querySelectorAll('.containerKeyBoard .letter').forEach((el) => {
//  // eslint-disable-next-line no-param-reassign
//  el.onclick = function (event) {
//    // eslint-disable-next-line no-shadow
//    console.log(event);
//    document.querySelectorAll('.containerKeyBoard .letter').forEach((el) => {
//      el.classList.remove('active');
//    });
//    const code = el.getAttribute('data');
//    this.classList.add('active');
//    if (code === ' ') {
//      this.classList.add('active');
//    }
//    if (code === String.fromCharCode(8743)) {
//      this.classList.add('active');
//    }
//    console.log(code);
//  };
//});
const dataLetters = Array.from(document.querySelectorAll('[data-id]'));
console.log(dataLetters)

function init2() {
  containerTextArea.addEventListener('keydown', keyDownHandler);
  //containerTextArea.addEventListener('keyup', keyUpHandler);
}
init2();

function keyDownHandler(event) {
  event.preventDefault();
  let letter = dataLetters.find((x) => console.log(x.dataset))
  console.log(letter)
}

//function keyUpHandler(event) {
  
//}