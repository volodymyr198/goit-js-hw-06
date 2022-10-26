function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector('#controls');
const inputEl = document.getElementsByTagName('input');
const boxesEl = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

function createBoxes(amount) {
    let allDivEl = [];
    let size = 30;
    for (let i = 0; i < amount; i += 1) {
        const createBoxesEl = document.createElement('div');
        createBoxesEl.style.width = `${size}px`;
        createBoxesEl.style.height = `${size}px`;
        createBoxesEl.style.backgroundColor = getRandomHexColor();
        size += 10;
        allDivEl.push(createBoxesEl);
    }
    boxesEl.append(...allDivEl);
}

const onBtnCreateClick = event => {
    createBoxes(controlsEl.firstElementChild.value);
};
function destroyBoxes() {
    boxesEl.innerHTML = '';
}
const onBtnDestroyClick = event => {
    destroyBoxes();
};

btnCreate.addEventListener('click', onBtnCreateClick);
btnDestroy.addEventListener('click', onBtnDestroyClick);
