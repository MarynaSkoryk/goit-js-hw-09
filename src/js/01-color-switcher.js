function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  startBtn: document.querySelector('button[data-start'),
  stopBtn: document.querySelector('button[data-stop'),
};

let intervalID = null;

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

function onStartClick() {
  onStartBtnDisabled();
  intervalID = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopClick() {
  onStopBtnDisabled();
  clearInterval(intervalID);
}

function onStartBtnDisabled() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function onStopBtnDisabled() {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}
