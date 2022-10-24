const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', reduceBtnClick);
incrementBtn.addEventListener('click', addBtnClick);

function reduceBtnClick(event) {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

function addBtnClick(event) {
    counterValue += 1;
    valueEl.textContent = counterValue;
}
