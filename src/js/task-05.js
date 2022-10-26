const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
    return inputEl.value === ''
        ? (outputEl.textContent = 'Anonymous')
        : (outputEl.textContent = inputEl.value);
});
